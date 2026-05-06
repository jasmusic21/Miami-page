export function Hero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1920&q=80"
          alt="Miami Cocktails Vibe"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <span className="inline-block py-1 px-3 rounded-full bg-pink-500/20 text-pink-300 backdrop-blur-sm border border-pink-500/30 text-xs font-bold tracking-wider uppercase mb-4">
          Magangué, Bolívar
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter" style={{ fontFamily: '"Impact", "Arial Black", sans-serif' }}>
          El Sabor de <span className="text-pink-500">Miami</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-xl mx-auto font-medium">
          Refrescantes cócteles granizados a $10.000, increíbles promos 2x25 y lo mejor en Vappers Glucloud del catálogo Distriloko.
        </p>
        <a 
          href="#catalogo"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-pink-600 border border-transparent rounded-full shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 hover:scale-105 active:scale-95"
        >
          Ver Productos
        </a>
      </div>
    </section>
  );
}
