"use client"; // 👈 OBLIGATOIRE pour utiliser useState

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Projets", href: "/projects" },
  { name: "A propos", href: "/apropos"},
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group" 
          onClick={() => setIsOpen(false)} // Ferme le menu si on clique sur le logo
        >
          <Logo className="w-10 h-auto text-blue-900 transition-transform group-hover:scale-105" />
          <span className="text-xl font-bold tracking-tight text-blue-900">
            Masty Web Dev
          </span>
        </Link>

        {/* NAVIGATION BUREAU (Hidden sur mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-blue-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Me contacter
          </Link>
        </nav>

        {/* BOUTON HAMBURGER (Visible uniquement sur mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-blue-900 focus:outline-none"
          aria-label="Ouvrir le menu"
        >
          {isOpen ? (
            // Croix (Fermer)
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            // Barres (Ouvrir)
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* MENU MOBILE (S'affiche si isOpen est true) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)} // Ferme le menu après le clic
              className="block text-lg font-medium text-gray-700 hover:text-blue-600 py-2"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center rounded-lg bg-blue-900 px-5 py-3 text-white font-semibold hover:bg-blue-700"
          >
            Me contacter
          </Link>
        </div>
      )}
    </header>
  );
}