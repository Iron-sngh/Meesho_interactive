const state = {
  persona: 'chhath',
  route: 'chhath-home',
  hotspotMode: false,
  history: [],
  cartItems: [],
  groupCreated: false,
  product: { title: 'Printed Kurta Set', price: 699, image: 'assets/chhath/chhath_kurta.webp', kind: 'fashion' }
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
    summary: 'The PDP is the heart of the system: product facts, seller proof, review intelligence, verified UGC, transaction certainty and post-confidence growth modules now live in one continuous scroll.',
    keySignals: ['Structured details', 'Seller evidence', 'Verified buyer media', 'Share & Save', 'Usually Bought Together', 'Complete Your Look', 'Suggested Products'],
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
    keySignals: ['Complete Your Look', 'Usually Bought Together', 'Suggested Products', 'Share & Save', 'Group Created'],
    kpi: ['AOV', 'Items per order', 'Attach rate', 'Group completion']
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
const PERSONA_NAMES = { chhath: 'Rohit', assam: 'Nayan', mall: 'Kabir', mtrusted: 'Vivek', college: 'Aarav' };

function personaAvatar(id = state.persona) {
  return asset(personas[id]?.avatar || personas.college.avatar);
}

function productImageFor(title = '', art = '') {
  const t = title.toLowerCase();
  if (t.includes('face wash')) return asset('mall/mall_facewash.webp');
  if (t.includes('beard')) return asset('mall/mall_beard_oil.webp');
  if (t.includes('shaving')) return asset('mall/mall_shaving_kit.webp');
  if (t.includes('body spray') || t.includes('deodorant') || t.includes('deo')) return asset('mall/mall_deodorant.webp');

  if (t.includes('saree')) return asset('chhath/chhath_saree.webp');
  if (t.includes('kurta') && state.persona === 'assam') return asset('assam/assam_kurta.webp');
  if (t.includes('kurta')) return asset('chhath/chhath_kurta.webp');
  if (t.includes('puja') || t.includes('decor') || t.includes('serving')) return state.persona === 'assam' ? asset('assam/assam_decor_set.webp') : asset('chhath/chhath_decor_pack.webp');
  if (t.includes('gift hamper')) return asset('chhath/chhath_gift_hamper.webp');
  if (t.includes('self-care') || t.includes('gift box')) return asset('assam/assam_selfcare_gift.webp');
  if (t.includes('travel') || t.includes('utility')) return state.persona === 'chhath' ? asset('chhath/chhath_travel_pouch.webp') : asset('assam/assam_travel_kit.webp');

  if (t.includes('black shirt') || t.includes('regular fit casual shirt') || t.includes('cotton black')) return asset('products/prod_black_shirt_main.webp');
  if (t.includes('checked') || t.includes('linen') || t.includes('formal shirt') || t.includes('overshirt')) return asset('products/prod_checked_shirt.webp');
  if (t.includes('trouser') || t.includes('jean')) return asset('products/prod_trousers.webp');
  if (t.includes('sneaker') || t.includes('shoe')) return asset('products/prod_sneakers.webp');
  if (t.includes('backpack') || t.includes('tote')) return asset('products/prod_backpack.webp');
  if (t.includes('watch')) return asset('products/prod_watch.webp');
  if (t.includes('polo') || t.includes('tee') || t.includes('t-shirt')) return asset('products/prod_polo.webp');
  if (t.includes('shirt')) return asset('products/prod_checked_shirt.webp');

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
    '🏠': 'assam/assam_decor_set.webp',
    '👗': 'chhath/chhath_saree.webp'
  };
  return asset(fallbacks[art] || 'products/prod_black_shirt_main.webp');
}

function categoryImageFor(title = '') {
  const t = title.toLowerCase();
  if (t.includes('men’s fashion') || t.includes("men's fashion")) return asset('categories/cat_mens_fashion.webp');
  if (t.includes('women')) return asset('categories/cat_womens_fashion.webp');
  if (t.includes('footwear')) return asset('categories/cat_footwear.webp');
  if (t.includes('grooming')) return asset('categories/cat_grooming.webp');
  if (t.includes('electronic')) return asset('categories/cat_electronics.webp');
  if (t.includes('sport') || t.includes('fitness') || t.includes('active')) return asset('categories/cat_sports.webp');
  if (t.includes('home')) return asset('categories/cat_home.webp');
  if (t.includes('gift')) return asset('categories/cat_gifting.webp');
  if (t.includes('assam')) return asset('assam/assam_festive_banner.webp');
  if (t.includes('chhath')) return asset('chhath/chhath_hero_banner.webp');
  return asset('categories/cat_mens_fashion.webp');
}

function heroStyle(path, position = 'center') {
  return `style="--hero-photo:url('${asset(path)}');--hero-position:${position};"`;
}

function buyerAvatar(index = 1) {
  const n = String(Math.max(1, Math.min(6, index))).padStart(2, '0');
  return asset(`profiles/buyer_avatar_${n}.webp`);
}

