import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function Features() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const coins = ["bitcoin", "ethereum", "dogecoin"];
    Promise.all(
      coins.map(coin =>
        fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7`)
          .then(res => res.json())
          .then(data => ({
            coin,
            prices: data.prices.map(([time, price]) => ({
              date: new Date(time).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
              [coin]: price.toFixed(2),
            })),
          }))
      )
    ).then(results => {
      const merged = results[0].prices.map((item, idx) => ({
        date: item.date,
        bitcoin: results[0].prices[idx]?.bitcoin,
        ethereum: results[1].prices[idx]?.ethereum,
        dogecoin: results[2].prices[idx]?.dogecoin,
      }));
      setChartData(merged);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-10 py-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
        Multi-Coin Market Overview (7 Days)
      </h2>

      <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
              <XAxis dataKey="date" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333", color: "#fff" }}
              />
              <Legend />
              <Line type="monotone" dataKey="bitcoin" stroke="#f7931a" strokeWidth={2} />
              <Line type="monotone" dataKey="ethereum" stroke="#3c3cfc" strokeWidth={2} />
              <Line type="monotone" dataKey="dogecoin" stroke="#c2a633" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500 text-center">Loading market data...</p>
        )}
      </div>
    </div>
  );
}
