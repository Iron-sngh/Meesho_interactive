const state = {
  persona: 'college',
  route: 'college-home',
  hotspotMode: false,
  history: []
};

const personas = {
  college: {
    id: 'college',
    title: 'College Style Starter',
    subtitle: 'Aarav · college-going value seeker',
    summary: 'Mission-first homepage for a young shopper looking for affordable fashion, complete looks and proof before purchase.',
    entryRoute: 'college-home',
    tags: ['Guided discovery', 'Men’s fashion', 'Proof-first PDP']
  },
  chhath: {
    id: 'chhath',
    title: 'Chhath Festival Mission',
    subtitle: 'Rohit · Bihar festive shopper',
    summary: 'Regional seasonal discovery that starts from Chhath needs and routes into trusted festive shopping journeys.',
    entryRoute: 'chhath-home',
    tags: ['Regional relevance', 'Festive homepage', 'Basket completion']
  },
  mall: {
    id: 'mall',
    title: 'Meesho Mall for Brands',
    subtitle: 'Kabir · brand-conscious grooming shopper',
    summary: 'A dedicated branded assortment destination that makes provenance and value easy to understand.',
    entryRoute: 'mall-home',
    tags: ['Brand destination', 'Provenance trust', 'Grooming']
  },
  mtrusted: {
    id: 'mtrusted',
    title: 'MTrusted Confidence',
    subtitle: 'Vivek · trust-seeking first-time buyer',
    summary: 'MTrusted explains seller and listing quality with clear evidence rather than unexplained badges.',
    entryRoute: 'mtrusted-home',
    tags: ['Seller confidence', 'Explainable trust', 'Trust routing']
  },
  assam: {
    id: 'assam',
    title: 'Assam Festive Context',
    subtitle: 'Nayan · Assam seasonal shopper',
    summary: 'Contextual homepage with festive discovery, regional merchandising and trust-led progression into PDPs.',
    entryRoute: 'assam-home',
    tags: ['Assam relevance', 'Mission-led home', 'Mall + MTrusted']
  }
};

