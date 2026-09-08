"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";
import ScrollToTop from "./ScrollToTop";

/**
 * Les pages de demonstration ont leur propre identite : un site de couvreur ne
 * peut pas porter l'en-tete et le pied de page de Masty Web Dev, sinon le
 * prospect voit une page de mon site au lieu du sien.
 *
 * Le jour ou une demo devient un vrai gabarit de production, elle sortira dans
 * son propre projet et ce garde-fou n'aura plus lieu d'etre.
 */
export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDemo = (usePathname() ?? "").startsWith("/demo");

  return (
    <>
      {!isDemo && <Header />}
      {children}
      {!isDemo && <Footer />}
      {!isDemo && <ScrollToTop />}
    </>
  );
}
