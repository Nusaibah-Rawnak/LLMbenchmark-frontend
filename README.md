# NLP Classifier Playground

An interactive web app for real-time text classification, powered by models trained on sentiment analysis and alliteration detection tasks.

🔗 [Live Demo](https://nlp-classifier-frontend.vercel.app) · [Backend Repo](https://github.com/Nusaibah-Rawnak/linear-text-classification)

## Features

- **Sentiment Classification** — predicts whether a sentence is positive or negative
- **Alliteration Detection** — predicts whether a sentence contains alliteration
- **Confidence bar** — visual confidence score for each prediction
- **Interactive results explorer** — bar charts comparing accuracy across 20+ experimental configurations
- **About section** — summary of research findings with link to full report

## Tech Stack

- React + TypeScript
- Tailwind CSS
- Recharts (data visualization)
- Vite (build tool)
- Deployed on Vercel

## Running Locally

```bash
git clone https://github.com/Nusaibah-Rawnak/nlp-classifier-frontend.git
cd nlp-classifier-frontend
npm install
npm run dev
```

Then open `http://localhost:5173`.

> **Note**: The backend is hosted on Render's free tier and may take ~30 seconds to wake up on the first request after a period of inactivity.

## Project Structure
```
src/
├── App.tsx          # Main layout and sections
├── Classifier.tsx   # Reusable prediction component
├── Results.tsx      # Interactive results charts
└── About.tsx        # About section with research summary
```
## Related

- [Research repo + backend](https://github.com/Nusaibah-Rawnak/linear-text-classification) — dataset, experiment code, FastAPI backend, and full report

## Author

Nusaibah Binte Rawnak  
[LinkedIn](https://linkedin.com/in/nusaibahrawnak) | [GitHub](https://github.com/Nusaibah-Rawnak)