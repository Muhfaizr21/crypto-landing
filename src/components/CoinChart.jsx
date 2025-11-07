import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { motion } from "framer-motion";

const CoinChart = ({ title, data, color }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 text-center text-gray-500">
        Loading chart...
      </div>
    );
  }

  return (
    <motion.div
      className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm transition hover:border-cyan-400"
      whileHover={{ scale: 1.02 }}
    >
      <h2 className="text-xl font-semibold mb-4 text-cyan-400 tracking-wide">
        {title}
      </h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="date" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111",
                border: "1px solid rgba(0,255,255,0.3)",
                borderRadius: "10px",
              }}
              labelStyle={{ color: "#0ff" }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke={color}
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 6, fill: color }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CoinChart;
