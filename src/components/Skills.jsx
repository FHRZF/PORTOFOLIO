import { motion } from 'framer-motion'
import { useState } from 'react'
import { RiPencilRuler2Line, RiCodeSSlashLine, RiToolsLine } from 'react-icons/ri'

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillCategories = [
    {
      icon: RiPencilRuler2Line,
      title: 'Desain UI/UX',
      color: '#a855f7',
      gradFrom: '#7c3aed',
      gradTo: '#a855f7',
      description: 'Menciptakan antarmuka yang indah, intuitif, dan berpusat pada pengguna.',
      skills: [
        { name: 'Figma',               level: 95 },
        { name: 'UX Research',         level: 88 },
        { name: 'Prototyping',         level: 92 },
        { name: 'Wireframing',         level: 90 },
        { name: 'Design System',       level: 85 },
        { name: 'User Testing',        level: 82 },
        { name: 'Adobe XD',           level: 78 },
        { name: 'Visual Design',       level: 88 },
      ],
    },
    {
      icon: RiCodeSSlashLine,
      title: 'Pengembangan Web',
      color: '#06b6d4',
      gradFrom: '#0284c7',
      gradTo: '#06b6d4',
      description: 'Menyusun kode web bersih, cepat, dan responsif dengan teknologi modern.',
      skills: [
        { name: 'React.js',            level: 90 },
        { name: 'JavaScript / ES6+',   level: 88 },
        { name: 'HTML / CSS',          level: 95 },
        { name: 'Tailwind CSS',        level: 92 },
        { name: 'PHP / Laravel',       level: 82 },
        { name: 'MySQL',               level: 80 },
        { name: 'REST API',            level: 85 },
        { name: 'Node.js',             level: 72 },
      ],
    },
    {
      icon: RiToolsLine,
      title: 'Alat & Kolaborasi',
      color: '#ec4899',
      gradFrom: '#be185d',
      gradTo: '#ec4899',
      description: 'Platform andalan untuk manajemen proyek, kontrol versi, dan kolaborasi tim.',
      skills: [
        { name: 'Git / GitHub',        level: 88 },
        { name: 'VS Code',             level: 95 },
        { name: 'Postman',             level: 82 },
        { name: 'Figma Dev Mode',      level: 85 },
        { name: 'Jira / Trello',       level: 80 },
        { name: 'Docker (Basic)',      level: 60 },
        { name: 'Vite / Webpack',      level: 78 },
        { name: 'Firebase',            level: 75 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">
            // what i can do
          </p>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mb-4">
            Keahlian &amp; <span className="gradient-text-cyber">Kompetensi</span>
          </h2>
          <div className="section-underline mt-4" />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={catIdx}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl flex flex-col gap-6 card-hover-glow"
                style={{
                  background: 'rgba(19,19,42,0.8)',
                  border: '1px solid rgba(168,85,247,0.12)',
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${category.color}18`,
                      border: `1px solid ${category.color}30`,
                      boxShadow: `0 0 15px ${category.color}20`,
                    }}
                  >
                    <Icon style={{ color: category.color, fontSize: '1.2rem' }} />
                  </div>
                  <div>
                    <h3
                      className="font-grotesk font-bold text-lg"
                      style={{ color: category.color }}
                    >
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed -mt-2">
                  {category.description}
                </p>

                {/* Skill Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredSkill(`${catIdx}-${i}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className="text-xs font-mono font-bold transition-colors"
                          style={{ color: hoveredSkill === `${catIdx}-${i}` ? category.color : '#6b7280' }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="h-1.5 w-full rounded-full overflow-hidden"
                        style={{ background: 'rgba(255,255,255,0.06)' }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: i * 0.06, ease: 'easeOut' }}
                          viewport={{ once: true }}
                          className="h-full rounded-full relative overflow-hidden"
                          style={{
                            background: `linear-gradient(to right, ${category.gradFrom}, ${category.gradTo})`,
                            boxShadow: hoveredSkill === `${catIdx}-${i}` ? `0 0 10px ${category.color}60` : 'none',
                          }}
                        >
                          {/* Shimmer overlay */}
                          <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-text-shimmer opacity-30" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Colored bottom bar */}
                <div
                  className="h-1 w-16 rounded-full mt-auto"
                  style={{ background: `linear-gradient(to right, ${category.gradFrom}, ${category.gradTo})`, boxShadow: `0 0 10px ${category.color}40` }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tech Stack Quick Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-gray-600 font-mono text-xs tracking-widest uppercase mb-6">// Tech Stack Utama</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'TypeScript', 'Figma', 'Laravel', 'Tailwind', 'MySQL', 'Git', 'Firebase', 'Node.js', 'Framer Motion'].map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-tag cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
