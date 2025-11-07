export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h2 className="text-6xl font-extrabold leading-tight mb-6">
          Empower Your <span className="text-cyan-400">Crypto Journey</span>
        </h2>
        <p className="text-gray-400 max-w-2xl">
          Track, analyze, and grow your crypto assets with powerful real-time insights.  
          The next generation of crypto intelligence, built for investors and innovators.
        </p>

        <div className="mt-10 flex space-x-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-cyan-500/20">
            Get Started
          </button>
          <button className="border border-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-xl font-semibold transition-all">
            Explore Features
          </button>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="grid md:grid-cols-3 gap-8 px-10 py-20">
        {[
          { title: "Real-Time Tracking", desc: "Monitor multiple cryptocurrencies with precision data." },
          { title: "AI Analytics", desc: "Predict trends using next-gen blockchain intelligence." },
          { title: "Secure & Transparent", desc: "Data integrity ensured by blockchain proofing." },
        ].map((item, i) => (
          <div key={i} className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </section>

      <footer className="py-10 text-center text-gray-500 border-t border-gray-800">
        © 2025 CryptoFlow. All rights reserved.
      </footer>
    </div>
  );
}
