import Link from "next/link";
import type { Metadata } from "next";
import RelatedLinks from "@/components/RelatedLinks";
import DashboardPreview from "@/components/DashboardPreview";

export const metadata: Metadata = {
  title: "Site & inscriptions en ligne pour clubs sportifs",
  description:
    "Site internet et plateforme d'inscription pour clubs de boxe, MMA, sports de combat, plongée et associations sportives : certificat médical bloquant à l'inscription, règlement signé en ligne, suivi des adhérents. À partir de 890 €.",
};

const pains = [
  {
    icon: "📋",
    title: "Les inscriptions arrivent en vrac",
    text: "Des feuilles remplies à la main, des photos de documents par SMS, des dossiers déposés au bord du tatami. À la rentrée, tout arrive en même temps.",
  },
  {
    icon: "🩺",
    title: "Un dossier incomplet, c'est votre responsabilité",
    text: "Dans les disciplines à risque, le certificat médical n'est pas une formalité administrative. Vous relancez au téléphone, vous notez sur un coin de cahier, et vous laissez quand même le gamin monter sur le ring en croisant les doigts.",
  },
  {
    icon: "✍️",
    title: "Le règlement intérieur, personne ne le signe",
    text: "Vous l'imprimez, vous le distribuez, il revient une fois sur trois. En cas de problème, vous n'avez rien à montrer.",
  },
  {
    icon: "💶",
    title: "Qui a payé, qui n'a pas payé",
    text: "Des chèques dans une enveloppe, des espèces, des virements. Le suivi tient dans votre tête et dans un cahier.",
  },
];

const steps = [
  {
    number: "1",
    title: "L'adhérent s'inscrit en ligne",
    text: "Depuis son téléphone, en quelques minutes, à n'importe quelle heure. Vous n'avez rien à faire.",
  },
  {
    number: "2",
    title: "Il dépose les documents que vous exigez",
    text: "Certificat médical, autorisation parentale, ce que vous voulez. Tant qu'ils ne sont pas déposés, le formulaire ne part pas. Aucune inscription incomplète ne peut vous arriver.",
  },
  {
    number: "3",
    title: "Il signe le règlement intérieur",
    text: "Signature électronique horodatée, avec conservation de l'adresse IP. Vous avez une trace, datée, pour chaque adhérent.",
  },
  {
    number: "4",
    title: "Vous validez le paiement d'un clic",
    text: "Dans votre tableau de bord : qui est à jour, qui est en attente, quels documents sont là. En un coup d'œil.",
  },
];

const included = [
  "Site vitrine du club — 4 pages",
  "Formulaire d'inscription en ligne",
  "Documents obligatoires au choix du club (certificat médical, autorisation parentale…)",
  "Signature électronique du règlement intérieur",
  "Tableau de bord des adhérents et de leurs dossiers",
  "Plusieurs accès configurables (président, secrétaire, trésorier…)",
  "Suivi des paiements validés par l'administrateur",
  "Gestion des événements et galerie photos",
  "Nom de domaine, hébergement et adresses mail du club",
];

