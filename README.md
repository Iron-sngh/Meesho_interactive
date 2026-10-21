# Meesho DICE Season 3 | Interactive product prototype

**[Open the live prototype](https://iron-sngh.github.io/Meesho_interactive/)** · **[Read the submission deck](https://drive.google.com/file/d/10sdDxFJ4x0P0fKoClPCTn7K5_KqDU4Vl/view?usp=sharing)**

Business Track · Team Alcheringa, IIT Guwahati

## The idea in one minute

Meesho does not need a separate men's storefront to win more male shoppers. It needs to make the **first purchase easier to find, evaluate and trust**. After that first order succeeds, better recommendations, bundles and household shopping can create reasons to return.

Our submission follows a simple sequence:

**Find the need → Show relevant options → Explain the product and seller → Make delivery and returns clear → Earn Order #1 → Encourage the next useful purchase**

The prototype shows how this could work inside a familiar Meesho interface. The changes are deliberate and incremental: clearer choices, evidence at the moment of decision, and optional growth features rather than a wholesale redesign.

## Why we focused here

Our submitted research combines **198 survey responses across four languages** and **10+ qualitative interviews** with secondary evidence. The findings pointed to problems beyond price: uncertainty about quality, incomplete product information, weak seller confidence, difficulty finding relevant items and questions about returns or delivery.

We grouped the work into three horizons:

| Priority | What we propose | Where to see it |
| --- | --- | --- |
| **Build first - establish trust** | Review Intelligence and buyer photos; category-specific specifications; explainable seller and source trust | Product detail page, Reviews, Seller, Meesho Mall and MTrusted |
| **Make choosing easier** | Need- and occasion-led discovery; clearer fulfilment and return information; regional context | Aarav's homepage, Assam / Chhath, Transaction Certainty |
| **Test after confidence** | Complete-the-mission recommendations, Share & Save, group buying, next-best shopping missions | Lower half of the PDP, gift journeys and cart |

This is a product proposal, not a claim that the illustrated changes have already increased conversion.

## Start here: recommended walkthrough (3–5 minutes)

Open the live prototype on desktop. The **left side** chooses a journey, the **centre phone** is clickable and scrollable, and the **right side** explains the screen and how it could be measured.

1. Select **Everyday Needs Missions (Aarav)**. Choose **Grooming & Self-Care → Daily Face Care**, or **Fashion & Style → Office Wear**.
2. Open a product. Review the specifications, seller details, Review Intelligence and photo examples. Note that Meesho Mall and MTrusted answer **different trust questions**.
3. Scroll further down the *same product page* to Share & Save, Usually Bought Together, Complete Your Look and Suggested Products. These appear **after** the core product evidence.
4. Open Cart, Checkout and Transaction Certainty to see how the purchase terms stay understandable.
5. Briefly show **Ananya's familiar female shopping experience**, **Bihar / Chhath**, and **Assam**. These demonstrate inclusive and contextual discovery, not separate storefronts.

Use **Show click map** to locate clickable areas and **Restart journey** to reset the selected use case. On a phone, the interactive device appears first; the journey switcher and explanation follow below.

## Four shopper journeys

| Journey | What the judge should notice |
| --- | --- |
| **Aarav - Everyday Needs Missions** | Shop by fashion, grooming, home or electronics; choose a purpose; evaluate a manageable shortlist |
| **Ananya - Familiar Shopping & Confidence** | Women's browsing remains familiar, while the same clearer product information and trust cues work for everyone; Gift for Him is optional |
| **Rohit - Bihar / Chhath** | Festival preparation, clothing and gifting can be placed closer to the shopper's immediate need |
| **Nayan - Assam / Regional Context** | Region and season can change which products appear first, without creating an unfamiliar version of Meesho |

The non-female journeys also include **Shop for Her** on Home and Categories. The female journey retains **Gift for Him**. These are complementary household-shopping paths, not a change to Meesho's core audience.

## Two trust experiences, not two personas

**Meesho Mall - brand and source confidence.** Helps answer: *Do I recognise and trust where this product comes from?*

**MTrusted - marketplace-quality confidence.** Helps answer: *What do seller, listing and fulfilment signals tell me about this particular product?*

Both are available from Categories and contextual product screens. Their sample assortments are illustrative; the prototype **does not verify real programme eligibility** or merchant performance.

## Why the product page matters

The PDP is designed around the question a hesitant first-time buyer asks: *What evidence do I have before paying?* The same scroll brings together product dimensions or material details, listing photos, buyer-review themes, seller information, delivery and return clarity. Once that decision feels credible, shoppers can consider sharing a product, adding a compatible item or starting another mission.

The proposal favours **kept first orders**, not simply more clicks or bigger carts. Bundles and group mechanics should be tested for incremental contribution after discounts, with returns and customer issues tracked as guardrails.

## How to judge whether it works

A sensible pilot would compare the current journey against a controlled treatment, beginning with selected categories and cohorts. Useful measures include:

- Need selection → relevant product page → add to cart → **kept Order #1**
- Product/seller trust comprehension; review and details engagement
- Cancellation, returns, issue resolution and refund experience
- Order #2, category breadth, repeat usage and incremental contribution over time
- **Female-customer guardrails:** conversion, retained orders and overall shopping experience must not decline

Our wider roadmap is **build and instrument → pilot and prove → scale winners → compound retention and LTV**. The UI shown here is the first testable layer of that strategy, not the entire long-term system.

## Running and testing the prototype

This is a static prototype built with HTML, CSS and vanilla JavaScript. It requires no API keys or application framework.

To run locally:

```bash
python3 -m http.server 4173
# Open http://localhost:4173
```

A [Chromium browser QA workflow](https://github.com/Iron-sngh/Meesho_interactive/actions/workflows/browser-qa.yml) checks core interactions and viewports, including desktop, tablet and narrow mobile sizes. Each run saves a report and screenshots as a GitHub Actions artifact. The workflow is repeatable; passing automated checks does not replace a final human visual review.

GitHub Pages publishes `main` through [the deployment workflow](https://github.com/Iron-sngh/Meesho_interactive/actions/workflows/pages.yml).

## Scope and attribution

This is an **illustrative challenge submission**, not an official Meesho release. Product prices, seller metrics, review examples, promotion rules, images and recommendation order are sample content unless explicitly marked otherwise. Generated photographs are demonstration assets, not verified buyer submissions. No badge in this prototype should be read as proof of live Meesho Mall or MTrusted qualification.

Meesho names and marks belong to their respective owners and are used solely to explain this product concept.
