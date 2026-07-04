import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/fahrizfitra' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/in/fahrizfitra' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/fahrizfitra' },
  ]

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800 py-16 px-6 theme-transition">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-10 border-b border-gray-800 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wider">
              FAHRIZ FITRA ANNAS
            </h3>
            <p className="text-gray-400 mt-2 text-sm font-semibold tracking-wide">
              UI/UX Designer & Web Developer
            </p>
          </motion.div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socials.map((item) => {
              const SocialIcon = item.icon
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-gray-800 text-gray-400 hover:text-white flex items-center justify-center text-xl transition-all border border-gray-700/50"
                  aria-label={item.name}
                >
                  <SocialIcon />
                </motion.a>
              )
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-semibold tracking-wide gap-4 text-center">
          <p>© {currentYear} Fahriz Fitra Annas. Hak Cipta Dilindungi.</p>
          <p>
            Dibuat penuh dengan <span className="text-red-500 animate-pulse">❤️</span> menggunakan React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
