# HexCoded+ — AI Post-Processing Layer

A product prototype exploring an AI-powered post-processing layer for HexCoded Creative Studio.

**Live Prototype:** [Open Demo](YOUR_RENDER_URL)  
**GitHub Repository:** [hexcoded-plus](YOUR_GITHUB_REPO_URL)

## What I Built

The idea is to extend the existing generation workflow from:

**Generate → Export**

to:

**Generate → Inspect → Enhance → Approve / Export**

The prototype adds two AI-powered finishing tools:

- ✨ **AI Upscale** — 4× upscaling using [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN)
- 🎨 **Color Correction** — neural image retouching using [NeurOp](https://github.com/amberwangyili/neurop)

Users can open a generated creative, apply a post-processing operation, see a processing state, and compare the original output with the enhanced result.

## How It Was Developed

The AI processing was run locally during development using the open-source models above.  
The resulting outputs are included as precomputed assets so the deployed prototype can demonstrate the product experience without requiring a GPU/backend.

The frontend was built with:

- HTML
- CSS
- Vanilla JavaScript

The UI was designed to fit naturally into the existing HexCoded Creative Studio workflow.

## Project Structure

```text
hexcoded-plus/
├── generated-output/     # Original creative outputs
├── upscaled/             # Real-ESRGAN results
├── color-corrected/      # NeurOp results
├── logo/                 # HexCoded branding asset
├── index.html
├── style.css
└── script.js
