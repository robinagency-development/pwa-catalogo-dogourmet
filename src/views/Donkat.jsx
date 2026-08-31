import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import donkat from '../assets/donkat/donkat.svg'
import textoParaLosMasKool from '../assets/donkat/texto-para-los-mas-kool.svg'
import textoFormulaDisenada from '../assets/donkat/texto-formula-disenada.svg'
import gatoFormula from '../assets/donkat/gato-formula.svg'
import textoNuestrasPresentaciones from '../assets/donkat/texto-nuestras-presentaciones.svg'
import fondoAmarilloMiddle from '../assets/donkat/fondo-amarillo-middle.svg'
import carrousel1 from '../assets/donkat/adultos16.svg'
import carrousel2 from '../assets/donkat/adultos7.svg'
import carrousel3 from '../assets/donkat/adultos1-1.svg'
import carrousel4 from '../assets/donkat/gaticos7.svg'
import carrousel5 from '../assets/donkat/gaticos1.svg'
import textoNutricionales from '../assets/donkat/texto-pack-completo.svg'
import tablaNutricional from '../assets/donkat/tabla-nutricional.svg'
import tablaNutricional2 from '../assets/donkat/tabla-nutricional-2.svg'
import textoConoceSobre from '../assets/donkat/texto-conoce-sobre.svg'
import botonOhmygat from '../assets/donkat/boton-ohmygat.svg'
import botonVolverHome from '../assets/donkat/boton-volver-al-home.svg'
import fondoAmarillo from '../assets/donkat/fondo-amarillo-footer.svg'
import fondoFooter from '../assets/donkat/fondo-footer.svg'
import botonVisitarNutricionCanina from '../assets/ohmygat/boton-visitar-nutricion.svg'
import perroBottom from '../assets/ohmygat/perro-bottom.svg'
import ImageCarousel from '../components/ImageCarousel'
import ViewAssetLoader, { useAssetLoader } from '../components/ViewAssetLoader'

const donkatAssets = [
  donkat,
  textoParaLosMasKool,
  textoFormulaDisenada,
  gatoFormula,
  textoNuestrasPresentaciones,
  fondoAmarilloMiddle,
  carrousel1,
  carrousel2,
  carrousel3,
  carrousel4,
  carrousel5,
  textoNutricionales,
  tablaNutricional,
  tablaNutricional2,
  textoConoceSobre,
  botonOhmygat,
  botonVolverHome,
  fondoAmarillo,
  fondoFooter,
  botonVisitarNutricionCanina,
  perroBottom,
]

function Donkat() {
  const assetsReady = useAssetLoader(donkatAssets)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!assetsReady) {
    return <ViewAssetLoader label="Cargando Donkat" />
  }

  return (
    <main className="w-full min-h-screen flex flex-col items-center select-none bg-[#BB0694]">
      <section className="pt-0 relative w-full flex flex-col items-center text-center z-0 overflow-hidden bg-[#BB0694]">
        <div className="w-full flex flex-col items-center relative">
          <div className="w-full flex justify-center">
            <img
              src={donkat}
              alt="Donkat"
              className="w-[50%] object-contain"
            />
          </div>
          
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-[75%] mb-4 sm:mb-8 md:mb-10">
            <img
              src={textoParaLosMasKool}
              alt="Irresistible sabor"
              className="w-full h-auto drop-shadow-sm"
            />
            <img
              src={textoFormulaDisenada}
              alt="Fórmula diseñada"
              className="w-full h-auto drop-shadow-sm"
            />
          </div>
        </div>
      </section>
      <section className="relative w-full pt-12 px-4 flex flex-col items-center text-center -mt-8 sm:-mt-14 md:-mt-20 z-50 overflow-visible bg-transparent">
        <div className="relative z-50 w-[90%] flex justify-center items-center -mb-8 sm:-mb-12 md:-mb-16">
          <img
            src={gatoFormula}
            alt="Atributos funcionales"
            className="relative z-50 w-full h-auto object-contain"
          />
        </div>
      </section>
      <section className="relative w-full flex flex-col items-center text-center z-40 pb-16">
        <div className="relative w-full flex flex-col justify-center items-center gap-4 scrollbar-none">
          <img
            src={fondoAmarilloMiddle}
            alt=""
            aria-hidden="true"
            className="absolute inset-x-0 -top-4 w-full h-auto object-contain -z-30 pointer-events-none drop-shadow-md"
          />
          <div className="relative z-10 w-full flex flex-col items-center mt-6 sm:mt-10 md:mt-14">
            <img
              src={textoNuestrasPresentaciones}
              alt="Nuestras tablas nutricionales"
              className="w-[65%] h-auto"
            />
          </div>
          <div className="w-[60%] mb-2 mt-12">
            <ImageCarousel
              className="mt-1 mb-0"
              items={[
                { src: carrousel1, alt: 'Adultos 17 Kilos' },
                { src: carrousel2, alt: 'Adultos 7 Kilos' },
                { src: carrousel3, alt: 'Adultos 1.1 Kilos' },
                { src: carrousel4, alt: 'Gatitos 7 Kilos' },
                { src: carrousel5, alt: 'Gatitos 1 Kilo' },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="relative w-full flex flex-col items-center text-center z-20 bg-[#782793]">
        <div className="donkat-nutrition-content w-full flex flex-col items-center relative z-20 mt-10">
          <div className="flex flex-col items-center gap-2 w-[85%] mt-16 mb-10">
            <img
              src={textoNutricionales}
              alt="Nutricionales"
              className="w-[100%] h-auto"
            />
          </div>
          <div className="w-full flex justify-center items-center gap-4 z-40 mb-20">
            <ImageCarousel
              className="mt-4 mb-2"
              items={[
                { src: tablaNutricional, alt: 'Tabla Nutricional Cachorros' },
                { src: tablaNutricional2, alt: 'Tabla Nutricional Adultos' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="donkat-footer-section relative w-full flex flex-col items-center text-center z-20 overflow-visible pt-14 sm:pt-16 md:pt-20 bg-[#782793]">
        <div className="w-full flex flex-col items-center relative min-h-[280px] sm:min-h-[320px] md:min-h-[380px]">
            {fondoAmarillo && (
              <img
                src={fondoAmarillo}
                alt=""
                aria-hidden="true"
                className="absolute -top-[72px] sm:-top-[56px] md:-top-[84px] lg:-top-[120px] left-0 w-full h-auto object-cover -z-30 pointer-events-none"
              />
            )}
          <div className="flex flex-col items-center gap-2 mb-8 sm:mb-12 mt-10 w-full px-4 sm:px-6">
            <img
              src={textoConoceSobre}
              alt="Conoce Sobre"
              className="w-[60%] h-auto"
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-6 md:gap-8 w-full px-4 sm:px-8 md:px-10">
            <Link to="/ohmygat" className="transition-transform hover:scale-110 active:scale-95 w-[35%]">
              <img
                src={botonOhmygat}
                alt="Oh My Gat"
                className="w-[100%] h-auto drop-shadow-md"
              />
            </Link>

            <Link to="/" className="transition-transform hover:scale-110 active:scale-95 w-[35%]">
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
            src={fondoFooter}
            alt=""
            aria-hidden="true"
            className="relative w-full h-auto object-cover pointer-events-none drop-shadow-lg z-0"
          />
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-visible z-10">
            <div className="w-full h-auto flex justify-center relative z-30 pl-4">
              <Link
                to="/dogourmet"
                className="transition-transform hover:scale-105 active:scale-95 relative z-30 w-[80%]"
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

export default Donkat