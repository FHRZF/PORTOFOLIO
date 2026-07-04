import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['home','about','skills','portfolio','projects','achievements','testimonials','blog','contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home',         href: '#home' },
    { name: 'About',        href: '#about' },
    { name: 'Skills',       href: '#skills' },
    { name: 'Design',       href: '#portfolio' },
    { name: 'Projects',     href: '#projects' },
    { name: 'Awards',       href: '#achievements' },
    { name: 'Reviews',      href: '#testimonials' },
    { name: 'Blog',         href: '#blog' },
    { name: 'Contact',      href: '#contact' },
  ]

  const sectionMap = {
    'Design':   'portfolio',
    'Awards':   'achievements',
    'Reviews':  'testimonials',
  }

  const isActive = (item) => {
    const section = sectionMap[item.name] || item.name.toLowerCase()
    return activeSection === section
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass-effect theme-transition"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        boxShadow: scrolled ? '0 4px 30px rgba(168,85,247,0.1)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(168,85,247,0.2)' : '1px solid rgba(168,85,247,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={() => setIsOpen(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-grotesk text-xl font-bold relative group"
        >
          <span className="gradient-text-cyber">FAHRIZ</span>
          <span className="text-gray-500 font-light">.</span>
          <span className="text-purple-400 font-light text-sm">dev</span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-1 items-center">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                isActive(item)
                  ? 'text-purple-400'
                  : 'text-gray-400 hover:text-gray-100'
              }`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ${
                isActive(item) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
              {isActive(item) && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-lg bg-purple-500/10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
            </a>
          ))}

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 p-2.5 rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300"
            aria-label="Toggle Theme"
            style={{ boxShadow: '0 0 12px rgba(168,85,247,0.15)' }}
          >
            {isDark ? <RiSunLine className="text-lg text-yellow-400" /> : <RiMoonClearLine className="text-lg" />}
          </motion.button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-400"
          >
            {isDark ? <RiSunLine className="text-base text-yellow-400" /> : <RiMoonClearLine className="text-base" />}
          </motion.button>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-purple-500/10"
            style={{ background: 'rgba(10,10,15,0.97)' }}
          >
            <div className="py-4 px-4 flex flex-col gap-1">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive(item)
                      ? 'bg-purple-500/15 text-purple-400 border border-purple-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
