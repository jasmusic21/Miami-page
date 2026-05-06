import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'c1',
    name: 'Cóctel Granizado Miami Clásico',
    description: 'Nuestro granizado estrella, refrescante con un toque tropical de frutos rojos y cítricos.',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    category: 'cocteles',
  },
  {
    id: 'c2',
    name: 'Cóctel Granizado Blue Ocean',
    description: 'Delicioso cóctel azul con notas de mora azul, coco y un toque refrescante de menta.',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    category: 'cocteles',
  },
  {
    id: 'c3',
    name: 'Promoción Especial 2x25',
    description: 'Lleva 2 de nuestros cócteles granizados premium o edición especial por un precio insuperable.',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    category: 'cocteles',
  },
  {
    id: 'v1',
    name: 'Glucloud Vapper - Watermelon Ice',
    description: 'Vapeador desechable Glucloud con sabor a sandía refrescante y mentol.',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1620836968037-ea7cb8eb0253?auto=format&fit=crop&w=800&q=80',
    category: 'vapers',
  },
  {
    id: 'v2',
    name: 'Glucloud Vapper - Mango Tango',
    description: 'Sabor intenso a mango tropical. Disfruta de la mejor calidad y nube de vapor.',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1620836856012-67cc01ec8f74?auto=format&fit=crop&w=800&q=80',
    category: 'vapers',
  },
  {
    id: 'v3',
    name: 'Distriloko Vapp Premium',
    description: 'La opción premium del catálogo Distriloko con batería de larga duración y sabor Blueberry.',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1582236592813-093a11884fe0?auto=format&fit=crop&w=800&q=80',
    category: 'vapers',
  }
];
