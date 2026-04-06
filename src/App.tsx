import Classifier from "./Classifier"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 py-12">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">NLP Classifier Playground</h1>
          <p className="text-slate-400 mt-2 text-sm">
            Interactive demo from COMP 550 — Linear Text Classification.
            Type any sentence to get a real-time prediction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Classifier
            task="sentiment"
            title="Sentiment Classification"
            description="Is this sentence positive or negative?"
            placeholder="e.g. The food was absolutely delicious!"
          />
          <Classifier
            task="alliteration"
            title="Alliteration Detection"
            description="Does this sentence contain alliteration?"
            placeholder="e.g. Seven silly swans swam silently."
          />
        </div>

        <div className="text-center text-xs text-slate-600">
          Built with Logistic Regression + LinearSVC · scikit-learn ·{" "}
          <a href="https://github.com/Nusaibah-Rawnak/linear-text-classification"
            target="_blank"
            className="underline hover:text-slate-400">
            GitHub
          </a>
        </div>

      </div>
    </div>
  )
}