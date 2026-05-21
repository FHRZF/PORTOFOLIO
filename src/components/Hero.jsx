import { motion } from 'framer-motion'
import { HiArrowNarrowRight, HiOutlineArrowSmDown } from 'react-icons/hi'
import confetti from 'canvas-confetti'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const handleDownloadCV = () => {
    // Fire confetti!
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981']
    })

    // Mock PDF download trigger
    setTimeout(() => {
      alert("Terima kasih telah mengunduh! CV Fahriz Fitra Annas siap diunduh (Simulasi file PDF).")
    }, 500)
  }

  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden py-16 theme-transition bg-white dark:bg-gray-950">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-blue-950/20 dark:via-gray-950 dark:to-purple-950/20 -z-10 transition-colors duration-500"></div>
      
      {/* Dynamic blurred abstract circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/40 dark:bg-blue-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-30 -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/40 dark:bg-purple-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-30 -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <motion.div
        className="text-center max-w-4xl px-6 z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Designer Intro Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide uppercase"
        >
          🚀 Tersedia Untuk Kerja Lepas / Kontrak
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight"
        >
          FAHRIZ FITRA ANNAS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light mb-6 flex items-center gap-2"
        >
          <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">UI/UX Designer</span>
          <span className="text-gray-300 dark:text-gray-700">|</span>
          <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Web Developer</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Mendesain pengalaman digital yang intuitif dan membangun antarmuka web modern berkinerja tinggi yang disukai pengguna.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full sm:w-auto"
        >
          <a href="#portfolio" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gray-900 dark:bg-white text-white dark:text-gray-950 px-8 py-4 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-100 shadow-lg shadow-gray-900/10 dark:shadow-white/5 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              Lihat Karya
              <HiArrowNarrowRight className="group-hover:translate-x-1.5 transition-transform text-lg" />
            </motion.button>
          </a>
          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto border-2 border-gray-900 dark:border-gray-750 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-950 shadow-md transition-all flex items-center justify-center cursor-pointer"
          >
            Unduh CV / Resume
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center text-gray-400 dark:text-gray-600 mt-4 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <HiOutlineArrowSmDown className="text-4xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}
