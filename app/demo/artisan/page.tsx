import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Clock,
  Droplets,
  Hammer,
  Home,
  Image as ImageIcon,
  Leaf,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Sun,
  Wind,
} from "lucide-react";

/*
 * SITE DE DEMONSTRATION — entreprise fictive.
 *
 * Sert a montrer a un artisan a quoi ressemblerait son site. Aucune de ces
 * informations n'est reelle : ni l'entreprise, ni le telephone, ni les avis.
 * Le bandeau en haut de page le dit explicitement, il ne doit pas etre retire.
 *
 * A completer : les emplacements photo attendent de vraies images (libres de
 * droits) et les textes sont volontairement generiques.
 */

export const metadata: Metadata = {
  title: "Démonstration — site de couvreur",
  description:
    "Exemple de site vitrine réalisé pour un artisan couvreur : services, réalisations, zone d'intervention et demande de devis.",
  robots: { index: false, follow: false },
};

const services = [
  {
    Icon: Home,
    title: "Couverture neuve",
    text: "Tuile, ardoise ou zinc : pose complète sur construction neuve ou surélévation, dans les règles de l'art.",
  },
  {
    Icon: Hammer,
    title: "Rénovation de toiture",
    text: "Reprise partielle ou réfection totale, avec remplacement de la charpente et de l'isolation si nécessaire.",
  },
  {
    Icon: Droplets,
    title: "Recherche de fuite",
    text: "Diagnostic précis et réparation durable. On traite la cause, pas seulement la tache au plafond.",
  },
  {
    Icon: Wind,
    title: "Zinguerie",
    text: "Gouttières, chéneaux, noues et solins. L'eau part où elle doit partir, pas dans vos murs.",
  },
  {
    Icon: Leaf,
    title: "Démoussage & traitement",
    text: "Nettoyage, traitement hydrofuge et anti-mousse pour prolonger la vie de votre couverture.",
  },
  {
    Icon: Sun,
    title: "Fenêtres de toit",
    text: "Pose et remplacement de Velux, avec raccords étanches et finitions intérieures soignées.",
  },
];

const realisations = [
  {
    titre: "Réfection complète en tuile",
    lieu: "Surgères",
    src: "/demo/couvreur/chantier-1.jpg",
    alt: "Toiture en tuile canal refaite à neuf sur une maison en pierre, avec gouttière zinc",
  },
  {
    titre: "Toiture ardoise rénovée",
    lieu: "La Rochelle",
    src: "/demo/couvreur/chantier-2.jpg",
    alt: "Toitures en ardoise et lucarnes rénovées sur des maisons de bourg",
  },
  {
    titre: "Zinguerie et gouttières neuves",
    lieu: "Aytré",
    src: "/demo/couvreur/chantier-3.jpg",
    alt: "Couverture zinc à joint debout avec naissance de gouttière et descente neuves",
  },
  {
    titre: "Démoussage et hydrofuge",
    lieu: "Rochefort",
    src: "/demo/couvreur/chantier-4.jpg",
    alt: "Tuiles mécaniques propres et uniformes après démoussage et traitement hydrofuge",
  },
];

const garanties = [
  { Icon: ShieldCheck, titre: "Assurance décennale", texte: "Couverture complète sur dix ans, attestation fournie avec le devis." },
  { Icon: Clock, titre: "Intervention sous 24h", texte: "En cas de fuite ou de dégât de tempête, on passe sécuriser rapidement." },
  { Icon: Check, titre: "Devis gratuit", texte: "Déplacement, montée sur toit et chiffrage détaillé, sans engagement." },
  { Icon: MapPin, titre: "Artisan local", texte: "Basés près de chez vous, on connaît les toitures et le climat de la région." },
];

const communes = [
  "Surgères", "La Rochelle", "Rochefort", "Aytré", "Périgny",
  "Châtelaillon-Plage", "Marans", "Saint-Jean-d'Angély", "Aigrefeuille-d'Aunis", "Tonnay-Charente",
];

const avis = [
  { nom: "Sylvie R.", lieu: "Surgères", texte: "Devis clair, chantier tenu dans les délais et le terrain laissé propre. On a été prévenus à chaque étape." },
  { nom: "Damien L.", lieu: "Aytré", texte: "Fuite repérée un dimanche, ils sont passés bâcher le lundi matin. Réparation propre la semaine suivante." },
  { nom: "Christine et Marc P.", lieu: "Périgny", texte: "Toiture entièrement refaite. Le résultat est superbe et le prix annoncé a été respecté au centime." },
];

