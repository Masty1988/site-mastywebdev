import ProjectCard from "../../src/components/projectCard"; 
import LiveProjectCard from "@/components/LiveProjectCard";
import type { Metadata } from "next";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Portfolio & Réalisations",
  description: "Découvrez mes projets web : API, Dashboards React et refonte de sites. Des exemples concrets de code solide.",
};

export default function ProjectsPage() {
  
 
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
      title: "Trouve ton artisan",
      description: "Plateforme de recherche d'artisans par ville et métier. Trouver le bon pro rapidement sans téléphoner à 15 personnes.",
      tags: ["Node.js", "React", "API REST", "MySQL"],
      repoLink: "https://github.com/Masty1988/trouve-ton-artisan",
      images:[
            "/projects/Home-desktop.png",
            "/projects/Liste.png",
            "/projects/Recherche.png",
            "/projects/Fiche.png",
            
      ],
    },
    
    
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
        {/* --- Site en ligne : réalisation en production, mise en avant avant les exercices --- */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Site en ligne</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ils me font confiance pour leur présence en ligne. Découvrez un exemple concret de site web que j'ai développé et déployé pour un client avec des fonctionnalités interactives et une interface conviviale.
            </p>
          </div>
          <LiveProjectCard
            title="ABC Boxing La Rochelle"
            subtitle="Mon premier site déployé pour un client"
            description="Site vitrine pour un club de boxe française et kickboxing à La Rochelle : présentation des disciplines, tarifs et inscription en ligne, fiches PDF téléchargeables, et histoire du club fondé en 2003."
            url="https://www.abcboxing.fr"
            tags={["Next.js", "Tailwind CSS"]}
            images={[
              "/projects/abc1.jpg",
              "/projects/abc2.jpg",
              "/projects/abc3.jpg",
              "/projects/abc4.jpg",
            ]}
          />
        </div>

        {/* --- Projets réalisés en formation --- */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Projets réalisés en formation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des applications complètes développées pendant ma formation : back-end, base de données et interfaces. Chacune répond à un besoin métier concret.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {myProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        <RelatedLinks currentPage="projects" />
    </div>
  );
}