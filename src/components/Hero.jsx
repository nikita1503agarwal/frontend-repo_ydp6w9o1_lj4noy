import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10">
          <div className="backdrop-blur-sm bg-white/30 rounded-2xl p-6 md:p-10 shadow-lg">
            <p className="text-sm uppercase tracking-widest text-blue-700 mb-2">Full‑Stack Developer</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Building modern, scalable web apps
            </h1>
            <p className="mt-4 text-gray-700 md:text-lg">
              I craft interactive experiences and robust APIs with React, FastAPI, and cloud‑ready databases.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">View Projects</a>
              <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/80 text-gray-900 font-semibold hover:bg-white transition">Contact Me</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />
    </section>
  )
}
