import type { Metadata } from "next";
import RelatedLinks from "@/components/RelatedLinks";
import ContactForm from "@/components/ContactForm";
import { isSegment, type Segment } from "@/lib/contactForm";

export const metadata: Metadata = {
  title: "Page de contact",
  description:
    "Demande de devis pour un site vitrine d'artisan ou une plateforme d'inscription de club sportif. Réponse sous 24h.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  // Le parcours d'origine pre-remplit le formulaire : un president de club
  // arrive avec sa case deja cochee.
  const { type } = await searchParams;
  const defaultSegment: Segment = isSegment(type) ? type : "autre";

  return (
    <>
      <div className="min-h-screen bg-slate-50 px-4 pt-32 pb-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl text-blue-600">
              📬
            </div>
            <h1 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
              Parlons de votre projet
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              Quelques questions pour comprendre votre situation, et je vous
              rappelle avec une réponse claire : ce que ça donnerait, combien ça
              coûte, et en combien de temps c&apos;est en ligne.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl md:p-10">
            <ContactForm defaultSegment={defaultSegment} />
          </div>

          {/* --- Pour ceux qui preferent decrocher leur telephone --- */}
          <div className="mt-12 rounded-2xl border border-gray-100 bg-white p-8">
            <h2 className="mb-6 text-center text-lg font-bold text-slate-900">
              Vous préférez un contact direct ?
            </h2>
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row">
              <a
                href="tel:+33603399001"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition-all hover:border-blue-600 hover:text-blue-700"
              >
                <span>📞</span> 06 03 39 90 01
              </a>
              <a
                href="mailto:contact@mastywebdev.fr"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition-all hover:border-blue-600 hover:text-blue-700"
              >
                <span>✉️</span> Par email
              </a>
              <a
                href="https://www.malt.fr/profile/nicolaslesieur1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition-all hover:border-red-400 hover:text-red-500"
              >
                <span>🔴</span> Profil Malt
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-gray-100 pt-6 text-sm text-gray-500 md:grid-cols-2">
              <div>
                <span className="block font-semibold text-slate-900">
                  Délai de réponse
                </span>
                Sous 24h, du lundi au samedi
              </div>
              <div>
                <span className="block font-semibold text-slate-900">
                  Localisation
                </span>
                Surgères (17700) — La Rochelle et Charente-Maritime
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedLinks currentPage="contact" />
    </>
  );
}
