import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export default function CryptoChart({ height = 400, preview = false }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const coins = ['bitcoin', 'ethereum', 'solana']
      const results = await Promise.all(
        coins.map(async (coin) => {
          const res = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7`
          )
          const json = await res.json()
          return { name: coin, prices: json.prices.map(p => ({ time: p[0], value: p[1] })) }
        })
      )

      // merge time points
      const merged = results[0].prices.map((_, i) => ({
        time: new Date(results[0].prices[i].time).toLocaleDateString(),
        BTC: results[0].prices[i].value,
        ETH: results[1].prices[i]?.value,
        SOL: results[2].prices[i]?.value,
      }))
      setData(merged)
    }

    fetchData()
  }, [])

  return (
    <div className={`p-6 bg-gray-900 rounded-2xl shadow-xl ${preview ? '' : 'border border-gray-800'}`}>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#888" />
          <YAxis stroke="#888" domain={['auto', 'auto']} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1e293b', border: 'none', color: '#fff' }}
          />
          <Legend />
          <Line type="monotone" dataKey="BTC" stroke="#f7931a" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="ETH" stroke="#627eea" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="SOL" stroke="#14f195" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
