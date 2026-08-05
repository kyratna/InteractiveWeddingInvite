import { useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface ScratchCardProps {
  hint: string
  children: ReactNode
  className?: string
}

const REVEAL_THRESHOLD = 0.45
const BRUSH_RADIUS = 26

export default function ScratchCard({ hint, children, className = '' }: ScratchCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isDrawing = useRef(false)
  const moveCount = useRef(0)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    function paintTexture(ctx: CanvasRenderingContext2D, w: number, h: number) {
      const gradient = ctx.createLinearGradient(0, 0, w, h)
      gradient.addColorStop(0, '#d8b25c')
      gradient.addColorStop(1, '#8a6a24')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, w, h)

      ctx.fillStyle = 'rgba(255,255,255,0.1)'
      for (let x = 6; x < w; x += 16) {
        for (let y = 6; y < h; y += 16) {
          ctx.beginPath()
          ctx.arc(x, y, 1.1, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      ctx.fillStyle = 'rgba(255,255,255,0.92)'
      ctx.font = '600 12px Jost, sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      const label = hint.toUpperCase().split('').join(' ')
      wrapText(ctx, label, w / 2, h / 2, w - 40, 16)
    }

    function wrapText(
      ctx: CanvasRenderingContext2D,
      text: string,
      x: number,
      y: number,
      maxWidth: number,
      lineHeight: number,
    ) {
      const words = text.split(' ')
      const lines: string[] = []
      let line = ''
      for (const word of words) {
        const test = line ? `${line} ${word}` : word
        if (ctx.measureText(test).width > maxWidth && line) {
          lines.push(line)
          line = word
        } else {
          line = test
        }
      }
      if (line) lines.push(line)
      const startY = y - ((lines.length - 1) * lineHeight) / 2
      lines.forEach((l, i) => ctx.fillText(l, x, startY + i * lineHeight))
    }

    function setup() {
      const dpr = window.devicePixelRatio || 1
      const rect = container!.getBoundingClientRect()
      canvas!.width = rect.width * dpr
      canvas!.height = rect.height * dpr
      canvas!.style.width = `${rect.width}px`
      canvas!.style.height = `${rect.height}px`
      const ctx = canvas!.getContext('2d')
      if (!ctx) return
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      paintTexture(ctx, rect.width, rect.height)
    }

    setup()
    const onResize = () => {
      if (!revealed) setup()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hint])

  function scratchAt(clientX: number, clientY: number) {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, BRUSH_RADIUS, 0, Math.PI * 2)
    ctx.fill()
  }

  function checkReveal() {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const { width, height } = canvas
    const data = ctx.getImageData(0, 0, width, height).data
    let transparent = 0
    let total = 0
    for (let i = 3; i < data.length; i += 4 * 12) {
      total++
      if (data[i] < 40) transparent++
    }
    if (total > 0 && transparent / total > REVEAL_THRESHOLD) {
      setRevealed(true)
    }
  }

  function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    if (revealed) return
    isDrawing.current = true
    canvasRef.current?.setPointerCapture(e.pointerId)
    scratchAt(e.clientX, e.clientY)
  }

  function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!isDrawing.current || revealed) return
    scratchAt(e.clientX, e.clientY)
    moveCount.current += 1
    if (moveCount.current % 4 === 0) checkReveal()
  }

  function stopDrawing() {
    isDrawing.current = false
    checkReveal()
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-charcoal-2 px-4">
        {children}
      </div>
      <AnimatePresence>
        {!revealed && (
          <motion.canvas
            ref={canvasRef}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute inset-0 h-full w-full touch-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDrawing}
            onPointerLeave={stopDrawing}
            onPointerCancel={stopDrawing}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
