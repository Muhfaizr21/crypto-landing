import { motion } from "framer-motion";
import CoinChart from "../components/CoinChart";
import { coins } from "../data/coins";

const generateData = () => {
  const days = Array.from({ length: 7 }, (_, i) => `Nov ${i + 1}`);
  return days.map((day) => ({
    date: day,
    price: (Math.random() * 10000 + 1000).toFixed(2),
  }));
};

const Features = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#050505] via-[#0a0a0f] to-[#050505] text-white px-8 py-16 overflow-hidden">
      {/* 🌀 Dynamic Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,200,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(120,0,255,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,255,255,0.05)_0%,rgba(255,0,255,0.05)_100%)] mix-blend-soft-light"></div>

      {/* 🌌 Header Section */}
      <motion.div
        className="text-center relative z-10 mb-20"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_25px_rgba(0,255,255,0.25)]"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          Multi-Coin Market Dashboard
        </motion.h1>
        <p className="text-gray-400 mt-4 text-lg tracking-wide">
          Advanced crypto visualization powered by <span className="text-cyan-400 font-semibold">CryptoFlow Engine</span>
        </p>
      </motion.div>

      {/* ⚡ Animated Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {coins.map((coin) => (
          <motion.div
            key={coin.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 40px rgba(0,255,255,0.15)",
            }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <CoinChart
              title={coin.name}
              data={generateData()}
              color={coin.color}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* 🧬 Futuristic Footer */}
      <motion.div
        className="mt-24 text-center text-gray-500 text-sm tracking-widest uppercase relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        ⚙️ Simulated Data Environment — <span className="text-cyan-400">CryptoFlow Quantum Studio</span>
      </motion.div>

      {/* ✨ Floating Gradient Rings */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl top-[-100px] left-[-200px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl bottom-[-150px] right-[-150px] animate-pulse"></div>
    </div>
  );
};

export default Features;
