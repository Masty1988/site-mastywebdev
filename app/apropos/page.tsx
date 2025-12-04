import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Propos",
  description: "Découvrez qui je suis, mon parcours, mes ambitions pour vous.",
};


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        
        {/* En-tête de page */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            L'humain derrière le code
          </h1>
          <p className="text-xl text-gray-600">
            Commercial le jour, Développeur la nuit (et le week-end).
          </p>
        </div>

        {/* Section Histoire */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-slate-100 rounded-2xl h-64 md:h-96 w-full flex items-center justify-center text-4xl">
            👋
            {/* Emplacement pour ta photo plus tard */}
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <span className="font-bold text-slate-900">Salut, c'est Masty.</span>
            </p>
            <p>
              Mon parcours n'est pas linéaire, et c'est ma force. Issu du monde du commerce, 
              j'ai passé des années à écouter les besoins clients, à négocier et à trouver des solutions.
            </p>
            <p>
              Aujourd'hui, j'utilise cette expérience pour coder différemment. 
              Je ne cherche pas juste à écrire des lignes de code élégantes, je cherche à créer 
              des outils qui <span className="font-bold text-blue-600">rapportent de la valeur</span> à votre business.
            </p>
            <p>
              Papa de 3 enfants, je connais la valeur du temps. Quand je travaille sur un projet, 
              je vise l'efficacité et le pragmatisme. Pas de superflu, juste du solide.
            </p>
          </div>
        </div>

        {/* Section Valeurs / Soft Skills */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Pourquoi travailler avec moi ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">🗣️</div>
              <h3 className="font-bold text-xl mb-2">Je parle votre langue</h3>
              <p className="text-gray-600">Pas de jargon technique inutile. On parle objectifs, KPI et délais.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-bold text-xl mb-2">Réactivité</h3>
              <p className="text-gray-600">Habitué à la relation client, je ne vous laisse pas sans réponse pendant 3 jours.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-bold text-xl mb-2">Résultat</h3>
              <p className="text-gray-600">Un beau site c'est bien, un site qui convertit et qui dure, c'est mieux.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}