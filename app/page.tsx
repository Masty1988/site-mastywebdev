import Projects from "@/src/components/projects";
import Header from "../src/components/header";
import Hero from "../src/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Projects/>
        {/* On ajoutera la section Services ici juste après manger */}
      </main>
    </div>
  );
}