export function initializeCursor() {
  if (window.matchMedia('(pointer:coarse)').matches) {
    return
  }

  // Remove existing cursor elements if any (avoid duplicate in React dev mode HMR)
  const existingCursor = document.querySelector('.custom-cursor')
  const existingFollower = document.querySelector('.cursor-follower')
  if (existingCursor) existingCursor.remove()
  if (existingFollower) existingFollower.remove()

  const cursor = document.createElement('div')
  cursor.className = 'custom-cursor'
  cursor.style.cssText = `
    position: fixed;
    width: 24px;
    height: 24px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transform: translate(-12px, -12px);
    transition: opacity 0.3s ease;
  `
  document.body.appendChild(cursor)

  const cursorFollower = document.createElement('div')
  cursorFollower.className = 'cursor-follower'
  cursorFollower.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background: #ffffff;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transform: translate(-4px, -4px);
    transition: opacity 0.3s ease;
  `
  document.body.appendChild(cursorFollower)

  let mouseX = 0
  let mouseY = 0
  let followerX = 0
  let followerY = 0

  const onMouseMove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    cursor.style.opacity = '1'
    cursorFollower.style.opacity = '1'
    cursor.style.left = mouseX + 'px'
    cursor.style.top = mouseY + 'px'
  }

  const onMouseLeave = () => {
    cursor.style.opacity = '0'
    cursorFollower.style.opacity = '0'
  }

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseleave', onMouseLeave)

  // Listen to hover states on interactive elements to scale up the cursor!
  const addHoverEffects = () => {
    const interactables = document.querySelectorAll('a, button, [role="button"], .interactive-card')
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-12px, -12px) scale(1.6)'
        cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
      })
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-12px, -12px) scale(1)'
        cursor.style.backgroundColor = 'transparent'
      })
    })
  }

  // Run on load and setup mutation observer to watch for new dynamic elements
  addHoverEffects()
  const observer = new MutationObserver(addHoverEffects)
  observer.observe(document.body, { childList: true, subtree: true })

  let isRunning = true
  const animate = () => {
    if (!isRunning) return
    followerX += (mouseX - followerX) * 0.15
    followerY += (mouseY - followerY) * 0.15
    cursorFollower.style.left = followerX + 'px'
    cursorFollower.style.top = followerY + 'px'
    requestAnimationFrame(animate)
  }
  animate()

  // Return a cleanup function
  return () => {
    isRunning = false
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseleave', onMouseLeave)
    observer.disconnect()
    cursor.remove()
    cursorFollower.remove()
  }
}
