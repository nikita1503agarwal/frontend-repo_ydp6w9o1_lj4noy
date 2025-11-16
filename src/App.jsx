import Hero from './components/Hero'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-20 backdrop-blur bg-white/60 border-b border-white/40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-extrabold text-xl">YourName<span className="text-blue-600">.dev</span></a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#projects" className="hover:text-blue-700">Projects</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
            <a href="/test" className="px-3 py-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700">System Test</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Projects />
        <ContactForm />
      </main>

      <footer className="py-10 text-center text-sm text-gray-600">© {new Date().getFullYear()} Your Name — Built with React, FastAPI, and Spline</footer>
    </div>
  )
}

export default App
