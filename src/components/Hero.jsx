import { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const BUTTON_BASE =
  'inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00F5D4] disabled:opacity-60'

export default function Hero() {
  const containerRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [0, 1], [6, -6])
  const rotateY = useTransform(mx, [0, 1], [-6, 6])

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mx.set(x)
    my.set(y)
  }

  return (
    <section
      aria-label="Third Eye Shield hero"
      className="relative min-h-[92vh] w-full overflow-hidden bg-[#0D1117]"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ambient gradient veil for cinematic depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(13,17,23,0)_0%,rgba(13,17,23,0.6)_60%,rgba(13,17,23,0.9)_100%),radial-gradient(900px_500px_at_90%_70%,rgba(0,245,212,0.15)_0%,rgba(13,17,23,0.7)_60%,rgba(13,17,23,1)_100%)]" />

      {/* Particle glow orbs */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#00F5D4]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-[#F4D35E]/10 blur-3xl" />

      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center text-white will-change-transform"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-balance font-semibold tracking-tight md:text-6xl text-4xl"
          style={{ textShadow: '0 6px 24px rgba(0,0,0,0.45)' }}
        >
          They took care of us. Now it’s our turn to take care of them.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          className="mt-5 max-w-2xl text-base md:text-lg text-white/80"
        >
          AI-powered monitoring that protects with compassion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#features"
            className={`${BUTTON_BASE} bg-[#00F5D4] text-[#0D1117] shadow-[0_8px_30px_rgba(0,245,212,0.35)] hover:shadow-[0_12px_40px_rgba(0,245,212,0.5)] hover:scale-[1.02]`}
          >
            Try Demo
          </a>
          <a
            href="#how"
            className={`${BUTTON_BASE} border border-white/20 bg-white/10 text-white hover:bg-white/15 hover:border-white/30`}
          >
            Watch How It Works
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