function profileCopy() {
  const profiles = {
    chhath: ['Rohit Kumar', 'Festive shopper · Bihar · Hindi'],
    assam: ['Nayan Das', 'Seasonal shopper · Assam · English + অসমীয়া'],
    mall: ['Kabir Mehta', 'Grooming shopper · Urban · English + Hindi'],
    mtrusted: ['Vivek Sharma', 'Proof-seeking shopper · English + Hindi'],
    college: ['Aarav Sharma', 'Student shopper · Guwahati, Assam · English + Hindi']
  };
  return profiles[state.persona] || profiles.college;
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

function productKind(title = '') {
  const t = title.toLowerCase();
  if (/(face wash|beard|shaving|deodorant|body spray|grooming)/.test(t)) return 'grooming';
  if (/(shirt|trouser|jean|sneaker|shoe|polo|tee|kurta|saree|fashion)/.test(t)) return 'fashion';
  return 'utility';
}

function defaultProductForPersona(id = state.persona) {
  const defaults = {
    chhath: { title: 'Printed Kurta Set', price: 699, image: asset('chhath/chhath_kurta.webp'), kind: 'fashion' },
    assam: { title: 'Assam Festive Kurta', price: 429, image: asset('assam/assam_kurta.webp'), kind: 'fashion' },
    mall: { title: 'Daily Face Wash', price: 199, image: asset('mall/mall_facewash.webp'), kind: 'grooming' },
    mtrusted: { title: 'Black Casual Shirt', price: 299, image: asset('products/prod_black_shirt_main.webp'), kind: 'fashion' },
    college: { title: 'Casual Checked Shirt', price: 299, image: asset('products/prod_checked_shirt.webp'), kind: 'fashion' }
  };
  return { ...(defaults[id] || defaults.college) };
}

function selectedProduct() {
  const p = state.product || { title: 'Men’s Regular Fit Casual Shirt', price: 313, image: 'products/prod_black_shirt_main.webp', kind: 'fashion' };
  let image = p.image || 'products/prod_black_shirt_main.webp';
  if (!/^data:|^https?:/.test(image)) image = asset(image.replace(/^assets\//, ''));
  return { ...p, image };
}

function productDetailsFor(kind = 'fashion') {
  if (kind === 'grooming') return [
    ['Type', 'Daily grooming'], ['Quantity', '100 ml / pack'], ['Skin use', 'Everyday care'],
    ['Expiry', '24 months from MFD'], ['Manufacturer', 'Shown on pack'], ['Pack', '1 unit']
  ];
  if (kind === 'utility') return [
    ['Material', 'As listed'], ['Pack', '1 unit'], ['Dimensions', 'Shown in details'],
    ['Usage', 'Everyday utility'], ['Care', 'Wipe clean'], ['Return', 'Eligible as shown']
  ];
  return [
    ['Fabric', 'Cotton blend'], ['Fit', 'Regular fit'], ['Sleeve', 'Full sleeve'],
    ['Pattern', 'Solid'], ['Care', 'Machine wash'], ['Pack', '1 item']
  ];
}

function productCard({ title, price, oldPrice = '', rating = '4.4', ratingCount = '8.1K', meta = '', art = '•', route = 'pdp-core', badge = '', badge2 = '', image = '', imagePosition = 'center' }) {
  const photo = image || productImageFor(title, art);
  return `
    <button class="product-card" data-go="${route}" data-product-title="${title.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}" data-product-price="${price}" data-product-image="${photo}" data-product-kind="${productKind(title)}" aria-label="Open ${title}">
      <div class="product-image real-photo">
        <img src="${photo}" alt="${title}" loading="lazy" decoding="async" style="object-position:${imagePosition};">
        <div class="product-badges">
          ${badge ? `<span class="badge-pill">${badge}</span>` : ''}
          ${badge2 ? `<span class="tiny-pill">${badge2}</span>` : ''}
        </div>
        <span class="favorite-tag" aria-hidden="true">♡</span>
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
      <div class="art-box real-category-photo"><img src="${photo}" alt="${title}" loading="lazy" decoding="async"></div>
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
          <div class="profile-chip"><img class="mini-profile-avatar" src="${personaAvatar()}" alt="${PERSONA_NAMES[state.persona]} profile"><span>Hello, ${PERSONA_NAMES[state.persona]}</span></div>
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
          ${categoryCard({ icon: '👟', title: 'Footwear', subtitle: 'Casual · Sports', route: 'category-fashion' })}
          ${categoryCard({ icon: '🧴', title: 'Grooming', subtitle: 'Skincare · Haircare', route: 'category-grooming' })}
          ${categoryCard({ icon: '⌚', title: 'Electronics', subtitle: 'Accessories', route: 'search' })}
          ${categoryCard({ icon: '🏋️', title: 'Sports & Fitness', subtitle: 'Active essentials', route: 'search' })}
          ${categoryCard({ icon: '🏠', title: 'Home Utility', subtitle: 'Kitchen · Storage', route: 'search' })}
          ${categoryCard({ icon: '🎁', title: 'Gifting', subtitle: 'Budget finds', route: 'search' })}
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('Your Style Edit', 'Casual · College · Office · Occasion', 'See all', 'category-fashion')}
        <div class="hero-banner photo-hero" ${heroStyle('college/college_hero_banner.webp', 'center')}>
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
          ${productCard({ title: 'Casual Checked Shirt', price: 299, oldPrice: 449, route: 'pdp-core', badge: 'MTrusted', image: asset('products/prod_checked_shirt.webp') })}
          ${productCard({ title: 'Regular Fit Trousers', price: 499, oldPrice: 699, route: 'pdp-core', image: asset('products/prod_trousers.webp') })}
          ${productCard({ title: 'Everyday Sneakers', price: 699, oldPrice: 999, route: 'pdp-core', badge: 'Top rated', image: asset('products/prod_sneakers.webp') })}
          ${productCard({ title: 'Minimal Backpack', price: 499, oldPrice: 749, route: 'pdp-core', image: asset('products/prod_backpack.webp') })}
        </div>
      </section>

      <section class="screen-section">${trustTwinCards()}</section>

      <section class="screen-section">
        ${sectionHeader('Continue Exploring', 'Bundles, style adjacency and more budget-smart picks.', 'See all', 'search')}
        <div class="four-up">
          ${productCard({ title: 'Analog Watch', price: 399, oldPrice: 599, route: 'pdp-core', image: asset('products/prod_watch.webp') })}
          ${productCard({ title: 'Black Casual Shirt', price: 749, oldPrice: 999, route: 'pdp-core', badge2: 'Less returned', image: asset('products/prod_black_shirt_main.webp') })}
          ${productCard({ title: 'College Backpack', price: 329, route: 'pdp-core', image: asset('products/prod_backpack.webp') })}
          ${productCard({ title: 'Polo Tee', price: 349, route: 'pdp-core', image: asset('products/prod_polo.webp') })}
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
        <div class="hero-banner photo-hero" ${heroStyle('assam/assam_festive_banner.webp', 'center')}>
          <div class="hero-copy-card">
            <span class="eyebrow-inline">Festive picks for Assam</span>
            <h2>Celebration looks, gifting and home essentials for the season</h2>
            <p>Regional context changes ordering — not the underlying Meesho experience.</p>
            <button class="hero-cta" data-go="category-assam">Explore festive picks →</button>
          </div>
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('What do you need today?', 'Choose a mission, discover faster — or browse freely.', '', '')}
        <div class="mission-photo-grid">
          <button class="mission-photo-card featured" data-go="category-assam"><img src="${asset('assam/assam_kurta.webp')}" alt="Festive style"><span><b>Festive Style</b><small>Celebration looks under ₹699</small></span></button>
          <button class="mission-photo-card" data-go="category-grooming"><img src="${asset('assam/assam_selfcare_gift.webp')}" alt="Self care"><span><b>Self-Care</b><small>Grooming and gifting picks</small></span></button>
          <button class="mission-photo-card" data-go="search"><img src="${asset('assam/assam_travel_kit.webp')}" alt="Travel utility"><span><b>Travel & Utility</b><small>Practical seasonal essentials</small></span></button>
          <button class="mission-photo-card" data-go="category-assam"><img src="${asset('assam/assam_decor_set.webp')}" alt="Home decor"><span><b>Home & Gifting</b><small>Festive accents and useful picks</small></span></button>
        </div>
      </section>

      <section class="screen-section">
        ${sectionHeader('Trending in Assam', 'Illustrative regional ordering, not a demand-data claim.', 'See all', 'category-assam')}
        <div class="four-up">
          ${productCard({ title: 'Assam Festive Kurta', price: 429, route: 'pdp-core', badge: 'Festive', image: asset('assam/assam_kurta.webp') })}
          ${productCard({ title: 'Festive Decor Set', price: 299, route: 'pdp-core', image: asset('assam/assam_decor_set.webp') })}
          ${productCard({ title: 'Self-Care Gift Box', price: 449, route: 'pdp-core', badge: 'Mall', image: asset('assam/assam_selfcare_gift.webp') })}
          ${productCard({ title: 'Travel Utility Kit', price: 249, route: 'pdp-core', image: asset('assam/assam_travel_kit.webp') })}
        </div>
      </section>
      <section class="screen-section">${trustTwinCards()}</section>
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
        <div class="hero-banner photo-hero" ${heroStyle('chhath/chhath_hero_banner.webp', 'center')}>
          <div class="hero-copy-card">
            <span class="eyebrow-inline">Chhath special</span>
            <h2>Festive offers for the Chhath season</h2>
            <p>Occasion-led shopping for outfits, puja preparation, gifting and useful essentials.</p>
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
        <div class="hero-banner photo-hero" ${heroStyle('mall/mall_grooming_banner.webp', 'center')}>
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
        <div class="hero-banner photo-hero" ${heroStyle('mtrusted/mtrusted_fashion_banner.webp', 'center')}>
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
        <button class="seller-mini-strip" data-go="seller-profile">
          <img src="${asset('seller/seller_xyz_logo.webp')}" alt="XYZ Fashion logo">
          <span><b>XYZ Fashion</b><small>Strong category performance · reliable fulfilment · low issue incidence</small></span>
          <strong>→</strong>
        </button>
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
        backRoute: personas[state.persona].entryRoute
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
          <button class="promo-card" data-go="pdp-core"><h4>Chhath home prep bundle</h4><p>Decor, serving and hosting essentials in one easy-to-add cluster.</p></button>
          <button class="promo-card" data-go="pdp-core"><h4>Celebration look bundle</h4><p>Apparel plus footwear and accessories for the full festive outfit.</p></button>
        </div>
      </section>
    `
  });
}

function searchScreen() {
  return phoneTemplate({
    nav: 'home',
    content: `
      ${appBar({ brand: false, title: 'SEARCH', subtitle: 'Guided query results', searchText: 'black regular fit casual shirt', chips: [ {label: 'Relevant first'}, {label: 'MTrusted'}, {label: 'Under ₹499'} ], backRoute: personas[state.persona].entryRoute })}
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
  const p = selectedProduct();
  const isBlackShirt = /black.*shirt|shirt.*black|regular fit casual shirt/i.test(p.title) || p.image.includes('prod_black_shirt');
  const details = productDetailsFor(p.kind);
  const thumbnails = isBlackShirt
    ? [
        ['products/prod_black_shirt_main.webp', 'Front view', 'ugc-gallery'],
        ['products/prod_black_shirt_back.webp', 'Back view', 'ugc-gallery'],
        ['products/prod_black_shirt_detail.webp', 'Fabric detail', 'product-details'],
        ['products/shirt_button_detail.webp', 'Construction detail', 'product-details']
      ]
    : [[p.image.replace(/^assets\//,''), 'Product view', 'product-details']];
  const reviewThemes = p.kind === 'grooming'
    ? [['Packaging','Arrived well packed'],['Usage','Easy everyday routine'],['Quality','Mostly positive'],['Value','Good for the price']]
    : [['Fit','Mostly true to size'],['Material','Matches listing well'],['Colour','Generally matches images'],['Quality','Mostly positive']];
  const sellerName = p.kind === 'grooming' ? 'Mall Partner Store' : 'XYZ Fashion';
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Buy now', route: 'checkout' }, { label: 'Add to cart', route: 'cart' }),
    content: `
      ${appBar({ brand: false, title: 'PRODUCT', subtitle: 'Proof-first product detail page', searchText: 'Search related products', backRoute: state.persona === 'mall' ? 'category-grooming' : (state.persona === 'chhath' ? 'category-chhath' : state.persona === 'assam' ? 'category-assam' : 'category-fashion') })}
      <div class="product-detail-hero realistic-pdp-hero">
        <div>
          <button class="pdp-main-image" data-go="product-details" aria-label="Open product details"><img src="${p.image}" alt="${p.title}"></button>
          <div class="thumbnail-row photo-thumbnail-row">
            ${thumbnails.map(([path,alt,route]) => { const src = /^data:|^https?:/.test(path) ? path : (path.startsWith('assets/') ? path : asset(path)); return `<button class="thumbnail photo-thumb" data-go="${route}"><img src="${src}" alt="${alt}"></button>`; }).join('')}
          </div>
        </div>
        <div class="info-stack">
          <div class="trust-line"><span class="badge-pill">${state.persona === 'mall' || p.kind === 'grooming' ? 'Meesho Mall' : 'MTrusted'}</span><span class="tiny-pill">Top rated</span></div>
          <h2>${p.title}</h2>
          <div class="info-subline">${p.kind === 'grooming' ? 'Daily-use grooming essential' : p.kind === 'utility' ? 'Everyday value pick' : 'Popular selected variant'}</div>
          <div class="hero-price"><span class="price">₹${p.price}</span></div>
          <div class="info-subline">Free delivery on eligible orders</div>
          ${p.kind === 'fashion' ? `<div class="size-label">Size</div><div class="size-grid"><button class="size-pill" data-go="pdp-core">S</button><button class="size-pill" data-go="pdp-core">M</button><button class="size-pill active" data-go="pdp-core">L</button><button class="size-pill" data-go="pdp-core">XL</button></div>` : ''}
        </div>
      </div>

      <div class="info-card info-card-button" data-go="product-details" role="button" tabindex="0">
        ${sectionHeader('Product details', 'Decision-critical information, standardised for this category.', 'View all details', 'product-details')}
        <div class="details-grid">${details.map(([k,v]) => `<div class="detail-item"><b>${k}</b><span>${v}</span></div>`).join('')}</div>
      </div>

      <div class="info-card seller-module info-card-button" data-go="seller-profile" role="button" tabindex="0">
        <div class="seller-inline-heading">${p.kind === 'fashion' ? `<img src="${asset('seller/seller_xyz_logo.webp')}" alt="Seller logo">` : `<span class="seller-generic-logo small">${p.kind === 'grooming' ? 'M' : '✓'}</span>`}<span><small>Sold by</small><b>${sellerName}</b></span><strong>View seller →</strong></div>
        <div class="trust-badges"><div class="trust-badge"><b>Strong category performance</b><span>Stable buyer outcomes.</span></div><div class="trust-badge"><b>Reliable fulfilment</b><span>Consistent shipping outcomes.</span></div><div class="trust-badge"><b>Low issue incidence</b><span>Healthier post-order experience.</span></div></div>
      </div>

      <div class="info-card info-card-button" data-go="reviews" role="button" tabindex="0">
        ${sectionHeader('Customers say', 'Summarised from verified buyer feedback', 'Review intelligence', 'reviews')}
        <div class="review-pill-grid">${reviewThemes.map(([k,v]) => `<div class="review-pill"><b>${k}</b><span>${v}</span></div>`).join('')}</div>
        <div class="buyer-avatar-row">${[1,2,3,4].map(i => `<img src="${buyerAvatar(i)}" alt="Verified buyer ${i}">`).join('')}<span>Verified buyer reviews</span></div>
      </div>

      <div class="info-card info-card-button" data-go="ugc-gallery" role="button" tabindex="0">
        ${sectionHeader('Buyer visual proof', isBlackShirt ? 'Verified buyer photos & videos' : 'Product and buyer evidence', 'View gallery', 'ugc-gallery')}
        <div class="ugc-row photo-ugc-row">
          ${isBlackShirt ? `<img src="${asset('reviews/ugc_black_shirt_01.webp')}" alt="Buyer wearing black shirt"><img src="${asset('reviews/ugc_black_shirt_video_cover.webp')}" alt="Buyer video cover"><img src="${asset('reviews/ugc_black_shirt_02.webp')}" alt="Buyer wearing black shirt outdoors">` : `<img src="${p.image}" alt="${p.title}"><img src="${p.image}" alt="Product view"><img src="${p.image}" alt="Product detail view">`}
        </div>
        <div class="review-quote"><b>Verified Purchase</b><p>“The product matched the listing and the order experience was straightforward.”</p></div>
      </div>

      <div class="info-card info-card-button" data-go="certainty" role="button" tabindex="0">
        ${sectionHeader('Transaction certainty', 'Reduce last-mile hesitation', 'View certainty', 'certainty')}
        <div class="transaction-list"><div class="transaction-item"><div class="transaction-icon">🚚</div><div class="transaction-copy"><b>Delivery estimate shown upfront</b><span>Visible near the purchase decision.</span></div></div><div class="transaction-item"><div class="transaction-icon">↩</div><div class="transaction-copy"><b>Eligible return / replacement</b><span>Policy shown before purchase.</span></div></div><div class="transaction-item"><div class="transaction-icon">₹</div><div class="transaction-copy"><b>Refund status traceable</b><span>Payment and reverse-flow clarity.</span></div></div></div>
      </div>

      ${inlineProductGrowthModules()}
    `
  });
}

function productDetailsScreen() {
  const p = selectedProduct();
  const details = productDetailsFor(p.kind);
  const isBlackShirt = /black.*shirt|shirt.*black|regular fit casual shirt/i.test(p.title) || p.image.includes('prod_black_shirt');
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Back to product', route: 'pdp-core' }, { label: 'Add to cart', route: 'cart' }),
    content: `
      ${appBar({ brand: false, title: 'PRODUCT DETAILS', subtitle: p.title, searchText: 'Search product information', backRoute: 'pdp-core' })}
      <div class="list-card product-details-intro"><img class="details-product-photo" src="${p.image}" alt="${p.title}"><div><h4>${p.title}</h4><p class="body-copy">Decision-critical information is structured by category so the shopper does not have to infer important facts from images or description text.</p></div></div>
      <div class="list-card"><h4>Key information</h4><div class="details-grid">${details.map(([k,v]) => `<div class="detail-item"><b>${k}</b><span>${v}</span></div>`).join('')}</div></div>
      ${p.kind === 'fashion' ? `<div class="list-card"><h4>Fit & construction proof</h4><div class="detail-proof-grid"><figure><img src="${asset(isBlackShirt ? 'products/shirt_size_guide.webp' : 'products/shirt_fit_side.webp')}" alt="Size and fit guide"><figcaption>Size & fit</figcaption></figure><figure><img src="${asset('products/shirt_fabric_macro.webp')}" alt="Fabric detail"><figcaption>Material detail</figcaption></figure><figure><img src="${asset('products/shirt_button_detail.webp')}" alt="Construction detail"><figcaption>Construction</figcaption></figure></div></div>` : `<div class="list-card"><h4>Package & usage proof</h4><div class="detail-proof-grid"><figure><img src="${p.image}" alt="Product pack"><figcaption>Product pack</figcaption></figure><figure><img src="${asset('mall/mall_grooming_banner.webp')}" alt="Grooming context"><figcaption>Usage context</figcaption></figure></div></div>`}
    `
  });
}

function sellerProfile() {
  const p = selectedProduct();
  const isFashion = p.kind === 'fashion';
  const sellerName = isFashion ? 'XYZ Fashion' : (p.kind === 'grooming' ? 'Mall Partner Store' : 'Verified Marketplace Seller');
  const category = isFashion ? 'Fashion' : (p.kind === 'grooming' ? 'Men’s Grooming' : 'Marketplace Utility');
  const cover = isFashion ? asset('seller/seller_xyz_profile_banner.webp') : (p.kind === 'grooming' ? asset('mall/mall_grooming_banner.webp') : asset('mtrusted/fulfilment_package.webp'));
  const ops = isFashion ? asset('seller/seller_xyz_packaging.webp') : asset('mtrusted/fulfilment_package.webp');
  const identity = isFashion ? `<img class="seller-profile-logo" src="${asset('seller/seller_xyz_logo.webp')}" alt="XYZ Fashion logo">` : `<span class="seller-generic-logo">${p.kind === 'grooming' ? 'M' : '✓'}</span>`;
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Back to PDP', route: 'pdp-core' }, { label: 'View trusted picks', route: p.kind === 'grooming' ? 'mall-home' : 'mtrusted-home' }),
    content: `
      ${appBar({ brand: false, title: 'SELLER PROFILE', subtitle: 'Trust evidence made legible', searchText: 'Search this seller', backRoute: 'pdp-core' })}
      <div class="seller-cover"><img src="${cover}" alt="${sellerName} seller operation"></div>
      <div class="list-card seller-profile-head">${identity}<div><h4>${sellerName}</h4><p class="body-copy">Seller performance in ${category} · Illustrative prototype profile.</p></div></div>
      <div class="list-card"><div class="badge-grid"><div class="mini-card center"><h4>4.6 / 5</h4><p>Buyer satisfaction</p></div><div class="mini-card center"><h4>95%</h4><p>On-time fulfilment</p></div><div class="mini-card center"><h4>Low</h4><p>Issue incidence</p></div></div></div>
      <div class="list-card seller-ops-card"><img src="${ops}" alt="Seller fulfilment and packing"><div><h4>Operational proof</h4><p class="body-copy">Quality checks, organised packing and category experience make the seller signal easier to trust.</p></div></div>
      <div class="list-card"><h4>Why this seller feels trustworthy</h4><div class="detail-list"><div class="detail-list-item"><b>Strong category history</b><span>Consistent performance in ${category}.</span></div><div class="detail-list-item"><b>Reliable fulfilment</b><span>Good shipping consistency and operational outcomes.</span></div><div class="detail-list-item"><b>Lower issue signals</b><span>Cleaner post-order experience relative to marketplace baselines.</span></div><div class="detail-list-item"><b>Listing quality discipline</b><span>Better description completeness and clearer buyer expectations.</span></div></div></div>
    `
  });
}

function reviewsScreen() {
  const p = selectedProduct();
  const isBlackShirt = /black.*shirt|shirt.*black|regular fit casual shirt/i.test(p.title) || p.image.includes('prod_black_shirt');
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Back to PDP', route: 'pdp-core' }, { label: 'See buyer gallery', route: 'ugc-gallery' }),
    content: `
      ${appBar({ brand: false, title: 'REVIEW INTELLIGENCE', subtitle: p.title, searchText: 'Search reviews', backRoute: 'pdp-core' })}
      <div class="list-card"><h4>What verified buyers are saying</h4><div class="detail-tags"><span class="detail-tag">Quality: mostly positive</span><span class="detail-tag">Value: good for price</span><span class="detail-tag">Listing match: strong</span><span class="detail-tag">Delivery: generally reliable</span></div></div>
      <div class="list-card"><h4>Pros & watch-outs</h4><div class="two-up"><div class="mini-card"><h4>Pros</h4><p>Good value, clear listing information and a dependable first impression.</p></div><div class="mini-card"><h4>Watch-outs</h4><p>Check the selected variant and category-specific details before ordering.</p></div></div></div>
      <div class="list-card"><h4>Traceable reviews</h4><div class="review-feed">${[1,2,3].map((i) => `<article class="review-feed-card"><img class="reviewer-avatar" src="${buyerAvatar(i)}" alt="Verified buyer"><div><b>Verified buyer</b><small>Verified Purchase</small><p>${i===1?'“Matched the listing well and felt worth the price.”':i===2?'“The details helped me know what to expect before ordering.”':'“Delivery and packaging were straightforward.”'}</p></div>${isBlackShirt ? `<img class="review-proof-thumb" src="${asset(`reviews/ugc_black_shirt_0${i}.webp`)}" alt="Buyer proof">` : `<img class="review-proof-thumb" src="${p.image}" alt="${p.title}">`}</article>`).join('')}</div></div>
    `
  });
}

function ugcGalleryScreen() {
  const p = selectedProduct();
  const isBlackShirt = /black.*shirt|shirt.*black|regular fit casual shirt/i.test(p.title) || p.image.includes('prod_black_shirt');
  const gallery = isBlackShirt
    ? ['reviews/ugc_black_shirt_01.webp','reviews/ugc_black_shirt_02.webp','reviews/ugc_black_shirt_03.webp','reviews/ugc_black_shirt_04.webp','reviews/ugc_black_shirt_video_cover.webp','reviews/ugc_black_shirt_folded.webp'].map(asset)
    : [p.image,p.image,p.image,p.image];
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Back to PDP', route: 'pdp-core' }, { label: 'See reviews', route: 'reviews' }),
    content: `
      ${appBar({ brand: false, title: 'BUYER VISUAL PROOF', subtitle: p.title, searchText: 'Search buyer content', backRoute: 'pdp-core' })}
      <div class="list-card"><h4>${isBlackShirt ? 'Verified purchase media' : 'Product proof gallery'}</h4><div class="ugc-gallery-grid">${gallery.map((src,i) => `<figure><img src="${src}" alt="Buyer proof ${i+1}"><figcaption>${isBlackShirt ? (i===4?'Video review':'Verified buyer') : 'Product view'}</figcaption></figure>`).join('')}</div></div>
      <div class="list-card"><h4>Why visual proof matters</h4><div class="detail-list"><div class="detail-list-item"><b>Reality versus listing</b><span>Helps shoppers judge how closely the product matches expectations.</span></div><div class="detail-list-item"><b>Variant confidence</b><span>Provides a more tangible sense of the selected product.</span></div><div class="detail-list-item"><b>Traceability</b><span>Buyer content remains connected to verified purchase context.</span></div></div></div>
    `
  });
}

function certaintyScreen() {
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Proceed to checkout', route: 'checkout' }, { label: 'Back to PDP', route: 'pdp-core' }),
    content: `
      ${appBar({ brand: false, title: 'TRANSACTION CERTAINTY', subtitle: 'Delivery, returns and payments', searchText: 'Search policy help', backRoute: 'pdp-core' })}
      <div class="list-card">
        <h4>What happens after you order</h4>
        <div class="certainty-photo-grid">
          <button class="certainty-photo-card" data-go="certainty"><img src="${asset('trust/trust_delivery.webp')}" alt="Delivery at doorstep"><span><b>Delivery promise</b><small>Expected by Tue, 8 Oct</small></span></button>
          <button class="certainty-photo-card" data-go="certainty"><img src="${asset('trust/trust_returns.webp')}" alt="Product return packaging"><span><b>Easy returns</b><small>7-day eligible return / replacement</small></span></button>
          <button class="certainty-photo-card wide" data-go="certainty"><img src="${asset('trust/trust_payment.webp')}" alt="Secure mobile payment"><span><b>Payment & refund clarity</b><small>Secure payments with traceable refund status</small></span></button>
        </div>
      </div>
      <div class="list-card"><h4>Why this matters</h4><p class="body-copy">Delivery, returns and refunds are made visible before purchase so transaction confidence is not deferred to checkout.</p></div>
    `
  });
}

function growthCatalog() {
  const p = selectedProduct();
  const current = { title: p.title, price: p.price, image: p.image, badge2: 'Current' };
  const catalogs = {
    chhath: {
      completeTitle: 'Complete Your Festive Look',
      completeSub: 'Build the celebration look and related festive needs around the product you already trust.',
      complete: [
        { title: 'Printed Kurta Set', price: 699, image: asset('chhath/chhath_kurta.webp'), badge: 'Festive' },
        { title: 'Celebration Saree', price: 799, image: asset('chhath/chhath_saree.webp') },
        { title: 'Travel Utility Pouch', price: 249, image: asset('chhath/chhath_travel_pouch.webp') }
      ],
      together: [
        { title: 'Puja & Decor Pack', price: 249, image: asset('chhath/chhath_decor_pack.webp') },
        { title: 'Gift Hamper', price: 299, image: asset('chhath/chhath_gift_hamper.webp') }
      ],
      suggested: [
        { title: 'Celebration Saree', price: 799, image: asset('chhath/chhath_saree.webp'), badge: 'Festive' },
        { title: 'Printed Kurta Set', price: 699, image: asset('chhath/chhath_kurta.webp') },
        { title: 'Gift Hamper', price: 299, image: asset('chhath/chhath_gift_hamper.webp') },
        { title: 'Puja & Decor Pack', price: 249, image: asset('chhath/chhath_decor_pack.webp') }
      ]
    },
    assam: {
      completeTitle: 'Complete Your Festive Look',
      completeSub: 'Bring together celebration wear, gifting and practical seasonal essentials in one guided step.',
      complete: [
        { title: 'Assam Festive Kurta', price: 429, image: asset('assam/assam_kurta.webp'), badge: 'Festive' },
        { title: 'Festive Decor Set', price: 299, image: asset('assam/assam_decor_set.webp') },
        { title: 'Travel Utility Kit', price: 249, image: asset('assam/assam_travel_kit.webp') }
      ],
      together: [
        { title: 'Self-Care Gift Box', price: 449, image: asset('assam/assam_selfcare_gift.webp') },
        { title: 'Festive Decor Set', price: 299, image: asset('assam/assam_decor_set.webp') }
      ],
      suggested: [
        { title: 'Assam Festive Kurta', price: 429, image: asset('assam/assam_kurta.webp'), badge: 'Popular near you' },
        { title: 'Self-Care Gift Box', price: 449, image: asset('assam/assam_selfcare_gift.webp') },
        { title: 'Travel Utility Kit', price: 249, image: asset('assam/assam_travel_kit.webp') },
        { title: 'Festive Decor Set', price: 299, image: asset('assam/assam_decor_set.webp') }
      ]
    },
    mall: {
      completeTitle: 'Complete Your Routine',
      completeSub: 'Build a practical grooming routine around the branded product you have already evaluated.',
      complete: [
        { title: 'Daily Face Wash', price: 199, image: asset('mall/mall_facewash.webp'), badge: 'Mall' },
        { title: 'Beard Oil', price: 249, image: asset('mall/mall_beard_oil.webp'), badge: 'Mall' },
        { title: 'Deodorant Body Spray', price: 179, image: asset('mall/mall_deodorant.webp'), badge: 'Mall' }
      ],
      together: [
        { title: 'Shaving Essentials Kit', price: 279, image: asset('mall/mall_shaving_kit.webp') },
        { title: 'Beard Oil', price: 249, image: asset('mall/mall_beard_oil.webp') }
      ],
      suggested: [
        { title: 'Daily Face Wash', price: 199, image: asset('mall/mall_facewash.webp'), badge: 'Mall' },
        { title: 'Beard Oil', price: 249, image: asset('mall/mall_beard_oil.webp'), badge: 'Mall' },
        { title: 'Shaving Essentials Kit', price: 279, image: asset('mall/mall_shaving_kit.webp'), badge: 'Mall' },
        { title: 'Deodorant Body Spray', price: 179, image: asset('mall/mall_deodorant.webp'), badge: 'Mall' }
      ]
    },
    mtrusted: {
      completeTitle: 'Complete Your Look',
      completeSub: 'Add compatible wardrobe pieces while keeping the same evidence-led shopping flow.',
      complete: [
        { title: 'Black Casual Shirt', price: 329, image: asset('products/prod_black_shirt_main.webp'), badge: 'MTrusted' },
        { title: 'Regular Fit Trousers', price: 449, image: asset('products/prod_trousers.webp'), badge: 'MTrusted' },
        { title: 'Casual Sneakers', price: 699, image: asset('products/prod_sneakers.webp'), badge: 'MTrusted' }
      ],
      together: [
        { title: 'Minimal Backpack', price: 499, image: asset('products/prod_backpack.webp') },
        { title: 'Analog Watch', price: 399, image: asset('products/prod_watch.webp') }
      ],
      suggested: [
        { title: 'Checked Shirt', price: 549, image: asset('products/prod_checked_shirt.webp'), badge: 'MTrusted' },
        { title: 'Basic Polo T-Shirt', price: 239, image: asset('products/prod_polo.webp'), badge: 'MTrusted' },
        { title: 'Regular Fit Trousers', price: 449, image: asset('products/prod_trousers.webp') },
        { title: 'Casual Sneakers', price: 699, image: asset('products/prod_sneakers.webp') }
      ]
    },
    college: {
      completeTitle: 'Complete Your Look',
      completeSub: 'Finish the college outfit around the product you already trust, without returning to a generic feed.',
      complete: [
        { title: 'Black Casual Shirt', price: 329, image: asset('products/prod_black_shirt_main.webp') },
        { title: 'Regular Fit Trousers', price: 449, image: asset('products/prod_trousers.webp') },
        { title: 'Everyday Sneakers', price: 699, image: asset('products/prod_sneakers.webp') }
      ],
      together: [
        { title: 'Minimal Backpack', price: 499, image: asset('products/prod_backpack.webp') },
        { title: 'Analog Watch', price: 399, image: asset('products/prod_watch.webp') }
      ],
      suggested: [
        { title: 'Casual Checked Shirt', price: 299, image: asset('products/prod_checked_shirt.webp'), badge: 'MTrusted' },
        { title: 'Polo Tee', price: 349, image: asset('products/prod_polo.webp') },
        { title: 'Minimal Backpack', price: 499, image: asset('products/prod_backpack.webp') },
        { title: 'Analog Watch', price: 399, image: asset('products/prod_watch.webp') }
      ]
    }
  };

  const catalog = catalogs[state.persona] || catalogs.college;
  const dedupe = (items, max = 4) => {
    const seen = new Set();
    return items.filter(item => {
      const key = item.title.trim().toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, max);
  };

  const complete = dedupe([current, ...catalog.complete], 3);
  const together = dedupe([current, ...catalog.together], 3);
  const suggested = dedupe(catalog.suggested.filter(item => item.title.toLowerCase() !== p.title.toLowerCase()), 4);
  return { ...catalog, current, complete, together, suggested };
}

function growthProductRail(items = []) {
  return `<div class="growth-product-rail">${items.map(item => productCard({
    title: item.title,
    price: item.price,
    route: 'pdp-core',
    image: item.image,
    badge: item.badge || '',
    badge2: item.badge2 || ''
  })).join('')}</div>`;
}

function bundleRows(items = []) {
  return `<div class="bundle-stack">${items.map((item, index) => `
    <button class="bundle-line" data-go="pdp-core" data-product-title="${item.title.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}" data-product-price="${item.price}" data-product-image="${item.image}" data-product-kind="${productKind(item.title)}">
      <span class="bundle-check" aria-hidden="true">✓</span>
      <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async">
      <span class="bundle-copy"><b>${item.title}</b><small>${index === 0 ? 'Your selected product' : 'Frequently paired in this mission'}</small></span>
      <strong>₹${item.price}</strong>
    </button>
  `).join('')}</div>`;
}


function inlineGroupCreatedMarkup(p, created = state.groupCreated) {
  const groupPrice = Math.max(99, Math.round(p.price * 0.92));
  if (!created) {
    return `
      <div class="inline-group-pending">
        <div class="group-pending-icon">2+</div>
        <div>
          <b>No group created yet</b>
          <span>Create a Share & Save group above. The confirmation and participant progress will appear here without leaving this product page.</span>
        </div>
      </div>`;
  }
  return `
    <div class="inline-group-created">
      <div class="inline-success-row"><span class="success-check compact">✓</span><span><b>Your group is ready</b><small>Invite two more shoppers to unlock the group price.</small></span></div>
      <div class="group-created-product"><img src="${p.image}" alt="${p.title}"><span><b>${p.title}</b><small>Group price ₹${groupPrice}</small></span></div>
      <div class="group-participants"><img src="${personaAvatar()}" alt="${PERSONA_NAMES[state.persona]}"><img src="${buyerAvatar(2)}" alt="Invite slot"><img src="${buyerAvatar(3)}" alt="Invite slot"><span>1 joined · 2 invites needed</span></div>
      <div class="inline-group-actions"><button class="mini-action primary" data-action="copy-group-link">Copy share link</button><button class="mini-action" data-go="cart">Go to cart</button></div>
    </div>`;
}

function inlineProductGrowthModules() {
  const p = selectedProduct();
  const growth = growthCatalog();
  const groupPrice = Math.max(99, Math.round(p.price * 0.92));
  const completeTotal = growth.complete.reduce((sum, item) => sum + item.price, 0);
  const togetherTotal = growth.together.reduce((sum, item) => sum + item.price, 0);
  return `
    <section class="growth-module share-save-module inline-growth-section">
      <span class="growth-kicker">Share & Save</span>
      ${sectionHeader('Shop together after you decide', 'Share this exact product with its reviews and trust context, then unlock the group price transparently.', '', '')}
      <button class="share-save-card" data-action="create-group-inline">
        <img src="${asset('share_save_visual.webp')}" alt="Friends sharing a shopping link">
        <span class="share-save-copy"><b>Start a Share & Save group</b><small>Standard price ₹${p.price} · group price ₹${groupPrice}</small><em>${state.groupCreated ? 'Group created on this page ✓' : 'Create group on this page →'}</em></span>
      </button>
    </section>

    <section class="growth-module inline-growth-section inline-group-module">
      <span class="growth-kicker">Group Created</span>
      ${sectionHeader('Group status', 'The Share & Save confirmation stays inside the product page so the shopper never loses product context.', '', '')}
      <div class="inline-group-state ${state.groupCreated ? 'is-created' : 'is-pending'}">${inlineGroupCreatedMarkup(p)}</div>
    </section>

    <section class="growth-module inline-growth-section">
      <span class="growth-kicker">Usually Bought Together</span>
      ${sectionHeader('A practical bundle around this product', 'A small, explainable bundle that stays relevant to the current mission.', '', '')}
      ${bundleRows(growth.together)}
      <div class="bundle-summary">
        <span><b>Bundle total</b><small>${growth.together.length} items · free delivery shown at checkout</small></span>
        <strong>₹${togetherTotal.toLocaleString('en-IN')}</strong>
        <button class="mini-action primary" data-action="add-bundle-cart">Add all</button>
      </div>
    </section>

    <section class="growth-module growth-module-featured inline-growth-section">
      <span class="growth-kicker">Complete Your Look</span>
      ${sectionHeader(growth.completeTitle, growth.completeSub, '', '')}
      ${growthProductRail(growth.complete)}
      <div class="growth-summary-row">
        <span><b>Complete set</b><small>${growth.complete.length} coordinated items</small></span>
        <strong>₹${completeTotal.toLocaleString('en-IN')}</strong>
        <button class="mini-action" data-action="add-complete-cart">Add set</button>
      </div>
    </section>

    <section class="growth-module inline-growth-section final-suggested-products">
      <span class="growth-kicker">Suggested Products</span>
      ${sectionHeader('More picks for this mission', 'Recommendations stay anchored to the current persona, category and shopping intent.', '', '')}
      ${growthProductRail(growth.suggested)}
    </section>`;
}

function pdpGrowth() {
  const p = selectedProduct();
  const growth = growthCatalog();
  const completeTotal = growth.complete.reduce((sum, item) => sum + item.price, 0);
  const togetherTotal = growth.together.reduce((sum, item) => sum + item.price, 0);
  return phoneTemplate({
    nav: 'home',
    ctas: `
      <div class="bottom-cta">
        <div class="cta-bar">
          <button class="cta-button" data-action="add-complete-cart">Add complete set</button>
          <button class="cta-button primary" data-action="buy-selected-now">Buy selected item</button>
        </div>
      </div>`,
    content: `
      ${appBar({ brand: false, title: 'MORE FOR YOUR MISSION', subtitle: 'Useful next steps after product confidence', searchText: 'Search related products', backRoute: 'pdp-core' })}

      <section class="growth-module growth-module-featured">
        <span class="growth-kicker">Complete Your Look</span>
        ${sectionHeader(growth.completeTitle, growth.completeSub, '', '')}
        ${growthProductRail(growth.complete)}
        <div class="growth-summary-row">
          <span><b>Complete set</b><small>${growth.complete.length} coordinated items</small></span>
          <strong>₹${completeTotal.toLocaleString('en-IN')}</strong>
          <button class="mini-action" data-action="add-complete-cart">Add set</button>
        </div>
      </section>

      <section class="growth-module">
        <span class="growth-kicker">Usually Bought Together</span>
        ${sectionHeader('A practical bundle around this product', 'A small, explainable bundle — not an unrelated recommendation dump.', '', '')}
        ${bundleRows(growth.together)}
        <div class="bundle-summary">
          <span><b>Bundle total</b><small>${growth.together.length} items · free delivery shown at checkout</small></span>
          <strong>₹${togetherTotal.toLocaleString('en-IN')}</strong>
          <button class="mini-action primary" data-action="add-bundle-cart">Add all</button>
        </div>
      </section>

      <section class="growth-module">
        <span class="growth-kicker">Suggested Products</span>
        ${sectionHeader('More picks for this mission', 'Recommendations stay anchored to the current persona, category and shopping intent.', '', '')}
        ${growthProductRail(growth.suggested)}
      </section>

      <section class="growth-module share-save-module">
        <span class="growth-kicker">Share & Save</span>
        ${sectionHeader('Shop together after you decide', 'Share the exact product and proof context with friends, then unlock the group price transparently.', '', '')}
        <button class="share-save-card" data-go="group-save">
          <img src="${asset('share_save_visual.webp')}" alt="Friends sharing a shopping link">
          <span class="share-save-copy"><b>Start a Share & Save group</b><small>Invite friends without losing the product details, reviews or trust signals you used to decide.</small><em>Explore group price →</em></span>
        </button>
      </section>

      <section class="growth-module mission-trust-card">
        ${sectionHeader('Trust shortcuts stay visible', 'Growth features never replace the proof that earned confidence.', '', '')}
        ${trustTwinCards()}
      </section>
    `
  });
}

function mallExplainer() {
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Explore Mall products', route: 'mall-home' }, { label: 'Back', route: 'pdp-core' }),
    content: `
      ${appBar({ brand: false, title: 'MEESHO MALL', subtitle: 'Brand / provenance trust', searchText: 'Search Mall', backRoute: 'pdp-core' })}
      <div class="explainer-visual"><img src="${asset('mall/mall_grooming_banner.webp')}" alt="Men’s grooming campaign"></div>
      <div class="list-card"><h4>What Meesho Mall means</h4><p class="body-copy">Mall is the destination for shoppers who want brand recognition and clearer source confidence. It is a distinct branded assortment system, not a generic trust badge.</p><div class="explainer-list"><div class="explainer-point"><b>Brand recognition</b><span>Known brands help the shopper trust the source more quickly.</span></div><div class="explainer-point"><b>Clear source</b><span>Products come from organised branded assortment pathways.</span></div><div class="explainer-point"><b>Value confidence</b><span>Brand-sensitive shopping missions become easier and faster.</span></div></div></div>
    `
  });
}

function mtrustedExplainer() {
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Explore MTrusted picks', route: 'mtrusted-home' }, { label: 'Back', route: 'pdp-core' }),
    content: `
      ${appBar({ brand: false, title: 'MTRUSTED', subtitle: 'Seller + listing quality trust', searchText: 'Search MTrusted', backRoute: 'pdp-core' })}
      <div class="evidence-photo-grid explainer-evidence"><div class="evidence-photo-card static"><img src="${asset('mtrusted/quality_check_fashion.webp')}" alt="Fashion quality check"><span><b>Listing discipline</b><small>Clearer product information</small></span></div><div class="evidence-photo-card static"><img src="${asset('mtrusted/fulfilment_package.webp')}" alt="Fulfilment package"><span><b>Fulfilment evidence</b><small>More dependable operations</small></span></div></div>
      <div class="list-card"><h4>What MTrusted means</h4><p class="body-copy">MTrusted organises evidence about the seller and listing so the user does not need to inspect scattered marketplace signals manually.</p><div class="explainer-list"><div class="explainer-point"><b>Seller reliability</b><span>Signals from category history and better issue outcomes.</span></div><div class="explainer-point"><b>Reliable fulfilment</b><span>Operational consistency reduces hesitation before purchase.</span></div><div class="explainer-point"><b>Listing completeness</b><span>Better product information lowers expectation gaps.</span></div></div></div>
    `
  });
}

function groupSaveScreen() {
  const p = selectedProduct();
  const groupPrice = Math.max(99, Math.round(p.price * 0.92));
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Create group', route: 'group-created' }, { label: 'Back to recommendations', route: 'pdp-core' }),
    content: `
      ${appBar({ brand: false, title: 'SHARE & SAVE', subtitle: `${PERSONA_NAMES[state.persona]} · group purchase`, searchText: 'Search help', backRoute: 'pdp-core' })}
      <div class="group-product-card">
        <img src="${p.image}" alt="${p.title}">
        <div><span class="badge-pill">Selected product</span><h4>${p.title}</h4><p>Share the same listing, reviews and trust context with your group.</p></div>
      </div>
      <div class="group-visual-card"><img src="${asset('share_save_visual.webp')}" alt="Friends sharing a shopping link"><div class="group-visual-copy"><span class="badge-pill">Optional group buying</span><h4>Unlock a lower price together</h4><p>Create a group only after the product has already earned confidence.</p></div></div>
      <div class="list-card"><div class="detail-stat-grid"><div class="detail-stat"><b>Standard price</b><span>₹${p.price}</span></div><div class="detail-stat"><b>Group price</b><span>₹${groupPrice}</span></div></div></div>
      <div class="list-card"><h4>How it works</h4><div class="detail-list"><div class="detail-list-item"><b>1 · Create a group</b><span>Start from the exact product you evaluated.</span></div><div class="detail-list-item"><b>2 · Invite two friends</b><span>They see the same proof, seller context and reviews.</span></div><div class="detail-list-item"><b>3 · Unlock when complete</b><span>The lower price appears only when the group condition is met.</span></div></div></div>
    `
  });
}

function groupCreatedScreen() {
  const p = selectedProduct();
  const groupPrice = Math.max(99, Math.round(p.price * 0.92));
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Go to cart', route: 'cart' }, { label: 'Back to recommendations', route: 'pdp-core' }),
    content: `
      ${appBar({ brand: false, title: 'GROUP CREATED', subtitle: 'Share & Save', searchText: 'Search more', backRoute: 'group-save' })}
      <div class="list-card group-created-card">
        <div class="success-check">✓</div>
        <span class="growth-kicker">Group Created</span>
        <h4>Your group is ready</h4>
        <p class="body-copy">Invite two more shoppers to unlock the ₹${groupPrice} group price for ${p.title}. Everyone keeps access to the same product proof and trust information.</p>
        <div class="group-created-product"><img src="${p.image}" alt="${p.title}"><span><b>${p.title}</b><small>Group price ₹${groupPrice}</small></span></div>
        <div class="group-participants"><img src="${personaAvatar()}" alt="${PERSONA_NAMES[state.persona]}"><img src="${buyerAvatar(2)}" alt="Invite slot"><img src="${buyerAvatar(3)}" alt="Invite slot"><span>1 joined · 2 invites needed</span></div>
        <img class="group-created-visual" src="${asset('share_save_visual.webp')}" alt="Friends sharing a shopping link">
        <button class="cta-button primary" data-action="copy-group-link">Copy share link</button>
      </div>
    `
  });
}

function cartScreen() {
  const p = selectedProduct();
  const items = Array.isArray(state.cartItems) && state.cartItems.length ? state.cartItems : [p];
  const total = items.reduce((sum, item) => sum + Number(item.price || 0), 0);
  return phoneTemplate({
    nav: 'orders',
    ctas: ctaBar({ label: 'Proceed to checkout', route: 'checkout' }, { label: 'Continue shopping', route: personas[state.persona].entryRoute }),
    content: `
      ${appBar({ brand: false, title: 'CART', subtitle: `${items.length} ${items.length === 1 ? 'item' : 'items'} ready for checkout`, searchText: 'Search more products', backRoute: 'pdp-core' })}
      <div class="cart-list-card">${items.map(item => `
        <div class="realistic-cart-line">
          <img src="${item.image}" alt="${item.title}">
          <div><b>${item.title}</b><div class="product-meta">Qty 1 · selected for this mission</div><div class="price">₹${item.price}</div><div class="trust-line"><span class="tiny-pill">Trusted seller</span><span class="badge-pill">Easy returns</span></div></div>
          <span class="qty-pill">Qty 1</span>
        </div>`).join('')}</div>
      <div class="checkout-card"><h4>Price details</h4><div class="price-line"><span>Item total</span><b>₹${total.toLocaleString('en-IN')}</b></div><div class="price-line"><span>Delivery</span><b>Free</b></div><div class="price-line"><span>Total</span><b>₹${total.toLocaleString('en-IN')}</b></div></div>
      <div class="checkout-card cart-trust-note"><img src="${asset('trust/trust_delivery.webp')}" alt="Delivery"><div><b>Purchase confidence carries into checkout</b><span>Delivery, return and payment information stays visible through the final step.</span></div></div>
    `
  });
}

function checkoutScreen() {
  const p = selectedProduct();
  const checkoutItems = Array.isArray(state.cartItems) && state.cartItems.length ? state.cartItems : [p];
  const checkoutTotal = checkoutItems.reduce((sum, item) => sum + Number(item.price || 0), 0);
  const [buyerName] = profileCopy();
  const deliveryArea = { chhath: 'Patna, Bihar', assam: 'Guwahati, Assam', mall: 'Mumbai, Maharashtra', mtrusted: 'Jaipur, Rajasthan', college: 'Guwahati, Assam' }[state.persona] || 'India';
  return phoneTemplate({
    nav: 'orders',
    ctas: ctaBar({ label: 'Place order', route: 'order-placed' }, { label: 'Back to cart', route: 'cart' }),
    content: `
      ${appBar({ brand: false, title: 'CHECKOUT', subtitle: 'Final confirmation', searchText: 'Search help', backRoute: 'cart' })}
      <div class="checkout-card"><h4>Delivery address</h4><div class="detail-list-item"><b>${buyerName}</b><span>Saved delivery address · ${deliveryArea}</span></div></div>
      <div class="checkout-card checkout-items-card"><h4>Items in this order</h4><div class="checkout-items-list">${checkoutItems.map(item => `<div class="checkout-mini-item"><img src="${item.image}" alt="${item.title}"><span><b>${item.title}</b><small>Qty 1</small></span><strong>₹${item.price}</strong></div>`).join('')}</div></div>
      <div class="checkout-card"><h4>Order summary</h4><div class="checkout-row"><span>${checkoutItems.length} ${checkoutItems.length === 1 ? 'item' : 'items'}</span><b>₹${checkoutTotal.toLocaleString('en-IN')}</b></div><div class="checkout-row"><span>Delivery</span><b>Free</b></div><div class="checkout-row"><span>Expected by Tue, 8 Oct</span><b>Tracked</b></div></div>
      <div class="checkout-card"><h4>Payment method</h4><div class="detail-list"><div class="detail-list-item"><b>UPI / Wallet</b><span>Fast and familiar for mobile-first shoppers.</span></div><div class="detail-list-item"><b>Cash on Delivery</b><span>Available for eligible orders.</span></div><div class="detail-list-item"><b>Cards & Netbanking</b><span>Secure payments with refund traceability.</span></div></div></div>
    `
  });
}

function orderPlacedScreen() {
  const p = selectedProduct();
  const orderedItems = Array.isArray(state.cartItems) && state.cartItems.length ? state.cartItems : [p];
  const orderTotal = orderedItems.reduce((sum, item) => sum + Number(item.price || 0), 0);
  return phoneTemplate({
    nav: 'orders',
    ctas: ctaBar({ label: 'Track my order', route: 'orders' }, { label: 'Explore more', route: personas[state.persona].entryRoute }),
    content: `
      ${appBar({ brand: false, title: 'ORDER PLACED', subtitle: 'Purchase complete', searchText: 'Search more', backRoute: 'checkout' })}
      <div class="list-card order-success-card"><div class="success-check">✓</div><h4>Your order is confirmed</h4><div class="order-success-products">${orderedItems.slice(0,3).map(item => `<img src="${item.image}" alt="${item.title}">`).join('')}</div><b>${orderedItems.length === 1 ? orderedItems[0].title : `${orderedItems.length} items for your mission`}</b><p>₹${orderTotal.toLocaleString('en-IN')} · Expected by Tue, 8 Oct · Payment and refund status remain trackable.</p><div class="detail-stat-grid"><div class="detail-stat"><b>Order ID</b><span>MS-248136</span></div><div class="detail-stat"><b>Status</b><span>Packed</span></div></div></div>
      <div class="list-card"><h4>Next helpful actions</h4><div class="detail-list"><div class="detail-list-item"><b>Track progress</b><span>View delivery milestones from My Orders.</span></div><div class="detail-list-item"><b>Continue the mission</b><span>Return to relevant discovery instead of a generic feed.</span></div></div></div>
    `
  });
}

function categoriesScreen() {
  return phoneTemplate({
    nav: 'categories',
    content: `
      ${appBar({ brand: false, title: 'CATEGORIES', subtitle: 'Browse by mission or department', searchText: 'Search categories', backRoute: personas[state.persona].entryRoute })}
      <section class="screen-section">
        ${sectionHeader('Popular categories', 'Everything here is interactive.', '', '')}
        <div class="category-grid">
          ${categoryCard({ icon:'👔', title:'Men’s Fashion', subtitle:'Shirts · jeans', route:'category-fashion' })}
          ${categoryCard({ icon:'👗', title:'Women’s Fashion', subtitle:'Ethnic wear', route:'category-chhath' })}
          ${categoryCard({ icon:'🧴', title:'Men’s Grooming', subtitle:'Face care', route:'category-grooming' })}
          ${categoryCard({ icon:'🎉', title:'Assam Festive', subtitle:'Regional picks', route:'category-assam' })}
          ${categoryCard({ icon:'🪔', title:'Chhath Festive', subtitle:'Occasion shopping', route:'category-chhath' })}
          ${categoryCard({ icon:'⌚', title:'Electronics', subtitle:'Accessories', route:'search' })}
          ${categoryCard({ icon:'🏠', title:'Home Utility', subtitle:'Kitchen & more', route:'search' })}
          ${categoryCard({ icon:'🎁', title:'Gifting', subtitle:'Budget finds', route:'search' })}
        </div>
      </section>
    `
  });
}

function accountScreen() {
  const [name, meta] = profileCopy();
  return phoneTemplate({
    nav: 'account',
    content: `
      ${appBar({ brand: false, title: 'ACCOUNT', subtitle: 'Saved shortcuts and preferences', searchText: 'Search help or settings', backRoute: personas[state.persona].entryRoute })}
      <div class="list-card account-profile-card"><img src="${personaAvatar()}" alt="${name} profile"><div><h4>${name}</h4><p>${meta}</p></div></div>
      <div class="list-card"><h4>Quick actions</h4><div class="detail-list"><button class="detail-list-item" data-go="wishlist"><b>Saved products</b><span>Revisit products you liked earlier.</span></button><button class="detail-list-item" data-go="orders"><b>My Orders</b><span>Track active orders and repeat purchases.</span></button><button class="detail-list-item" data-go="${personas[state.persona].entryRoute}"><b>Region & context</b><span>Context can help initial discovery without locking the experience to demographics.</span></button></div></div>
    `
  });
}

function ordersScreen() {
  const p = selectedProduct();
  return phoneTemplate({
    nav: 'orders',
    content: `
      ${appBar({ brand: false, title: 'MY ORDERS', subtitle: 'Track post-purchase progress', searchText: 'Search orders', backRoute: 'account' })}
      <div class="list-card"><h4>Recent orders</h4><div class="order-line"><img src="${p.image}" alt="${p.title}"><span><b>${p.title}</b><small>Expected by Tue, 8 Oct</small></span><em class="order-state">Packed</em></div><div class="order-line"><img src="${asset('mall/mall_facewash.webp')}" alt="Face wash"><span><b>Daily Face Wash</b><small>Delivered last week</small></span><em class="order-state">Delivered</em></div><div class="order-line"><img src="${asset('products/prod_sneakers.webp')}" alt="Casual sneakers"><span><b>Casual Sneakers</b><small>Delivered 12 Sep</small></span><button class="qty-pill" data-go="pdp-core">Buy again</button></div></div>
    `
  });
}

function wishlistScreen() {
  return phoneTemplate({
    nav: 'account',
    content: `
      ${appBar({ brand: false, title: 'WISHLIST', subtitle: 'Saved items', searchText: 'Search saved products', backRoute: 'account' })}
      <section class="screen-section">
        ${sectionHeader('Saved products', 'Shortlisted for later comparison or purchase.', '', '')}
        <div class="two-up">
          ${productCard({ title: 'Casual Checked Shirt', price: 299, art: '👔', route: 'pdp-core' })}
          ${productCard({ title: 'Daily Face Wash', price: 199, art: '🧴', route: 'pdp-core', badge: 'Mall' })}
          ${productCard({ title: 'Home Decor Set', price: 199, art: '🏠', route: 'pdp-core' })}
          ${productCard({ title: 'Gift Hamper', price: 299, art: '🎁', route: 'pdp-core' })}
        </div>
      </section>
    `
  });
}

const routes = {
  'college-home': collegeHome,
  'assam-home': assamHome,
  'chhath-home': chhathHome,
  'mall-home': mallHome,
  'mtrusted-home': mtrustedHome,
  'category-fashion': categoryFashion,
  'category-grooming': categoryGrooming,
  'category-assam': categoryAssam,
  'category-chhath': categoryChhath,
  search: searchScreen,
  'pdp-core': pdpCore,
  'product-details': productDetailsScreen,
  'seller-profile': sellerProfile,
  reviews: reviewsScreen,
  'ugc-gallery': ugcGalleryScreen,
  certainty: certaintyScreen,
  'pdp-growth': pdpCore,
  'group-save': pdpCore,
  'group-created': pdpCore,
  'mall-explainer': mallExplainer,
  'mtrusted-explainer': mtrustedExplainer,
  cart: cartScreen,
  checkout: checkoutScreen,
  'order-placed': orderPlacedScreen,
  categories: categoriesScreen,
  account: accountScreen,
  orders: ordersScreen,
  wishlist: wishlistScreen
};

function renderPersonas() {
  const root = $('#persona-list');
  root.innerHTML = Object.values(personas).map(persona => `
    <button class="persona-card ${state.persona === persona.id ? 'active' : ''}" data-persona="${persona.id}">
      <div class="persona-card-main">
        <img class="persona-avatar" src="${asset(persona.avatar)}" alt="${persona.title}">
        <div class="persona-card-copy">
          <div class="persona-top"><b>${persona.title}</b><span class="badge-pill">${persona.id === state.persona ? 'Active' : 'Switch'}</span></div>
          <p>${persona.subtitle}<br>${persona.summary}</p>
        </div>
      </div>
      <div class="persona-tags">${persona.tags.map(tag => `<span class="persona-tag">${tag}</span>`).join('')}</div>
    </button>
  `).join('');
}

function renderDetails() {
  const meta = routeMeta[state.route] || { label: state.route, title: state.route, persona: personas[state.persona]?.title || '', summary: '', keySignals: [], kpi: [] };
  detailPanel.innerHTML = `
    <div class="detail-block">
      <span class="panel-kicker">CURRENT SCREEN</span>
      <h2>${meta.title}</h2>
      <p>${meta.summary}</p>
      <div class="detail-tags">
        <span class="detail-tag">${meta.persona}</span>
        <span class="detail-tag">${meta.label}</span>
      </div>
    </div>
    <div class="detail-block">
      <span class="panel-kicker">EXPERIENCE SIGNALS</span>
      <div class="detail-list">
        ${(meta.keySignals || []).map(item => `<div class="detail-list-item"><b>${item}</b><span>Interactive within the prototype and connected to adjacent trust or commerce screens.</span></div>`).join('')}
      </div>
    </div>
    <div class="detail-block">
      <span class="panel-kicker">WHAT THIS SCREEN SHOULD IMPROVE</span>
      <div class="detail-stat-grid">
        ${(meta.kpi || []).map(item => `<div class="detail-stat"><b>KPI</b><span>${item}</span></div>`).join('')}
      </div>
    </div>
  `;
  if (stageLabel) stageLabel.textContent = (meta.label || state.route).toUpperCase();
}

function renderRoute() {
  const renderer = routes[state.route] || chhathHome;
  deviceCanvas.innerHTML = renderer();
  renderDetails();
  renderPersonas();
  if (state.hotspotMode) deviceCanvas.classList.add('hotspot-mode');
  else deviceCanvas.classList.remove('hotspot-mode');
}

function setPersona(personaId, preserveRoute = false) {
  if (!personas[personaId]) return;
  state.persona = personaId;
  state.history = [];
  state.cartItems = [];
  state.groupCreated = false;
  state.product = defaultProductForPersona(personaId);
  state.route = preserveRoute ? state.route : personas[personaId].entryRoute;
  renderRoute();
  showToast(`${personas[personaId].title} activated`);
}

function homeRoute() {
  return personas[state.persona]?.entryRoute || 'chhath-home';
}

function go(route, { pushHistory = true } = {}) {
  if (!routes[route]) {
    showToast('This screen is not available in the prototype yet');
    return;
  }
  if (route === state.route) return;
  if (pushHistory) state.history.push(state.route);
  state.route = route;
  renderRoute();
}

function goBack(fallback = '') {
  const previous = state.history.pop();
  const target = previous && routes[previous] ? previous : (fallback && routes[fallback] ? fallback : homeRoute());
  state.route = target;
  renderRoute();
}

function handleInlineAction(el) {
  const label = (el.innerText || el.getAttribute('aria-label') || 'Option').trim().replace(/\s+/g, ' ');
  if (el.classList.contains('filter-chip') || el.classList.contains('utility-chip')) {
    el.classList.toggle('active');
    showToast(`${label} ${el.classList.contains('active') ? 'selected' : 'cleared'}`);
    return;
  }
  if (el.classList.contains('size-pill')) {
    el.parentElement?.querySelectorAll('.size-pill').forEach(item => item.classList.remove('active'));
    el.classList.add('active');
    showToast(`Size ${label} selected`);
    return;
  }
  if (el.classList.contains('thumbnail') || el.classList.contains('ugc-thumb')) {
    showToast('Buyer media preview selected');
    return;
  }
  showToast(`${label} selected`);
}

function showToast(text) {
  toastEl.textContent = text;
  toastEl.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toastEl.classList.remove('show'), 1500);
}

document.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[role="button"][data-go]')) {
    event.preventDefault();
    go(event.target.dataset.go);
  }
});

document.addEventListener('click', (event) => {
  const personaButton = event.target.closest('[data-persona]');
  if (personaButton) {
    setPersona(personaButton.dataset.persona);
    return;
  }

  const actionButton = event.target.closest('[data-action]');
  if (actionButton) {
    if (actionButton.dataset.action === 'back') {
      goBack(actionButton.dataset.backFallback || '');
      return;
    }
    if (actionButton.dataset.action === 'copy-group-link') {
      showToast('Share link copied');
      return;
    }
    if (actionButton.dataset.action === 'create-group-inline') {
      state.groupCreated = true;
      const groupState = deviceCanvas.querySelector('.inline-group-state');
      if (groupState) {
        groupState.classList.remove('is-pending');
        groupState.classList.add('is-created');
        groupState.innerHTML = inlineGroupCreatedMarkup(selectedProduct(), true);
      }
      actionButton.querySelector('em')?.replaceChildren('Group created on this page ✓');
      showToast('Share & Save group created');
      return;
    }
    if (actionButton.dataset.action === 'buy-selected-now') {
      state.cartItems = [];
      go('checkout');
      return;
    }
    if (actionButton.dataset.action === 'add-complete-cart') {
      const growth = growthCatalog();
      state.cartItems = growth.complete.map(({ title, price, image }) => ({ title, price, image, kind: productKind(title) }));
      go('cart');
      showToast('Complete set added to cart');
      return;
    }
    if (actionButton.dataset.action === 'add-bundle-cart') {
      const growth = growthCatalog();
      state.cartItems = growth.together.map(({ title, price, image }) => ({ title, price, image, kind: productKind(title) }));
      go('cart');
      showToast('Usually-bought-together bundle added');
      return;
    }
  }

  const navButton = event.target.closest('[data-go]');
  if (navButton) {
    const selectedAnotherProduct = Boolean(navButton.dataset.productTitle);
    if (selectedAnotherProduct) {
      state.product = {
        title: navButton.dataset.productTitle,
        price: Number(navButton.dataset.productPrice || 313),
        image: navButton.dataset.productImage || asset('products/prod_black_shirt_main.webp'),
        kind: navButton.dataset.productKind || 'fashion'
      };
      state.groupCreated = false;
      state.cartItems = [];
    }
    const route = navButton.dataset.go;
    if (route === state.route) {
      if (selectedAnotherProduct && route === 'pdp-core') {
        renderRoute();
        requestAnimationFrame(() => deviceCanvas.querySelector('.phone-content')?.scrollTo({ top: 0, behavior: 'smooth' }));
        showToast(`${state.product.title} opened`);
      } else {
        handleInlineAction(navButton);
      }
    } else {
      go(route);
    }
    return;
  }

  const shortcut = event.target.closest('[data-route-shortcut]');
  if (shortcut) go(shortcut.dataset.routeShortcut);
});

$('#hotspot-toggle').addEventListener('click', () => {
  state.hotspotMode = !state.hotspotMode;
  renderRoute();
  $('#hotspot-toggle').textContent = state.hotspotMode ? 'Hide click map' : 'Show click map';
  showToast(state.hotspotMode ? 'Clickable regions highlighted' : 'Click map hidden');
});

$('#restart-button').addEventListener('click', () => {
  state.history = [];
  state.cartItems = [];
  state.groupCreated = false;
  state.route = personas[state.persona].entryRoute;
  renderRoute();
  showToast('Journey restarted');
});

renderRoute();