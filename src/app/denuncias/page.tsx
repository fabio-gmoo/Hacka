"use client";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function DenunciasPage() {
  return (
    <section className="max-w-lg">
      <h1 className="mb-4 text-xl font-semibold">Denunciar intento de coima</h1>
      <div className="space-y-3">
        <div><label className="mb-1 block text-sm">Descripción</label><Input placeholder="Cuenta lo sucedido" /></div>
        <div><label className="mb-1 block text-sm">Adjuntar evidencia (opcional)</label><Input type="file" /></div>
        <Button>Enviar denuncia cifrada</Button>
      </div>
    </section>
  );
}
