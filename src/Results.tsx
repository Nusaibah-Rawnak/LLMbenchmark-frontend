import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts"
import { useState } from "react"

const data = {
  "Task A — Sentiment (Unigrams)": [
    { config: "Baseline", LR: 70.83, SVM: 70.83 },
    { config: "Lowercase", LR: 68.75, SVM: 68.75 },
    { config: "LC + Stopwords", LR: 66.67, SVM: 66.67 },
    { config: "LC + TF-IDF", LR: 66.67, SVM: 70.83 },
    { config: "LC + SW + TF-IDF", LR: 66.67, SVM: 68.75 },
  ],
  "Task B — Alliteration (Unigrams)": [
    { config: "Baseline", LR: 93.75, SVM: 93.75 },
    { config: "Lowercase", LR: 79.17, SVM: 85.42 },
    { config: "LC + Stopwords", LR: 75.00, SVM: 75.00 },
    { config: "LC + TF-IDF", LR: 81.25, SVM: 83.33 },
    { config: "LC + SW + TF-IDF", LR: 64.58, SVM: 64.58 },
  ],
  "Task B — Alliteration (Unigrams + Bigrams)": [
    { config: "Baseline", LR: 93.75, SVM: 93.75 },
    { config: "Lowercase", LR: 77.08, SVM: 83.33 },
    { config: "LC + Stopwords", LR: 77.08, SVM: 77.08 },
    { config: "LC + TF-IDF", LR: 83.33, SVM: 83.33 },
    { config: "LC + SW + TF-IDF", LR: 62.50, SVM: 62.50 },
  ],
}

type DataKey = keyof typeof data

export default function Results() {
  const [selected, setSelected] = useState<DataKey>("Task A — Sentiment (Unigrams)")

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Experimental Results</h2>
        <p className="text-slate-400 text-sm mt-1">
          Test accuracy across all preprocessing configurations and classifiers.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {(Object.keys(data) as DataKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              selected === key
                ? "bg-teal-500 text-white"
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="bg-slate-800 rounded-2xl p-6">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data[selected]} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="config" tick={{ fill: "#94a3b8", fontSize: 12 }} />
            <YAxis domain={[50, 100]} tick={{ fill: "#94a3b8", fontSize: 12 }} unit="%" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: "8px" }}
              labelStyle={{ color: "#e2e8f0" }}
              formatter={(value) => [`${value}%`, ""]}
            />
            <Legend wrapperStyle={{ color: "#94a3b8" }} />
            <Bar dataKey="LR" name="Logistic Regression" fill="#14b8a6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="SVM" name="Linear SVM" fill="#818cf8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Best Accuracy", value: "93.75%", sub: "Task B (Alliteration)" },
          { label: "Sentiment Accuracy", value: "70.83%", sub: "Task A (Baseline)" },
          { label: "Configurations", value: "20+", sub: "Across both tasks" },
          { label: "Classifiers", value: "2", sub: "LR + Linear SVM" },
        ].map((stat) => (
          <div key={stat.label} className="bg-slate-800 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-teal-400">{stat.value}</p>
            <p className="text-white text-sm font-medium mt-1">{stat.label}</p>
            <p className="text-slate-500 text-xs mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}