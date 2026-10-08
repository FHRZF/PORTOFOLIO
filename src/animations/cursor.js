export function initializeCursor() {
  // Skip on touch devices (mobile/tablet)
  if (window.matchMedia('(pointer: coarse)').matches) return

  // ── Clean up any existing cursor elements (handles HMR) ──
  document.querySelectorAll('.cursor-blob, .cursor-dot').forEach(el => el.remove())

  // ── Hide the default OS cursor ──
  document.documentElement.style.cursor = 'none'

  // ── Create Blob (large liquid circle, lags behind slightly) ──
  const blob = document.createElement('div')
  blob.className = 'cursor-blob'
  document.body.appendChild(blob)

  // ── Create Dot (small precise dot, follows exactly) ──
  const dot = document.createElement('div')
  dot.className = 'cursor-dot'
  document.body.appendChild(dot)

  // ── State ──
  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2
  let blobX = mouseX
  let blobY = mouseY
  let isHovering = false
  let isRunning = true

  // ── Track mouse ──
  const onMouseMove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    blob.style.opacity = '1'
    dot.style.opacity = '1'
  }

  const onMouseLeave = () => {
    blob.style.opacity = '0'
    dot.style.opacity = '0'
  }

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseleave', onMouseLeave)

  // ── Apply hover effects on interactive elements ──
  const applyHoverEffects = () => {
    const targets = document.querySelectorAll(
      'a, button, [role="button"], label, input, textarea, select, .interactive-card, [tabindex="0"]'
    )
    targets.forEach((el) => {
      if (el.dataset.cursorBound) return
      el.dataset.cursorBound = 'true'

      el.addEventListener('mouseenter', () => {
        isHovering = true
        blob.classList.add('cursor-blob--hover')
        dot.classList.add('cursor-dot--hover')
      })
      el.addEventListener('mouseleave', () => {
        isHovering = false
        blob.classList.remove('cursor-blob--hover')
        dot.classList.remove('cursor-dot--hover')
      })
    })
  }

  applyHoverEffects()

  // MutationObserver to handle dynamically injected elements
  const observer = new MutationObserver(() => applyHoverEffects())
  observer.observe(document.body, { childList: true, subtree: true })

  // ── Render loop: lerp blob position for liquid lag effect ──
  const lerp = (a, b, t) => a + (b - a) * t

  const animate = () => {
    if (!isRunning) return

    // Blob lags behind mouse — liquid feel
    const lerpSpeed = isHovering ? 0.1 : 0.14
    blobX = lerp(blobX, mouseX, lerpSpeed)
    blobY = lerp(blobY, mouseY, lerpSpeed)

    blob.style.transform = `translate(${blobX}px, ${blobY}px)`
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`

    requestAnimationFrame(animate)
  }

  animate()

  // ── Cleanup function returned for React useEffect ──
  return () => {
    isRunning = false
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseleave', onMouseLeave)
    observer.disconnect()
    blob.remove()
    dot.remove()
    document.documentElement.style.cursor = ''
  }
}
