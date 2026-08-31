import { useState, useMemo, useEffect } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import logoChamps from '../assets/champs/champs.svg'
import fondoTop from '../assets/champs/fondo-top.svg'
import textoNutricionCompleta from '../assets/champs/texto-nutricion-completa.svg'
import textoNuestraFormula from '../assets/champs/texto-nuestra-formula.svg'
import textoHazTap from '../assets/champs/texto-haz-tap.svg'
import textoConoceSobre from '../assets/champs/texto-conoce-sobre.svg'
import botonSuperCan from '../assets/champs/boton-supercan.svg'
import botonDogourmet from '../assets/champs/boton-dogourmet.svg'
import botonVolverHome from '../assets/champs/boton-volver-home.svg'
import perroNutricionCompleta from '../assets/champs/perro-nutricion-completa.svg'
import fondoAmarilloTop from '../assets/champs/fondo-amarillo-top.svg'
import fondoBlancoBottom from '../assets/champs/fondo-blanco-bottom.svg'
import botonVisitarNutricionFelina from '../assets/champs/boton-visitar-nutricion-felina.svg'
import gatoBottom from '../assets/champs/gato-bottom.svg'
import textoNuestros from '../assets/champs/texto-nuestros.svg'
import textoSabores from '../assets/champs/texto-sabores.svg'
import textoNuestrasTablas from '../assets/champs/texto-nuestras-tablas.svg'
import textoNutricionales from '../assets/champs/texto-nutricionales.svg'
import carrousel1 from '../assets/champs/carne-taco.svg'
import fondoAzulNuestrosSabores from '../assets/champs/fondo-nuestros-sabores.svg'
import fondoAzulBottom from '../assets/champs/fondo-azul-bottom.svg'
import tablaNutricional from '../assets/champs/tabla-nutricional.svg'
import ViewAssetLoader, { useAssetLoader } from '../components/ViewAssetLoader'

const champsAssets = [
  logoChamps,
  fondoTop,
  textoNutricionCompleta,
  textoNuestraFormula,
  textoHazTap,
  textoConoceSobre,
  botonSuperCan,
  botonDogourmet,
  botonVolverHome,
  perroNutricionCompleta,
  fondoAmarilloTop,
  fondoBlancoBottom,
  botonVisitarNutricionFelina,
  gatoBottom,
  textoNuestros,
  textoSabores,
  textoNuestrasTablas,
  textoNutricionales,
  carrousel1,
  fondoAzulNuestrosSabores,
  fondoAzulBottom,
  tablaNutricional,
]

