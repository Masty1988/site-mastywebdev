import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteChrome from "../src/components/SiteChrome";
import { Analytics } from "@vercel/analytics/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // URL de base (indispensable pour les images sociales)
  metadataBase: new URL('https://www.mastywebdev.fr'),

  title: {
    default: "Masty Web Dev | Développeur Full Stack Freelance",
    template: "%s | Masty Web Dev", // %s sera remplacé par le titre de la page enfant
    
  },
  description: "Développeur Full Stack en Charente Maritime. Je transforme vos besoins business en sites web performants et durables.",
  alternates: {
    canonical: './', // Ça générera <link rel="canonical" href="https://www.mastywebdev.fr/..." />
  },
  
  
  // Pour les réseaux sociaux (LinkedIn, Twitter, WhatsApp)
  openGraph: {
    title: "Masty Web Dev | Développeur Full Stack",
    description: "Besoin d'un site performant ? Je crée des solutions sur mesure pour votre business.",
    url: 'https://www.mastywebdev.fr',
    siteName: 'Masty Web Dev',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
  card: 'summary_large_image',
  title: "Masty Web Dev | Développeur Full Stack",
  description: "Besoin d'un site performant ?",
},
  
  // Pour dire aux robots qu'ils ont le droit de scanner
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics/>
        <SiteChrome>{children}</SiteChrome>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService", // Ou "LocalBusiness"
              "name": "Masty Web Dev",
              "@id": "https://www.mastywebdev.fr",
              "url": "https://www.mastywebdev.fr",
              "telephone": "+33 6 03 39 90 01", // Ajoute ton tel pro si tu veux qu'il apparaisse (ex: "+33 6 ...")
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "", // Mets ta rue si tu veux (pas obligé si tu bosses de chez toi)
                "addressLocality": "Surgères",
                "postalCode": "17700",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 46.1078, // Latitude approx de Surgères (centre)
                "longitude": -0.7514
              },
              "areaServed": [
                "Surgères",
                "La Rochelle",
                "Périgny",
                "Aytré",
                "Charente-Maritime",
                "Chatellaillon",
                "Rochefort"
              ],
              "description": "Création de sites internet à Surgères et La Rochelle. Développeur Web Freelance pour artisans et PME en Charente-Maritime."
            })
          }}
        />
      </body>
    </html>
  );
}
