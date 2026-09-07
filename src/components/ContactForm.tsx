"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { sendContact } from "../../app/contact/actions";
import {
  ADHERENTS_OPTIONS,
  GESTION_OPTIONS,
  INITIAL_STATE,
  SEGMENTS,
  SEGMENT_LABELS,
  SITE_ACTUEL_OPTIONS,
  type Segment,
} from "@/lib/contactForm";

const inputClass =
  "w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none transition-colors";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-2 text-sm font-medium text-red-600">
      {message}
    </p>
  );
}

function Label({
  htmlFor,
  children,
  optional = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-semibold text-slate-900"
    >
      {children}
      {optional && (
        <span className="ml-1 font-normal text-slate-400">(facultatif)</span>
      )}
    </label>
  );
}

export default function ContactForm({
  defaultSegment = "autre",
}: {
  defaultSegment?: Segment;
}) {
  const [segment, setSegment] = useState<Segment>(defaultSegment);
  const [state, formAction, pending] = useActionState(
    sendContact,
    INITIAL_STATE,
  );
  const errorRef = useRef<HTMLDivElement>(null);
  const errors = state.fieldErrors ?? {};

  // On amene l'utilisateur sur le message plutot que de le laisser chercher.
  useEffect(() => {
    if (state.status === "error") {
      errorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [state]);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-10 text-center">
        <div className="mb-6 text-5xl">✅</div>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          C&apos;est envoyé, merci.
        </h2>
        <p className="text-lg text-gray-600">
          Je vous réponds sous 24h. Si c&apos;est urgent, appelez-moi
          directement au{" "}
          <a
            href="tel:+33603399001"
            className="font-semibold text-blue-600 hover:underline underline-offset-4"
          >
            06 03 39 90 01
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8 text-left" noValidate>
      {/* Piege a robots : invisible et hors du parcours clavier. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Ne remplissez pas ce champ</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* --- Qui vous etes : pilote les champs affiches ensuite --- */}
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-slate-900">
          Vous êtes
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {SEGMENTS.map((value) => (
            <label
              key={value}
              className={`cursor-pointer rounded-xl border-2 px-4 py-3 text-center text-sm font-semibold transition-colors ${
                segment === value
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              <input
                type="radio"
                name="segment"
                value={value}
                checked={segment === value}
                onChange={() => setSegment(value)}
                className="sr-only"
              />
              {SEGMENT_LABELS[value]}
            </label>
          ))}
        </div>
      </fieldset>

      {/* --- Champs propres aux associations --- */}
      {segment === "association" && (
        <div className="space-y-6 rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <div>
            <Label htmlFor="structure">Nom du club ou de l&apos;association</Label>
            <input
              id="structure"
              name="structure"
              type="text"
              className={inputClass}
              placeholder="ABC Boxing La Rochelle"
              aria-invalid={Boolean(errors.structure)}
            />
            <FieldError message={errors.structure} />
          </div>

          <div>
            <Label htmlFor="discipline" optional>
              Discipline
            </Label>
            <input
              id="discipline"
              name="discipline"
              type="text"
              className={inputClass}
              placeholder="Boxe, MMA, rugby, plongée…"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="adherents" optional>
                Nombre d&apos;adhérents
              </Label>
              <select id="adherents" name="adherents" className={inputClass} defaultValue="">
                <option value="">Je ne sais pas encore</option>
                {ADHERENTS_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="gestion" optional>
                Vos inscriptions aujourd&apos;hui
              </Label>
              <select id="gestion" name="gestion" className={inputClass} defaultValue="">
                <option value="">Je préfère en parler</option>
                {GESTION_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* --- Champs propres aux artisans et commercants --- */}
      {segment === "artisan" && (
        <div className="space-y-6 rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <div>
            <Label htmlFor="metier">Votre métier</Label>
            <input
              id="metier"
              name="metier"
              type="text"
              className={inputClass}
              placeholder="Menuisier, plombier, coiffeur…"
              aria-invalid={Boolean(errors.metier)}
            />
            <FieldError message={errors.metier} />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="zone" optional>
                Ville ou zone d&apos;intervention
              </Label>
              <input
                id="zone"
                name="zone"
                type="text"
                className={inputClass}
                placeholder="Surgères et 30 km autour"
              />
            </div>
            <div>
              <Label htmlFor="siteActuel" optional>
                Vous avez déjà un site ?
              </Label>
              <select id="siteActuel" name="siteActuel" className={inputClass} defaultValue="">
                <option value="">Je préfère en parler</option>
                {SITE_ACTUEL_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* --- Coordonnees --- */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="nom">Nom et prénom</Label>
          <input
            id="nom"
            name="nom"
            type="text"
            autoComplete="name"
            className={inputClass}
            aria-invalid={Boolean(errors.nom)}
          />
          <FieldError message={errors.nom} />
        </div>
        <div>
          <Label htmlFor="telephone" optional>
            Téléphone
          </Label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          aria-invalid={Boolean(errors.email)}
        />
        <FieldError message={errors.email} />
      </div>

      <div>
        <Label htmlFor="message">Votre projet en quelques mots</Label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className={inputClass}
          placeholder={
            segment === "association"
              ? "Où ça coince aujourd'hui, ce que vous aimeriez pouvoir faire, et pour quand."
              : "Ce que vous faites, ce que vous attendez du site, et pour quand."
          }
          aria-invalid={Boolean(errors.message)}
        />
        <FieldError message={errors.message} />
      </div>

      {/* --- Consentement : ce que je vends aux clubs, je me l'applique --- */}
      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-600">
          <input
            type="checkbox"
            name="consentement"
            className="mt-1 h-5 w-5 flex-shrink-0 accent-blue-600"
          />
          <span>
            J&apos;accepte que ces informations soient utilisées pour me
            recontacter au sujet de ma demande. Elles ne sont ni revendues ni
            transmises à un tiers, et sont supprimées si aucune suite
            n&apos;est donnée.
          </span>
        </label>
        <FieldError message={errors.consentement} />
      </div>

      {state.status === "error" && state.message && (
        <div
          ref={errorRef}
          role="alert"
          className="rounded-xl border-2 border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {state.message}
        </div>
      )}

      <div className="space-y-4">
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none"
        >
          {pending ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>
        <p className="text-center text-sm text-gray-500">
          Je réponds sous 24h. Sans engagement.
        </p>
      </div>
    </form>
  );
}
