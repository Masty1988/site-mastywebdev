import ServicesContent from "@/src/components/serviceContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services de Création & Refonte Web", // Deviendra : "Services... | Masty Web Dev"
  description: "Création de sites vitrines, rénovation de sites existants et développement sur mesure. Des solutions claires pour les artisans et PME en Charente Maritime",
};

export default function ServicesPage(){
  return(
    <ServicesContent/>
  )
}