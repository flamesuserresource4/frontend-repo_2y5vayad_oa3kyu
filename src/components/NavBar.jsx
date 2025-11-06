import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all ${
        scrolled ? 'backdrop-blur-md bg-[#0D1117]/70 border-b border-white/10' : 'bg-transparent'
      }`}
      aria-label="TES navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#00F5D4] to-[#F4D35E] shadow-lg" />
          <span className="text-white font-semibold tracking-tight">Third Eye Shield</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#contact" className="rounded-full bg-white/10 px-4 py-1.5 text-white hover:bg-white/20">Try Demo</a>
        </nav>
        <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0D1117]/90 text-white">
          <div className="mx-auto max-w-7xl px-6 py-4 space-y-3">
            <a href="#features" className="block">Features</a>
            <a href="#how" className="block">How it works</a>
            <a href="#privacy" className="block">Privacy</a>
            <a href="#contact" className="block">Try Demo</a>
          </div>
        </div>
      )}
    </header>
  )
}
