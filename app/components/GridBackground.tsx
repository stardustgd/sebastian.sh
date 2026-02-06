'use client'

import { useEffect, useRef } from 'react'

const squareSize = 96
const colors = ['#5E81AC4D', '#8FBCBB33', '#88C0D040', '#81A1C13B']
const bgColor = '#2E3440'
const gridColor = '#D8DEE912'

type Square = {
  x: number
  y: number
  opacity: number
  direction: 1 | -1
  delay: number
  color: string
}

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const squaresRef = useRef<Square[]>([])
  const animationRef = useRef<number>(null)
  const prevSizeRef = useRef({ width: 0, height: 0 })

  function getRandomPos(width: number, height: number) {
    const cols = Math.ceil(width / squareSize)
    const rows = Math.ceil(height / squareSize)

    return {
      x: Math.floor(Math.random() * cols) * squareSize,
      y: Math.floor(Math.random() * rows) * squareSize,
    }
  }

  function createSquares(count: number, width: number, height: number) {
    const currCount = squaresRef.current.length

    if (currCount >= count) return

    const numSquares = count - currCount
    const indx = currCount

    const newSquares = Array.from({ length: numSquares }, (_, i) => {
      const pos = getRandomPos(width, height)
      return {
        ...pos,
        opacity: 0,
        direction: 1 as const,
        delay: (indx + i) * 30,
        color: colors[(indx + i) % colors.length],
      }
    })

    squaresRef.current.push(...newSquares)
  }

  function drawGrid(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    ctx.strokeStyle = gridColor
    ctx.lineWidth = 1

    for (let x = 0; x <= width; x += squareSize) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }

    for (let y = 0; y <= height; y += squareSize) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
  }

  function animate(ctx: CanvasRenderingContext2D) {
    const canvas = ctx.canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    drawGrid(ctx, canvas.width, canvas.height)

    squaresRef.current.forEach((square) => {
      if (square.delay > 0) {
        square.delay--
        return
      }

      square.opacity += 0.005 * square.direction

      if (square.opacity >= 0.5) square.direction = -1
      if (square.opacity <= 0) {
        square.direction = 1
        square.opacity = 0

        Object.assign(square, getRandomPos(canvas.width, canvas.height))
      }

      ctx.globalAlpha = square.opacity
      ctx.fillStyle = square.color
      ctx.fillRect(square.x, square.y, squareSize, squareSize)
    })

    ctx.globalAlpha = 1
    animationRef.current = requestAnimationFrame(() => animate(ctx))
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const { innerWidth: width, innerHeight: height } = window
      canvas.width = width
      canvas.height = height

      let count = 35
      if (width < 640) count = 15
      else if (width < 768) count = 25

      const prevSize = prevSizeRef.current
      const shouldExtend = width > prevSize.width || height > prevSize.height

      if (shouldExtend) {
        createSquares(count, width, height)
      }

      if (count < squaresRef.current.length) {
        squaresRef.current.length = count
      }

      prevSizeRef.current = { width, height }
    }

    resize()
    window.addEventListener('resize', resize)
    animate(ctx)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationRef.current!)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[-10] h-full w-full"
    />
  )
}
