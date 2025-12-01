// src/app/page.tsx (Trecho do Hero)
// ...
      <div className="bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
        {/* Fundo decorativo (opcional) */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500/10 skew-x-[-20deg] translate-x-20"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block bg-yellow-500 text-slate-900 font-bold px-3 py-1 rounded-full text-xs mb-4">
            📍 Localizado no Coração da Fernão Dias
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            PÁTIO <span className="text-yellow-500">381</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            A plataforma digital que conecta as melhores oportunidades de Betim a você. 
            Caminhões auditados, procedência garantida e financiamento rápido.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#estoque" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
              Ver Estoque
            </a>
            <a href="/parceiros" className="bg-transparent border border-gray-500 hover:border-white text-white font-bold py-3 px-8 rounded-lg transition">
              Quero Vender
            </a>
          </div>
        </div>
      </div>