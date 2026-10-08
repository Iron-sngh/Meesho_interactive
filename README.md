# Meesho Interactive Prototype

[![Deploy GitHub Pages](https://github.com/Iron-sngh/Meesho_interactive/actions/workflows/pages.yml/badge.svg)](https://github.com/Iron-sngh/Meesho_interactive/actions/workflows/pages.yml)

**Live prototype:** https://iron-sngh.github.io/Meesho_interactive/  
**Submission deck:** https://drive.google.com/file/d/10sdDxFJ4x0P0fKoClPCTn7K5_KqDU4Vl/view?usp=sharing

Interactive product prototype for the **Meesho DICE Challenge Season 3 - Business Track**.

The prototype explores how Meesho can make an uncertain first shopping session easier to navigate, evaluate and trust. The experience is built around one progression:

**Context → Intent → Relevant Products → Trust → Proof → Order #1 → Next Mission**

## Prototype walkthrough

The desktop presentation is split into three areas:

| Area | Purpose |
| --- | --- |
| **Persona journeys** | Switch between the five use cases without leaving the prototype |
| **Interactive phone** | Explore the actual mobile journey by clicking and scrolling inside the device |
| **Screen rationale** | See the purpose of the current screen, its experience signals and the KPIs it is intended to influence |

Use **Show click map** to reveal interactive regions. **Restart journey** returns the active persona to its starting screen.

## Persona journeys

### 1. Rohit f Chhath Festival Mission
A Bihar festive shopper whose session starts with a clear seasonal need.

**Flow:** Chhath homepage → festive mission → relevant products → trusted PDP → cart / checkout

**Focus:** regional and seasonal context, occasion-led discovery, festive basket completion and trust-qualified merchandising.

### 2. Nayan - Assam Festive Context
A shopper entering during a seasonal shopping period in Assam.

**Flow:** Assam homepage → mission choice → regional / seasonal products → Mall or MTrusted → trusted PDP

**Focus:** region, language and season as lightweight first-session context, followed by behaviour-led personalisation.

### 3. Kabir - Meesho Mall for Brands
A brand-conscious grooming shopper who wants clearer confidence in product source and provenance.

**Flow:** Meesho Mall → shop by brand / need → branded product → proof-first PDP → purchase

**Meesho Mall answers:** *“Is this the brand or source I trust?”*

### 4. Vivek - MTrusted Confidence
A first-time buyer who likes a product but is unsure about an unfamiliar seller or listing.

**Flow:** MTrusted destination → explainable evidence → qualified product → seller profile → PDP

**MTrusted answers:** *“Is this seller or listing reliably good?”*

### 5. Aarav - College Style Starter
A value-conscious college shopper looking for affordable everyday fashion.

**Flow:** mission-guided home → Men’s Fashion → PDP → seller / review proof → Complete Your Look

**Focus:** guided discovery, proof-first evaluation and post-confidence basket expansion.

> Regional merchandising shown in the prototype is illustrative. It demonstrates the interaction model rather than actual regional demand data.

## Product systems demonstrated

### Mission-led discovery
The homepage prioritises the shopper’s immediate need instead of relying on a long undifferentiated feed. Region, season and category can help with cold start; observed behaviour should increasingly drive personalisation after interaction begins.

### Distinct trust routes
The prototype deliberately keeps the two trust systems separate:

- **Meesho Mall - brand / provenance trust**
- **MTrusted - seller + marketplace-quality trust**

Both routes feed into the same product-evaluation experience rather than becoming isolated storefronts.

### Proof-first PDP
The product page brings decision-critical evidence together before purchase:

- category-specific product details
- selected-variant pricing
- seller credibility
- review intelligence
- verified buyer imagery / UGC
- delivery visibility
- return and replacement information
- payment and refund certainty

Seller information, reviews and buyer proof can also be opened as dedicated screens.

### Growth after product confidence
Once the shopper has enough evidence to evaluate the product, the PDP continues into:

1. Share & Save
2. Group Created
3. Usually Bought Together
4. Complete Your Look / Complete Your Routine
5. Suggested Products

These modules stay in the same scrollable product page so the shopper does not lose the context that established confidence.

## Suggested judge path

A representative end-to-end flow is:

**Homepage → Category → Product → Product Details / Seller / Reviews / UGC → Transaction Certainty → Share & Save → Cart → Checkout → Order Confirmation**

Other working areas include Mall and MTrusted explainers, category browsing, wishlist, My Orders, account, group creation, bundles and persona-specific recommendations.

The phone’s **Home / Categories / My Orders / Account** navigation remains fixed while the phone content scrolls.

## Technical setup

The prototype is intentionally lightweight:

- semantic HTML
- CSS
- vanilla JavaScript
- responsive desktop presentation shell
- compressed WebP commerce assets
- GitHub Pages deployment through GitHub Actions
- no framework or runtime dependency

### Repository structure

```text
.
├── index.html
├── styles.css
├── app.js
├── assets/
│   ├── assam/
│   ├── categories/
│   ├── chhath/
│   ├── college/
│   ├── mall/
│   ├── mtrusted/
│   ├── products/
│   ├── profiles/
│   ├── reviews/
│   ├── seller/
│   └── trust/
└── .github/
    └── workflows/
        └── pages.yml
```

## Scope and attribution

This repository contains a **concept prototype**, not production Meesho software.

Prices, seller metrics, recommendations, regional merchandising and some commerce imagery are illustrative. Fictional or generated assets are used where appropriate so the prototype does not imply real merchant performance or unsupported marketplace statistics.

Meesho names, marks and product references are used only in the context of the challenge submission and remain the property of their respective owners.