const routeMeta = {
  'college-home': {
    label: 'Home · College Style',
    title: 'College mission-first homepage',
    persona: 'College Style Starter',
    summary: 'Fresh from-scratch recreation of the reference college homepage. Every major module is clickable, from category entry points to curated rails and trust destinations.',
    keySignals: ['Your Style Edit', 'Category-led discovery', 'Mall and MTrusted trust routes', 'Continue Exploring'],
    kpi: ['Mission taps', 'PDP visits', 'PDP → ATC']
  },
  'assam-home': {
    label: 'Home · Assam Festive',
    title: 'Assam contextual homepage',
    persona: 'Assam Festive Context',
    summary: 'Illustrative Assam festive home that uses context, utility missions and trending products to reduce cold-start friction.',
    keySignals: ['Festive picks', 'What do you need today?', 'Trending in Assam', 'Mall + MTrusted routing'],
    kpi: ['Category engagement', 'Relevant PDP visits', 'First-order conversion']
  },
  'chhath-home': {
    label: 'Home · Bihar Chhath',
    title: 'Bihar Chhath festive homepage',
    persona: 'Chhath Festival Mission',
    summary: 'Built from scratch in the same system to showcase how region and festival can drive more relevant merchandising and quicker mission completion.',
    keySignals: ['Chhath picks', 'Offer-led urgency', 'Mission bundles', 'Trust-qualified products'],
    kpi: ['Festive engagement', 'ATC', 'Basket size']
  },
  'mall-home': {
    label: 'Destination · Meesho Mall',
    title: 'Meesho Mall branded destination',
    persona: 'Meesho Mall for Brands',
    summary: 'A clean branded shopping surface focused on provenance, known brands and value confidence in grooming.',
    keySignals: ['Branded assortment', 'Mall value promise', 'Shop by brand', 'Need-based navigation'],
    kpi: ['Mall → PDP', 'Brand clicks', 'Conversion lift']
  },
  'mtrusted-home': {
    label: 'Destination · MTrusted',
    title: 'MTrusted trust destination',
    persona: 'MTrusted Confidence',
    summary: 'A rebuilt destination that explains why a product qualifies for MTrusted through seller reliability, fulfilment and listing quality.',
    keySignals: ['Why MTrusted?', 'Proof pillars', 'Qualified picks', 'Seller evidence'],
    kpi: ['Why-link CTR', 'Trust comprehension', 'PDP → ATC']
  },
  'category-fashion': {
    label: 'Category · Men’s Fashion',
    title: 'Men’s Fashion category screen',
    persona: 'Shared category flow',
    summary: 'The category screen continues intent capture with sub-categories, filters, trust shortcuts and relevant product clusters.',
    keySignals: ['Category filters', 'MTrusted switch', 'Look-based merchandising'],
    kpi: ['CTR', 'Product shortlist depth', 'ATC']
  },
  'category-grooming': {
    label: 'Category · Men’s Grooming',
    title: 'Men’s Grooming category screen',
    persona: 'Shared category flow',
    summary: 'Grooming category experience used by the Mall flow, featuring branded needs and curated trust shortcuts.',
    keySignals: ['Branded picks', 'Need-based rows', 'Mall value proposition'],
    kpi: ['Need tile CTR', 'Brand CTR', 'PDP visits']
  },
  'category-assam': {
    label: 'Category · Assam Festive',
    title: 'Assam festive product listing',
    persona: 'Assam Festive Context',
    summary: 'A regionally contextual category page for the Assam use case, tying trending needs to qualified products.',
    keySignals: ['Utility segments', 'Trending lists', 'Trust-qualified products'],
    kpi: ['Scroll depth', 'ATC', 'Repeat session relevance']
  },
  'category-chhath': {
    label: 'Category · Chhath Festive',
    title: 'Chhath festive product listing',
    persona: 'Chhath Festival Mission',
    summary: 'A festive category view linking apparel, décor, puja essentials and gifting into one occasion-driven journey.',
    keySignals: ['Occasion segmentation', 'Bundles', 'Offer strips'],
    kpi: ['Bundle engagement', 'AOV', 'Kept order #1']
  },
  search: {
    label: 'Search · Guided',
    title: 'Guided search result',
    persona: 'Shared utility screen',
    summary: 'Search uses the same trust and category framework so users can move from free-text intent to confident product evaluation.',
    keySignals: ['Intent header', 'Result clusters', 'Trust filters'],
    kpi: ['Search reformulation', 'Result CTR', 'PDP visits']
  },
  'pdp-core': {
    label: 'PDP · Proof-first',
    title: 'Proof-first product detail page',
    persona: 'Shared purchase screen',
    summary: 'The PDP is the heart of the system: product facts, seller proof, review intelligence, verified UGC and delivery certainty are all visible before asking for the purchase.',
    keySignals: ['Structured details', 'Seller evidence', 'Customers say', 'Verified buyer media', 'Transaction certainty'],
    kpi: ['PDP → ATC', 'Why-link usage', 'Return confidence']
  },
  'product-details': {
    label: 'PDP · Product details',
    title: 'Full category-specific product details',
    persona: 'Shared purchase screen',
    summary: 'A dedicated information view makes the listing fully judgeable with measurements, material, care, pack quantity and return-relevant facts.',
    keySignals: ['Exact measurements', 'Material and fit', 'Care and pack quantity', 'Expectation setting'],
    kpi: ['Detail views', 'PDP → ATC', 'Lower returns']
  },
  'group-save': {
    label: 'Growth · Share & Save',
    title: 'Share & Save group flow',
    persona: 'Shared growth screen',
    summary: 'An optional social-shopping flow makes the group-price rule explicit while retaining the same product and trust context.',
    keySignals: ['Group price', 'Invite logic', 'Transparent unlock condition'],
    kpi: ['Group creation', 'Incremental orders', 'Revenue uplift']
  },
  'group-created': {
    label: 'Growth · Group created',
    title: 'Group created successfully',
    persona: 'Shared growth screen',
    summary: 'A clear confirmation state closes the Share & Save loop and routes back into purchase.',
    keySignals: ['Share link', 'Participants needed', 'Return to purchase'],
    kpi: ['Invite rate', 'Group completion', 'Checkout conversion']
  },
  'seller-profile': {
    label: 'Trust · Seller profile',
    title: 'Seller profile and credibility',
    persona: 'Shared trust screen',
    summary: 'A dedicated seller screen explains category strength, fulfilment reliability and issue outcomes so the shopper can trust the merchant quickly.',
    keySignals: ['Seller history', 'Fulfilment stats', 'Issue resolution'],
    kpi: ['Seller profile views', 'Back-to-PDP conversion', 'Trust comprehension']
  },
  reviews: {
    label: 'Trust · Review intelligence',
    title: 'Summarised review intelligence',
    persona: 'Shared trust screen',
    summary: 'This screen turns fragmented reviews into scannable signals with traceability to real buyer evidence.',
    keySignals: ['Pros and cons', 'Theme summary', 'Review traceability'],
    kpi: ['Review module CTR', 'Time to confidence', 'ATC']
  },
  'ugc-gallery': {
    label: 'Trust · Buyer UGC',
    title: 'Verified buyer photos and videos',
    persona: 'Shared proof screen',
    summary: 'Real-buyer style content gives a tangible feel for fit, fabric and reality versus listing imagery.',
    keySignals: ['Verified tags', 'Buyer captions', 'Visual proof'],
    kpi: ['UGC CTR', 'Confidence', 'Conversion lift']
  },
  certainty: {
    label: 'Trust · Transaction certainty',
    title: 'Delivery, returns and payment certainty',
    persona: 'Shared proof screen',
    summary: 'Clear delivery, returns and payment information reduces last-mile hesitation at the moment of decision.',
    keySignals: ['Delivery date', 'Returns', 'Refund status'],
    kpi: ['ATC → Order', 'Cancellation rate', 'Return expectations']
  },
  'pdp-growth': {
    label: 'PDP · Mission expansion',
    title: 'Mission expansion and basket growth',
    persona: 'Shared growth screen',
    summary: 'After the base SKU earns confidence, this lower-PDP system helps the user complete the mission, explore adjacent styles and opt into group savings.',
    keySignals: ['Complete the look', 'Similar styles', 'Share & Save', 'Mall + MTrusted explainers'],
    kpi: ['AOV', 'Items per order', 'Category expansion']
  },
  'mall-explainer': {
    label: 'Trust · Meesho Mall',
    title: 'Meesho Mall explanation',
    persona: 'Shared trust screen',
    summary: 'Explains that Meesho Mall is a branded assortment destination for provenance-sensitive shopping missions.',
    keySignals: ['Known brands', 'Clear source', 'Value confidence'],
    kpi: ['Mall comprehension', 'Mall → PDP', 'Brand conversion']
  },
  'mtrusted-explainer': {
    label: 'Trust · MTrusted',
    title: 'MTrusted explanation',
    persona: 'Shared trust screen',
    summary: 'Explains MTrusted as organised seller and listing evidence that makes marketplace trust legible.',
    keySignals: ['Seller quality', 'Fulfilment reliability', 'Listing completeness'],
    kpi: ['Comprehension', 'Trust uplift', 'ATC lift']
  },
  cart: {
    label: 'Purchase · Cart',
    title: 'Cart and shortlist',
    persona: 'Shared conversion screen',
    summary: 'A lightweight cart with trust reminders and clear price presentation.',
    keySignals: ['Order value clarity', 'Trust footer', 'Proceed to checkout'],
    kpi: ['Cart → Checkout', 'Drop-off', 'Average cart value']
  },
  checkout: {
    label: 'Purchase · Checkout',
    title: 'Checkout confirmation',
    persona: 'Shared conversion screen',
    summary: 'A simplified checkout demonstrating address, payment, fulfilment and final trust reassurance.',
    keySignals: ['Address certainty', 'Payment choice', 'Delivery promise'],
    kpi: ['Checkout completion', 'Payment success', 'Cancellation risk']
  },
  'order-placed': {
    label: 'Purchase · Success',
    title: 'Order confirmation',
    persona: 'Shared post-purchase screen',
    summary: 'Final confirmation reinforces trust and gives a path to orders and continued shopping.',
    keySignals: ['Order status', 'Track order', 'Explore more'],
    kpi: ['Order completion', 'Return visits', 'Repeat purchase']
  },
  categories: {
    label: 'Navigation · Categories',
    title: 'Category directory',
    persona: 'Shared navigation screen',
    summary: 'A clean category directory that routes every persona into the right category or use-case flow.',
    keySignals: ['Multi-entry navigation', 'Use-case routing', 'Theme continuity'],
    kpi: ['Category taps', 'Navigation success', 'Route coverage']
  },
  account: {
    label: 'Navigation · Account',
    title: 'Account and saved shortcuts',
    persona: 'Shared navigation screen',
    summary: 'A lightweight account area to demonstrate that the global nav is interactive too.',
    keySignals: ['Saved items', 'Region & language', 'Recent orders'],
    kpi: ['Navigation coverage', 'Order revisit', 'Profile actions']
  },
  orders: {
    label: 'Navigation · My orders',
    title: 'Order history screen',
    persona: 'Shared navigation screen',
    summary: 'My Orders demonstrates post-purchase continuity and makes the bottom navigation fully functional.',
    keySignals: ['Order cards', 'Status badges', 'Re-order'],
    kpi: ['Repeat purchase', 'Support confidence', 'Order tracking']
  },
  wishlist: {
    label: 'Navigation · Wishlist',
    title: 'Saved products wishlist',
    persona: 'Shared navigation screen',
    summary: 'Saved products can be revisited, adding continuity to browsing and list-building behavior.',
    keySignals: ['Saved products', 'Back-to-PDP'],
    kpi: ['Save rate', 'Return to saved items', 'Wishlist → cart']
  }
};


const $ = (s) => document.querySelector(s);
const deviceCanvas = $('#device-canvas');
const detailPanel = $('#detail-panel');
const stageLabel = $('#stage-label');
const toastEl = $('#toast');

function money(v) { return `₹${v}`; }

