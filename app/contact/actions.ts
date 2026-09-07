"use server";

import { Resend } from "resend";
import {
  validateContact,
  SEGMENT_LABELS,
  type ContactPayload,
  type ContactState,
} from "@/lib/contactForm";

const TO = process.env.CONTACT_TO_EMAIL ?? "contact@mastywebdev.fr";
const FROM =
  process.env.CONTACT_FROM_EMAIL ?? "Masty Web Dev <contact@mastywebdev.fr>";

function subject(data: ContactPayload): string {
  const who =
    data.segment === "association"
      ? data.structure
      : data.segment === "artisan"
        ? data.metier
        : data.nom;
  return `[${SEGMENT_LABELS[data.segment]}] ${who} — nouvelle demande`;
}

function body(data: ContactPayload): string {
  const lines: string[] = [
    `Profil : ${SEGMENT_LABELS[data.segment]}`,
    `Nom : ${data.nom}`,
    `Email : ${data.email}`,
  ];

  if (data.telephone) lines.push(`Téléphone : ${data.telephone}`);

  if (data.segment === "association") {
    lines.push(`Club / association : ${data.structure}`);
    if (data.discipline) lines.push(`Discipline : ${data.discipline}`);
    if (data.adherents) lines.push(`Adhérents : ${data.adherents}`);
    if (data.gestion) lines.push(`Inscriptions aujourd'hui : ${data.gestion}`);
  }

  if (data.segment === "artisan") {
    lines.push(`Métier : ${data.metier}`);
    if (data.zone) lines.push(`Zone : ${data.zone}`);
    if (data.siteActuel) lines.push(`Site actuel : ${data.siteActuel}`);
  }

  lines.push("", "Message :", data.message);
  return lines.join("\n");
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Piege a robots : un humain ne remplit jamais un champ qu'il ne voit pas.
  // On repond "envoye" pour ne pas renseigner le spammeur.
  if (typeof formData.get("website") === "string" && formData.get("website")) {
    return { status: "success" };
  }

  const result = validateContact(formData);
  if (!result.ok) {
    return {
      status: "error",
      message: "Quelques champs sont à compléter.",
      fieldErrors: result.fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY absente");
    return {
      status: "error",
      message:
        "L'envoi est momentanément indisponible. Écrivez-moi directement à contact@mastywebdev.fr.",
    };
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: FROM,
      to: TO,
      replyTo: result.data.email,
      subject: subject(result.data),
      text: body(result.data),
    });

    if (error) {
      console.error("[contact] Resend a refuse l'envoi", error);
      return {
        status: "error",
        message:
          "L'envoi a échoué. Écrivez-moi directement à contact@mastywebdev.fr.",
      };
    }
  } catch (err) {
    console.error("[contact] erreur inattendue", err);
    return {
      status: "error",
      message:
        "L'envoi a échoué. Écrivez-moi directement à contact@mastywebdev.fr.",
    };
  }

  return { status: "success" };
}
