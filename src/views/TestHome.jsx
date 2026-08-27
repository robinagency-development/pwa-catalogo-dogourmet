import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import fondoTop from '../assets/testhome/fondo-rojo-azul.png'
import fondoBlanco from '../assets/testhome/fondo-blanco.png'
import perro from '../assets/testhome/perro.png'
import gato from '../assets/testhome/gato.png'
import test from '../assets/testhome/test.png'
import nuestroPortafolio from '../assets/testhome/nuestro-portafolio.png'
import botonInicio from '../assets/testhome/inicio.png'
import logoEmpresasPolar from '../assets/testhome/logo-empresas-polar.png'
import logoDogourmet from '../assets/testhome/logo-dogourmet.png'
import logoOhmygat from '../assets/testhome/logo-ohmaigat.png'

function TestHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <main className="relative min-h-screen w-full overflow-hidden bg-[#536f76]">
        <div className="relative min-h-screen w-full overflow-hidden">
          <img
            src={fondoTop}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          />

          <img
            src={logoEmpresasPolar}
            alt="Empresas Polar"
            className="absolute left-1/2 top-[2%] z-30 w-[36%] max-w-[220px] -translate-x-1/2 object-contain sm:top-[3%] sm:w-[28%] lg:w-[20%]"
          />

          <Link
            to="/testseleccion"
            aria-label="Haz el test"
            className="absolute right-[5%] top-[8%] z-30 block w-[22%] max-w-[150px] transition-transform hover:scale-105 active:scale-95 sm:right-[8%] sm:top-[9%] sm:w-[18%] lg:right-[12%] lg:top-[10%] lg:w-[13%]"
          >
            <img src={test} alt="Haz el test" className="block h-auto w-full object-contain" />
          </Link>

          <img
            src={perro}
            alt="Perro"
            className="absolute bottom-[35%] left-[-13%] z-0 w-[66%] max-w-[650px] object-contain sm:bottom-[32%] sm:left-[-10%] sm:w-[58%] lg:bottom-[29%] lg:left-[-7%] lg:w-[48%]"
          />

          <img
            src={gato}
            alt="Gato"
            className="absolute bottom-[34%] right-[-9%] z-0 w-[49%] max-w-[540px] object-contain sm:bottom-[31%] sm:right-[-7%] sm:w-[44%] lg:bottom-[28%] lg:right-[-5%] lg:w-[37%]"
          />

          <section className="absolute inset-x-0 bottom-0 z-10 flex min-h-[47%] flex-col items-center overflow-hidden rounded-t-[50%] bg-white px-4 pt-[14%] text-center sm:min-h-[45%] sm:pt-[11%] lg:min-h-[44%] lg:pt-[8%]">
            <img
              src={fondoBlanco}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 z-0 h-full w-full object-cover object-top opacity-100"
            />

            <div className="relative z-10 flex w-full flex-col items-center">
              <img
                src={nuestroPortafolio}
                alt="¡Explora nuestro portafolio de mascotas!"
                className="w-[78%] max-w-[520px] object-contain sm:w-[65%] lg:w-[48%]"
              />

              <Link
                to="/"
                aria-label="Ingresar al inicio"
                className="mt-[5%] block w-[47%] max-w-[310px] transition-transform hover:scale-105 active:scale-95 sm:mt-[4%] sm:w-[36%] lg:mt-[3%] lg:w-[26%]"
              >
                <img
                  src={botonInicio}
                  alt="Ingresa aquí"
                  className="block h-auto w-full object-contain"
                />
              </Link>

              <div className="mt-[5%] flex w-[58%] max-w-[300px] items-center justify-center gap-[8%] sm:mt-[4%] sm:w-[46%] lg:mt-[3%] lg:w-[34%]">
                <img
                  src={logoDogourmet}
                  alt="Dogourmet"
                  className="h-auto w-1/2 object-contain"
                />
                <img
                  src={logoOhmygat}
                  alt="Oh mai gat!"
                  className="h-auto w-1/2 object-contain"
                />
              </div>

              <p className="mt-[3%] max-w-[620px] px-4 text-[7px] leading-tight text-[#526e75] sm:text-[9px] lg:text-[11px]">
                En Empresas Polar extendemos el compromiso de nutrición integral a toda tu compañero más leal. Nuestra fórmula está diseñada para una relación rigurosa de materias primas y el cumplimiento de las normativas internacionales NTC, AAFCO y FEDIAF.
              </p>
            </div>
          </section>
        </div>
    </main>
  )
}

export default TestHome