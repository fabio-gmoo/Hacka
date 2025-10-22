"use client";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function RegistrarPage() {
  return (
    <section className="max-w-lg">
      <h1 className="mb-4 text-xl font-semibold">Registrar incidente (Commit)</h1>
      <div className="space-y-3">
        <div><label className="mb-1 block text-sm">Evidencia (foto/video)</label><Input type="file" /></div>
        <div><label className="mb-1 block text-sm">Ubicación (GPS)</label><Input placeholder="-17.392, -66.158" /></div>
        <div><label className="mb-1 block text-sm">Tipo</label><Input placeholder="accident | fine | incident" /></div>
        <div><label className="mb-1 block text-sm">Placa</label><Input placeholder="ABC-123" /></div>
        <div><label className="mb-1 block text-sm">Notas</label><Input placeholder="Descripción breve" /></div>
        <Button>Sellar evidencia en blockchain</Button>
      </div>
    </section>
  );
}
