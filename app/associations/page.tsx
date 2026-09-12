import Link from "next/link";
import type { Metadata } from "next";
import RelatedLinks from "@/components/RelatedLinks";
import DashboardPreview from "@/components/DashboardPreview";
import StickyCta from "@/components/StickyCta";
import {
  Banknote,
  Check,
  ClipboardList,
  DoorOpen,
  PenLine,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Site & inscriptions en ligne pour clubs sportifs",
  description:
    "Site et inscriptions en ligne pour clubs de boxe, MMA, rugby ou plongée : certificat médical bloquant, règlement accepté et horodaté, suivi des adhérents. Dès 890 €.",
};

const pains = [
  {
    Icon: ClipboardList,
    title: "Les inscriptions arrivent en vrac",
    text: "Des feuilles remplies à la main, des photos de documents par SMS, des dossiers déposés au bord du tatami. À la rentrée, tout arrive en même temps.",
  },
  {
    Icon: DoorOpen,
    title: "On vous coupe en plein cours",
    text: "Les parents passent au gymnase pendant l'entraînement pour poser leurs questions. Le coach s'arrête, le groupe attend, et vous répétez pour la dixième fois les horaires, les tarifs et les documents à fournir.",
  },
  {
    Icon: Stethoscope,
    title: "Un dossier incomplet, c'est votre responsabilité",
    text: "Dans les disciplines à risque, le certificat médical n'est pas une formalité administrative. Vous relancez au téléphone, vous notez sur un coin de cahier, et vous laissez quand même le gamin monter sur le ring en croisant les doigts.",
  },
  {
    Icon: PenLine,
    title: "Le règlement intérieur, personne ne le signe",
    text: "Vous l'imprimez, vous le distribuez, il revient une fois sur trois. En cas de problème, vous n'avez rien à montrer.",
  },
  {
    Icon: Banknote,
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
    title: "Il accepte le règlement intérieur",
    text: "Il le lit à l'écran et l'accepte explicitement. La date, l'heure et l'adresse IP de cette acceptation sont enregistrées et archivées dans sa fiche d'inscription. Vous avez une trace, datée, pour chaque adhérent.",
  },
  {
    number: "4",
    title: "Vous validez le paiement d'un clic",
    text: "Dans votre tableau de bord : qui est à jour, qui est en attente, quels documents sont là. En un coup d'œil.",
  },
];

const vitrineFeatures = [
  "4 pages : club, disciplines, horaires, tarifs",
  "Formulaire de contact",
  "Nom de domaine, hébergement et adresses mail du club",
];

