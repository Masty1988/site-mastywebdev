"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Barre collante mobile : le prix et le contact restent sous les yeux une fois
 * le hero passe. Elle n'apparait pas avant, pour ne pas doubler le bouton
 * principal deja present dans le premier ecran.
 */
export default function StickyCta({
  price,
  label,
  href,
}: {
  price: string;
  label: string;
  href: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-4 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-4px_16px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
      <div className="leading-tight">
        <p className="text-xs text-slate-500">À partir de</p>
        <p className="text-xl font-extrabold text-slate-900">{price}</p>
      </div>
      <Link
        href={href}
        className="flex-shrink-0 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-blue-700"
      >
        {label}
      </Link>
    </div>
  );
}
