"use client";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function RevelarPage() {
  return (
    <section className="max-w-lg">
      <h1 className="mb-4 text-xl font-semibold">Revelar incidente</h1>
      <div className="space-y-3">
        <div><label className="mb-1 block text-sm">ID de incidente</label><Input placeholder="Ej: 101" /></div>
        <div><label className="mb-1 block text-sm">CID/IPFS</label><Input placeholder="ipfs://..." /></div>
        <div><label className="mb-1 block text-sm">Salt</label><Input placeholder="hex de 32 bytes" /></div>
        <Button>Revelar evidencia</Button>
      </div>
    </section>
  );
}