/** Emplacement photo : dimensionne et legende pour guider le remplacement. */
function PhotoSlot({
  legende,
  className = "",
}: {
  legende: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 bg-slate-100 p-6 text-center ${className}`}
    >
      <ImageIcon className="h-8 w-8 text-slate-400" strokeWidth={1.5} aria-hidden="true" />
      <p className="text-xs text-slate-500">{legende}</p>
    </div>
  );
}

export default function DemoCouvreurPage() {
  return (
    <div className="bg-white">
      {/* ---------- Bandeau de demonstration : ne pas retirer ---------- */}
      <div className="bg-slate-900 px-4 py-2 text-center text-xs text-slate-300">
        Site de démonstration — entreprise fictive.{" "}
        <Link href="/artisans" className="font-semibold text-white underline underline-offset-2">
          Voir mes offres pour les artisans
        </Link>
      </div>

      {/* ---------- En-tete du site du couvreur ---------- */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div className="leading-tight">
            <p className="text-lg font-extrabold tracking-tight text-slate-900">
              TOITURES DE L&apos;AUNIS
            </p>
            <p className="text-xs font-medium uppercase tracking-wider text-orange-600">
              Couvreur zingueur
            </p>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
            <a href="#services" className="hover:text-orange-600">Nos prestations</a>
            <a href="#realisations" className="hover:text-orange-600">Réalisations</a>
            <a href="#zone" className="hover:text-orange-600">Zone d&apos;intervention</a>
          </nav>
          <a
            href="#devis"
            className="flex flex-shrink-0 items-center gap-2 rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-700"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            <span className="hidden sm:inline">05 46 00 00 00</span>
            <span className="sm:hidden">Appeler</span>
          </a>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="bg-slate-900 px-4 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-orange-600/20 px-4 py-1.5 text-sm font-semibold text-orange-400">
              Couvreur zingueur en Charente-Maritime
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Une toiture saine,
              <br />
              <span className="text-orange-500">pour trente ans.</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-slate-300">
              Rénovation, couverture neuve, recherche de fuite et zinguerie.
              Artisan installé dans la région depuis plus de vingt ans, assuré
              décennale, devis gratuit sous 48 heures.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#devis"
                className="flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-7 py-4 font-bold text-white transition-colors hover:bg-orange-700"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
                Demander un devis gratuit
              </a>
              <a
                href="#realisations"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-slate-600 px-7 py-4 font-bold text-white transition-colors hover:border-orange-500 hover:text-orange-400"
              >
                Voir nos chantiers
                <ArrowRight className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
          </div>
          <Image
            src="/demo/couvreur/hero.jpg"
            alt="Toiture en tuile orange refaite à neuf sur une maison blanche, sous un ciel dégagé"
            width={1600}
            height={1200}
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* ---------- Bande urgence ---------- */}
      <section className="bg-orange-600 px-4 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            <Droplets className="hidden h-9 w-9 flex-shrink-0 text-white sm:block" strokeWidth={1.75} aria-hidden="true" />
            <div>
              <p className="text-lg font-extrabold text-white">
                Fuite, tuile envolée, dégât de tempête ?
              </p>
              <p className="text-orange-100">
                On passe sécuriser sous 24 heures, week-end compris.
              </p>
            </div>
          </div>
          <a
            href="tel:+33546000000"
            className="flex flex-shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-orange-700 transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
            05 46 00 00 00
          </a>
        </div>
      </section>

      {/* ---------- Prestations ---------- */}
      <section id="services" className="scroll-mt-20 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Nos prestations
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              De la réparation ponctuelle à la réfection complète, on intervient
              sur tous les types de couverture.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-slate-200 p-7 transition-all hover:border-orange-500 hover:shadow-lg"
              >
                <s.Icon className="mb-5 h-8 w-8 text-orange-600" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="mb-2 text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="leading-relaxed text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Realisations ---------- */}
      <section id="realisations" className="scroll-mt-20 bg-slate-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Nos derniers chantiers
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Chaque toiture est différente. Voici ce qu&apos;on a livré près de
              chez vous ces derniers mois.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {realisations.map((r) => (
              <div key={r.titre} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <Image
                  src={r.src}
                  alt={r.alt}
                  width={1200}
                  height={750}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="aspect-[16/10] w-full border-b border-slate-200 object-cover"
                />
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <h3 className="font-bold text-slate-900">{r.titre}</h3>
                    <p className="flex items-center gap-1.5 text-sm text-slate-500">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {r.lieu}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Garanties ---------- */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-slate-900 md:text-4xl">
            Pourquoi nous confier votre toit
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {garanties.map((g) => (
              <div key={g.titre} className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
                  <g.Icon className="h-7 w-7 text-orange-600" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{g.titre}</h3>
                <p className="leading-relaxed text-slate-600">{g.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Avis ---------- */}
      <section className="bg-slate-900 px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold md:text-4xl">
            Ce que disent nos clients
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {avis.map((a) => (
              <figure key={a.nom} className="rounded-xl bg-slate-800 p-7">
                <div className="mb-4 flex gap-1" aria-label="5 étoiles sur 5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mb-5 leading-relaxed text-slate-200">
                  « {a.texte} »
                </blockquote>
                <figcaption className="text-sm font-semibold text-slate-400">
                  {a.nom} — {a.lieu}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Zone d'intervention ---------- */}
      <section id="zone" className="scroll-mt-20 px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
              On intervient près de chez vous
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Basés à Surgères, nous couvrons tout le nord de la
              Charente-Maritime dans un rayon de 40 kilomètres.
            </p>
            <ul className="flex flex-wrap gap-2">
              {communes.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate-600">
              Votre commune n&apos;est pas dans la liste ?{" "}
              <a href="#devis" className="font-semibold text-orange-600 underline underline-offset-4">
                Appelez-nous
              </a>
              , on se déplace au-delà selon le chantier.
            </p>
          </div>
          <PhotoSlot
            legende="Carte de la zone d'intervention, ou photo d'un chantier reconnaissable localement"
            className="aspect-square rounded-2xl"
          />
        </div>
      </section>

      {/* ---------- Devis ---------- */}
      {/* Formulaire volontairement inerte : c'est une demonstration visuelle. */}
      <section id="devis" className="scroll-mt-20 bg-orange-600 px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-3xl font-extrabold text-white md:text-4xl">
              Votre devis, gratuit et sans engagement
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-orange-50">
              On se déplace, on monte sur le toit, on regarde vraiment. Vous
              recevez un chiffrage détaillé sous 48 heures — pas une fourchette
              donnée au téléphone.
            </p>
            <a
              href="tel:+33546000000"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-5 text-xl font-extrabold text-orange-700 transition-transform hover:scale-105"
            >
              <Phone className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
              05 46 00 00 00
            </a>
            <p className="mt-6 text-sm text-orange-100">
              Du lundi au samedi, 7h30 – 19h00
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-xl">
            <p className="mb-5 text-lg font-bold text-slate-900">
              Ou décrivez-nous votre chantier
            </p>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Votre nom"
                  disabled
                  className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400"
                />
                <input
                  type="tel"
                  placeholder="Votre téléphone"
                  disabled
                  className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400"
                />
              </div>
              <select
                disabled
                defaultValue=""
                className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-500"
              >
                <option value="">Nature des travaux</option>
              </select>
              <textarea
                rows={4}
                placeholder="Décrivez votre toiture et ce qui vous inquiète"
                disabled
                className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400"
              />
              <button
                type="button"
                disabled
                className="w-full cursor-not-allowed rounded-lg bg-slate-900 px-6 py-4 font-bold text-white"
              >
                Envoyer ma demande
              </button>
              <p className="text-center text-xs text-slate-400">
                Formulaire inactif — démonstration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Pied de page ---------- */}
      <footer className="bg-slate-950 px-4 py-12 text-slate-400">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-1 text-lg font-extrabold text-white">
                TOITURES DE L&apos;AUNIS
              </p>
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-orange-500">
                Couvreur zingueur
              </p>
              <p className="text-sm leading-relaxed">
                Zone artisanale, 17700 Surgères
                <br />
                SIRET 000 000 000 00000
              </p>
            </div>
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
                Prestations
              </p>
              <ul className="space-y-1.5 text-sm">
                {services.slice(0, 4).map((s) => (
                  <li key={s.title}>{s.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
                Contact
              </p>
              <p className="text-sm leading-relaxed">
                05 46 00 00 00
                <br />
                contact@exemple.fr
                <br />
                Lun – Sam, 7h30 – 19h00
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6 text-center text-xs">
            <p className="mb-2">
              Site de démonstration — entreprise, coordonnées et avis fictifs.
            </p>
            <p>
              Réalisé par{" "}
              <Link href="/" className="font-semibold text-white underline underline-offset-2">
                Masty Web Dev
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