function vectorArt(token, variant = 0) {
  const art = {
    '👔': `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M37 23 50 16h20l13 7 19 20-14 13-9-9v53H41V47l-9 9-14-13 19-20Z" fill="#20242d"/><path d="M50 16 60 30l10-14" fill="#fff" opacity=".9"/><path d="M60 30v70" stroke="#555d6b" stroke-width="2"/><circle cx="61" cy="45" r="2" fill="#d4d8df"/><circle cx="61" cy="58" r="2" fill="#d4d8df"/><circle cx="61" cy="71" r="2" fill="#d4d8df"/></svg>`,
    '👖': `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M40 16h40l5 82-20 4-5-55-5 55-20-4 5-82Z" fill="#343843"/><path d="M43 26h34" stroke="#676d78" stroke-width="3"/><path d="M60 17v31" stroke="#6d737e" stroke-width="2"/></svg>`,
    '👟': `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M20 72c10 0 18-4 27-17l9-13 11 7c5 4 8 11 15 14l20 8c7 3 8 14 1 19-5 4-69 5-83 2-9-2-9-18 0-20Z" fill="#fff" stroke="#d8dce4" stroke-width="3"/><path d="M38 67h39M43 60h30M33 75h45" stroke="#c7cbd3" stroke-width="3"/><path d="M19 88h86" stroke="#9da4b0" stroke-width="4"/></svg>`,
    '🎒': `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M40 31c2-12 10-18 20-18s18 6 20 18" fill="none" stroke="#6e557d" stroke-width="6"/><rect x="30" y="28" width="60" height="73" rx="17" fill="#563e66"/><rect x="38" y="62" width="44" height="28" rx="10" fill="#7d648f"/><path d="M48 41h24" stroke="#d7c9df" stroke-width="4"/></svg>`,
    '⌚': `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M49 10h22l5 27H44l5-27Zm-5 73h32l-5 27H49l-5-27Z" fill="#2a2d38"/><circle cx="60" cy="60" r="29" fill="#242832" stroke="#aaa4bc" stroke-width="5"/><circle cx="60" cy="60" r="22" fill="#f9f7fb"/><path d="M60 47v15l10 7" stroke="#7a4e8e" stroke-width="4" stroke-linecap="round"/></svg>`,
    '🧥': `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M37 22 52 15h16l15 7 19 24-15 11-9-12v56H42V45l-9 12-15-11 19-24Z" fill="#65705d"/><path d="M52 15 60 32l8-17" fill="#efe9df"/><path d="M60 32v69" stroke="#919c88" stroke-width="2"/><path d="M44 61h13M63 61h13" stroke="#adb7a5" stroke-width="3"/></svg>`,
    '👜': `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M39 40c0-16 8-26 21-26s21 10 21 26" fill="none" stroke="#b06b8e" stroke-width="6"/><path d="M25 38h70l-7 65H32l-7-65Z" fill="#e3a7c3"/><path d="M45 54h30" stroke="#fff" stroke-width="4"/></svg>`,
    '🏋️': `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M38 28 51 18h18l13 10 13 17-13 9-7-9v57H45V45l-7 9-13-9 13-17Z" fill="#9d7fa8"/><path d="M51 18 60 31l9-13" fill="#fff" opacity=".85"/><rect x="54" y="48" width="12" height="29" rx="6" fill="#f4e9f2"/></svg>`,
    '👗': `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M49 13h22l6 24-9 10 20 53H32l20-53-9-10 6-24Z" fill="#d9579b"/><path d="M49 13c0 12 22 12 22 0" fill="#f5b8d5"/><path d="M45 65h30" stroke="#f5c8df" stroke-width="3"/></svg>`,
    '🧴': `<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="45" y="12" width="30" height="15" rx="4" fill="#334f77"/><rect x="39" y="25" width="42" height="78" rx="13" fill="#8fc7d8"/><rect x="45" y="45" width="30" height="28" rx="8" fill="#f6fafb"/><path d="M49 57h22M52 64h16" stroke="#56879c" stroke-width="3"/></svg>`,
    '🪒': `<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="31" y="18" width="58" height="22" rx="8" fill="#4d5d7a"/><rect x="44" y="36" width="32" height="11" rx="5" fill="#9aa8bd"/><path d="M54 45h12l7 55H47l7-55Z" fill="#e7e9ee" stroke="#9299a6" stroke-width="2"/></svg>`,
    '🧔': `<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="48" r="24" fill="#e5b18e"/><path d="M36 48c3-28 45-35 50-3-12-6-19-16-30-8-7 5-12 11-20 11Z" fill="#2e2a2a"/><path d="M39 56c5 28 12 45 21 45s16-17 21-45c-11 11-31 11-42 0Z" fill="#4a3731"/><circle cx="52" cy="49" r="2"/><circle cx="68" cy="49" r="2"/></svg>`,
    '🌿': `<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="43" y="21" width="34" height="14" rx="4" fill="#315949"/><rect x="38" y="33" width="44" height="69" rx="11" fill="#9bc8ae"/><path d="M51 57c15-2 24-12 29-26-1 18-8 33-26 41-6 3-9-10-3-15Z" fill="#407b5c"/></svg>`,
    '🎁': `<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="19" y="46" width="82" height="58" rx="8" fill="#ec6c89"/><rect x="16" y="36" width="88" height="18" rx="7" fill="#f49eb1"/><rect x="55" y="36" width="10" height="68" fill="#fff2d9"/><path d="M60 36c-28 0-29-24-11-22 11 1 11 22 11 22Zm0 0c28 0 29-24 11-22-11 1-11 22-11 22Z" fill="#fff2d9"/></svg>`,
    '✨': `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M60 13 68 44 98 52 68 60 60 91 52 60 22 52 52 44 60 13Z" fill="#ffc94d"/><path d="M92 75 96 89 110 93 96 97 92 111 88 97 74 93 88 89 92 75Z" fill="#f492c1"/></svg>`,
    '🍽️': `<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="62" r="36" fill="#f7eee2" stroke="#c8a885" stroke-width="4"/><circle cx="60" cy="62" r="22" fill="#fffaf2" stroke="#dbc4aa" stroke-width="3"/><path d="M21 25v77M99 25v77M13 42h16M91 42h16" stroke="#7c6b5d" stroke-width="4"/></svg>`,
    '🧳': `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M48 27V16h24v11" fill="none" stroke="#675579" stroke-width="6"/><rect x="26" y="27" width="68" height="73" rx="14" fill="#8b6b9d"/><path d="M60 28v72M36 50h48" stroke="#c7b1d3" stroke-width="3"/><circle cx="42" cy="104" r="5" fill="#4b4055"/><circle cx="78" cy="104" r="5" fill="#4b4055"/></svg>`,
    '👘': `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M37 20 52 12h16l15 8 15 25-13 10-9-11v59H44V44l-9 11-13-10 15-25Z" fill="#d98d52"/><path d="M52 12 60 29l8-17" fill="#fff0d5"/><path d="M60 29v74" stroke="#f1bc85" stroke-width="3"/><path d="M45 62h30" stroke="#f7d6ae" stroke-width="3"/></svg>`,
    '🏠': `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M18 58 60 21l42 37v48H18V58Z" fill="#d9b09d"/><path d="M35 104V66h50v38" fill="#f4e4da"/><rect x="50" y="72" width="20" height="32" rx="4" fill="#a77867"/><path d="M12 60 60 17l48 43" fill="none" stroke="#8e675b" stroke-width="6"/></svg>`,
    '📷': `<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="19" y="33" width="82" height="58" rx="13" fill="#6f557d"/><path d="M42 33l7-12h22l7 12" fill="#8e6e9f"/><circle cx="60" cy="62" r="19" fill="#f5ecf8"/><circle cx="60" cy="62" r="11" fill="#b994c5"/></svg>`,
    '🎥': `<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="17" y="33" width="66" height="55" rx="12" fill="#6f557d"/><path d="m83 49 22-12v48L83 72V49Z" fill="#b78dc7"/><circle cx="49" cy="60" r="13" fill="#f4edf7"/></svg>`
  };
  return art[token] || `<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="18" y="18" width="84" height="84" rx="24" fill="#efe8f4"/><circle cx="60" cy="60" r="26" fill="#cfb6db"/><path d="M42 62h36" stroke="#8a6799" stroke-width="6" stroke-linecap="round"/></svg>`;
}

