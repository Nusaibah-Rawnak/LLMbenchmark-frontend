import { useState } from "react"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from "recharts"

type DataPoint = { model: string; nmae?: number; rate?: number; color: string }

const nmaeData: DataPoint[] = [
  { model: "ARIMA", nmae: 5.20, color: "#14b8a6" },
  { model: "ETS", nmae: 1.10, color: "#14b8a6" },
  { model: "Llama 3B", nmae: 26.65, color: "#f43f5e" },
  { model: "Mistral 8x7B", nmae: 0.846, color: "#f43f5e" },
  { model: "GPT-4o mini", nmae: 1.165, color: "#f43f5e" },
]

const winRateData: DataPoint[] = [
  { model: "ARIMA", rate: 31.7, color: "#14b8a6" },
  { model: "ETS", rate: 10.0, color: "#14b8a6" },
  { model: "Llama 3B", rate: 0.0, color: "#f43f5e" },
  { model: "Mistral 8x7B", rate: 25.0, color: "#f43f5e" },
  { model: "GPT-4o mini", rate: 19.2, color: "#f43f5e" },
]
const tooltipStyle = {
  contentStyle: { backgroundColor: "#1e293b", border: "none", borderRadius: "8px" },
  labelStyle: { color: "#e2e8f0" },
}

export default function ModelComparison() {
  const [view, setView] = useState<"nmae" | "winrate">("nmae")

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
        <p className="text-xs text-slate-500 font-mono leading-relaxed">
          <span className="text-slate-300">Key finding:</span> Mistral 8x7B achieves mean NMAE of 0.846 vs baseline 0.850 —
          a difference that is <span className="text-teal-400 font-semibold">not statistically significant (p = 0.957)</span>.
          Classical methods win more tasks outright.
        </p>
      </div>

      <div className="flex gap-2">
        {[
          { key: "nmae", label: "Mean NMAE" },
          { key: "winrate", label: "Win rate %" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setView(key as "nmae" | "winrate")}
            className={`px-4 py-2 rounded-xl text-sm font-medium font-mono transition-colors ${
              view === key
                ? "bg-teal-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex gap-4 mb-4">
          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span className="w-2.5 h-2.5 rounded-sm bg-teal-500 inline-block" />
            Classical baseline
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span className="w-2.5 h-2.5 rounded-sm bg-rose-500 inline-block" />
            LLM
          </span>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={view === "nmae" ? nmaeData : winRateData}
            margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="model" tick={{ fill: "#94a3b8", fontSize: 12 }} />
            <YAxis
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              unit={view === "winrate" ? "%" : ""}
              domain={view === "nmae" ? [0, 30] : [0, 40]}
            />
            <Tooltip
              {...tooltipStyle}
              formatter={(value) =>
                view === "nmae"
                  ? [`${Number(value).toFixed(3)}`, "Mean NMAE"]
                  : [`${Number(value).toFixed(1)}%`, "Win rate"]
              }
            />
            <Bar dataKey={view === "nmae" ? "nmae" : "rate"} radius={[4, 4, 0, 0]}>
              {(view === "nmae" ? nmaeData : winRateData).map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Best baseline NMAE", value: "0.850", sub: "ARIMA / ETS" },
          { label: "Best LLM NMAE", value: "0.846", sub: "Mistral 8x7B" },
          { label: "ARIMA win rate", value: "31.7%", sub: "Highest of all models" },
          { label: "Llama 3B win rate", value: "0%", sub: "Never beats baseline" },
        ].map(stat => (
          <div key={stat.label} className="bg-slate-800 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-teal-400 font-mono">{stat.value}</p>
            <p className="text-white text-sm font-medium mt-1">{stat.label}</p>
            <p className="text-slate-500 text-xs mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}