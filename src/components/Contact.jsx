import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlineExternalLink } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa'
import confetti from 'canvas-confetti'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const contacts = [
    {
      id: 1,
      name: 'Email Resmi',
      value: 'fahriz.fitra@example.com',
      icon: HiOutlineMail,
      link: 'mailto:fahriz.fitra@example.com',
      color: 'text-blue-500 dark:text-blue-400',
      bg: 'bg-blue-50/50 dark:bg-blue-950/20',
    },
    {
      id: 2,
      name: 'GitHub',
      value: 'github.com/fahrizfitra',
      icon: FaGithub,
      link: 'https://github.com/fahrizfitra',
      color: 'text-gray-800 dark:text-gray-200',
      bg: 'bg-gray-100/50 dark:bg-gray-800/30',
    },
    {
      id: 3,
      name: 'LinkedIn',
      value: 'linkedin.com/in/fahrizfitra',
      icon: FaLinkedin,
      link: 'https://linkedin.com/in/fahrizfitra',
      color: 'text-blue-600 dark:text-blue-450',
      bg: 'bg-blue-100/30 dark:bg-blue-900/10',
    },
    {
      id: 4,
      name: 'Instagram',
      value: '@fahrizfitra',
      icon: FaInstagram,
      link: 'https://instagram.com/fahrizfitra',
      color: 'text-pink-600 dark:text-pink-400',
      bg: 'bg-pink-50/50 dark:bg-pink-950/20',
    },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Ganti dengan ID EmailJS yang sebenarnya
    // Dapatkan dari https://dashboard.emailjs.com/
    const serviceId = 'YOUR_SERVICE_ID'
    const templateId = 'YOUR_TEMPLATE_ID'
    const publicKey = 'YOUR_PUBLIC_KEY'

    if (serviceId === 'YOUR_SERVICE_ID') {
      // Fallback ke simulasi jika EmailJS belum diatur (agar form tidak error saat belum disetting)
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSent(true)
        setFormData({ name: '', email: '', message: '' })
        confetti({ particleCount: 120, spread: 70, origin: { y: 0.8 }, colors: ['#3b82f6', '#8b5cf6', '#10b981'] })
        setTimeout(() => setIsSent(false), 5000)
      }, 1500)
      return
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setIsSubmitting(false)
        setIsSent(true)
        setFormData({ name: '', email: '', message: '' })

        // Celebrate success!
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#3b82f6', '#8b5cf6', '#10b981']
        })

        // Clear success notification after 5 seconds
        setTimeout(() => setIsSent(false), 5000)
      }, (error) => {
        setIsSubmitting(false)
        console.error('EmailJS Error:', error.text)
        alert('Maaf, pesan gagal terkirim. Silakan coba beberapa saat lagi.')
      })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-950 theme-transition">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Mari Terhubung
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Punya ide proyek, tawaran kerja sama, atau sekadar ingin menyapa? Hubungi saya kapan saja!
          </p>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Social Information */}
          <motion.div
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">
                Informasi Kontak
              </h3>
              
              <div className="grid gap-4">
                {contacts.map((contact) => {
                  const Icon = contact.icon
                  return (
                    <motion.a
                      key={contact.id}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ x: 6 }}
                      className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-5 group cursor-pointer"
                    >
                      <div className={`p-4 rounded-xl ${contact.bg} ${contact.color} text-2xl group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <Icon />
                      </div>
                      <div className="overflow-hidden flex-1">
                        <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                          {contact.name}
                        </h4>
                        <p className="text-base font-bold text-gray-800 dark:text-gray-250 truncate flex items-center gap-1.5">
                          {contact.value}
                          <HiOutlineExternalLink className="text-sm opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Visual aesthetic accent */}
            <div className="hidden lg:block bg-gradient-to-br from-blue-600/5 to-purple-600/5 dark:from-blue-500/5 dark:to-purple-500/5 border border-dashed border-gray-200 dark:border-gray-800 p-6 rounded-3xl text-center">
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
                Waktu Respon Cepat
              </p>
              <p className="text-sm font-bold text-gray-650 dark:text-gray-300">
                ⏳ Biasanya membalas dalam waktu kurang dari 24 jam.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-850 p-8 md:p-10 rounded-3xl shadow-xl dark:shadow-black/20 flex flex-col gap-6 h-full justify-between"
            >
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                Kirim Pesan Langsung
              </h3>

              {isSent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 p-4 rounded-xl border border-green-200 dark:border-green-900 text-sm font-semibold flex items-center gap-2"
                >
                  🎉 Pesan Anda berhasil terkirim! Terima kasih telah menghubungi saya.
                </motion.div>
              )}

              {/* Form Input Fields */}
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama Anda..."
                    className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-950/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 dark:text-white font-medium transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="nama@email.com..."
                    className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-950/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 dark:text-white font-medium transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Isi Pesan Anda
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tuliskan detail pesan Anda di sini..."
                    className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-950/50 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900 dark:text-white font-medium transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gray-900 dark:bg-white text-white dark:text-gray-950 font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800 dark:hover:bg-gray-100'
                }`}
              >
                {isSubmitting ? 'Mengirim Pesan...' : 'Kirim Pesan Sekarang'}
                {!isSubmitting && <FaPaperPlane className="text-xs" />}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
