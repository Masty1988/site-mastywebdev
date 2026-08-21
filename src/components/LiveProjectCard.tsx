"use client";

import { useState } from "react";
import Image from "next/image";

interface LiveProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  tags: string[];
  images: string[];
}

export default function LiveProjectCard({
  title,
  subtitle,
  description,
  url,
  tags,
  images,
}: LiveProjectCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const displayUrl = url.replace(/^https?:\/\//, "");

  return (
    <div className="rounded-3xl bg-slate-900 p-8 md:p-12 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-center">
        {/* Mockup téléphone */}
        <div className="mx-auto md:mx-0">
          <div className="relative w-[220px] aspect-[9/19] rounded-[2rem] border-4 border-slate-700 bg-black overflow-hidden shadow-2xl">
            <Image
              src={images[activeIndex]}
              alt={`Capture d'écran ${title}`}
              fill
              className="object-contain"
            />
          </div>
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {images.map((img, index) => (
                <button
                  key={img}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Voir la capture ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? "bg-blue-500" : "bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            En ligne
          </span>
          <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white">{title}</h3>
          <p className="mt-1 text-blue-400 font-medium">{subtitle}</p>
          <p className="mt-4 text-slate-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            {description}
          </p>
          <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Voir le site &mdash; {displayUrl}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
