import Link from "next/link";
import type { Metadata } from "next";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Site internet pour artisans et commerçants",
  description:
    "Création de site vitrine pour artisans, commerçants et indépendants à Surgères, La Rochelle et en Charente-Maritime. Visible sur Google, clair pour vos clients. À partir de 890 €.",
};

const pains = [
  {
    icon: "🔍",
    title: "On vous cherche sur Google, on trouve votre concurrent",
    text: "Quelqu'un tape votre métier et votre ville. Trois noms sortent. Le vôtre n'y est pas, parce que vous n'avez rien à indexer.",
  },
  {
    icon: "📞",
    title: "Vous répétez les mêmes réponses dix fois par semaine",
    text: "Vos horaires, votre zone d'intervention, ce que vous faites et ce que vous ne faites pas. À chaque appel, depuis le chantier.",
  },
  {
    icon: "📷",
    title: "Vous n'avez rien à montrer",
    text: "On vous demande des exemples de votre travail. Vous cherchez dans la pellicule de votre téléphone et vous envoyez trois photos par SMS.",
  },
  {
    icon: "👍",
    title: "Une page Facebook n'est pas un site",
    text: "Elle ne sort quasiment pas dans les recherches, elle ne vous appartient pas, et elle noie vos infos pratiques dans un fil d'actualité.",
  },
];

const included = [
  "Site vitrine — 4 pages",
  "Vos coordonnées et vos horaires bien visibles",
  "Formulaire de contact qui arrive dans votre boîte mail",
  "Galerie de vos réalisations",
  "Lisible et rapide sur téléphone",
  "Référencement local : votre métier, votre ville",
  "Nom de domaine, hébergement et adresse mail professionnelle",
];

export default function ArtisansPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ---------- HERO ---------- */}
      <section className="bg-slate-50 border-b border-slate-100 px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8">
            Artisans, commerçants et indépendants
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Votre site vitrine,
            <br />
            <span className="text-blue-600">à partir de 890 €</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Vos horaires, vos réalisations et vos coordonnées, accessibles 24h/24
            par les clients qui vous cherchent. Vous n&apos;avez rien à gérer :
            je m&apos;occupe de tout, vous continuez votre métier.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=artisan"
              className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Demander un devis
            </Link>
            <a
              href="#tarifs"
              className="px-8 py-4 rounded-xl bg-white text-slate-800 border-2 border-slate-200 font-bold hover:border-blue-600 hover:text-blue-700 transition-all"
            >
              Voir les tarifs
            </a>
          </div>
        </div>
      </section>

      {/* ---------- LE PROBLÈME ---------- */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Sans site, voilà ce qui se passe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vous faites du bon travail. Le problème, c&apos;est que ceux qui ne
              vous connaissent pas encore n&apos;ont aucun moyen de le savoir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pains.map((pain) => (
              <div
                key={pain.title}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="text-3xl mb-4">{pain.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {pain.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{pain.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CE QUI EST INCLUS ---------- */}
      <section className="bg-slate-50 border-y border-slate-100 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 text-center">
            Ce que vous recevez
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 text-gray-700"
              >
                <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- TARIFS ---------- */}
      <section id="tarifs" className="px-6 py-20 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Les tarifs, annoncés d&apos;avance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pas de surprise en fin de chantier. Vous savez ce que ça coûte
              avant de me contacter.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-10">
            <div className="flex flex-col p-8 rounded-2xl bg-white border-2 border-blue-600 shadow-lg shadow-blue-500/10 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Site vitrine
              </h3>
              <p className="text-gray-600 mb-6">
                4 pages, formulaire de contact, galerie de réalisations,
                référencement local. Nom de domaine, hébergement et mail pro
                compris la première année.
              </p>
              <p className="text-4xl font-extrabold text-slate-900">
                890 à 1 200 €
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-sm text-gray-500 mb-1">Page supplémentaire</p>
              <p className="text-xl font-bold text-slate-900">120 €</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-sm text-gray-500 mb-1">
                Hébergement et maintenance
              </p>
              <p className="text-xl font-bold text-slate-900">
                144 € par an
                <span className="block text-sm font-normal text-gray-500">
                  soit 12 €/mois — une seule facture, première année incluse
                </span>
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-sm text-gray-500 mb-1">À la commande</p>
              <p className="text-xl font-bold text-slate-900">
                40 % d&apos;acompte
                <span className="block text-sm font-normal text-gray-500">
                  solde à la livraison
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PREUVE ---------- */}
      <section className="bg-slate-50 border-t border-slate-100 px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Du travail livré, pas des promesses
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Un site en ligne et en service, des applications complètes avec base
            de données et espace d&apos;administration. Allez voir par
            vous-même ce que je livre.
          </p>
          <Link
            href="/projects"
            className="inline-block px-8 py-4 rounded-xl bg-white text-slate-800 border-2 border-slate-200 font-bold hover:border-blue-600 hover:text-blue-700 transition-all"
          >
            Voir mes réalisations
          </Link>
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Parlons de votre activité
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Dites-moi ce que vous faites et où vous intervenez. Je vous dis ce
            que ça donnerait, combien ça coûte et en combien de temps
            c&apos;est en ligne. Sans engagement.
          </p>
          <Link
            href="/contact?type=artisan"
            className="inline-block px-10 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
          >
            Demander un devis
          </Link>
        </div>
      </section>

      <RelatedLinks currentPage="artisans" />
    </div>
  );
}
