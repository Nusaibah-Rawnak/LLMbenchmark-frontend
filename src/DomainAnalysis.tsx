const domains = [
  { name: "CashDepletedInATM", baseline: 0.4228, mistral: 0.5959, selector: 0.4228, oracle: 0.4228, winRate: 0 },
  { name: "DecreaseInTraffic", baseline: 0.4801, mistral: 0.7047, selector: 0.4607, oracle: 0.4521, winRate: 30 },
  { name: "DirectNormalIrradiance", baseline: 1.2361, mistral: 0.7047, selector: 0.9642, oracle: 0.6837, winRate: 90 },
  { name: "ElectricityIncrease", baseline: 0.3112, mistral: 0.3747, selector: 0.3108, oracle: 0.3108, winRate: 20 },
  { name: "FullCausalContextBivar", baseline: 0.6615, mistral: 0.8095, selector: 0.6634, oracle: 0.6513, winRate: 40 },
  { name: "OraclePredUnivariate", baseline: 0.7646, mistral: 0.5929, selector: 0.2998, oracle: 0.2998, winRate: 30 },
  { name: "PredictableSpikes", baseline: 0.2803, mistral: 0.3828, selector: 0.2803, oracle: 0.2803, winRate: 0 },
  { name: "STLPredTrendMultiplier", baseline: 0.4035, mistral: 0.4777, selector: 0.4033, oracle: 0.4029, winRate: 20 },
  { name: "SensorMaintenance", baseline: 0.5651, mistral: 0.8137, selector: 0.5496, oracle: 0.5496, winRate: 20 },
  { name: "SolarPowerProduction", baseline: 3.7325, mistral: 3.3356, selector: 3.0054, oracle: 3.0054, winRate: 60 },
  { name: "SpeedFromLoad", baseline: 1.1652, mistral: 1.1748, selector: 1.1614, oracle: 1.1611, winRate: 80 },
  { name: "UnemploymentCounty", baseline: 0.1725, mistral: 0.1893, selector: 0.1637, oracle: 0.1637, winRate: 20 },
]

export default function DomainAnalysis() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
        <p className="text-xs text-slate-500 font-mono leading-relaxed">
          <span className="text-slate-300">Key finding:</span> Mistral helps in solar and irradiance domains (high win rates)
          but <span className="text-rose-400">hurts performance</span> in ATM, spike, and sensor domains.
          The selector identifies these patterns automatically.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="flex gap-4 px-4 py-2 border-b border-slate-800">
          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-sm bg-teal-500 inline-block" /> Mistral beats baseline
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-sm bg-rose-500 inline-block" /> Mistral worse
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800">
                {["Domain", "Baseline", "Mistral", "Selector", "Oracle", "Mistral win %"].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-mono text-slate-500 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {domains.map(d => {
                const mistralBetter = d.mistral < d.baseline
                const selectorBetter = d.selector < d.baseline
                return (
                  <tr key={d.name} className="border-b border-slate-800/50 hover:bg-slate-800/40 transition-colors">
                    <td className="px-4 py-3 text-xs text-slate-400 font-mono">{d.name}</td>
                    <td className="px-4 py-3 font-mono text-slate-300">{d.baseline.toFixed(3)}</td>
                    <td className={`px-4 py-3 font-mono font-semibold ${mistralBetter ? "text-teal-400" : "text-rose-400"}`}>
                      {d.mistral.toFixed(3)}
                    </td>
                    <td className={`px-4 py-3 font-mono ${selectorBetter ? "text-teal-400" : "text-slate-400"}`}>
                      {d.selector.toFixed(3)}
                    </td>
                    <td className="px-4 py-3 font-mono text-slate-500">{d.oracle.toFixed(3)}</td>
                    <td className="px-4 py-3">
                      {d.winRate === 0 ? (
                        <span className="text-slate-600 font-mono text-xs">—</span>
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-slate-800 rounded-full h-1.5">
                            <div
                              className="bg-teal-500 h-1.5 rounded-full"
                              style={{ width: `${d.winRate}%` }}
                            />
                          </div>
                          <span className="text-xs font-mono text-slate-400">{d.winRate}%</span>
                        </div>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}