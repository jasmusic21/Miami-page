import { products } from '../data/products';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductListProps {
  onAddToCart: (product: Product) => void;
}

export function ProductList({ onAddToCart }: ProductListProps) {
  const cocteles = products.filter(p => p.category === 'cocteles');
  const vapers = products.filter(p => p.category === 'vapers');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const renderCategory = (title: string, items: Product[]) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-neutral-800 border-b-2 border-pink-500 inline-block pb-2">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((product) => (
          <div key={product.id} className="group bg-white rounded-2xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
              <img 
                src={product.image} 
                alt={product.name}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-black text-neutral-900 shadow-sm">
                {formatPrice(product.price)}
              </div>
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h4 className="text-lg font-bold text-neutral-900 mb-2 leading-tight">
                {product.name}
              </h4>
              <p className="text-neutral-500 text-sm mb-6 flex-grow">
                {product.description}
              </p>
              <button 
                onClick={() => onAddToCart(product)}
                className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white font-semibold py-3 px-4 rounded-xl hover:bg-pink-600 transition-colors active:scale-[0.98]"
              >
                <Plus className="w-5 h-5" />
                Agregar al pedido
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {renderCategory('🍹 Cócteles Granizados', cocteles)}
      {renderCategory('💨 Vapers Glucloud & Distriloko', vapers)}
    </div>
  );
}
