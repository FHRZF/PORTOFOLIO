import { motion } from 'framer-motion'

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'Juara 1 Lomba Desain UI/UX Nasional',
      issuer: 'National Digital Awards 2023',
      description: 'Menduduki peringkat pertama dalam kategori Desain UI/UX tingkat nasional berkat inovasi purwarupa antarmuka aplikasi kesehatan mental terintegrasi.',
      date: '2023',
      icon: '🏆',
      color: 'from-amber-400 to-yellow-600',
    },
    {
      id: 2,
      title: 'Sertifikat Keahlian Web Development',
      issuer: 'Coursera | Full Stack Web Development',
      description: 'Menyelesaikan program sertifikasi lanjutan pengembangan web fullstack (MERN stack + Laravel) dengan predikat kehormatan (with Honors).',
      date: '2023',
      icon: '📜',
      color: 'from-blue-400 to-indigo-600',
    },
    {
      id: 3,
      title: 'Google UX Design Professional Certificate',
      issuer: 'Google | Coursera Professional Certificate',
      description: 'Sertifikasi profesional resmi dari Google mencakup riset UX, perancangan kawat (wireframing), purwarupa interaktif, dan evaluasi kegunaan produk.',
      date: '2022',
      icon: '🎓',
      color: 'from-red-400 to-pink-600',
    },
    {
      id: 4,
      title: 'Lulusan Terbaik Program Studi Rekayasa Perangkat Lunak',
      issuer: 'Universitas Terkemuka',
      description: 'Lulus dari program studi Rekayasa Perangkat Lunak (RPL) dengan predikat Cum Laude dan meraih IPK akhir 3.85 / 4.00.',
      date: '2022',
      icon: '⭐',
      color: 'from-emerald-400 to-teal-600',
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section id="achievements" className="py-24 px-6 bg-white dark:bg-gray-900 theme-transition">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight"
        >
          Pencapaian & Sertifikasi
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-16"
        ></motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              custom={idx}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-850 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl hover:shadow-xl dark:hover:shadow-black/25 transition-all duration-300 flex items-start gap-6 group"
            >
              {/* Icon badge with gradient border */}
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-850 shadow-md flex items-center justify-center text-3xl flex-shrink-0 border border-gray-100 dark:border-gray-750 group-hover:scale-110 transition-transform">
                {achievement.icon}
              </div>

              {/* Text content */}
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-450 bg-blue-50 dark:bg-blue-950/45 px-3 py-1 rounded-full uppercase tracking-wider">
                    {achievement.date}
                  </span>
                </div>
                
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-405">
                  {achievement.issuer}
                </p>
                
                <p className="text-gray-600 dark:text-gray-450 text-sm leading-relaxed pt-1">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
