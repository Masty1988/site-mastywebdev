import Link from "next/link";

const segments = [
  {
    href: "/artisans",
    icon: "🔧",
    title: "Vous êtes artisan ou commerçant ?",
    examples: "Menuisier, plombier, coiffeur, kiné, indépendant…",
    promise: "Un site vitrine qui vous rend visible sur Google.",
    price: "À partir de 890 €",
  },
  {
    href: "/associations",
    icon: "🏆",
    title: "Vous présidez une association ?",
    examples: "Club sportif, asso culturelle, comité des fêtes…",
    promise: "Un site + des inscriptions en ligne, dossiers complets garantis.",
    price: "À partir de 890 €",
  },
];

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 pt-28 pb-16">
      <div className="w-full max-w-5xl space-y-10 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Votre site professionnel,
            <br />
            <span className="text-blue-600">à partir de 890 €</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Développeur web à Surgères et La Rochelle. Je crée des sites qui
            travaillent pour vous : visible sur Google, clair pour vos clients,
            et sans rien à gérer de votre côté.
          </p>
        </div>

        {/* --- Les deux parcours : chacun sa page, son offre et son prix --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {segments.map((segment) => (
            <Link
              key={segment.href}
              href={segment.href}
              className="group flex flex-col p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
            >
              <div className="text-4xl mb-4">{segment.icon}</div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                {segment.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{segment.examples}</p>
              <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                {segment.promise}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-semibold text-slate-900">
                  {segment.price}
                </span>
                <span className="font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                  Voir mon offre →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* --- Sortie de secours pour ceux qui ne se reconnaissent dans aucun des deux --- */}
        <p className="text-gray-600">
          Une autre activité ?{" "}
          <Link
            href="/contact"
            className="font-semibold text-blue-600 hover:underline underline-offset-4"
          >
            Parlons-en directement
          </Link>{" "}
          · ou{" "}
          <Link
            href="/projects"
            className="font-semibold text-blue-600 hover:underline underline-offset-4"
          >
            voir mes réalisations
          </Link>
        </p>
      </div>
    </section>
  );
}
