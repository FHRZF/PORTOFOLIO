import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowNarrowRight, HiX, HiCheck } from 'react-icons/hi'

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
      title: 'Fitness Tracking Mobile App UI',
      category: 'mobile',
      description: 'Perancangan UI lengkap untuk aplikasi pelacak kebugaran seluler dengan navigasi intuitif dan estetika modern.',
      longDescription: 'Proyek ini berfokus pada pemecahan masalah pengguna yang sering lupa mencatat latihan harian mereka. Dengan menerapkan riset kegunaan (usability research), kami mendesain widget ringkasan harian di layar kunci, integrasi pelacak langkah otomatis, serta gamifikasi berbasis lencana prestasi yang mendorong motivasi latihan.',
      problem: 'Pengguna merasa pencatatan kebugaran manual terlalu merepotkan dan sering lupa.',
      solution: 'Membangun desain pelacakan otomatis dengan sensor kesehatan HP dan visualisasi riwayat latihan ringkas sekali usap.',
      outcome: 'Skor kepuasan pengguna (SUS Score) meningkat hingga 92% pada fase prototype testing.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Mobile', 'UI Design', 'Figma', 'Prototyping'],
      tools: ['Figma', 'Adobe Photoshop', 'User Testing'],
    },
    {
      id: 2,
      title: 'SaaS Analytics Dashboard',
      category: 'dashboard',
      description: 'Dashboard visualisasi data interaktif untuk platform manajemen proyek dengan metrik analitik real-time.',
      longDescription: 'Dasbor SaaS ini ditujukan bagi manajer proyek tingkat eksekutif yang memerlukan pandangan helikopter atas 50+ proyek aktif sekaligus. Desain yang dirancang memadukan penyaringan data dinamis, diagram garis interaktif beresolusi tinggi, dan pengelompokan penugasan kartu bergaya Kanban.',
      problem: 'Manajer eksekutif kelebihan beban informasi dan kesulitan melihat tren kesehatan proyek utama.',
      solution: 'Dashboard minimalis dengan metrik kesehatan proyek menggunakan indikator visual warna (Merah, Kuning, Hijau) dan chart tren interaktif.',
      outcome: 'Menghemat waktu peninjauan status mingguan manajer eksekutif hingga 40%.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Dashboard', 'Web Design', 'Data Viz'],
      tools: ['Figma', 'Design System', 'Charts.js mapping'],
    },
    {
      id: 3,
      title: 'E-commerce Platform Redesign',
      category: 'web',
      description: 'Redesain platform toko online berskala besar yang fokus pada optimasi tingkat konversi belanja dan pengalaman pengguna.',
      longDescription: 'Redesain total dari situs e-commerce pakaian terkemuka. Fokus pengerjaan difokuskan pada pembersihan langkah checkout dari 5 halaman menjadi hanya 1 halaman (One-page checkout), mempercepat pemuatan katalog produk, serta memberikan rekomendasi produk pintar berbasis tren belanja.',
      problem: 'Tingkat drop-off keranjang belanja tinggi (mencapai 75%) karena proses checkout yang membingungkan.',
      solution: 'Penyederhanaan checkout menjadi 1 halaman dinamis dengan dukungan auto-fill alamat dan metode pembayaran kilat.',
      outcome: 'Tingkat konversi penjualan sukses (conversion rate) melonjak sebesar 28% pasca peluncuran.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db13?w=800&h=600&fit=crop',
      tags: ['E-commerce', 'Web', 'UX Redesign'],
      tools: ['Figma', 'Hotjar Heatmaps', 'Wireframing'],
    },
    {
      id: 4,
      title: 'SaaS Product Landing Page',
      category: 'web',
      description: 'Desain halaman pendaratan (landing page) modern untuk peluncuran produk SaaS dengan tata letak konversi tinggi.',
      longDescription: 'Halaman pendaratan premium untuk startup yang menawarkan optimasi basis data berbasis kecerdasan buatan. Menggunakan ilustrasi 3D yang bersih, tabel perbandingan harga transparan, susunan testimonial grid, dan penempatan tombol ajakan bertindak (CTA) strategis yang melayang.',
      problem: 'Rasio klik ke pendaftaran akun (Click-Through-Rate) halaman lama di bawah 2.5%.',
      solution: 'Restrukturisasi hierarki informasi, penyederhanaan formulir registrasi awal, dan memperjelas nilai jual unik produk di bagian Hero.',
      outcome: 'Meningkatkan pendaftaran akun uji coba gratis sebesar 4.2x lipat dalam waktu 30 hari.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tags: ['Landing Page', 'Web', 'Conversion Design'],
      tools: ['Figma', 'Copywriting Design', 'UI Layout'],
    },
  ]

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  )

  return (
    <section id="portfolio" className="py-24 px-6 bg-white dark:bg-gray-900 theme-transition">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight"
        >
          Portofolio Desain UI/UX
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-12"
        ></motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === filter.value
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-950 shadow-md shadow-gray-900/10'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl dark:hover:shadow-black/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-850">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Badge Category */}
                    <span className="absolute top-4 left-4 text-xs font-bold bg-white/95 dark:bg-gray-900/95 text-gray-800 dark:text-white px-3.5 py-1.5 rounded-xl shadow-md uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-50 dark:bg-blue-950/45 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg font-bold tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="px-8 pb-8 pt-2">
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ x: 6 }}
                    className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-2 hover:gap-3 transition-all group/btn cursor-pointer text-sm"
                  >
                    Pelajari Studi Kasus
                    <HiArrowNarrowRight className="group-hover/btn:translate-x-1.5 transition-transform text-lg" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* CASE STUDY MODAL DIALOG */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-gray-150 dark:border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Banner */}
              <div className="relative h-64 sm:h-80 md:h-96 flex-shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2.5 rounded-full backdrop-blur-md transition-colors border border-white/20 cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <HiX className="text-xl" />
                </button>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-extrabold bg-blue-600 text-white px-3.5 py-1.5 rounded-xl uppercase tracking-wider shadow-md">
                    Studi Kasus • {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 leading-tight drop-shadow-md">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8">
                {/* Long Excerpt */}
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-medium">
                  {selectedProject.longDescription}
                </p>

                {/* Details Breakdown */}
                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-150 dark:border-gray-800">
                  <div className="bg-red-50/50 dark:bg-red-950/10 p-5 rounded-2xl border border-red-100/50 dark:border-red-900/20">
                    <h4 className="text-red-700 dark:text-red-400 font-bold mb-2 text-base uppercase tracking-wider flex items-center gap-1.5">
                      ❌ Masalah Utama
                    </h4>
                    <p className="text-gray-650 dark:text-gray-300 text-sm leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="bg-green-50/50 dark:bg-green-950/10 p-5 rounded-2xl border border-green-100/50 dark:border-green-900/20">
                    <h4 className="text-green-700 dark:text-green-400 font-bold mb-2 text-base uppercase tracking-wider flex items-center gap-1.5">
                      ✅ Solusi Desain
                    </h4>
                    <p className="text-gray-650 dark:text-gray-300 text-sm leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Outcome & Tools */}
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  {/* Results List */}
                  <div>
                    <h4 className="text-gray-950 dark:text-white font-extrabold mb-3 text-lg">
                      📈 Dampak & Hasil Proyek
                    </h4>
                    <div className="flex items-start gap-2.5">
                      <span className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5">
                        <HiCheck className="text-sm" />
                      </span>
                      <p className="text-gray-650 dark:text-gray-300 text-base font-semibold">
                        {selectedProject.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Tools list */}
                  <div>
                    <h4 className="text-gray-950 dark:text-white font-extrabold mb-3 text-lg">
                      🛠️ Peralatan yang Digunakan
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="bg-gray-150 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3.5 py-2 rounded-xl text-sm font-semibold border border-transparent"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-gray-50 dark:bg-gray-950/40 border-t border-gray-150 dark:border-gray-800 flex justify-end gap-3 flex-shrink-0">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-md cursor-pointer text-sm"
                >
                  Tutup Studi Kasus
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
