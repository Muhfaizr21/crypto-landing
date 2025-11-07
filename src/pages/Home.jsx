import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black flex flex-col items-center justify-center text-center px-6">

      {/* Background Glow Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.1),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,200,255,0.1),transparent_60%)]"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-400/20 rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Title */}
      <motion.h1
        className="relative text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
          CryptoFlow
        </span>
        <br />
        <span className="text-white text-3xl md:text-4xl font-light">
          Reimagining The Future of Digital Markets
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Dive into the heartbeat of global crypto markets.  
        Harness live analytics, adaptive intelligence, and sleek visualization — built for modern financial architects.
      </motion.p>

      {/* Explore Button */}
      <motion.a
        href="/features"
        className="relative group inline-block px-10 py-4 font-semibold rounded-2xl overflow-hidden transition-all"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse"></span>
        <span className="relative z-10 text-black group-hover:text-white transition duration-300">
          Explore Features →
        </span>
      </motion.a>

      {/* Floating Footer Quote */}
      <motion.div
        className="absolute bottom-8 text-gray-600 text-sm tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
      >
        “Crafted with precision — coded for the future.”
      </motion.div>
    </div>
  );
};

export default Home;
