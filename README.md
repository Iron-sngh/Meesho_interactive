# Meesho Interactive Prototype

**Live prototype:** https://iron-sngh.github.io/Meesho_interactive/

This repository contains the interactive prototype created for the **Meesho DICE Challenge Season 3 — Business Track**. The prototype focuses on a simple question: how can Meesho help a shopper move from an uncertain first session to a confident first order, and then into the next relevant shopping mission?

The experience connects discovery, trust and purchase confidence in one flow:

**Context → Intent → Relevant Products → Trust → Proof → Order #1 → Next Mission**

## How to view the prototype

Open the live link on a desktop browser.

The presentation has three parts:

- **Persona journeys, left:** switch between the five use cases.
- **Interactive phone, centre:** scroll and click through the mobile experience.
- **Screen rationale, right:** use **Show click map** to reveal interactive areas, **Restart journey** to reset the current use case, and read the screen-level signals and KPIs as the journey changes.

The right-hand panel updates with the phone. It explains what the current screen is doing, which product signals it exposes, and which outcome it is intended to improve.

## Five journeys

| Persona | Starting point | What the journey demonstrates |
| --- | --- | --- |
| **Rohit — Chhath Festival Mission** | Bihar festive shopping | Region and season as lightweight context, occasion-led discovery, festive basket completion |
| **Nayan — Assam Festive Context** | Assam seasonal shopping | Regional context without permanently locking the experience to demographics |
| **Kabir — Meesho Mall for Brands** | Branded grooming | Brand and source confidence through a dedicated Mall destination |
| **Vivek — MTrusted Confidence** | Unfamiliar seller/listing | Explainable seller and marketplace-quality evidence |
| **Aarav — College Style Starter** | Affordable college fashion | Mission-led discovery, proof-first evaluation and basket expansion |

The regional merchandising shown in the prototype is illustrative. It demonstrates the interaction logic rather than actual regional demand data.

## Trust architecture

The prototype keeps Meesho Mall and MTrusted separate because they answer different shopper questions.

**Meesho Mall** represents **brand / provenance trust**:  
*Is this the brand or source I trust?*

**MTrusted** represents **seller + marketplace-quality trust**:  
*Is this seller or listing reliably good?*

Both routes eventually connect to the same product-evaluation system rather than becoming isolated storefronts.

## Proof-first product page

The PDP is designed to make the listing judgeable before asking the shopper to trust it. Depending on the product, it brings together:

- category-specific product details
- selected-variant pricing
- seller credibility
- review intelligence
- verified buyer photos and UGC
- delivery visibility
- return / replacement information
- payment and refund certainty

Seller information, reviews and buyer proof remain inspectable as separate interactive screens.

## Growth after product confidence

Once the shopper has evaluated the product, the next-step modules remain inside the same scrollable PDP:

1. **Share & Save**
2. **Group Created**
3. **Usually Bought Together**
4. **Complete Your Look / Complete Your Routine**
5. **Suggested Products**

Suggested Products is intentionally the last section. The idea is to preserve the product context that earned trust before broadening discovery again.

## Useful paths to try

A representative end-to-end path is:

**Homepage → Category → Product → Product Details / Seller / Reviews / UGC → Transaction Certainty → Share & Save → Cart → Checkout → Order Confirmation**

Other interactive areas include Mall and MTrusted explainers, wishlist, My Orders, account, bundle additions, group creation and persona-specific recommendations.

The phone’s **Home / Categories / My Orders / Account** navigation stays fixed while the product content scrolls.

## Prototype scope

This is a strategic product prototype rather than a production Meesho build. Prices, seller metrics, recommendations, regional merchandising and some commerce imagery are illustrative. Fictional or generated assets are used where appropriate so the prototype does not imply real merchant performance or unsupported marketplace statistics.

## What the prototype is intended to show

The proposal is less about adding another feed or another trust badge, and more about reducing the amount of interpretation a new shopper has to do.

The intended progression is:

**more relevant discovery → clearer trust → easier evaluation → lower first-order hesitation → stronger next-mission relevance**

The same trust and proof system is carried across festive, regional, branded, seller-confidence and college-style use cases so the experience stays recognisably Meesho rather than becoming five separate products.