function productCard({ title, price, oldPrice = '', rating = '4.4', ratingCount = '8.1K', meta = '', art = '•', route = 'pdp-core', badge = '', badge2 = '' }) {
  return `
    <button class="product-card" data-go="${route}">
      <div class="product-image">${vectorArt(art)}
        <div class="product-badges">
          ${badge ? `<span class="badge-pill">${badge}</span>` : ''}
          ${badge2 ? `<span class="tiny-pill">${badge2}</span>` : ''}
        </div>
        <span class="favorite-tag">♡</span>
      </div>
      <b>${title}</b>
      ${meta ? `<div class="product-meta">${meta}</div>` : ''}
      <div class="price-row">
        <span class="price">${money(price)}</span>
        ${oldPrice ? `<span class="old-price">${money(oldPrice)}</span>` : ''}
      </div>
      <div class="rating">★ <b>${rating}</b> (${ratingCount})</div>
    </button>
  `;
}

function categoryCard({ icon, title, subtitle, route }) {
  return `
    <button class="category-card" data-go="${route}">
      <div class="art-box">${vectorArt(icon)}</div>
      <b>${title}</b>
      <span>${subtitle}</span>
    </button>
  `;
}

function sectionHeader(title, subtitle, actionLabel, actionRoute) {
  return `
    <div class="section-header">
      <div>
        <h3>${title}</h3>
        ${subtitle ? `<p>${subtitle}</p>` : ''}
      </div>
      ${actionLabel ? `<button class="link-action" ${actionRoute ? `data-go="${actionRoute}"` : ''}>${actionLabel}</button>` : ''}
    </div>
  `;
}

function appBar({ brand = true, title = '', subtitle = '', searchText = 'Search products, categories or needs', chips = [], backRoute = '' }) {
  const left = brand
    ? `<div class="brand-wordmark">meesho</div>`
    : `<div class="profile-chip appbar-title">${backRoute ? `<button class="circle-icon" data-action="back" data-back-fallback="${backRoute}" aria-label="Back">←</button>` : ''}<div class="appbar-title-copy"><div class="appbar-title-main">${title}</div>${subtitle ? `<div class="appbar-subtitle">${subtitle}</div>` : ''}</div></div>`;
  return `
    <div class="top-appbar">
      <div class="appbar-row">
        ${left}
        <div class="icon-row">
          <button class="circle-icon" data-go="search">⌕</button>
          <button class="circle-icon" data-go="wishlist">♡</button>
          <button class="ghost-icon" data-go="cart">🛒</button>
        </div>
      </div>
      ${brand ? `
        <div class="profile-chip" style="margin-top:10px;justify-content:space-between;">
          <div class="profile-chip"><span class="avatar">👤</span> Hello, A</div>
          <button class="badge-pill" data-go="account">KYC Safe</button>
        </div>
      ` : ''}
      <button class="search-shell" data-go="search">
        <span>⌕</span>
        <span>${searchText}</span>
      </button>
      ${chips.length ? `<div class="utility-chips">${chips.map(c => `<button class="utility-chip" ${c.route ? `data-go="${c.route}"` : ''}>${c.label}</button>`).join('')}</div>` : ''}
    </div>
  `;
}

