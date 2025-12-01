// src/app/caminhao/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { trucks } from '@/lib/data';
import { formatarMoeda } from '@/lib/utils';


// Gera as rotas estáticas (Melhora SEO e Performance)
export async function generateStaticParams() {
  return trucks.map((truck) => ({
    slug: truck.slug,
  }));
}

// FUNÇÃO MÁGICA DE SEO PARA O WHATSAPP
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const truck = trucks.find((t) => t.slug === slug);

  if (!truck) {
    return { title: 'Caminhão não encontrado' };
  }

  // 1. DEFINE O DOMÍNIO FIXO (Troque pela sua URL atual da Vercel se não tiver domínio ainda)
  const baseUrl = 'https://patio381.vercel.app/'; 
  
  // 2. MONTA A URL COMPLETA DA IMAGEM
  // Se truck.mainImage for "/scania.jpg", vira "https://.../scania.jpg"
  const imageUrl = `${baseUrl}${truck.mainImage}`;

  return {
    title: `${truck.title} - ${truck.year}`,
    description: `À venda em ${truck.location}. ${truck.audit.notes}. Valor: R$ ${truck.price.toLocaleString('pt-BR')}`,
    openGraph: {
      title: `${truck.title} | Pátio 381`,
      description: `${truck.audit.engineState} • ${truck.audit.tireCondition}`,
      url: `${baseUrl}/caminhao/${slug}`,
      images: [
        {
          url: imageUrl, // <--- Agora é uma URL absoluta garantida
          width: 1200,
          height: 630,
          alt: truck.title,
        },
      ],
    },
  };
}

// ATENÇÃO: Em Next.js 15, params é uma Promise!
// Precisamos usar 'await params' ou tipar como Promise
export default async function TruckPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  
  // 1. Aguarda a resolução dos parâmetros (Regra nova do Next 15)
  const { slug } = await params;

  // 2. Busca o caminhão
  const truck = trucks.find((t) => t.slug === slug);

  if (!truck) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Botão Voltar */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link href="/" className="text-blue-600 hover:underline flex items-center gap-2">
          ← Voltar para o estoque
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Coluna Esquerda: Fotos e Auditoria */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Foto Principal */}
          <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg bg-white">
            <Image
              src={truck.mainImage}
              alt={truck.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* O DIFERENCIAL: Box do Auditor */}
          <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              📋 Auditoria Ello Diniz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-3 rounded">
                <span className="text-xs font-bold text-gray-500 uppercase">Motor</span>
                <p className="font-medium text-slate-800">{truck.audit.engineState}</p>
              </div>
              <div className="bg-slate-50 p-3 rounded">
                <span className="text-xs font-bold text-gray-500 uppercase">Pneus</span>
                <p className="font-medium text-slate-800">{truck.audit.tireCondition}</p>
              </div>
              <div className="bg-slate-50 p-3 rounded">
                <span className="text-xs font-bold text-gray-500 uppercase">Câmbio</span>
                <p className="font-medium text-slate-800">{truck.audit.transmission}</p>
              </div>
              <div className="bg-slate-50 p-3 rounded">
                <span className="text-xs font-bold text-gray-500 uppercase">Histórico</span>
                <p className="font-medium text-slate-800">
                  {truck.audit.maintenanceHistory ? '✅ Disponível' : '❌ Indisponível'}
                </p>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 text-sm text-blue-900">
              <strong>Parecer Técnico:</strong> {truck.audit.notes}
            </div>
          </div>

          {/* Descrição */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-lg mb-2">Sobre o Veículo</h3>
            <p className="text-gray-600 leading-relaxed">{truck.description}</p>
          </div>
        </div>

        {/* Coluna Direita: Preço e CTA (Sticky) */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 border border-gray-200">
            <h1 className="text-2xl font-bold text-slate-900 mb-1">{truck.title}</h1>
            <p className="text-gray-500 text-sm mb-6">{truck.year} • {truck.km.toLocaleString()} km</p>
            
            <div className="mb-6">
              <span className="block text-sm text-gray-400">Valor à vista</span>
              <span className="text-3xl font-bold text-green-700">
                {formatarMoeda(truck.price)}
              </span>
            </div>

            <a 
              href={`https://wa.me/5531999432988?text=Olá, tenho interesse no ${truck.title}`}
              target="_blank"
              className="w-full block text-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 mb-3"
            >
              Negociar no WhatsApp
            </a>
            
            <button className="w-full block text-center bg-white border-2 border-slate-200 text-slate-600 font-bold py-3 rounded-lg hover:bg-slate-50 transition-colors">
              Simular Financiamento
            </button>

            <p className="text-xs text-center text-gray-400 mt-4">
              Localização: {truck.location}
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}