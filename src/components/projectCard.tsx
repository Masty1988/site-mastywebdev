// src/components/projectCard.tsx
"use client"; // 👈 OBLIGATOIRE : On a besoin d'interactivité

import { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  repoLink: string;
  images: string[]; // On récupère le tableau d'images
}

export default function ProjectCard({ title, description, tags, repoLink, images }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour ouvrir la modale sans déclencher le clic du lien "Voir code"
  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
    // On bloque le scroll de la page derrière
    document.body.style.overflow = "hidden";
  };

  const closeModal = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* --- LA CARTE --- */}
      <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
        
        {/* Zone Image de la carte (On affiche la 1ère image par défaut) */}
        <div 
          className="h-48 w-full bg-gray-100 relative cursor-pointer overflow-hidden"
          onClick={() => openModal(0)}
        >
           {images && images.length > 0 ? (
             <Image 
               src={images[0]} 
               alt={title} 
               fill 
               className="object-cover transition-transform duration-500 group-hover:scale-105"
             />
           ) : (
             <div className="flex items-center justify-center h-full text-4xl">📸</div>
           )}
           
           {/* Petit badge pour dire qu'il y a plusieurs photos */}
           {images && images.length > 1 && (
             <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
               +{images.length - 1} photos
             </span>
           )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {tag}
              </span>
            ))}
          </div>
           {repoLink && (
          <div className="mt-auto w-full px-6 py-4 border-t border-gray-100 flex justify-center">
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors group/link"
              onClick={(e) => e.stopPropagation()} 
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.56 3.285-1.23 3.285-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Voir le code technique
            </a>
          </div>
        )}
        </div>

      </div>

      {/* --- LA MODALE (En dehors de la div de la carte visuellement grâce à fixed) --- */}
      {isOpen && (
        <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeModal} // Ferme si on clique sur le fond noir
        >
          {/* Bouton Fermer */}
          <button 
            onClick={closeModal}
            className="absolute top-5 right-5 text-white p-2 hover:bg-white/20 rounded-full transition-colors z-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Plein écran */}
          <div 
            className="relative w-full max-w-5xl h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur l'image
          >
            <Image 
              src={images[currentImageIndex]} 
              alt={`Vue projet ${title}`} 
              fill 
              className="object-contain" // Important pour ne pas rogner l'image
            />
          </div>

          {/* Navigation (seulement s'il y a plusieurs images) */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 text-white p-3 hover:bg-white/20 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 text-white p-3 hover:bg-white/20 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}