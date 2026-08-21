"use client";

import { useState } from "react";

interface ExperienceCardProps {
  period: string;
  title: string;
  org: string;
  items: string[];
}

export default function ExperienceCard({ period, title, org, items }: ExperienceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsFlipped((v) => !v)}
      aria-pressed={isFlipped}
      aria-label={`${title} chez ${org}, ${period}. Cliquer pour ${isFlipped ? "revenir" : "voir les missions"}.`}
      className="group [perspective:1200px] h-64 w-full text-left cursor-pointer"
    >
      <div
        className={`relative h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Face avant */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl border border-gray-200 bg-slate-50 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
          <div>
            <p className="text-sm font-semibold text-blue-600">{period}</p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">{org}</h3>
            <p className="mt-1 text-sm text-gray-600">{title}</p>
          </div>
          {items.length > 0 && (
            <span className="text-xs font-medium text-blue-600 flex items-center gap-1">
              Voir les missions
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          )}
        </div>

        {/* Face arrière */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl border border-blue-100 bg-slate-900 p-6 flex flex-col overflow-y-auto">
          <p className="text-xs font-semibold text-blue-400 mb-1">{org} — {period}</p>
          {items.length > 0 ? (
            <ul className="space-y-1.5 text-sm text-slate-200 list-disc list-inside">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-300">{title}</p>
          )}
        </div>
      </div>
    </button>
  );
}
