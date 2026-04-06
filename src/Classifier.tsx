import { useState } from "react"

interface Props {
  task: "sentiment" | "alliteration"
  title: string
  description: string
  placeholder: string
}

interface Result {
  label: string
  confidence: number
}

const API_URL = "https://linear-text-classification.onrender.com"

export default function Classifier({ task, title, description, placeholder }: Props) {
  const [sentence, setSentence] = useState("")
  const [result, setResult] = useState<Result | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function predict() {
    if (!sentence.trim()) return
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch(`${API_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sentence, task }),
      })
      const data = await res.json()
      setResult(data)
    } catch {
      setError("Could not reach the API. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const confidencePct = result ? Math.round(result.confidence * 100) : 0

  const isPositive = result?.label === "positive" || result?.label === "alliterative"
  const labelColor = result
    ? isPositive ? "text-teal-400" : "text-rose-400"
    : "text-slate-400"

  const barColor = isPositive ? "bg-teal-500" : "bg-rose-500"

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-slate-700 transition-colors">
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-white font-mono">{title}</h3>
        <p className="text-xs text-slate-500">{description}</p>
      </div>

      <textarea
        className="w-full bg-slate-800 text-white rounded-xl p-3 text-sm resize-none outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-slate-600 transition-all"
        rows={3}
        placeholder={placeholder}
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), predict())}
      />

      <button
        onClick={predict}
        disabled={loading || !sentence.trim()}
        className="bg-teal-500 hover:bg-teal-400 disabled:opacity-30 disabled:cursor-not-allowed text-white text-sm font-mono font-medium rounded-xl py-2.5 px-4 transition-all"
      >
        {loading ? "running model..." : "predict →"}
      </button>

      {error && <p className="text-rose-400 text-xs font-mono">{error}</p>}

      {result && (
        <div className="flex flex-col gap-2 pt-1">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-500 font-mono">prediction</span>
            <span className={`text-sm font-bold font-mono ${labelColor}`}>{result.label}</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1.5">
            <div
              className={`${barColor} h-1.5 rounded-full transition-all duration-700`}
              style={{ width: `${confidencePct}%` }}
            />
          </div>
          <p className="text-xs text-slate-600 font-mono text-right">{confidencePct}% confidence</p>
        </div>
      )}
    </div>
  )
}