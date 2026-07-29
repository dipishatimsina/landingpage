import React, { useState } from 'react';

const products = [
  { id: 1, name: "Classic Sneakers", price: 89, originalPrice: 120, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop", rating: 4.8, reviews: 342, badge: "Sale" },
  { id: 2, name: "Leather Backpack", price: 49, originalPrice: null, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", rating: 4.5, reviews: 128, badge: "New" },
  { id: 3, name: "Minimal Watch", price: 129, originalPrice: 159, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", rating: 4.9, reviews: 567, badge: "Sale" },
  { id: 4, name: "Wireless Headphones", price: 79, originalPrice: null, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", rating: 4.6, reviews: 215, badge: null },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => setCartCount(prev => prev + 1);

  // Helper to render star rating
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const stars = [];
    for (let i = 0; i < full; i++) stars.push('★');
    if (half) stars.push('★');
    while (stars.length < 5) stars.push('☆');
    return stars.join('');
  };

  return (
    <div className="font-sans antialiased bg-gray-50 text-gray-800">

      {/* ===== NAVBAR ===== */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            Nisha<span className="text-rose-500">Acharya</span>
          </span>

          <div className="hidden md:flex items-center gap-10">
            <a href="#home" className="text-gray-500 hover:text-gray-900 text-sm uppercase tracking-wide transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-400 after:transition-all hover:after:w-full">Home</a>
            <a href="#products" className="text-gray-500 hover:text-gray-900 text-sm uppercase tracking-wide transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-400 after:transition-all hover:after:w-full">Products</a>
            <a href="#contact" className="text-gray-500 hover:text-gray-900 text-sm uppercase tracking-wide transition relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-400 after:transition-all hover:after:w-full">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            {/* Cart icon with count */}
            <button className="relative hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-gray-700 hover:text-rose-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              className="md:hidden text-sm uppercase tracking-wide text-gray-600 hover:text-gray-900"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 py-5 px-6 space-y-3 animate-fadeIn">
            <a href="#home" className="block text-gray-600 hover:text-rose-500 transition">Home</a>
            <a href="#products" className="block text-gray-600 hover:text-rose-500 transition">Products</a>
            <a href="#contact" className="block text-gray-600 hover:text-rose-500 transition">Contact</a>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section id="home" className="relative h-[500px] flex items-center justify-center text-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-white">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium tracking-wider uppercase mb-4">New Collection</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Simple<br />Timeless<span className="text-rose-300"> Good</span>
          </h1>
          <p className="text-white/90 text-lg mt-6 leading-relaxed font-light">
            Everyday essentials made better. Free shipping on orders over $50
          </p>
          <div className="mt-10">
            <button className="bg-rose-500 text-white px-10 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-500/30 hover:-translate-y-0.5 active:scale-95">
              Shop Collection →
            </button>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-rose-300 to-rose-500 mx-auto mt-3 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" />
                  {product.badge && (
                    <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full shadow-sm ${product.badge === 'Sale' ? 'bg-rose-500 text-white' : 'bg-amber-400 text-gray-900'}`}>
                      {product.badge}
                    </span>
                  )}
                  <button className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-rose-50 hover:text-rose-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-gray-800 text-lg">{product.name}</h3>
                  <div className="flex justify-center items-center gap-1 mt-1 text-amber-400 text-sm">
                    <span>{renderStars(product.rating)}</span>
                    <span className="text-gray-400 text-xs ml-1">({product.reviews})</span>
                  </div>
                  <div className="mt-2">
                    {product.originalPrice ? (
                      <div className="flex justify-center items-center gap-2">
                        <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
                        <span className="text-rose-500 font-bold text-lg">${product.price}</span>
                      </div>
                    ) : (
                      <span className="text-gray-800 font-bold text-lg">${product.price}</span>
                    )}
                  </div>
                  <button 
                    onClick={addToCart}
                    className="mt-4 w-full bg-gray-100 text-gray-800 py-2.5 rounded-full text-sm font-medium hover:bg-rose-500 hover:text-white transition-all hover:shadow-md"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <div className="bg-white py-10 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          <div className="group hover:-translate-y-1 transition">
            <div className="flex justify-center mb-2 text-rose-500 group-hover:scale-110 transition">🚚</div>
            <p className="text-gray-800 font-medium">Free shipping</p>
            <p className="text-gray-400 text-xs mt-1">Orders over $50</p>
          </div>
          <div className="group hover:-translate-y-1 transition">
            <div className="flex justify-center mb-2 text-rose-500 group-hover:scale-110 transition">🔄</div>
            <p className="text-gray-800 font-medium">Easy returns</p>
            <p className="text-gray-400 text-xs mt-1">30 days</p>
          </div>
          <div className="group hover:-translate-y-1 transition">
            <div className="flex justify-center mb-2 text-rose-500 group-hover:scale-110 transition">🔒</div>
            <p className="text-gray-800 font-medium">Secure payment</p>
            <p className="text-gray-400 text-xs mt-1">100% protected</p>
          </div>
          <div className="group hover:-translate-y-1 transition">
            <div className="flex justify-center mb-2 text-rose-500 group-hover:scale-110 transition">💬</div>
            <p className="text-gray-800 font-medium">24/7 support</p>
            <p className="text-gray-400 text-xs mt-1">Real people</p>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer id="contact" className="bg-gray-900 text-gray-400 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-rose-400 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
            <a href="#" className="hover:text-rose-400 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="#" className="hover:text-rose-400 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            <a href="#" className="hover:text-rose-400 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          </div>
          <p className="text-sm">© 2026 nishaacharya. All rights reserved.</p>
          <p className="text-sm mt-2">hello@nishaacharya.com  |  9761008641</p>
        </div>
      </footer>

      {/* Add a tiny animation keyframe */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;