import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "SafeTraffic Ledger",
  description: "Transparencia vial con Stacks/Web3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/feed" className="text-brand font-semibold">SafeTraffic Ledger</Link>
            <ul className="flex gap-5 text-sm text-gray-700">
              <li><Link href="/feed" className="hover:text-brand">Feed</Link></li>
              <li><Link href="/registrar" className="hover:text-brand">Registrar</Link></li>
              <li><Link href="/revelar" className="hover:text-brand">Revelar</Link></li>
              <li><Link href="/denuncias" className="hover:text-brand">Denuncias</Link></li>
              <li><Link href="/auditor" className="hover:text-brand">Auditor</Link></li>
              <li><Link href="/(auth)/login" className="hover:text-brand">Salir / Login</Link></li>
            </ul>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        <footer className="mt-12 border-t bg-white py-6 text-center text-xs text-gray-500">
          SafeTraffic Ledger – Stacks Hackathon 2025
        </footer>
      </body>
    </html>
  );
}
