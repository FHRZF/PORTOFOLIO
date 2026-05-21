import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Desain UI/UX',
      color: 'from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500',
      description: 'Menciptakan antarmuka yang indah dan intuitif berorientasi pengguna.',
      skills: ['Figma', 'Wireframing', 'Prototyping', 'UX Research', 'User Testing', 'Design System', 'Adobe XD', 'Visual Design'],
    },
    {
      title: 'Pengembangan Web',
      color: 'from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-500',
      description: 'Menyusun kode web bersih, cepat, dan responsif dari awal.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'REST APIs', 'Vite'],
    },
    {
      title: 'Peralatan & Kolaborasi',
      color: 'from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500',
      description: 'Platform andalan untuk manajemen proyek dan versi kontrol.',
      skills: ['Git', 'GitHub', 'VS Code', 'Jira', 'Trello', 'Npm / Yarn', 'Postman', 'Figma DevMode'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-950 theme-transition">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight"
        >
          Keahlian & Kompetensi
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-16"
        ></motion.div>

        {/* Skills Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.15 }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-lg shadow-gray-150/5 dark:shadow-black/10 hover:shadow-xl dark:hover:shadow-black/20 theme-transition flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <h3 className={`text-2xl font-extrabold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                  {category.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.08, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3.5 py-1.5 rounded-xl text-sm font-semibold border border-transparent hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Graphical element: small decorative bar */}
              <div className={`h-1.5 w-16 bg-gradient-to-r ${category.color} rounded-full mt-8`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
