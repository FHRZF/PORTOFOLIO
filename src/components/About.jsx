import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function About() {
  const [activeLang, setActiveLang] = useState('id') // default to Indonesian

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: 'easeIn' }
    }
  }

  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-gray-900 theme-transition">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight"
        >
          Tentang Saya
        </motion.h2>
        
        {/* Underline decorative bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-12"
        ></motion.div>

        {/* Bilingual Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-1.5 rounded-xl flex gap-1 shadow-inner">
            <button
              onClick={() => setActiveLang('id')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeLang === 'id'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              🇮🇩 Bahasa Indonesia
            </button>
            <button
              onClick={() => setActiveLang('en')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeLang === 'en'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              🇬🇧 English
            </button>
          </div>
        </div>

        {/* Dynamic Card Container */}
        <div className="relative min-h-[320px] bg-gradient-to-br from-blue-50/40 via-white to-purple-50/40 dark:from-blue-950/10 dark:via-gray-850 dark:to-purple-950/10 p-8 md:p-12 rounded-3xl border border-blue-100/50 dark:border-gray-800 shadow-xl shadow-blue-950/5 dark:shadow-black/10 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full pointer-events-none"></div>
          
          <AnimatePresence mode="wait">
            {activeLang === 'id' ? (
              <motion.div
                key="indonesian"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInUp}
                className="flex flex-col gap-6"
              >
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2.5">
                  <span className="text-3xl">👋</span> Halo, Saya Fahriz Fitra Annas
                </h3>
                <p className="text-gray-650 dark:text-gray-300 leading-relaxed text-lg">
                  Saya adalah seorang **UI/UX Designer dan Web Developer** yang berdedikasi dengan latar belakang pendidikan **Software Engineering (Rekayasa Perangkat Lunak)** yang kuat. Perjalanan saya di dunia digital berawal dari kekaguman tentang bagaimana interaksi antarmuka yang rapi dapat mempermudah hidup banyak orang. Ketertarikan ini mendorong saya untuk menguasai proses desain dari hulu ke hilir sekaligus implementasi kodenya.
                </p>
                <p className="text-gray-650 dark:text-gray-300 leading-relaxed text-lg">
                  Keahlian utama saya terletak pada perancangan antarmuka yang intuitif (Figma), penelitian pengguna (UX Research), pembuatan purwarupa interaktif, serta pengodean aplikasi web responsif menggunakan React, PHP (Laravel), dan Tailwind CSS. Bagi saya, setiap proyek baru merupakan panggung untuk memecahkan masalah kompleks secara kreatif dan menyajikan pengalaman digital yang bermakna.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <div>
                    <h4 className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold">Peran</h4>
                    <p className="text-base font-bold text-gray-800 dark:text-gray-200">Designer & Dev</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold">Pendidikan</h4>
                    <p className="text-base font-bold text-gray-800 dark:text-gray-200">Software Eng.</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold">Lokasi</h4>
                    <p className="text-base font-bold text-gray-800 dark:text-gray-200">Indonesia</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold">Bahasa</h4>
                    <p className="text-base font-bold text-gray-800 dark:text-gray-200">Indo & Inggris</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="english"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInUp}
                className="flex flex-col gap-6"
              >
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2.5">
                  <span className="text-3xl">👋</span> Hello, I'm Fahriz Fitra Annas
                </h3>
                <p className="text-gray-650 dark:text-gray-300 leading-relaxed text-lg">
                  I am a passionate **UI/UX Designer and Web Developer** with a solid foundation in **Software Engineering**. My tech journey began with a fascination for how clean, digital product design shapes everyday user behavior. This passion has driven me to master both sides of the spectrum: empathy-driven research and pixel-perfect modern coding.
                </p>
                <p className="text-gray-650 dark:text-gray-300 leading-relaxed text-lg">
                  I specialize in crafting intuitive interfaces (Figma), conducting user research (UX Research), building interactive prototypes, and developing responsive web applications using React, PHP (Laravel), and Tailwind CSS. For me, every project is a creative problem-solving mission to deliver premium and delightful experiences.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <div>
                    <h4 className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold">Roles</h4>
                    <p className="text-base font-bold text-gray-800 dark:text-gray-200">Designer & Dev</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold">Education</h4>
                    <p className="text-base font-bold text-gray-800 dark:text-gray-200">Software Eng.</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold">Location</h4>
                    <p className="text-base font-bold text-gray-800 dark:text-gray-200">Indonesia</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold">Languages</h4>
                    <p className="text-base font-bold text-gray-800 dark:text-gray-200">Indo & English</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
