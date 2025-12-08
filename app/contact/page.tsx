import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page de contact",
  description: "Demande de devis, prise de rendez vous téléphonique, contacts"
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 pt-20">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-3xl mb-8">
          📬
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Démarrons un projet ensemble
        </h1>
        
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Vous voulez gagner du temps, capter de nouveaux clients ou simplifier votre gestion ? 
          Parlons de votre projet.
          </p>
          <p className="text-lg font-semibold text-slate-900 mb-10">
            Je réponds sous 24h.
          </p>
        

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:contact@mastywebdev.fr" 
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
          >
            <span>✉️</span> Me contacter par email
          </a>
          
          <a
            href="https://www.malt.fr/profile/nicolaslesieur1" // Remplace par ton lien Malt
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 border-2 border-slate-200 font-bold rounded-xl hover:border-red-400 hover:text-red-500 transition-all flex items-center justify-center gap-2"
          >
            <span>🔴</span> Profil Malt
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
          <div>
            <span className="block font-semibold text-slate-900">Disponibilité</span>
            Part-time / Missions ponctuelles
          </div>
          <div>
            <span className="block font-semibold text-slate-900">Localisation</span>
            France (Full Remote)
          </div>
        </div>
      </div>
    </div>
  );
}