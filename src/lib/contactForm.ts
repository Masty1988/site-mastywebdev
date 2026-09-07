/**
 * Definition et validation du formulaire de contact.
 * Partage entre le composant client (affichage conditionnel) et la Server
 * Action (validation reelle, celle qui fait foi).
 */

export const SEGMENTS = ["artisan", "association", "autre"] as const;
export type Segment = (typeof SEGMENTS)[number];

export const SEGMENT_LABELS: Record<Segment, string> = {
  artisan: "Artisan ou commerçant",
  association: "Association ou club sportif",
  autre: "Autre activité",
};

export function isSegment(value: unknown): value is Segment {
  return SEGMENTS.includes(value as Segment);
}

export const ADHERENTS_OPTIONS = [
  "Moins de 50",
  "50 à 150",
  "150 à 300",
  "Plus de 300",
];

export const GESTION_OPTIONS = [
  "Sur papier",
  "Sur un tableur",
  "Sur une plateforme en ligne",
  "Autrement",
];

export const SITE_ACTUEL_OPTIONS = [
  "Je n'ai pas de site",
  "J'en ai un, mais il est à refaire",
  "J'en ai un et il me convient",
];

export type FieldErrors = Partial<Record<string, string>>;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: FieldErrors;
};

export const INITIAL_STATE: ContactState = { status: "idle" };

export type ContactPayload = {
  segment: Segment;
  nom: string;
  email: string;
  telephone: string;
  message: string;
  // Association
  structure: string;
  discipline: string;
  adherents: string;
  gestion: string;
  // Artisan
  metier: string;
  zone: string;
  siteActuel: string;
};

// Volontairement permissif : le but est d'attraper les fautes de frappe,
// pas de rejeter une adresse valide un peu exotique.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: FormDataEntryValue | null, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function validateContact(
  formData: FormData,
): { ok: true; data: ContactPayload } | { ok: false; fieldErrors: FieldErrors } {
  const fieldErrors: FieldErrors = {};

  const rawSegment = formData.get("segment");
  const segment: Segment = isSegment(rawSegment) ? rawSegment : "autre";

  const nom = clean(formData.get("nom"), 120);
  const email = clean(formData.get("email"), 200);
  const telephone = clean(formData.get("telephone"), 40);
  const message = clean(formData.get("message"), 4000);
  const structure = clean(formData.get("structure"), 160);
  const discipline = clean(formData.get("discipline"), 160);
  const adherents = clean(formData.get("adherents"), 40);
  const gestion = clean(formData.get("gestion"), 60);
  const metier = clean(formData.get("metier"), 160);
  const zone = clean(formData.get("zone"), 160);
  const siteActuel = clean(formData.get("siteActuel"), 80);

  if (nom.length < 2) fieldErrors.nom = "Indiquez votre nom.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Cette adresse email semble incomplète.";
  if (message.length < 10)
    fieldErrors.message = "Dites-m'en un peu plus, quelques mots suffisent.";
  if (segment === "association" && structure.length < 2)
    fieldErrors.structure = "Indiquez le nom de votre club ou association.";
  if (segment === "artisan" && metier.length < 2)
    fieldErrors.metier = "Indiquez votre métier.";
  if (formData.get("consentement") !== "on")
    fieldErrors.consentement =
      "J'ai besoin de votre accord pour vous recontacter.";

  if (Object.keys(fieldErrors).length > 0) return { ok: false, fieldErrors };

  return {
    ok: true,
    data: {
      segment,
      nom,
      email,
      telephone,
      message,
      structure,
      discipline,
      adherents,
      gestion,
      metier,
      zone,
      siteActuel,
    },
  };
}
