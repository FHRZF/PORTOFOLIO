import { motion } from 'framer-motion'

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      icon: '🏆',
      title: 'Juara 1 — Lomba UI/UX Nasional',
      issuer: 'National Digital Innovation Awards 2023',
      description: 'Meraih peringkat pertama kategori UI/UX Design tingkat nasional berkat inovasi desain aplikasi kesehatan mental berbasis AI (HealthAI) yang mendapat SUS Score 94/100.',
      date: '2023',
      accent: '#f59e0b',
      gradFrom: '#f59e0b',
      gradTo: '#d97706',
    },
    {
      id: 2,
      icon: '🎓',
      title: 'Google UX Design Professional Certificate',
      issuer: 'Google — Coursera Professional Certification',
      description: 'Sertifikasi profesional resmi dari Google mencakup empati-driven research, wireframing, high-fidelity prototyping, usability evaluation, dan accessibility design standards.',
      date: '2023',
      accent: '#a855f7',
      gradFrom: '#7c3aed',
      gradTo: '#a855f7',
    },
    {
      id: 3,
      icon: '📜',
      title: 'Full Stack Web Development — With Honors',
      issuer: 'Coursera | MERN Stack + Laravel Specialization',
      description: 'Menyelesaikan program sertifikasi pengembangan web fullstack (React, Node.js, Laravel, MongoDB) selama 6 bulan dengan predikat kehormatan (With Honors) dan nilai akhir 97/100.',
      date: '2023',
      accent: '#06b6d4',
      gradFrom: '#0284c7',
      gradTo: '#06b6d4',
    },
    {
      id: 4,
      icon: '⭐',
      title: 'Lulusan Terbaik — Rekayasa Perangkat Lunak',
      issuer: 'Program Studi Software Engineering',
      description: 'Lulus dari program S1 Rekayasa Perangkat Lunak dengan predikat Cum Laude, meraih IPK akhir 3.85/4.00, dan dinobatkan sebagai mahasiswa berprestasi tingkat program studi.',
      date: '2024',
      accent: '#10b981',
      gradFrom: '#059669',
      gradTo: '#10b981',
    },
    {
      id: 5,
      icon: '🚀',
      title: 'Top Contributor — Open Source Community',
      issuer: 'GitHub Indonesia Developer Community',
      description: 'Diakui sebagai top contributor aktif dalam komunitas developer open-source Indonesia dengan 50+ pull request diterima, 200+ GitHub stars, dan aktif mentoring developer junior.',
      date: '2024',
      accent: '#ec4899',
      gradFrom: '#be185d',
      gradTo: '#ec4899',
    },
    {
      id: 6,
      icon: '💡',
      title: 'Best Prototype — Hackathon Inovasi Digital',
      issuer: 'Ministry of Communication & Digital — Indonesia',
      description: 'Prototype SmartCity Management Platform yang dikembangkan dalam 48 jam hackathon berhasil meraih penghargaan Best Prototype dari Kementerian Kominfo RI.',
      date: '2024',
      accent: '#f97316',
      gradFrom: '#ea580c',
      gradTo: '#f97316',
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
  }

  return (
    <section id="achievements" className="py-24 px-6" style={{ backgroundColor: '#0a0a0f' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">// achievements</p>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mb-4">
            Pencapaian &amp; <span className="gradient-text-cyber">Sertifikasi</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Rekam jejak penghargaan, sertifikasi profesional, dan pencapaian akademik yang mendefinisikan perjalanan karir saya.
          </p>
          <div className="section-underline mt-4" />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              custom={idx}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative p-7 rounded-3xl flex flex-col gap-4 group card-hover-glow overflow-hidden"
              style={{
                background: 'rgba(19,19,42,0.85)',
                border: `1px solid ${item.accent}22`,
              }}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${item.accent}20 0%, transparent 70%)` }}
              />

              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                {/* Icon badge */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `${item.accent}15`,
                    border: `1px solid ${item.accent}30`,
                    boxShadow: `0 0 15px ${item.accent}20`,
                  }}
                >
                  {item.icon}
                </div>

                {/* Year badge */}
                <span
                  className="text-xs font-mono font-bold px-3 py-1 rounded-full flex-shrink-0"
                  style={{
                    background: `${item.accent}15`,
                    border: `1px solid ${item.accent}30`,
                    color: item.accent,
                  }}
                >
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-2 flex-1">
                <h3
                  className="font-grotesk font-bold text-base text-white group-hover:transition-colors"
                  style={{ lineHeight: '1.4' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: item.accent }}
                >
                  {item.issuer}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div
                className="h-px w-full rounded-full opacity-40 group-hover:opacity-80 transition-opacity"
                style={{ background: `linear-gradient(to right, ${item.gradFrom}, ${item.gradTo}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { value: '6+', label: 'Penghargaan' },
            { value: '3.85', label: 'IPK Akhir' },
            { value: 'Cum Laude', label: 'Predikat Kelulusan' },
          ].map((s, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-2xl"
              style={{ background: 'rgba(19,19,42,0.6)', border: '1px solid rgba(168,85,247,0.12)' }}
            >
              <div className="font-grotesk font-bold text-xl gradient-text-cyber">{s.value}</div>
              <div className="text-gray-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
