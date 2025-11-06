import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function StatsParallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={ref} className="relative bg-[#0D1117] py-24 overflow-hidden">
      <motion.div style={{ y, opacity }} className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-10 text-center text-white backdrop-blur-xl shadow-2xl">
          <p className="text-sm uppercase tracking-widest text-white/60">By 2050</p>
          <h3 className="mt-2 text-3xl md:text-5xl font-bold">2.1 billion seniors</h3>
          <p className="mt-3 text-white/70">We’re building TES to protect the people who built our world.</p>
        </div>
      </motion.div>
    </section>
  )
}
