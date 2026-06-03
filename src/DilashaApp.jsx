import { useState } from 'react'
import './App.css'

export default function DilashaApp() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">
         Dilasha
        </h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
          <a href ="#about" className="hover:text-blue-600">
            About
          </a>
          <a href ="#services" className="hover:text-blue-600">
            Services
          </a>
          <a href="#Book" className="hover:text-blue-600">
            Book
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Profile
        </button>
      </nav>

      {/* Hero Section */}
<section className="bg-gray-100 py-24 px-8">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
    
    <div className="md:w-1/2">
      <h1 className="text-5xl font-bold mb-6">
        Shop Smart, Live Better
      </h1>

      <p className="text-gray-600 text-lg mb-8">
        Discover trendy products at affordable prices.
        Fast delivery and secure payments.
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Shop Now
      </button>
    </div>

    <div className="md:w-1/2 mt-10 md:mt-0">
      <img
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        alt="Product"
        className="rounded-xl shadow-lg"
      />
    </div>

  </div>
</section>

{/* Featured Products */}
<section className="py-20 px-8">
  <h2 className="text-4xl font-bold text-center mb-12">
    Featured Products
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    
    <div className="border rounded-xl p-4 shadow hover:shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        alt="Shoes"
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold">Running Shoes</h3>
      <p className="text-gray-600">$79.99</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>

    <div className="border rounded-xl p-4 shadow hover:shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
        alt="Camera"
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold">Digital Camera</h3>
      <p className="text-gray-600">$199.99</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>

    <div className="border rounded-xl p-4 shadow hover:shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        alt="Phone"
        className="rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold">Smart Phone</h3>
      <p className="text-gray-600">$499.99</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>

  </div>
</section>

{/* Why Choose Us */}
<section className="bg-gray-100 py-20 px-8">
  <h2 className="text-4xl font-bold text-center mb-12">
    Why Choose Us
  </h2>

  <div className="grid md:grid-cols-3 gap-8 text-center">
    <div>
      <h3 className="text-2xl font-semibold mb-2">
        🚚 Fast Delivery
      </h3>
      <p>Quick and reliable shipping.</p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-2">
        🔒 Secure Payment
      </h3>
      <p>Safe and encrypted transactions.</p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-2">
        ⭐ Quality Products
      </h3>
      <p>Carefully selected premium items.</p>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}