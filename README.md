# Meesho Interactive Experience Lab

A dependency-free, Netlify-ready interactive prototype built from the Meesho DICE Challenge deck and the six supplied product mockups.

## What is interactive

The prototype has five persona-led journeys:

1. **College Style Starter** — guided homepage → Men’s Fashion → proof-first PDP → seller/review evidence → mission expansion.
2. **Bihar / Chhath Mission** — regional seasonal homepage → festive fashion / gifting / travel → qualified products → trusted PDP.
3. **Meesho Mall / Grooming** — branded grooming destination → brands / needs → product → purchase proof.
4. **MTrusted / Seller Proof** — MTrusted destination → evidence explanation → seller profile → eligible product.
5. **Assam Festive Context** — illustrative regional homepage → mission choice → trending products → Mall / MTrusted → PDP.

The supplied PNG mockups are used directly for the exact screens. Transparent click hotspots are layered over meaningful UI regions. The **Show click map** button reveals every hotspot during a demo.

Additional screens (categories, search, seller profile, review intelligence, verified UGC, transaction certainty, cart, checkout, orders, language/region, bundle and Share & Save) are generated in the same Meesho-inspired design system so no important click path dead-ends.

## Files

- `index.html` — desktop presentation shell.
- `styles.css` — responsive layout + generated phone-screen design system.
- `app.js` — personas, routes, hotspot maps, interactions and generated screens.
- `assets/` — the six supplied mockups.
- `netlify.toml` — zero-build Netlify configuration.

## Run locally

No install or build step is required.

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy to Netlify — easiest method

1. Download and unzip the project.
2. Sign in to Netlify.
3. Choose **Add new project → Deploy manually** (the exact label can vary slightly).
4. Drag the **project folder that contains `index.html`** into the deploy area.
5. Netlify will publish it immediately because there is no build step.

## Deploy to Netlify from GitHub — recommended for future edits

1. Push this project to a GitHub repository.
2. In Netlify choose **Add new project → Import an existing project**.
3. Select GitHub and choose the repository.
4. Build command: **leave blank**.
5. Publish directory: **.`** (project root).
6. Deploy.
7. Future pushes to the selected branch will redeploy automatically.

`netlify.toml` already sets the publish directory to the project root.

## Prototype notes

- The product deliberately distinguishes **Meesho Mall** (brand / provenance trust) from **MTrusted** (seller + marketplace-quality trust).
- Regional examples are illustrative concept UI, not claims about actual demand by region.
- All purchase, seller, rating, delivery and order content in the generated screens is illustrative prototype data.
