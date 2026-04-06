export default function About() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-4 text-sm text-slate-400 leading-relaxed">
        <p>
          This project investigates what kinds of text classification problems linear classifiers
          can solve using word-level features. Two binary classification tasks were designed:
          one based on <span className="text-slate-200">semantics</span> (sentiment polarity)
          and one based on <span className="text-slate-200">spelling patterns</span> (alliteration detection).
        </p>
        <p>
          The key finding: linear classifiers achieve <span className="text-teal-400 font-semibold">93.75% accuracy</span> on
          alliteration detection but only <span className="text-rose-400 font-semibold">70.83%</span> on
          sentiment classification - a 23-point gap that reveals how much easier explicit
          surface-form patterns are to learn compared to semantic meaning.
        </p>
        <p>
          Models were trained using logistic regression and linear SVM with five preprocessing
          configurations: baseline, lowercasing, stopword removal, TF-IDF weighting, and combinations thereof.
          Surprisingly, the baseline (no preprocessing) performed best for both tasks.
        </p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <a
          href="/report.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-mono px-4 py-2.5 rounded-xl transition-colors"
        >
          read full report →
        </a>
        <a
          href="https://github.com/Nusaibah-Rawnak/linear-text-classification"
          target="_blank"
          className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-mono px-4 py-2.5 rounded-xl transition-colors"
        >
          view source →
        </a>
      </div>
    </div>
  )
}