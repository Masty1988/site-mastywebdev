import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Colonne 1 : Marque */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Logo className="w-8 h-auto text-blue-400" />
            <span className="text-xl font-bold">Masty Web Dev</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Développeur Freelance Full Stack.
            Je transforme vos besoins business en solutions techniques performantes.
          </p>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-400">Navigation</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Projets</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/apropos" className="hover:text-white transition-colors">A Propos</Link></li>
          </ul>
        </div>

        {/* Colonne 3 : Réseaux */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-400">Réseaux</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <a href="https://www.malt.fr/profile/nicolaslesieur1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <span>🔴</span> Malt
              </a>
            </li>
            <li>
              <a href="https://github.com/Masty1988" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <span>💻</span> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nicolas-mastywebdev/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <span>👔</span> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Masty Web Dev. Tous droits réservés.</p>
      </div>
    </footer>
  );
}