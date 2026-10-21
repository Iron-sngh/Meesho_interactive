const state = {
  persona: 'chhath',
  route: 'chhath-home',
  hotspotMode: false,
  history: [],
  cartItems: [],
  groupCreated: false,
  styleMission: 'casual',
  missionDomain: null,
  missionTask: null,
  trustContext: null,
  femaleCategory: 'fashion',
  femaleTask: 'everyday',
  femaleRecipient: 'brother',
  femaleGifting: false,
  femaleBundleActive: false,
  shopHerRecipient: 'sister',
  shopForHerContext: false,
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
  female: {
    id: 'female',
    title: 'Everyday Meesho Shopper',
    subtitle: 'Ananya · returning female shopper',
    summary: 'Familiar shopping with optional missions, explainable trust, review intelligence and Gift for Him.',
    entryRoute: 'female-home',
    tags: ['Protect female equity', 'Everyday shopping', 'Gift for Him'],
    avatar: 'profiles/buyer_avatar_03.webp'
  },
  college: {
    id: 'college',
    title: 'Everyday Needs Missions',
    subtitle: 'Aarav · purpose-led everyday shopper',
    summary: 'Guided discovery across fashion, grooming, home essentials and electronics & accessories, with proof-first evaluation before purchase.',
    entryRoute: 'college-home',
    tags: ['Shop by need', 'Guided missions', 'Proof-first PDP'],
    avatar: 'profiles/profile_avatar_aarav.webp'
  }
};

