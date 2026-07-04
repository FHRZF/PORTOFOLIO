import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowNarrowRight, HiX, HiCheck } from 'react-icons/hi'
import { RiExternalLinkLine, RiFigmaLine } from 'react-icons/ri'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filters = [
    { name: 'Semua', value: 'all' },
    { name: 'Mobile', value: 'mobile' },
    { name: 'Web', value: 'web' },
    { name: 'Dashboard', value: 'dashboard' },
  ]

  const projects = [
    {
      id: 1,
      title: 'HealthAI — Mental Wellness App',
      category: 'mobile',
      description: 'Desain UI lengkap untuk aplikasi kesehatan mental berbasis AI yang membantu pengguna memantau suasana hati harian, meditasi terpandu, dan konsultasi dengan psikolog digital.',
      longDescription: 'Proyek ini memenangkan Juara 1 Lomba UI/UX Nasional 2023. Fokus pada penyelesaian masalah: pengguna sering tidak menyadari tanda-tanda burnout hingga terlambat. Kami mendesain mood tracker harian dengan visualisasi data 30 hari, breathing exercise interaktif, dan sistem notifikasi berbasis pola suasana hati.',
      problem: 'Pengguna tidak menyadari gejala burnout &amp; stres kronis karena tidak ada cara mudah memantau kesehatan mental sehari-hari.',
      solution: 'AI-powered mood logger dengan insight mingguan, meditasi berbasis kondisi pengguna, dan booking psikolog dalam 3 klik.',
      outcome: 'SUS Score 94/100 pada user testing. Memenangkan Juara 1 Lomba UI/UX Nasional 2023.',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&h=600&fit=crop',
      tags: ['Mobile', 'UI Design', 'AI Feature', 'Figma'],
      tools: ['Figma', 'Maze Testing', 'FigJam', 'Adobe Illustrator'],
      accent: '#a855f7',
    },
    {
      id: 2,
      title: 'NexaFin — Crypto Trading Dashboard',
      category: 'dashboard',
      description: 'Dashboard trading kripto dengan visualisasi data real-time, analisis portfolio multi-aset, dan antarmuka order yang dioptimalkan untuk trader berpengalaman.',
      longDescription: 'NexaFin dirancang untuk trader kripto kelas menengah-atas yang membutuhkan informasi pasar secara cepat tanpa cognitive overload. Desain menggabungkan chart candlestick interaktif resolusi tinggi, indikator teknikal kustomisasi, widget order book real-time, serta panel notifikasi harga pintar.',
      problem: 'Platform kripto yang ada terlalu rumit untuk trader semi-profesional dan terlalu lambat untuk merespons volatilitas pasar cepat.',
      solution: 'Dashboard modular yang bisa dikustomisasi oleh pengguna, dengan layout yang disederhanakan berdasarkan riset 40 trader aktif.',
      outcome: 'Prototype mendapat rating 4.8/5 dari 40 trader uji. Kecepatan eksekusi order naik 60% vs platform lama.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&h=600&fit=crop',
      tags: ['Dashboard', 'FinTech', 'Data Viz', 'Dark UI'],
      tools: ['Figma', 'Design System', 'Principle', 'UserTesting.com'],
      accent: '#06b6d4',
    },
    {
      id: 3,
      title: 'AstroShop — AR E-commerce Redesign',
      category: 'web',
      description: 'Redesain total platform e-commerce fashion premium dengan fitur AR try-on, one-page checkout, dan sistem rekomendasi produk cerdas berbasis preferensi belanja.',
      longDescription: 'Redesain komprehensif platform fashion online dengan fokus utama: mengurangi return rate yang tinggi akibat ekspektasi produk tidak sesuai. Solusi utama: integrasi AR try-on langsung di browser, visualisasi produk 360°, dan checkout 1 halaman dengan auto-fill alamat & metode pembayaran tersimpan.',
      problem: 'Return rate 38% karena produk tidak sesuai ekspektasi. Checkout 5 halaman menyebabkan 72% cart abandonment.',
      solution: 'Browser AR try-on tanpa install app, gambar produk 360°, dan one-page checkout dengan smart auto-fill.',
      outcome: 'Conversion rate naik 34%. Return rate turun 22%. Cart abandonment berkurang dari 72% menjadi 41%.',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&h=600&fit=crop',
      tags: ['E-commerce', 'AR Feature', 'Web', 'UX Research'],
      tools: ['Figma', 'Hotjar', 'Maze', 'Adobe XD'],
      accent: '#ec4899',
    },
    {
      id: 4,
      title: 'SmartCity — Urban Management Platform',
      category: 'dashboard',
      description: 'Platform manajemen kota pintar dengan dashboard terpadu untuk monitoring traffic real-time, pengelolaan laporan warga, dan analitik layanan publik kota.',
      longDescription: 'Kolaborasi dengan pemerintah daerah untuk merancang platform SmartCity yang memungkinkan petugas memantau 50+ indikator kota secara bersamaan. Platform mencakup peta interaktif real-time, sistem tiket laporan warga berprioritas AI, dashboard energi & kebersihan, dan panel alert darurat.',
      problem: 'Petugas kota menggunakan 8 aplikasi berbeda yang tidak terintegrasi, menyebabkan respons lambat terhadap kejadian penting.',
      solution: 'Single unified dashboard dengan peta real-time, integrasi semua layanan kota, dan AI-prioritized alert system.',
      outcome: 'Waktu respons kejadian kritis berkurang 45%. Kepuasan petugas meningkat dari 52% menjadi 89%.',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&h=600&fit=crop',
      tags: ['Dashboard', 'Web', 'Gov Tech', 'Map UI'],
      tools: ['Figma', 'ArcGIS Mockup', 'Design Sprint', 'Miro'],
      accent: '#10b981',
    },

  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const accentColorMap = {
    '#a855f7': 'rgba(168,85,247,',
    '#06b6d4': 'rgba(6,182,212,',
    '#ec4899': 'rgba(236,72,153,',
    '#10b981': 'rgba(16,185,129,',
  }

  return (
    <section id="portfolio" className="py-24 px-6" style={{ backgroundColor: '#0d0d1a' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">// design work</p>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mb-4">
            Portofolio <span className="gradient-text-cyber">UI/UX</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Studi kasus nyata dari desain yang berfokus pada solusi pengguna &amp; dampak bisnis terukur.
          </p>
          <div className="section-underline mt-4" />
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => (
            <motion.button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full text-sm font-semibold font-grotesk transition-all duration-300 cursor-pointer"
              style={activeFilter === f.value ? {
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                color: '#fff',
                boxShadow: '0 0 20px rgba(168,85,247,0.4)',
                border: 'none',
              } : {
                background: 'rgba(19,19,42,0.8)',
                border: '1px solid rgba(168,85,247,0.2)',
                color: '#94a3b8',
              }}
            >
              {f.name}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const alpha = accentColorMap[project.accent] || 'rgba(168,85,247,'
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl overflow-hidden flex flex-col group cursor-pointer card-hover-glow"
                  style={{
                    background: 'rgba(19,19,42,0.8)',
                    border: `1px solid ${alpha}0.15)`,
                  }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${alpha}0.85), rgba(10,10,15,0.2))` }} />
                    <span
                      className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-xl uppercase tracking-wider font-mono"
                      style={{ background: `${alpha}0.25)`, border: `1px solid ${alpha}0.4)`, color: project.accent, backdropFilter: 'blur(8px)' }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-grotesk text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="cyber-tag">{tag}</span>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-sm font-bold transition-all cursor-pointer"
                      style={{ color: project.accent }}
                    >
                      Baca Studi Kasus
                      <HiArrowNarrowRight className="transition-transform text-base group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
            style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 24, stiffness: 200 }}
              className="w-full max-w-3xl rounded-3xl overflow-hidden flex flex-col max-h-[90vh]"
              style={{ background: '#0d0d1a', border: '1px solid rgba(168,85,247,0.25)', boxShadow: '0 0 60px rgba(168,85,247,0.2)' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Banner */}
              <div className="relative h-60 flex-shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0d0d1a, rgba(10,10,15,0.3))' }} />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center text-white cursor-pointer transition-colors"
                  style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
                >
                  <HiX className="text-lg" />
                </button>
                <div className="absolute bottom-5 left-6">
                  <span className="cyber-tag mb-2 inline-block">Studi Kasus • {selectedProject.category}</span>
                  <h3 className="font-grotesk text-2xl font-bold text-white mt-1">{selectedProject.title}</h3>
                </div>
              </div>

              {/* Scrollable Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                <p className="text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}>
                    <h4 className="text-red-400 font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">❌ Masalah Utama</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div className="p-5 rounded-2xl" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)' }}>
                    <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">✅ Solusi Desain</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl" style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.15)' }}>
                  <h4 className="text-purple-400 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <HiCheck /> 📈 Dampak &amp; Hasil
                  </h4>
                  <p className="text-gray-300 font-semibold text-sm">{selectedProject.outcome}</p>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">🛠️ Tools Digunakan</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((t, i) => (
                      <span key={i} className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3.5 py-1.5 rounded-xl font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 flex gap-3 border-t flex-shrink-0" style={{ borderColor: 'rgba(168,85,247,0.1)' }}>
                <button
                  onClick={() => alert('Figma prototype akan segera tersedia!')}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm cursor-pointer transition-all btn-neon font-grotesk"
                >
                  <RiFigmaLine /> Lihat di Figma
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-xl font-bold text-sm cursor-pointer font-grotesk text-gray-400 hover:text-white transition-colors"
                  style={{ border: '1px solid rgba(168,85,247,0.2)' }}
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
