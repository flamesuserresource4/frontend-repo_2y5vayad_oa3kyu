import { motion } from 'framer-motion'
import { Shield, HeartPulse, BrainCircuit, Lock } from 'lucide-react'

const features = [
  {
    icon: HeartPulse,
    title: 'Cardiac & Fall Detection',
    desc: 'Real-time detection for falls and cardiac anomalies with on-device edge processing.',
    color: 'from-[#00F5D4] to-cyan-400',
  },
  {
    icon: BrainCircuit,
    title: 'LLM Context Awareness',
    desc: 'Understands routines and context to minimize false alarms and personalize care.',
    color: 'from-[#F4D35E] to-amber-300',
  },
  {
    icon: Shield,
    title: 'Emotion Recognition',
    desc: 'Recognizes stress, confusion, and mood shifts to alert families proactively.',
    color: 'from-cyan-300 to-[#00F5D4]',
  },
  {
    icon: Lock,
    title: 'Privacy-First Edge Processing',
    desc: 'Sensitive data remains local by default with encrypted cloud sync options.',
    color: 'from-amber-300 to-[#F4D35E]',
  },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="relative bg-[#0D1117] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Designed for safety, built with heart</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Cinematic visuals meet compassionate technology — a system that watches over without getting in the way.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-md"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${f.color} mix-blend-soft-light`} />
              <f.icon className="relative h-7 w-7 text-white/90" />
              <h3 className="relative mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="relative mt-2 text-sm text-white/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
