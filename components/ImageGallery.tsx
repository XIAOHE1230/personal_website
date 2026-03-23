'use client'

import Image from 'next/image'
import { useRef, useState, useCallback, useEffect } from 'react'

interface ImageGalleryProps {
  slug: string
  images?: string[]
  layout?: 'carousel' | 'vertical'
}

// Placeholder tiles for projects without real images.
const PLACEHOLDERS = [
  { label: 'Overview', aspect: 'aspect-[16/9]', gradient: '120deg' },
  { label: 'Detail A', aspect: 'aspect-square',  gradient: '160deg' },
  { label: 'Detail B', aspect: 'aspect-square',  gradient: '200deg' },
  { label: 'Process',  aspect: 'aspect-[4/3]',   gradient: '240deg' },
]

function DragGallery({ images }: { images: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const total = images.length

  const scrollToIndex = useCallback((i: number) => {
    const el = trackRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(i, total - 1))
    el.scrollTo({ left: el.offsetWidth * clamped, behavior: 'smooth' })
    setActive(clamped)
  }, [total])

  // Non-passive wheel → horizontal scroll, scoped to track element only
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      el.scrollBy({ left: e.deltaY * 2, behavior: 'smooth' })
    }
    el.addEventListener('wheel', handleWheel, { passive: false })
    return () => el.removeEventListener('wheel', handleWheel)
  }, [])

  // Sync active index from scroll position (snap)
  const onScroll = () => {
    const el = trackRef.current
    if (!el) return
    const i = Math.round(el.scrollLeft / el.offsetWidth)
    setActive(i)
  }

  return (
    <div style={{ userSelect: 'none' }}>
      {/* Track */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        style={{
          display: 'flex',
          overflowX: 'hidden',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          cursor: 'default',
          backgroundColor: '#111',
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          maskComposite: 'intersect',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskComposite: 'source-in',
          height: 'clamp(320px, 75vh, 100vh)',
          width: '80vw',
          margin: '0 auto',
        }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            style={{
              flexShrink: 0,
              width: '100%',
              scrollSnapAlign: 'start',
              position: 'relative',
              backgroundColor: '#111',
            }}
          >
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              fill
              draggable={false}
              style={{ objectFit: 'contain', pointerEvents: 'none' }}
            />
          </div>
        ))}
      </div>

      {/* Dots + counter */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, paddingTop: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              style={{
                height: 6,
                width: i === active ? 24 : 6,
                borderRadius: 3,
                backgroundColor: i === active ? 'var(--accent)' : '#444',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'width 0.25s ease, background-color 0.25s ease',
              }}
            />
          ))}
        </div>
        <span
          style={{
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
          }}
        >
          {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

function VerticalGallery({ images }: { images: string[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '80vw', margin: '0 auto' }}>
      {images.map((src, i) => (
        <div key={src} style={{ position: 'relative', width: '100%', backgroundColor: '#111' }}>
          <Image
            src={src}
            alt={`Gallery ${i + 1}`}
            width={0}
            height={0}
            sizes="80vw"
            style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </div>
      ))}
    </div>
  )
}

export default function ImageGallery({ slug, images, layout }: ImageGalleryProps) {
  return (
    <section
      className="py-16"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
        {/* Label */}
        <div className="flex items-center gap-4 mb-10 px-10">
          <span
            className="text-[10px] tracking-[0.22em] uppercase"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Documentation
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        {images && images.length > 0 ? (
          layout === 'vertical'
            ? <VerticalGallery images={images} />
            : <DragGallery images={images} />
        ) : (
          <div className="px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: 'var(--border)' }}>
              {PLACEHOLDERS.map((tile) => (
                <div
                  key={tile.label}
                  className={`relative ${tile.aspect} overflow-hidden`}
                  style={{
                    background: `linear-gradient(${tile.gradient}, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)`,
                  }}
                >
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="text-[10px] tracking-[0.15em] uppercase"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      {slug} — {tile.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
    </section>
  )
}
