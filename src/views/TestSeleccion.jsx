import { useEffect } from 'react'
import { useState } from 'react'
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

const questionSets = {
  guau: [
    { image: preguntaPerro1, options: ['Conexión', 'Diversión', 'Lealtad', 'Aventura'] },
    { image: preguntaPerro2, options: ['Liderazgo', 'Calma', 'Creatividad', 'Energía'] },
    { image: preguntaPerro3, options: ['Explorar', 'Cuidar', 'Compartir', 'Descansar'] },
    { image: preguntaPerro4, options: ['Valiente', 'Amable', 'Curioso', 'Espontáneo'] },
    { image: preguntaPerro5, options: ['Siempre', 'A veces', 'Casi nunca', 'Depende'] },
  ],
  miau: [
    { image: preguntaGato1, options: ['Conexión', 'Diversión', 'Lealtad', 'Aventura'] },
    { image: preguntaGato2, options: ['Liderazgo', 'Calma', 'Creatividad', 'Energía'] },
    { image: preguntaGato3, options: ['Explorar', 'Cuidar', 'Compartir', 'Descansar'] },
    { image: preguntaGato4, options: ['Valiente', 'Amable', 'Curioso', 'Espontáneo'] },
    { image: preguntaGato5, options: ['Siempre', 'A veces', 'Casi nunca', 'Depende'] },
  ],
}

const answerSets = {
  guau: [respuestaPerroA, respuestaPerroB, respuestaPerroC, respuestaPerroD],
  miau: [respuestaGatoA, respuestaGatoB, respuestaGatoC, respuestaGatoD],
}

function TestSeleccion() {
  const [team, setTeam] = useState('')
  const [step, setStep] = useState('selection')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
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
  }, []);
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
    setStep('questions')
  }

  const selectAnswer = (letter) => {
    const nextAnswers = [...answers, letter]
    if (questionIndex < 4) {
      setAnswers(nextAnswers)
      setQuestionIndex((current) => current + 1)
      return
    }

    const counts = nextAnswers.reduce((result, current) => ({
      ...result,
      [current]: result[current] + 1,
    }), { A: 0, B: 0, C: 0, D: 0 })
    const highest = Math.max(...Object.values(counts))
    const winners = Object.keys(counts).filter((letter) => counts[letter] === highest)
    const winner = winners.includes(letter) ? letter : winners[0]
    setAnswers(nextAnswers)
    setStep('result')
    setQuestionIndex('ABCD'.indexOf(winner))
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
        {step === 'result' ? (
          <img
            src={answerSets[team][questionIndex]}
            alt={`Resultado de personalidad ${'ABCD'[questionIndex]}`}
            className="absolute inset-0 z-20 h-full w-full object-cover object-center"
          />
        ) : step === 'questions' ? (
          <div className="relative z-30 flex h-full w-full flex-col items-center justify-between pb-8">
            <img
              src={questionSets[team][questionIndex].image}
              alt={`Pregunta ${questionIndex + 1}`}
              className="h-auto w-full object-contain object-top"
            />
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