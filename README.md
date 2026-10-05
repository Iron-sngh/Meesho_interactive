# Meesho Interactive Experience Lab

A fresh, from-scratch interactive prototype for the Meesho DICE project.

This version **does not use the supplied low-resolution mockups as the rendered screens**. Instead, they were treated as design and IA references, and the full experience was rebuilt in HTML/CSS/JS so the prototype is crisp, editable and scalable.

## What this prototype includes

### Persona-led entry journeys
1. **College Style Starter** — guided discovery for a college shopper.
2. **Bihar / Chhath Mission** — festive homepage for a regional Chhath use case.
3. **Meesho Mall** — branded grooming destination focused on provenance trust.
4. **MTrusted** — explainable seller/listing-quality trust destination.
5. **Assam Festive Context** — contextual homepage for an Assam regional use case.

### Cross-linked interactive screens
- Homepages for all personas
- Category directory
- Men’s Fashion category
- Men’s Grooming category
- Assam festive category
- Chhath festive category
- Guided search
- Proof-first PDP
- Seller profile
- Review intelligence screen
- Verified buyer UGC gallery
- Transaction certainty screen
- Lower PDP mission expansion screen
- Meesho Mall explainer
- MTrusted explainer
- Cart
- Checkout
- Order success
- Orders
- Account
- Wishlist

## Interaction model
- Every important card, chip, category tile, product card, trust tile and CTA is clickable.
- The **Show click map** button outlines interactive regions for demo use.
- The **Restart journey** button resets the currently selected persona to its landing screen.
- The persona switcher on the left changes the active journey instantly.

## Tech
- Plain HTML
- Plain CSS
- Plain JavaScript
- No build step
- Netlify-ready static site

## Local run

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`

## Deploy to Netlify

### Option 1 — GitHub import (recommended)
1. Push this repo to GitHub.
2. In Netlify, choose **Add new project → Import an existing project**.
3. Select GitHub and choose this repository.
4. Leave **Build command** blank.
5. Set **Publish directory** to `.`
6. Deploy.

### Option 2 — Manual upload
1. Zip the repository or folder.
2. In Netlify, choose **Deploy manually**.
3. Upload the folder that contains `index.html`.

## Notes
- All commerce data is illustrative.
- Regional merchandising examples are conceptual, based on the project thesis.
- Meesho Mall and MTrusted are kept distinct:
  - **Meesho Mall** = brand / provenance trust
  - **MTrusted** = seller + listing quality trust