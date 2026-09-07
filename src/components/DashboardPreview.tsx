/**
 * Reproduction fidele du tableau de bord, avec des adherents fictifs.
 *
 * On ne publie pas de capture reelle : les lignes contiennent des noms, des
 * photos et des statuts de paiement de vraies personnes. Ici, tout est invente
 * et la mention "donnees fictives" est visible a l'ecran.
 */

type Row = {
  initials: string;
  name: string;
  category: string;
  documents: number;
  status: "attente" | "paye";
};

const rows: Row[] = [
  { initials: "CR", name: "Camille Renard", category: "LOISIR - BF", documents: 2, status: "attente" },
  { initials: "YP", name: "Yanis Perrot", category: "COMPETITION - BF_K1", documents: 2, status: "attente" },
  { initials: "LM", name: "Léa Marchand", category: "LOISIR - BF", documents: 2, status: "attente" },
  { initials: "TB", name: "Thomas Bidault", category: "COMPETITION - BF_K1", documents: 2, status: "paye" },
  { initials: "SN", name: "Sofia Nardi", category: "LOISIR - BF", documents: 2, status: "paye" },
];

const filters = ["Tous", "Payés", "En attente"];

function StatusBadge({ status }: { status: Row["status"] }) {
  if (status === "paye") {
    return (
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
        <span aria-hidden="true">✓</span> Payé
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
      <span aria-hidden="true">⏳</span> En attente
    </span>
  );
}

export default function DashboardPreview() {
  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
        {/* --- Barre superieure --- */}
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-lg text-white">
              🥊
            </div>
            <div>
              <p className="text-base font-bold leading-tight text-slate-900">
                Tableau de bord
              </p>
              <p className="text-sm leading-tight text-slate-500">
                Bienvenue, Président
              </p>
            </div>
          </div>
          <span aria-hidden="true" className="text-xl text-slate-400">
            ⏻
          </span>
        </div>

        {/* --- Filtres --- */}
        <div className="px-5 py-4">
          <p className="mb-4 text-lg font-bold text-slate-900">
            Gestion des licences
          </p>
          <div className="flex items-center gap-3">
            <div className="flex flex-1 gap-1 rounded-xl bg-slate-100 p-1">
              {filters.map((filter, index) => (
                <span
                  key={filter}
                  className={`flex-1 whitespace-nowrap rounded-lg px-2 py-1.5 text-center text-xs font-semibold ${
                    index === 0
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500"
                  }`}
                >
                  {filter}
                </span>
              ))}
            </div>
            <span
              aria-hidden="true"
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white"
            >
              +
            </span>
          </div>
        </div>

        {/* --- En-tetes --- */}
        <div className="flex items-center gap-3 border-y border-slate-100 bg-slate-50 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
          <span className="flex-1">Adhérent</span>
          <span className="w-32 text-center">Statut</span>
          <span className="hidden w-12 text-center sm:block">Actions</span>
        </div>

        {/* --- Lignes --- */}
        <ul className="divide-y divide-slate-100">
          {rows.map((row) => (
            <li key={row.name} className="flex items-center gap-3 px-5 py-4">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500">
                  {row.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {row.name}
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    {row.category}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    <span aria-hidden="true">📎</span> {row.documents} documents
                  </p>
                </div>
              </div>
              <div className="w-32 text-center">
                <StatusBadge status={row.status} />
              </div>
              <span
                aria-hidden="true"
                className="hidden h-8 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-500 text-sm text-white sm:flex"
              >
                💳
              </span>
            </li>
          ))}
        </ul>
      </div>

      <figcaption className="mt-3 text-center text-xs text-slate-400">
        Aperçu du tableau de bord — adhérents fictifs.
      </figcaption>
    </figure>
  );
}
