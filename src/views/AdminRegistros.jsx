import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  clearAllTestResults,
  exportTestResultsCsv,
  getAllTestResults,
  getSavedResultsCount,
} from '../lib/testResultsDb'
import fondoPatitasGato from '../assets/home/fondo-patitas-gato.svg'
import fondoRojo from '../assets/home/fondo-rojo.svg'

const ADMIN_USERNAME = 'admin_dogurmet'
const ADMIN_PASSWORD = 'd0gc@t123'

function AdminRegistros() {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [records, setRecords] = useState([])
  const [savedResultsCount, setSavedResultsCount] = useState(0)

  const loadRecords = async () => {
    const [rows, count] = await Promise.all([getAllTestResults(), getSavedResultsCount()])
    setRecords(rows)
    setSavedResultsCount(count)
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadRecords()
    }
  }, [isAuthenticated])

  const handleCredentialsChange = (event) => {
    const { name, value } = event.target
    setCredentials((current) => ({ ...current, [name]: value }))
  }

  const handleLogin = (event) => {
    event.preventDefault()

    if (credentials.username === ADMIN_USERNAME && credentials.password === ADMIN_PASSWORD) {
      setErrorMessage('')
      setIsAuthenticated(true)
      return
    }

    setErrorMessage('Usuario o contrasena incorrectos.')
  }

  const handleExportCsv = async () => {
    await exportTestResultsCsv(records)
  }

  const handleClearData = async () => {
    if (!window.confirm('Se eliminaran todos los registros guardados en este dispositivo.')) {
      return
    }

    await clearAllTestResults()
    setRecords([])
    setSavedResultsCount(0)
  }

  return (
    <main className="admin-records-page">
      <img src={fondoPatitasGato} alt="" aria-hidden="true" className="admin-records-paws" />
      <img src={fondoRojo} alt="" aria-hidden="true" className="admin-records-wave" />

      <header className="admin-records-header">
        <Link to="/" className="admin-back-link" aria-label="Volver al inicio" title="Volver al inicio">
          <span aria-hidden="true">←</span>
        </Link>
        <h1>Registros del test</h1>
      </header>

      <section className="admin-records-content" aria-live="polite">
        {!isAuthenticated ? (
          <form className="admin-login-form" onSubmit={handleLogin}>
            <label>
              Usuario
              <input
                name="username"
                type="text"
                autoComplete="username"
                value={credentials.username}
                onChange={handleCredentialsChange}
                required
              />
            </label>
            <label>
              Contrasena
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                value={credentials.password}
                onChange={handleCredentialsChange}
                required
              />
            </label>
            {errorMessage && <p className="admin-login-error" role="alert">{errorMessage}</p>}
            <button type="submit" className="admin-primary-action">Ingresar</button>
          </form>
        ) : (
          <div className="admin-records-panel">
            <div className="admin-records-toolbar">
              <strong>{savedResultsCount} registros guardados</strong>
              <div className="admin-records-actions">
                <button type="button" onClick={loadRecords} className="admin-secondary-action">Actualizar</button>
                <button type="button" onClick={handleExportCsv} disabled={!records.length} className="admin-primary-action">Descargar CSV</button>
                <button type="button" onClick={handleClearData} disabled={!records.length} className="admin-danger-action">Vaciar datos</button>
              </div>
            </div>

            {records.length === 0 ? (
              <p className="admin-empty-state">No hay registros guardados en este dispositivo.</p>
            ) : (
              <div className="admin-records-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Nombre</th>
                      <th>Correo</th>
                      <th>Clinica</th>
                      <th>Ciudad</th>
                      <th>Equipo</th>
                      <th>Resultado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((record) => (
                      <tr key={record.id}>
                        <td>{new Date(record.created_at).toLocaleString()}</td>
                        <td>{record.nombre || 'Sin nombre'}</td>
                        <td>{record.correo || '-'}</td>
                        <td>{record.hospital || '-'}</td>
                        <td>{record.ciudad || '-'}</td>
                        <td>{record.team || '-'}</td>
                        <td>{record.result_letter || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  )
}

export default AdminRegistros
