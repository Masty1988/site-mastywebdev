import ServicesContent from "@/components/serviceContent";
import type { Metadata } from "next";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Services de Création & Refonte Web", // Deviendra : "Services... | Masty Web Dev"
  description: "Création de sites vitrines, rénovation de sites existants et développement sur mesure. Des solutions claires pour les artisans et PME en Charente Maritime",
};

export default function ServicesPage(){
  return(
    <>
      <ServicesContent/>
      <RelatedLinks currentPage="services" />
    </>
  )
}