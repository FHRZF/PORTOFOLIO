import { motion } from 'framer-motion'
import { HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Sales Management System',
      description: 'Sistem manajemen penjualan komprehensif berbasis web yang tangguh. Membantu pelaku bisnis melacak stok inventaris barang, membuat laporan laba-rugi otomatis, melacak data pelanggan, serta menampilkan dasbor metrik penjualan secara real-time.',
      technologies: ['Laravel', 'MySQL', 'PHP', 'Bootstrap', 'ChartJS'],
      liveLink: 'https://example.com/demo1',
      githubLink: 'https://github.com',
    },
    {
      id: 2,
      title: 'E-commerce Fullstack Platform',
      description: 'Aplikasi belanja online berskala penuh dengan antarmuka React yang super cepat di sisi depan dan server API Node.js di sisi belakang. Dilengkapi dengan keranjang belanja interaktif, integrasi pembayaran Stripe aman, pencarian produk, serta autentikasi JWT.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      liveLink: 'https://example.com/demo2',
      githubLink: 'https://github.com',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas kolaboratif real-time untuk mempermudah koordinasi tim. Anggota tim dapat membuat papan tugas Kanban, menetapkan tenggat waktu, mengunggah lampiran, serta mendapatkan pemberitahuan instan saat status tugas berubah.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      liveLink: 'https://example.com/demo3',
      githubLink: 'https://github.com',
    },
  ]

  const projectVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-950 theme-transition">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center tracking-tight"
        >
          Proyek Pengembangan Web
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-16"
        ></motion.div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              variants={projectVariants}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.01, y: -4 }}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 md:p-10 rounded-3xl hover:shadow-xl dark:hover:shadow-black/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-8">
                {/* Text Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-650 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-purple-50 dark:bg-purple-950/45 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-lg text-xs font-bold tracking-wide border border-purple-100/50 dark:border-purple-900/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-row sm:flex-col gap-3 flex-shrink-0 w-full md:w-auto">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 md:flex-none bg-gray-900 dark:bg-white text-white dark:text-gray-950 px-6 py-3.5 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-100 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    Demo Langsung
                    <HiOutlineExternalLink className="text-base" />
                  </motion.a>
                  
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 md:flex-none border border-gray-900 dark:border-gray-700 text-gray-900 dark:text-white px-6 py-3.5 rounded-xl font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-950 transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    Kode GitHub
                    <HiOutlineCode className="text-base" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
