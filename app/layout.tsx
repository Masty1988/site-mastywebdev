import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
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
      </body>
    </html>
  );
}
