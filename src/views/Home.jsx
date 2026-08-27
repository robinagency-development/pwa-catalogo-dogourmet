import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoEmpresasPolar from '../assets/home/logo-empresas-polar.svg'
import textoPresentes from '../assets/home/textp-presentes.svg'
import textoEnLaAlimentacion from '../assets/home/texto-en-la-alimentacion-de-tu-mejor-amigo.svg'
import textoExploraPortafolio from '../assets/home/texto-explora-nuestro-portafolio.svg'
import elipseHeader from '../assets/home/elipse.svg'
import fondoPatitasGato from '../assets/home/fondo-patitas-gato.svg'
import fondoRojo from '../assets/home/fondo-rojo.svg'
import textoPorDondeEmpezar from '../assets/home/texto-por-donde-quieres-empezar.svg'
import botonNutricionCanina from '../assets/home/boton-nutricion.svg'
import botonNutricionFelina from '../assets/home/boton-nutricion-felina.svg'
import logosDogourmet from '../assets/home/logosdogourmet.svg'
import patitasBadge from '../assets/home/patitas.svg'
import footerHome from '../assets/home/footer-home.svg'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="home-canvas bgblue">
      <div className="home-container bgblue">
        <img
          src={fondoPatitasGato}
          alt=""
          aria-hidden="true"
          className="home-bg-cat-layer"
        />

        <img
          src={fondoRojo}
          alt=""
          aria-hidden="true"
          className="home-bg-red-layer"
        />

        <header className="home-hero">
          <img
            src={elipseHeader}
            alt=""
            aria-hidden="true"
            className="home-hero-ellipse"
          />

          <div className="relative w-full flex flex-col items-center text-center z-0 home-logo-wrap">
            <img
              src={logoEmpresasPolar}
              alt="Empresas Polar"
              className="top-20 left-0 w-[80%] h-auto object-contain -z-10 pointer-events-none"
            />
          </div>

          <div className="home-headline-stack">
            <img
              src={textoPresentes}
              alt="PRESENTES"
              className="home-title-presentes"
            />
            <img
              src={textoEnLaAlimentacion}
              alt="EN LA ALIMENTACIÓN DE TU MEJOR AMIGO"
              className="home-title-alimentacion"
            />
            <img
              src={textoExploraPortafolio}
              alt="¡Explora nuestro portafolio de mascotas!"
              className="home-title-explora"
            />
          </div>
        </header>

        <div className="relative z-50 flex w-full max-w-[800px] flex-col items-center gap-3 mx-auto px-6 pt-3 pb-1 mt-10 pointer-events-auto max-[1024px]:absolute max-[1024px]:top-1/2 max-[1024px]:left-1/2 max-[1024px]:flex-[0_0_auto] max-[1024px]:-translate-x-1/2 max-[1024px]:-translate-y-1/2 max-[1024px]:gap-[clamp(8px,1.15dvh,15px)] max-[1024px]:px-5 max-[1024px]:pt-[clamp(8px,1.9dvh,24px)] max-[1024px]:pb-0 min-[768px]:max-[1024px]:gap-[clamp(12px,1.15dvh,16px)] min-[768px]:max-[1024px]:pt-[clamp(14px,1.6dvh,22px)] min-[1025px]:absolute min-[1025px]:top-1/2 min-[1025px]:left-1/2 min-[1025px]:-translate-x-1/2 min-[1025px]:-translate-y-1/2 min-[1025px]:mt-0 min-[1025px]:w-[clamp(420px,42vw,720px)] min-[1025px]:gap-[clamp(12px,1.5dvh,20px)] min-[1025px]:px-0 min-[1025px]:pt-0 min-[1025px]:pb-0 max-[390px]:gap-[clamp(7px,1dvh,10px)] max-[390px]:pt-[clamp(6px,1.2dvh,10px)]">
          <img
            src={textoPorDondeEmpezar}
            alt="¿POR DÓNDE QUIERES EMPEZAR?"
            className="mt-10 mb-[2px] h-auto w-[80%] drop-shadow-[0_3px_2px_rgba(0,0,0,0.18)] max-[1024px]:mt-5 max-[1024px]:mb-[clamp(0px,0.25dvh,3px)] max-[1024px]:w-[clamp(305px,74vw,535px)] min-[768px]:max-[1024px]:w-[clamp(540px,66vw,675px)] min-[1025px]:mt-0 min-[1025px]:w-[clamp(340px,36vw,590px)] max-[390px]:w-[clamp(220px,72vw,300px)]"
          />

          <Link
            to="/dogourmet"
            className="relative z-50 mt-10 block cursor-pointer pointer-events-auto outline-none transition duration-180 ease-out hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-px active:scale-[0.98] max-[1024px]:mt-0"
            aria-label="Ir a catálogo de Nutrición Canina"
          >
            <img
              src={botonNutricionCanina}
              alt="NUTRICIÓN CANINA"
              className="pointer-events-none block h-auto w-[min(61vw,440px)] max-[1024px]:w-[clamp(280px,60vw,429px)] max-[1024px]:max-h-[clamp(82px,11dvh,140px)] min-[768px]:max-[1024px]:w-[clamp(455px,51vw,520px)] min-[768px]:max-[1024px]:max-h-[170px] min-[1025px]:w-[clamp(320px,34vw,520px)] max-[390px]:w-[clamp(180px,58vw,300px)] max-[390px]:max-h-[84px]"
            />
          </Link>

          <Link
            to="/donkat"
            className="relative z-50 block cursor-pointer pointer-events-auto outline-none transition duration-180 ease-out hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-px active:scale-[0.98]"
            aria-label="Ir a catálogo de Nutrición Felina"
          >
            <img
              src={botonNutricionFelina}
              alt="NUTRICIÓN FELINA"
              className="pointer-events-none block h-auto w-[min(61vw,440px)] max-[1024px]:w-[clamp(280px,60vw,429px)] max-[1024px]:max-h-[clamp(82px,11dvh,140px)] min-[768px]:max-[1024px]:w-[clamp(455px,51vw,520px)] min-[768px]:max-[1024px]:max-h-[170px] min-[1025px]:w-[clamp(320px,34vw,520px)] max-[390px]:w-[clamp(180px,58vw,300px)] max-[390px]:max-h-[84px]"
            />
          </Link>
        </div>

        <div className="relative z-30 flex w-full max-w-[1000px] items-end justify-between mx-auto mt-1 px-3 pt-1 pb-0 max-[1024px]:absolute max-[1024px]:right-0 max-[1024px]:bottom-[clamp(58px,11.5dvh,170px)] max-[1024px]:left-0 max-[1024px]:min-h-[clamp(88px,11dvh,140px)] max-[1024px]:mt-0 max-[1024px]:px-[clamp(8px,2vw,16px)] max-[1024px]:pt-0 max-[1024px]:pb-[clamp(0px,0.45dvh,6px)] min-[768px]:max-[1024px]:min-h-[clamp(138px,13dvh,188px)] min-[768px]:max-[1024px]:px-[clamp(18px,4vw,42px)] min-[1025px]:absolute min-[1025px]:right-0 min-[1025px]:bottom-[clamp(64px,9vh,110px)] min-[1025px]:left-0 min-[1025px]:mt-0 min-[1025px]:px-[clamp(24px,5vw,72px)] min-[1025px]:pt-0 min-[1025px]:pb-0 max-[390px]:min-h-[64px] max-[390px]:px-1">
          <div className="relative -top-10 flex w-[74%] shrink-0 items-center justify-start self-end pl-1 pb-1.5 ml-auto translate-x-4 -translate-y-2 max-[1024px]:w-[74%] max-[1024px]:translate-x-4 max-[1024px]:-translate-y-2 min-[768px]:max-[1024px]:w-[62%] min-[768px]:max-[1024px]:translate-x-3 max-[390px]:w-[74%] max-[390px]:translate-x-3 max-[390px]:-translate-y-1 max-[390px]:pl-0 max-[390px]:pb-0">
            <img
              src={logosDogourmet}
              alt="Marcas: Oh mai gat!, Dogourmet, Don Kat, SuperCan, Champ's"
              className="block h-auto w-full object-contain"
            />
          </div>

          <Link
            to="/testhome"
            onClick={() => { navigate('/testhome') }}
            className="relative z-40 flex w-[min(34%,168px)] items-center justify-center border-0 bg-transparent p-0 max-[1024px]:w-[clamp(106px,30vw,170px)] max-[1024px]:top-10 min-[768px]:max-[1024px]:w-[50%] min-[768px]:max-[1024px]:top-10 min-[1025px]:w-[clamp(120px,12vw,180px)] min-[1025px]:top-0"
            aria-label="Hacer test de nutrición para tu mascota"
          >
            <img
              src={patitasBadge}
              alt="¡IR AL TEST!"
              className="block h-auto w-full"
            />
          </Link>
        </div>

        <footer className="home-footer_">
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-visible z-10">
            <img
              src={footerHome}
              alt="Footer Home"
              className="absolute bottom-0 left-1/2 w-[90%] h-auto -translate-x-1/2 object-contain z-40 pointer-events-none"
            />
          </div>
        </footer>
      </div>
    </main>
  )
}

export default Home