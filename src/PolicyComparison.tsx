import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts"

const data = [
  { policy: "Always-Baseline", nmae: 0.850, llmUsage: 0, oracleCaptured: 0 },
  { policy: "Always-LLM", nmae: 0.846, llmUsage: 100, oracleCaptured: 2.6 },
  { policy: "XGBoost Selector", nmae: 0.724, llmUsage: 31.7, oracleCaptured: 89.5 },
  { policy: "Oracle", nmae: 0.699, llmUsage: 34.2, oracleCaptured: 100 },
]

const tooltipStyle = {
  contentStyle: { backgroundColor: "#1e293b", border: "none", borderRadius: "8px" },
  labelStyle: { color: "#e2e8f0" },
}

export default function PolicyComparison() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
        <p className="text-xs text-slate-500 font-mono leading-relaxed">
          <span className="text-slate-300">Key finding:</span> The XGBoost selector captures{" "}
          <span className="text-violet-400 font-semibold">89.5% of oracle benefit</span> while
          invoking LLMs on only <span className="text-violet-400 font-semibold">31% of tasks</span> -
          near-oracle accuracy at a fraction of the cost.
        </p>
      </div>

      {/* NMAE bars */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <p className="text-xs text-slate-500 font-mono mb-4">Mean NMAE by policy — lower is better</p>
        <div className="flex flex-col gap-3">
          {data.map(d => {
            const isSelector = d.policy === "XGBoost Selector"
            const isOracle = d.policy === "Oracle"
            const pct = (d.nmae / 0.850) * 100
            return (
              <div key={d.policy} className="flex items-center gap-3">
                <span className={`text-xs font-mono w-36 shrink-0 ${isSelector ? "text-violet-400 font-semibold" : isOracle ? "text-slate-500" : "text-slate-400"}`}>
                  {d.policy}
                </span>
                <div className="flex-1 bg-slate-800 rounded-full h-5 overflow-hidden">
                  <div
                    className={`h-5 rounded-full flex items-center pl-2 transition-all duration-700 ${
                      isSelector ? "bg-violet-400" : isOracle ? "bg-slate-700" : "bg-slate-600"
                    }`}
                    style={{ width: `${pct}%` }}
                  >
                    <span className="text-xs font-mono text-white">{d.nmae.toFixed(3)}</span>
                  </div>
                </div>
                <span className={`text-xs font-mono w-16 text-right shrink-0 ${isSelector ? "text-violet-400" : "text-slate-500"}`}>
                  {d.llmUsage}% LLM
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Oracle captured chart */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <p className="text-xs text-slate-500 font-mono mb-4">Oracle benefit captured (%)</p>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="policy" tick={{ fill: "#94a3b8", fontSize: 11 }} />
            <YAxis domain={[0, 110]} tick={{ fill: "#94a3b8", fontSize: 12 }} unit="%" />
            <Tooltip
              {...tooltipStyle}
              formatter={(value) => [`${Number(value).toFixed(1)}%`, "Oracle captured"]}
            />
            <Legend wrapperStyle={{ color: "#94a3b8", fontSize: 12 }} />
            <Bar
              dataKey="oracleCaptured"
              name="Oracle captured (%)"
              radius={[4, 4, 0, 0]}
              fill="#8b5cf6"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { label: "Oracle captured", value: "89.5%", sub: "XGBoost selector" },
          { label: "LLM calls needed", value: "31%", sub: "vs 100% always-LLM" },
          { label: "Selector NMAE", value: "0.724", sub: "vs 0.699 oracle" },
        ].map(stat => (
          <div key={stat.label} className="bg-slate-800 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-violet-400 font-mono">{stat.value}</p>
            <p className="text-white text-sm font-medium mt-1">{stat.label}</p>
            <p className="text-slate-500 text-xs mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}