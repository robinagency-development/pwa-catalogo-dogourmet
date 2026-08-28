import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  saveTestResult,
  exportTestResultsCsv,
  getSavedResultsCount,
  getAllTestResults,
  clearAllTestResults,
} from '../lib/testResultsDb'
import fondo from '../assets/testseleccion/fondo.png'
import gatoYPerro from '../assets/testseleccion/gato-y-perro.png'
import queHuellitasMarcan from '../assets/testseleccion/que-huellitas-marcan.png'
import teamGuau from '../assets/testseleccion/team-guau.png'
import teamMiau from '../assets/testseleccion/team-miau.png'
import tituloRegistro from '../assets/iconos/datos-de-registro.png'
import iconoNombre from '../assets/iconos/nombreyapellido.svg'
import iconoCorreo from '../assets/iconos/correo.svg'
import iconoHospital from '../assets/iconos/hospital.svg'
import iconoGps from '../assets/iconos/gps.svg'
import iconoNumero from '../assets/iconos/numero.svg'
import iconoEspecialidad from '../assets/iconos/especialidad.svg'
import comenzarTest from '../assets/iconos/comenzar-test.png'
import preguntaGato1 from '../assets/questionsCats/pregunta-1-gatos.webp'
import preguntaGato2 from '../assets/questionsCats/pregunta-2-gatos.webp'
import preguntaGato3 from '../assets/questionsCats/pregunta-3-gatos.webp'
import preguntaGato4 from '../assets/questionsCats/pregunta-4-gatos.webp'
import preguntaGato5 from '../assets/questionsCats/pregunta-5-gatos.webp'
import preguntaPerro1 from '../assets/questionsDogs/pregunta-1-perros.webp'
import preguntaPerro2 from '../assets/questionsDogs/pregunta-2-perros.webp'
import preguntaPerro3 from '../assets/questionsDogs/pregunta-3-perros.webp'
import preguntaPerro4 from '../assets/questionsDogs/pregunta-4-perros.webp'
import preguntaPerro5 from '../assets/questionsDogs/pregunta-5-perros.webp'
import respuestaGatoA from '../assets/answersCats/personalidad-a-gatos.webp'
import respuestaGatoB from '../assets/answersCats/personalidad-b-gatos.webp'
import respuestaGatoC from '../assets/answersCats/personalidad-c-gatos.webp'
import respuestaGatoD from '../assets/answersCats/personalidad-d-gatos.webp'
import respuestaPerroA from '../assets/answersDogs/personalidad-a-perros.webp'
import respuestaPerroB from '../assets/answersDogs/personalidad-b-perros.webp'
import respuestaPerroC from '../assets/answersDogs/personalidad-c-perros.webp'
import respuestaPerroD from '../assets/answersDogs/personalidad-d-perros.webp'
import botonVolverHome from '../assets/dogourmet/boton-volver-home.svg'
import ViewAssetLoader, { useAssetLoader } from '../components/ViewAssetLoader'

const questionSets = {
  guau: [
    { image: preguntaPerro1, options: ['Conexión', 'Diversión', 'Lealtad', 'Aventura'] },
    { image: preguntaPerro2, options: ['Toy Story', 'Son como niños', 'Avengers', 'Viaje al centro de la tierra'] },
    { image: preguntaPerro3, options: ['Busco a alguien para no estar solo', 'Cambio de escondite cada 5 min.', 'CReviso si mi familia está bien', 'Investigo de dónde vino'] },
    { image: preguntaPerro4, options: ['Algo para compartir', 'Comida rápida', 'Una ensalada y full proteína', 'Algo que no haya probado antes'] },
    { image: preguntaPerro5, options: ['Saludo a todo el mundo', 'Busco como hacer ruido', 'No me separo de mi grupo', 'Exploro el lugar'] },
  ],
  miau: [
    { image: preguntaGato1, options: ['¿En dónde? ¿Quiénes van?', '¡Claro! conozco el lugar perfecto', 'Ok, pero a las 12 me regreso', 'Depende...'] },
    { image: preguntaGato2, options: ['El que siempre tiene un cuento', 'El líder sin discusión', 'El bebé del grupo', 'El que no se conforma con nada'] },
    { image: preguntaGato3, options: ['Ver TikToks sobre alguna polémica', 'Cualquiera mientras pueda elegir', 'Hornear galletas', 'Ver películas en casa'] },
    { image: preguntaGato4, options: ['Parchita', 'Chocolate', 'Fresa', 'Mantecado'] },
    { image: preguntaGato5, options: ['Donde me entero de todo', 'Donde me siento cómodo', 'Parque con áreas verdes', 'Mi cama'] },
  ],
}

const answerSets = {
  guau: [respuestaPerroA, respuestaPerroB, respuestaPerroC, respuestaPerroD],
  miau: [respuestaGatoA, respuestaGatoB, respuestaGatoC, respuestaGatoD],
}

