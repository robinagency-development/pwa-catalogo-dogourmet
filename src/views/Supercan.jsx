import { useState, useMemo, useEffect } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import logoSupercan from '../assets/supercan/supercan.svg'
import fondoTop from '../assets/supercan/fondo-top-supercan.svg'
import textoLaTranquilidad from '../assets/supercan/texto-la-tranquilidad-de-una.svg'
import textoAlimentacionBalanceada from '../assets/supercan/texto-alimentacion-balanceada.svg'
import textoNuestraFormula from '../assets/supercan/texto-nuestra-formula-integral.svg'
import perroTranquilidad from '../assets/supercan/perro-tranquilidad.svg'
import adultosCarne from '../assets/supercan/adultos-carne.svg'
import adultosPollo from '../assets/supercan/adultos-pollo.svg'
import carneCereales from '../assets/supercan/carne-cereal.svg'
import fondoAzulBottom from '../assets/supercan/fondo-azul-bottom.svg'
import textoHuellitas from '../assets/supercan/texto-huellitas-por-explorar.svg'
import textoConoceSobre from '../assets/supercan/texto-conoce-sobre.svg'
import botonChamps from '../assets/supercan/boton-champs.svg'
import botonDogourmet from '../assets/supercan/boton-dogourmet.svg'
import botonVolverHome from '../assets/supercan/boton-volver-home.svg'
import botonNuestrasTasasNutricionales from '../assets/supercan/boton-nuestras-tasas-nutricionales.svg'
import carrousel1 from '../assets/supercan/nutricion-carne-pollo.svg'
import carrousel2 from '../assets/supercan/nutricion-carne-cereales.svg'
import botonVisitarNutricionFelina from '../assets/supercan/boton-visitar-nutricion-felina.svg'
import gatoBottom from '../assets/dogourmet/gato-bottom.svg'
import ImageCarousel from '../components/ImageCarousel'
import fondoBlancoBottom from '../assets/champs/fondo-blanco-bottom.svg'
import textoNuestros from '../assets/champs/texto-nuestros.svg'
import textoSabores from '../assets/champs/texto-sabores.svg'

function Supercan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="home-champs">
      <div className="home-container !min-h-0 !justify-normal">
        <header className="relative z-10 w-full max-w-none aspect-[720/759] overflow-hidden flex items-center justify-center bg-[#004587]">
          <img
            src={fondoTop}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
          />
          <div className="w-full flex flex-col items-center mx-auto justify-center w-full">
            <img
              src={logoSupercan}
              alt="Supercan"
              className="h-auto w-[50%] object-contain mb-14"
            />
            <img
              src={textoLaTranquilidad}
              alt="La tranquilidad de una"
              className="w-[75%] h-auto drop-shadow-sm"
            />
            <img
              src={textoAlimentacionBalanceada}
              alt="Alimentación balanceada"
              className="w-[70%] h-auto drop-shadow-sm"
            />
            <img
              src={textoNuestraFormula}
              alt="Nuestra fórmula"
              className="w-[60%] mt-5 h-auto drop-shadow-sm mb-10"
            />
          </div>
        </header>
        <div className="relative w-full flex flex-col items-center mx-auto justify-center -mt-20 z-50">
          <img
            src={perroTranquilidad}
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <section className="relative w-full flex flex-col items-center text-center z-40 pb-16 bg-[#004587]">
        <div className="w-full flex flex-col items-center relative z-20">
         
          <div className="relative w-full flex flex-col items-center overflow-hidden mt-10">
            <div className="w-full flex flex-col items-center gap-1 sm:gap-2 relative z-10">
              <img
                src={textoNuestros}
                alt="Nuestros"
                className="w-[50%] h-auto"
              />
              <img
                src={textoSabores}
                alt="Sabores"
                className="w-[70%] h-auto -mt-1 sm:-mt-2"
              />
            </div>
            <div className="w-full flex justify-center items-center gap-4 scrollbar-none relative z-10">
              <div className="w-full flex flex-col items-center mx-auto justify-center">
                <ImageCarousel
                  className="mt-4 mb-2"
                  items={[
                    { src: adultosCarne, alt: 'Adultos Carne' },
                    { src: adultosPollo, alt: 'Adultos Pollo' },
                    { src: carneCereales, alt: 'Carne y cereales' },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center relative">
          <div className="w-full flex flex-col items-center relative">
          
          <div className="relative w-full flex flex-col justify-center items-center gap-4 scrollbar-none">

          <img
            src={fondoAzulBottom}
            alt=""
            aria-hidden="true"
            className="absolute inset-x-0 top-0 w-full h-auto object-contain -z-10 pointer-events-none drop-shadow-md"
          />
            <div className="w-full flex flex-col items-center mt-20">
              <img
                src={botonNuestrasTasasNutricionales}
                alt="Nuestras tablas nutricionales"
                className="mt-6 w-[90%] h-auto"
              />
            </div>
            <div className="mb-6 sm:mb-10 mt-12">
              <ImageCarousel
                className="mt-4 mb-2"
                items={[
                  { src: carrousel1, alt: 'Tabla Nutricional Cachorros' },
                  { src: carrousel2, alt: 'Tabla Nutricional Adultos' },
                ]}
              />
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className="relative w-full flex flex-col items-center text-center bg-[#004587] z-20 overflow-visible">
        <div className="w-full flex flex-col items-center relative">
          <div className="flex flex-col items-center gap-2 mb-2 mt-16 w-full">
            <img
              src={textoHuellitas}
              alt="Huellitas por explorar"
              className="w-[80%] h-auto"
            />
            <img
              src={textoConoceSobre}
              alt="Conoce Sobre"
              className="w-[76%] h-auto"
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-6 md:gap-8 w-[95%] mt-12">
            <Link to="/dogourmet" className="transition-transform hover:scale-110 active:scale-95">
              <img
                src={botonDogourmet}
                alt="Champ's"
                className="w-36 sm:w-48 md:w-64 lg:w-72 h-auto drop-shadow-md"
              />
            </Link>

            <Link to="/champs" className="transition-transform hover:scale-110 active:scale-95">
              <img
                src={botonChamps}
                alt="Champs"
                className="w-36 sm:w-48 md:w-64 lg:w-72 h-auto drop-shadow-md"
              />
            </Link>

            <Link to="/" className="transition-transform hover:scale-110 active:scale-95">
              <img
                src={botonVolverHome}
                alt="Volver al Home"
                className="w-36 sm:w-48 md:w-64 lg:w-72 h-auto drop-shadow-md"
              />
            </Link>
          </div>
        </div>
        <div className="relative w-full  flex flex-col items-center overflow-visible">
          <div className="relative w-full flex flex-col items-center overflow-visible">
            <img
              src={fondoBlancoBottom}
              alt=""
              aria-hidden="true"
              className="relative w-full h-auto object-cover pointer-events-none drop-shadow-lg z-0"
            />

              <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-visible z-10">
                <div className="w-[75%] flex justify-center relative z-30">
                  <Link
                    to="/donkat"
                    className="transition-transform hover:scale-105 active:scale-95 relative z-30"
                    aria-label="Ir a catálogo de Nutrición Felina"
                  >
                    <img
                      src={botonVisitarNutricionFelina}
                      alt="VISITAR NUTRICIÓN FELINA"
                      className="mt-20 h-auto drop-shadow-md"
                    />
                  </Link>
                </div>
                <img
                  src={gatoBottom}
                  alt="Gato asomándose"
                  className="absolute -bottom-10 right-0 w-[60%] h-auto object-contain z-20 pointer-events-none"
                />
              </div>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Supercan