function bottomNav(active = 'home') {
  const items = [
    { id: 'home', label: 'Home', icon: '⌂', route: state.persona === 'assam' ? 'assam-home' : state.persona === 'chhath' ? 'chhath-home' : state.persona === 'mall' ? 'mall-home' : state.persona === 'mtrusted' ? 'mtrusted-home' : 'college-home' },
    { id: 'categories', label: 'Categories', icon: '▦', route: 'categories' },
    { id: 'orders', label: 'My Orders', icon: '☰', route: 'orders' },
    { id: 'account', label: 'Account', icon: '◎', route: 'account' }
  ];
  return `
    <div class="navbar">
      <div class="navbar-grid">
        ${items.map(item => `
          <button class="nav-item ${active === item.id ? 'active' : ''}" data-go="${item.route}">
            <span class="nav-glyph">${item.icon}</span>
            <span>${item.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function ctaBar(primary, secondary = { label: 'Add to cart', route: 'cart' }) {
  return `
    <div class="bottom-cta">
      <div class="cta-bar">
        <button class="cta-button" data-go="${secondary.route}">${secondary.label}</button>
        <button class="cta-button primary" data-go="${primary.route}">${primary.label}</button>
      </div>
    </div>
  `;
}

function phoneTemplate({ content, nav = 'home', ctas = '', scrollClass = '' }) {
  const hasCta = Boolean(ctas);
  return `
    <div class="phone-shell ${scrollClass} ${hasCta ? 'has-cta' : ''}">
      <div class="phone-notch"></div>
      <div class="phone-status">
        <span>9:41</span>
        <div class="status-icons"><span>⋮⋮</span><span class="status-dot"></span><span class="status-bar"></span></div>
      </div>
      <div class="phone-content">
        <div class="screen-root">${content}</div>
      </div>
      ${ctas}
      ${bottomNav(nav)}
    </div>
  `;
}

function trustTwinCards() {
  return `
    <div class="two-up">
      <button class="trust-card" data-go="mtrusted-explainer" style="padding:14px; text-align:left;">
        <h4>MTrusted</h4>
        <p>Marketplace-quality picks with seller proof, fulfilment confidence and listing quality checks.</p>
        <div class="pill-row"><span class="subtle-pill">Why MTrusted?</span></div>
      </button>
      <button class="trust-card" data-go="mall-explainer" style="padding:14px; text-align:left;">
        <h4>Meesho Mall</h4>
        <p>Brands and source confidence in a single, recognisable destination for provenance-sensitive shopping.</p>
        <div class="pill-row"><span class="subtle-pill">Explore Mall</span></div>
      </button>
    </div>
  `;
}

function collegeHome() {
  return phoneTemplate({
    nav: 'home',
    content: `
      ${appBar({
        brand: true,
        searchText: 'Search products, categories or needs',
        chips: [
          { label: 'Easy Returns', route: 'certainty' },
          { label: 'Cash on Delivery', route: 'certainty' },
          { label: 'Transparent Pricing', route: 'certainty' }
        ]
      })}
      <section class="screen-section">
        ${sectionHeader('Shop by Category', 'Find what you need faster by entering through a relevant category.', 'See all', 'categories')}
        <div class="category-grid">
          ${categoryCard({ icon: '👔', title: 'Men’s Fashion', subtitle: 'Shirts · Jeans', route: 'category-fashion' })}
          ${categoryCard({ icon: '👗', title: 'Women’s Fashion', subtitle: 'Ethnic · Fusion', route: 'category-chhath' })}
          ${categoryCard({ icon: '👞', title: 'Footwear', subtitle: 'Casual · Sports', route: 'category-fashion' })}
          ${categoryCard({ icon: '🧴', title: 'Grooming', subtitle: 'Skincare · Haircare', route: 'category-grooming' })}
          ${categoryCard({ icon: '⌚', title: 'Electronics', subtitle: 'Accessories', route: 'search' })}
          ${categoryCard({ icon: '🏋️', title: 'Sports & Fitness', subtitle: 'Active essentials', route: 'search' })}
          ${categoryCard({ icon: '🪑', title: 'Home Utility', subtitle: 'Kitchen · Storage', route: 'search' })}
          ${categoryCard({ icon: '🎁', title: 'Gifting', subtitle: 'Budget finds', route: 'search' })}
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('Your Style Edit', 'Casual · College · Office · Occasion', 'See all', 'category-fashion')}
        <div class="hero-banner purple">
          <span class="eyebrow-inline">Curated for campus</span>
          <h2>Upgrade your everyday style</h2>
          <p>Affordable shirts, chinos, sneakers and accessories for class, hangouts and everyday dressing.</p>
          <button class="hero-cta" data-go="category-fashion">Shop Your Style →</button>
          <span class="hero-badge">College · Office · Everyday</span>
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('For Your Style', 'Recommended products aligned to your guided mission.', 'See all', 'category-fashion')}
        <div class="four-up">
          ${productCard({ title: 'Casual Checked Shirt', price: 299, oldPrice: 449, art: '👔', route: 'pdp-core', badge: 'MTrusted' })}
          ${productCard({ title: 'Slim Fit Jeans', price: 499, oldPrice: 699, art: '👖', route: 'pdp-core' })}
          ${productCard({ title: 'Everyday Sneakers', price: 699, oldPrice: 999, art: '👟', route: 'pdp-core', badge: 'Top rated' })}
          ${productCard({ title: 'Minimal Backpack', price: 499, oldPrice: 749, art: '🎒', route: 'pdp-core' })}
        </div>
      </section>

      <section class="screen-section">
        ${trustTwinCards()}
      </section>

      <section class="screen-section">
        ${sectionHeader('Continue Exploring', 'Bundles, style adjacency and more budget-smart picks.', 'See all', 'search')}
        <div class="four-up">
          ${productCard({ title: 'Analog Watch', price: 399, oldPrice: 599, art: '⌚', route: 'pdp-core' })}
          ${productCard({ title: 'Overshirt Jacket', price: 749, oldPrice: 999, art: '🧥', route: 'pdp-core', badge2: 'Less returned' })}
          ${productCard({ title: 'College Tote', price: 329, art: '👜', route: 'pdp-core' })}
          ${productCard({ title: 'Gym Tee Combo', price: 349, art: '🏋️', route: 'pdp-core' })}
        </div>
      </section>
    `
  });
}

function assamHome() {
  return phoneTemplate({
    nav: 'home',
    content: `
      ${appBar({
        brand: true,
        searchText: 'Search products, categories or needs',
        chips: [
          { label: 'Assam · Seasonal', route: 'category-assam' },
          { label: 'Language parity', route: 'search' },
          { label: 'Trust shortcuts', route: 'mtrusted-explainer' }
        ]
      })}

      <section class="screen-section">
        <div class="hero-banner orange">
          <span class="eyebrow-inline">Festive picks for Assam</span>
          <h2>Celebration looks, gifting and home essentials curated for the season</h2>
          <button class="hero-cta" data-go="category-assam">Explore festive picks →</button>
          <span class="hero-badge">Illustrative regional personalisation</span>
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('What do you need today?', 'Choose a mission, discover faster — or browse freely.', '', '')}
        <div class="three-up">
          <button class="promo-card" data-go="category-assam"><h4>Festive Style</h4><p>Celebration looks under ₹699.</p><div class="pill-row"><span class="badge-pill">Apparel</span><span class="subtle-pill">Puja-ready</span></div></button>
          <button class="promo-card" data-go="category-grooming"><h4>Self-Care</h4><p>Grooming picks under ₹499.</p><div class="pill-row"><span class="badge-pill">Beauty</span><span class="subtle-pill">Ready-to-gift</span></div></button>
          <button class="promo-card" data-go="search"><h4>Home Utility</h4><p>Travel and tech essentials under ₹349.</p><div class="pill-row"><span class="badge-pill">Utility</span><span class="subtle-pill">Practical</span></div></button>
        </div>
        <div class="three-up" style="margin-top:10px;">
          <button class="promo-card" data-go="category-fashion"><h4>Everyday Style</h4><p>Basic casuals and easy wardrobe upgrades.</p></button>
          <button class="promo-card" data-go="search"><h4>Active</h4><p>Sports and fitness essentials for daily use.</p></button>
          <button class="promo-card" data-go="search"><h4>Gifting</h4><p>Budget gifting picks for friends and family.</p></button>
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('Trending in Assam', 'Popular products & categories shaped by regional context.', 'See all', 'category-assam')}
        <div class="four-up">
          ${productCard({ title: 'Men’s Kurta', price: 429, art: '🧵', route: 'pdp-core', badge: 'Festive' })}
          ${productCard({ title: 'Casual Shoes', price: 449, art: '👟', route: 'pdp-core' })}
          ${productCard({ title: 'Grooming Kit', price: 249, art: '🧴', route: 'pdp-core' })}
          ${productCard({ title: 'Home Decor Set', price: 199, art: '🏠', route: 'pdp-core' })}
        </div>
      </section>

      <section class="screen-section">
        ${trustTwinCards()}
      </section>
    `
  });
}

function chhathHome() {
  return phoneTemplate({
    nav: 'home',
    content: `
      ${appBar({
        brand: true,
        searchText: 'Search festive looks, gifting or puja needs',
        chips: [
          { label: 'Bihar · Chhath', route: 'category-chhath' },
          { label: 'Seasonal offers', route: 'category-chhath' },
          { label: 'Trusted picks', route: 'mtrusted-home' }
        ]
      })}
      <section class="screen-section">
        <div class="hero-banner orange">
          <span class="eyebrow-inline">Chhath special</span>
          <h2>Festive offers for the Chhath season</h2>
          <p>Occasion-led shopping for outfits, puja décor, gifting and home preparation — all in one place.</p>
          <button class="hero-cta" data-go="category-chhath">Shop Chhath picks →</button>
          <span class="hero-badge">Bihar regional festive mission</span>
        </div>
      </section>
      <section class="screen-section">
        ${sectionHeader('Shop by need', 'Start with the mission you want to complete.', '', '')}
        <div class="two-up">
          <button class="promo-card" data-go="category-chhath"><h4>Festive Fashion</h4><p>Sarees, kurtas and celebration outfits curated for Chhath gatherings.</p><div class="pill-row"><span class="badge-pill">Popular</span><span class="subtle-pill">Offer zone</span></div></button>
          <button class="promo-card" data-go="category-chhath"><h4>Puja & Home Décor</h4><p>Thali, décor accents, lights and useful home essentials.</p><div class="pill-row"><span class="badge-pill">Mission bundle</span></div></button>
        </div>
        <div class="two-up" style="margin-top:10px;">
          <button class="promo-card" data-go="search"><h4>Gift Picks</h4><p>Shareable gifting ideas for family visits and festival moments.</p></button>
          <button class="promo-card" data-go="search"><h4>Travel & Utility</h4><p>Travel pouches, bottles and value essentials for seasonal movement.</p></button>
        </div>
      </section>
      <section class="screen-section">
        ${sectionHeader('Festive favourites', 'Qualified listings with value-led merchandising.', 'See all', 'category-chhath')}
        <div class="four-up">
          ${productCard({ title: 'Printed Kurta Set', price: 699, oldPrice: 999, art: '👘', route: 'pdp-core', badge: 'Mall' })}
          ${productCard({ title: 'Decor Light String', price: 179, art: '✨', route: 'pdp-core' })}
          ${productCard({ title: 'Serving Tray Set', price: 249, art: '🍽️', route: 'pdp-core', badge2: 'Top rated' })}
          ${productCard({ title: 'Travel Pouch Combo', price: 229, art: '🧳', route: 'pdp-core' })}
        </div>
      </section>
      <section class="screen-section">${trustTwinCards()}</section>
    `
  });
}

function mallHome() {
  return phoneTemplate({
    nav: 'home',
    content: `
      ${appBar({
        brand: false,
        title: 'MEN’S GROOMING',
        subtitle: 'Self care · Men’s Grooming',
        searchText: 'Search in Men’s Grooming',
        chips: [
          { label: 'Shop by Trust', route: 'mall-home' },
          { label: 'Meesho Mall', route: 'mall-home' },
          { label: 'MTrusted', route: 'mtrusted-home' }
        ],
        backRoute: 'categories'
      })}

      <section class="screen-section">
        <div class="hero-banner mall">
          <span class="eyebrow-inline">Meesho Mall</span>
          <h2>Brands you know. Value you expect.</h2>
          <p>Shop branded grooming from curated sellers, with clear source confidence and price-value framing.</p>
          <div class="pill-row" style="margin-top:12px;"><span class="tiny-pill">Original brands</span><span class="tiny-pill">Mall authorised seller</span></div>
          <button class="hero-cta" data-go="mall-explainer">What does Mall mean? →</button>
        </div>
      </section>

      <section class="screen-section">
        <div class="three-up">
          <button class="value-tile" data-go="mall-explainer"><b>Brand confidence</b><span>Known brands reduce source-checking.</span></button>
          <button class="value-tile" data-go="mall-explainer"><b>Authorised sellers</b><span>Products from verified brand-linked sources.</span></button>
          <button class="value-tile" data-go="mall-explainer"><b>Value on trusted brands</b><span>Brand discovery with price-value context.</span></button>
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('Shop your brand', 'Trusted brand entries for faster grooming discovery.', 'See all', 'category-grooming')}
        <div class="shop-by-brand">
          ${['Nivea', 'Dabur', 'Mamaearth', 'Bombay Shaving', 'Himalaya', 'Ponds', 'L’Oréal', 'Beardo'].map(name => `<button class="brand-logo" data-go="category-grooming">${name}</button>`).join('')}
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('Shop branded grooming by need', 'Find the exact sub-mission you want to complete.', '', '')}
        <div class="brand-need-grid">
          ${[
            ['🪒', 'Shaving', 'Razors · cream'],
            ['🧴', 'Face care', 'Cleansers · serums'],
            ['💇', 'Beard care', 'Beard oil · wash'],
            ['🌿', 'Fragrance', 'Daily freshness']
          ].map(([icon, title, sub]) => `<button class="need-tile" data-go="category-grooming"><div class="need-art">${icon}</div><b>${title}</b><span>${sub}</span></button>`).join('')}
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('Branded picks for you', 'Mall-qualified assortment for grooming routines.', 'See all', 'category-grooming')}
        <div class="four-up">
          ${productCard({ title: 'Daily Face Wash', price: 199, art: '🧴', route: 'pdp-core', badge: 'Mall' })}
          ${productCard({ title: 'Beard Oil Kit', price: 249, art: '🧔', route: 'pdp-core', badge: 'Mall' })}
          ${productCard({ title: 'Shaving Foam Duo', price: 279, art: '🪒', route: 'pdp-core', badge: 'Mall' })}
          ${productCard({ title: 'Deo Body Spray', price: 179, art: '🌿', route: 'pdp-core', badge: 'Mall' })}
        </div>
      </section>
    `
  });
}

function mtrustedHome() {
  return phoneTemplate({
    nav: 'home',
    content: `
      ${appBar({
        brand: false,
        title: 'MEN’S FASHION',
        subtitle: 'Fashion · Men’s Fashion',
        searchText: 'Search in Men’s Fashion',
        chips: [
          { label: 'Shop by Trust', route: 'mtrusted-home' },
          { label: 'Meesho Mall', route: 'mall-home' },
          { label: 'MTrusted', route: 'mtrusted-home' }
        ],
        backRoute: 'category-fashion'
      })}

      <section class="screen-section">
        <div class="hero-banner purple">
          <span class="eyebrow-inline">MTrusted picks</span>
          <h2>Shop with stronger seller confidence</h2>
          <p>Discover products from listings where seller reliability and marketplace-quality signals are easier to understand.</p>
          <button class="hero-cta" data-go="mtrusted-explainer">Why MTrusted? →</button>
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('What MTrusted helps you answer', '', '', '')}
        <div class="four-up">
          ${[
            ['Reliable seller?', 'Seller track record'],
            ['Can I rely on fulfilment?', 'Reliable fulfilment'],
            ['Will the product issue me?', 'Product issue history'],
            ['Is the listing clear?', 'Complete listing proof']
          ].map(([h, s]) => `<button class="need-tile" data-go="mtrusted-explainer"><div class="need-art">✓</div><b>${h}</b><span>${s}</span></button>`).join('')}
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('What matters to you?', '', '', '')}
        <div class="chip-row">
          ${['Complete return info', 'Strong category history', 'Low issue signals', 'Reliable fulfilment'].map(label => `<button class="filter-chip" data-go="mtrusted-explainer">${label}</button>`).join('')}
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('MTrusted in men’s fashion', 'Qualified products based on seller and listing signals.', 'See all', 'category-fashion')}
        <div class="four-up">
          ${productCard({ title: 'Basic Polo T-Shirt', price: 239, art: '👕', route: 'pdp-core', badge: 'MTrusted' })}
          ${productCard({ title: 'Striped Shirt', price: 549, art: '👔', route: 'pdp-core', badge: 'MTrusted' })}
          ${productCard({ title: 'Formal Shirt', price: 299, art: '🧵', route: 'pdp-core', badge: 'MTrusted' })}
          ${productCard({ title: 'Casual Trousers', price: 449, art: '👖', route: 'pdp-core', badge: 'MTrusted' })}
        </div>
      </section>

      <section class="screen-section">
        <div class="two-up">
          <button class="promo-card" data-go="mtrusted-explainer"><h4>Why this product is MTrusted</h4><p>Eligible seller in men’s fashion, stable fulfilment history and better listing completeness.</p></button>
          <button class="promo-card" data-go="seller-profile"><h4>About the seller</h4><p>XYZ Fashion has strong category performance and a reliable buyer experience.</p></button>
        </div>
      </section>
    `
  });
}

function categoryFashion() {
  return phoneTemplate({
    nav: 'categories',
    content: `
      ${appBar({
        brand: false,
        title: 'MEN’S FASHION',
        subtitle: 'Category · curated for your style mission',
        searchText: 'Search in Men’s Fashion',
        chips: [
          { label: 'Casual', route: 'category-fashion' },
          { label: 'Office', route: 'category-fashion' },
          { label: 'Meesho Mall', route: 'mall-home' },
          { label: 'MTrusted', route: 'mtrusted-home' }
        ],
        backRoute: state.persona === 'assam' ? 'assam-home' : 'college-home'
      })}
      <section class="screen-section">
        ${sectionHeader('Your style filters', 'Focused, explainable discovery rather than endless feed-first scrolling.', '', '')}
        <div class="chip-row">
          ${['Casual', 'College', 'Everyday', 'Low to high price', 'Top rated', 'MTrusted first'].map(label => `<button class="filter-chip ${label === 'College' || label === 'MTrusted first' ? 'active' : ''}" data-go="category-fashion">${label}</button>`).join('')}
        </div>
      </section>
      <section class="screen-section">
        ${sectionHeader('Mission picks', 'Items aligned to casual/college intent.', '', '')}
        <div class="two-up">
          ${productCard({ title: 'Regular Fit Black Shirt', price: 313, art: '👔', route: 'pdp-core', badge: 'Top rated', badge2: 'Less returned' })}
          ${productCard({ title: 'Regular Fit Trousers', price: 449, art: '👖', route: 'pdp-core' })}
          ${productCard({ title: 'Casual Sneakers', price: 699, art: '👟', route: 'pdp-core' })}
          ${productCard({ title: 'Linen Blend Shirt', price: 378, art: '🧵', route: 'pdp-core', badge: 'MTrusted' })}
        </div>
      </section>
      <section class="screen-section">
        ${sectionHeader('Trust destinations', 'Jump into the right trust system based on what you need answered.', '', '')}
        ${trustTwinCards()}
      </section>
    `
  });
}

function categoryGrooming() {
  return phoneTemplate({
    nav: 'categories',
    content: `
      ${appBar({
        brand: false,
        title: 'MEN’S GROOMING',
        subtitle: 'Category · branded grooming',
        searchText: 'Search in Men’s Grooming',
        chips: [
          { label: 'Face care', route: 'category-grooming' },
          { label: 'Shaving', route: 'category-grooming' },
          { label: 'Meesho Mall', route: 'mall-home' },
          { label: 'MTrusted', route: 'mtrusted-home' }
        ],
        backRoute: 'mall-home'
      })}
      <section class="screen-section">
        ${sectionHeader('Need-based rails', 'Choose the exact grooming task you want to complete.', '', '')}
        <div class="four-up">
          ${['🪒','🧴','🧔','🌿'].map((icon, idx) => `<button class="need-tile" data-go="category-grooming"><div class="need-art">${icon}</div><b>${['Shaving','Face Care','Beard Care','Fragrance'][idx]}</b><span>${['Razors & cream','Wash & serum','Oils & balms','Freshness'][idx]}</span></button>`).join('')}
        </div>
      </section>
      <section class="screen-section">
        ${sectionHeader('Branded bestsellers', 'Mall-aligned products with clear brand provenance.', '', '')}
        <div class="two-up">
          ${productCard({ title: 'Foaming Face Wash', price: 199, art: '🧴', route: 'pdp-core', badge: 'Mall' })}
          ${productCard({ title: 'Shaving Essentials Kit', price: 349, art: '🪒', route: 'pdp-core', badge: 'Mall' })}
          ${productCard({ title: 'Beard Grooming Oil', price: 259, art: '🧔', route: 'pdp-core', badge: 'Mall' })}
          ${productCard({ title: 'Body Spray', price: 219, art: '🌿', route: 'pdp-core', badge: 'Mall' })}
        </div>
      </section>
    `
  });
}

function categoryAssam() {
  return phoneTemplate({
    nav: 'categories',
    content: `
      ${appBar({ brand: false, title: 'ASSAM FESTIVE PICKS', subtitle: 'Contextual category listing', searchText: 'Search festive picks in Assam', chips: [ {label: 'Festive'}, {label: 'Utility'}, {label: 'MTrusted', route:'mtrusted-home'} ], backRoute: 'assam-home' })}
      <section class="screen-section">
        ${sectionHeader('Festive product clusters', 'Merchandised for seasonal discovery, with clear trust shortcuts.', '', '')}
        <div class="two-up">
          ${productCard({ title: 'Printed Festive Kurta', price: 499, art: '🧵', route: 'pdp-core', badge: 'Festive' })}
          ${productCard({ title: 'Glow Decor Set', price: 299, art: '✨', route: 'pdp-core' })}
          ${productCard({ title: 'Self-care gift box', price: 449, art: '🎁', route: 'pdp-core', badge: 'Mall' })}
          ${productCard({ title: 'Travel Utility Kit', price: 249, art: '🧳', route: 'pdp-core' })}
        </div>
      </section>
      <section class="screen-section">${trustTwinCards()}</section>
    `
  });
}

function categoryChhath() {
  return phoneTemplate({
    nav: 'categories',
    content: `
      ${appBar({ brand: false, title: 'CHHATH FESTIVE PICKS', subtitle: 'Occasion-led category', searchText: 'Search Chhath essentials', chips: [ {label: 'Fashion'}, {label: 'Puja'}, {label: 'Bundles'}, {label: 'Trusted', route:'mtrusted-home'} ], backRoute: 'chhath-home' })}
      <section class="screen-section">
        ${sectionHeader('Occasion-ready products', 'Fashion, puja and gifting picks brought together for a faster festive mission.', '', '')}
        <div class="two-up">
          ${productCard({ title: 'Celebration Saree', price: 799, art: '👗', route: 'pdp-core', badge: 'Mall' })}
          ${productCard({ title: 'Kurtas Combo', price: 649, art: '👘', route: 'pdp-core', badge: 'MTrusted' })}
          ${productCard({ title: 'Décor Essentials Pack', price: 349, art: '🪔', route: 'pdp-core' })}
          ${productCard({ title: 'Gift Hamper', price: 299, art: '🎁', route: 'pdp-core' })}
        </div>
      </section>
      <section class="screen-section">
        ${sectionHeader('Festival bundles', 'Complete the mission, not just one item.', '', '')}
        <div class="two-up">
          <button class="promo-card" data-go="pdp-growth"><h4>Chhath home prep bundle</h4><p>Decor, serving and hosting essentials in one easy-to-add cluster.</p></button>
          <button class="promo-card" data-go="pdp-growth"><h4>Celebration look bundle</h4><p>Apparel plus footwear and accessories for the full festive outfit.</p></button>
        </div>
      </section>
    `
  });
}

function searchScreen() {
  return phoneTemplate({
    nav: 'home',
    content: `
      ${appBar({ brand: false, title: 'SEARCH', subtitle: 'Guided query results', searchText: 'black regular fit casual shirt', chips: [ {label: 'Relevant first'}, {label: 'MTrusted'}, {label: 'Under ₹499'} ], backRoute: state.route === 'search' ? (state.persona === 'mall' ? 'mall-home' : state.persona === 'assam' ? 'assam-home' : state.persona === 'chhath' ? 'chhath-home' : 'college-home') : state.route })}
      <section class="screen-section">
        ${sectionHeader('Best match for your mission', 'Query: black regular fit casual shirt', '', '')}
        <div class="two-up">
          ${productCard({ title: 'Regular Fit Black Shirt', price: 313, art: '👔', route: 'pdp-core', badge: 'Top rated', badge2: 'Less returned' })}
          ${productCard({ title: 'Cotton Black Shirt', price: 379, art: '🧵', route: 'pdp-core', badge: 'MTrusted' })}
          ${productCard({ title: 'Formal Black Shirt', price: 429, art: '👕', route: 'pdp-core' })}
          ${productCard({ title: 'Overshirt Casual Black', price: 549, art: '🧥', route: 'pdp-core' })}
        </div>
      </section>
    `
  });
}

function pdpCore() {
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Buy now', route: 'checkout' }, { label: 'Add to cart', route: 'cart' }),
    content: `
      ${appBar({ brand: false, title: 'PRODUCT', subtitle: 'Proof-first product detail page', searchText: 'Search related products', backRoute: state.persona === 'mall' ? 'category-grooming' : 'category-fashion' })}
      <div class="product-detail-hero">
        <div>
          <div class="sku-image">${vectorArt('👔')}</div>
          <div class="thumbnail-row">
            <button class="thumbnail" data-go="ugc-gallery">1</button>
            <button class="thumbnail" data-go="ugc-gallery">2</button>
            <button class="thumbnail" data-go="ugc-gallery">3</button>
            <button class="thumbnail" data-go="ugc-gallery">+3</button>
          </div>
        </div>
        <div class="info-stack">
          <h2>Men’s Regular Fit Casual Shirt</h2>
          <div class="info-subline">Black · Size L</div>
          <div class="hero-price"><span class="price">₹313</span></div>
          <div class="info-subline">Other variants ₹233–₹313</div>
          <div style="margin-top:12px;font-size:.78rem;font-weight:800;color:#7b718a;">Size</div>
          <div class="size-grid">
            <button class="size-pill" data-go="pdp-core">S</button>
            <button class="size-pill" data-go="pdp-core">M</button>
            <button class="size-pill active" data-go="pdp-core">L</button>
            <button class="size-pill" data-go="pdp-core">XL</button>
            <button class="size-pill" data-go="pdp-core">XXL</button>
          </div>
        </div>
      </div>

      <div class="info-card" data-go="product-details">
        ${sectionHeader('Product details', 'Category-specific information standardisation.', 'View all details', 'product-details')}
        <div class="details-grid">
          <div class="detail-item"><b>Fabric</b><span>Cotton blend</span></div>
          <div class="detail-item"><b>Fit</b><span>Regular fit</span></div>
          <div class="detail-item"><b>Sleeve</b><span>Full sleeve</span></div>
          <div class="detail-item"><b>Pattern</b><span>Solid</span></div>
          <div class="detail-item"><b>Care</b><span>Machine wash</span></div>
          <div class="detail-item"><b>Pack</b><span>1 shirt</span></div>
        </div>
      </div>

      <div class="info-card seller-module" data-go="seller-profile">
        ${sectionHeader('Sold by', 'Seller performance in Men’s Fashion', 'View seller profile', 'seller-profile')}
        <div class="seller-name">XYZ Fashion</div>
        <div class="trust-badges">
          <div class="trust-badge"><b>Strong category performance</b><span>Stable category quality history.</span></div>
          <div class="trust-badge"><b>Reliable fulfilment</b><span>Consistent shipping and delivery outcomes.</span></div>
          <div class="trust-badge"><b>Low issue incidence</b><span>Healthier post-order outcomes.</span></div>
        </div>
      </div>

      <div class="info-card" data-go="reviews">
        ${sectionHeader('Customers say', 'Based on verified buyer feedback', 'View review intelligence', 'reviews')}
        <div class="review-pill-grid">
          <div class="review-pill"><b>Fit</b><span>Mostly true to size</span></div>
          <div class="review-pill"><b>Fabric</b><span>Soft and lightweight</span></div>
          <div class="review-pill"><b>Colour</b><span>Generally matches images</span></div>
          <div class="review-pill"><b>Quality</b><span>Mostly positive — some durability concerns</span></div>
        </div>
      </div>

      <div class="info-card" data-go="ugc-gallery">
        ${sectionHeader('Real buyer photos & videos', 'Verified purchase content', 'View gallery', 'ugc-gallery')}
        <div class="ugc-row">
          <div class="ugc-thumb">${vectorArt('📷')}</div>
          <div class="ugc-thumb">${vectorArt('🎥')}</div>
          <div class="ugc-thumb">${vectorArt('📷')}</div>
        </div>
        <div class="review-quote">
          <b>Verified Purchase · Size L</b>
          <p>“The fit matched the size guide and the fabric looked close to the listing. Good for daily college wear.”</p>
        </div>
      </div>

      <div class="info-card" data-go="certainty" style="margin-bottom:20px;">
        ${sectionHeader('Transaction certainty', 'Reduce last-mile hesitation', 'View certainty', 'certainty')}
        <div class="transaction-list">
          <div class="transaction-item"><div class="transaction-icon">🚚</div><div class="transaction-copy"><b>Delivery by Tue, 8 Oct</b><span>Visible near decision, not hidden inside checkout.</span></div></div>
          <div class="transaction-item"><div class="transaction-icon">↩</div><div class="transaction-copy"><b>7-day eligible return / replacement</b><span>Simple promise before purchase.</span></div></div>
          <div class="transaction-item"><div class="transaction-icon">₹</div><div class="transaction-copy"><b>Refund status traceable after initiation</b><span>Payment and reverse-flow clarity.</span></div></div>
        </div>
      </div>
    `
  });
}

