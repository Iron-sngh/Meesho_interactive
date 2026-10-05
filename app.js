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

const routePersonaDefaults = {
  'college-home': 'college',
  'assam-home': 'assam',
  'chhath-home': 'chhath',
  'mall-home': 'mall',
  'mtrusted-home': 'mtrusted',
  'category-assam': 'assam',
  'category-chhath': 'chhath',
  'category-grooming': 'mall',
  'category-fashion': 'college'
};

const $ = (s) => document.querySelector(s);
const deviceCanvas = $('#device-canvas');
const detailPanel = $('#detail-panel');
const stageLabel = $('#stage-label');
const toastEl = $('#toast');

function money(v) { return `₹${v}`; }

function productCard({ title, price, oldPrice = '', rating = '4.4', ratingCount = '8.1K', meta = '', art = '•', route = 'pdp-core', badge = '', badge2 = '' }) {
  return `
    <button class="product-card" data-go="${route}">
      <div class="product-image" data-art="${art}">
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
      <div class="art-box">${icon}</div>
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
    : `<div class="profile-chip">${backRoute ? `<button class="circle-icon" data-go="${backRoute}">←</button>` : ''}<div><div style="font-weight:800">${title}</div>${subtitle ? `<div style="font-size:.68rem;color:var(--muted)">${subtitle}</div>` : ''}</div></div>`;
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
  return `
    <div class="phone-shell ${scrollClass}">
      <div class="phone-notch"></div>
      <div class="phone-status">
        <span>9:41</span>
        <div class="status-icons"><span>⋮⋮</span><span class="status-dot"></span><span class="status-bar"></span></div>
      </div>
      <div class="phone-content">
        <div class="screen-root">${content}</div>
        ${ctas}
        ${bottomNav(nav)}
      </div>
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
          <div class="sku-image">👔</div>
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

      <div class="info-card" data-go="pdp-core">
        ${sectionHeader('Product details', 'Category-specific information standardisation.', 'View all details', 'pdp-core')}
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
          <div class="ugc-thumb">📷</div>
          <div class="ugc-thumb">🎥</div>
          <div class="ugc-thumb">📷</div>
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

function sellerProfile() {
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Back to PDP', route: 'pdp-core' }, { label: 'View trusted products', route: 'mtrusted-home' }),
    content: `
      ${appBar({ brand: false, title: 'SELLER PROFILE', subtitle: 'Trust evidence made legible', searchText: 'Search this seller', backRoute: 'pdp-core' })}
      <div class="list-card">
        <h4>XYZ Fashion</h4>
        <p style="margin:0;color:var(--muted);font-size:.75rem;line-height:1.45;">Seller performance in Men’s Fashion · Illustrative profile for prototype demonstration.</p>
        <div class="badge-grid">
          <div class="mini-card center"><h4>4.6 / 5</h4><p>Average buyer satisfaction</p></div>
          <div class="mini-card center"><h4>95%</h4><p>On-time fulfilment</p></div>
          <div class="mini-card center"><h4>Low</h4><p>Issue incidence</p></div>
        </div>
      </div>
      <div class="list-card">
        <h4>Why this seller feels trustworthy</h4>
        <div class="detail-list">
          <div class="detail-list-item"><b>Strong category history</b><span>Consistent performance in Men’s Fashion, helping the shopper reduce evaluation effort.</span></div>
          <div class="detail-list-item"><b>Reliable fulfilment</b><span>Good shipping consistency and operational outcomes on similar listings.</span></div>
          <div class="detail-list-item"><b>Lower issue signals</b><span>Cleaner post-order experience relative to marketplace baselines.</span></div>
          <div class="detail-list-item"><b>Listing quality discipline</b><span>Better description completeness and clearer buyer expectations.</span></div>
        </div>
      </div>
    `
  });
}

function reviewsScreen() {
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Back to PDP', route: 'pdp-core' }, { label: 'See buyer gallery', route: 'ugc-gallery' }),
    content: `
      ${appBar({ brand: false, title: 'REVIEW INTELLIGENCE', subtitle: 'Summarised + traceable buyer evidence', searchText: 'Search reviews', backRoute: 'pdp-core' })}
      <div class="list-card">
        <h4>What buyers are saying</h4>
        <div class="detail-tags"><span class="detail-tag">Fit: mostly true to size</span><span class="detail-tag">Fabric: soft & lightweight</span><span class="detail-tag">Colour: close to image</span><span class="detail-tag">Quality: good for price</span></div>
      </div>
      <div class="list-card">
        <h4>Pros & cons</h4>
        <div class="two-up">
          <div class="mini-card"><h4>Pros</h4><p>Good fit, value-for-money, wearable for daily college use.</p></div>
          <div class="mini-card"><h4>Watch-outs</h4><p>Fabric is lightweight, so expectations should be set clearly.</p></div>
        </div>
      </div>
      <div class="list-card">
        <h4>Traceable verified reviews</h4>
        <div class="detail-list">
          <div class="detail-list-item"><b>Verified buyer · size L</b><span>“Looked close to the listing and fit me well. Great for everyday wear.”</span></div>
          <div class="detail-list-item"><b>Verified buyer · size M</b><span>“Soft fabric and neat stitching. Delivery timeline was accurate too.”</span></div>
          <div class="detail-list-item"><b>Verified buyer · size XL</b><span>“Value for money, but best for casual use rather than formal occasions.”</span></div>
        </div>
      </div>
    `
  });
}

function ugcGalleryScreen() {
  return phoneTemplate({
    nav: 'home',
    ctas: ctaBar({ label: 'Back to PDP', route: 'pdp-core' }, { label: 'See reviews', route: 'reviews' }),
    content: `
      ${appBar({ brand: false, title: 'VERIFIED BUYER GALLERY', subtitle: 'Real buyer photos & videos', searchText: 'Search buyer content', backRoute: 'pdp-core' })}
      <div class="list-card">