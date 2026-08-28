import { useEffect, useState } from 'react'

const isStandalone = () => {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true
}

function InstallPwaButton() {
  const [installPrompt, setInstallPrompt] = useState(null)
  const [isInstalled, setIsInstalled] = useState(() => isStandalone())
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault()
      setInstallPrompt(event)
      setShowHint(false)
    }

      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          setShowHint(false)
        }
      }

    const handleAppInstalled = () => {
      setInstallPrompt(null)
      setIsInstalled(true)
      setShowHint(false)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)
      document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
        document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!installPrompt) {
      setShowHint((currentValue) => !currentValue)
      return
    }

    try {
      await installPrompt.prompt()
      await installPrompt.userChoice
    } finally {
      setInstallPrompt(null)
    }
  }

  if (isInstalled) {
    return null
  }

  return (
    <div className="pwa-install-floating">
      {showHint && (
        <div className="pwa-install-hint" role="status">
          Para instalar, abre el menú del navegador y elige Agregar a pantalla de inicio.
        </div>
      )}

      <button
        type="button"
        className="pwa-install-button"
        onClick={handleInstallClick}
        aria-label="Instalar la aplicación"
        title="Instalar aplicación"
      >
        <svg
          aria-hidden="true"
          className="pwa-install-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3v11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 20h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}

export default InstallPwaButton