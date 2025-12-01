import ProjectCard from "../../src/components/projectCard"; // Assure-toi que le chemin est bon
import Header from "../../src/components/header"

export default function ProjectsPage() {
  // Tes données (à personnaliser avec tes vrais textes ce soir)
 
  const myProjects = [
    {
      title: "API Restful & BDD",
      description: "Architecture backend complète...",
      tags: ["Node.js", "Express", "MySQL"],
      repoLink: "https://github.com/ton-pseudo/api",
    },
    {
      title: "Dashboard React",
      description: "Interface d'administration...",
      tags: ["React", "Tailwind", "Recharts"],
      repoLink: "https://github.com/ton-pseudo/dash",
    },
    // Ajoute le 3ème ici...
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 px-6 pb-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Mes Réalisations</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Voici une sélection de projets techniques. Certains sont des POC (Preuve de concept), 
          d'autres sont en production. Ils démontrent ma capacité à gérer la stack complète.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}