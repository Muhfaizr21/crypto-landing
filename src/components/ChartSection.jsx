import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ChartSection() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChart() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7"
        );
        const data = await res.json();
        const formatted = data.prices.map((p) => ({
          date: new Date(p[0]).toLocaleDateString("en-US", { weekday: "short" }),
          price: p[1],
        }));
        setChartData(formatted);
      } catch (err) {
        console.error("Error fetching chart:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchChart();
  }, []);

  return (
    <section id="features" className="mt-32 px-10 text-center">
      <h2 className="text-4xl font-bold mb-6">
        <span className="text-cyan-400">Live Crypto Chart</span>
      </h2>
      <p className="text-gray-400 mb-10">
        Track real-time Bitcoin price trends for the last 7 days.
      </p>

      {loading ? (
        <p className="text-gray-500">Loading chart...</p>
      ) : (
        <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 shadow-lg">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis dataKey="date" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  border: "1px solid #22d3ee",
                  color: "white",
                }}
              />
              <Line type="monotone" dataKey="price" stroke="#22d3ee" strokeWidth={2.5} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
}
