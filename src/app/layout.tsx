// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  // Lembre de colocar a URL da Vercel ou o domínio novo quando registrar
  metadataBase: new URL('https://patio381.com.br'), 
  
  title: {
    template: '%s | Pátio 381 Caminhões',
    default: 'Pátio 381 - O Maior Estoque de Pesados de Betim e Região',
  },
  description: 'Compra, venda e financiamento de caminhões na BR-381. Scania, Volvo, VW. Procedência verificada.',
  keywords: ['caminhões', 'betim', 'br381', 'scania', 'revenda', 'patio 381'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased text-slate-900 bg-slate-50">
        {children}
      </body>
    </html>
  );
}