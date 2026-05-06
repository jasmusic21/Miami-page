import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    // Build WhatsApp message
    let message = `Hola Miami Cocktails! 🍹 Quiero hacer un pedido.\n\n`;
    message += `*Cliente:* ${name}\n`;
    message += `*Dirección:* ${address}, Magangué\n`;
    message += `*Teléfono:* ${phone}\n\n`;
    message += `*Mi Pedido:*\n`;
    
    items.forEach(item => {
      message += `${item.quantity}x ${item.product.name} - ${formatPrice(item.product.price * item.quantity)}\n`;
    });
    
    message += `\n*Total:* ${formatPrice(total)}\n\n`;
    message += `¡Gracias!`;

    // Encode and redirect
    const url = `https://wa.me/573000000000?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity" 
        onClick={onClose}
      />
      
      <div className="fixed inset-y-0 right-0 w-full md:w-full max-w-md bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-4 border-b border-neutral-100">
          <h2 className="text-xl font-bold text-neutral-800 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-pink-500" />
            Tu Pedido
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-neutral-400 space-y-4">
              <ShoppingBag className="w-16 h-16 opacity-20" />
              <p>Tu cesta está vacía</p>
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-pink-50 text-pink-600 rounded-full font-medium"
              >
                Ver catálogo
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.product.id} className="flex gap-4 p-3 bg-neutral-50 rounded-xl">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 flex flex-col">
                      <h4 className="font-semibold text-neutral-800 leading-tight mb-1">
                        {item.product.name}
                      </h4>
                      <p className="text-pink-600 font-bold text-sm mb-2">
                        {formatPrice(item.product.price)}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3 bg-white border border-neutral-200 rounded-lg px-2 py-1">
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="text-neutral-400 hover:text-neutral-600"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="text-neutral-400 hover:text-neutral-600"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.product.id)}
                          className="text-neutral-400 hover:text-red-500 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-200 pt-4 space-y-2">
                <div className="flex justify-between text-neutral-500">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-neutral-500">
                  <span>Envío (Magangué)</span>
                  <span>A calcular</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-neutral-900 pt-2 border-t border-neutral-200">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <form onSubmit={handleCheckout} className="space-y-4 pt-4">
                <h3 className="font-bold text-neutral-800">Datos de Envío</h3>
                <input 
                  type="text" 
                  required
                  placeholder="Tu Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white transition-colors"
                />
                <input 
                  type="text" 
                  required
                  placeholder="Dirección / Barrio en Magangué"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white transition-colors"
                />
                <input 
                  type="tel" 
                  required
                  placeholder="Teléfono móvil"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white transition-colors"
                />
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-pink-600 text-white font-bold rounded-xl shadow-lg shadow-pink-500/30 hover:bg-pink-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  Confirmar Pedido por WhatsApp
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
