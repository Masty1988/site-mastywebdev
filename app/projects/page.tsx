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
      description: "Projet de formation. Gestion des reservations d'un port de plaisance. Fini le planning papier !",
      tags: ["Node.js", "Express", "MySQL"],
      repoLink: "https://github.com/Masty1988/port-russell-api",
      images:[
        "/projects/APIrussel1.png",
        "/projects/APIrussel2.png",
        "/projects/APIrussel3.png",
        "/projects/APIrussel4.png",

      ],
    },
    {
      title: "Portfolio React",
      description: "Projet de formation. Portfolio développeur. Être visible et décrocher des missions sans démarcher. ",
      tags: ["React", "Tailwind", "Recharts"],
      repoLink: "https://github.com/Masty1988/mon-app",
      images:[
        "/projects/johndoe.png",
        "/projects/johndoe2.png",
        "/projects/johndoe3.png",
        "/projects/johndoe4.png",
      ],
    },
    {
       title: "Maquette SITE WEB",
      description: "Projet de formation. Maquette client. Voir avant de se lancer.",
      tags: ["Figma", "Design", "Responsive"],
      repoLink: "https://github.com/ton-pseudo/dash",
      images:[
        "/projects/figma1.png",
        "/projects/figma2.png",
      ],
    },
    
    
    // Ajoute le 3ème ici...
  ];

  return (
    <div className="min-h-screen bg-white pt-32 px-6 pb-20">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Mes Réalisations</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez mes réalisations concrètes : de la simple maquette de démonstration jusqu'au site complet et sécurisé. 
          Chaque projet répond à un besoin précis : <span className="text-blue-600 font-medium">gagner du temps, vendre mieux ou simplifier la gestion.</span>
        </p>
      </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
    </div>
  );
}