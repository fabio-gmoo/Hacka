import StatusBadge from "@/components/ui/StatusBadge";

type Incident = {
  id: number;
  status: "pending"|"revealed"|"disputed"|"resolved"|"stale";
  date: string;
  area: string;
  cid?: string;
};

export default function IncidentCard({ incident }: { incident: Incident }) {
  return (
    <article className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">Incidente #{incident.id}</h3>
        <StatusBadge status={incident.status} />
      </div>
      <p className="mt-1 text-sm text-gray-600">Fecha: {incident.date}</p>
      <p className="text-sm text-gray-600">Zona: {incident.area}</p>
      {incident.cid && (
        <a className="mt-2 inline-block text-xs text-brand underline" href={incident.cid} target="_blank">
          Ver CID
        </a>
      )}
    </article>
  );
}
