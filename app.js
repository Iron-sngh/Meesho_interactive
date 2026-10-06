const state = {
  persona: 'chhath',
  route: 'chhath-home',
  hotspotMode: false,
  history: []
};

const personas = {
  chhath: {
    id: 'chhath',
    title: 'Chhath Festival Mission',
    subtitle: 'Rohit · Bihar festive shopper',
    summary: 'Regional seasonal discovery that starts from Chhath needs and routes into trusted festive shopping journeys.',
    entryRoute: 'chhath-home',
    tags: ['Regional relevance', 'Festive homepage', 'Basket completion'],
    avatar: 'profiles/profile_avatar_rohit.webp'
  },
  assam: {
    id: 'assam',
    title: 'Assam Festive Context',
    subtitle: 'Nayan · Assam seasonal shopper',
    summary: 'Contextual homepage with festive discovery, regional merchandising and trust-led progression into PDPs.',
    entryRoute: 'assam-home',
    tags: ['Assam relevance', 'Mission-led home', 'Mall + MTrusted'],
    avatar: 'profiles/profile_avatar_nayan.webp'
  },
  mall: {
    id: 'mall',
    title: 'Meesho Mall for Brands',
    subtitle: 'Kabir · brand-conscious grooming shopper',
    summary: 'A dedicated branded assortment destination that makes provenance and value easy to understand.',
    entryRoute: 'mall-home',
    tags: ['Brand destination', 'Provenance trust', 'Grooming'],
    avatar: 'profiles/profile_avatar_kabir.webp'
  },
  mtrusted: {
    id: 'mtrusted',
    title: 'MTrusted Confidence',
    subtitle: 'Vivek · trust-seeking first-time buyer',
    summary: 'MTrusted explains seller and listing quality with clear evidence rather than unexplained badges.',
    entryRoute: 'mtrusted-home',
    tags: ['Seller confidence', 'Explainable trust', 'Trust routing'],
    avatar: 'profiles/profile_avatar_vivek.webp'
  },
  college: {
    id: 'college',
    title: 'College Style Starter',
    subtitle: 'Aarav · college-going value seeker',
    summary: 'Mission-first homepage for a young shopper looking for affordable fashion, complete looks and proof before purchase.',
    entryRoute: 'college-home',
    tags: ['Guided discovery', 'Men’s fashion', 'Proof-first PDP'],
    avatar: 'profiles/profile_avatar_aarav.webp'
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

const ASSET_ROOT = 'assets/';
const asset = (path) => `${ASSET_ROOT}${path}`;

function personaAvatar() {
  return asset(personas[state.persona]?.avatar || 'profiles/profile_avatar_aarav.webp');
}

function productImageFor(title = '', art = '') {
  const t = title.toLowerCase();
  if (t.includes('black shirt') || t.includes('regular fit casual shirt')) return asset('products/prod_black_shirt_main.webp');
  if (t.includes('checked')) return asset('products/prod_checked_shirt.webp');
  if (t.includes('trouser') || t.includes('jean')) return asset('products/prod_trousers.webp');
  if (t.includes('sneaker') || t.includes('shoe')) return asset('products/prod_sneakers.webp');
  if (t.includes('backpack') || t.includes('college tote')) return asset('products/prod_backpack.webp');
  if (t.includes('watch')) return asset('products/prod_watch.webp');
  if (t.includes('polo') || t.includes('tee') || t.includes('t-shirt')) return asset('products/prod_polo.webp');
  if (t.includes('overshirt') || t.includes('linen blend') || t.includes('formal shirt') || t.includes('casual shirt') || t.includes('striped shirt')) return asset('products/prod_checked_shirt.webp');

  if (t.includes('face wash')) return asset('mall/mall_facewash.webp');
  if (t.includes('beard')) return asset('mall/mall_beard_oil.webp');
  if (t.includes('shaving')) return asset('mall/mall_shaving_kit.webp');
  if (t.includes('body spray') || t.includes('deo')) return asset('mall/mall_deodorant.webp');

  if (t.includes('assam') || state.persona === 'assam') {
    if (t.includes('kurta')) return asset('assam/assam_kurta.webp');
    if (t.includes('decor')) return asset('assam/assam_decor_set.webp');
    if (t.includes('self-care') || t.includes('gift box')) return asset('assam/assam_selfcare_gift.webp');
    if (t.includes('travel') || t.includes('utility')) return asset('assam/assam_travel_kit.webp');
  }
  if (t.includes('saree')) return asset('chhath/chhath_saree.webp');
  if (t.includes('kurta set') || t.includes('kurtas combo') || (state.persona === 'chhath' && t.includes('kurta'))) return asset('chhath/chhath_kurta.webp');
  if (t.includes('decor') || t.includes('serving') || t.includes('puja')) return asset('chhath/chhath_decor_pack.webp');
  if (t.includes('gift hamper')) return asset('chhath/chhath_gift_hamper.webp');
  if (t.includes('travel pouch')) return asset('chhath/chhath_travel_pouch.webp');

  const fallbacks = {
    '👔': 'products/prod_black_shirt_main.webp',
    '👖': 'products/prod_trousers.webp',
    '👟': 'products/prod_sneakers.webp',
    '🎒': 'products/prod_backpack.webp',
    '⌚': 'products/prod_watch.webp',
    '🧥': 'products/prod_checked_shirt.webp',
    '👜': 'products/prod_backpack.webp',
    '🏋️': 'products/prod_polo.webp',
    '👕': 'products/prod_polo.webp',
    '🧴': 'mall/mall_facewash.webp',
    '🪒': 'mall/mall_shaving_kit.webp',
    '🧔': 'mall/mall_beard_oil.webp',
    '🌿': 'mall/mall_deodorant.webp',
    '🎁': 'chhath/chhath_gift_hamper.webp',
    '🧳': 'assam/assam_travel_kit.webp',
    '👘': 'chhath/chhath_kurta.webp',
    '🏠': 'assam/assam_decor_set.webp'
  };
  return asset(fallbacks[art] || 'products/prod_black_shirt_main.webp');
}

function categoryImageFor(title = '') {
  const t = title.toLowerCase();
  if (t.includes("men’s fashion") || t.includes("men's fashion")) return asset('categories/cat_mens_fashion.webp');
  if (t.includes("women")) return asset('categories/cat_womens_fashion.webp');
  if (t.includes('footwear')) return asset('categories/cat_footwear.webp');
  if (t.includes('grooming')) return asset('categories/cat_grooming.webp');
  if (t.includes('electronic')) return asset('categories/cat_electronics.webp');
  if (t.includes('sport') || t.includes('active')) return asset('categories/cat_sports.webp');
  if (t.includes('home')) return asset('categories/cat_home.webp');
  if (t.includes('gift')) return asset('categories/cat_gifting.webp');
  if (t.includes('assam')) return asset('assam/assam_festive_banner.webp');
  if (t.includes('chhath')) return asset('chhath/chhath_hero_banner.webp');
  return asset('categories/cat_mens_fashion.webp');
}

function heroImage(path, position = 'center') {
  return `style="--hero-photo:url('${asset(path)}');--hero-position:${position};"`;
}

function img(path, alt, cls = '') {
  return `<img class="${cls}" src="${asset(path)}" alt="${alt}" loading="lazy" decoding="async">`;
}

function buyerAvatar(index = 1) {
  const n = String(Math.max(1, Math.min(index, 6))).padStart(2, '0');
  return asset(`profiles/buyer_avatar_${n}.webp`);
}


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

function productCard({ title, price, oldPrice = '', rating = '4.4', ratingCount = '8.1K', meta = '', art = '•', route = 'pdp-core', badge = '', badge2 = '', image = '' }) {
  const photo = image || productImageFor(title, art);
  return `
    <button class="product-card" data-go="${route}" aria-label="Open ${title}">
      <div class="product-image real-photo">
        <img src="${photo}" alt="${title}" loading="lazy" decoding="async">
        <div class="product-badges">
          ${badge ? `<span class="badge-pill">${badge}</span>` : ''}
          ${badge2 ? `<span class="tiny-pill">${badge2}</span>` : ''}
        </div>
        <span class="favorite-tag">♡</span>
      </div>
      <b class="product-title">${title}</b>
      ${meta ? `<div class="product-meta">${meta}</div>` : ''}
      <div class="price-row">
        <span class="price">${money(price)}</span>
        ${oldPrice ? `<span class="old-price">${money(oldPrice)}</span>` : ''}
      </div>
      <div class="rating">★ <b>${rating}</b> <span>(${ratingCount})</span></div>
    </button>
  `;
}

function categoryCard({ icon, title, subtitle, route, image = '' }) {
  const photo = image || categoryImageFor(title);
  return `
    <button class="category-card" data-go="${route}" aria-label="Open ${title}">
      <div class="art-box real-category-photo">
        <img src="${photo}" alt="${title}" loading="lazy" decoding="async">
      </div>
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
          <button class="circle-icon" data-go="search" aria-label="Search">⌕</button>
          <button class="circle-icon" data-go="wishlist" aria-label="Wishlist">♡</button>
          <button class="ghost-icon" data-go="cart" aria-label="Cart">🛒</button>
        </div>
      </div>
      ${brand ? `
        <div class="profile-chip profile-greeting">
          <div class="profile-chip"><img class="mini-profile-avatar" src="${personaAvatar()}" alt="${personas[state.persona].title} profile"> <span>Hello, ${state.persona === 'college' ? 'Aarav' : state.persona === 'chhath' ? 'Rohit' : state.persona === 'assam' ? 'Nayan' : state.persona === 'mall' ? 'Kabir' : 'Vivek'}</span></div>
          <button class="badge-pill" data-go="account">My account</button>
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
        <div class="hero-banner photo-hero photo-hero-light" ${heroImage('college/college_hero_banner.webp', 'center')}>
          <div class="hero-copy-card">
            <span class="eyebrow-inline">Curated for campus</span>
            <h2>Upgrade your everyday style</h2>
            <p>Affordable shirts, trousers, sneakers and accessories for class, hangouts and everyday dressing.</p>
            <button class="hero-cta" data-go="category-fashion">Shop Your Style →</button>
          </div>
        </div>
      </section>

      <section class="screen-section">
        <button class="wide-promo-card" data-go="category-fashion">
          <img src="${asset('promo_college_under499.webp')}" alt="College fashion picks under 499" loading="lazy">
          <div class="wide-promo-copy"><span>COLLEGE READY</span><b>Everyday campus picks under ₹499</b><small>Shirts · basics · accessories</small></div>
        </button>
      </section>

      <section class="screen-section">
        ${sectionHeader('For Your Style', 'Recommended products aligned to your guided mission.', 'See all', 'category-fashion')}
        <div class="four-up">
          ${productCard({ title: 'Casual Checked Shirt', price: 299, oldPrice: 449, art: '👔', route: 'pdp-core', badge: 'MTrusted', image: asset('products/prod_checked_shirt.webp') })}
          ${productCard({ title: 'Regular Fit Trousers', price: 499, oldPrice: 699, art: '👖', route: 'pdp-core', image: asset('products/prod_trousers.webp') })}
          ${productCard({ title: 'Everyday Sneakers', price: 699, oldPrice: 999, art: '👟', route: 'pdp-core', badge: 'Top rated', image: asset('products/prod_sneakers.webp') })}
          ${productCard({ title: 'Minimal Backpack', price: 499, oldPrice: 749, art: '🎒', route: 'pdp-core', image: asset('products/prod_backpack.webp') })}
        </div>
      </section>

      <section class="screen-section">
        ${trustTwinCards()}
      </section>

      <section class="screen-section">
        ${sectionHeader('Continue Exploring', 'Bundles, style adjacency and more budget-smart picks.', 'See all', 'search')}
        <div class="four-up">
          ${productCard({ title: 'Analog Watch', price: 399, oldPrice: 599, art: '⌚', route: 'pdp-core', image: asset('products/prod_watch.webp') })}
          ${productCard({ title: 'Black Casual Shirt', price: 749, oldPrice: 999, art: '🧥', route: 'pdp-core', badge2: 'Less returned', image: asset('products/prod_black_shirt_main.webp') })}
          ${productCard({ title: 'College Backpack', price: 329, art: '👜', route: 'pdp-core', image: asset('products/prod_backpack.webp') })}
          ${productCard({ title: 'Polo Tee', price: 349, art: '🏋️', route: 'pdp-core', image: asset('products/prod_polo.webp') })}
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
        <div class="hero-banner photo-hero photo-hero-dark" ${heroImage('assam/assam_festive_banner.webp', 'center')}>
          <div class="hero-copy-card">
            <span class="eyebrow-inline">Festive picks for Assam</span>
            <h2>Celebration looks, gifting and home essentials for the season</h2>
            <p>Regional context changes the ordering — not the underlying Meesho experience.</p>
            <button class="hero-cta" data-go="category-assam">Explore festive picks →</button>
          </div>
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('What do you need today?', 'Choose a mission, discover faster — or browse freely.', '', '')}
        <div class="mission-photo-grid">
          <button class="mission-photo-card" data-go="category-assam"><img src="${asset('assam/assam_kurta.webp')}" alt="Festive style"><span><b>Festive Style</b><small>Celebration looks under ₹699</small></span></button>
          <button class="mission-photo-card" data-go="category-grooming"><img src="${asset('assam/assam_selfcare_gift.webp')}" alt="Self care"><span><b>Self-Care</b><small>Grooming picks under ₹499</small></span></button>
          <button class="mission-photo-card" data-go="search"><img src="${asset('assam/assam_travel_kit.webp')}" alt="Utility"><span><b>Utility</b><small>Travel & everyday essentials</small></span></button>
          <button class="mission-photo-card" data-go="category-assam"><img src="${asset('assam/assam_decor_set.webp')}" alt="Festive home"><span><b>Home & Gifting</b><small>Seasonal accents and giftable picks</small></span></button>
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('Trending in Assam', 'Popular products & categories shaped by regional context.', 'See all', 'category-assam')}
        <div class="four-up">
          ${productCard({ title: 'Assam Festive Kurta', price: 429, route: 'pdp-core', badge: 'Festive', image: asset('assam/assam_kurta.webp') })}
          ${productCard({ title: 'Festive Home Decor Set', price: 449, route: 'pdp-core', image: asset('assam/assam_decor_set.webp') })}
          ${productCard({ title: 'Self-care Gift Box', price: 249, route: 'pdp-core', image: asset('assam/assam_selfcare_gift.webp') })}
          ${productCard({ title: 'Travel Utility Kit', price: 199, route: 'pdp-core', image: asset('assam/assam_travel_kit.webp') })}
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
        <div class="hero-banner photo-hero photo-hero-dark" ${heroImage('chhath/chhath_hero_banner.webp', 'center')}>
          <div class="hero-copy-card">
            <span class="eyebrow-inline">Chhath special</span>
            <h2>Festive fashion, gifting and home prep in one journey</h2>
            <p>Start from the occasion and move directly into useful, trusted product missions.</p>
            <button class="hero-cta" data-go="category-chhath">Shop Chhath picks →</button>
          </div>
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('Shop by need', 'Start with the mission you want to complete.', '', '')}
        <div class="mission-photo-grid">
          <button class="mission-photo-card featured" data-go="category-chhath"><img src="${asset('chhath/chhath_saree.webp')}" alt="Festive fashion"><span><b>Festive Fashion</b><small>Sarees, kurtas and celebration looks</small></span></button>
          <button class="mission-photo-card" data-go="category-chhath"><img src="${asset('chhath/chhath_decor_pack.webp')}" alt="Puja and home decor"><span><b>Puja & Home</b><small>Decor and useful home preparation</small></span></button>
          <button class="mission-photo-card" data-go="search"><img src="${asset('chhath/chhath_gift_hamper.webp')}" alt="Gift picks"><span><b>Gift Picks</b><small>Easy gifts for family visits</small></span></button>
          <button class="mission-photo-card" data-go="search"><img src="${asset('chhath/chhath_travel_pouch.webp')}" alt="Travel utility"><span><b>Travel & Utility</b><small>Seasonal travel essentials</small></span></button>
        </div>
      </section>

      <section class="screen-section">
        <button class="wide-promo-card warm" data-go="category-chhath">
          <img src="${asset('promo_festive_under699.webp')}" alt="Festive products under 699" loading="lazy">
          <div class="wide-promo-copy"><span>FESTIVE VALUE</span><b>Celebration picks under ₹699</b><small>Fashion · gifting · home</small></div>
        </button>
      </section>

      <section class="screen-section">
        ${sectionHeader('Festive favourites', 'Qualified listings with value-led merchandising.', 'See all', 'category-chhath')}
        <div class="four-up">
          ${productCard({ title: 'Printed Kurta Set', price: 699, oldPrice: 999, route: 'pdp-core', badge: 'Mall', image: asset('chhath/chhath_kurta.webp') })}
          ${productCard({ title: 'Celebration Saree', price: 799, route: 'pdp-core', image: asset('chhath/chhath_saree.webp') })}
          ${productCard({ title: 'Puja & Decor Pack', price: 249, route: 'pdp-core', badge2: 'Top rated', image: asset('chhath/chhath_decor_pack.webp') })}
          ${productCard({ title: 'Gift Hamper', price: 299, route: 'pdp-core', image: asset('chhath/chhath_gift_hamper.webp') })}
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
        subtitle: 'Self care · Meesho Mall',
        searchText: 'Search in Men’s Grooming',
        chips: [
          { label: 'Meesho Mall', route: 'mall-home' },
          { label: 'MTrusted', route: 'mtrusted-home' },
          { label: 'Why Mall?', route: 'mall-explainer' }
        ],
        backRoute: 'categories'
      })}

      <section class="screen-section">
        <div class="hero-banner photo-hero photo-hero-dark" ${heroImage('mall/mall_grooming_banner.webp', 'center')}>
          <div class="hero-copy-card">
            <span class="eyebrow-inline">Meesho Mall</span>
            <h2>Brands you know. Value you expect.</h2>
            <p>A branded destination for shoppers who care about source confidence and provenance.</p>
            <button class="hero-cta" data-go="mall-explainer">What does Mall mean? →</button>
          </div>
        </div>
      </section>

      <section class="screen-section">
        <div class="three-up">
          <button class="value-tile" data-go="mall-explainer"><b>Brand confidence</b><span>Known brands reduce source-checking.</span></button>
          <button class="value-tile" data-go="mall-explainer"><b>Source assurance</b><span>Clear provenance for brand-sensitive missions.</span></button>
          <button class="value-tile" data-go="mall-explainer"><b>Value confidence</b><span>Compare trusted products without losing price context.</span></button>
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('Shop branded grooming by need', 'Start from the grooming task you want to complete.', '', '')}
        <div class="mall-need-grid">
          <button class="mall-need-card" data-go="category-grooming"><img src="${asset('mall/mall_shaving_kit.webp')}" alt="Shaving"><b>Shaving</b><span>Razors · foam · after-care</span></button>
          <button class="mall-need-card" data-go="category-grooming"><img src="${asset('mall/mall_facewash.webp')}" alt="Face care"><b>Face care</b><span>Wash · skincare basics</span></button>
          <button class="mall-need-card" data-go="category-grooming"><img src="${asset('mall/mall_beard_oil.webp')}" alt="Beard care"><b>Beard care</b><span>Oil · grooming essentials</span></button>
          <button class="mall-need-card" data-go="category-grooming"><img src="${asset('mall/mall_deodorant.webp')}" alt="Fragrance"><b>Fragrance</b><span>Daily freshness</span></button>
        </div>
      </section>

      <section class="screen-section">
        <button class="wide-promo-card" data-go="category-grooming">
          <img src="${asset('promo_grooming_under499.webp')}" alt="Grooming picks under 499" loading="lazy">
          <div class="wide-promo-copy"><span>GROOMING RESET</span><b>Routine essentials under ₹499</b><small>Face care · shaving · beard care</small></div>
        </button>
      </section>

      <section class="screen-section">
        ${sectionHeader('Mall picks for you', 'Branded-looking assortment for grooming routines.', 'See all', 'category-grooming')}
        <div class="four-up">
          ${productCard({ title: 'Daily Face Wash', price: 199, route: 'pdp-core', badge: 'Mall', image: asset('mall/mall_facewash.webp') })}
          ${productCard({ title: 'Beard Oil', price: 249, route: 'pdp-core', badge: 'Mall', image: asset('mall/mall_beard_oil.webp') })}
          ${productCard({ title: 'Shaving Essentials Kit', price: 279, route: 'pdp-core', badge: 'Mall', image: asset('mall/mall_shaving_kit.webp') })}
          ${productCard({ title: 'Deodorant Body Spray', price: 179, route: 'pdp-core', badge: 'Mall', image: asset('mall/mall_deodorant.webp') })}
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
        subtitle: 'Fashion · MTrusted',
        searchText: 'Search in Men’s Fashion',
        chips: [
          { label: 'MTrusted', route: 'mtrusted-home' },
          { label: 'Meesho Mall', route: 'mall-home' },
          { label: 'Why MTrusted?', route: 'mtrusted-explainer' }
        ],
        backRoute: 'category-fashion'
      })}

      <section class="screen-section">
        <div class="hero-banner photo-hero photo-hero-dark" ${heroImage('mtrusted/mtrusted_fashion_banner.webp', 'center')}>
          <div class="hero-copy-card">
            <span class="eyebrow-inline">MTrusted picks</span>
            <h2>Shop with stronger seller confidence</h2>
            <p>Seller reliability and listing-quality signals are organised into one explainable trust system.</p>
            <button class="hero-cta" data-go="mtrusted-explainer">Why MTrusted? →</button>
          </div>
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('Evidence behind the signal', 'The user can inspect why a listing feels more dependable.', '', '')}
        <div class="evidence-photo-grid">
          <button class="evidence-photo-card" data-go="mtrusted-explainer"><img src="${asset('mtrusted/quality_check_fashion.webp')}" alt="Fashion quality check"><span><b>Listing & quality discipline</b><small>Better product information and inspection cues</small></span></button>
          <button class="evidence-photo-card" data-go="seller-profile"><img src="${asset('mtrusted/fulfilment_package.webp')}" alt="Reliable fulfilment"><span><b>Reliable fulfilment</b><small>Seller operations that reduce post-order uncertainty</small></span></button>
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
        ${sectionHeader('MTrusted in men’s fashion', 'Qualified products based on seller and listing signals.', 'See all', 'category-fashion')}
        <div class="four-up">
          ${productCard({ title: 'Basic Polo T-Shirt', price: 239, route: 'pdp-core', badge: 'MTrusted', image: asset('products/prod_polo.webp') })}
          ${productCard({ title: 'Checked Shirt', price: 549, route: 'pdp-core', badge: 'MTrusted', image: asset('products/prod_checked_shirt.webp') })}
          ${productCard({ title: 'Black Casual Shirt', price: 299, route: 'pdp-core', badge: 'MTrusted', image: asset('products/prod_black_shirt_main.webp') })}
          ${productCard({ title: 'Casual Trousers', price: 449, route: 'pdp-core', badge: 'MTrusted', image: asset('products/prod_trousers.webp') })}
        </div>
      </section>

      <section class="screen-section">
        <div class="seller-mini-strip" data-go="seller-profile">
          <img src="${asset('seller/seller_xyz_logo.webp')}" alt="XYZ Fashion logo">
          <div><b>XYZ Fashion</b><span>Strong category performance · reliable fulfilment · low issue incidence</span></div>
          <span>→</span>
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