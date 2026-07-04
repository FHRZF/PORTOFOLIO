/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        grotesk: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cyber: {
          black: '#0a0a0f',
          darker: '#0d0d1a',
          dark: '#111128',
          card: '#13132a',
          border: '#1e1e3f',
          purple: '#7c3aed',
          neon: '#a855f7',
          bright: '#c084fc',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          pink: '#ec4899',
          green: '#10b981',
          yellow: '#f59e0b',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
        'neon-flicker': 'neonFlicker 3s ease-in-out infinite',
        'border-spin': 'borderSpin 3s linear infinite',
        'text-shimmer': 'textShimmer 2.5s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glitch: {
          '0%, 100%': { textShadow: '2px 0 #a855f7, -2px 0 #06b6d4' },
          '25%': { textShadow: '-3px 0 #ec4899, 3px 0 #a855f7' },
          '50%': { textShadow: '3px 0 #06b6d4, -3px 0 #ec4899' },
          '75%': { textShadow: '-2px 0 #a855f7, 2px 0 #10b981' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.3)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        neonFlicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow: '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 40px #a855f7',
          },
          '20%, 24%, 55%': { textShadow: 'none', opacity: '0.8' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        borderSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'neon': '0 0 20px rgba(168, 85, 247, 0.5)',
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.5)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
        'neon-sm': '0 0 10px rgba(168, 85, 247, 0.3)',
        'neon-lg': '0 0 40px rgba(168, 85, 247, 0.6)',
        'cyber': '0 4px 24px rgba(10, 10, 15, 0.8), inset 0 1px 0 rgba(168, 85, 247, 0.1)',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px), linear-gradient(to right, rgba(168, 85, 247, 0.03) 1px, transparent 1px)',
        'neon-gradient': 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #06b6d4 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #0d0d1a 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(19,19,42,0.9) 0%, rgba(13,13,26,0.95) 100%)',
        'shimmer': 'linear-gradient(110deg, transparent 25%, rgba(168, 85, 247, 0.4) 50%, transparent 75%)',
      },
    },
  },
  plugins: [],
}
