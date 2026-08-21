import type { Metadata } from "next";
import ExperienceCard from "@/components/ExperienceCard";

export const metadata: Metadata = {
  title: "CV en ligne",
  description:
    "CV en ligne de Nicolas Lesieur : plus de 10 ans d'expérience commerciale BtoB et formation développeur full stack (React, Next.js, API, bases de données).",
};

const experiences = [
  {
    period: "2025 - 2026",
    title: "Technico-commercial EPI",
    org: "MABEO",
    items: [
      "Réponse aux appels d'offres",
      "Prospection",
      "Gestion de portefeuille client",
      "Prise de commandes, relance fournisseur, suivi client",
      "Mise en place de vestiaires, processus d'essais EPI, dossiers de marquage des EPI",
      "Vente de prestations de recyclage des EPI usagés",
    ],
  },
  {
    period: "2024 - 2025",
    title: "Formation Développeur Web Full Stack",
    org: "CEF",
    items: [
      "Apprentissage de la programmation générale",
      "Création de sites web et web mobile",
      "Hébergement de site web",
      "Apprentissage des bases de données",
      "Intégration d'API",
      "Programmation orientée objet",
    ],
  },
  {
    period: "2012 - 2023",
    title: "Commercial",
    org: "Prolians",
    items: [
      "Commercial itinérant sur secteur 17-79-85 de 2022 à 2023",
      "Commercial sédentaire secteur 17-79 de 2017 à 2023",
      "Vendeur comptoir de 2012 à 2017",
    ],
  },
  {
    period: "2012 - 2013",
    title: "Formation Vendeur Magasin",
    org: "Descours et Cabaud",
    items: [],
  },
];

const formations = [
  {
    year: "2025",
    title: "Développeur Full Stack Web et Web Mobile",
    org: "CEF",
  },
  {
    year: "2013",
    title: "Formation Vendeur Magasin — Tech Up",
    org: "Descours et Cabaud",
  },
];

const skillsCommerce = [
  "Cycle de vente BtoB complet",
  "Réponses aux appels d'offres",
  "Négociation",
  "Gestion de portefeuille",
  "CRM",
  "Prospection",
  "Relation client",
  "Gestion de projet",
  "Travail en équipe",
  "Formation et accompagnement des clients",
];

const skillsTech = [
  "React",
  "Next.js",
  "JavaScript",
  "Tailwind",
  "API REST",
  "SQL / PostgreSQL",
  "Git",
  "GitHub",
  "Hébergement",
  "Déploiement",
  "Responsive Design",
  "Intégration de maquettes",
  "Programmation orientée objet",
];

export default function CvPage() {
  return (
    <div className="min-h-screen bg-white pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center mb-16">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto md:mx-0 border-4 border-blue-100">
            <img
              src="/myface.jpg"
              alt="Nicolas Lesieur"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
              Nicolas Lesieur
            </h1>
            <p className="text-lg text-blue-600 font-semibold mb-4">
              Développeur Full Stack &mdash; Ex-commercial BtoB
            </p>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              Plus de 10 ans d&apos;expérience dans le commerce BtoB (prospection,
              négociation, grands comptes), complétés par une formation solide
              en développement full stack (React, Next.js, API, bases de données).
            </p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-slate-700">
              <a
                href="mailto:nlesieur17@outlook.fr"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                nlesieur17@outlook.fr
              </a>
              <a
                href="tel:+33603399001"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                06 03 39 90 01
              </a>
            </div>
          </div>
        </div>

        {/* Expériences */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Expériences</h2>
          <p className="text-sm text-gray-500 mb-8">Cliquez sur une carte pour voir le détail des missions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.period} {...exp} />
            ))}
          </div>
        </section>

        {/* Formation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Formation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {formations.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-200 p-6 bg-slate-50"
              >
                <p className="text-sm font-semibold text-blue-600 mb-1">{f.year}</p>
                <h3 className="font-bold text-slate-900">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.org}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compétences */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Compétences</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-slate-900 mb-4">Commerce</h3>
              <div className="flex flex-wrap gap-2">
                {skillsCommerce.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-slate-900 mb-4">Stack technique</h3>
              <div className="flex flex-wrap gap-2">
                {skillsTech.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Envie d&apos;échanger ?
          </h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Ouvert aux opportunités en développement web. N&apos;hésitez pas à me
            contacter pour en discuter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:nlesieur17@outlook.fr"
              className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
            >
              M&apos;envoyer un email
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-mastywebdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-all"
            >
              Voir mon profil LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
