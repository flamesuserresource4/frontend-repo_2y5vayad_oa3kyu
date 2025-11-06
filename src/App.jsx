import NavBar from './components/NavBar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import StatsParallax from './components/StatsParallax'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0D1117] font-['Inter','Manrope',system-ui,sans-serif]">
      <NavBar />
      <main>
        <Hero />
        <StatsParallax />
        <section id="how" className="relative bg-[#0D1117] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur-md shadow-xl">
                <h3 className="text-2xl font-semibold">Old systems vs TES</h3>
                <p className="mt-3 text-white/70">Drag the slider to compare legacy grayscale monitoring with the vibrant clarity of TES.</p>
                <div className="mt-6 relative h-56 w-full overflow-hidden rounded-xl">
                  <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop" alt="Old system" className="absolute inset-0 h-full w-full object-cover grayscale" />
                  <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1557980725-689da5f1f54b?q=80&w=1400&auto=format&fit=crop" alt="TES vibrant" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute inset-y-0 left-1/2 w-1.5 -ml-0.5 bg-white/80 backdrop-blur-md" />
                </div>
              </div>
              <div className="text-white">
                <h4 className="text-xl font-semibold">Compassion meets Intelligence</h4>
                <p className="mt-3 text-white/70">TES watches with care: emotion recognition, real-time fall & cardiac detection, and LLM-powered context understanding. Privacy stays at the core with edge-first processing.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#features" className="rounded-full bg-[#00F5D4] px-5 py-2 text-[#0D1117] font-semibold">Explore Features</a>
                  <a href="#" className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-white">See Family Dashboard</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
