import { useEffect, useState } from 'react'

const loadedAssets = new Set()

export function useAssetLoader(assets) {
  const [assetsReady, setAssetsReady] = useState(() => assets.every((asset) => loadedAssets.has(asset)))

  useEffect(() => {
    let isMounted = true
    const pendingAssets = [...new Set(assets)].filter((asset) => !loadedAssets.has(asset))

    if (pendingAssets.length === 0) {
      setAssetsReady(true)
      return () => {
        isMounted = false
      }
    }

    setAssetsReady(false)

    Promise.all(
      pendingAssets.map(
        (asset) =>
          new Promise((resolve) => {
            const image = new Image()
            image.onload = () => {
              loadedAssets.add(asset)
              resolve()
            }
            image.onerror = () => {
              loadedAssets.add(asset)
              resolve()
            }
            image.src = asset
          }),
      ),
    ).then(() => {
      if (isMounted) {
        setAssetsReady(true)
      }
    })

    return () => {
      isMounted = false
    }
  }, [assets])

  return assetsReady
}

function ViewAssetLoader({ label = 'Cargando experiencia' }) {
  return (
    <main className="home-canvas bgblue">
      <section className="home-loader" role="status" aria-live="polite">
        <div className="home-loader-brand">Empresas Polar</div>
        <div className="home-loader-ring" aria-hidden="true" />
        <p>{label}</p>
      </section>
    </main>
  )
}

export default ViewAssetLoader