const plateformeFeatures = [
  "Formulaire d'inscription en ligne",
  "Documents obligatoires au choix du club",
  "Acceptation du règlement intérieur horodatée et tracée (date, heure, adresse IP)",
  "Tableau de bord des adhérents et de leurs dossiers",
  "Plusieurs accès (président, secrétaire, trésorier…)",
  "Suivi des paiements validés par l'administrateur",
  "Gestion des événements et galerie photos",
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 mb-8">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
          <Check
            className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600"
            strokeWidth={2.5}
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function AssociationsPage() {
  return (
    <div className="min-h-svh bg-white pb-24 md:pb-0">
      {/* ---------- HERO : la promesse, en une phrase ---------- */}
      <section className="bg-slate-50 border-b border-slate-100 px-6 pt-28 pb-14 md:pt-32 md:pb-20">
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
        Liste verifiee sur Legifrance (article D231-1-5 du code du sport, version
        en vigueur au 12/09/2026). Deux points a ne pas perdre en reecrivant :
        - le rugby n'y figure PAS ; son obligation vient du reglement de la FFR ;
        - le 2° (mise hors combat autorisee) ne vise que la COMPETITION, donc un
          licencie loisir majeur n'est pas couvert par cet article.
        D'ou la formulation ci-dessous, qui cite les deux sources d'obligation
        au lieu d'en affirmer une seule.
      */}
      <section className="px-6 py-10 md:py-16">
        <div className="max-w-4xl mx-auto p-10 rounded-2xl bg-blue-50 border-2 border-blue-100">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
            Pensé d&apos;abord pour les disciplines à risque
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Boxe, MMA, sports de combat, rugby, plongée. Là où un certificat
            médical est exigé — par le code du sport pour la compétition, par
            votre fédération pour le reste — et où un dossier incomplet engage
            la responsabilité du club, bloquer l&apos;inscription tant que le
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
      <section className="px-6 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              La rentrée d&apos;un club, c&apos;est ça
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vous êtes bénévole. Vous avez signé pour faire vivre un club, pas
              pour courir après des papiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pains.map((pain, index) => (
              <div
                key={pain.title}
                className={`flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 ${
                  index === pains.length - 1 && pains.length % 2 === 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <pain.Icon
                  className="h-6 w-6 flex-shrink-0 text-blue-600"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{pain.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pain.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- COMMENT ÇA MARCHE ---------- */}
      <section className="bg-slate-50 border-y border-slate-100 px-6 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Comment ça se passe, une fois en ligne
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quatre étapes. Les trois premières se font sans vous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
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
      <section className="px-6 py-12 md:py-20">
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

            {/*
              Uniquement des faits verifiables : pas de citation tant que le
              president n'a pas fourni la sienne et donne son accord.
            */}
            <div className="p-8 rounded-2xl bg-slate-50 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                ABC Boxing La Rochelle
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Boxe française et kickboxing. Site vitrine, inscriptions en
                ligne, certificats médicaux et suivi des licences. En service
                pour la saison.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Inscriptions ouvertes en ligne",
                  "Dossiers reçus complets",
                  "Règlement intérieur accepté, horodaté et tracé",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <Check
                      className="h-4 w-4 flex-shrink-0 text-blue-600"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

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

      {/* ---------- TARIFS ---------- */}
      <section id="tarifs" className="px-6 py-12 md:py-20 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Les tarifs, sans devis à rallonge
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vous savez ce que ça coûte avant même de me contacter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col p-8 rounded-2xl bg-white border-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Site vitrine du club
              </h3>
              <p className="text-3xl font-extrabold text-slate-900 mb-6">890 €</p>
              <FeatureList items={vitrineFeatures} />
            </div>

            <div className="flex flex-col p-8 rounded-2xl bg-white border-2 border-blue-600 shadow-lg shadow-blue-500/10 relative">
              <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wide">
                Le plus demandé
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Site + inscriptions en ligne
              </h3>
              <p className="text-3xl font-extrabold text-slate-900 mb-2">
                à partir de 1490 €
              </p>
              <p className="text-sm font-semibold text-blue-700 mb-4">
                Tout le site vitrine, plus :
              </p>
              <FeatureList items={plateformeFeatures} />
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
                390 € la saison
                <span className="block text-sm font-normal text-gray-500">
                  soit 39 €/mois — réglé en une fois, première année incluse
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

          <p className="mt-10 text-center text-gray-600">
            Pas d&apos;abonnement mensuel à surveiller : une facture par saison,
            votée avec votre budget. Une fois réglée, vous n&apos;y pensez plus.
          </p>
        </div>
      </section>

      {/* ---------- SÉCURITÉ & DONNÉES ---------- */}
      {/*
        TODO Nicolas : ne publie cette section que lorsque c'est vrai côté infra
        (hébergement payant, sauvegardes réelles) et côté contrat
        (contrat de sous-traitance RGPD signé avec le club).
        Un certificat médical est une donnée de santé : promesse tenue ou rien.
      */}
      <section className="bg-slate-900 text-white px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck
            className="mx-auto mb-6 h-12 w-12 text-blue-400"
            strokeWidth={1.5}
            aria-hidden="true"
          />
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
      <section className="px-6 py-12 md:py-20">
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

      <StickyCta
        price="1 490 €"
        label="Parler de mon club"
        href="/contact?type=association"
      />
    </div>
  );
}
