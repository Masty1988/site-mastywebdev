"use client";

import Link from "next/link";
import { useState } from "react";

export default function ServicesPage() {
 const [showMore, setShowMore] = useState(false)
 const services = [
    {
      title: "Votre vitrine accessible partout !",
      icon: "✨",
      description: `Votre activité vous prend déjà assez de temps, et votre site ne vous aide pas du tout. Vous passez vos journées à répondre aux mêmes questions : horaires, devis, rendez-vous, infos pratiques. Vous avez une idée précise de ce que vous voulez… mais personne pour la transformer en outil simple et efficace.
✅ Avec un site bien pensé, vos clients trouvent les infos essentielles sans vous déranger. Une partie de votre travail se fait automatiquement : demandes, réservations, devis. Vous gagnez du temps, de la clarté et une image pro dès la première seconde.`,
      features: ["Site vitrine", "Formulaire de contact", "Acces 24h24"]
    },
    {
      title: "Un coup de neuf dans votre site",
      icon: "🧹",
      description: `Votre site est lent, vieillissant, et il donne une mauvaise image de votre travail. Vous n’osez plus y toucher parce que chaque modification risque de tout casser. Vos visiteurs quittent la page avant d’avoir découvert ce que vous faites réellement. 
✅ Une fois modernisé, votre site devient rapide, agréable et efficace. Vos infos pratiques (horaires, tarifs, services) sont claires et vos clients restent. Vous retrouvez une présence en ligne digne de votre activité.`,
features : ["Modification facile", "Clarté (horaires, tarifs)", "Site plus rapide"],
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

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.slice(0,2).map((service, index) => (
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <button  onClick={() => setShowMore(!showMore)}>Plus de services ...</button>
      </div>
      {showMore && (
        <div className="">
          <div>{services[2].icon}</div>
          <h3>{services[2].title}</h3>
          <p>{services[2].description}</p>
          <ul>
            {services[2].features.map((item)=>(
              <li key={item}>{item}</li>
            ))}
          </ul>
            <Link 
              href="/contact"
              className="mt-auto w-full py-3 px-4 bg-white border-2 border-blue-600 text-blue-700 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-center"
            >
              Demander un devis
            </Link>
          </div>
      )}
    </div>
  );
}