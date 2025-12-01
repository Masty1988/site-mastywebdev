import ProjectCard from "./projectCard";

const myProjects = [
  {
    title: "API Restful & BDD",
    description: "Une API robuste capable de gérer des milliers de requêtes. Architecture MVC, connexion MySQL optimisée et documentation Swagger.",
    tags: ["Node.js", "Express", "MySQL", "API"],
    repoLink: "https://github.com/Masty1988/port-russell-api",
  },
  {
    title: "Portfolio React",
    description: "Utilisation de react routeur, gestion multi pages.",
    tags: ["React", "Tailwind", "Recharts"],
    repoLink: "https://github.com/Masty1988/mon-app",
  },
  {
    title: "Base De Données SQL",
    description: "Creation et implémentation d'une base de donnée relationnelle avec MySQL.",
    tags: ["BDD", "MySQL", "JS"],
    repoLink: "https://github.com/Masty1988/BDDSQL-tifosi",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Mes Réalisations
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Quelques exemples de code qui tournent en production ou sur GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}