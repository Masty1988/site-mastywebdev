import ProjectCard from "../../src/components/projectCard"; // Assure-toi que le chemin est bon
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Réalisations",
  description: "Découvrez mes projets web : API, Dashboards React et refonte de sites. Des exemples concrets de code solide.",
};

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
    <div className="min-h-screen bg-white pt-32 px-6 pb-20">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Mes Réalisations</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Voici une sélection de projets techniques. Certains sont des POC (Preuve de concept), 
          d'autres sont en production. Ils démontrent ma capacité à gérer la stack complète.
        </p>
      </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
    </div>
  );
}