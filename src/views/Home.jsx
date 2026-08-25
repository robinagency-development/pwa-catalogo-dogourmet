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

function Home() {
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

          <div className="home-logo-wrap">
            <img
              src={logoEmpresasPolar}
              alt="Empresas Polar"
              className="home-polar-logo"
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

        <div className="home-start-section">
          <img
            src={textoPorDondeEmpezar}
            alt="¿POR DÓNDE QUIERES EMPEZAR?"
            className="home-start-title"
          />

          <Link
            to="/dogourmet"
            className="home-interactive-btn"
            aria-label="Ir a catálogo de Nutrición Canina"
          >
            <img
              src={botonNutricionCanina}
              alt="NUTRICIÓN CANINA"
              className="home-nutrition-button"
            />
          </Link>

          <Link
            to="/donkat"
            className="home-interactive-btn"
            aria-label="Ir a catálogo de Nutrición Felina"
          >
            <img
              src={botonNutricionFelina}
              alt="NUTRICIÓN FELINA"
              className="home-nutrition-button"
            />
          </Link>
        </div>

        <div className="home-brand-row">
          <div className="home-brand-logos-wrap">
            <img
              src={logosDogourmet}
              alt="Marcas: Oh mai gat!, Dogourmet, Don Kat, SuperCan, Champ's"
              className="home-brand-logos"
            />
          </div>

          <button
            type="button"
            onClick={() => {}}
            className="home-test-badge"
            aria-label="Hacer test de nutrición para tu mascota"
          >
            <img
              src={patitasBadge}
              alt="¡IR AL TEST!"
              className="home-test-badge-img"
            />
          </button>
        </div>

        <footer className="home-footer">
          <p className="text-[11px] sm:text-[12px] text-[#005382] font-bold leading-snug mb-1.5">
            En Empresas Polar extendemos el compromiso de nutrición íntegra de tu compañero más leal.
          </p>
          <p className="text-[9.5px] sm:text-[10px] text-slate-600 leading-relaxed mb-2.5 max-w-[420px] mx-auto">
            Nuestras fórmulas están respaldadas por una selección rigurosa de materias primas y el cumplimiento de las normativas internacionales{' '}
            <strong className="text-[#005382] font-black">NRC</strong>,{' '}
            <strong className="text-[#005382] font-black">AAFCO</strong> y{' '}
            <strong className="text-[#005382] font-black">FEDIAF</strong>. Somos el aliado que exige tu consulta, mezclando profesionalismo técnico y la calidez humana que nos identifica.
          </p>

          <div className="pt-2 border-t border-slate-100 flex flex-col items-center justify-center">
            <span className="text-[10.5px] text-slate-500 font-medium">
              Conoce más sobre nosotros en
            </span>
            <a
              href="https://empresaspolar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-black text-[#005382] underline underline-offset-2 hover:text-[#003859] transition-colors"
            >
              empresaspolar.com
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default Home