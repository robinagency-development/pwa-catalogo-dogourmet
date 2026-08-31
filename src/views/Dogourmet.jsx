import { useState, useMemo, useEffect } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import dogourmet from '../assets/dogourmet/dogourmet.svg'
import textoExquisitas from '../assets/dogourmet/texto-exquisitas-recetas.svg'
import textoParaconseguiratuperro from '../assets/dogourmet/texto-para-consentir-a-tu-perro.svg'
import textoQueAportanProteinas from '../assets/dogourmet/texto-que-aporta-proteinas.svg'
import fondoRojoTop from '../assets/dogourmet/fondo-rojo-dogourmet.svg'
import perroIzquierda from '../assets/dogourmet/perro-izquierda.svg'
import textoVerMas from '../assets/dogourmet/texto-ver-mas.svg'
import flechaVerMas from '../assets/dogourmet/flecha-ver-mas.svg'
import fondoCrema from '../assets/dogourmet/fondo-crema.svg'
import textoAtributos from '../assets/dogourmet/texto-atributos.svg'
import textoFuncionales from '../assets/dogourmet/texto-funcionales.svg'
import perroAtributos from '../assets/dogourmet/perro-atributos.svg'
import textoHuellitasPorExplorar from '../assets/dogourmet/texto-huellitas-por-explorar.svg'
import botonVisitarNutricionFelina from '../assets/dogourmet/boton-visitar-nutricion-felina.svg'
import fondoBlancoBottom from '../assets/dogourmet/fondo-blanco-bottom.svg'
import gatoBottom from '../assets/dogourmet/gato-bottom.svg'
import botonChamps from '../assets/dogourmet/boton-champs.svg'
import botonSupercan from '../assets/dogourmet/boton-supercan.svg'
import botonVolverHome from '../assets/dogourmet/boton-volver-home.svg'
import botonNuestrasTasasNutricionales from '../assets/dogourmet/boton-nuestras-tasas-nutricionales.svg'
import carrousel1 from '../assets/dogourmet/carrousel-1.svg'
import carrousel2 from '../assets/dogourmet/carrousel-2.svg'
import carrousel3 from '../assets/dogourmet/carrousel-3.svg'
import fondoAmarilloTop from '../assets/dogourmet/fondo-amarillo-top.svg'
import fondoAmarilloBottom from '../assets/dogourmet/fondo-amarillo-bottom.svg'
import textoActuamosComo from '../assets/dogourmet/texto-actuamos-como-un-escudo.svg'
import textoConoceSobre from '../assets/dogourmet/texto-conoce-sobre.svg'
import textoEnergiaProtegida from '../assets/dogourmet/texto-energia-protegida.svg'
import perroEnergiaProtegida from '../assets/dogourmet/perro-energia-protegida.svg'
import asadoNegro from '../assets/dogourmet/asado-negro.svg'
import carneCereales from '../assets/dogourmet/carne-y-cereales.svg'
import parrillaMixta from '../assets/dogourmet/parrilla-mixta.svg'
import polloAlaBrasa from '../assets/dogourmet/pollo-a-la-brasa.svg'
import textoProteinas from '../assets/dogourmet/texto-proteinas-de-alta-calidad.svg'
import textoFundamental from '../assets/dogourmet/texto-fundamental-para-el-mantenimiento.svg'
import textoNuestros from '../assets/dogourmet/texto-nuestros.svg'
import textoSabores from '../assets/dogourmet/texto-sabores.svg'
import botonDesliza from '../assets/dogourmet/boton-desliza.svg'
import fondoRojoArriba from '../assets/dogourmet/fondo-rojo-arriba.svg'
import ImageCarousel from '../components/ImageCarousel'
import ViewAssetLoader, { useAssetLoader } from '../components/ViewAssetLoader'

const dogourmetAssets = [
  dogourmet,
  textoExquisitas,
  textoParaconseguiratuperro,
  textoQueAportanProteinas,
  fondoRojoTop,
  perroIzquierda,
  textoVerMas,
  flechaVerMas,
  fondoCrema,
  textoAtributos,
  textoFuncionales,
  perroAtributos,
  textoHuellitasPorExplorar,
  botonVisitarNutricionFelina,
  fondoBlancoBottom,
  gatoBottom,
  botonChamps,
  botonSupercan,
  botonVolverHome,
  botonNuestrasTasasNutricionales,
  carrousel1,
  carrousel2,
  carrousel3,
  fondoAmarilloTop,
  fondoAmarilloBottom,
  textoActuamosComo,
  textoConoceSobre,
  textoEnergiaProtegida,
  perroEnergiaProtegida,
  asadoNegro,
  carneCereales,
  parrillaMixta,
  polloAlaBrasa,
  textoProteinas,
  textoFundamental,
  textoNuestros,
  textoSabores,
  botonDesliza,
  fondoRojoArriba,
]

