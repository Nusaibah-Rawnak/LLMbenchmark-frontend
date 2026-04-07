# LLM Benchmark Frontend

An interactive web app visualizing results from our COMP 545 final project on context-aware LLM time series forecasting.

🔗 [Live Demo](https://llmbenchmark-frontend.vercel.app) · [Research Repo](https://github.com/YuJ-Li/COMP545_Final_Project)

## Overview

This dashboard presents findings from our evaluation of 5 models across 120 tasks and 12 domains, investigating whether textual context improves LLM forecasting performance at practical scales (3B–56B parameters).

## Features

- **Model comparison** — NMAE and win rate charts comparing ARIMA, ETS, Llama 3B, Mistral 8x7B, and GPT-4o mini
- **Deployment policy** — visual comparison of Always-Baseline vs Always-LLM vs XGBoost Selector vs Oracle
- **Per-domain breakdown** — color-coded table showing where Mistral beats or hurts baseline performance
- **About section** — research summary, team credits, and link to full paper

## Tech Stack

- React + TypeScript
- Tailwind CSS
- Recharts (data visualization)
- Vite (build tool)
- Deployed on Vercel

## Running Locally

```bash
git clone https://github.com/Nusaibah-Rawnak/LLMbenchmark-frontend.git
cd LLMbenchmark-frontend
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Project Structure
```
src/
├── App.tsx                # Main layout and sections
├── ModelComparison.tsx    # NMAE and win rate charts
├── PolicyComparison.tsx   # Selector vs oracle policy comparison
├── DomainAnalysis.tsx     # Per-domain performance table
└── About.tsx              # Research summary and team
```

## Authors

- Kazi Ashhab Rahman
- Yujin Li  
- Nusaibah Binte Rawnak

## Related

- [Research repo](https://github.com/YuJ-Li/COMP545_Final_Project) — full codebase, experiments, and paper