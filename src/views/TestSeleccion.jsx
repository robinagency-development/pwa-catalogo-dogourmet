import { useEffect } from 'react'
import { useState } from 'react'
import fondo from '../assets/testseleccion/fondo.png'
import gatoYPerro from '../assets/testseleccion/gato-y-perro.png'
import queHuellitasMarcan from '../assets/testseleccion/que-huellitas-marcan.png'
import teamGuau from '../assets/testseleccion/team-guau.png'
import teamMiau from '../assets/testseleccion/team-miau.png'

function TestSeleccion() {
  const [team, setTeam] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-[#536f76]">
      <img
        src={fondo}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col items-center px-4 pt-7 sm:px-8 sm:pt-10 lg:px-12 lg:pt-14">
        <img
          src={queHuellitasMarcan}
          alt="¿Qué huellitas marcan tu personalidad? Descúbrelo"
          className="relative z-20 w-[92%] max-w-[860px] object-contain sm:w-[78%] lg:w-[62%]"
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

        <img
          src={gatoYPerro}
          alt="Gato y perro"
          className="absolute bottom-0 left-1/2 z-20 w-[108%] max-w-none -translate-x-1/2 object-contain"
        />
      </div>
    </main>
  )
}

export default TestSeleccion