const routeMeta = {
  'shop-for-her': {label:'Household shopping · Shop for Her',title:'Shop for Her · Apno Ke Liye',
    persona:'Shared household shopping',
    summary:'An optional shopping route for women’s everyday favourites and meaningful gifts. Primary persona missions remain unchanged.',
    keySignals:['Recipient-led discovery','Women’s category products','Explainable trust','Proof-first PDP'],
    kpi:['Gift entry CTR','Relevant PDP views','Basket completion']},

  'female-home': {label:'Home · Ananya',title:'Familiar female-first shopping',
    persona:'Everyday Meesho Shopper',
    summary:'Standard categories remain prominent. Optional mission prompts, universal trust and a secondary Gift for Him route expand useful choices.',
    keySignals:['Familiar categories','Optional missions','Gift for Him','Proof-first evaluation'],
    kpi:['Female PDP → ATC','Kept order rate','Repeat']},
  'female-category': {label:'Category · Women’s shopping',title:'Women’s needs and occasions',
    persona:'Everyday Meesho Shopper',
    summary:'A familiar category list with optional purpose filters, proof-first products and Mall/MTrusted routes.',
    keySignals:['Everyday products','Purpose filters','Trust destinations','Review evidence'],
    kpi:['Category CTR','PDP → ATC','Trust comprehension']},
  'female-gifts': {label:'Gifting · Apno Ke Liye',title:'Gift for Him',
    persona:'Everyday Meesho Shopper',
    summary:'Household gift discovery introduces relevant men’s products without changing the default women’s feed.',
    keySignals:['Recipient intent','Gift discovery','Trust evidence','Optional group buying'],
    kpi:['Gift CTR','Basket value','Purchase completion']},

  'college-home': {
    label: 'Home · Everyday Needs Missions',
    title: 'Choose a need, then a purpose',
    persona: 'Everyday Needs Missions',
    summary: 'Four familiar shopping needs lead into simple purpose-led choices. Product shortlists connect to the existing proof-first PDP, review intelligence and explainable trust destinations.',
    keySignals: ['Fashion, grooming, home and electronics', 'Progressive two-step discovery', 'Relevant shortlists', 'Trust and product proof'],
    kpi: ['Need-to-mission selection', 'Mission-to-PDP CTR', 'PDP → ATC']
  },
  'mission-results': {
    label: 'Results · Guided mission',
    title: 'Need-matched product shortlist',
    persona: 'Everyday Needs Missions',
    summary: 'A selected everyday purpose narrows the illustrative assortment while keeping product evaluation and trust routes available.',
    keySignals: ['Purpose-specific shortlist', 'Easy mission switching', 'Proof-first PDP', 'Mall and MTrusted explanation'],
    kpi: ['Mission-to-PDP CTR', 'Relevant PDP visits', 'PDP → ATC']
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
const PERSONA_NAMES = { chhath:'Rohit', assam:'Nayan', mall:'Kabir', mtrusted:'Vivek', female:'Ananya', college:'Aarav' };

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
    female: ['Ananya Sharma', 'Returning shopper · Everyday essentials'],
    college: ['Aarav Sharma', 'Value-conscious style shopper · Guwahati, Assam · English + Hindi']
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
  if (/(face wash|beard|shaving|deodorant|body spray|grooming|self-care|beauty)/.test(t)) return 'grooming';
  if (/(shirt|trouser|jean|sneaker|shoe|polo|tee|kurta|saree|fashion|women|jewell|accessor)/.test(t)) return 'fashion';
  return 'utility';
}

function defaultProductForPersona(id = state.persona) {
  const defaults = {
    chhath: { title: 'Printed Kurta Set', price: 699, image: asset('chhath/chhath_kurta.webp'), kind: 'fashion' },
    assam: { title: 'Assam Festive Kurta', price: 429, image: asset('assam/assam_kurta.webp'), kind: 'fashion' },
    mall: { title: 'Daily Face Wash', price: 199, image: asset('mall/mall_facewash.webp'), kind: 'grooming' },
    mtrusted: { title: 'Black Casual Shirt', price: 299, image: asset('products/prod_black_shirt_main.webp'), kind: 'fashion' },
    female: { title:'Celebration Saree',price:799,image:asset('chhath/chhath_saree.webp'),kind:'fashion' },
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

function productDetailsFor(kind = 'fashion', p = null) {
  if(isHerShoppingContext()&&p){
    if(/saree/i.test(p.title))return [
      ['Category','Women’s saree'],['Fabric','Check selected listing'],
      ['Length','Confirm measurements'],['Blouse piece','Confirm inclusion'],
      ['Colour','Refer to selected variant'],['Care','Follow garment label'],['Pack','Confirm pieces']];
    if(kind==='fashion')return [
      ['Category','Women’s fashion / accessories'],['Material','Check listing'],
      ['Size / fit','Verify measurements'],['Colour','Confirm variant'],
      ['Care','Follow product label'],['Pack quantity','Confirm listing']];
    if(kind==='grooming')return [
      ['Category','Self-care / personal care'],['Contents','Check individual items'],
      ['Ingredients','See pack labels'],['Expiry / use-by','Check packaging'],
      ['Quantity','Confirm item count'],['Usage','Check instructions']];
  }
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
    { id: 'home', label: 'Home', icon: '⌂', route: personas[state.persona]?.entryRoute || 'chhath-home' },
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

// Session intent drives the men’s style journey; existing photographs are reused throughout.
const styleMissions = {
  college: {
    title: 'College Essentials',
    subtitle: 'Class days & commute',
    image: 'products/prod_checked_shirt.webp',
    description: 'Easy-to-wear essentials for class, commuting and everyday campus use.',
    picks: [
      { title: 'Casual Checked Shirt', price: 299, image: 'products/prod_checked_shirt.webp', badge: 'MTrusted' },
      { title: 'Everyday Sneakers', price: 699, image: 'products/prod_sneakers.webp' },
      { title: 'Minimal Backpack', price: 499, image: 'products/prod_backpack.webp' },
      { title: 'Polo Tee', price: 349, image: 'products/prod_polo.webp' }
    ]
  },
  office: {
    title: 'Office Wear',
    subtitle: 'Workdays & meetings',
    image: 'products/prod_trousers.webp',
    description: 'Neat, versatile pieces for workdays, meetings and the daily commute.',
    picks: [
      { title: 'Regular Fit Black Shirt', price: 329, image: 'products/prod_black_shirt_main.webp', badge: 'MTrusted' },
      { title: 'Regular Fit Trousers', price: 499, image: 'products/prod_trousers.webp' },
      { title: 'Analog Watch', price: 399, image: 'products/prod_watch.webp' },
      { title: 'Minimal Backpack', price: 499, image: 'products/prod_backpack.webp' }
    ]
  },
  casual: {
    title: 'Everyday Casuals',
    subtitle: 'Weekends & daily wear',
    image: 'products/prod_polo.webp',
    description: 'Comfortable everyday combinations for errands, outings and weekends.',
    picks: [
      { title: 'Polo Tee', price: 349, image: 'products/prod_polo.webp' },
      { title: 'Casual Checked Shirt', price: 299, image: 'products/prod_checked_shirt.webp', badge: 'MTrusted' },
      { title: 'Everyday Sneakers', price: 699, image: 'products/prod_sneakers.webp' },
      { title: 'Regular Fit Trousers', price: 499, image: 'products/prod_trousers.webp' }
    ]
  },
  party: {
    title: 'Party & Occasion',
    subtitle: 'Evenings & gatherings',
    image: 'products/prod_black_shirt_main.webp',
    description: 'Put-together pieces for celebrations, dinner plans and evenings out.',
    picks: [
      { title: 'Black Casual Shirt', price: 749, image: 'products/prod_black_shirt_main.webp', badge: 'Top rated' },
      { title: 'Analog Watch', price: 399, image: 'products/prod_watch.webp' },
      { title: 'Regular Fit Trousers', price: 499, image: 'products/prod_trousers.webp' },
      { title: 'Everyday Sneakers', price: 699, image: 'products/prod_sneakers.webp' }
    ]
  }
};

function styleMissionButtons(className = 'style-mission-grid') {
  return `<div class="${className}">${Object.entries(styleMissions).map(([id, mission]) => `
    <button class="style-mission-card" data-go="category-fashion" data-style-mission="${id}" aria-label="Shop ${mission.title}">
      <img src="${asset(mission.image)}" alt="${mission.title} picks" loading="lazy" decoding="async">
      <span class="style-mission-copy"><b>${mission.title}</b><small>${mission.subtitle}</small></span>
    </button>`).join('')}</div>`;
}


// A two-step mission entry: first the everyday need, then the purpose.
// Products and photography below deliberately reuse assets already in this repo.
const missionDomains = {
  fashion: {
    title: 'Fashion & Style', subtitle: 'Dress for college, work and occasions',
    image: 'categories/cat_mens_fashion.webp',
    question: 'What are you dressing for?',
    helper: 'Choose an occasion to narrow the looks and keep fit and review proof close.',
    tasks: styleMissions
  },
  grooming: {
    title: 'Grooming & Self-Care', subtitle: 'Everyday routines, simplified',
    image: 'categories/cat_grooming.webp',
    question: 'What does your routine need?',
    helper: 'Choose a grooming task, then compare the right product details and source confidence.',
    tasks: {
      face: {
        title: 'Daily Face Care', subtitle: 'Freshen up your routine',
        image: 'mall/mall_facewash.webp',
        description: 'Straightforward face-care essentials with pack, usage and source information to check.',
        picks: [
          { title: 'Daily Face Wash', price: 199, image: 'mall/mall_facewash.webp' },
          { title: 'Shaving Kit', price: 329, image: 'mall/mall_shaving_kit.webp' },
          { title: 'Beard Grooming Oil', price: 259, image: 'mall/mall_beard_oil.webp' }
        ]
      },
      shave: {
        title: 'Beard & Shaving', subtitle: 'Keep a neat routine',
        image: 'mall/mall_shaving_kit.webp',
        description: 'Shaving and beard-care products selected for an easy, repeatable routine.',
        picks: [
          { title: 'Shaving Kit', price: 329, image: 'mall/mall_shaving_kit.webp' },
          { title: 'Beard Grooming Oil', price: 259, image: 'mall/mall_beard_oil.webp' },
          { title: 'Daily Face Wash', price: 199, image: 'mall/mall_facewash.webp' }
        ]
      },
      fresh: {
        title: 'Stay Fresh', subtitle: 'Workdays & active days',
        image: 'mall/mall_deodorant.webp',
        description: 'Everyday freshness products, with pack and usage details visible before purchase.',
        picks: [
          { title: 'Body Spray', price: 219, image: 'mall/mall_deodorant.webp' },
          { title: 'Daily Face Wash', price: 199, image: 'mall/mall_facewash.webp' },
          { title: 'Beard Grooming Oil', price: 259, image: 'mall/mall_beard_oil.webp' }
        ]
      },
      routine: {
        title: 'Complete My Routine', subtitle: 'Useful grooming combinations',
        image: 'mall/mall_grooming_banner.webp',
        description: 'A small, practical shortlist for building a consistent grooming routine.',
        picks: [
          { title: 'Daily Face Wash', price: 199, image: 'mall/mall_facewash.webp' },
          { title: 'Body Spray', price: 219, image: 'mall/mall_deodorant.webp' },
          { title: 'Shaving Kit', price: 329, image: 'mall/mall_shaving_kit.webp' },
          { title: 'Beard Grooming Oil', price: 259, image: 'mall/mall_beard_oil.webp' }
        ]
      }
    }
  },
  home: {
    title: 'Home Essentials', subtitle: 'Useful finds for your space',
    image: 'categories/cat_home.webp',
    question: 'What are you preparing at home?',
    helper: 'Start with a practical home need instead of sorting through an endless feed.',
    tasks: {
      refresh: {
        title: 'Refresh My Space', subtitle: 'Simple room updates',
        image: 'assam/assam_decor_set.webp',
        description: 'Accessible decor picks for a small room refresh.',
        picks: [
          { title: 'Home Decor Set', price: 299, image: 'assam/assam_decor_set.webp' },
          { title: 'Celebration Decor Pack', price: 349, image: 'chhath/chhath_decor_pack.webp' },
          { title: 'Everyday Home Essentials', price: 399, image: 'categories/cat_home.webp' }
        ]
      },
      utility: {
        title: 'Everyday Home Utility', subtitle: 'Practical daily needs',
        image: 'categories/cat_home.webp',
        description: 'Useful home and storage-friendly everyday finds.',
        picks: [
          { title: 'Everyday Home Essentials', price: 399, image: 'categories/cat_home.webp' },
          { title: 'Travel Utility Kit', price: 249, image: 'assam/assam_travel_kit.webp' },
          { title: 'Utility Pouch', price: 199, image: 'chhath/chhath_travel_pouch.webp' }
        ]
      },
      hosting: {
        title: 'Hosting & Gatherings', subtitle: 'Prepare for visitors',
        image: 'chhath/chhath_decor_pack.webp',
        description: 'A focused mix of decor and gifting picks for hosting at home.',
        picks: [
          { title: 'Celebration Decor Pack', price: 349, image: 'chhath/chhath_decor_pack.webp' },
          { title: 'Home Decor Set', price: 299, image: 'assam/assam_decor_set.webp' },
          { title: 'Gift Hamper', price: 499, image: 'chhath/chhath_gift_hamper.webp' }
        ]
      },
      gifting: {
        title: 'Thoughtful Home Gifts', subtitle: 'Useful gifts & small occasions',
        image: 'chhath/chhath_gift_hamper.webp',
        description: 'Practical gifts that can be evaluated by contents, photos and seller information.',
        picks: [
          { title: 'Gift Hamper', price: 499, image: 'chhath/chhath_gift_hamper.webp' },
          { title: 'Self-Care Gift Box', price: 449, image: 'assam/assam_selfcare_gift.webp' },
          { title: 'Home Decor Set', price: 299, image: 'assam/assam_decor_set.webp' }
        ]
      }
    }
  },
  electronics: {
    title: 'Electronics & Accessories', subtitle: 'Tech, work and everyday carry',
    image: 'categories/cat_electronics.webp',
    question: 'What would help your day?',
    helper: 'Find the right accessories for daily routines, work or going out.',
    tasks: {
      tech: {
        title: 'Everyday Tech', subtitle: 'Small useful accessories',
        image: 'categories/cat_electronics.webp',
        description: 'An introductory tech-accessories edit; check compatibility and specifications on the listing.',
        picks: [
          { title: 'Everyday Tech Accessories', price: 299, image: 'categories/cat_electronics.webp' },
          { title: 'Minimal Backpack', price: 499, image: 'products/prod_backpack.webp' },
          { title: 'Analog Watch', price: 399, image: 'products/prod_watch.webp' }
        ]
      },
      work: {
        title: 'Work & Study Setup', subtitle: 'Keep essentials at hand',
        image: 'categories/cat_electronics.webp',
        description: 'Daily setup and carry essentials for work or study.',
        picks: [
          { title: 'Everyday Tech Accessories', price: 299, image: 'categories/cat_electronics.webp' },
          { title: 'Minimal Backpack', price: 499, image: 'products/prod_backpack.webp' },
          { title: 'Analog Watch', price: 399, image: 'products/prod_watch.webp' }
        ]
      },
      carry: {
        title: 'On-the-Go Accessories', subtitle: 'Commute & travel',
        image: 'products/prod_backpack.webp',
        description: 'Compact everyday accessories for a commute or an overnight trip.',
        picks: [
          { title: 'Minimal Backpack', price: 499, image: 'products/prod_backpack.webp' },
          { title: 'Utility Pouch', price: 199, image: 'chhath/chhath_travel_pouch.webp' },
          { title: 'Analog Watch', price: 399, image: 'products/prod_watch.webp' }
        ]
      },
      watches: {
        title: 'Watches & Daily Add-ons', subtitle: 'Finish your everyday setup',
        image: 'products/prod_watch.webp',
        description: 'Straightforward wearable and carry accessories for day-to-day use.',
        picks: [
          { title: 'Analog Watch', price: 399, image: 'products/prod_watch.webp' },
          { title: 'Minimal Backpack', price: 499, image: 'products/prod_backpack.webp' },
          { title: 'Everyday Tech Accessories', price: 299, image: 'categories/cat_electronics.webp' }
        ]
      }
    }
  }
};

function missionDomainButtons() {
  return `<div class="need-domain-grid">${Object.entries(missionDomains).map(([id,domain]) => `
    <button type="button" class="need-domain-card ${state.missionDomain === id ? 'active' : ''}" data-mission-domain="${id}" aria-pressed="${state.missionDomain === id}" aria-controls="mission-step-two">
      <img src="${asset(domain.image)}" alt="" loading="lazy" decoding="async">
      <span class="need-domain-copy"><b>${domain.title}</b><small>${domain.subtitle}</small></span>
    </button>`).join('')}</div>`;
}

function missionTaskButtons(domainId) {
  if (domainId === 'fashion') return styleMissionButtons();
  const domain = missionDomains[domainId];
  return `<div class="style-mission-grid">${Object.entries(domain.tasks).map(([id,task]) => `
    <button class="style-mission-card" data-go="mission-results" data-mission-task="${id}" aria-label="Explore ${task.title}">
      <img src="${asset(task.image)}" alt="" loading="lazy" decoding="async">
      <span class="style-mission-copy"><b>${task.title}</b><small>${task.subtitle}</small></span>
    </button>`).join('')}</div>`;
}

function missionStepPanel() {
  const domain = missionDomains[state.missionDomain];
  if (!domain) return '';
  return `<section class="screen-section" id="mission-step-two" aria-label="Choose your shopping mission">
    <div class="need-step-panel">
      <div class="need-step-eyebrow">STEP 2 OF 2 · CHOOSE YOUR PURPOSE</div>
      ${sectionHeader(domain.question, domain.helper, '', '')}
      ${missionTaskButtons(state.missionDomain)}
      <p class="need-step-footnote">Next: see relevant picks and open product details, reviews and seller evidence.</p>
    </div>
  </section>`;
}


const femaleProducts={
  saree:['Celebration Saree',799,'chhath/chhath_saree.webp'],
  fashion:['Women’s Fashion Edit',449,'categories/cat_womens_fashion.webp'],
  care:['Self-Care Gift Box',449,'assam/assam_selfcare_gift.webp'],
  decor:['Home Decor Set',299,'assam/assam_decor_set.webp'],
  festive:['Celebration Decor Pack',349,'chhath/chhath_decor_pack.webp'],
  home:['Everyday Home Essentials',399,'categories/cat_home.webp'],
  gift:['Gift Hamper',499,'chhath/chhath_gift_hamper.webp'],
  pouch:['Travel Utility Pouch',199,'chhath/chhath_travel_pouch.webp'],
  travel:['Travel Utility Kit',249,'assam/assam_travel_kit.webp'],
  shirt:['Black Casual Shirt',329,'products/prod_black_shirt_main.webp'],
  watch:['Analog Watch',399,'products/prod_watch.webp'],
  wash:['Daily Face Wash',199,'mall/mall_facewash.webp'],
  backpack:['Minimal Backpack',499,'products/prod_backpack.webp']
};
const femaleNeeds={
  fashion:{name:'Women’s Fashion',image:'categories/cat_womens_fashion.webp',desc:'Everyday & occasion wear',
    tasks:{everyday:['Everyday Wear',['fashion','saree','pouch','care']],festive:['Festive & Occasion',['saree','fashion','decor','care']],
    work:['Workday Essentials',['fashion','pouch','saree','care']],out:['Going Out',['saree','fashion','pouch','gift']]}},
  beauty:{name:'Beauty & Self-Care',image:'assam/assam_selfcare_gift.webp',desc:'Everyday care & gifting',
    tasks:{everyday:['Daily Self-Care',['care','pouch','travel','gift']],gifts:['Thoughtful Self-Care Gifts',['care','gift','pouch','decor']],
    refresh:['Refresh & Relax',['care','travel','gift','decor']],travel:['On-the-Go Essentials',['travel','pouch','care','gift']]}},
  home:{name:'Home & Living',image:'categories/cat_home.webp',desc:'Practical finds & decor',
    tasks:{everyday:['Everyday Utility',['home','travel','decor','pouch']],refresh:['Refresh My Space',['decor','festive','home','gift']],
    host:['Hosting & Gatherings',['festive','decor','gift','care']],gifts:['Gifts for Home',['gift','decor','festive','care']]}},
  accessories:{name:'Accessories & Gifts',image:'categories/cat_gifting.webp',desc:'Useful gifts & everyday carry',
    tasks:{everyday:['Everyday Carry',['pouch','travel','care','fashion']],gifts:['Gifting Essentials',['gift','care','decor','pouch']],
    occasions:['Small Celebrations',['gift','festive','care','saree']],him:['Gift for Him',['shirt','watch','wash','backpack']]}}
};
const femaleRecipients={
  brother:['Brother',['shirt','watch','backpack','wash']],
  partner:['Partner',['shirt','wash','watch','backpack']],
  father:['Father',['watch','shirt','wash','backpack']],
  friend:['Friend',['backpack','watch','shirt','wash']]
};
function femaleProductGrid(keys,layout='two-up'){
 return `<div class="${layout}">${keys.map(key=>{
   const p=femaleProducts[key];return productCard({title:p[0],price:p[1],image:asset(p[2])});
 }).join('')}</div>`;
}
function femaleNeedTiles(){
 return `<div class="female-need-grid">${Object.entries(femaleNeeds).map(([key,v])=>`
   <button class="female-need-card" data-go="female-category" data-female-category="${key}">
     <img src="${asset(v.image)}" alt="" loading="lazy">
     <span><b>${v.name}</b><small>${v.desc}</small></span>
   </button>`).join('')}</div>`;
}
function femaleGiftTile(){
 return `<button class="female-gift-tile" data-go="female-gifts">
  <img src="${asset('products/prod_black_shirt_main.webp')}" alt="Men’s shirt gift">
  <span><small>BAS AISE HI · APNO KE LIYE</small><b>Gift for Him</b>
  <em>A useful gift for your brother, partner, father or friend.</em><strong>Explore gifts →</strong></span>
 </button>`;
}

function femaleQuickMissions(){
 const cards=[
  ['Everyday Wear','fashion','everyday','categories/cat_womens_fashion.webp'],
  ['Daily Self-Care','beauty','everyday','assam/assam_selfcare_gift.webp'],
  ['Refresh My Space','home','refresh','assam/assam_decor_set.webp'],
  ['Gift for Him','accessories','him','products/prod_black_shirt_main.webp']
 ];
 return `<div class="female-need-grid">${cards.map(([title,domain,task,image])=>`
  <button class="female-need-card" data-go="${task==='him'?'female-gifts':'female-category'}"
    data-female-category="${domain}" data-female-task-initial="${task}">
   <img src="${asset(image)}" alt="" loading="lazy">
   <span><b>${title}</b><small>${task==='him'?'A thoughtful gifting mission':'Purpose-led picks →'}</small></span>
  </button>`).join('')}</div>`;
}
function femaleHome(){
 return phoneTemplate({nav:'home',content:`
  ${appBar({brand:true,searchText:'Search fashion, beauty, home & more'})}
  <section class="screen-section">
    <div class="hero-banner photo-hero" ${heroStyle('promo_festive_under699.webp','center')}>
      <div class="hero-copy-card"><span class="eyebrow-inline">Everyday Meesho</span>
        <h2>Find something you love</h2><p>Familiar favourites. Clearer product proof.</p>
        <button class="hero-cta" data-go="female-category" data-female-category="fashion">Shop women’s fashion →</button>
      </div>
    </div>
  </section>
  <section class="screen-section">${sectionHeader('Shop by Category','Your familiar everyday departments.','','')}${femaleNeedTiles()}</section>
  <section class="screen-section">
    ${sectionHeader('Recommended for You','Women’s fashion, self-care and home.','','')}
    ${femaleProductGrid(['saree','fashion','care','decor'],'four-up')}
  </section>
  <section class="screen-section">
    ${sectionHeader('What do you need today?','Optional guided choices, never a required step.','','')}
    ${femaleQuickMissions()}
  </section>
  <section class="screen-section">
    ${sectionHeader('Thoughtful gifting','A secondary route for the people you care about.','','')}
    ${femaleGiftTile()}
  </section>
  <section class="screen-section">
    ${sectionHeader('Popular everyday picks','Shop your usual way.','','')}
    ${femaleProductGrid(['gift','pouch','home','festive'],'four-up')}
  </section>
  <section class="screen-section">${trustTwinCards()}</section>
 `});
}
function femaleCategoryScreen(){
 const domain=femaleNeeds[state.femaleCategory]||femaleNeeds.fashion;
 const task=domain.tasks[state.femaleTask]||Object.values(domain.tasks)[0];
 const all=[...new Set(Object.values(domain.tasks).flatMap(item=>item[1]))].slice(0,4);
 return phoneTemplate({nav:'categories',content:`
   ${appBar({brand:false,title:domain.name.toUpperCase(),subtitle:'Familiar category · choose an optional purpose',
     searchText:'Search '+domain.name.toLowerCase(),backRoute:'female-home'})}
   <section class="screen-section">
    ${sectionHeader('What are you shopping for?','Choose a purpose or browse products directly.','','')}
    <div class="style-mission-grid">${Object.entries(domain.tasks).map(([key,t])=>`
     <button class="female-task ${state.femaleTask===key?'active':''}" data-female-task="${key}">
      <b>${t[0]}</b><small>Explore relevant products →</small>
     </button>`).join('')}</div>
   </section>
   <section class="screen-section">${sectionHeader(task[0]+' picks','Open any product to assess details, reviews and seller confidence.','','')}
     ${femaleProductGrid(task[1])}</section>
   <section class="screen-section">${sectionHeader('Explore this department','Regular category browsing remains available.','','')}
     ${femaleProductGrid(all,'four-up')}</section>
   ${state.femaleCategory==='accessories'?femaleGiftTile():''}
 `});
}
function femaleGiftsScreen(){
 const recipient=femaleRecipients[state.femaleRecipient]||femaleRecipients.brother;
 return phoneTemplate({nav:'categories',content:`
  ${appBar({brand:false,title:'GIFT FOR HIM',subtitle:'Bas Aise Hi, Apno Ke Liye',
      searchText:'Search gift ideas',backRoute:'female-home'})}
  <section class="screen-section">
   <div class="female-gift-intro"><img src="${asset('products/prod_black_shirt_main.webp')}" alt="Casual shirt">
    <span><b>Thoughtful picks for him</b><small>Buy for someone else without changing your usual Meesho feed.</small></span>
   </div>
  </section>
  <section class="screen-section">
   ${sectionHeader('Who are you shopping for?','Just one tap to adjust the ideas.','','')}
   <div class="style-filter-grid">${Object.entries(femaleRecipients).map(([key,v])=>`
    <button class="style-filter-chip ${state.femaleRecipient===key?'active':''}"
     data-female-recipient="${key}">${v[0]}</button>`).join('')}</div>
  </section>
  <section class="screen-section">${sectionHeader('Gifts for your '+recipient[0].toLowerCase(),'Useful picks that open the same proof-first product page.','','')}
    ${femaleProductGrid(recipient[1])}</section>
 `});
}


const shopHerRecipients={
  sister:{label:'Sister',products:['fashion','care','saree','pouch']},
  partner:{label:'Partner',products:['saree','care','gift','decor']},
  mother:{label:'Mother',products:['saree','home','decor','care']},
  friend:{label:'Friend',products:['fashion','care','pouch','gift']}
};
function isHerShoppingContext(){return state.persona==='female'||state.shopForHerContext}
function shopForHerTeaser(){
  return `<section class="screen-section shop-her-home-section" aria-label="Shop for Her">
    ${sectionHeader('Something for her','A thoughtful extra, without changing your shopping mission.','','')}
    <button type="button" class="female-gift-tile shop-her-tile" data-go="shop-for-her" aria-label="Explore Shop for Her">
      <img src="${asset('chhath/chhath_saree.webp')}" alt="Celebration saree" loading="lazy">
      <span><small>BAS AISE HI · APNO KE LIYE</small><b>Shop for Her</b>
        <em>Fashion, self-care and useful gifts for someone you care about.</em>
        <strong>Explore her picks →</strong></span>
    </button>
  </section>`;
}
function shopForHerScreen(){
  const selected=shopHerRecipients[state.shopHerRecipient]||shopHerRecipients.sister;
  return phoneTemplate({nav:'categories',content:`
    ${appBar({brand:false,title:'SHOP FOR HER',subtitle:'Bas Aise Hi · Apno Ke Liye',
      searchText:'Search gifts and everyday favourites',backRoute:homeRoute()})}
    <section class="screen-section">
      <div class="shop-her-intro">
        <img src="${asset('chhath/chhath_saree.webp')}" alt="Women’s festive fashion" loading="lazy">
        <span><small>THOUGHTFUL SHOPPING</small><b>Something for her, chosen with care</b>
          <em>Explore her favourites in the Meesho you already know.</em></span>
      </div>
    </section>
    <section class="screen-section">
      ${sectionHeader('Who are you shopping for?','One optional tap to make the shortlist more relevant.','','')}
      <div class="style-filter-grid shop-her-recipient-row">
        ${Object.entries(shopHerRecipients).map(([key,person])=>`
          <button type="button" class="style-filter-chip ${state.shopHerRecipient===key?'active':''}"
            data-shop-her-recipient="${key}" aria-pressed="${state.shopHerRecipient===key}">${person.label}</button>
        `).join('')}
      </div>
    </section>
    <section class="screen-section">
      ${sectionHeader('Picks for your '+selected.label.toLowerCase(),
        'Fashion, care and everyday gifts, with product facts and reviews one tap away.','','')}
      ${femaleProductGrid(selected.products)}
      <p class="shop-her-asset-note">Illustrative assortment using existing prototype product photography.</p>
    </section>
    <section class="screen-section">
      ${sectionHeader('Explore more for her','Browse familiar everyday categories as well.','','')}
      ${femaleProductGrid(['saree','fashion','care','home'],'four-up')}
    </section>
  `});
}

function collegeHome() {
  return phoneTemplate({
    nav: 'home',
    content: `
      ${appBar({ brand: true, searchText: 'Search by need, product or occasion' })}
      <section class="screen-section">
        <div class="need-step-eyebrow">STEP 1 OF 2 · CHOOSE A SHOPPING NEED</div>
        ${sectionHeader('What do you need today?', 'Start with a need. We’ll help you narrow it to a useful shortlist.', '', '')}
        ${missionDomainButtons()}
      </section>
      ${missionStepPanel()}
      <section class="screen-section">
        ${sectionHeader('Essentials for different plans', 'From what you wear to what you use every day.', 'Browse fashion', 'category-fashion')}
        <div class="hero-banner photo-hero" ${heroStyle('college/college_hero_banner.webp', 'center')}>
          <div class="hero-copy-card">
            <span class="eyebrow-inline">Purpose-led discovery</span>
            <h2>Choose for the day ahead</h2>
            <p>Find relevant essentials first. Check fit, product facts, reviews and seller proof before buying.</p>
            <button class="hero-cta" data-go="category-fashion">Explore fashion missions →</button>
          </div>
        </div>
      </section>
      <section class="screen-section">
        ${sectionHeader('Useful picks across needs', 'Everyday fashion, care, home and accessories in one experience.', '', '')}
        <div class="four-up">
          ${productCard({ title: 'Casual Checked Shirt', price: 299, oldPrice: 449, route: 'pdp-core', image: asset('products/prod_checked_shirt.webp') })}
          ${productCard({ title: 'Daily Face Wash', price: 199, route: 'pdp-core', image: asset('mall/mall_facewash.webp') })}
          ${productCard({ title: 'Home Decor Set', price: 299, route: 'pdp-core', image: asset('assam/assam_decor_set.webp') })}
          ${productCard({ title: 'Analog Watch', price: 399, route: 'pdp-core', image: asset('products/prod_watch.webp') })}
        </div>
      </section>
      <section class="screen-section">${trustTwinCards()}</section>
      <section class="screen-section">
        ${sectionHeader('Pick what matters to you', 'Simple options, followed by the product and seller information needed for a confident order.', '', '')}
        <div class="four-up">
          ${productCard({ title: 'Regular Fit Trousers', price: 499, route: 'pdp-core', image: asset('products/prod_trousers.webp') })}
          ${productCard({ title: 'Shaving Kit', price: 329, route: 'pdp-core', image: asset('mall/mall_shaving_kit.webp') })}
          ${productCard({ title: 'Everyday Tech Accessories', price: 299, route: 'pdp-core', image: asset('categories/cat_electronics.webp') })}
          ${productCard({ title: 'Everyday Home Essentials', price: 399, route: 'pdp-core', image: asset('categories/cat_home.webp') })}
        </div>
      </section>
      ${shopForHerTeaser()}
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
      ${shopForHerTeaser()}
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
      ${shopForHerTeaser()}
    `
  });
}


// Reuse the original trust destinations, tailoring their assortments to entry context.
const trustCategoryRoutes = new Set(['shop-for-her','categories','category-fashion','category-grooming',
  'category-assam','category-chhath','category-home','category-electronics','category-gifting','mission-results','female-category','female-gifts']);
function categoryTrustGateway() {
  return `<section class="screen-section category-trust-section">
    ${sectionHeader('Shop with more confidence','Choose the trust signal that matters for these products.','','')}
    <div class="category-trust-grid">
      <button class="category-trust-card" data-go="mall-home" data-contextual-trust="true">
        <strong>Meesho Mall <span aria-hidden="true">↗</span></strong>
        <b>Brand & source confidence</b><small>Source-focused picks in this category</small>
      </button>
      <button class="category-trust-card" data-go="mtrusted-home" data-contextual-trust="true">
        <strong>MTrusted <span aria-hidden="true">↗</span></strong>
        <b>Seller & listing-quality confidence</b><small>Quality-focused picks in this category</small>
      </button>
    </div>
  </section>`;
}
// Every product entry is a title, example price and existing image asset.
// These are not claims of real Mall or MTrusted qualification.
const trustPicks = {
  chhath:['Chhath festival','chhath/chhath_kurta.webp',[
    ['Printed Kurta Set',699,'chhath/chhath_kurta.webp'],['Celebration Saree',799,'chhath/chhath_saree.webp'],
    ['Festive Decor Pack',349,'chhath/chhath_decor_pack.webp'],['Gift Hamper',499,'chhath/chhath_gift_hamper.webp']]],
  assam:['Assam festive shopping','assam/assam_kurta.webp',[
    ['Assam Festive Kurta',429,'assam/assam_kurta.webp'],['Self-Care Gift Box',449,'assam/assam_selfcare_gift.webp'],
    ['Festive Decor Set',299,'assam/assam_decor_set.webp'],['Travel Utility Kit',249,'assam/assam_travel_kit.webp']]],
  fashion:['Men’s fashion','categories/cat_mens_fashion.webp',[
    ['Black Casual Shirt',329,'products/prod_black_shirt_main.webp'],['Casual Checked Shirt',299,'products/prod_checked_shirt.webp'],
    ['Regular Fit Trousers',499,'products/prod_trousers.webp'],['Everyday Sneakers',699,'products/prod_sneakers.webp']]],
  grooming:['Men’s grooming','categories/cat_grooming.webp',[
    ['Daily Face Wash',199,'mall/mall_facewash.webp'],['Shaving Kit',329,'mall/mall_shaving_kit.webp'],
    ['Beard Grooming Oil',259,'mall/mall_beard_oil.webp'],['Body Spray',219,'mall/mall_deodorant.webp']]],
  home:['Home essentials','categories/cat_home.webp',[
    ['Home Decor Set',299,'assam/assam_decor_set.webp'],['Celebration Decor Pack',349,'chhath/chhath_decor_pack.webp'],
    ['Everyday Home Essentials',399,'categories/cat_home.webp'],['Gift Hamper',499,'chhath/chhath_gift_hamper.webp']]],
  electronics:['Electronics & accessories','categories/cat_electronics.webp',[
    ['Everyday Tech Accessories',299,'categories/cat_electronics.webp'],['Analog Watch',399,'products/prod_watch.webp'],
    ['Minimal Backpack',499,'products/prod_backpack.webp'],['Utility Pouch',199,'chhath/chhath_travel_pouch.webp']]],
  gifting:['Gifting essentials','categories/cat_gifting.webp',[
    ['Gift Hamper',499,'chhath/chhath_gift_hamper.webp'],['Self-Care Gift Box',449,'assam/assam_selfcare_gift.webp'],
    ['Home Decor Set',299,'assam/assam_decor_set.webp'],['Travel Utility Kit',249,'assam/assam_travel_kit.webp']]],
  women:['Women’s fashion','categories/cat_womens_fashion.webp',[
   ['Celebration Saree',799,'chhath/chhath_saree.webp'],
   ['Women’s Fashion Edit',449,'categories/cat_womens_fashion.webp'],
   ['Self-Care Gift Box',449,'assam/assam_selfcare_gift.webp'],
   ['Travel Utility Pouch',199,'chhath/chhath_travel_pouch.webp']]],
  beauty:['Beauty & self-care','assam/assam_selfcare_gift.webp',[
   ['Self-Care Gift Box',449,'assam/assam_selfcare_gift.webp'],
   ['Travel Utility Kit',249,'assam/assam_travel_kit.webp'],
   ['Gift Hamper',499,'chhath/chhath_gift_hamper.webp'],
   ['Travel Utility Pouch',199,'chhath/chhath_travel_pouch.webp']]],
  everyday:['Everyday needs','categories/cat_mens_fashion.webp',[
    ['Casual Checked Shirt',299,'products/prod_checked_shirt.webp'],['Daily Face Wash',199,'mall/mall_facewash.webp'],
    ['Home Decor Set',299,'assam/assam_decor_set.webp'],['Analog Watch',399,'products/prod_watch.webp']]]
};
function trustContextFromCategory() {
  const byRoute={'category-fashion':'fashion','category-grooming':'grooming','category-assam':'assam',
    'category-chhath':'chhath','category-home':'home','category-electronics':'electronics','category-gifting':'gifting'};
  const byPersona={chhath:'chhath',assam:'assam',mall:'grooming',mtrusted:'fashion',female:'women',college:'everyday'};
  const sourceRoute=state.route;
  let category=byRoute[sourceRoute]||byPersona[state.persona]||'everyday';
  if(sourceRoute==='shop-for-her'||(sourceRoute==='pdp-core'&&state.shopForHerContext))category='women';
  if(state.persona==='female'){
    const map={fashion:'women',beauty:'beauty',home:'home',accessories:'gifting'};
    if(sourceRoute==='female-gifts'||(sourceRoute==='pdp-core'&&state.femaleGifting))category='gifting';
    else if(['female-category','pdp-core'].includes(sourceRoute))category=map[state.femaleCategory]||'women';
  }
  if(state.persona==='college'&&['categories','mission-results'].includes(sourceRoute)
     && missionDomains[state.missionDomain])category=state.missionDomain;
  const task=state.persona==='college'&&category===state.missionDomain&&category!=='fashion'
    &&missionDomains[category]?.tasks?.[state.missionTask]?state.missionTask:null;
  const occasion=state.persona==='college'&&category==='fashion'
    &&sourceRoute==='category-fashion'
    &&styleMissions[state.styleMission]?state.styleMission:null;
  const label=task?missionDomains[category].tasks[task].title
    :occasion?styleMissions[occasion].title:trustPicks[category][0];
  return {category,label,task,occasion,sourceRoute};
}
function trustProductsFor(context){
  if(context.task&&missionDomains[context.category]?.tasks?.[context.task])
    return missionDomains[context.category].tasks[context.task].picks.map(p=>[p.title,p.price,p.image]);
  if(context.occasion&&styleMissions[context.occasion])
    return styleMissions[context.occasion].picks.map(p=>[p.title,p.price,p.image]);
  return trustPicks[context.category][2];
}
function contextualTrustHome(type){
  const context=state.trustContext, mall=type==='mall';
  const items=trustProductsFor(context);
  const picks=mall?items:[items[1],items[0],...items.slice(2)].filter(Boolean);
  const meta=trustPicks[context.category]||trustPicks.everyday;
  const title=mall?'Meesho Mall':'MTrusted', other=mall?'mtrusted-home':'mall-home',
    explainer=mall?'mall-explainer':'mtrusted-explainer';
  return phoneTemplate({
    nav:'categories',
    content:`
      ${appBar({brand:false,title:title.toUpperCase(),subtitle:context.label,
        searchText:'Search '+context.label.toLowerCase(),backRoute:context.sourceRoute})}
      <section class="screen-section">
        <div class="context-trust-hero">
          <div class="context-trust-copy">
            <span class="need-step-eyebrow">${mall?'BRAND / PROVENANCE TRUST':'MARKETPLACE-QUALITY TRUST'}</span>
            <h3>${title} for ${context.label.toLowerCase()}</h3>
            <p>${mall?'Browse relevant picks with brand and source confidence in mind.':
              'Browse relevant picks with seller and listing-quality confidence in mind.'}</p>
          </div>
          <img src="${asset(meta[1])}" alt="" loading="lazy">
        </div>
      </section>
      <section class="screen-section">
        <div class="context-trust-actions">
          <button data-go="${explainer}">${mall?'Why Mall?':'Why MTrusted?'} →</button>
          <button data-go="${other}" data-trust-retain="true">${mall?'Compare MTrusted':'Explore Meesho Mall'} →</button>
        </div>
      </section>
      <section class="screen-section">
        ${sectionHeader(mall?'Source-focused picks':'Listing-quality-focused picks',
          'Chosen for '+context.label.toLowerCase()+'.','','')}
        <div class="two-up">${picks.map(p=>productCard({
          title:p[0],price:p[1],image:asset(p[2]),route:'pdp-core'
        })).join('')}</div>
        <p class="context-trust-note">Illustrative products from existing assets. Their Mall/MTrusted eligibility is not verified.</p>
      </section>
      <section class="screen-section">
        <div class="context-trust-proof">
          <b>${mall?'Can I trust the brand or source?':'Can I trust the seller or listing quality?'}</b>
          <p>${mall?'Mall explains brand/provenance confidence.':
            'MTrusted explains marketplace-quality and buyer-experience signals.'}</p>
          <button class="link-action" data-go="${explainer}">Understand trust signals →</button>
        </div>
      </section>
    `
  });
}

function mallHome() {
  if(state.trustContext)return contextualTrustHome('mall');
  return phoneTemplate({
    nav: 'home',
    content: `
      ${appBar({
        brand: false,
        title: 'MEN’S GROOMING',
        subtitle: 'Self care · Meesho Mall',
        searchText: 'Search in Men’s Grooming',

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
      ${shopForHerTeaser()}
    `
  });
}

function mtrustedHome() {
  if(state.trustContext)return contextualTrustHome('mtrusted');
  return phoneTemplate({
    nav: 'home',
    content: `
      ${appBar({
        brand: false,
        title: 'MEN’S FASHION',
        subtitle: 'Fashion · MTrusted',
        searchText: 'Search in Men’s Fashion',

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
      ${shopForHerTeaser()}
    `
  });
}

function categoryFashion() {
  const occasionJourney = state.persona === 'college';
  const missionId = styleMissions[state.styleMission] ? state.styleMission : 'casual';
  const mission = styleMissions[missionId];
  return phoneTemplate({
    nav: 'categories',
    content: `
      ${appBar({
        brand: false,
        title: 'MEN’S FASHION',
        subtitle: occasionJourney ? `${mission.title} · curated by occasion` : 'Category · curated for your style mission',
        searchText: 'Search in Men’s Fashion',
        chips: occasionJourney ? [] : [
          { label: 'Casual', route: 'category-fashion' },
          { label: 'Office', route: 'category-fashion' }
        ],
        backRoute: personas[state.persona].entryRoute
      })}
      <section class="screen-section">
        ${occasionJourney ? `
          ${sectionHeader('Shop by occasion', 'Switch the mission to update the products shown.', '', '')}
          <div class="style-filter-grid">
            ${Object.entries(styleMissions).map(([id,item]) => `<button class="style-filter-chip ${missionId === id ? 'active' : ''}" data-go="category-fashion" data-style-mission="${id}" aria-pressed="${missionId === id}">${item.title}</button>`).join('')}
          </div>
        ` : `
          ${sectionHeader('Your style filters', 'Focused, explainable discovery rather than endless feed-first scrolling.', '', '')}
          <div class="chip-row">
            ${['Casual', 'College', 'Everyday', 'Low to high price', 'Top rated', 'MTrusted first'].map(label => `<button class="filter-chip ${label === 'College' || label === 'MTrusted first' ? 'active' : ''}" data-go="category-fashion">${label}</button>`).join('')}
          </div>
        `}
      </section>
      <section class="screen-section">
        ${sectionHeader(occasionJourney ? `${mission.title} picks` : 'Mission picks', occasionJourney ? mission.description : 'Items aligned to casual/college intent.', '', '')}
        <div class="two-up">
          ${occasionJourney ? mission.picks.map(item => productCard({ ...item, route: 'pdp-core', image: asset(item.image) })).join('') : `
            ${productCard({ title: 'Regular Fit Black Shirt', price: 313, art: '👔', route: 'pdp-core', badge: 'Top rated', badge2: 'Less returned' })}
            ${productCard({ title: 'Regular Fit Trousers', price: 449, art: '👖', route: 'pdp-core' })}
            ${productCard({ title: 'Casual Sneakers', price: 699, art: '👟', route: 'pdp-core' })}
            ${productCard({ title: 'Linen Blend Shirt', price: 378, art: '🧵', route: 'pdp-core', badge: 'MTrusted' })}
          `}
        </div>
      </section>
      <section class="screen-section">
        ${sectionHeader('Trust destinations', 'Find the right source and seller confidence for your needs.', '', '')}
        ${trustTwinCards()}
      </section>
    `
  });
}
function missionResults() {
  const domain = missionDomains[state.missionDomain];
  const task = domain?.tasks?.[state.missionTask];
  if (!domain || !task || state.missionDomain === 'fashion') return collegeHome();
  return phoneTemplate({
    nav: 'categories',
    content: `
      ${appBar({
        brand: false,
        title: domain.title.toUpperCase(),
        subtitle: task.title + ' · guided picks',
        searchText: 'Search ' + domain.title.toLowerCase(),
        backRoute: 'college-home'
      })}
      <section class="screen-section">
        <div class="need-result-brief">
          <span class="need-step-eyebrow">YOUR SELECTED MISSION</span>
          <h3>${task.title}</h3>
          <p>${task.description}</p>
        </div>
      </section>
      <section class="screen-section">
        ${sectionHeader('Change your purpose', 'Switch tasks without starting your search again.', '', '')}
        <div class="style-filter-grid">
          ${Object.entries(domain.tasks).map(([id,item]) => `<button class="style-filter-chip ${state.missionTask === id ? 'active' : ''}" data-go="mission-results" data-mission-task="${id}" aria-pressed="${state.missionTask === id}">${item.title}</button>`).join('')}
        </div>
      </section>
      <section class="screen-section">
        ${sectionHeader('Picks for ' + task.title.toLowerCase(), 'Illustrative shortlist using existing prototype products and photography.', '', '')}
        <div class="two-up">
          ${task.picks.map(item => productCard({ ...item, route: 'pdp-core', image: asset(item.image) })).join('')}
        </div>
      </section>
      <section class="screen-section">
        ${sectionHeader('Check the proof before you buy', 'Open a product to review its details, buyer evidence and seller information.', '', '')}
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
          { label: 'Shaving', route: 'category-grooming' }
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
      ${appBar({ brand: false, title: 'ASSAM FESTIVE PICKS', subtitle: 'Contextual category listing', searchText: 'Search festive picks in Assam', chips: [ {label: 'Festive'}, {label: 'Utility'} ], backRoute: 'assam-home' })}
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
      ${appBar({ brand: false, title: 'CHHATH FESTIVE PICKS', subtitle: 'Occasion-led category', searchText: 'Search Chhath essentials', chips: [ {label: 'Fashion'}, {label: 'Puja'}, {label: 'Bundles'} ], backRoute: 'chhath-home' })}
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


function usefulCategoryPage({title,subtitle,category}){
  const set=trustPicks[category];
  return phoneTemplate({
    nav:'categories',
    content:`
      ${appBar({brand:false,title,subtitle,searchText:'Search '+set[0].toLowerCase(),backRoute:'categories'})}
      <section class="screen-section">
        ${sectionHeader('Explore '+set[0].toLowerCase(),'A practical shortlist from existing assets.','','')}
        <div class="two-up">
          ${set[2].map(p=>productCard({title:p[0],price:p[1],image:asset(p[2]),route:'pdp-core'})).join('')}
        </div>
      </section>
    `
  });
}
function categoryHome(){return usefulCategoryPage({title:'HOME ESSENTIALS',subtitle:'Daily home needs',category:'home'});}
function categoryElectronics(){return usefulCategoryPage({title:'ELECTRONICS & ACCESSORIES',subtitle:'Tech and everyday carry',category:'electronics'});}
function categoryGifting(){return usefulCategoryPage({title:'GIFTING ESSENTIALS',subtitle:'Everyday gifts and occasions',category:'gifting'});}
function searchScreen() {
  if(state.persona==='female'){
    return phoneTemplate({nav:'home',content:`
      ${appBar({brand:false,title:'SEARCH',subtitle:'Relevant to your everyday shopping',
        searchText:'Women’s fashion, care and home',backRoute:'female-home'})}
      <section class="screen-section">
        ${sectionHeader('Products you might be looking for','Familiar categories with review and seller proof.','','')}
        ${femaleProductGrid(['saree','fashion','care','decor'])}
      </section>
      <section class="screen-section">
        ${sectionHeader('Explore your needs','Choose any category to discover more.','','')}
        ${femaleNeedTiles()}
      </section>
    `});
  }
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

// Prototype sample ratings: eight illustrative buyer responses per attribute.
// These are calculated examples, not a live Meesho review dataset.
const reviewSamples = {
  chhath: {Fit:[5,4,4,5,4,3,5,4],Material:[4,4,5,4,4,3,5,4],Colour:[5,4,5,5,4,4,5,4],Quality:[4,5,5,4,4,4,5,4]},
  assam: {Fit:[4,5,4,4,5,4,4,5],Material:[4,4,4,5,4,4,3,5],Colour:[4,5,4,4,4,5,4,4],Quality:[5,4,5,4,4,5,4,5]},
  mtrusted: {Fit:[4,5,4,4,4,5,4,5],Material:[5,4,4,4,4,5,4,4],Colour:[4,4,5,4,4,3,4,4],Quality:[4,5,4,5,4,4,5,4]},
  college: {Fit:[4,4,3,5,4,4,4,4],Material:[4,4,4,3,5,4,3,4],Colour:[4,5,4,4,4,4,5,4],Quality:[5,4,4,4,4,5,4,4]},
  female: {Fit:[4,4,5,4,3,4,5,4],Material:[4,5,4,4,3,5,4,4],Colour:[4,4,5,5,4,4,5,4],Quality:[4,4,4,5,3,4,5,4]},
  grooming: {Packaging:[5,4,5,4,5,4,5,4],Usage:[4,5,4,4,5,4,4,4],Quality:[4,5,5,4,5,4,5,4],Value:[4,4,4,5,4,4,3,5]},
  utility: {Function:[4,5,4,4,4,5,4,4],Build:[4,4,4,5,3,4,4,4],Listing:[5,4,4,5,4,4,4,4],Value:[4,4,5,4,4,3,5,4]}
};
const reviewPhrases = {
  Fit:['Consistently true to size','Mostly true to size','Generally fits as expected','Fit varies across buyers'],
  Material:['Fabric gets strong feedback','Mostly matches the listing','Generally meets expectations','Mixed feedback on fabric'],
  Colour:['Colour matches photos closely','Mostly matches the photos','Usually similar to photos','Colour feedback varies'],
  Quality:['Quality is highly rated','Quality is mostly positive','Generally positive quality feedback','Quality feedback is mixed'],
  Packaging:['Packaging is consistently praised','Usually arrives well packed','Generally packed well','Packaging feedback varies'],
  Usage:['Easy to use for most buyers','Works well for daily use','Generally easy to use','Usage feedback is mixed'],
  Value:['Excellent value feedback','Good value for the price','Generally seen as fair value','Opinions on value vary'],
  Function:['Works very consistently','Works as expected for most','Generally performs as expected','Function feedback varies'],
  Build:['Build quality gets strong praise','Build feels mostly reliable','Generally acceptable construction','Build feedback is mixed'],
  Listing:['Closely matches the listing','Mostly as described','Generally matches the listing','Listing-match feedback varies']
};
function getReviewThemes(product) {
  const samples = isHerShoppingContext()&&product.kind==='fashion'?reviewSamples.female:product.kind === 'grooming' ? reviewSamples.grooming
    : product.kind === 'utility' ? reviewSamples.utility
    : reviewSamples[state.persona] || reviewSamples.mtrusted;
  return Object.entries(samples).map(([label, ratings]) => {
    const rating = ratings.reduce((total, n) => total + n, 0) / ratings.length;
    const phrases = reviewPhrases[label];
    const summary = phrases[rating >= 4.5 ? 0 : rating >= 4.1 ? 1 : rating >= 3.7 ? 2 : 3];
    return {label, rating, count:ratings.length, summary};
  });
}
function reviewThemeCards(themes) {
  return `
    <div class="review-pill-grid">
      ${themes.map(item => `
        <div class="review-pill">
          <b>${item.label}</b>
          <div class="review-rating-line">
            <span class="review-rating-stars" style="--review-fill:${(item.rating / 5) * 100}%" aria-label="${item.rating.toFixed(1)} out of 5 stars">★★★★★</span>
            <strong class="review-rating-score">${item.rating.toFixed(1)}/5</strong>
          </div>
          <span class="review-rating-summary">${item.summary}</span>
        </div>`).join('')}
    </div>
    <p class="review-sample-note">Illustrative prototype data · ${themes[0]?.count || 0} sample ratings per attribute, not live Meesho reviews.</p>
  `;
}


function femaleTrustBlock(){
 return `<div class="info-card female-trust-pdp">
   ${sectionHeader('Understand the trust signals','Two distinct ways to evaluate confidence.','','')}
   <div class="female-trust-grid">
    <button data-go="mall-home" data-contextual-trust="true">
     <b>Meesho Mall →</b><strong>Brand / provenance trust</strong>
     <small>Can I trust the brand or source?</small>
    </button>
    <button data-go="mtrusted-home" data-contextual-trust="true">
     <b>MTrusted →</b><strong>Seller / listing-quality trust</strong>
     <small>What supports the listing and fulfilment?</small>
    </button>
   </div>
   <p>These are illustrative trust pathways, not claims that this example is Mall or MTrusted eligible.</p>
   <div class="female-trust-links">
    <button data-go="mall-explainer">Why Mall?</button>
    <button data-go="mtrusted-explainer">Why MTrusted?</button>
   </div>
 </div>`;
}
function femaleOffer(product){
 const related=state.shopForHerContext?['care','pouch']:(state.femaleGifting?['watch','wash']:['care','decor']);
 const products=[{title:product.title,price:product.price,image:product.image},
   ...related.map(key=>({title:femaleProducts[key][0],price:femaleProducts[key][1],image:asset(femaleProducts[key][2])}))];
 const names=new Set();
 return {title:state.shopForHerContext?'Shop for Her Bundle':state.femaleGifting?'Gift for Him Combo':state.femaleCategory==='home'?'Home Refresh Bundle':state.femaleCategory==='beauty'?'Self-Care Essentials Bundle':state.femaleCategory==='accessories'?'Everyday Gift Bundle':'Complete Her Occasion Bundle',
   items:products.filter(p=>{if(names.has(p.title))return false;names.add(p.title);return true;})};
}
function femaleBundleSaving(items){
 if(!isHerShoppingContext()||!state.femaleBundleActive||items.length<2)return 0;
 return items.reduce((sum,item)=>sum+Number(item.price||0),0)>=999?50:0;
}
function femaleBundleModule(p){
 if(!isHerShoppingContext())return '';
 const offer=femaleOffer(p),original=offer.items.reduce((a,x)=>a+x.price,0);
 const saving=original>=999?50:0;
 return `<section class="growth-module inline-growth-section female-bundle">
   <span class="growth-kicker">OPTIONAL WOMEN’S BUNDLE</span>
   ${sectionHeader(offer.title,'Useful complementary products and transparent savings.','','')}
   ${bundleRows(offer.items)}
   <div class="female-bundle-price">
    <span><small>Individual total ₹${original.toLocaleString('en-IN')}</small>
     <b>${saving?'Save ₹'+saving:'Save ₹50 when the bundle reaches ₹999'}</b>
    </span><strong>₹${(original-saving).toLocaleString('en-IN')}</strong>
   </div>
   <button class="mini-action primary" data-action="female-bundle-cart">Add selected bundle to cart</button>
   <p>Illustrative ₹50 savings on selected bundle totals of ₹999 or more, applied in cart and checkout. No automatic discount on individual items.</p>
 </section>`;
}

function pdpCore() {
  const p = selectedProduct();
  const isBlackShirt = /black.*shirt|shirt.*black|regular fit casual shirt/i.test(p.title) || p.image.includes('prod_black_shirt');
  const details = productDetailsFor(p.kind,p);
  const thumbnails = isBlackShirt
    ? [
        ['products/prod_black_shirt_main.webp', 'Front view', 'ugc-gallery'],
        ['products/prod_black_shirt_back.webp', 'Back view', 'ugc-gallery'],
        ['products/prod_black_shirt_detail.webp', 'Fabric detail', 'product-details'],
        ['products/shirt_button_detail.webp', 'Construction detail', 'product-details']
      ]
    : [[p.image.replace(/^assets\//,''), 'Product view', 'product-details']];
  const reviewThemes = getReviewThemes(p);
  const womenContext=isHerShoppingContext();
  const sellerName = womenContext?'Illustrative Marketplace Seller':(p.kind==='grooming'?'Mall Partner Store':'XYZ Fashion');
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Buy now', route: 'checkout' }, { label: 'Add to cart', route: 'cart' }),
    content: `
      ${appBar({ brand: false, title: 'PRODUCT', subtitle: 'Proof-first product detail page', searchText: 'Search related products', backRoute: state.shopForHerContext?'shop-for-her':state.persona === 'mall' ? 'category-grooming' : (state.persona === 'chhath' ? 'category-chhath' : state.persona === 'assam' ? 'category-assam' : state.persona==='female'?(state.femaleGifting?'female-gifts':'female-category'):'category-fashion') })}
      <div class="product-detail-hero realistic-pdp-hero">
        <div>
          <button class="pdp-main-image" data-go="product-details" aria-label="Open product details"><img src="${p.image}" alt="${p.title}"></button>
          <div class="thumbnail-row photo-thumbnail-row">
            ${thumbnails.map(([path,alt,route]) => { const src = /^data:|^https?:/.test(path) ? path : (path.startsWith('assets/') ? path : asset(path)); return `<button class="thumbnail photo-thumb" data-go="${route}"><img src="${src}" alt="${alt}"></button>`; }).join('')}
          </div>
        </div>
        <div class="info-stack">
          <div class="trust-line"><span class="badge-pill">${womenContext?'Product evidence':(state.persona==='mall'||p.kind==='grooming'?'Meesho Mall':'MTrusted')}</span><span class="tiny-pill">${womenContext?'Illustrative product':'Top rated'}</span></div>
          <h2>${p.title}</h2>
          <div class="info-subline">${p.kind === 'grooming' ? 'Daily-use grooming essential' : p.kind === 'utility' ? 'Everyday value pick' : 'Popular selected variant'}</div>
          <div class="hero-price"><span class="price">₹${p.price}</span></div>
          <div class="info-subline">Free delivery on eligible orders</div>
          ${p.kind === 'fashion' && !/saree|fashion edit/i.test(p.title) ? `<div class="size-label">Size</div><div class="size-grid"><button class="size-pill" data-go="pdp-core">S</button><button class="size-pill" data-go="pdp-core">M</button><button class="size-pill active" data-go="pdp-core">L</button><button class="size-pill" data-go="pdp-core">XL</button></div>` : ''}
        </div>
      </div>

      <div class="info-card info-card-button" data-go="product-details" role="button" tabindex="0">
        ${sectionHeader('Product details', 'Decision-critical information, standardised for this category.', 'View all details', 'product-details')}
        <div class="details-grid">${details.map(([k,v]) => `<div class="detail-item"><b>${k}</b><span>${v}</span></div>`).join('')}</div>
      </div>

      <div class="info-card seller-module info-card-button" data-go="seller-profile" role="button" tabindex="0">
        <div class="seller-inline-heading">${p.kind === 'fashion' && !womenContext ? `<img src="${asset('seller/seller_xyz_logo.webp')}" alt="Seller logo">` : `<span class="seller-generic-logo small">${p.kind === 'grooming' ? 'M' : '✓'}</span>`}<span><small>Sold by</small><b>${sellerName}</b></span><strong>View seller →</strong></div>
        <div class="trust-badges"><div class="trust-badge"><b>Strong category performance</b><span>Stable buyer outcomes.</span></div><div class="trust-badge"><b>Reliable fulfilment</b><span>Consistent shipping outcomes.</span></div><div class="trust-badge"><b>Low issue incidence</b><span>Healthier post-order experience.</span></div></div>
      </div>

      ${womenContext?femaleTrustBlock():''}
      <div class="info-card info-card-button" data-go="reviews" role="button" tabindex="0">
        ${sectionHeader('Customers say', 'Review scores by product attribute', 'Review intelligence', 'reviews')}
        ${reviewThemeCards(reviewThemes)}
        <div class="buyer-avatar-row">${[1,2,3,4].map(i => `<img src="${buyerAvatar(i)}" alt="Verified buyer ${i}">`).join('')}<span>${womenContext?'Illustrative attribute ratings, not live reviews':'Verified buyer reviews'}</span></div>
      </div>

      <div class="info-card info-card-button" data-go="ugc-gallery" role="button" tabindex="0">
        ${sectionHeader(womenContext?'Product photo references':'Buyer visual proof',womenContext?'Existing product photography; buyer photos will be added separately.':(isBlackShirt?'Verified buyer photos & videos':'Product and buyer evidence'),'View gallery','ugc-gallery')}
        <div class="ugc-row photo-ugc-row">
          ${isBlackShirt ? `<img src="${asset('reviews/ugc_black_shirt_01.webp')}" alt="Buyer wearing black shirt"><img src="${asset('reviews/ugc_black_shirt_video_cover.webp')}" alt="Buyer video cover"><img src="${asset('reviews/ugc_black_shirt_02.webp')}" alt="Buyer wearing black shirt outdoors">` : `<img src="${p.image}" alt="${p.title}"><img src="${p.image}" alt="Product view"><img src="${p.image}" alt="Product detail view">`}
        </div>
        <div class="review-quote"><b>${womenContext?'Illustrative buyer comment':'Verified Purchase'}</b><p>“The product matched the listing and the order experience was straightforward.”</p></div>
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
  const details = productDetailsFor(p.kind,p);
  const isBlackShirt = /black.*shirt|shirt.*black|regular fit casual shirt/i.test(p.title) || p.image.includes('prod_black_shirt');
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Back to product', route: 'pdp-core' }, { label: 'Add to cart', route: 'cart' }),
    content: `
      ${appBar({ brand: false, title: 'PRODUCT DETAILS', subtitle: p.title, searchText: 'Search product information', backRoute: 'pdp-core' })}
      <div class="list-card product-details-intro"><img class="details-product-photo" src="${p.image}" alt="${p.title}"><div><h4>${p.title}</h4><p class="body-copy">Decision-critical information is structured by category so the shopper does not have to infer important facts from images or description text.</p></div></div>
      <div class="list-card"><h4>Key information</h4><div class="details-grid">${details.map(([k,v]) => `<div class="detail-item"><b>${k}</b><span>${v}</span></div>`).join('')}</div></div>
      ${p.kind === 'fashion' && !isHerShoppingContext() ? `<div class="list-card"><h4>Fit & construction proof</h4><div class="detail-proof-grid"><figure><img src="${asset(isBlackShirt ? 'products/shirt_size_guide.webp' : 'products/shirt_fit_side.webp')}" alt="Size and fit guide"><figcaption>Size & fit</figcaption></figure><figure><img src="${asset('products/shirt_fabric_macro.webp')}" alt="Fabric detail"><figcaption>Material detail</figcaption></figure><figure><img src="${asset('products/shirt_button_detail.webp')}" alt="Construction detail"><figcaption>Construction</figcaption></figure></div></div>` : `<div class="list-card"><h4>${state.persona==='female'?'Existing product references':'Package & usage proof'}</h4><div class="detail-proof-grid"><figure><img src="${p.image}" alt="Product view"><figcaption>Product photo</figcaption></figure><figure><img src="${state.persona==='female'?asset('categories/cat_womens_fashion.webp'):asset('mall/mall_grooming_banner.webp')}" alt="Category reference"><figcaption>Category reference</figcaption></figure></div></div>`}
    `
  });
}

function sellerProfile() {
  const p = selectedProduct();
  const isFashion = p.kind === 'fashion';
  const sellerName = isHerShoppingContext()?'Illustrative Marketplace Seller':(isFashion?'XYZ Fashion':(p.kind==='grooming'?'Mall Partner Store':'Verified Marketplace Seller'));
  const category = isHerShoppingContext()?(state.shopForHerContext?'Shop for Her':state.femaleGifting?'Household Gifting':femaleNeeds[state.femaleCategory].name):(isFashion?'Fashion':(p.kind==='grooming'?'Men’s Grooming':'Marketplace Utility'));
  const cover = isHerShoppingContext()?asset('categories/cat_womens_fashion.webp'):(isFashion?asset('seller/seller_xyz_profile_banner.webp'):(p.kind==='grooming'?asset('mall/mall_grooming_banner.webp'):asset('mtrusted/fulfilment_package.webp')));
  const ops = isHerShoppingContext()?asset('mtrusted/fulfilment_package.webp'):(isFashion?asset('seller/seller_xyz_packaging.webp'):asset('mtrusted/fulfilment_package.webp'));
  const identity = isFashion && !isHerShoppingContext() ? `<img class="seller-profile-logo" src="${asset('seller/seller_xyz_logo.webp')}" alt="XYZ Fashion logo">` : `<span class="seller-generic-logo">${p.kind === 'grooming' ? 'M' : '✓'}</span>`;
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({label:'Back to PDP',route:'pdp-core'},state.shopForHerContext?{label:'More for Her',route:'shop-for-her'}:{label:'View trusted picks',route:p.kind==='grooming'?'mall-home':'mtrusted-home'}),
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
  const reviewThemes = getReviewThemes(p);
  const isBlackShirt = /black.*shirt|shirt.*black|regular fit casual shirt/i.test(p.title) || p.image.includes('prod_black_shirt');
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Back to PDP', route: 'pdp-core' }, { label: 'See buyer gallery', route: 'ugc-gallery' }),
    content: `
      ${appBar({ brand: false, title: 'REVIEW INTELLIGENCE', subtitle: p.title, searchText: 'Search reviews', backRoute: 'pdp-core' })}
      <div class="list-card"><h4>Review intelligence by attribute</h4>${reviewThemeCards(reviewThemes)}</div>
      <div class="list-card"><h4>Pros & watch-outs</h4><div class="two-up"><div class="mini-card"><h4>Pros</h4><p>Good value, clear listing information and a dependable first impression.</p></div><div class="mini-card"><h4>Watch-outs</h4><p>Check the selected variant and category-specific details before ordering.</p></div></div></div>
      <div class="list-card"><h4>${isHerShoppingContext()?'Illustrative review examples':'Traceable reviews'}</h4><div class="review-feed">${[1,2,3].map((i) => `<article class="review-feed-card"><img class="reviewer-avatar" src="${buyerAvatar(i)}" alt="Verified buyer"><div><b>${isHerShoppingContext()?'Sample buyer':'Verified buyer'}</b><small>${isHerShoppingContext()?'Illustrative review, not verified':'Verified Purchase'}</small><p>${i===1?'“Matched the listing well and felt worth the price.”':i===2?'“The details helped me know what to expect before ordering.”':'“Delivery and packaging were straightforward.”'}</p></div>${isBlackShirt ? `<img class="review-proof-thumb" src="${asset(`reviews/ugc_black_shirt_0${i}.webp`)}" alt="Buyer proof">` : `<img class="review-proof-thumb" src="${p.image}" alt="${p.title}">`}</article>`).join('')}</div></div>
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
      <div class="list-card"><h4>${isBlackShirt && !isHerShoppingContext() ? 'Verified purchase media' : 'Product proof gallery'}</h4><div class="ugc-gallery-grid">${gallery.map((src,i) => `<figure><img src="${src}" alt="${isHerShoppingContext()?'Product photo '+(i+1):'Buyer proof '+(i+1)}"><figcaption>${isBlackShirt && !isHerShoppingContext() ? (i===4?'Video review':'Verified buyer') : 'Product view'}</figcaption></figure>`).join('')}</div></div>
      ${isHerShoppingContext()?'<div class="list-card"><p class="body-copy">Existing product photos only. Verified buyer-submitted visuals for these listings have not been added yet.</p></div>':''}
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
          <button class="certainty-photo-card" data-go="certainty"><img src="${asset('trust/trust_delivery.webp')}" alt="Delivery at doorstep"><span><b>Delivery promise</b><small>Estimated delivery in 4–6 days</small></span></button>
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
    female: {
      completeTitle:'Complete Your Look',
      completeSub:'Complementary items follow confidence in the original product.',
      complete:[
        {title:'Celebration Saree',price:799,image:asset('chhath/chhath_saree.webp')},
        {title:'Self-Care Gift Box',price:449,image:asset('assam/assam_selfcare_gift.webp')},
        {title:'Home Decor Set',price:299,image:asset('assam/assam_decor_set.webp')}
      ],
      together:[
        {title:'Self-Care Gift Box',price:449,image:asset('assam/assam_selfcare_gift.webp')},
        {title:'Travel Utility Pouch',price:199,image:asset('chhath/chhath_travel_pouch.webp')}
      ],
      suggested:[
        {title:'Women’s Fashion Edit',price:449,image:asset('categories/cat_womens_fashion.webp')},
        {title:'Celebration Saree',price:799,image:asset('chhath/chhath_saree.webp')},
        {title:'Home Decor Set',price:299,image:asset('assam/assam_decor_set.webp')},
        {title:'Gift Hamper',price:499,image:asset('chhath/chhath_gift_hamper.webp')}
      ]
    },
    college: {
      completeTitle: 'Complete Your Look',
      completeSub: 'Complete an outfit for the occasion you selected, with complementary pieces after checking the product proof.',
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

  const catalog = state.shopForHerContext?catalogs.female:(catalogs[state.persona]||catalogs.college);
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
      ${sectionHeader('Usually Bought Together', '', '', '')}
      ${bundleRows(growth.together)}
      <div class="bundle-summary">
        <span><b>Bundle total</b><small>${growth.together.length} items · free delivery shown at checkout</small></span>
        <strong>₹${togetherTotal.toLocaleString('en-IN')}</strong>
        <button class="mini-action primary" data-action="add-bundle-cart">Add all</button>
      </div>
    </section>

    <section class="growth-module growth-module-featured inline-growth-section">
      ${sectionHeader('Complete Your Look', '', '', '')}
      ${growthProductRail(growth.complete)}
      <div class="growth-summary-row">
        <span><b>Complete set</b><small>${growth.complete.length} coordinated items</small></span>
        <strong>₹${completeTotal.toLocaleString('en-IN')}</strong>
        <button class="mini-action" data-action="add-complete-cart">Add set</button>
      </div>
    </section>

    ${femaleBundleModule(p)}
    <section class="growth-module inline-growth-section final-suggested-products">
      ${sectionHeader('Suggested Products', '', '', '')}
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
        ${sectionHeader('Complete Your Look', '', '', '')}
        ${growthProductRail(growth.complete)}
        <div class="growth-summary-row">
          <span><b>Complete set</b><small>${growth.complete.length} coordinated items</small></span>
          <strong>₹${completeTotal.toLocaleString('en-IN')}</strong>
          <button class="mini-action" data-action="add-complete-cart">Add set</button>
        </div>
      </section>

      <section class="growth-module">
        ${sectionHeader('Usually Bought Together', '', '', '')}
        ${bundleRows(growth.together)}
        <div class="bundle-summary">
          <span><b>Bundle total</b><small>${growth.together.length} items · free delivery shown at checkout</small></span>
          <strong>₹${togetherTotal.toLocaleString('en-IN')}</strong>
          <button class="mini-action primary" data-action="add-bundle-cart">Add all</button>
        </div>
      </section>

      <section class="growth-module">
        ${sectionHeader('Suggested Products', '', '', '')}
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
  const femaleDiscount=femaleBundleSaving(items);
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
      <div class="checkout-card"><h4>Price details</h4><div class="price-line"><span>Item total</span><b>₹${total.toLocaleString('en-IN')}</b></div><div class="price-line"><span>Delivery</span><b>Free</b></div>${femaleDiscount?`<div class="price-line"><span>Bundle savings</span><b>−₹${femaleDiscount}</b></div>`:''}<div class="price-line"><span>Total</span><b>₹${(total-femaleDiscount).toLocaleString('en-IN')}</b></div></div>
      <div class="checkout-card cart-trust-note"><img src="${asset('trust/trust_delivery.webp')}" alt="Delivery"><div><b>Purchase confidence carries into checkout</b><span>Delivery, return and payment information stays visible through the final step.</span></div></div>
    `
  });
}

function checkoutScreen() {
  const p = selectedProduct();
  const checkoutItems = Array.isArray(state.cartItems) && state.cartItems.length ? state.cartItems : [p];
  const checkoutTotal = checkoutItems.reduce((sum, item) => sum + Number(item.price || 0), 0);
  const femaleDiscount=femaleBundleSaving(checkoutItems);
  const [buyerName] = profileCopy();
  const deliveryArea = { chhath: 'Patna, Bihar', assam: 'Guwahati, Assam', mall: 'Mumbai, Maharashtra', mtrusted: 'Jaipur, Rajasthan', female:'Saved delivery area', college: 'Guwahati, Assam' }[state.persona] || 'India';
  return phoneTemplate({
    nav: 'orders',
    ctas: ctaBar({ label: 'Place order', route: 'order-placed' }, { label: 'Back to cart', route: 'cart' }),
    content: `
      ${appBar({ brand: false, title: 'CHECKOUT', subtitle: 'Final confirmation', searchText: 'Search help', backRoute: 'cart' })}
      <div class="checkout-card"><h4>Delivery address</h4><div class="detail-list-item"><b>${buyerName}</b><span>Saved delivery address · ${deliveryArea}</span></div></div>
      <div class="checkout-card checkout-items-card"><h4>Items in this order</h4><div class="checkout-items-list">${checkoutItems.map(item => `<div class="checkout-mini-item"><img src="${item.image}" alt="${item.title}"><span><b>${item.title}</b><small>Qty 1</small></span><strong>₹${item.price}</strong></div>`).join('')}</div></div>
      <div class="checkout-card"><h4>Order summary</h4><div class="checkout-row"><span>${checkoutItems.length} ${checkoutItems.length === 1 ? 'item' : 'items'}</span><b>₹${checkoutTotal.toLocaleString('en-IN')}</b></div>${femaleDiscount?`<div class="checkout-row"><span>Bundle savings</span><b>−₹${femaleDiscount}</b></div>`:''}<div class="checkout-row"><span>Payable total</span><b>₹${(checkoutTotal-femaleDiscount).toLocaleString('en-IN')}</b></div><div class="checkout-row"><span>Delivery</span><b>Free</b></div><div class="checkout-row"><span>Estimated delivery in 4–6 days</span><b>Tracked</b></div></div>
      <div class="checkout-card"><h4>Payment method</h4><div class="detail-list"><div class="detail-list-item"><b>UPI / Wallet</b><span>Fast and familiar for mobile-first shoppers.</span></div><div class="detail-list-item"><b>Cash on Delivery</b><span>Available for eligible orders.</span></div><div class="detail-list-item"><b>Cards & Netbanking</b><span>Secure payments with refund traceability.</span></div></div></div>
    `
  });
}

function orderPlacedScreen() {
  const p = selectedProduct();
  const orderedItems = Array.isArray(state.cartItems) && state.cartItems.length ? state.cartItems : [p];
  const orderTotal = orderedItems.reduce((sum, item) => sum + Number(item.price || 0), 0)-femaleBundleSaving(orderedItems);
  return phoneTemplate({
    nav: 'orders',
    ctas: ctaBar({ label: 'Track my order', route: 'orders' }, { label: 'Explore more', route: personas[state.persona].entryRoute }),
    content: `
      ${appBar({ brand: false, title: 'ORDER PLACED', subtitle: 'Purchase complete', searchText: 'Search more', backRoute: 'checkout' })}
      <div class="list-card order-success-card"><div class="success-check">✓</div><h4>Your order is confirmed</h4><div class="order-success-products">${orderedItems.slice(0,3).map(item => `<img src="${item.image}" alt="${item.title}">`).join('')}</div><b>${orderedItems.length === 1 ? orderedItems[0].title : `${orderedItems.length} items for your mission`}</b><p>₹${orderTotal.toLocaleString('en-IN')} · Estimated delivery in 4–6 days · Payment and refund status remain trackable.</p><div class="detail-stat-grid"><div class="detail-stat"><b>Order ID</b><span>MS-248136</span></div><div class="detail-stat"><b>Status</b><span>Packed</span></div></div></div>
      <div class="list-card"><h4>Next helpful actions</h4><div class="detail-list"><div class="detail-list-item"><b>Track progress</b><span>View delivery milestones from My Orders.</span></div><div class="detail-list-item"><b>Continue the mission</b><span>Return to relevant discovery instead of a generic feed.</span></div></div></div>
    `
  });
}

function categoriesScreen() {
  if(state.persona==='female')return phoneTemplate({nav:'categories',content:`
   ${appBar({brand:false,title:'CATEGORIES',subtitle:'Shop by department',
      searchText:'Search categories',backRoute:'female-home'})}
   <section class="screen-section">${sectionHeader('Shop by Category','Familiar favourites remain easy to reach.','','')}
     ${femaleNeedTiles()}</section>
   <section class="screen-section">${femaleGiftTile()}</section>
   <section class="screen-section">${sectionHeader('Explore more','All departments stay open.','','')}
    <div class="category-grid">
     ${categoryCard({icon:'👔',title:'Men’s Fashion',subtitle:'Shirts & more',route:'category-fashion'})}
     ${categoryCard({icon:'⌚',title:'Electronics',subtitle:'Accessories',route:'category-electronics'})}
     ${categoryCard({icon:'🎉',title:'Festive picks',subtitle:'Occasions',route:'category-assam'})}
    </div>
   </section>
  `});
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
          ${categoryCard({ icon:'⌚', title:'Electronics', subtitle:'Accessories', route:'category-electronics' })}
          ${categoryCard({ icon:'🏠', title:'Home Utility', subtitle:'Useful home picks', route:'category-home' })}
          ${categoryCard({ icon:'🎁', title:'Gifting', subtitle:'Budget finds', route:'category-gifting' })}
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
      <div class="list-card"><h4>Recent orders</h4><div class="order-line"><img src="${p.image}" alt="${p.title}"><span><b>${p.title}</b><small>Estimated delivery in 4–6 days</small></span><em class="order-state">Packed</em></div>${state.persona==='female'?`<div class="order-line"><img src="${asset('assam/assam_selfcare_gift.webp')}" alt="Self-care gift box"><span><b>Self-Care Gift Box</b><small>Delivered last week</small></span><em class="order-state">Delivered</em></div><div class="order-line"><img src="${asset('chhath/chhath_saree.webp')}" alt="Celebration saree"><span><b>Celebration Saree</b><small>Delivered earlier</small></span><button class="qty-pill" data-go="pdp-core" data-product-title="Celebration Saree" data-product-price="799" data-product-image="${asset('chhath/chhath_saree.webp')}" data-product-kind="fashion">Buy again</button></div>`:`<div class="order-line"><img src="${asset('mall/mall_facewash.webp')}" alt="Face wash"><span><b>Daily Face Wash</b><small>Delivered last week</small></span><em class="order-state">Delivered</em></div><div class="order-line"><img src="${asset('products/prod_sneakers.webp')}" alt="Casual sneakers"><span><b>Casual Sneakers</b><small>Delivered 12 Sep</small></span><button class="qty-pill" data-go="pdp-core">Buy again</button></div>`}</div>
    `
  });
}

function wishlistScreen() {
  if(state.persona==='female')return phoneTemplate({nav:'account',content:`
    ${appBar({brand:false,title:'WISHLIST',subtitle:'Your saved finds',
      searchText:'Search saved items',backRoute:'account'})}
    <section class="screen-section">
      ${sectionHeader('Saved products','Familiar favourites to revisit later.','','')}
      ${femaleProductGrid(['saree','care','decor','pouch'])}
    </section>
  `});
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
  'shop-for-her': shopForHerScreen,
  'female-home': femaleHome,
  'female-category': femaleCategoryScreen,
  'female-gifts': femaleGiftsScreen,
  'college-home': collegeHome,
  'assam-home': assamHome,
  'chhath-home': chhathHome,
  'mall-home': mallHome,
  'mtrusted-home': mtrustedHome,
  'category-fashion': categoryFashion,
  'mission-results': missionResults,
  'category-grooming': categoryGrooming,
  'category-home': categoryHome,
  'category-electronics': categoryElectronics,
  'category-gifting': categoryGifting,
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
  const baseMeta = routeMeta[state.route] || { label: state.route, title: state.route, persona: personas[state.persona]?.title || '', summary: '', keySignals: [], kpi: [] };
  const selectedMission = styleMissions[state.styleMission] || styleMissions.casual;
  const chosenDomain = missionDomains[state.missionDomain];
  const chosenTask = chosenDomain?.tasks?.[state.missionTask];
  let meta = baseMeta;
  if(state.route==='shop-for-her'){
    const choice=shopHerRecipients[state.shopHerRecipient]||shopHerRecipients.sister;
    meta={...baseMeta,persona:personas[state.persona].title,title:'Shop for Her · '+choice.label,
      summary:'A secondary household-shopping journey. Familiar categories remain available and products use the same proof-first experience.'};
  }else if(state.persona==='female'&&state.route==='female-category'){
    const c=femaleNeeds[state.femaleCategory];const t=c.tasks[state.femaleTask];
    meta={...baseMeta,title:c.name+' · '+t[0],
      persona:personas.female.title,
      summary:'Female category browsing retains familiar products while a lightweight intent filter and universal trust make evaluation easier.'};
  }else if (state.persona === 'college' && state.route === 'college-home' && chosenDomain) {
    meta = {
      ...baseMeta, title: chosenDomain.title + ' · choose a purpose',
      summary: 'The shopper selected ' + chosenDomain.title + '. The second step now offers clear tasks rather than an unexplained product feed.',
      keySignals: ['Four familiar needs', 'Context-sensitive task cards', 'Original asset library', 'Proof-first next steps']
    };
  } else if (state.persona === 'college' && state.route === 'mission-results' && chosenDomain && chosenTask) {
    meta = {
      ...baseMeta, label: 'Results · ' + chosenTask.title,
      title: chosenTask.title + ' recommendations', persona: personas.college.title,
      summary: chosenTask.description + ' This shortlist links to existing product, reviews and trust screens.',
      keySignals: ['Purpose switching', 'Need-matched product cards', 'Product and seller proof', 'Trust destinations']
    };
  } else if (state.persona === 'college' && state.route === 'category-fashion') {
    meta = {
      ...baseMeta, label: 'Category · ' + selectedMission.title,
      title: selectedMission.title + ' recommendations', persona: personas.college.title,
      summary: selectedMission.description + ' Changing the occasion updates the product shortlist; trust and review evidence remains available for each pick.',
      keySignals: ['Occasion switching', 'Mission-matched product ordering', 'Mall and MTrusted routes', 'Proof-first PDP access'],
      kpi: ['Mission-to-PDP CTR', 'Relevant PDP visits', 'PDP → ATC']
    };

  } else if(['mall-home','mtrusted-home'].includes(state.route)&&state.trustContext){
    const isMall=state.route==='mall-home',context=state.trustContext;
    meta={
      ...baseMeta,
      label:(isMall?'Mall':'MTrusted')+' · '+context.label,
      title:(isMall?'Meesho Mall':'MTrusted')+' for '+context.label,
      persona:personas[state.persona].title,
      summary:'Context-aware '+(isMall?'brand/source':'seller/listing-quality')+
        ' trust destination with relevant '+context.label.toLowerCase()+
        ' products. Illustrative only, not verified trust-program eligibility.',
      keySignals:['Category continuity',isMall?'Brand / provenance trust':'Seller / marketplace-quality trust','Proof-first PDP','Trust explanation'],
      kpi:['Category → trust CTR','Relevant PDP visits','Trust comprehension']
    };
  }
  const signals = meta.keySignals || [];
  const kpis = meta.kpi || [];
  const signalRows = Math.max(1, Math.ceil(signals.length / 2));
  detailPanel.classList.toggle('has-dense-signals', signals.length > 4);
  detailPanel.innerHTML = `
    <div class="detail-block current-screen-block">
      <div class="detail-section-heading">
        <span class="panel-kicker">CURRENT SCREEN</span>
        <span class="detail-section-meta">Live journey context</span>
      </div>
      <div class="current-screen-grid">
        <div class="current-screen-copy">
          <h2>${meta.title}</h2>
          <p>${meta.summary}</p>
        </div>
        <div class="screen-context-card">
          <span>Journey</span>
          <b>${meta.persona}</b>
          <em>${meta.label}</em>
        </div>
      </div>
    </div>

    <div class="detail-block experience-signals-block">
      <div class="detail-section-heading">
        <span class="panel-kicker">EXPERIENCE SIGNALS</span>
        <span class="detail-section-meta">${signals.length} connected cues</span>
      </div>
      <div class="detail-list" style="--signal-rows: ${signalRows}">
        ${signals.map((item, index) => `
          <div class="detail-list-item">
            <span class="signal-index">${String(index + 1).padStart(2, '0')}</span>
            <div>
              <b>${item}</b>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <div class="detail-block improvement-block">
      <div class="detail-section-heading">
        <span class="panel-kicker">WHAT THIS SCREEN SHOULD IMPROVE</span>
        <span class="detail-section-meta">Screen outcomes</span>
      </div>
      <div class="detail-stat-grid">
        ${kpis.map((item, index) => `
          <div class="detail-stat">
            <span class="kpi-index">${String(index + 1).padStart(2, '0')}</span>
            <b>KPI</b>
            <span>${item}</span>
          </div>`).join('')}
      </div>
    </div>
  `;
  if (stageLabel) stageLabel.textContent = (meta.label || state.route).toUpperCase();
}

function renderRoute() {
  const renderer = routes[state.route] || chhathHome;
  deviceCanvas.innerHTML = renderer();
  if(trustCategoryRoutes.has(state.route))deviceCanvas.querySelector('.top-appbar')?.insertAdjacentHTML('afterend',categoryTrustGateway());
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
  state.styleMission = 'casual';
  state.missionDomain = null;
  state.missionTask = null;
  state.trustContext = null;
  state.femaleCategory='fashion';
  state.femaleTask='everyday';
  state.femaleRecipient='brother';
  state.femaleGifting=false;
  state.femaleBundleActive=false;
  state.shopHerRecipient='sister';
  state.shopForHerContext=false;
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

function copyPrototypeLink() {
  const link = /^https?:$/.test(window.location.protocol)
    ? new URL('./', window.location.href).href
    : 'https://iron-sngh.github.io/Meesho_interactive/';
  const fallbackCopy = () => {
    const input = document.createElement('textarea');
    input.value = link;
    input.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
    document.body.appendChild(input);
    input.select();
    const copied = document.execCommand('copy');
    input.remove();
    showToast(copied ? 'Prototype link copied' : 'Copy unavailable in this browser');
  };
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(link)
      .then(() => showToast('Prototype link copied'))
      .catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
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
      copyPrototypeLink();
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
      state.femaleBundleActive=false;
      go('checkout');
      return;
    }
    if(actionButton.dataset.action==='female-bundle-cart'&&isHerShoppingContext()){
      state.cartItems=femaleOffer(selectedProduct()).items.map(item=>({...item,kind:productKind(item.title)}));
      state.femaleBundleActive=true;
      go('cart');
      showToast('Selected bundle added to cart');
      return;
    }
    if (actionButton.dataset.action === 'add-complete-cart') {
      const growth = growthCatalog();
      state.cartItems = growth.complete.map(({ title, price, image }) => ({ title, price, image, kind: productKind(title) }));
      state.femaleBundleActive=false;
      go('cart');
      showToast('Complete set added to cart');
      return;
    }
    if (actionButton.dataset.action === 'add-bundle-cart') {
      const growth = growthCatalog();
      state.cartItems = growth.together.map(({ title, price, image }) => ({ title, price, image, kind: productKind(title) }));
      state.femaleBundleActive=false;
      go('cart');
      showToast('Usually-bought-together bundle added');
      return;
    }
  }

  const herRecipientButton=event.target.closest('[data-shop-her-recipient]');
  if(herRecipientButton&&state.persona!=='female'){
    const id=herRecipientButton.dataset.shopHerRecipient;
    if(!shopHerRecipients[id])return;
    const previousTop=deviceCanvas.querySelector('.phone-content')?.scrollTop||0;
    state.shopHerRecipient=id;renderRoute();
    requestAnimationFrame(()=>{const el=deviceCanvas.querySelector('.phone-content');if(el)el.scrollTop=previousTop});
    return;
  }
  const femaleRecipientButton=event.target.closest('[data-female-recipient]');
  if(femaleRecipientButton&&state.persona==='female'){
    if(!femaleRecipients[femaleRecipientButton.dataset.femaleRecipient])return;
    const top=deviceCanvas.querySelector('.phone-content')?.scrollTop||0;
    state.femaleRecipient=femaleRecipientButton.dataset.femaleRecipient;
    renderRoute();requestAnimationFrame(()=>{const c=deviceCanvas.querySelector('.phone-content');if(c)c.scrollTop=top});
    return;
  }
  const femaleTaskButton=event.target.closest('[data-female-task]');
  if(femaleTaskButton&&state.persona==='female'){
    const key=femaleTaskButton.dataset.femaleTask;
    if(!femaleNeeds[state.femaleCategory]?.tasks?.[key])return;
    state.femaleTask=key;
    if(key==='him'){state.femaleGifting=true;go('female-gifts');return;}
    const top=deviceCanvas.querySelector('.phone-content')?.scrollTop||0;
    renderRoute();requestAnimationFrame(()=>{const c=deviceCanvas.querySelector('.phone-content');if(c)c.scrollTop=top});
    return;
  }
  const missionDomainButton = event.target.closest('[data-mission-domain]');
  if (missionDomainButton && state.persona === 'college') {
    const domainId = missionDomainButton.dataset.missionDomain;
    if (!missionDomains[domainId]) return;
    const content = deviceCanvas.querySelector('.phone-content');
    const previousTop = content?.scrollTop || 0;
    state.missionDomain = domainId;
    state.missionTask = null;
    renderRoute();
    requestAnimationFrame(() => {
      const currentContent = deviceCanvas.querySelector('.phone-content');
      if (currentContent) currentContent.scrollTop = previousTop;
      deviceCanvas.querySelector('#mission-step-two')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
    return;
  }

  const navButton = event.target.closest('[data-go]');
  if (navButton) {
    if(state.persona==='female'&&navButton.dataset.femaleCategory){
      const key=navButton.dataset.femaleCategory;
      if(!femaleNeeds[key])return;
      state.femaleCategory=key;state.femaleTask=femaleNeeds[key].tasks[navButton.dataset.femaleTaskInitial]?navButton.dataset.femaleTaskInitial:Object.keys(femaleNeeds[key].tasks)[0];
      state.femaleGifting=false;
    }
    if (state.persona === 'college' && navButton.dataset.missionTask) {
      const taskId = navButton.dataset.missionTask;
      if (!missionDomains[state.missionDomain]?.tasks?.[taskId] || state.missionDomain === 'fashion') return;
      state.missionTask = taskId;
      if (navButton.dataset.go === state.route) {
        const previousTop = deviceCanvas.querySelector('.phone-content')?.scrollTop || 0;
        renderRoute();
        requestAnimationFrame(() => {
          const currentContent = deviceCanvas.querySelector('.phone-content');
          if (currentContent) currentContent.scrollTop = previousTop;
        });
        showToast(missionDomains[state.missionDomain].tasks[taskId].title + ' selected');
        return;
      }
    }
    if (state.persona === 'college' && navButton.dataset.styleMission in styleMissions) {
      state.styleMission = navButton.dataset.styleMission;
      if (navButton.dataset.go === state.route) {
        renderRoute();
        showToast(`${styleMissions[state.styleMission].title} selected`);
        return;
      }
    }
    if(state.persona==='female'&&navButton.dataset.go==='female-gifts')state.femaleGifting=true;
    if(navButton.dataset.go==='shop-for-her'&&state.persona!=='female')state.shopForHerContext=true;
    const selectedAnotherProduct = Boolean(navButton.dataset.productTitle);
    if (selectedAnotherProduct) {
      if(state.persona!=='female'){
        state.shopForHerContext=state.route==='shop-for-her'||
          (['mall-home','mtrusted-home'].includes(state.route)&&state.trustContext?.sourceRoute==='shop-for-her');
      }
      state.product = {
        title: navButton.dataset.productTitle,
        price: Number(navButton.dataset.productPrice || 313),
        image: navButton.dataset.productImage || asset('products/prod_black_shirt_main.webp'),
        kind: navButton.dataset.productKind || 'fashion'
      };
      state.groupCreated = false;
      state.cartItems = [];
      state.femaleBundleActive=false;
    }
    const route = navButton.dataset.go;
    if(route==='mall-home'||route==='mtrusted-home'){
      if(navButton.hasAttribute('data-contextual-trust'))state.trustContext=trustContextFromCategory();
      else if(!navButton.hasAttribute('data-trust-retain'))state.trustContext=null;
    }
    if (route === state.route) {
      // Leaving a contextual destination via its persona's Home tab must reset the page.
      if ((route === 'mall-home' || route === 'mtrusted-home')
          && !navButton.hasAttribute('data-contextual-trust')
          && !navButton.hasAttribute('data-trust-retain')) {
        renderRoute();
        return;
      }
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
  state.styleMission = 'casual';
  state.missionDomain = null;
  state.missionTask = null;
  state.trustContext = null;
  state.femaleCategory='fashion';
  state.femaleTask='everyday';
  state.femaleRecipient='brother';
  state.femaleGifting=false;
  state.femaleBundleActive=false;
  state.shopHerRecipient='sister';
  state.shopForHerContext=false;
  state.product = defaultProductForPersona(state.persona);
  state.route = personas[state.persona].entryRoute;
  renderRoute();
  showToast('Journey restarted');
});

renderRoute();