function productDetailsScreen() {
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Back to PDP', route: 'pdp-core' }, { label: 'Add to cart', route: 'cart' }),
    content: `
      ${appBar({ brand: false, title: 'PRODUCT DETAILS', subtitle: 'Decision-critical information', searchText: 'Search product help', backRoute: 'pdp-core' })}
      <div class="list-card">
        <h4>Men’s Regular Fit Casual Shirt</h4>
        <p style="margin:0;color:var(--muted);font-size:.75rem;line-height:1.45;">Category-specific information standard for fashion. The goal is to remove ambiguity before the user commits.</p>
      </div>
      <div class="list-card">
        <h4>Core specifications</h4>
        <div class="details-grid">
          <div class="detail-item"><b>Fabric</b><span>Cotton blend</span></div>
          <div class="detail-item"><b>Fit</b><span>Regular fit</span></div>
          <div class="detail-item"><b>Chest</b><span>42 in</span></div>
          <div class="detail-item"><b>Length</b><span>29 in</span></div>
          <div class="detail-item"><b>Sleeve</b><span>Full sleeve</span></div>
          <div class="detail-item"><b>Pattern</b><span>Solid</span></div>
          <div class="detail-item"><b>Care</b><span>Machine wash</span></div>
          <div class="detail-item"><b>Pack</b><span>1 shirt</span></div>
        </div>
      </div>