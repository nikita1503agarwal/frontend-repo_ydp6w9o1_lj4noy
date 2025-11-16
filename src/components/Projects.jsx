import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/projects`)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        // fallback demo content
        setProjects([
          { id: '1', title: 'Interactive 3D Hero', description: 'Spline-powered hero with React.', tags: ['React', 'Spline'], live_url: '#', github_url: '#' },
          { id: '2', title: 'FastAPI API', description: 'Clean REST API with MongoDB.', tags: ['FastAPI', 'MongoDB'], live_url: '#', github_url: '#' },
        ])
      }
    }
    load()
  }, [])

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">Selected work</h2>
        <p className="text-center text-gray-600 mt-2">A few projects showcasing my full‑stack capabilities.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
