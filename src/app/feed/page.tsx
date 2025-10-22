import IncidentCard from "@/components/incident/IncidentCard";

const demo = [
  { id: 101, status: "pending",  date: "2025-10-22", area: "Centro" },
  { id: 102, status: "revealed", date: "2025-10-22", area: "Norte", cid: "ipfs://bafy..." },
  { id: 103, status: "disputed", date: "2025-10-21", area: "Sur" },
] as const;

export default function FeedPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold">Feed público</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {demo.map((i) => <IncidentCard key={i.id} incident={i as any} />)}
      </div>
    </section>
  );
}
