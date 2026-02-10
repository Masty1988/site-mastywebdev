import Link from "next/link";
import Logo from "./logo";
import MwdParaphe from "./MwdParaphe";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          
          {/* --- Bloc GAUCHE : Identité + SEO Local --- */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="w-8 h-auto text-blue-500" />
              <span className="text-xl font-bold tracking-tight">Masty Web Dev</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Développeur Freelance Full Stack.
              Je transforme vos besoins business en solutions techniques performantes.
            </p>
            <p className="text-slate-500 text-xs border-l-2 border-slate-700 pl-3">
              Agence Web locale basée à <span className="text-slate-300 font-medium">Périgny (17180)</span>. 
              Intervention sur La Rochelle et en Charente-Maritime.
            </p>
          </div>

          {/* --- Bloc DROITE : Navigation + Réseaux --- */}
          <div className="flex flex-col md:items-end justify-between gap-8">
            
            {/* 1. Navigation */}
            {/* J'ai mis 'md:items-center' ici : Le titre se centre par rapport aux liens 👇 */}
            <div className="flex flex-col md:items-center">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-500 mb-4">
                Navigation
                </h3>
                <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-300">
                    <li><Link href="/" className="hover:text-white hover:underline decoration-blue-500 underline-offset-4 transition-all">Accueil</Link></li>
                    <li><Link href="/services" className="hover:text-white hover:underline decoration-blue-500 underline-offset-4 transition-all">Services</Link></li>
                    <li><Link href="/projects" className="hover:text-white hover:underline decoration-blue-500 underline-offset-4 transition-all">Projets</Link></li>
                    <li><Link href="/apropos" className="hover:text-white hover:underline decoration-blue-500 underline-offset-4 transition-all">A Propos</Link></li>
                    <li><Link href="/contact" className="hover:text-white hover:underline decoration-blue-500 underline-offset-4 transition-all">Contact</Link></li>
                </ul>
            </div>

            {/* 2. Réseaux Sociaux (5 icônes pour équilibrer les 5 liens) */}
            {/* 'md:justify-center' pour que les icônes soient aussi centrées sous le bloc nav */}
            <div className="flex gap-5 items-center justify-center w-full">
                
                {/* Email */}
                <a href="mailto:contact@mastywebdev.fr" className="text-slate-400 hover:text-white transition-colors p-1" aria-label="M'envoyer un email">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/nicolas-mastywebdev/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-1" aria-label="Profil LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>

                {/* Malt */}
                <a href="https://www.malt.fr/profile/nicolaslesieur1" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors group p-1" aria-label="Profil Malt">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" className="fill-current group-hover:text-[#FF3D4F] transition-colors"/>
                        <circle cx="12" cy="12" r="5" fill="currentColor" className="group-hover:fill-[#FF3D4F]"/>
                    </svg>
                </a>

                {/* GitHub */}
                <a href="https://github.com/Masty1988" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-1" aria-label="Profil GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.56 3.285-1.23 3.285-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/33603399001" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-1" aria-label="Me contacter sur WhatsApp">
                     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.61 14.9C16.36 14.78 15.14 14.18 14.91 14.1C14.69 14.02 14.53 13.98 14.36 14.23C14.2 14.48 13.72 15.04 13.57 15.21C13.42 15.38 13.27 15.4 13.02 15.28C12.77 15.15 11.97 14.89 11.03 14.05C10.29 13.39 9.79 12.58 9.54 12.15C9.29 11.72 9.52 11.49 9.64 11.37C9.75 11.26 9.89 11.08 10.01 10.94C10.13 10.8 10.17 10.7 10.25 10.54C10.33 10.38 10.29 10.24 10.23 10.11C10.17 9.99 9.7 8.82 9.5 8.35C9.31 7.9 9.11 7.96 8.96 7.96C8.81 7.96 8.64 7.96 8.47 7.96C8.3 7.96 8.03 8.02 7.8 8.27C7.57 8.52 6.93 9.12 6.93 10.35C6.93 11.58 7.82 12.77 7.95 12.94C8.08 13.11 9.73 15.66 12.25 16.75C12.85 17.01 13.32 17.16 13.69 17.28C14.27 17.47 14.8 17.45 15.22 17.39C15.69 17.32 16.66 16.8 16.86 16.23C17.06 15.66 17.06 15.18 17 15.08C16.94 14.98 16.78 14.94 16.61 14.9Z" />
                    </svg>
                </a>

            </div>

          </div>
        </div>

        {/* --- SÉPARATEUR & COPYRIGHT --- */}
        <div className="border-t border-slate-800 pt-8 flex flex-col items-center gap-3">
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Développé sous le soleil par{" "}
            <a
              href="https://mastywebdev.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <MwdParaphe size={30} />
            </a>{" "}
            <span className="font-medium text-slate-400">MastyWebDev</span>
          </p>
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Masty Web Dev. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
}