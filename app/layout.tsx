import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import { Analytics } from "@vercel/analytics/next"
import ScrollToTop from '@/components/ScrollToTop';


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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics/>
        <Header/>
        {children}
        <Footer/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService", // Ou "LocalBusiness"
              "name": "Masty Web Dev",
              "image": "https://www.mastywebdev.fr/opengraph-image.png", // (Si tu en as une, sinon ton logo)
              "@id": "https://www.mastywebdev.fr",
              "url": "https://www.mastywebdev.fr",
              "telephone": "", // Ajoute ton tel pro si tu veux qu'il apparaisse (ex: "+33 6 ...")
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "", // Mets ta rue si tu veux (pas obligé si tu bosses de chez toi)
                "addressLocality": "Périgny",
                "postalCode": "17180",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 46.1600, // Latitude approx de Périgny (centre)
                "longitude": -1.0900
              },
              "areaServed": [
                "Périgny",
                "La Rochelle",
                "Aytré",
                "Charente-Maritime"
              ],
              "description": "Création de sites internet à Périgny et La Rochelle. Développeur Web Freelance pour artisans et PME en Charente-Maritime."
            })
          }}
        />
        <ScrollToTop />
      </body>
    </html>
  );
}
