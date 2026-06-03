import React, { useState } from 'react';

const products = [
  { id: 1, name: "Classic Sneakers", price: 89, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop" },
  { id: 2, name: "Leather Backpack", price: 49, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop" },
  { id: 3, name: "Minimal Watch", price: 129, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" },
  { id: 4, name: "Wireless Headphones", price: 79, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans antialiased bg-white">
    
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-2xl font-semibold tracking-tight text-gray-900">
            Nisha<span className="text-rose-500">Acharya</span>
          </span>
          
          <div className="hidden md:flex gap-10">
            <a href="#home" className="text-gray-500 hover:text-gray-900 text-sm uppercase tracking-wide transition">Home</a>
            <a href="#products" className="text-gray-500 hover:text-gray-900 text-sm uppercase tracking-wide transition">Products</a>
            <a href="#contact" className="text-gray-500 hover:text-gray-900 text-sm uppercase tracking-wide transition">Contact</a>
          </div>

          <button 
            className="md:hidden text-sm uppercase tracking-wide text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-5 px-6 space-y-3">
            <a href="#home" className="block text-gray-600 hover:text-gray-900">Home</a>
            <a href="#products" className="block text-gray-600 hover:text-gray-900">Products</a>
            <a href="#contact" className="block text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero with background image */}
      <section id="home" className="relative h-[500px] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Simple<br />Timeless<span className="text-rose-300"> Good</span>
          </h1>
          <p className="text-white/90 text-lg mt-6 leading-relaxed">
            Everyday essentials made better. Free shipping on orders over $50
          </p>
          <div className="mt-10">
            <button className="bg-rose-500 text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-rose-600 transition shadow-md">
              Shop Collection
            </button>
          </div>
        </div>
      </section>

      {/* Featured products with images */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured</h2>
            <div className="w-12 h-0.5 bg-rose-300 mx-auto mt-3"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-500 mt-1">${product.price}</p>
                  <button className="mt-3 text-sm font-medium text-rose-500 border-b border-rose-200 pb-0.5 hover:border-rose-500 transition">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <div className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          <div>
            <p className="text-gray-800 font-medium">Free shipping</p>
            <p className="text-gray-400 text-xs mt-1">Orders over $50</p>
          </div>
          <div>
            <p className="text-gray-800 font-medium">Easy returns</p>
            <p className="text-gray-400 text-xs mt-1">30 days</p>
          </div>
          <div>
            <p className="text-gray-800 font-medium">Secure payment</p>
            <p className="text-gray-400 text-xs mt-1">100% protected</p>
          </div>
          <div>
            <p className="text-gray-800 font-medium">24/7 support</p>
            <p className="text-gray-400 text-xs mt-1">Real people</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-400 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm">© 2026 nishaacharya. All rights reserved.</p>
          <p className="text-sm mt-2">hello@nishaacharya.com  |  9761008641</p>
        </div>
      </footer>
    </div>
  );
}

export default App;