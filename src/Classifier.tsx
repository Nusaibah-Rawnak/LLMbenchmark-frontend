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

  const labelColor =
    result?.label === "positive" ? "text-emerald-400"
    : result?.label === "negative" ? "text-rose-400"
    : result?.label === "alliterative" ? "text-teal-400"
    : "text-slate-400"

  return (
    <div className="bg-slate-800 rounded-2xl p-6 flex flex-col gap-4">
      <div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="text-sm text-slate-400 mt-1">{description}</p>
      </div>

      <textarea
        className="w-full bg-slate-700 text-white rounded-xl p-3 text-sm resize-none outline-none focus:ring-2 focus:ring-teal-500"
        rows={3}
        placeholder={placeholder}
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), predict())}
      />

      <button
        onClick={predict}
        disabled={loading || !sentence.trim()}
        className="bg-teal-500 hover:bg-teal-400 disabled:opacity-40 text-white font-medium rounded-xl py-2 px-4 transition-colors"
      >
        {loading ? "Predicting..." : "Predict"}
      </button>

      {error && <p className="text-rose-400 text-sm">{error}</p>}

      {result && (
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-400">
            Prediction: <span className={`font-semibold ${labelColor}`}>{result.label}</span>
          </p>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div
              className="bg-teal-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${confidencePct}%` }}
            />
          </div>
          <p className="text-xs text-slate-500 text-right">{confidencePct}% confidence</p>
        </div>
      )}
    </div>
  )
}