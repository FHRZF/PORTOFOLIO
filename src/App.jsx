import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { initializeCursor } from './animations/cursor'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

function AppContent() {
  useEffect(() => {
    const cleanupCursor = initializeCursor()
    return () => {
      if (cleanupCursor) {
        cleanupCursor()
      }
    }
  }, [])

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white min-h-screen theme-transition">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Projects />
      <Achievements />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
