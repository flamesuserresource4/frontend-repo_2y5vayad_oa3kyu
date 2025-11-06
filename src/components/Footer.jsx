export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-[#0D1117] to-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#00F5D4] to-[#F4D35E] shadow-lg" />
          <span className="font-semibold">Third Eye Shield</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-white/80">
          <a href="#" className="hover:text-white">Documentation</a>
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
        <p className="text-xs text-white/60">© {new Date().getFullYear()} TES — All rights reserved.</p>
      </div>
    </footer>
  )
}
