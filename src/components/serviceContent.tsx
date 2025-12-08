"use client";

import Link from "next/link";
import { useState } from "react";


export default function ServicesContent() {
 const [showMore, setShowMore] = useState(false)
 const services = [
    {
      title: "Votre vitrine accessible partout !",
      icon: "✨",
      description: `Votre activité vous prend déjà assez de temps, et tout repose sur vous. Sans site web, vous devez répéter les mêmes informations, présenter vos services à la main et gérer chaque demande individuellement. Et pendant que vous faites tout ça, vos futurs clients — ceux qui ne vous connaissent pas encore — cherchent en ligne… et ne vous trouvent pas.
✅ Avec une vraie vitrine en ligne, tout devient plus simple. Vos informations sont accessibles 24h/24, votre activité est claire dès la première seconde et vous gagnez en crédibilité sans effort. Votre site prend en charge une partie des tâches répétitives et vous êtes enfin présent là où vos prochains clients vous attendent.`,
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
      title: "Vos outils sur-mesure", // Titre simple et parlant
      icon: "🛠️",
      description: "Vous jonglez entre des fichiers Excel, vos emails et des logiciels qui ne communiquent pas entre eux. Vous perdez un temps précieux à ressaisir les mêmes informations, avec la peur de l'erreur de stock ou de facturation. Les solutions du marché sont trop compliquées et ne collent pas à votre réalité terrain. ✅ Je crée l'outil exact qu'il vous faut. Paiement en ligne, gestion de stocks ou espace client : tout est connecté et automatisé. Vous arrêtez de faire le robot sur l'administratif pour vous concentrer sur votre métier.",
      features: [
        "Paiement en ligne sécurisé",
        "Connexion de vos logiciels",
        "Espace client privé"
      ]
    }
  ];
  
  return (
    <div className="min-h-screen bg-white pt-32 px-6 pb-20">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
          Votre temps est précieux !
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Gardez-le pour faire ce que vous faites de mieux. Laissez-moi montrer à vos clients et prospects ce dont vous êtes capable. 
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
      <div className="flex justify-center p-8 text-blue-600">
        <button className="cursor-pointer text-blue-600 hover:scale-105 transition-all" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Moins de services" : "Plus de services ... "}
        </button>
      </div>
      {showMore && (
        <div className="flex justify-center mt-8">
        <div className="flex flex-col max-w-3xl p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all">
          <div className="text-4xl mb-6">{services[2].icon}</div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">{services[2].title}</h3>
          <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{services[2].description}</p>
          <ul className="space-y-3 mb-8">
            {services[2].features.map((item)=>(
              <li key={item} className="flex text-sm text-gray-700">
                  <span className="mr-2 text-blue-500">✓</span>{item}</li>
            ))}
          </ul>
            <Link 
              href="/contact"
              className="mt-auto w-full py-3 px-4 bg-white border-2 border-blue-600 text-blue-700 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-center"
            >
              Demander un devis
            </Link>
          </div>
          </div>
      )}
    </div>
  );
}