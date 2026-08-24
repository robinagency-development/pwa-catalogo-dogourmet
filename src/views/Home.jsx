import { useState, useMemo } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
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

        <header className="relative z-10 w-full overflow-hidden flex flex-col items-center pt-3 pb-8 sm:pb-10 px-4">
          <img
            src={elipseHeader}
            alt=""
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full min-w-[100%] h-full object-fill -z-10 pointer-events-none drop-shadow-md"
          />

          <div className="pt-2 pb-2 flex justify-center items-center">
            <img
              src={logoEmpresasPolar}
              alt="Empresas Polar"
              className="h-32 w-auto max-w-[320px] object-contain"
            />
          </div>

          <div className="flex flex-col items-center text-center gap-1 z-10 w-full max-w-[360px]">
            <img
              src={textoPresentes}
              alt="PRESENTES"
              className="w-[165px] sm:w-[190px] h-auto drop-shadow-sm"
            />
            <img
              src={textoEnLaAlimentacion}
              alt="EN LA ALIMENTACIÓN DE TU MEJOR AMIGO"
              className="w-[280px] sm:w-[315px] h-auto drop-shadow-sm"
            />
            <img
              src={textoExploraPortafolio}
              alt="¡Explora nuestro portafolio de mascotas!"
              className="w-[250px] sm:w-[280px] h-auto opacity-95"
            />
          </div>
        </header>

        <div className="relative z-10 flex flex-col items-center px-6 pt-3 pb-1 w-full max-w-[800px] mx-auto gap-3">
          <img
            src={textoPorDondeEmpezar}
            alt="¿POR DÓNDE QUIERES EMPEZAR?"
            className="w-[480px] sm:w-[580px] lg:w-[640px] xl:w-[780px] h-auto mb-0.5 drop-shadow"
          />

          <Link
            to="/dogourmet"
            className="home-interactive-btn"
            aria-label="Ir a catálogo de Nutrición Canina"
          >
            <img
              src={botonNutricionCanina}
              alt="NUTRICIÓN CANINA"
              className="xs:w-[300px] w-[440px]"
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
              className="xs:w-[300px] w-[440px]"
            />
          </Link>
        </div>

        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 py-2 flex items-center justify-between mt-1">
          <div className="w-[74%] flex items-center justify-start pl-2">
            <img
              src={logosDogourmet}
              alt="Marcas: Oh mai gat!, Dogourmet, Don Kat, SuperCan, Champ's"
              className="w-full h-auto object-contain drop-shadow"
            />
          </div>

          <button
            type="button"
            onClick={() => {}}
            className="home-test-badge w-[50%] -ml-3 flex justify-center items-center bg-transparent border-0 p-0"
            aria-label="Hacer test de nutrición para tu mascota"
          >
            <img
              src={patitasBadge}
              alt="¡IR AL TEST!"
              className="w-full h-auto"
            />
          </button>
        </div>

        <footer className="relative z-10 w-[calc(100%-32px)] sm:w-[calc(100%-48px)] mx-auto bg-white rounded-t-[32px] px-5 sm:px-6 pt-4 pb-5 text-center shadow-xl mt-auto border border-white/40">
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