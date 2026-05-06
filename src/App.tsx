import React, { useState } from 'react';
import { ShoppingCart, Menu, X, MessageCircle } from 'lucide-react';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { SupportChat } from './components/SupportChat';
import { CartItem, Product } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.product.id === productId 
        ? { ...item, quantity }
        : item
    ));
  };

  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-pink-300 selection:text-pink-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl pt-1">🌴</span>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              Miami Cocktails
            </h1>
          </div>
          <nav className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-neutral-600 hover:text-pink-500 transition-colors"
              aria-label="Cesta de compra"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center p-1 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-pink-500 rounded-full min-w-[20px]">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto pb-24">
        <Hero />
        
        <div className="px-4 py-12" id="catalogo">
          <h2 className="text-3xl font-extrabold mb-8 text-neutral-800 text-center uppercase tracking-wider">
            Nuestro Catálogo
          </h2>
          <ProductList onAddToCart={addToCart} />
        </div>
      </main>

      <footer className="bg-neutral-900 text-neutral-400 py-12 text-center">
        <p className="mb-2">📍 Magangué, Bolívar</p>
        <p className="text-sm">Envios a domicilio locales y en todo Magangué.</p>
        <p className="mt-8 text-xs opacity-50">&copy; {new Date().getFullYear()} Miami Cocktails Magangué. Todos los derechos reservados.</p>
      </footer>

      {/* Overlays */}
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
      
      <SupportChat 
        isOpen={isChatOpen} 
        onToggle={() => setIsChatOpen(!isChatOpen)} 
      />
    </div>
  );
}
