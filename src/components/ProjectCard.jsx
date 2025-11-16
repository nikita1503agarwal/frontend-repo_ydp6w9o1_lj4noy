export default function ProjectCard({ project }) {
  const { title, description, tags = [], github_url, live_url, image_url } = project
  return (
    <div className="group bg-white rounded-xl shadow-sm ring-1 ring-black/5 overflow-hidden hover:shadow-xl transition">
      {image_url ? (
        <img src={image_url} alt={title} className="h-44 w-full object-cover" />
      ) : (
        <div className="h-44 w-full bg-gradient-to-br from-blue-50 to-indigo-100" />
      )}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-1 line-clamp-3">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {github_url && (
            <a className="text-sm font-semibold text-gray-900 hover:text-blue-700" href={github_url} target="_blank" rel="noreferrer">GitHub →</a>
          )}
          {live_url && (
            <a className="text-sm font-semibold text-blue-700" href={live_url} target="_blank" rel="noreferrer">Live Demo →</a>
          )}
        </div>
      </div>
    </div>
  )
}
