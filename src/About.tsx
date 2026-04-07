export default function About() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-4 text-sm text-slate-400 leading-relaxed">
        <p>
          This project investigates whether context-aware forecasting benefits demonstrated
          with massive 405B parameter models transfer to smaller, deployment-feasible models
          (3B–56B parameters), using the{" "}
          <span className="text-slate-200">Context-is-Key benchmark</span> across 120 tasks
          and 12 domains.
        </p>
        <p>
          The core finding contradicts published assumptions: context provides{" "}
          <span className="text-rose-400 font-semibold">negligible benefit at practical scales</span>.
          Classical methods (ARIMA, ETS) win more tasks than any LLM, and scaling from
          3B to 56B parameters yields no statistically significant improvement (p = 0.204).
        </p>
        <p>
          To salvage LLM value, we trained an{" "}
          <span className="text-teal-400 font-semibold">XGBoost selector</span> that routes
          tasks to Mistral only when context is likely to help — capturing 89.5% of oracle
          benefit while invoking LLMs on just 31% of tasks.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center text-xs text-slate-500 font-mono border border-slate-800 rounded-xl p-4">
        {[
          { name: "Kazi Ashhab Rahman", role: "ARIMA · ETS · Mixtral · XGBoost" },
          { name: "Yujin Li", role: "Llama · GPT-4o · Analysis" },
          { name: "Nusaibah Binte Rawnak", role: "XGBoost · Writing · Analysis" },
        ].map(p => (
          <div key={p.name} className="flex flex-col gap-1">
            <span className="text-slate-300 text-xs">{p.name}</span>
            <span className="text-slate-600 text-xs leading-tight">{p.role}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-3 flex-wrap">
        <a
          href="/paper.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-mono px-4 py-2.5 rounded-xl transition-colors"
        >
          read paper →
        </a>
        <a
          href="https://github.com/YuJ-Li/COMP545_Final_Project"
          target="_blank"
          className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-mono px-4 py-2.5 rounded-xl transition-colors"
        >
          view source →
        </a>
      </div>
    </div>
  )
}