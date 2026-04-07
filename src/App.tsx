import ModelComparison from "./ModelComparison"
import PolicyComparison from "./PolicyComparison"
import DomainAnalysis from "./DomainAnalysis"
import About from "./About"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white" style={{
      backgroundImage: "radial-gradient(circle, #1e293b 1px, transparent 1px)",
      backgroundSize: "24px 24px"
    }}>
      <div className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-20">

        {/* Hero */}
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 bg-violet-400/10 border border-violet-400/20 rounded-full px-4 py-1 w-fit">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <span className="text-violet-400 text-xs font-mono tracking-widest uppercase">COMP 545 · McGill · 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Context Helps,<br />
            <span className="text-violet-400">But Only at Scale</span>
          </h1>
          <p className="text-slate-400 text-base max-w-lg">
            Evaluating practical LLMs for time series forecasting. Can smaller models
            use textual context effectively - and when is it worth the cost?
          </p>
          <div className="flex gap-6 mt-2">
            {[
              { value: "120", label: "tasks evaluated" },
              { value: "5", label: "models compared" },
              { value: "12", label: "domains" },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-violet-400 font-mono">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Model Comparison */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-violet-400 rounded-full" />
            <h2 className="text-lg font-semibold font-mono tracking-wide text-slate-200">Model comparison</h2>
          </div>
          <ModelComparison />
        </section>

        {/* Policy Comparison */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-violet-400 rounded-full" />
            <h2 className="text-lg font-semibold font-mono tracking-wide text-slate-200">Deployment policy</h2>
          </div>
          <PolicyComparison />
        </section>

        {/* Domain Analysis */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-violet-400 rounded-full" />
            <h2 className="text-lg font-semibold font-mono tracking-wide text-slate-200">Per-domain breakdown</h2>
          </div>
          <DomainAnalysis />
        </section>

        {/* About */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-violet-400 rounded-full" />
            <h2 className="text-lg font-semibold font-mono tracking-wide text-slate-200">About</h2>
          </div>
          <About />
        </section>

        {/* Footer */}
        <div className="text-center text-xs text-slate-600 pb-4">
          Built with XGBoost · ARIMA · ETS · Mistral 8x7B ·{" "}
          <a
            href="https://github.com/YuJ-Li/COMP545_Final_Project"
            target="_blank"
            className="underline hover:text-slate-400"
          >
            GitHub
          </a>
        </div>

      </div>
    </div>
  )
}