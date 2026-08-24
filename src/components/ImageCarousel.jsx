import { useRef, useState } from 'react'

function ImageCarousel({ items, className = '' }) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)

  const goTo = (i) => {
    const next = (i + items.length) % items.length
    setIndex(next)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(deltaX) > 40) {
      goTo(index + (deltaX < 0 ? 1 : -1))
    }
    touchStartX.current = null
  }

  const dragStartX = useRef(null)

  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX
  }

  const handlePointerUp = (e) => {
    if (dragStartX.current === null) return
    const deltaX = e.clientX - dragStartX.current
    if (Math.abs(deltaX) > 40) {
      goTo(index + (deltaX < 0 ? 1 : -1))
    }
    dragStartX.current = null
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goTo(index - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      goTo(index + 1)
    }
  }

  return (
    <div className={`relative w-full flex flex-col items-center ${className}`}>
      <div
        className="relative w-[80%] overflow-hidden outline-none cursor-grab active:cursor-grabbing"
        tabIndex={0}
        role="group"
        aria-label="Carrusel de imágenes"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onKeyDown={handleKeyDown}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="w-full shrink-0 flex justify-center items-center"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-contain drop-shadow-lg pointer-events-none select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === index ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
