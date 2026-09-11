import type { Metadata } from "next";
import Link from "next/link";
import { MessagesSquare, Target, Zap } from "lucide-react";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "A Propos",
  description: "Découvrez qui je suis, mon parcours, mes ambitions pour vous.",
};


export default function AboutPage() {
  return (
    <div className="min-h-svh bg-white pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        
        {/* En-tête de page */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            L&apos;humain derrière le code
          </h1>
          <p className="text-xl text-gray-600">
            Commercial le jour, Développeur la nuit (et le week-end).
          </p>
        </div>

        {/* Section Histoire */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-star mb-20">
          <div className="rounded-2xl h-64 md:h-96 w-full overflow-hidden">
            <img 
              src="/myface.jpg" 
              alt="Nicolas Lesieur, développeur web, chemise blanche, lac en fond et végétation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <span className="font-bold text-slate-900">Je suis Nicolas Lesieur, développeur de solutions digitales pour les professionnels.</span>
            </p>
            <p>
              Avant d&apos;écrire du code, j&apos;ai passé 13 ans dans le commerce B2B. À écouter des clients, comprendre leurs vrais besoins (pas ceux qu&apos;ils croient avoir), et livrer des solutions qui durent.
            </p>
            <p>
              Aujourd&apos;hui, je combine cette expérience commerciale avec mes compétences techniques. Résultat ? Un développeur qui comprend que votre site n&apos;est pas un projet technique, mais un <span className="font-bold text-blue-600">outil de croissance</span> pour votre business.
            </p>
            <p>
              Papa de 3 enfants, je connais la valeur du temps. Pas de superflu, juste du solide.
            </p>
            {/* /cv n'etait reliee depuis nulle part : une page indexable
                qu'aucun lien ne pointe reste un signal faible. */}
            <p>
              Envie du détail ?{" "}
              <Link
                href="/cv"
                className="font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-700"
              >
                Mon parcours complet est ici
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Section Valeurs / Soft Skills */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Pourquoi travailler avec moi ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MessagesSquare className="w-8 h-8 mb-4 text-blue-600" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="font-bold text-xl mb-2">Je parle votre langue</h3>
              <p className="text-gray-600">Pas de jargon technique inutile. On parle objectifs, KPI et délais.</p>
            </div>
            <div className="text-center">
              <Zap className="w-8 h-8 mb-4 text-blue-600" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="font-bold text-xl mb-2">Réactivité</h3>
              <p className="text-gray-600">Habitué à la relation client, je ne vous laisse pas sans réponse pendant 3 jours.</p>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 mb-4 text-blue-600" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="font-bold text-xl mb-2">Résultat</h3>
              <p className="text-gray-600">Un beau site c&apos;est bien, un site qui convertit et qui dure, c&apos;est mieux.</p>
            </div>
          </div>
        </div>

      </div>
      <RelatedLinks currentPage="apropos" />
    </div>
  );
}