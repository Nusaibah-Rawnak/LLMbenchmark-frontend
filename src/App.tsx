import Classifier from "./Classifier"
import Results from "./Results"
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
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1 w-fit">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-400 text-xs font-mono tracking-widest uppercase">Live Demo</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            NLP Classifier<br />
            <span className="text-teal-400">Playground</span>
          </h1>
          <p className="text-slate-400 text-base max-w-lg">
            Type any sentence to get a real-time prediction from models trained on
            sentiment and alliteration classification tasks.
          </p>
        </div>

        {/* Classifiers */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-teal-400 rounded-full" />
            <h2 className="text-lg font-semibold font-mono tracking-wide text-slate-200">Try it</h2>
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
        </section>

        {/* Results */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-teal-400 rounded-full" />
            <h2 className="text-lg font-semibold font-mono tracking-wide text-slate-200">Results</h2>
          </div>
          <Results />
        </section>

        {/* About */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-teal-400 rounded-full" />
            <h2 className="text-lg font-semibold font-mono tracking-wide text-slate-200">About</h2>
          </div>
          <About />
        </section>

        {/* Footer */}
        <div className="text-center text-xs text-slate-600 pb-4">
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