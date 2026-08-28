import initSqlJs from 'sql.js'
import sqlWasmUrl from 'sql.js/dist/sql-wasm.wasm?url'

const STORAGE_KEY = 'dogourmet_test_results_sqlite_v1'

let dbPromise

const escapeCsvValue = (value) => {
  const normalized = value == null ? '' : String(value)
  return `"${normalized.replace(/"/g, '""')}"`
}

const persistDatabase = (db) => {
  const bytes = db.export()
  const binary = Array.from(bytes).map((byte) => String.fromCharCode(byte)).join('')
  localStorage.setItem(STORAGE_KEY, btoa(binary))
}

const loadDatabase = async () => {
  if (dbPromise) {
    return dbPromise
  }

  const SQL = await initSqlJs({
    locateFile: () => sqlWasmUrl,
  })

  const saved = localStorage.getItem(STORAGE_KEY)
  const db = saved
    ? new SQL.Database(Uint8Array.from(atob(saved), (char) => char.charCodeAt(0)))
    : new SQL.Database()

  db.run(`
    CREATE TABLE IF NOT EXISTS results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL,
      nombre TEXT,
      correo TEXT,
      hospital TEXT,
      ciudad TEXT,
      telefono TEXT,
      especialidad TEXT,
      team TEXT,
      answers TEXT,
      answer_letters TEXT,
      result_letter TEXT,
      result_label TEXT,
      result_image TEXT,
      metadata TEXT
    )
  `)

  dbPromise = db
  return db
}

export const saveTestResult = async (record) => {
  const db = await loadDatabase()

  db.run(
    `INSERT INTO results (
      created_at,
      nombre,
      correo,
      hospital,
      ciudad,
      telefono,
      especialidad,
      team,
      answers,
      answer_letters,
      result_letter,
      result_label,
      result_image,
      metadata
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )`,
    [
      record.created_at,
      record.nombre,
      record.correo,
      record.hospital,
      record.ciudad,
      record.telefono,
      record.especialidad,
      record.team,
      JSON.stringify(record.answers || []),
      record.answer_letters || (record.answers || []).join(''),
      record.result_letter,
      record.result_label,
      record.result_image,
      JSON.stringify(record.metadata || {}),
    ]
  )

  persistDatabase(db)
}

export const getAllTestResults = async () => {
  const db = await loadDatabase()
  const rows = db.exec(`
    SELECT id, created_at, nombre, correo, hospital, ciudad, telefono, especialidad, team, answers, answer_letters, result_letter, result_label, result_image, metadata
    FROM results
    ORDER BY id DESC
  `)

  if (!rows.length) {
    return []
  }

  const columns = rows[0].columns
  return rows[0].values.map((row) => {
    return columns.reduce((accumulator, column, index) => {
      accumulator[column] = row[index]
      return accumulator
    }, {})
  })
}

export const getSavedResultsCount = async () => {
  const db = await loadDatabase()
  const result = db.exec('SELECT COUNT(*) as total FROM results')
  return result[0]?.values?.[0]?.[0] ?? 0
}

export const clearAllTestResults = async () => {
  const db = await loadDatabase()
  db.run('DELETE FROM results')
  localStorage.removeItem(STORAGE_KEY)
  dbPromise = null
}

export const exportTestResultsCsv = async (recordsOverride = null) => {
  const results = recordsOverride ?? (await getAllTestResults())

  if (!results.length) {
    return null
  }

  const headers = [
    'id',
    'created_at',
    'nombre',
    'correo',
    'hospital',
    'ciudad',
    'telefono',
    'especialidad',
    'team',
    'answers',
    'answer_letters',
    'result_letter',
    'result_label',
    'result_image',
    'metadata',
  ]

  const csvRows = [headers.join(',')]

  results.forEach((record) => {
    const row = headers.map((header) => {
      const rawValue = record[header]
      const value = typeof rawValue === 'string' ? rawValue : rawValue ?? ''
      return escapeCsvValue(value)
    })
    csvRows.push(row.join(','))
  })

  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = `dogourmet-test-results-${new Date().toISOString().slice(0, 10)}.csv`
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  setTimeout(() => {
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }, 1000)

  return true
}
