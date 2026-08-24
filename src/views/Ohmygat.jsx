import { useState, useMemo } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import fondoBlancoTop from '../assets/ohmygat/fondo-blanco.svg'
import ohmygat from '../assets/ohmygat/ohmygat.svg'
import textoIrresistiblesabor from '../assets/ohmygat/texto-irresistible-sabor.svg'
import textoFormulaSinColorantes from '../assets/ohmygat/texto-formula-sin-colorantes.svg'
import gatoIzquierda from '../assets/ohmygat/gato-izquierda.svg'
import textoVerMas from '../assets/ohmygat/texto-baja-para-mas-info.svg'
import flechaVerMas from '../assets/ohmygat/flecha-abajo.svg'
import fondoBlancoMedium from '../assets/ohmygat/fondo-blanco-abajo.svg'
import textoAtributos from '../assets/ohmygat/texto-atributos.svg'
import textoFuncionales from '../assets/ohmygat/texto-funcionales.svg'
import gatoAtributos from '../assets/ohmygat/gato-atributos.svg'
function Ohmygat() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center select-none">
      <section className="pt-14 relative w-full flex flex-col items-center text-center z-0 overflow-hidden bg-[#0099D0]">
        <img
          src={fondoBlancoTop}
          alt=""
          aria-hidden="true"
          className="absolute top-20 sm:top-24 md:top-28 left-0 w-full h-auto object-contain -z-10 pointer-events-none"
        />

        <div className="w-full flex flex-col items-center relative">
          <div className="w-full flex justify-center mb-4 sm:mb-6 md:mb-8">
            <img
              src={ohmygat}
              alt="Oh my gat"
              className="w-[62%] max-w-[360px] sm:w-[48%] md:w-[38%] mt-8 sm:mt-10 md:mt-12 object-contain"
            />
          </div>
          
          <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 w-[84%] sm:w-[78%] md:w-[72%] max-w-[760px] mb-4 sm:mb-8 md:mb-10">
            <img
              src={textoIrresistiblesabor}
              alt="Irresistible sabor"
              className="w-full h-auto drop-shadow-sm"
            />
            <img
              src={textoFormulaSinColorantes}
              alt="Fórmula sin colorantes"
              className="w-full h-auto drop-shadow-sm"
            />
          </div>

          <div className="relative w-full mt-4 sm:mt-6 md:mt-8 min-h-[330px] sm:min-h-[420px] md:min-h-[640px] bg-[#FFFFFF]">
            <img
              src={gatoIzquierda}
              alt="Gato Ohmygat"
              className="absolute left-0 bottom-0 w-[55%] sm:w-[50%] md:w-[45%] xl:w-[45%] z-20 pointer-events-none object-contain drop-shadow-lg"
            />

            <div className="absolute right-[8%] sm:right-[8%] md:right-12 lg:right-16 bottom-[26%] sm:bottom-[28%] md:bottom-12 lg:bottom-16 w-[38%] sm:w-[34%] md:w-[28%] lg:w-[24%] max-w-[320px] flex flex-col items-center gap-1 sm:gap-2 z-20">
              <img
                src={textoVerMas}
                alt="VER MÁS"
                className="w-full h-auto cursor-pointer transition-transform hover:scale-105"
              />
              <img
                src={flechaVerMas}
                alt=""
                aria-hidden="true"
                className="w-[70%] h-auto cursor-pointer transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full pt-10 sm:pt-16 md:pt-24 pb-16 sm:pb-24 md:pb-32 px-4 flex flex-col items-center text-center -mt-8 sm:-mt-14 md:-mt-20 z-0 overflow-visible bg-transparent">
        {fondoBlancoMedium && (
          <img
            src={fondoBlancoMedium}
            alt=""
            aria-hidden="true"
            className="absolute -top-6 sm:-top-10 md:-top-14 left-0 w-full h-full object-cover z-0 pointer-events-none"
          />
        )}
        <div className="w-full flex flex-col items-center relative z-10">
          <div className="flex flex-col items-center gap-1 sm:gap-2 mb-8 sm:mb-12 md:mb-16 w-[80%]">
            <img
              src={textoAtributos}
              alt="ATRIBUTOS"
              className="w-[70%] h-auto"
            />
            <img
              src={textoFuncionales}
              alt="FUNCIONALES"
              className="w-[90%] h-auto -mt-1 sm:-mt-2"
            />
          </div>
          <div className="relative w-[90%] flex justify-center items-center mb-4 sm:mb-8 z-10">
            <img
              src={gatoAtributos}
              alt="Atributos funcionales"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>





    </main>
  )
}

export default Ohmygat