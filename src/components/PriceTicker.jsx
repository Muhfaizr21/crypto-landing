import { useEffect, useState } from "react";

export default function PriceTicker() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false")
      .then((res) => res.json())
      .then((data) => setCoins(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="overflow-hidden bg-gray-900/70 border-t border-b border-gray-800 backdrop-blur-lg py-3 mt-20">
      <div className="animate-marquee whitespace-nowrap flex space-x-10 px-10">
        {coins.map((coin) => (
          <div key={coin.id} className="flex items-center space-x-3 min-w-[180px]">
            <img src={coin.image} alt={coin.name} className="w-6 h-6" />
            <span className="font-semibold text-white">{coin.symbol.toUpperCase()}</span>
            <span className="text-cyan-400">${coin.current_price.toLocaleString()}</span>
            <span
              className={`text-sm ${
                coin.price_change_percentage_24h >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
    