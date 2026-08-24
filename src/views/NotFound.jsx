function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#005382] px-6 text-center text-white">
      <div>
        <p className="text-7xl font-black text-[#F3DA01]">404</p>
        <h1 className="mt-3 text-2xl font-black">Página no encontrada</h1>
        <Link className="primary-button mt-7 inline-flex" to="/">
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}

export default NotFound;