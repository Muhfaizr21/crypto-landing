import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
      >
        Invest in the Future of Digital Finance
      </motion.h1>
      <p className="text-gray-400 max-w-2xl mb-8">
        Track, trade, and grow your crypto assets in real time with <span className="text-cyan-400 font-semibold">Cryptex</span>.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full transition-all"
      >
        🚀 Start Investing Now
      </motion.button>
    </section>
  );
}