export default function AssociationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ---------- HERO : la promesse, en une phrase ---------- */}
      <section className="bg-slate-50 border-b border-slate-100 px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8">
            Clubs et associations sportives
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            100 % des inscriptions que vous recevez sont des{" "}
            <span className="text-blue-600">dossiers complets</span>.
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Les documents que vous exigez sont bloquants : tant qu&apos;ils ne sont
            pas déposés, le formulaire ne part pas. Vous ne relancez plus
            personne.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Le site de votre club, avec les inscriptions en ligne dedans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=association"
              className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Parler de mon club
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

      {/* ---------- LA NICHE : les disciplines ou le certificat est obligatoire ---------- */}
      {/*
        TODO Nicolas : verifie la liste exacte des "disciplines a contraintes
        particulieres" (Code du sport) avant de mettre en ligne. Je reste
        volontairement general ici — ne transforme pas cette section en
        affirmation juridique sans l'avoir controlee.
      */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto p-10 rounded-2xl bg-blue-50 border-2 border-blue-100">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
            Pensé d&apos;abord pour les disciplines à risque
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Boxe, MMA, sports de combat, rugby, plongée. Là où le certificat
            médical est exigé et où un dossier incomplet engage la
            responsabilité du club, bloquer l&apos;inscription tant que le
            document manque n&apos;est pas un confort : c&apos;est une
            protection. Pour vous, et pour vos adhérents.
          </p>
          <p className="text-gray-600">
            Votre discipline n&apos;impose pas de certificat ? Vous choisissez
            librement les documents que vous demandez — ou aucun.
          </p>
        </div>
      </section>

      {/* ---------- LE PROBLÈME : dans les mots d'un président ---------- */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              La rentrée d&apos;un club, c&apos;est ça
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vous êtes bénévole. Vous avez signé pour faire vivre un club, pas
              pour courir après des papiers.
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

      {/* ---------- COMMENT ÇA MARCHE ---------- */}
      <section className="bg-slate-50 border-y border-slate-100 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Comment ça se passe, une fois en ligne
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quatre étapes. Les trois premières se font sans vous.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-6 p-8 rounded-2xl bg-white border border-slate-100"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-xl font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PREUVE : ABC Boxing, en production ---------- */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Déjà en service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Le club ABC Boxing La Rochelle a fait sa rentrée avec cette
              plateforme. Les inscriptions arrivent en ligne, complètes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/*
              Reproduction de l'interface avec des adherents fictifs.
              Ne jamais la remplacer par une capture contenant de vrais noms,
              de vraies photos ou de vrais statuts de paiement : passer par un
              club de demonstration si on veut une capture ecran.
            */}
            <DashboardPreview />

            <div className="space-y-6">
              {/* TODO Nicolas : remplacer par la vraie citation du président, avec son accord. */}
              <blockquote className="p-8 rounded-2xl bg-slate-50 border-l-4 border-blue-600">
                <p className="text-lg text-slate-800 italic leading-relaxed mb-4">
                  « Ça fonctionne très bien. Les gens s&apos;inscrivent
                  directement en ligne, même ceux qui voulaient du papier. »
                </p>
                <footer className="text-sm text-gray-500 font-medium">
                  Président de l&apos;ABC Boxing La Rochelle
                </footer>
              </blockquote>

              <a
                href="https://www.abcboxing.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-blue-600 hover:underline underline-offset-4"
              >
                Voir le site du club →
              </a>
            </div>
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
              Les tarifs, sans devis à rallonge
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vous savez ce que ça coûte avant même de me contacter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col p-8 rounded-2xl bg-white border-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Site vitrine du club
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                4 pages pour présenter le club, les disciplines, les horaires et
                les tarifs. Formulaire de contact.
              </p>
              <p className="text-3xl font-extrabold text-slate-900">890 €</p>
            </div>

            <div className="flex flex-col p-8 rounded-2xl bg-white border-2 border-blue-600 shadow-lg shadow-blue-500/10 relative">
              <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wide">
                Le plus demandé
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Site + inscriptions en ligne
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Tout le site vitrine, plus la plateforme complète : inscriptions,
                certificats médicaux, règlement signé, tableau de bord.
              </p>
              <p className="text-3xl font-extrabold text-slate-900">
                à partir de 1490 €
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
                Hébergement, sauvegardes et mises à jour
              </p>
              <p className="text-xl font-bold text-slate-900">
                39 €/mois
                <span className="block text-sm font-normal text-gray-500">
                  sur 10 mois — la saison sportive
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

      {/* ---------- SÉCURITÉ & DONNÉES ---------- */}
      {/*
        TODO Nicolas : ne publie cette section que lorsque c'est vrai côté infra
        (hébergement payant, sauvegardes réelles) et côté contrat
        (contrat de sous-traitance RGPD signé avec le club).
        Un certificat médical est une donnée de santé : promesse tenue ou rien.
      */}
      <section className="bg-slate-900 text-white px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-6">🔒</div>
          <h2 className="text-3xl font-extrabold mb-6">
            Les documents de vos adhérents sont des données sensibles
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Un certificat médical, ce n&apos;est pas un fichier comme un autre.
            Les documents sont stockés de façon sécurisée, accessibles uniquement
            aux responsables que vous désignez, et supprimés en fin de saison.
          </p>
          <p className="text-slate-400">
            Un contrat de sous-traitance est signé avec le club avant la première
            inscription.
          </p>
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Votre rentrée arrive vite
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Dites-moi combien vous avez d&apos;adhérents et comment vous gérez
            les inscriptions aujourd&apos;hui. Je vous dis en un appel ce que ça
            donnerait pour votre club.
          </p>
          <Link
            href="/contact?type=association"
            className="inline-block px-10 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
          >
            Parler de mon club
          </Link>
        </div>
      </section>

      <RelatedLinks currentPage="associations" />
    </div>
  );
}
