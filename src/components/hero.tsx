export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center px-4 pt-20">
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
          Je transforme vos idées <br />
          <span className="text-blue-600">en code solide.</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Développeur Full Stack. Au-delà du code, 
          j'apporte une vision business à vos projets techniques.
          Refactoring, Features ou Création complète : on construit du durable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="/projects"
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
          >
            Voir mes réalisations
          </a>
          <a
            href="https://github.com/Masty1988" // Remplace par ton vrai GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition-all"
          >
            Mon GitHub
          </a>
        </div>
      </div>
    </section>
  );
}