"use client";
import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
      {/* Card */}
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-2xl font-semibold text-brand">Iniciar sesión</h1>
        <p className="mb-6 text-sm text-gray-600">
          Accede con tu carnet ciudadano o conecta tu wallet Stacks.
        </p>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm">Carnet de identidad</label>
            <Input placeholder="Número de documento" />
          </div>
          <div>
            <label className="mb-1 block text-sm">Contraseña</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <Button onClick={() => location.assign("/feed")}>Entrar</Button>
          <button className="text-sm text-brand underline mt-2">Conectar con wallet Stacks</button>

          <div className="mt-2 flex justify-between text-sm">
            <Link href="/(auth)/register" className="text-brand underline">Crear cuenta</Link>
            <a className="text-brand underline" href="#">¿Olvidaste tu contraseña?</a>
          </div>
        </div>
      </div>

      {/* Lado visual */}
      <div className="hidden md:block rounded-2xl border bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">Transparencia y trazabilidad</h2>
        <p className="text-sm text-gray-600">
          Registra incidentes con commit–reveal, evidencia en IPFS y gobernanza on-chain.
        </p>
        <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>Sellado inmutable</li>
          <li>Verificación pública</li>
          <li>Denuncias cifradas</li>
        </ul>
      </div>
    </div>
  );
}
