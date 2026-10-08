import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, Tech Startup',
      content: 'Fahriz membangun website portofolio dan portal internal kami dengan hasil yang sangat memuaskan. Kerja cepat, komunikatif, dan desainnya sangat modern di luar ekspektasi.',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Product Manager, Design Agency',
      content: 'Keahlian desain UI/UX Fahriz sangat menakjubkan. Dia mampu menerjemahkan ide bisnis kami yang abstrak ke dalam bentuk kawat (wireframe) dan purwarupa interaktif fungsional dengan indah.',
      avatar: 'https://i.pravatar.cc/150?img=47',
      rating: 5,
    },
    {
      id: 3,
      name: 'Rian Cahya',
      role: 'Founder, E-commerce Platform',
      content: 'Developer web terbaik yang pernah saya ajak kerja sama. Selalu memberikan solusi atas tantangan teknis integrasi pembayaran, kode bersih, dan tepat waktu.',
      avatar: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="testimonials" className="py-24 px-6 theme-transition" style={{ backgroundColor: 'var(--bg-card-alt)', color: 'var(--text-primary)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center tracking-tight"
        >
          Testimoni Klien
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-16"
        ></motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.15 }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl border shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between card-hover-glow theme-transition"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>

                {/* Content Quote */}
                <p className="italic mb-8 leading-relaxed text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-4 border-t pt-5" style={{ borderColor: 'var(--border-color)' }}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-purple-500/20 shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
