# Meesho Interactive Experience — Final Functional Prototype

This repository contains a fresh, from-scratch Meesho concept prototype built in HTML/CSS/JavaScript. The low-resolution reference mockups are **not rendered inside the app**; they were used only as visual / information-architecture references.

## Persona journeys

1. **College Style Starter** — mission-first college fashion homepage → fashion category → proof-first PDP.
2. **Bihar / Chhath Mission** — regional festive homepage → Chhath category → trusted PDP.
3. **Meesho Mall** — branded grooming destination → category / products → provenance explanation → PDP.
4. **MTrusted** — marketplace-quality trust destination → seller proof → product → PDP.
5. **Assam Festive Context** — regional contextual homepage → festive category → Mall / MTrusted → PDP.

## Fully functional screens

- College homepage
- Assam festive homepage
- Chhath homepage
- Meesho Mall destination
- MTrusted destination
- Men’s Fashion category
- Men’s Grooming category
- Assam category
- Chhath category
- Search
- Proof-first PDP
- Full product details
- Seller profile
- Review intelligence
- Verified buyer UGC gallery
- Transaction certainty
- Mission-expansion PDP
- Share & Save flow
- Group-created confirmation
- Meesho Mall explainer
- MTrusted explainer
- Cart
- Checkout
- Order confirmation
- Categories directory
- Wishlist
- My Orders
- Account

## Interaction coverage

Every key homepage module, category tile, product card, trust card and major PDP section is clickable. Seller, review, UGC, product-information and transaction-certainty sections open dedicated screens. The bottom navigation and persona switcher are functional. The `Show click map` control highlights clickable regions for presentation/demo use.

## Visual implementation

- Screens are rendered from HTML/CSS/JS, not screenshot images.
- Product illustrations are inline SVG vectors for crisp rendering.
- The visual language follows the supplied Meesho references: Meesho pink, purple trust surfaces, compact card system, white product UI and phone-centric layout.

## Local run

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Netlify

No build command is required.

- Build command: leave blank
- Publish directory: `.`

`netlify.toml` is included.