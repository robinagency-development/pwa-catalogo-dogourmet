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



import carrousel1 from '../assets/ohmygat/proteina-balanceada.svg'
import carrousel2 from '../assets/ohmygat/triple-proteina.svg'
import carrousel3 from '../assets/ohmygat/omega3.svg'
import carrousel4 from '../assets/ohmygat/extracto-levadura.svg'


import fondoBlanco from '../assets/ohmygat/fondo-blanco-tabla.svg'
import textoAlimentacionPerfecta from '../assets/ohmygat/texto-alimentacion-perfecta.svg'
import textoNutricionales from '../assets/ohmygat/texto-ohmygat-garantiza-digestion.svg'
import tablaNutricional from '../assets/ohmygat/tabla-nutricional.svg'
import botonDonkat from '../assets/ohmygat/boton-donkat.svg'
import botonVolverHome from '../assets/ohmygat/boton-volver-home.svg'
import textoHuellitasPorExplorar from '../assets/ohmygat/texto-huellitas-por-explorar.svg'
import textoConoceMas from '../assets/ohmygat/texto-conoce-mas.svg'
import fondoAzulClaroBottom from '../assets/ohmygat/fondo-azul-claro-footer.svg'
import fondoAzulBottom from '../assets/ohmygat/fondo-azul-bottom.svg'
import botonVisitarNutricionCanina from '../assets/ohmygat/boton-visitar-nutricion.svg'
import perroBottom from '../assets/ohmygat/perro-bottom.svg'

import ImageCarousel from '../components/ImageCarousel'




import logoChamps from '../assets/champs/champs.svg'
import fondoTop from '../assets/champs/fondo-top.svg'
import textoNutricionCompleta from '../assets/champs/texto-nutricion-completa.svg'
import textoNuestraFormula from '../assets/champs/texto-nuestra-formula.svg'
import botonSuperCan from '../assets/champs/boton-supercan.svg'
import perroNutricionCompleta from '../assets/champs/perro-nutricion-completa.svg'
import fondoAzulNuestrosSabores from '../assets/champs/fondo-nuestros-sabores.svg'




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
      <section className="relative w-full pt-10 sm:pt-16 md:pt-24  px-4 flex flex-col items-center text-center -mt-8 sm:-mt-14 md:-mt-20 z-0 overflow-visible bg-transparent">
        {fondoBlancoMedium && (
          <img
            src={fondoBlancoMedium}
            alt=""
            aria-hidden="true"
            className="absolute -top-6 sm:-top-10 md:-top-14 left-0 w-full h-full object-cover z-0 pointer-events-none"
          />
        )}
        <div className="w-full flex flex-col items-center relative z-10">
          <div className="flex flex-col items-center gap-1 sm:gap-2 w-[80%]">
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





      <section className="relative w-full flex flex-col items-center text-center">
        <div className="w-full flex flex-col items-center mx-auto justify-center">
          <ImageCarousel
            className="mt-4 mb-2"
            items={[
              { src: carrousel1, alt: 'Proteina Balanceada' },
              { src: carrousel2, alt: 'Triple Proteina' },
              { src: carrousel3, alt: 'Omega 3' },
              { src: carrousel4, alt: 'Extracto de levadura' },
            ]}
          />
        </div>
      </section>
      















      <section className="relative w-full flex flex-col items-center text-center z-20 pb-10 bg-[#FFFFFF]">
        <div className="w-full flex flex-col items-center relative z-20 bg-[#FFFFFF]">
        
          <div className="flex flex-col items-center gap-2 w-[80%] mb-10">
            <img
              src={textoAlimentacionPerfecta}
              alt="Nuestras tablas"
              className="w-[65%] h-auto -mt-1 sm:-mt-2"
            />
            <img
              src={textoNutricionales}
              alt="Nutricionales"
              className="w-[85%] h-auto -mt-1 sm:-mt-2"
            />
          </div>
          <div className="w-full flex justify-center items-center gap-4 z-40">
            <img
              src={tablaNutricional}
              alt="Tabla Nutricional"
              className="w-[80%] h-auto"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full flex flex-col items-center text-center z-20 overflow-visible pt-14 sm:pt-16 md:pt-20 bg-[#FFFFFF]">
        <div className="w-full flex flex-col items-center relative min-h-[280px] sm:min-h-[320px] md:min-h-[380px]">
            {fondoAzulClaroBottom && (
              <img
                src={fondoAzulClaroBottom}
                alt=""
                aria-hidden="true"
                className="absolute -top-[72px] sm:-top-[56px] md:-top-[84px] lg:-top-[120px] left-0 w-full h-auto object-cover -z-30 pointer-events-none"
              />
            )}
          <div className="flex flex-col items-center gap-2 mb-8 sm:mb-12 mt-10 w-full px-4 sm:px-6">
            <img
              src={textoHuellitasPorExplorar}
              alt="Huellitas por explorar"
              className="w-[88%] sm:w-[76%] md:w-[62%] max-w-[760px] h-auto"
            />
            <img
              src={textoConoceMas}
              alt="Conoce Más"
              className="w-[80%] sm:w-[66%] md:w-[54%] max-w-[640px] h-auto"
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-6 md:gap-8 w-full px-4 sm:px-8 md:px-10">
            <Link to="/donkat" className="transition-transform hover:scale-110 active:scale-95 w-[42%] sm:w-[34%] md:w-[28%] max-w-[260px]">
              <img
                src={botonDonkat}
                alt="Don kat"
                className="w-[100%] h-auto drop-shadow-md"
              />
            </Link>

            <Link to="/" className="transition-transform hover:scale-110 active:scale-95 w-[42%] sm:w-[34%] md:w-[28%] max-w-[260px]">
              <img
                src={botonVolverHome}
                alt="Volver al Home"
                className="w-[100%] h-auto drop-shadow-md"
              />
            </Link>
          </div>
        </div>
        <div className="relative w-full  flex flex-col items-center overflow-visible">
          <img
            src={fondoAzulBottom}
            alt=""
            aria-hidden="true"
            className="relative w-full h-auto object-cover pointer-events-none drop-shadow-lg z-0"
          />
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-visible z-10">
            <div className="w-full h-auto flex justify-center relative z-30 pr-4 sm:pr-8 md:pr-12">
              <Link
                to="/dogourmet"
                className="transition-transform hover:scale-105 active:scale-95 relative z-30 w-[80%] sm:w-[75%] md:w-[75%]"
                aria-label="Ir a catálogo de Nutrición Canina"
              >
                <img
                  src={botonVisitarNutricionCanina}
                  alt="VISITAR NUTRICIÓN CANINA"
                  className="w-full h-auto drop-shadow-md"
                />
              </Link>
            </div>
            <img
              src={perroBottom}
              alt="Perro asomándose"
              className="absolute bottom-0 left-0 w-[65%] h-auto object-contain z-20 pointer-events-none"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Ohmygat