export default function DipishaApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5">
        <h1 className="text-3xl font-extrabold text-purple-700">
          Dipisha
        </h1>

        <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
          Join Now
        </button>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <span className="bg-purple-200 text-purple-700 px-4 py-2 rounded-full mb-6 text-sm font-medium">
          Welcome to My Website
        </span>

        <h1 className="text-6xl font-black text-gray-800 max-w-4xl">
          Creating Beautiful
          <span className="text-purple-600"> Digital Experiences</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl">
          A modern React and Tailwind CSS landing page designed with
          creativity, elegance, and responsiveness.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:scale-105 transition">
            Explore
          </button>

          <button className="bg-white px-8 py-3 rounded-xl shadow hover:bg-gray-100 transition">
            Contact Me
          </button>
        </div>
      </section>

      {/* Cards */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-24">

        <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold mb-3">
            Fast Performance
          </h3>
          <p className="text-gray-600">
            Optimized React applications with smooth user experience.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-bold mb-3">
            Creative Design
          </h3>
          <p className="text-gray-600">
            Modern and attractive interfaces built with Tailwind CSS, React.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-bold mb-3">
            Responsive Layout
          </h3>
          <p className="text-gray-600">
            Perfectly adapts to desktop, tablet, and mobile devices.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 border-t">
        © 2026 Dipisha. All Rights Reserved.
      </footer>

    </div>
  );
}