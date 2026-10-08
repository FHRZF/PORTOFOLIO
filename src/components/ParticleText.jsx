import { useEffect, useState, useRef } from 'react'

const FULL_NAME = 'FAHRIZ FITRA ANNAS'
const TYPING_SPEED_MS = 200   // ms per character
const CURSOR_HOLD_MS  = 800  // hold blinking cursor after done

export default function TypewriterName() {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const doneRef = useRef(false)

  useEffect(() => {
    let charIndex = 0
    doneRef.current = false

    const typeNext = () => {
      if (doneRef.current) return
      charIndex++
      setDisplayed(FULL_NAME.slice(0, charIndex))

      if (charIndex < FULL_NAME.length) {
        setTimeout(typeNext, TYPING_SPEED_MS)
      } else {
        // Finished typing — hold cursor a bit then fade it out
        setTimeout(() => setShowCursor(false), CURSOR_HOLD_MS)
      }
    }

    // Small initial delay so animation feels intentional
    const startTimer = setTimeout(typeNext, 500)
    return () => {
      doneRef.current = true
      clearTimeout(startTimer)
    }
  }, [])

  return (
    <div
      className="w-full flex justify-center items-center select-none"
      style={{ minHeight: '5rem' }}
    >
      <h1
        className="font-grotesk font-bold leading-tight tracking-tight text-center"
        style={{
          fontSize: 'clamp(2.4rem, 7.5vw, 6rem)',
          background: 'linear-gradient(100deg, #a855f7 0%, #7c3aed 25%, #06b6d4 60%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: 'none',
          filter: 'drop-shadow(0 0 22px rgba(168,85,247,0.35))',
          minHeight: '1.2em',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {displayed}
        {/* Blinking typewriter cursor */}
        {showCursor && (
          <span
            className="typewriter-cursor"
            style={{ height: 'clamp(1.8rem, 5.5vw, 4.5rem)' }}
          />
        )}
      </h1>
    </div>
  )
}
