// src/components/Header.tsx
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'; // Se tiver instalado react-icons

export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-md sticky top-0 z-40 border-b-4 border-yellow-500">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Pátio 381 */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-yellow-500 text-slate-900 font-black text-xl px-2 py-1 rounded skew-x-[-10deg]">
            381
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter text-white group-hover:text-yellow-400 transition">
              PÁTIO
            </span>
            <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase -mt-1">
              Caminhões & Carretas
            </span>
          </div>
        </Link>

        {/* Menu Desktop (Simplificado) */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-yellow-400 transition">Estoque</Link>
          <Link href="/financiamento" className="hover:text-yellow-400 transition">Financiar</Link>
          <Link href="/parceiros" className="hover:text-yellow-400 transition">Sou Vendedor</Link>
        </nav>

        {/* Botão CTA */}
        <a 
          href="https://wa.me/5531SEUNUMERO" 
          target="_blank"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-bold transition flex items-center gap-2"
        >
          <FaWhatsapp />
          <span>Falar com especialista</span>
        </a>
      </div>
    </header>
  );
}