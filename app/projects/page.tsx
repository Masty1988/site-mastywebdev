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
      title: "Port de plaisance Russel",
      description: "Système de gestion/ réservation en ligne pour remplacer la gestion papier des places au port. Réalisé en formation",
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
      title: "CV en ligne",
      description: "Portfolio développeur interactif - Présentation de compétences et projets avec visualisation de données",
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
      title: "Touche pas au Klaxon",
      description: "Gestion de covoiturage interne. Les employés proposent/réservent des trajets, l'admin gère les plannings et les contraintes (jours fériés, doublons, etc.).",
      tags: ["PHP", "MVC", "MySQL"],
      repoLink: "https://github.com/Masty1988/port-russell-api",
      images:[
        "/projects/kloxon-1.png",
        "/projects/kloxon-2.png",
        "/projects/kloxon-3.png",
      ],
    },
    {
      title: "Trouve ton artisant",
      description: "Plateforme de recherche d'artisans par ville et métier. Trouver le bon pro rapidement sans téléphoner à 15 personnes.",
      tags: ["Node.js", "React", "API REST", "MySQL"],
      repoLink: "https://github.com/Masty1988/trouve-ton-artisan",
      images:[
            "/projects/Accueil-Desktop.png",
            "/projects/List-Desktop.png",
            "/projects/Fiche-Desktop.png",
            "/projects/Constr-Desktop.png"

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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
    </div>
  );
}