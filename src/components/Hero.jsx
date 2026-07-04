import { motion } from 'framer-motion'
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi'
import { RiCodeSSlashLine, RiPencilRuler2Line, RiStarLine } from 'react-icons/ri'
import confetti from 'canvas-confetti'
import ParticleText from './ParticleText'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  const handleDownloadCV = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#7c3aed', '#06b6d4', '#ec4899', '#10b981'],
      startVelocity: 40,
    })
    setTimeout(() => {
      // Trigger actual file download
      const link = document.createElement('a')
      link.href = '/cv-fahriz-fitra.pdf'
      link.download = 'CV_Fahriz_Fitra_Annas.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 600)
  }

  const stats = [
    { icon: RiCodeSSlashLine,    value: '30+',   label: 'Proyek Selesai' },
    { icon: RiPencilRuler2Line,  value: '15+',   label: 'Desain UI/UX'  },
    { icon: RiStarLine,          value: '100%',  label: 'Kepuasan Klien' },
  ]

  const roles = ['UI/UX Designer', 'Web Developer', 'Creative Coder', 'Digital Craftsman']

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      {/* Cyber Grid Background */}
      <div
        className="absolute inset-0 cyber-grid-bg opacity-100"
        style={{ backgroundSize: '50px 50px' }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full blur-3xl animate-float"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full blur-3xl animate-float-delay"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)' }} />
      <div className="absolute top-10 left-1/3 w-64 h-64 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)', animation: 'float 8s ease-in-out 4s infinite' }} />

      {/* Corner Decorators */}
      <div className="absolute top-24 left-6 text-purple-500/20 font-mono text-xs select-none">
        <div>&lt;portfolio&gt;</div>
        <div className="pl-4 text-cyan-500/20">function createMagic()</div>
        <div className="pl-4 text-cyan-500/20">{'{'}</div>
      </div>
      <div className="absolute bottom-10 right-6 text-purple-500/20 font-mono text-xs select-none text-right">
        <div>{'}'}</div>
        <div>&lt;/portfolio&gt;</div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold font-mono"
            style={{
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.3)',
              color: '#34d399',
              boxShadow: '0 0 20px rgba(16,185,129,0.15)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Freelance &amp; Contract Work
          </div>
        </motion.div>

        {/* Role Tags */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-6">
          {roles.map((role, i) => (
            <span key={i} className="cyber-tag">{role}</span>
          ))}
        </motion.div>

        {/* Main Heading — Particle Effect */}
        <motion.div variants={itemVariants} className="w-full mb-6 flex justify-center">
          <div className="w-full max-w-4xl">
            <ParticleText />
          </div>
        </motion.div>

        {/* Animated Role Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-gray-300"
        >
          Merancang{' '}
          <span className="gradient-text-cyber font-bold">Pengalaman Digital</span>{' '}
          yang Intuitif &amp;{' '}
          <span style={{ color: '#06b6d4', fontWeight: 700 }}>Berkinerja Tinggi</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-mono"
        >
          // Membangun antarmuka web modern dengan React, Laravel &amp; Figma
          <br />
          // Dari wireframe hingga kode — semua dikerjakan dengan presisi &amp; passion
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <a href="#portfolio" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon w-full sm:w-auto flex items-center justify-center gap-2 group cursor-pointer font-grotesk"
            >
              Lihat Karya Terbaik
              <HiArrowNarrowRight className="group-hover:translate-x-2 transition-transform text-lg" />
            </motion.button>
          </a>

          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="btn-ghost-neon w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer font-grotesk"
          >
            <HiDownload className="text-lg" />
            Unduh CV / Resume
          </motion.button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.05 }}
              className="text-center p-4 rounded-2xl cursor-default card-hover-glow"
              style={{
                background: 'rgba(19,19,42,0.6)',
                border: '1px solid rgba(168,85,247,0.15)',
              }}
            >
              <Icon className="text-purple-400 text-xl mx-auto mb-1" />
              <div
                className="font-grotesk font-bold text-xl gradient-text-cyber"
              >
                {value}
              </div>
              <div className="text-xs text-gray-500 mt-0.5 font-medium">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs text-gray-600 font-mono tracking-widest uppercase">Scroll Down</span>
          <div
            className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
            style={{ border: '1px solid rgba(168,85,247,0.3)' }}
          >
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ background: 'linear-gradient(to bottom, #a855f7, #06b6d4)' }}
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
