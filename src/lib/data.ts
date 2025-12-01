// lib/data.ts

export interface Truck {
  id: string;
  slug: string;
  title: string;
  brand: 'Scania' | 'Volvo' | 'VW' | 'Mercedes' | 'Iveco' | 'DAF';
  model: string;
  year: number;
  price: number;
  km: number;
  traction: '4x2' | '6x2' | '6x4' | '8x2';
  location: string;
  mainImage: string;
  images: string[];
  description: string;
  // O diferencial "Ello Diniz": Auditoria Técnica
  audit: {
    engineState: 'Original' | 'Feito Completo' | 'Feito Parte de Cima' | 'Requer Atenção';
    tireCondition: string; // Ex: "Dianteiros 80%, Tração 40%"
    transmission: string; // Ex: "Automática Opticruise"
    maintenanceHistory: boolean; // Tem histórico?
    notes: string; // Sua opinião técnica sincera
  };
  featured: boolean; // Destaque na home?
}

export const trucks: Truck[] = [
  {
    id: '1',
    slug: 'scania-r440-highline-6x2-2018',
    title: 'Scania R440 Highline Streamline',
    brand: 'Scania',
    model: 'R440',
    year: 2018,
    price: 485000,
    km: 650000,
    traction: '6x2',
    location: 'Betim, MG (Jardim Piemonte)',
    mainImage: '/scania440.jpg', // Imagem placeholder de alta qualidade
    images: [],
    description: 'Caminhão de único dono, trabalhando na rota SP-MG. Nunca bateu. Cabine selada.',
    audit: {
      engineState: 'Original',
      tireCondition: 'Dianteiros novos (Michelin), Tração recapada (50%)',
      transmission: 'Opticruise',
      maintenanceHistory: true,
      notes: 'Motor sequinho, sem vazamento na turbina. Teste de bico feito recentemente. Pronto para trabalhar.'
    },
    featured: true,
  },
  {
    id: '2',
    slug: 'volvo-fh-540-globetrotter-6x4-2021',
    title: 'Volvo FH 540 Globetrotter',
    brand: 'Volvo',
    model: 'FH 540',
    year: 2021,
    price: 720000,
    km: 320000,
    traction: '6x4',
    location: 'Contagem, MG',
    mainImage: '/volvo.jpeg',
    images: [],
    description: 'A nave da Volvo. Buggy Leve. Suspensão a ar.',
    audit: {
      engineState: 'Original',
      tireCondition: 'Todos 70%',
      transmission: 'I-Shift',
      maintenanceHistory: true,
      notes: 'Estado de zero. Plano de manutenção Ouro da Volvo ativo.'
    },
    featured: true,
  }
];