function Champs() {
  const assetsReady = useAssetLoader(champsAssets)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!assetsReady) {
    return <ViewAssetLoader label="Cargando Champs" />
  }

  return (
    <main className="home-champs">
      <div className="home-container !min-h-0 !justify-normal !overflow-visible">
        <header className="relative z-10 w-full h-screen md:h-auto md:aspect-[720/607] overflow-hidden flex items-center justify-center mb-10">
          <img
            src={fondoTop}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 -z-10 pointer-events-none drop-shadow-md"
          />
          <img
            src={logoChamps}
            alt="Empresas Polar"
            className="h-auto w-auto min-w-[50%] max-w-[75%] object-contain mb-20 lg:mb-60"
          />
        </header>
        <div className="w-full flex flex-col items-center mx-auto justify-center w-full mb-6 sm:mb-10">
          <img
            src={textoNutricionCompleta}
            alt="Nutrición completa"
            className="w-[90%] h-auto drop-shadow-sm my-10"
          />
          <img
            src={textoNuestraFormula}
            alt="Nuestra fórmula"
            className="w-[90%] h-auto drop-shadow-sm mb-10"
          />
        </div>
        <div className="w-full flex flex-col items-center mx-auto justify-center">
          <img
            src={perroNutricionCompleta}
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <section className="relative w-full flex flex-col items-center text-center z-30 pb-16">
        <div className="w-full flex flex-col items-center relative z-20">
          <img
            src={fondoAzulNuestrosSabores}
            alt=""
            aria-hidden="true"
            className="champs-flavors-background absolute w-full h-auto object-cover pointer-events-none -z-20 -top-30 lg:-top-50"
          />
          <div className="relative w-full flex flex-col items-center overflow-hidden">
            <div className="w-full flex flex-col items-center gap-1 sm:gap-2 my-16 relative z-10">
              <img
                src={textoNuestros}
                alt="Nuestros"
                className="w-[40%] h-auto mt-12"
              />
              <img
                src={textoSabores}
                alt="Sabores"
                className="w-[60%] h-auto -mt-1 sm:-mt-2"
              />
            </div>
            <div className="w-full flex justify-center items-center gap-4 scrollbar-none relative z-10">
              <div className="w-full flex flex-col items-center mx-auto justify-center">
                <img
                  src={carrousel1}
                  alt="Tabla Nutricional Cachorros"
                  className="w-[70%] h-auto object-contain mb-50 lg:mb-46"
                />
              </div>
            </div>
            {fondoAzulBottom && (
              <img
                src={fondoAzulBottom}
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full h-auto object-cover -z-10 pointer-events-none"
              />
            )}
          </div>
          <div className="flex flex-col items-center gap-2 w-[80%] mb-10 mt-2">
            <img
              src={textoNuestrasTablas}
              alt="Nuestras tablas"
              className="w-[65%] h-auto mb-4"
            />
            <img
              src={textoNutricionales}
              alt="Nutricionales"
              className="w-[80%] h-auto"
            />
          </div>
          <div className="w-full flex justify-center items-center gap-4 z-40">
            <img
              src={tablaNutricional}
              alt="Tabla Nutricional"
              className="w-[90%] h-auto"
            />
          </div>
        </div>
      </section>
      <section className="relative w-full flex flex-col items-center text-center bg-[#F49712] z-20 overflow-visible">
        <div className="w-full flex flex-col items-center relative">
            {fondoAmarilloTop && (
              <img
                src={fondoAmarilloTop}
                alt=""
                aria-hidden="true"
                className="absolute -top-45 left-0 w-full h-auto object-cover -z-30 pointer-events-none"
              />
            )}
          <div className="flex flex-col items-center gap-2 mb-8 sm:mb-12 mt-6 w-full">
            <img
              src={textoHazTap}
              alt="Haz Tap"
              className="w-[30%] h-auto mb-4"
            />
            <img
              src={textoConoceSobre}
              alt="Conoce Sobre"
              className="w-76 w-[80%] h-auto mb-4"
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-6 md:gap-8 w-[95%]">
            <Link to="/supercan" className="transition-transform hover:scale-110 active:scale-95">
              <img
                src={botonSuperCan}
                alt="SuperCan"
                className="w-36 sm:w-48 md:w-64 lg:w-72 h-auto drop-shadow-md"
              />
            </Link>

            <Link to="/dogourmet" className="transition-transform hover:scale-110 active:scale-95">
              <img
                src={botonDogourmet}
                alt="Champ's"
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
          <img
            src={fondoBlancoBottom}
            alt=""
            aria-hidden="true"
            className="relative w-full h-auto object-cover pointer-events-none drop-shadow-lg z-0"
          />
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-visible z-10">
            <div className="w-full h-auto flex justify-end relative z-30 pr-4 sm:pr-8 md:pr-12 mt-24">
              <Link
                to="/donkat"
                className="transition-transform hover:scale-105 active:scale-95 relative z-30 w-[62%]"
                aria-label="Ir a catálogo de Nutrición Felina"
              >
                <img
                  src={botonVisitarNutricionFelina}
                  alt="VISITAR NUTRICIÓN FELINA"
                  className="w-full h-auto drop-shadow-md"
                />
              </Link>
            </div>
            <img
              src={gatoBottom}
              alt="Gato asomándose"
              className="absolute bottom-0 left-0 w-[46%] h-auto object-contain z-40 pointer-events-none"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Champs