function Dogourmet() {
  const assetsReady = useAssetLoader(dogourmetAssets)

  const handleGoToAtributos = (event) => {
    const atributosSection = document.getElementById('atributos')

    if (!atributosSection) {
      return
    }

    event.preventDefault()
    atributosSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', '/dogourmet#atributos')
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!assetsReady) {
    return <ViewAssetLoader label="Cargando Dogourmet" />
  }

  return (
    <main className="w-full min-h-screen bg-[#FFF8E7] flex flex-col items-center select-none">
      <section className="relative w-full pt-10 sm:pt-16 md:pt-24 pb-20 sm:pb-32 md:pb-40 flex flex-col items-center text-center z-10">
        <img
          src={fondoRojoTop}
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-auto object-contain -z-10 pointer-events-none drop-shadow-md"
        />

        <div className="w-full flex flex-col items-center relative">
          <div className="w-full flex justify-center mb-4 sm:mb-6 md:mb-8">
            <img
              src={dogourmet}
              alt="Dogourmet"
              className="min-w-[50%] max-w-[75%] mt-8 object-contain"
            />
          </div>
          
          <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 w-[80%] mb-6 sm:mb-10">
            <img
              src={textoExquisitas}
              alt="EXQUISITAS RECETAS"
              className="w-full h-auto drop-shadow-sm"
            />
            <img
              src={textoParaconseguiratuperro}
              alt="PARA CONSENTIR A TU PERRO"
              className="w-full h-auto drop-shadow-sm"
            />
            <img
              src={textoQueAportanProteinas}
              alt="Que aportan proteínas de alta biodisponibilidad"
              className="w-[90%] sm:w-[85%] h-auto opacity-95 mt-1"
            />
          </div>

          <div className="dogourmet-hero-visual relative w-full min-h-[420px] sm:min-h-[500px] md:min-h-[640px] lg:min-h-[920px]">
            <img
              src={perroIzquierda}
              alt="Perro Dogourmet"
              className="absolute left-0 -top-[10%] w-[85%] z-10 pointer-events-none object-contain drop-shadow-lg"
            />
            <Link to="/dogourmet#atributos" onClick={handleGoToAtributos}>
              <div className="absolute right-12 sm:right-12 top-[18%] w-[35%] flex flex-col items-center gap-1 sm:gap-2 z-20">
                <img
                  src={textoVerMas}
                  alt="VER MÁS"
                  className="w-full h-auto cursor-pointer transition-transform hover:scale-105"
                />
                <img
                  src={flechaVerMas}
                  alt=""
                  aria-hidden="true"
                  className="w-[26%] h-auto cursor-pointer transition-transform hover:scale-105 mt-6"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative w-full pt-10 sm:pt-16 md:pt-24 pb-16 sm:pb-24 md:pb-32 px-4 flex flex-col items-center text-center -mt-8 sm:-mt-14 md:-mt-20 z-0 overflow-visible bg-[#FFF8E7]">
        {fondoCrema && (
          <img
            src={fondoCrema}
            alt=""
            aria-hidden="true"
            className="dogourmet-cream-background absolute -top-10 left-0 w-full h-full object-cover -z-20 pointer-events-none"
          />
        )}
        <div className="w-full flex flex-col items-center relative z-10">
          <div className="dogourmet-attributes-heading flex flex-col items-center gap-1 sm:gap-2 mb-8 sm:mb-12 md:mb-16 w-[80%] mt-30">
            <img
              src={textoAtributos}
              alt="ATRIBUTOS"
              className="w-[50%] h-auto"
            />
            <img
              src={textoFuncionales}
              alt="FUNCIONALES"
              className="w-[80%] h-auto -mt-1 sm:-mt-2"
            />
          </div>
          <div id="atributos" className="relative w-[100%] flex justify-center items-center mb-4 sm:mb-8 z-10">
            <img
              src={perroAtributos}
              alt="Atributos nutricionales Dogourmet con perro cobrador dorado"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
          {fondoRojoArriba && (
          <img
            src={fondoRojoArriba}
            alt=""
            aria-hidden="true"
            className="absolute top-full left-0 w-full h-auto object-cover -z-20 pointer-events-none mt-[-42%]"
          />
        )}
      </section>
      <section className="relative w-full flex flex-col items-center text-center z-10 bg-[#830D0B] pb-16">
        <div className="w-full flex flex-col items-center relative z-20 -top-20">
          <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 w-[80%] mb-8">
            <img
              src={textoProteinas}
              alt="Proteinas de alta calidad y biodisponibles"
              className="w-full h-auto drop-shadow-sm"
            />
            <img
              src={textoFundamental}
              alt="Fundamental para el mantenimiento de la masa muscular y reparación de tejidos"
              className="w-full h-auto drop-shadow-sm"
            />
          </div>
          <div className="w-full flex justify-start my-6 sm:my-8">
            <img
              src={botonDesliza}
              alt="Botón Desliza"
              className="w-[30%] h-auto drop-shadow-sm"
            />
          </div>
          <div className="w-full flex flex-col items-center gap-1 sm:gap-2 my-8 sm:my-10 relative z-10">
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
          <ImageCarousel
            className="mt-4 mb-2"
            items={[
              { src: asadoNegro, alt: 'Plato de comida húmeda sabor Asado Negro' },
              { src: carneCereales, alt: 'Carne y cereales' },
              { src: parrillaMixta, alt: 'Parrilla Mixta' },
              { src: polloAlaBrasa, alt: 'Pollo a la Brasa' },
            ]}
          />
        </div>
    </section>
      <section className="relative w-full pt-12 sm:pt-20 pb-16 sm:pb-28 flex flex-col items-center text-center z-10 bg-[#830D0B]">
        {fondoAmarilloTop && (
        <>
          <img
            src={fondoAmarilloTop}
            alt=""
            aria-hidden="true"
            className="absolute top-0 left-0 w-full h-auto object-cover -z-20 pointer-events-none"
          />
          <img
            src={perroEnergiaProtegida}
            alt="Perro Energia Protegida"
            className="dogourmet-energy-dog absolute -top-[12%] left-0 w-[60%] h-auto object-contain -z-30 pointer-events-none"
          />
        </>
        )}
        
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 w-full -mt-4">
          <img
            src={textoEnergiaProtegida}
            alt="Energia Protegida"
            className="mt-12 w-[60%] h-auto drop-shadow-sm mt-12"
          />
          <img
            src={textoActuamosComo}
            alt="Que aportan proteínas de alta biodisponibilidad"
            className="w-[85%] h-auto opacity-95 mt-3"
          />
        </div>
        <div className="w-full flex flex-col items-center relative">
          <div className="w-full flex flex-col items-center mb-6 sm:mb-10">
            <img
              src={botonNuestrasTasasNutricionales}
              alt="Nuestras tablas nutricionales"
              className="mt-10 w-[90%] h-auto"
            />
          </div>
          <div className="w-full flex justify-center items-center gap-4 scrollbar-none bg-[#FCB212]">
            <div className="mb-6 sm:mb-10">
              <ImageCarousel
                className="mt-4 mb-2"
                items={[
                  { src: carrousel1, alt: 'Tabla Nutricional Cachorros' },
                  { src: carrousel2, alt: 'Tabla Nutricional Adultos' },
                  { src: carrousel3, alt: 'Tabla Nutricional Parrilla Mixta' },
                ]}
              />
            </div>
          </div>
        </div>

        {fondoAmarilloBottom && (
          <img
            src={fondoAmarilloBottom}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-full h-auto object-cover -z-10 pointer-events-none"
          />
        )}
        
      </section>
      <section className="relative w-full flex flex-col items-center text-center bg-[#830D0B] z-20 overflow-visible">
        <div className="w-full flex flex-col items-center relative">
           <div className="relative w-full flex flex-col items-center overflow-visible">
            {fondoAmarilloBottom && (
              <img
                src={fondoAmarilloBottom}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover -z-10 pointer-events-none drop-shadow-lg"
              />
            )}

          </div>
          <div className="w-full flex flex-col items-center gap-2 mb-12 mt-14">
            <img
              src={textoHuellitasPorExplorar}
              alt="HUELLITAS POR EXPLORAR"
              className="w-[86%] h-auto"
            />
            <img
              src={textoConoceSobre}
              alt="CONOCE SOBRE"
              className="w-[80%] h-auto mb-4"
            />
          </div>

          <div className="flex flex-row justify-center items-center gap-3 sm:gap-6 md:gap-8 w-full">
            <Link to="/supercan" className="transition-transform hover:scale-110 active:scale-95">
              <img
                src={botonSupercan}
                alt="SuperCan"
                className="w-42 sm:w-48 md:w-72 lg:w-96 h-auto drop-shadow-md"
              />
            </Link>
            <Link to="/champs" className="transition-transform hover:scale-110 active:scale-95">
              <img
                src={botonChamps}
                alt="Champ's"
                className="w-42 sm:w-48 md:w-72 lg:w-96 h-auto drop-shadow-md"
              />
            </Link>

            <Link to="/" className="transition-transform hover:scale-110 active:scale-95">
              <img
                src={botonVolverHome}
                alt="Volver al Home"
                className="w-42 sm:w-48 md:w-72 lg:w-96 h-auto drop-shadow-md"
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
                  className="absolute bottom-0 right-0 w-[60%] h-auto object-contain z-20 pointer-events-none"
                />
              </div>
            </div>
        </div>
      </section>

    </main>
  )
}

export default Dogourmet