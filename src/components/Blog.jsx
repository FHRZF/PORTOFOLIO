import { motion } from 'framer-motion'

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: 'Memulai Perjalanan ReactJS bagi Pemula',
      excerpt: 'Panduan lengkap memahami dasar-dasar ReactJS, konsep component, props, dan state untuk merakit aplikasi web interaktif.',
      date: 'Jan 15, 2026',
      category: 'ReactJS',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Tips & Trik Menguasai Tailwind CSS v3',
      excerpt: 'Kumpulan praktik terbaik menggunakan kelas utilitas Tailwind untuk mempercepat pembangunan antarmuka web kustom tanpa menulis CSS manual.',
      date: 'Jan 10, 2026',
      category: 'TailwindCSS',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Pentingnya Riset Pengguna dalam Desain UI/UX',
      excerpt: 'Mengapa memahami kebutuhan nyata pengguna (User Research) adalah kunci melahirkan desain produk digital sukses yang diminati pasar.',
      date: 'Jan 05, 2026',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop',
    },
  ]

  return (
    <section id="blog" className="py-24 px-6 theme-transition" style={{ backgroundColor: 'var(--bg-card-alt)', color: 'var(--text-primary)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center tracking-tight"
        >
          Artikel Terbaru
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-16"
        ></motion.div>

        {/* Blog Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl dark:hover:shadow-black/25 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-150 dark:bg-gray-850">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Body Content */}
                <div className="p-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/45 px-3 py-1.5 rounded-lg uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 font-semibold">{blog.date}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="p-7 pt-0">
                <a
                  href="#blog"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Studi baca penuh untuk "${blog.title}" akan segera hadir!`);
                  }}
                  className="inline-block text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 text-sm cursor-pointer"
                >
                  Baca Selengkapnya →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
