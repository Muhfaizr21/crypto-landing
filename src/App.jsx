import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [chartData, setChartData] = useState([]);

  const coins = [
    { id: "bitcoin", name: "Bitcoin", color: "#f7931a" },
    { id: "ethereum", name: "Ethereum", color: "#627eea" },
    { id: "binancecoin", name: "Binance", color: "#f0b90b" },
  ];

  useEffect(() => {
    if (activeSection === "features") {
      fetch(
        `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=7`
      )
        .then((res) => res.json())
        .then((data) => {
          const formatted = data.prices.map(([timestamp, price]) => ({
            date: new Date(timestamp).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
            price: Number(price.toFixed(2)),
          }));
          setChartData(formatted);
        });
    }
  }, [activeSection, selectedCoin]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-cyan-500/30 px-4 py-2 rounded-lg shadow-lg backdrop-blur-xl">
          <p className="text-cyan-400 font-semibold">{label}</p>
          <p className="text-white">${payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white font-inter">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800 bg-gray-950/70 backdrop-blur-lg sticky top-0 z-50">
        <h1 className="text-2xl font-extrabold">
          Crypto<span className="text-cyan-400">Flow</span>
        </h1>
        <ul className="flex space-x-8 text-gray-300">
          {["home", "features", "pricing", "contact"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer capitalize transition-all duration-300 ${
                activeSection === item
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  : "hover:text-cyan-400"
              }`}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* HOME */}
      {activeSection === "home" && (
        <section className="text-center px-6 pt-28 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.07)_0%,transparent_70%)] blur-3xl"></div>
          <h2 className="text-6xl font-extrabold leading-tight max-w-4xl mx-auto relative z-10">
            Empower Your <span className="text-cyan-400">Crypto Future</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Track real-time market trends and grow your digital assets with next-gen analytics.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold transition transform hover:scale-105 shadow-lg shadow-cyan-500/30">
              Launch App
            </button>
            <button className="border border-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-xl font-semibold transition transform hover:scale-105">
              Explore Features
            </button>
          </div>
        </section>
      )}

      {/* FEATURES */}
      {activeSection === "features" && (
        <section className="mt-20 px-10 text-center">
          <h2 className="text-3xl font-bold mb-10 text-cyan-400">
            Live Market Charts
          </h2>

          {/* Selector */}
          <div className="flex justify-center space-x-4 mb-8">
            {coins.map((coin) => (
              <button
                key={coin.id}
                onClick={() => setSelectedCoin(coin.id)}
                className={`px-5 py-2 rounded-xl font-semibold transition-all ${
                  selectedCoin === coin.id
                    ? "bg-cyan-500 text-white shadow-cyan-400/40 shadow-md"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              >
                {coin.name}
              </button>
            ))}
          </div>

          {/* Chart Container */}
          <div className="relative bg-gradient-to-b from-gray-900 to-gray-950 p-6 rounded-2xl border border-gray-800 shadow-2xl shadow-cyan-500/10 backdrop-blur-lg">
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={380}>
                <LineChart data={chartData}>
                  <defs>
                    <linearGradient id="lineColor" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor={
                          coins.find((c) => c.id === selectedCoin)?.color
                        }
                        stopOpacity={0.9}
                      />
                      <stop
                        offset="100%"
                        stopColor={
                          coins.find((c) => c.id === selectedCoin)?.color
                        }
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis dataKey="date" stroke="#888" />
                  <YAxis stroke="#888" domain={["auto", "auto"]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="url(#lineColor)"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{
                      r: 6,
                      stroke: "#fff",
                      strokeWidth: 2,
                      fill:
                        coins.find((c) => c.id === selectedCoin)?.color ||
                        "#00ffff",
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500">Fetching {selectedCoin} data...</p>
            )}
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Data powered by CoinGecko • Updated every minute
          </p>
        </section>
      )}

      {/* FOOTER */}
      <footer className="mt-32 py-10 text-center text-gray-500 border-t border-gray-800">
        © 2025 CryptoFlow. All rights reserved.
      </footer>
    </div>
  );
}
