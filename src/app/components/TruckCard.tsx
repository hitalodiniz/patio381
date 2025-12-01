// app/components/TruckCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Truck } from '@/lib/data'; // Importa a interface
import { formatarMoeda } from '@/lib/utils';

interface TruckCardProps {
  data: Truck;
}

export default function TruckCard({ data }: TruckCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
      {/* Imagem com Zoom Effect */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={data.mainImage}
          alt={data.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badge de Ano */}
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
          {data.year}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Marca e Modelo */}
        <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">
          {data.brand} • {data.traction}
        </div>
        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 truncate">
          {data.title}
        </h3>

        {/* Auditoria Rápida (Diferencial) */}
        <div className="bg-gray-50 p-2 rounded text-xs text-gray-600 mb-4 border-l-2 border-blue-500">
          <span className="font-semibold">Auditor:</span> {data.audit.notes}
        </div>

        {/* Footer do Card: Preço e Botão */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Valor à vista</span>
            <span className="text-xl font-bold text-green-700">
              {formatarMoeda(data.price)}
            </span>
          </div>
          <Link 
            href={`/caminhao/${data.slug}`}
            className="bg-slate-900 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}