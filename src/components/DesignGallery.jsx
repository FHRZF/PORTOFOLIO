import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiChevronLeft, HiChevronRight, HiZoomIn } from 'react-icons/hi'
import { MdGridView, MdViewModule } from 'react-icons/md'

const ITEMS_PER_PAGE = 12

export default function DesignGallery() {
  const [images, setImages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [loading, setLoading] = useState(true)
  const [gridSize, setGridSize] = useState('medium') // 'small' | 'medium'
  const [imgErrors, setImgErrors] = useState({})

  // Load manifest
  useEffect(() => {
    fetch('/designs/manifest.json')
      .then(r => r.json())
      .then(data => {
        setImages(data.files || [])
        setLoading(false)
      })
      .catch(() => {
        // Fallback: generate daftar 1-116 jika manifest belum ada
        const fallback = Array.from({ length: 116 }, (_, i) => `/designs/${i + 1}.jpg`)
        setImages(fallback)
        setLoading(false)
      })
  }, [])

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE)
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE
  const pageImages = images.slice(startIdx, startIdx + ITEMS_PER_PAGE)

  const goToPage = (page) => {
    setCurrentPage(page)
    document.getElementById('design-gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Lightbox navigation
  const globalIndex = lightboxIndex !== null ? startIdx + lightboxIndex : null

  const openLightbox = (pageIdx) => setLightboxIndex(pageIdx)
  const closeLightbox = () => setLightboxIndex(null)

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1)
    } else if (currentPage > 1) {
      setCurrentPage(p => p - 1)
      setLightboxIndex(ITEMS_PER_PAGE - 1)
    }
  }, [lightboxIndex, currentPage])

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return
    if (lightboxIndex < pageImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1)
    } else if (currentPage < totalPages) {
      setCurrentPage(p => p + 1)
      setLightboxIndex(0)
    }
  }, [lightboxIndex, pageImages.length, currentPage, totalPages])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, prevImage, nextImage])

  const handleImgError = (src) => {
    setImgErrors(prev => ({ ...prev, [src]: true }))
  }

  const gridCols = gridSize === 'small'
    ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
    : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'

  const cardHeight = gridSize === 'small' ? 'h-32 sm:h-36' : 'h-44 sm:h-52 md:h-56'

  return (
    <section id="design-gallery" className="py-24 px-6" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">// design collection</p>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mb-4">
            Kumpulan <span className="gradient-text-cyber">Design</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Feed Instagram & koleksi visual design produk HUMMATECH — branding, konten sosial media, dan material pemasaran.
          </p>
          <div className="section-underline mt-4" />
        </motion.div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <p className="text-gray-500 text-sm font-mono">
            {loading ? 'Memuat...' : `${images.length} design · Halaman ${currentPage} dari ${totalPages}`}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setGridSize('medium')}
              title="Grid medium"
              className="p-2 rounded-xl transition-all cursor-pointer"
              style={{
                background: gridSize === 'medium' ? 'rgba(168,85,247,0.2)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${gridSize === 'medium' ? 'rgba(168,85,247,0.5)' : 'rgba(255,255,255,0.1)'}`,
                color: gridSize === 'medium' ? '#a855f7' : '#6b7280'
              }}
            >
              <MdViewModule className="text-lg" />
            </button>
            <button
              onClick={() => setGridSize('small')}
              title="Grid kecil"
              className="p-2 rounded-xl transition-all cursor-pointer"
              style={{
                background: gridSize === 'small' ? 'rgba(168,85,247,0.2)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${gridSize === 'small' ? 'rgba(168,85,247,0.5)' : 'rgba(255,255,255,0.1)'}`,
                color: gridSize === 'small' ? '#a855f7' : '#6b7280'
              }}
            >
              <MdGridView className="text-lg" />
            </button>
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl animate-pulse h-48"
                style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.1)' }}
              />
            ))}
          </div>
        )}

        {/* Image Grid */}
        {!loading && (
          <motion.div
            layout
            className={`grid ${gridCols} gap-3 md:gap-4`}
          >
            <AnimatePresence mode="popLayout">
              {pageImages.map((src, idx) => (
                !imgErrors[src] && (
                  <motion.div
                    key={src}
                    layout
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className={`relative ${cardHeight} rounded-2xl overflow-hidden group cursor-pointer`}
                    style={{
                      border: '1px solid rgba(168,85,247,0.12)',
                      background: 'rgba(19,19,42,0.8)'
                    }}
                    onClick={() => openLightbox(idx)}
                    whileHover={{ scale: 1.03, zIndex: 10 }}
                  >
                    <img
                      src={src}
                      alt={`Design ${startIdx + idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={() => handleImgError(src)}
                    />
                    {/* Overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{ background: 'rgba(10,10,20,0.6)', backdropFilter: 'blur(2px)' }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(168,85,247,0.9)', boxShadow: '0 0 20px rgba(168,85,247,0.6)' }}
                      >
                        <HiZoomIn className="text-white text-lg" />
                      </div>
                    </div>
                    {/* Number badge */}
                    <span
                      className="absolute top-2 left-2 text-xs font-mono px-2 py-0.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: 'rgba(0,0,0,0.7)', color: '#a855f7', border: '1px solid rgba(168,85,247,0.3)' }}
                    >
                      #{startIdx + idx + 1}
                    </span>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 mt-12 flex-wrap"
          >
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ border: '1px solid rgba(168,85,247,0.2)', color: '#a855f7', background: 'rgba(168,85,247,0.05)' }}
            >
              <HiChevronLeft />
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
              const isActive = page === currentPage
              const isNearActive = Math.abs(page - currentPage) <= 2
              const isFirst = page === 1
              const isLast = page === totalPages

              if (!isNearActive && !isFirst && !isLast) {
                if (page === currentPage - 3 || page === currentPage + 3) {
                  return <span key={page} className="text-gray-600 px-1">...</span>
                }
                return null
              }

              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className="w-9 h-9 rounded-xl text-sm font-bold transition-all cursor-pointer font-mono"
                  style={isActive ? {
                    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    color: '#fff',
                    boxShadow: '0 0 16px rgba(168,85,247,0.4)',
                    border: 'none'
                  } : {
                    border: '1px solid rgba(168,85,247,0.15)',
                    color: '#94a3b8',
                    background: 'rgba(168,85,247,0.04)'
                  }}
                >
                  {page}
                </button>
              )
            })}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ border: '1px solid rgba(168,85,247,0.2)', color: '#a855f7', background: 'rgba(168,85,247,0.05)' }}
            >
              <HiChevronRight />
            </button>
          </motion.div>
        )}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && pageImages[lightboxIndex] && !imgErrors[pageImages[lightboxIndex]] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.93)', backdropFilter: 'blur(16px)' }}
            onClick={closeLightbox}
          >
            {/* Image counter */}
            <div
              className="absolute top-5 left-1/2 -translate-x-1/2 font-mono text-sm px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.3)', color: '#c4b5fd' }}
            >
              {globalIndex + 1} / {images.length}
            </div>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-10 h-10 rounded-xl flex items-center justify-center text-white cursor-pointer transition-colors hover:bg-white/10"
              style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <HiX className="text-xl" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-2xl flex items-center justify-center text-white cursor-pointer transition-all hover:scale-110"
              style={{ background: 'rgba(168,85,247,0.3)', border: '1px solid rgba(168,85,247,0.4)', backdropFilter: 'blur(8px)' }}
            >
              <HiChevronLeft className="text-2xl" />
            </button>

            {/* Image */}
            <motion.img
              key={pageImages[lightboxIndex]}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={pageImages[lightboxIndex]}
              alt={`Design ${globalIndex + 1}`}
              className="max-w-[90vw] max-h-[88vh] object-contain rounded-2xl"
              style={{ boxShadow: '0 0 60px rgba(168,85,247,0.25)' }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-2xl flex items-center justify-center text-white cursor-pointer transition-all hover:scale-110"
              style={{ background: 'rgba(168,85,247,0.3)', border: '1px solid rgba(168,85,247,0.4)', backdropFilter: 'blur(8px)' }}
            >
              <HiChevronRight className="text-2xl" />
            </button>

            {/* Keyboard hint */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 text-xs text-gray-600 font-mono">
              <span>← → navigasi</span>
              <span>·</span>
              <span>ESC tutup</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
