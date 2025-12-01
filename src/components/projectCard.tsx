interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  repoLink: string;
}

export default function ProjectCard({ title, description, tags, repoLink }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
      {/* Zone Image (Placeholder pour l'instant) */}
      <div className="h-48 w-full bg-slate-200 flex items-center justify-center overflow-hidden">
        <span className="text-4xl">📸</span>
        {/* Ce soir tu remplaceras ça par une vraie balise <img src="..." /> */}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          Voir le code sur GitHub &rarr;
        </a>
      </div>
    </div>
  );
}