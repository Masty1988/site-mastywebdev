export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center px-4 pt-20">
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
          Votre site web n'est plus qu'à <br />
          <span className="text-blue-600">2 clics ! </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ensemble, construisons votre visibilité en ligne .Partagez votre savoir-faire.
          Vos futurs clients n'attendent que ça ! 
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="/projects"
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
          >
            Voir mes réalisations
          </a>
          <a
            href="/services"
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
          >
           Voir mes services
          </a>
        </div>
      </div>
    </section>
  );
}