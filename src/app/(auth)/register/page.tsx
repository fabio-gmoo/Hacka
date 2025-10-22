"use client";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
  return (
    <div className="mx-auto mt-16 max-w-xl rounded-2xl border bg-white p-8 shadow-sm">
      <h1 className="mb-2 text-2xl font-semibold text-brand">Crear cuenta</h1>
      <p className="mb-6 text-sm text-gray-600">Usaremos tu carnet para validar identidad.</p>

      <div className="space-y-4">
        <div><label className="mb-1 block text-sm">Nombre completo</label><Input /></div>
        <div><label className="mb-1 block text-sm">Correo electrónico</label><Input type="email" /></div>
        <div><label className="mb-1 block text-sm">Carnet de identidad</label><Input /></div>
        <div><label className="mb-1 block text-sm">Contraseña</label><Input type="password" /></div>
        <div><label className="mb-1 block text-sm">Confirmar contraseña</label><Input type="password" /></div>
        <div className="flex items-center gap-2 text-sm">
          <input id="terms" type="checkbox" className="size-4" />
          <label htmlFor="terms">Acepto términos y condiciones</label>
        </div>
        <Button onClick={() => location.assign("/(auth)/login")}>Crear cuenta</Button>
        <button className="text-sm text-brand underline mt-2">Registrarse con wallet Stacks</button>
      </div>
    </div>
  );
}