const testSeleccionAssets = [
  fondo,
  gatoYPerro,
  queHuellitasMarcan,
  teamGuau,
  teamMiau,
  tituloRegistro,
  iconoNombre,
  iconoCorreo,
  iconoHospital,
  iconoGps,
  iconoNumero,
  iconoEspecialidad,
  comenzarTest,
  botonVolverHome,
  ...questionSets.guau.map(({ image }) => image),
  ...questionSets.miau.map(({ image }) => image),
  ...answerSets.guau,
  ...answerSets.miau,
]

function TestSeleccion() {
  const navigate = useNavigate()
  const assetsReady = useAssetLoader(testSeleccionAssets)
  const [team, setTeam] = useState('')
  const [step, setStep] = useState('selection')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [questionImageLoaded, setQuestionImageLoaded] = useState(false)
  const [answers, setAnswers] = useState([])
  const [savedResultsCount, setSavedResultsCount] = useState(0)
  const [history, setHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [latestResultRecord, setLatestResultRecord] = useState(null)
  const [saveToLocal, setSaveToLocal] = useState(() => {
    if (typeof window === 'undefined') {
      return true
    }

    return localStorage.getItem('dogourmet_test_storage_preference') !== 'clear'
  })
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    hospital: '',
    ciudad: '',
    telefono: '',
    especialidad: '',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    const loadCount = async () => {
      const total = await getSavedResultsCount()
      setSavedResultsCount(total)
      const rows = await getAllTestResults()
      setHistory(rows)
    }
    loadCount()
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('dogourmet_test_storage_preference', saveToLocal ? 'keep' : 'clear')
    }
  }, [saveToLocal])

  if (!assetsReady) {
    return <ViewAssetLoader label="Cargando test" />
  }

  const fields = [
    { name: 'nombre', label: 'Nombre y Apellido', icon: iconoNombre, type: 'text' },
    { name: 'correo', label: 'Correo electrónico', icon: iconoCorreo, type: 'email' },
    { name: 'hospital', label: 'Hospital o Clínica', icon: iconoHospital, type: 'text' },
    { name: 'ciudad', label: 'Ciudad', icon: iconoGps, type: 'text' },
    { name: 'telefono', label: 'Teléfono', icon: iconoNumero, type: 'tel' },
    { name: 'especialidad', label: 'Área de especialización', icon: iconoEspecialidad, type: 'text' },
  ]

  const updateField = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const startQuestions = (event) => {
    event.preventDefault()
    setQuestionImageLoaded(false)
    setStep('questions')
  }

  const restartTest = () => {
    setAnswers([])
    setTeam('')
    setStep('selection')
    setQuestionIndex(0)
  }

  const goBack = () => {
    if (step === 'selection') {
      if (team) {
        setTeam('')
        return
      }

      navigate('/')
      return
    }

    if (step === 'questions') {
      if (questionIndex > 0) {
        setAnswers((current) => current.slice(0, -1))
        setQuestionImageLoaded(false)
        setQuestionIndex((current) => current - 1)
        return
      }

      setStep('selection')
      return
    }

    setAnswers([])
    setFormData({
      nombre: '',
      correo: '',
      hospital: '',
      ciudad: '',
      telefono: '',
      especialidad: '',
    })
    setQuestionImageLoaded(false)
    setQuestionIndex(0)
    setStep('selection')
    setTeam('')
  }

  const selectAnswer = async (letter) => {
    const nextAnswers = [...answers, letter]
    if (questionIndex < 4) {
      setAnswers(nextAnswers)
      setQuestionImageLoaded(false)
      setQuestionIndex((current) => current + 1)
      return
    }

    const counts = nextAnswers.reduce((result, current) => ({
      ...result,
      [current]: result[current] + 1,
    }), { A: 0, B: 0, C: 0, D: 0 })
    const highest = Math.max(...Object.values(counts))
    const winners = Object.keys(counts).filter((current) => counts[current] === highest)
    const winner = winners.includes(letter) ? letter : winners[0]
    const finalLetter = winner
    const finalLabel = 'ABCD'.includes(finalLetter) ? 'ABCD'[ 'ABCD'.indexOf(finalLetter) ] : finalLetter
    const resultIndex = 'ABCD'.indexOf(finalLetter)

    const record = {
      created_at: new Date().toISOString(),
      nombre: formData.nombre,
      correo: formData.correo,
      hospital: formData.hospital,
      ciudad: formData.ciudad,
      telefono: formData.telefono,
      especialidad: formData.especialidad,
      team,
      answers: nextAnswers,
      answer_letters: nextAnswers.join(''),
      result_letter: finalLetter,
      result_label: finalLabel,
      result_image: answerSets[team][resultIndex],
      metadata: {
        teamLabel: team === 'guau' ? 'Guau' : 'Miau',
        totalQuestions: 5,
        storagePreference: saveToLocal ? 'keep' : 'clear',
      },
    }

    setLatestResultRecord(record)
    setAnswers(nextAnswers)
    setStep('result')
    setQuestionIndex(resultIndex)

    if (saveToLocal) {
      try {
        await saveTestResult(record)
        const count = await getSavedResultsCount()
        setSavedResultsCount(count)
      } catch (error) {
        console.error('No se pudo guardar el resultado localmente:', error)
        setSavedResultsCount(0)
      }
    } else {
      setSavedResultsCount(0)
    }
  }

  const handleExportCsv = async () => {
    const rows = await getAllTestResults()
    const dataToExport = rows.length ? rows : latestResultRecord ? [latestResultRecord] : []

    if (!dataToExport.length) {
      return
    }

    const exported = await exportTestResultsCsv(dataToExport)
    if (exported) {
      const count = await getSavedResultsCount()
      setSavedResultsCount(count)
    }
  }

  const refreshHistory = async () => {
    const rows = await getAllTestResults()
    setHistory(rows)
    const total = await getSavedResultsCount()
    setSavedResultsCount(total)
  }

  const handleClearData = async () => {
    await clearAllTestResults()
    setHistory([])
    setSavedResultsCount(0)
    setSaveToLocal(false)
  }

  const handleViewHistory = async () => {
    await refreshHistory()
    setShowHistory((current) => !current)
  }

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-[#536f76]">
      <img
        src={fondo}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-0 flex h-full w-full flex-col items-center">
        <button
          type="button"
          className="pwa-install-button fixed bottom-4 right-4 z-[110] grid h-30 w-30 place-items-center p-1 shadow-lg transition-transform hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
          onClick={goBack}
          aria-label={step === 'selection' && !team ? 'Volver al Home' : 'Volver al paso anterior'}
          title={step === 'selection' && !team ? 'Volver al Home' : 'Volver al paso anterior'}
        >
        <svg
          aria-hidden="true"
          className="pwa-install-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </button>

        {step === 'result' ? (
          <div className="absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-center bg-[#536f76]/70">
            <button
              type="button"
              onClick={restartTest}
              aria-label="Volver al inicio del test"
              className="relative h-full w-full cursor-pointer"
            >
              <img
                src={answerSets[team][questionIndex]}
                alt={`Resultado de personalidad ${'ABCD'[questionIndex]}`}
                className="h-full w-full object-cover object-center"
              />
            </button>

            <div className="w-[75%] absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3 rounded-xl bg-[#0a2235]/80 p-4 text-white shadow-lg backdrop-blur-sm">
              <div className="text-center text-sm font-semibold">
                Registros guardados: {savedResultsCount}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleExportCsv}
                  className="rounded-full bg-[#f7d856] px-4 py-2 text-xs font-bold text-[#1a1a1a]"
                >
                  Descargar CSV
                </button>
                <button
                  type="button"
                  onClick={handleViewHistory}
                  className="rounded-full border border-white/60 bg-transparent px-4 py-2 text-xs font-bold text-white"
                >
                  {showHistory ? 'Ocultar historial' : 'Ver historial'}
                </button>
                <button
                  type="button"
                  onClick={handleClearData}
                  className="rounded-full border border-white/60 bg-transparent px-4 py-2 text-xs font-bold text-white"
                >
                  Vaciar datos
                </button>
              </div>

              <label className="flex items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={saveToLocal}
                  onChange={(event) => setSaveToLocal(event.target.checked)}
                />
                Mantener registro local
              </label>
            </div>

            {showHistory && (
              <div className="absolute bottom-44 left-1/2 z-40 w-[88%] max-w-[720px] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/20 bg-[#0a2235]/90 p-3 text-left text-white shadow-2xl backdrop-blur-md">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase">Historial local</h3>
                  <button
                    type="button"
                    onClick={() => setShowHistory(false)}
                    className="text-xs text-white/80"
                  >
                    Cerrar
                  </button>
                </div>

                {history.length === 0 ? (
                  <p className="text-xs text-white/70">No hay registros guardados.</p>
                ) : (
                  <div className="max-h-[220px] overflow-auto pr-1">
                    {history.map((record) => (
                      <div key={record.id} className="mb-2 rounded-lg border border-white/10 bg-white/5 p-2 text-[11px]">
                        <div className="flex justify-between gap-2">
                          <strong>{record.nombre || 'Sin nombre'}</strong>
                          <span>{new Date(record.created_at).toLocaleString()}</span>
                        </div>
                        <div>{record.correo}</div>
                        <div>{record.hospital} • {record.ciudad}</div>
                        <div>Equipo: {record.team} • Resultado: {record.result_letter}</div>
                        <div>Opciones: {record.answer_letters || record.answers}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : step === 'questions' ? (
          <div className="relative z-30 flex h-full w-full flex-col items-center justify-between pb-8">
            <img
              src={questionSets[team][questionIndex].image}
              alt={`Pregunta ${questionIndex + 1}`}
              onLoad={() => setQuestionImageLoaded(true)}
              className="h-auto w-full object-contain object-top"
            />
            {questionImageLoaded && (
              <>
                <div className="grid w-[82%] max-w-[560px] grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                  {questionSets[team][questionIndex].options.map((option, index) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => selectAnswer('ABCD'[index])}
                      className="min-h-10 rounded-md border border-[#e4e4e4] bg-white/95 px-2 text-xs text-[#6e747b] shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.97] sm:min-h-12 sm:text-sm lg:min-h-14 lg:text-base"
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div
                  className="flex w-[42%] max-w-[230px] items-center justify-center gap-1.5 sm:gap-2"
                  aria-label={`Pregunta ${questionIndex + 1} de 5`}
                >
                  {[0, 1, 2, 3, 4].map((stepNumber) => (
                    <span
                      key={stepNumber}
                      className={`h-1.5 flex-1 rounded-full ${stepNumber === questionIndex ? 'bg-[#c7c7c7]' : 'bg-[#e7e7e7]'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : team ? (
          <form
            className="relative z-30 flex h-full w-full flex-col items-center justify-center pb-[18%] sm:pb-[16%] lg:pb-[12%]"
            onSubmit={startQuestions}
          >
            <img
              src={tituloRegistro}
              alt="Datos de registro"
              className="w-[66%] max-w-[430px] object-contain sm:w-[48%] lg:w-[34%]"
            />
            <div className="mt-10 flex w-full max-w-[620px] flex-col items-center gap-3 sm:mt-12 sm:gap-4 lg:mt-14">
              {fields.map((field) => (
                <label
                  key={field.name}
                  className="flex h-[42px] w-[82%] max-w-[520px] items-center gap-3 rounded-md border border-[#e2e2e2] bg-white/95 px-3 shadow-sm sm:h-[50px] sm:w-[74%] lg:h-[58px] lg:w-[64%]"
                >
                  <img src={field.icon} alt="" aria-hidden="true" className="h-6 w-6 shrink-0 object-contain opacity-70 sm:h-7 sm:w-7" />
                  <input
                    name={field.name}
                    type={field.type}
                    value={formData[field.name]}
                    onChange={updateField}
                    placeholder={field.label}
                    required
                    className="min-w-0 flex-1 bg-transparent text-sm text-[#87909a] outline-none placeholder:text-[#87909a] sm:text-base lg:text-lg"
                  />
                </label>
              ))}
            </div>
            <button
              type="submit"
              className="mt-10 w-[48%] max-w-[300px] transition-transform hover:scale-105 active:scale-95 sm:mt-12 lg:mt-14 lg:w-[28%]"
            >
              <img src={comenzarTest} alt="Comenzar test" className="block h-auto w-full" />
            </button>
          </form>
        ) : (
          <>
        <img
          src={queHuellitasMarcan}
          alt="¿Qué huellitas marcan tu personalidad? Descúbrelo"
          className="relative z-20 w-[92%] max-w-[860px] object-contain sm:w-[78%] lg:w-[62%] pt-16"
        />

        <div className="relative z-30 mt-20 flex w-full flex-col items-center gap-2 sm:gap-3 lg:gap-4">
          <button
            type="button"
            onClick={() => setTeam('guau')}
            aria-pressed={team === 'guau'}
            className={`w-[50%] transition-transform hover:scale-[1.03] active:scale-[0.97] ${team === 'guau' ? 'scale-[1.04] drop-shadow-[0_0_16px_rgba(213,43,31,0.75)]' : ''}`}
          >
            <img src={teamGuau} alt="Team guau, guau" className="block h-auto w-full" />
          </button>
          <button
            type="button"
            onClick={() => setTeam('miau')}
            aria-pressed={team === 'miau'}
            className={`w-[50%] transition-transform hover:scale-[1.03] active:scale-[0.97] ${team === 'miau' ? 'scale-[1.04] drop-shadow-[0_0_16px_rgba(0,153,208,0.75)]' : ''}`}
          >
            <img src={teamMiau} alt="Team miau, miau" className="block h-auto w-full" />
          </button>
        </div>

          </>
        )}

        {step !== 'questions' && step !== 'result' && (
          <img
            src={gatoYPerro}
            alt="Gato y perro"
            className="absolute bottom-0 left-1/2 z-20 w-[108%] max-w-none -translate-x-1/2 object-contain"
          />
        )}
      </div>
    </main>
  )
}

export default TestSeleccion