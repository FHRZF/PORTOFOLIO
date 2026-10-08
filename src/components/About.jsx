import { motion } from 'framer-motion'
import { RiMapPinLine, RiGraduationCapLine, RiBriefcaseLine, RiTranslate2 } from 'react-icons/ri'
import { HiOutlineCode } from 'react-icons/hi'

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  const profileStats = [
    { value: '3+', label: 'Tahun Pengalaman' },
    { value: '30+', label: 'Proyek Selesai' },
    { value: '15+', label: 'Desain UI/UX' },
    { value: '100%', label: 'Client Satisfaction' },
  ]

  const infoItems = [
    { icon: RiMapPinLine, label: 'Lokasi', value: 'Indonesia 🇮🇩' },
    { icon: RiGraduationCapLine, label: 'Pendidikan', value: 'Software Engineering — Cum Laude' },
    { icon: RiBriefcaseLine, label: 'Peran', value: 'UI/UX Designer & Web Developer' },
    { icon: RiTranslate2, label: 'Bahasa', value: 'Indonesia & English' },
  ]

  const timeline = [
    {
      year: '2024 – Kini',
      title: 'Freelance UI/UX Designer & Web Dev',
      company: 'Independent / Remote',
      desc: 'Membangun solusi digital untuk berbagai klien lokal dan internasional, dari desain wireframe hingga implementasi kode produksi.',
      color: '#a855f7',
    },
    {
      year: '2023',
      title: 'Frontend Developer Intern',
      company: 'Tech Startup — Jakarta',
      desc: 'Mengembangkan fitur antarmuka React.js, melakukan optimasi performa aplikasi, dan kolaborasi desain dengan tim produk.',
      color: '#06b6d4',
    },
    {
      year: '2020 – 2024',
      title: 'Software Engineering Student',
      company: 'Universitas Rekayasa Perangkat Lunak',
      desc: 'Lulus Cum Laude (IPK 3.85/4.00). Aktif dalam kompetisi desain UI/UX nasional dan komunitas open-source kampus.',
      color: '#ec4899',
    },
  ]

  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">
            // who am i
          </p> */}
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mb-4">
            Tentang <span className="gradient-text-cyber">Saya</span>
          </h2>
          <div className="section-underline mt-4" />
        </motion.div>

        {/* Main Grid: Left profile + Right content */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ─── LEFT: Profile Card ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Avatar Card */}
            <div
              className="relative p-6 rounded-3xl text-center overflow-hidden card-hover-glow"
              style={{
                background: 'rgba(19,19,42,0.8)',
                border: '1px solid rgba(168,85,247,0.2)',
              }}
            >
              {/* BG Orb */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20"
                style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }} />

              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div
                  className="w-full h-full rounded-2xl flex items-center justify-center text-4xl font-grotesk font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    boxShadow: '0 0 30px rgba(168,85,247,0.4)',
                  }}
                >
                  FF
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: '#0d0d1a', backgroundColor: '#10b981' }}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              <h3 className="font-grotesk text-xl font-bold text-white">Fahriz Fitra Annas</h3>
              <p className="text-purple-400 text-sm font-mono mt-1">@fahrizfitra</p>
              <p className="text-gray-400 text-sm mt-2">UI/UX Designer &amp; Web Developer</p>

              {/* Availability Badge */}
              <div
                className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full text-xs font-semibold font-mono"
                style={{
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  color: '#34d399',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to Work
              </div>
            </div>

            {/* Info Items */}
            <div
              className="p-5 rounded-3xl space-y-4"
              style={{
                background: 'rgba(19,19,42,0.8)',
                border: '1px solid rgba(168,85,247,0.12)',
              }}
            >
              {infoItems.map(({ icon: Icon, label, value }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.2)' }}
                  >
                    <Icon className="text-purple-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">{label}</p>
                    <p className="text-sm text-gray-200 font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {profileStats.map(({ value, label }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  className="p-4 rounded-2xl text-center card-hover-glow"
                  style={{
                    background: 'rgba(19,19,42,0.8)',
                    border: '1px solid rgba(168,85,247,0.12)',
                  }}
                >
                  <div className="font-grotesk font-bold text-2xl gradient-text-cyber">{value}</div>
                  <div className="text-gray-500 text-xs mt-1 font-medium leading-tight">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── RIGHT: Text + Timeline ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Bio */}
            <div
              className="p-8 rounded-3xl space-y-4"
              style={{
                background: 'rgba(19,19,42,0.6)',
                border: '1px solid rgba(168,85,247,0.12)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <HiOutlineCode className="text-purple-400 text-xl" />
                <span className="font-mono text-purple-400 text-sm">// bio.txt</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-base">
                Saya adalah seorang <span className="text-purple-400 font-semibold">UI/UX Designer dan Web Developer</span> yang
                berdedikasi dengan latar belakang pendidikan{' '}
                <span className="text-cyan-400 font-semibold">Software Engineering</span> yang kuat.
                Perjalanan saya di dunia digital berawal dari kekaguman tentang bagaimana interaksi
                antarmuka yang rapi dapat mempermudah hidup banyak orang.
              </p>
              <p className="text-gray-400 leading-relaxed text-base">
                Keahlian utama saya terletak pada perancangan antarmuka yang intuitif dengan{' '}
                <span className="text-purple-400 font-medium">Figma</span>, penelitian pengguna mendalam (UX Research),
                serta pengodean aplikasi web responsif menggunakan{' '}
                <span className="text-cyan-400 font-medium">React, Laravel, dan Tailwind CSS</span>. Setiap
                proyek adalah panggung saya untuk memecahkan masalah kompleks secara kreatif.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-1">
              <h3 className="font-grotesk font-bold text-white text-lg mb-5 flex items-center gap-2">
                <span className="gradient-text-cyber">Perjalanan Karir</span>
              </h3>
              <div className="relative pl-8">
                {/* Vertical line */}
                <div
                  className="absolute left-3 top-0 bottom-0 w-px"
                  style={{ background: 'linear-gradient(to bottom, #7c3aed, #06b6d4, transparent)' }}
                />

                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative mb-8 last:mb-0"
                  >
                    {/* Dot */}
                    <div
                      className="absolute -left-5 top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: item.color, backgroundColor: 'var(--bg-primary)', boxShadow: `0 0 10px ${item.color}60` }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                    </div>

                    <div
                      className="p-5 rounded-2xl card-hover-glow"
                      style={{
                        background: 'rgba(19,19,42,0.7)',
                        border: `1px solid rgba(${item.color === '#a855f7' ? '168,85,247' : item.color === '#06b6d4' ? '6,182,212' : '236,72,153'},0.15)`,
                      }}
                    >
                      <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                        <div>
                          <h4 className="font-grotesk font-bold text-white text-sm">{item.title}</h4>
                          <p className="text-xs font-medium mt-0.5" style={{ color: item.color }}>{item.company}</p>
                        </div>
                        <span
                          className="text-xs font-mono px-3 py-1 rounded-full flex-shrink-0"
                          style={{
                            background: `${item.color}15`,
                            border: `1px solid ${item.color}30`,
                            color: item.color,
                          }}
                        >
                          {item.year}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
