import { motion } from 'framer-motion'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { RiStarLine } from 'react-icons/ri'

export default function Projects() {
  const projects = [
    {
      id: 1,
      number: '01',
      title: 'NexaBank — Fintech Banking App',
      description: 'Aplikasi perbankan digital full-stack yang komprehensif. Dilengkapi dashboard rekening real-time, transfer antar bank instan, manajemen kartu virtual, laporan keuangan otomatis, dan sistem notifikasi transaksi berbasis AI yang mendeteksi anomali pengeluaran pengguna.',
      technologies: ['React.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'REST API', 'JWT Auth'],
      liveLink: '#',
      githubLink: '#',
      accent: '#a855f7',
      features: ['Real-time Dashboard', 'AI Anomaly Detection', 'Virtual Card Management', 'Auto Financial Report'],
      status: 'Completed',
    },
    {
      id: 2,
      number: '02',
      title: 'AstroShop — AI-Powered E-commerce',
      description: 'Platform e-commerce next-generation dengan rekomendasi produk berbasis AI, pencarian semantik, keranjang belanja multi-vendor, integrasi Stripe/Midtrans untuk pembayaran, dan sistem manajemen inventaris otomatis dengan notifikasi stok menipis.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe API', 'Redis', 'OpenAI API'],
      liveLink: '#',
      githubLink: '#',
      accent: '#06b6d4',
      features: ['AI Product Recommendation', 'Semantic Search', 'Multi-vendor Cart', 'Auto Inventory Alert'],
      status: 'Completed',
    },
    {
      id: 3,
      number: '03',
      title: 'TaskForge — Real-time Project Hub',
      description: 'Aplikasi manajemen proyek kolaboratif dengan papan Kanban drag-and-drop, live chat antar anggota tim, pelacakan waktu (time tracking) per tugas, attachment file, notifikasi WebSocket instan, kalender deadline terintegrasi, dan laporan sprint mingguan otomatis.',
      technologies: ['React.js', 'Firebase', 'Tailwind CSS', 'Framer Motion', 'WebSocket', 'Chart.js'],
      liveLink: '#',
      githubLink: '#',
      accent: '#ec4899',
      features: ['Drag & Drop Kanban', 'Live Collaboration', 'Time Tracking', 'Sprint Reports'],
      status: 'Completed',
    },

  ]

  return (
    <section id="projects" className="py-24 px-6 theme-transition" style={{ backgroundColor: 'var(--bg-card-alt)' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">// dev projects</p>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mb-4">
            Proyek <span className="gradient-text-cyber">Pengembangan Web</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Aplikasi web fullstack yang dibangun dengan teknologi modern, dari konsep hingga deployment production.
          </p>
          <div className="section-underline mt-4" />
        </motion.div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, idx) => {
            const alpha = project.accent === '#a855f7'
              ? 'rgba(168,85,247,'
              : project.accent === '#06b6d4'
                ? 'rgba(6,182,212,'
                : 'rgba(236,72,153,'

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.12, duration: 0.7 }}
                whileHover={{ y: -5 }}
                className="relative rounded-3xl overflow-hidden card-hover-glow"
                style={{
                  background: 'rgba(19,19,42,0.8)',
                  border: `1px solid ${alpha}0.18)`,
                }}
              >
                {/* Accent top border */}
                <div
                  className="h-px w-full"
                  style={{ background: `linear-gradient(to right, ${alpha}0.8), transparent)` }}
                />

                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-8">
                    {/* Text */}
                    <div className="flex-1 space-y-5">
                      {/* Number + Status */}
                      <div className="flex items-center gap-3">
                        <span
                          className="font-mono text-4xl font-black opacity-20"
                          style={{ color: project.accent }}
                        >
                          {project.number}
                        </span>
                        <span
                          className="text-xs font-mono px-3 py-1 rounded-full"
                          style={{ background: `${alpha}0.12)`, border: `1px solid ${alpha}0.25)`, color: project.accent }}
                        >
                          ✓ {project.status}
                        </span>
                      </div>

                      <h3 className="font-grotesk text-xl md:text-2xl font-bold text-white">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {project.description}
                      </p>

                      {/* Feature Highlights */}
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                            <span style={{ color: project.accent }}>▸</span>
                            {feat}
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-lg font-bold uppercase tracking-wide"
                            style={{
                              background: `${alpha}0.1)`,
                              border: `1px solid ${alpha}0.2)`,
                              color: project.accent,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-row md:flex-col gap-3 flex-shrink-0">
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm cursor-pointer transition-all font-grotesk text-white"
                        style={{
                          background: `linear-gradient(135deg, ${project.accent}cc, ${project.accent}88)`,
                          boxShadow: `0 0 20px ${alpha}0.3)`,
                          border: `1px solid ${alpha}0.4)`,
                        }}
                      >
                        <HiOutlineExternalLink />
                        Live Demo
                      </motion.a>

                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm cursor-pointer transition-all font-grotesk text-gray-300 hover:text-white"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <FaGithub />
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="btn-ghost-neon flex items-center gap-2 mx-auto cursor-pointer font-grotesk"
            >
              <FaGithub className="text-lg" />
              Lihat Semua Repo di GitHub
              <RiStarLine />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
