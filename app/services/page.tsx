import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Développement Sur Mesure",
      icon: "✨",
      description: "Sites vitrines, e-commerce ou SaaS. Je construis des applications web modernes, rapides et référencées (SEO), basées sur Next.js et React.",
      features: ["Site Vitrine & Corporate", "Applications SaaS", "Landing Pages haute conversion"]
    },
    {
      title: "Refonte & Optimisation",
      icon: "⚡",
      description: "Votre site est lent ? Vieux ? Difficile à maintenir ? Je reprends le code existant pour le moderniser, sécuriser et accélérer.",
      features: ["Audit de performance", "Migration vers React/Next.js", "Correction de bugs critiques"]
    },
    {
      title: "API & Backend",
      icon: "🛠️",
      description: "Besoin d'une logique complexe ? Je conçois des API robustes et des architectures de base de données scalables pour vos applications.",
      features: ["API Restful Node.js", "Architecture BDD (SQL/NoSQL)", "Intégration services tiers (Stripe, etc.)"]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 px-6 pb-20">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
          Mes Expertises
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Je n'interviens pas seulement comme développeur, mais comme partenaire technique pour faire grandir votre activité.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all">
            <div className="text-4xl mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-3 mb-8">
              {service.features.map((item) => (
                <li key={item} className="flex items-center text-sm text-gray-700">
                  <span className="mr-2 text-blue-500">✓</span> {item}
                </li>
              ))}
            </ul>
            <Link 
              href="/contact"
              className="mt-auto w-full py-3 px-4 bg-white border-2 border-blue-600 text-blue-700 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-center"
            >
              Demander un devis
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}