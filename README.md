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
| **Shopper journeys and trust screens** | Explore four shopper journeys and two separate trust destinations without leaving the prototype |
| **Interactive phone** | Explore the actual mobile journey by clicking and scrolling inside the device |
| **Screen rationale** | See the purpose of the current screen, its experience signals and the KPIs it is intended to influence |

Use **Show click map** to reveal interactive regions. **Restart journey** returns the selected shopper journey or trust screen to its starting state.

## Persona journeys

The left rail presents guided male first-order discovery, familiar female shopping, contextual regional/occasion journeys, and two shared trust experiences. The same app navigation and trust evidence are reused across journeys. A paired regional/seasonal section follows, then two **trust experiences** shared across journeys. Mall and MTrusted are not additional demographic personas: both are reachable directly through Categories and contextual entry points throughout the phone experience.

### 1. Aarav — Everyday Needs Missions
A value-conscious shopper exploring fashion, grooming, home essentials and electronics & accessories through purpose-led choices.

**Flow:** need → purpose → relevant shortlist → proof-first PDP → reviews / seller evidence → purchase or mission completion.

Four familiar need areas — Fashion & Style, Grooming & Self-Care, Home Essentials, Electronics & Accessories — each offer lightweight task choices instead of a forced new storefront.

### 2. Ananya — Familiar Shopping & Confidence
A returning female shopper whose familiar shopping habits and categories remain central while optional discovery and explainable trust improvements work for everyone.

**Everyday flow:** women's categories → optional purpose → product details, Review Intelligence, seller and trust evidence → purchase.

**Household flow:** Gift for Him → recipient selection → relevant gifts → proof-first PDP → optional bundle.

**Focus:** protect Meesho's existing female shopping experience while extending universal product and trust improvements.

### Regional & Festive Discovery

Lightweight region and occasion context prioritises relevant products without creating separate storefronts or replacing familiar navigation. The two journeys illustrate this through Bihar's Chhath needs and Assam's regional/seasonal edit.

**Rohit — Chhath Festival Mission (Bihar)**  
Regional seasonal shopping for Chhath needs, festive apparel, home preparation and household gifting.

**Nayan — Assam Festive Mission**  
Illustrative Assam regional and seasonal discovery, using contextual missions and product ordering.

### Shared trust experiences (not shopper personas)

**MTrusted — Marketplace-quality trust**  
Explains seller, listing-quality and buyer-experience confidence.

**Meesho Mall — Brand & provenance trust**  
Explains brand identity and product-source assurance.

Each destination opens its existing standalone walkthrough from the left rail. The same trust systems remain reachable from Categories in all four shopper journeys, with contextual products when entered from a category or mission.

Across the non-female journeys, a secondary **Shop for Her** link appears on the homepage and Categories. Ananya retains the corresponding **Gift for Him** journey. Product merchandising and trust-program eligibility remain illustrative.

## Product systems demonstrated

### Mission-led discovery
The homepage prioritises the shopper’s immediate need instead of relying on a long undifferentiated feed. Region and season can help with cold start; observed behaviour should increasingly drive personalisation after interaction begins.

Aarav’s **Everyday Needs Missions** journey adds a lightweight two-step interaction: first select Fashion, Grooming, Home or Electronics & Accessories; then choose a clear purpose within that need. Fashion retains its four occasion-led edits, while the other categories offer similarly guided tasks and relevant product shortlists. Shoppers can change their purpose and continue into the same proof-first PDP and trust experience.

This is a proposed discovery pattern, not a claim of measured recommendation performance. It is intentionally incremental: familiar categories, concise choices and clear product evidence rather than a major navigation redesign.

### Distinct trust routes
The prototype deliberately keeps the two trust systems separate:

- **Meesho Mall - brand / provenance trust**
- **MTrusted - seller + marketplace-quality trust**

Both routes feed into the same product-evaluation experience rather than becoming isolated storefronts.

**Categories** now provides direct Meesho Mall and MTrusted entry points in every persona. The selected category or guided mission carries into those existing trust destinations, with relevant illustrative fashion, grooming, festive, home, electronics and gifting products. Both preserve their distinct brand/source versus seller/listing-quality explanations and open the shared proof-first PDP. Selecting a trust destination in the left rail still opens its existing standalone screen. Product eligibility is illustrative, not verified live status.

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

For the new everyday-needs experience, select **Aarav - Everyday Needs Missions** from the left panel, then follow:

**Homepage → Choose a need → Choose a purpose → Relevant products → Proof-first PDP → Product Details / Seller / Reviews / UGC → Transaction Certainty → Share & Save → Cart → Checkout → Order Confirmation**

Try **Fashion & Style → Office Wear** for the occasion-led fashion path, or **Grooming & Self-Care → Daily Face Care** to see the broader guided-discovery pattern. Home Essentials and Electronics & Accessories follow the same two-step approach.

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
