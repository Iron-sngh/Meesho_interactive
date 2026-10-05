const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

const personas = [
  {
    id:'college', number:'01', initials:'AS', label:'College Style Starter', name:'Aarav', location:'18–21 · College / fashion', start:'college-home',
    feature:'Mission-first discovery + proof-first PDP',
    summary:'A value-conscious student starts with a relevant style mission, then gets structured product facts, buyer proof and seller confidence before Order #1.',
    path:['Guided homepage','Men’s Fashion category','Proof-first PDP','Seller + review evidence','Mission expansion']
  },
  {
    id:'bihar', number:'02', initials:'RK', label:'Bihar · Chhath Mission', name:'Rohit', location:'Regional / seasonal context', start:'chhath-home',
    feature:'Regional relevance without changing the trust system',
    summary:'The homepage order changes for Chhath—festive fashion, gifting and travel essentials—while Mall, MTrusted and buyer proof keep the same meaning.',
    path:['Chhath homepage','Festive mission','Qualified products','Trusted PDP','Cart / checkout']
  },
  {
    id:'mall', number:'03', initials:'KB', label:'Meesho Mall · Grooming', name:'Kabir', location:'22–24 · Brand-sensitive', start:'mall-home',
    feature:'Brand / provenance trust',
    summary:'A grooming shopper who wants known brands enters a dedicated Mall destination instead of decoding multiple badges and sources.',
    path:['Mall destination','Brand / need browsing','Branded product','Product proof','Purchase']
  },
  {
    id:'mtrusted', number:'04', initials:'VV', label:'MTrusted · Seller Proof', name:'Vivek', location:'Seller / listing confidence', start:'mtrusted-home',
    feature:'Marketplace-quality trust made explainable',
    summary:'An unfamiliar seller becomes easier to evaluate when seller history, fulfilment, issue outcomes and listing quality are organised into a clear trust layer.',
    path:['MTrusted destination','Why MTrusted?','Seller evidence','Eligible product','PDP']
  },
  {
    id:'assam', number:'05', initials:'NB', label:'Assam · Festive Context', name:'Nayan', location:'Regional discovery', start:'assam-home',
    feature:'Region + season as a lightweight first-session prior',
    summary:'An illustrative Assam festive homepage demonstrates how region and season can reorder content, with behaviour taking over as the shopper interacts.',
    path:['Assam homepage','Mission choice','Trending products','Mall / MTrusted','Trusted PDP']
  }
];

const screenMeta = {
  'college-home':{persona:'college',label:'HOME · COLLEGE STYLE',title:'College-guided homepage',why:'The same universal Meesho architecture is reordered around a college-style mission. Categories, style edit, MTrusted, Mall and product discovery all route onward.', next:[['Shop Men’s Fashion','category-fashion'],['Open MTrusted','mtrusted-home'],['Open Meesho Mall','mall-home'],['View product','pdp-core']]},
  'assam-home':{persona:'assam',label:'HOME · ASSAM FESTIVE',title:'Festive picks for Assam',why:'This mockup shows illustrative regional ordering: festive missions first, followed by trending products and universal trust destinations.',next:[['Explore festive mission','assam-category'],['Open MTrusted','mtrusted-home'],['Open Meesho Mall','mall-home'],['View trending product','pdp-core']]},
  'mall-home':{persona:'mall',label:'DESTINATION · MEESHO MALL',title:'Meesho Mall',why:'Mall answers the brand/source question. The shopper can move by brand, grooming need or branded product and still reach the same PDP proof system.',next:[['Why shop Mall?','mall-explainer'],['Browse branded picks','category-grooming'],['Open product','pdp-core'],['Switch to MTrusted','mtrusted-home']]},
  'mtrusted-home':{persona:'mtrusted',label:'DESTINATION · MTRUSTED',title:'MTrusted',why:'MTrusted reduces evaluation work for unfamiliar sellers by organising marketplace-quality evidence into one consumer-facing trust shortcut.',next:[['Why MTrusted?','mtrusted-explainer'],['View seller proof','seller-profile'],['Open product','pdp-core'],['Switch to Mall','mall-home']]},
  'pdp-core':{persona:'college',label:'PDP · PROOF FIRST',title:'Proof-first product detail page',why:'Decision-critical product facts, seller context, summarised buyer evidence, verified UGC and transaction certainty are grouped at the point of decision.',next:[['View all product details','product-details'],['Open seller profile','seller-profile'],['Open review intelligence','reviews'],['View buyer photos','ugc-gallery'],['Continue below fold','pdp-growth']]},
  'pdp-growth':{persona:'college',label:'PDP · MISSION EXPANSION',title:'Expand the mission',why:'After the SKU earns consideration, the experience can complete the look, show focused style adjacencies, enable Share & Save and explain Mall/MTrusted.',next:[['Complete the look','bundle'],['Explore similar styles','category-fashion'],['Create Share & Save group','group-save'],['Open Mall','mall-home'],['Open MTrusted','mtrusted-home']]},
  'chhath-home':{persona:'bihar',label:'HOME · BIHAR CHHATH',title:'Chhath contextual homepage',why:'A generated screen uses the same visual language as the supplied mockups while changing the content order for the Bihar / Chhath use case.',next:[['Festive fashion','chhath-category'],['Gifting','category-gifting'],['Travel essentials','category-utility'],['View product','pdp-core']]},
  'chhath-category':{label:'CATEGORY · CHHATH PICKS',title:'Chhath festive picks',why:'A focused Bihar seasonal mission combines festive fashion, gifting and travel while preserving the same trust architecture.',next:[['Open festive product','pdp-core'],['View MTrusted','mtrusted-home'],['View Mall','mall-home']]},
  'category-fashion':{persona:'college',label:'CATEGORY · MEN’S FASHION',title:'Men’s Fashion category',why:'A mission-relevant category page keeps the shopper focused and offers trust-qualified products instead of returning to an endless generic feed.',next:[['Open first product','pdp-core'],['Filter MTrusted','mtrusted-home'],['View similar styles','pdp-growth']]},
  'category-grooming':{persona:'mall',label:'CATEGORY · GROOMING',title:'Men’s Grooming category',why:'A brand-sensitive grooming mission connects directly into Mall and product-level evidence.',next:[['View branded product','pdp-core'],['Browse Mall','mall-home'],['Open reviews','reviews']]},
  'category-gifting':{persona:'bihar',label:'CATEGORY · GIFTING',title:'Gifting category',why:'A seasonal gifting category demonstrates how a regional mission can branch into products while preserving the same trust system.',next:[['View gift product','pdp-core'],['See Mall gift picks','mall-home'],['Go to cart','cart']]},
  'category-utility':{persona:'bihar',label:'CATEGORY · UTILITY',title:'Travel & utility essentials',why:'Utility products emphasize specifications, compatibility and transaction certainty before purchase.',next:[['Open product details','product-details'],['View MTrusted','mtrusted-home'],['Go to product','pdp-core']]},
  'assam-category':{persona:'assam',label:'CATEGORY · FESTIVE ASSAM',title:'Assam festive mission',why:'The regional category combines festive style, gifting, footwear and home refresh with the same Mall / MTrusted trust shortcuts.',next:[['View festive product','pdp-core'],['Open MTrusted','mtrusted-home'],['Open Mall','mall-home']]},
  'product-details':{label:'PDP · PRODUCT DETAILS',title:'Category-specific product details',why:'Structured fields reduce information search effort and make a shirt, trimmer or charger judgeable using category-relevant attributes.',next:[['Back to PDP','pdp-core'],['Open seller proof','seller-profile'],['Open transaction certainty','transaction']]},
  'seller-profile':{label:'TRUST · SELLER PROFILE',title:'Seller credibility',why:'The seller view makes category performance, fulfilment and issue outcomes legible without forcing the shopper to investigate elsewhere.',next:[['Why MTrusted?','mtrusted-explainer'],['View buyer reviews','reviews'],['Back to product','pdp-core']]},
  'reviews':{label:'PROOF · REVIEW INTELLIGENCE',title:'Customers say',why:'Review intelligence summarises themes but remains traceable to verified ratings, photos, video and full customer reviews.',next:[['Open photo & video UGC','ugc-gallery'],['Return to PDP','pdp-core'],['Continue to mission expansion','pdp-growth']]},
  'ugc-gallery':{label:'PROOF · VERIFIED UGC',title:'Real buyer photos & videos',why:'Verified-purchase UGC gives shoppers concrete evidence that listing claims and real-world appearance align.',next:[['Back to reviews','reviews'],['Back to PDP','pdp-core']]},
  'transaction':{label:'CHECKOUT · CERTAINTY',title:'Transaction certainty',why:'Delivery estimate, return eligibility and refund visibility reduce last-mile hesitation before the first order.',next:[['Add to cart','cart'],['Buy now','checkout'],['Back to PDP','pdp-core']]},
  'mall-explainer':{persona:'mall',label:'TRUST · WHY MALL',title:'What Meesho Mall means',why:'Mall is framed as a recognizable destination for brand/provenance trust—not another generic badge.',next:[['Browse Mall','mall-home'],['View product','pdp-core'],['Compare with MTrusted','mtrusted-explainer']]},
  'mtrusted-explainer':{persona:'mtrusted',label:'TRUST · WHY MTRUSTED',title:'What MTrusted means',why:'The explanation connects the badge to the evidence behind it: seller history, fulfilment, issue outcomes and listing quality.',next:[['View seller proof','seller-profile'],['Browse MTrusted','mtrusted-home'],['Compare with Mall','mall-explainer']]},
  'bundle':{label:'LTV · COMPLETE THE MISSION',title:'Complete your look',why:'Mission-based bundles extend one trusted SKU into a broader need without sending the shopper back into open-ended discovery.',next:[['Add bundle to cart','cart'],['See similar styles','pdp-growth'],['Back to PDP','pdp-core']]},
  'group-save':{label:'LTV · SHARE & SAVE',title:'Share & Save',why:'An optional group flow tests whether shared value can improve conversion and acquisition without making discounting the core trust proposition.',next:[['Create a group','group-created'],['Back to PDP','pdp-growth']]},
  'group-created':{label:'LTV · GROUP CREATED',title:'Group ready to share',why:'The prototype completes the social-shopping loop with a simple invite state and a clear return path to checkout.',next:[['Go to cart','cart'],['Return to product','pdp-growth']]},
  'search':{label:'DISCOVERY · SEARCH',title:'Search Meesho',why:'Search is connected to mission-relevant suggestions rather than acting as a dead-end placeholder.',next:[['College black shirt','category-fashion'],['Grooming essentials','category-grooming'],['Festive kurta','chhath-category']]},
  'wishlist':{label:'ACCOUNT · SAVED',title:'Saved items',why:'Saved products remain cross-linked to the same proof-first PDP and trust destinations.',next:[['Open saved product','pdp-core'],['Browse more','college-home']]},
  'cart':{label:'CHECKOUT · CART',title:'Your cart',why:'Cart preserves trust context and shows reversibility before checkout.',next:[['Proceed to checkout','checkout'],['Return to product','pdp-core']]},
  'checkout':{label:'CHECKOUT · READY',title:'Review your order',why:'A compact checkout screen closes the interactive journey without introducing infrastructure beyond the product concept.',next:[['Place illustrative order','order-success'],['Back to cart','cart']]},
  'order-success':{label:'ORDER #1 · SUCCESS',title:'Order placed',why:'The journey demonstrates the deck’s key objective: convert consideration into a credible first kept order.',next:[['View orders','orders'],['Explore next mission','college-home']]},
  'orders':{label:'ACCOUNT · ORDERS',title:'My Orders',why:'Post-purchase continuity gives a path into repeat and category expansion after trust is earned.',next:[['View order','order-success'],['Explore next mission','college-home']]},
  'account':{label:'ACCOUNT · PROFILE',title:'Account',why:'Account, language and region settings support vernacular and contextual parity without creating a separate product architecture.',next:[['Change language / region','settings'],['Go home','college-home']]},
  'settings':{label:'ACCOUNT · CONTEXT',title:'Language & region',why:'The same purchase decision remains understandable when language and regional context change.',next:[['Assam context','assam-home'],['Bihar context','chhath-home'],['College context','college-home']]},
  'returns':{label:'TRUST · REVERSIBILITY',title:'Easy returns',why:'Return and refund clarity are shown as transaction-confidence infrastructure, not the primary product proposition.',next:[['Back home','college-home'],['View transaction certainty','transaction']]},
  'pricing':{label:'TRUST · PRICING',title:'Transparent pricing',why:'Price remains visible and credible while proof, seller evidence and reversibility answer why the deal can be trusted.',next:[['Back home','college-home'],['Open product','pdp-core']]}
};

const mockupHotspots = {
  'college-home':[
    {x:12,y:8.8,w:74,h:5.8,label:'Search products',route:'search'},
    {x:80,y:4.3,w:8,h:6,label:'Saved items',route:'wishlist'},{x:88,y:4.3,w:8,h:6,label:'Cart',route:'cart'},
    {x:6,y:14.7,w:29,h:4,label:'Easy returns',route:'returns'},{x:35,y:14.7,w:29,h:4,label:'Cash on delivery',route:'transaction'},{x:64,y:14.7,w:30,h:4,label:'Transparent pricing',route:'pricing'},
    {x:8,y:21,w:21,h:14,label:"Men's Fashion",route:'category-fashion'},{x:29,y:21,w:20,h:14,label:"Women's Fashion",route:'category-fashion'},{x:49,y:21,w:20,h:14,label:'Footwear',route:'category-fashion'},{x:69,y:21,w:22,h:14,label:'Grooming',route:'category-grooming'},
    {x:8,y:35,w:21,h:12,label:'Mobile accessories',route:'category-utility'},{x:29,y:35,w:20,h:12,label:'Electronics',route:'category-utility'},{x:49,y:35,w:20,h:12,label:'Sports & fitness',route:'category-utility'},{x:69,y:35,w:22,h:12,label:'Home & utility',route:'category-utility'},
    {x:9,y:48,w:83,h:12,label:'Your Style Edit',route:'category-fashion'},
    {x:10,y:62,w:20,h:10,label:'Casual shirt',route:'pdp-core'},{x:31,y:62,w:19,h:10,label:'Jeans',route:'pdp-core'},{x:51,y:62,w:19,h:10,label:'Sneakers',route:'pdp-core'},{x:72,y:62,w:19,h:10,label:'Accessories',route:'pdp-core'},
    {x:9,y:73,w:40,h:10,label:'MTrusted',route:'mtrusted-home'},{x:51,y:73,w:40,h:10,label:'Meesho Mall',route:'mall-home'},
    {x:9,y:84,w:82,h:8,label:'Continue exploring',route:'category-fashion'},
    {x:7,y:94,w:20,h:5,label:'Home',route:'college-home'},{x:29,y:94,w:20,h:5,label:'Categories',route:'category-fashion'},{x:51,y:94,w:20,h:5,label:'My Orders',route:'orders'},{x:73,y:94,w:20,h:5,label:'Account',route:'account'}
  ],
  'assam-home':[
    {x:12,y:8.6,w:73,h:5.5,label:'Search products',route:'search'},{x:80,y:4.3,w:8,h:6,label:'Saved items',route:'wishlist'},{x:88,y:4.3,w:8,h:6,label:'Cart',route:'cart'},
    {x:6,y:14.2,w:29,h:4,label:'Easy returns',route:'returns'},{x:35,y:14.2,w:29,h:4,label:'Cash on delivery',route:'transaction'},{x:64,y:14.2,w:30,h:4,label:'Transparent pricing',route:'pricing'},
    {x:8,y:19,w:84,h:15,label:'Festive picks for Assam',route:'assam-category'},
    {x:8,y:38,w:41,h:13,label:'Festive style',route:'assam-category'},{x:51,y:38,w:41,h:13,label:'Self-care',route:'category-grooming'},
    {x:8,y:52,w:27,h:11,label:'Everyday style',route:'category-fashion'},{x:36,y:52,w:27,h:11,label:'Active',route:'category-utility'},{x:64,y:52,w:28,h:11,label:'Utility',route:'category-utility'},
    {x:9,y:68,w:20,h:10,label:'Festive kurta',route:'pdp-core'},{x:30,y:68,w:20,h:10,label:'Casual shoes',route:'pdp-core'},{x:51,y:68,w:20,h:10,label:'Grooming kit',route:'pdp-core'},{x:72,y:68,w:20,h:10,label:'Home decor',route:'pdp-core'},
    {x:8,y:80,w:84,h:8,label:'MTrusted',route:'mtrusted-home'},{x:8,y:88,w:84,h:8,label:'Meesho Mall',route:'mall-home'},
    {x:7,y:95,w:20,h:4,label:'Home',route:'assam-home'},{x:29,y:95,w:20,h:4,label:'Categories',route:'assam-category'},{x:51,y:95,w:20,h:4,label:'My Orders',route:'orders'},{x:73,y:95,w:20,h:4,label:'Account',route:'account'}
  ],
  'mall-home':[
    {x:13,y:12,w:72,h:6,label:'Search grooming',route:'search'},{x:8,y:19,w:40,h:6,label:'Meesho Mall tab',route:'mall-home'},{x:51,y:19,w:40,h:6,label:'MTrusted tab',route:'mtrusted-home'},
    {x:8,y:27,w:84,h:17,label:'Mall brand banner',route:'mall-explainer'},{x:8,y:44,w:84,h:7,label:'What does Mall mean?',route:'mall-explainer'},
    {x:8,y:53,w:27,h:10,label:'Known brand confidence',route:'mall-explainer'},{x:36,y:53,w:27,h:10,label:'Authorised seller logic',route:'mall-explainer'},{x:64,y:53,w:28,h:10,label:'Value on Meesho',route:'pricing'},
    {x:8,y:65,w:16,h:9,label:'Nivea',route:'category-grooming'},{x:25,y:65,w:16,h:9,label:'Dabur',route:'category-grooming'},{x:42,y:65,w:16,h:9,label:'Mamaearth',route:'category-grooming'},{x:59,y:65,w:16,h:9,label:'Bombay Shaving',route:'category-grooming'},{x:76,y:65,w:16,h:9,label:'Himalaya',route:'category-grooming'},
    {x:8,y:76,w:20,h:13,label:'Shaving',route:'category-grooming'},{x:29,y:76,w:20,h:13,label:'Beard care',route:'category-grooming'},{x:50,y:76,w:20,h:13,label:'Face care',route:'category-grooming'},{x:71,y:76,w:21,h:13,label:'Fragrance',route:'category-grooming'},
    {x:8,y:90,w:84,h:9,label:'Branded product picks',route:'pdp-core'}
  ],
  'mtrusted-home':[
    {x:13,y:12,w:72,h:6,label:'Search fashion',route:'search'},{x:8,y:19,w:40,h:6,label:'Meesho Mall tab',route:'mall-home'},{x:51,y:19,w:40,h:6,label:'MTrusted tab',route:'mtrusted-home'},
    {x:8,y:26,w:84,h:17,label:'MTrusted hero',route:'mtrusted-explainer'},{x:8,y:44,w:84,h:7,label:'Can I trust this seller?',route:'mtrusted-explainer'},
    {x:8,y:52,w:20,h:11,label:'Seller track record',route:'seller-profile'},{x:29,y:52,w:20,h:11,label:'Reliable fulfilment',route:'seller-profile'},{x:50,y:52,w:20,h:11,label:'Product issue signals',route:'seller-profile'},{x:71,y:52,w:21,h:11,label:'Complete listing',route:'product-details'},
    {x:8,y:65,w:84,h:10,label:'Trust signals explained',route:'mtrusted-explainer'},
    {x:8,y:77,w:20,h:13,label:'MTrusted product',route:'pdp-core'},{x:29,y:77,w:20,h:13,label:'MTrusted product',route:'pdp-core'},{x:50,y:77,w:20,h:13,label:'MTrusted product',route:'pdp-core'},{x:71,y:77,w:21,h:13,label:'MTrusted product',route:'pdp-core'},
    {x:8,y:91,w:84,h:8,label:'Seller evidence',route:'seller-profile'}
  ],
  'pdp-core':[
    {x:4,y:5,w:9,h:7,label:'Back',back:true},{x:80,y:5,w:8,h:7,label:'Saved items',route:'wishlist'},{x:89,y:5,w:8,h:7,label:'Cart',route:'cart'},
    {x:52,y:12,w:43,h:20,label:'Product / size selection',route:'product-details'},
    {x:7,y:34,w:86,h:13,label:'View all product details',route:'product-details'},
    {x:7,y:48,w:86,h:10,label:'Seller section',route:'seller-profile'},
    {x:7,y:59,w:86,h:11,label:'Customers say',route:'reviews'},
    {x:7,y:71,w:86,h:12,label:'Real buyer photos & videos',route:'ugc-gallery'},
    {x:7,y:84,w:86,h:10,label:'Transaction certainty',route:'transaction'},
    {x:7,y:95,w:42,h:4,label:'Add to cart',route:'cart'},{x:51,y:95,w:42,h:4,label:'Buy now',route:'checkout'},
    {x:85,y:32,w:9,h:4,label:'Continue below fold',route:'pdp-growth'}
  ],
  'pdp-growth':[
    {x:4,y:4,w:9,h:6,label:'Back',back:true},{x:87,y:4,w:9,h:6,label:'Cart',route:'cart'},
    {x:7,y:9,w:86,h:22,label:'Complete your look',route:'bundle'},{x:7,y:31,w:86,h:18,label:'Pair with similar styles',route:'category-fashion'},
    {x:7,y:50,w:86,h:13,label:'Share & Save',route:'group-save'},
    {x:7,y:65,w:41,h:16,label:'Meesho Mall explained',route:'mall-explainer'},{x:51,y:65,w:42,h:16,label:'MTrusted explained',route:'mtrusted-explainer'},
    {x:7,y:82,w:86,h:9,label:'Trust guarantees',route:'transaction'},
    {x:7,y:93,w:42,h:5,label:'Add to cart',route:'cart'},{x:51,y:93,w:42,h:5,label:'Buy now',route:'checkout'}
  ]
};

const mockupImages = {
  'college-home':'assets/college-home.webp',
  'assam-home':'assets/assam-home.webp',
  'mall-home':'assets/mall-home.webp',
  'mtrusted-home':'assets/mtrusted-home.webp',
  'pdp-core':'assets/pdp-core.webp',
  'pdp-growth':'assets/pdp-growth.webp'
};

let state = {
  persona:'college',
  screen:'college-home',
  history:[],
  showHotspots:false
};

function esc(v=''){return String(v).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function money(n){return `₹${n}`;}
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toast._t);toast._t=setTimeout(()=>el.classList.remove('show'),1700);}
function personaById(id){return personas.find(p=>p.id===id)||personas[0];}

function go(route,{replace=false}={}){
  if(!route || route===state.screen) return;
  if(!replace) state.history.push(state.screen);
  state.screen=route;
  render();
}
function back(){
  const prior=state.history.pop();
  if(prior){state.screen=prior;render();}
  else {go(personaById(state.persona).start,{replace:true});}
}
function choosePersona(id){
  const p=personaById(id); state.persona=p.id; state.screen=p.start; state.history=[]; render();
}
function restart(){const p=personaById(state.persona);state.screen=p.start;state.history=[];render();toast('Journey restarted');}

function renderPersonas(){
  $('#persona-list').innerHTML=personas.map(p=>`<button type="button" class="persona-card ${p.id===state.persona?'active':''}" data-persona="${p.id}">
    <span class="persona-avatar">${p.initials}</span>
    <span class="persona-copy"><b>${esc(p.label)}</b><small>${esc(p.name)} · ${esc(p.location)}</small></span>
    <span class="persona-arrow">›</span>
  </button>`).join('');
}

function renderDetails(){
  const p=personaById(state.persona), meta=screenMeta[state.screen]||{};
  const next=(meta.next||[]).slice(0,5);
  $('#detail-panel').innerHTML=`
    <div class="detail-hero">
      <span class="detail-index">${p.number}</span>
      <div><small>CURRENT PERSONA</small><h2>${esc(p.label)}</h2><p>${esc(p.summary)}</p></div>
    </div>
    <div class="detail-card"><small>CURRENT SCREEN</small><strong>${esc(meta.title||'Interactive screen')}</strong><p>${esc(meta.why||p.feature)}</p></div>
    <div class="detail-card"><small>FEATURE BEING DEMONSTRATED</small><strong>${esc(p.feature)}</strong></div>
    <div class="detail-card"><small>POSSIBLE NEXT CLICKS</small><div class="click-list">
      ${next.map((n,i)=>`<button type="button" data-route="${n[1]}"><span>${String(i+1).padStart(2,'0')}</span><b>${esc(n[0])}</b></button>`).join('')}
    </div></div>
    <div class="detail-note"><b>Cross-linked prototype</b><p>All supplied mockups are live click targets. Missing screens are generated in the same Meesho visual system so seller proof, reviews, categories, cart and trust explanations never dead-end.</p></div>`;
}

function mockupScreen(id){
  const hs=mockupHotspots[id]||[];
  return `<div class="mockup-screen ${state.showHotspots?'show-hotspots':''}" data-screen="${id}">
    <img src="${mockupImages[id]}" alt="${esc(screenMeta[id]?.title||id)}" draggable="false" />
    ${hs.map((h,i)=>`<button type="button" class="hotspot" ${h.back?'data-back="1"':`data-route="${h.route}"`} aria-label="${esc(h.label)}" title="${esc(h.label)}" style="left:${h.x}%;top:${h.y}%;width:${h.w}%;height:${h.h}%"></button>`).join('')}
  </div>`;
}

function phoneShell({title,subtitle='',content='',active='Home',backButton=true,white=false,headerAction=''}){
  return `<div class="generated-phone"><div class="statusbar"><span>9:41</span><span>● ▮▮ 100%</span></div><div class="phone-app">
    <div class="phone-header">${backButton?'<button class="back-button" data-back="1" aria-label="Back">‹</button>':'<span class="mini-logo">meesho</span>'}<div class="phone-header-copy"><b>${esc(title)}</b>${subtitle?`<small>${esc(subtitle)}</small>`:''}</div>${headerAction||'<button class="header-icon" data-route="cart" aria-label="Cart">🛒</button>'}</div>
    <div class="phone-content ${white?'white':''}">${content}</div>${bottomNav(active)}
  </div></div>`;
}
function bottomNav(active='Home'){
  const categoryRoute={college:'category-fashion',bihar:'chhath-category',mall:'category-grooming',mtrusted:'category-fashion',assam:'assam-category'}[state.persona]||'category-fashion';
  const items=[['Home','⌂',personaById(state.persona).start],['Categories','▦',categoryRoute],['My Orders','▣','orders'],['Account','○','account']];
  return `<nav class="bottom-nav">${items.map(([n,ic,r])=>`<button type="button" class="${active===n?'active':''}" data-route="${r}"><span>${ic}</span>${n}</button>`).join('')}</nav>`;
}
function utilityRow(){return `<div class="g-utility-row"><button data-route="returns">↩ Easy Returns</button><button data-route="transaction">₹ Cash on Delivery</button><button data-route="pricing">✓ Transparent Pricing</button></div>`;}
function gSearch(){return `<button class="g-search" data-route="search"><span>⌕</span><span>Search products, categories or needs</span><b>⌁</b></button>`;}
function productCard(name,price,trust='MTrusted',emoji='👕',route='pdp-core'){
  return `<button class="g-product" data-route="${route}"><div class="product-art">${emoji}</div><b>${esc(name)}</b><strong>${money(price)}</strong><small>${esc(trust)} · ★ 4.3</small></button>`;
}
function categoryScreen(title,subtitle,products,active='Categories'){
  return phoneShell({title,subtitle,active,content:`<div class="pad phone-content-inner"><div class="info-banner"><strong>Mission-first results</strong><p>Focused products with decision-useful trust signals. Use filters to narrow the mission without losing proof.</p></div><div class="filter-row"><button class="filter-chip active">Relevant</button><button class="filter-chip" data-route="mtrusted-home">MTrusted</button><button class="filter-chip" data-route="mall-home">Mall</button><button class="filter-chip" data-route="pricing">Under ₹699</button></div><div class="g-product-row">${products.map(p=>productCard(...p)).join('')}</div></div>`});
}

function chhathHome(){
  const content=`${gSearch()}${utilityRow()}<button class="g-hero orange" data-route="chhath-category"><span>CHHATH · BIHAR</span><b>Chhath ke liye, sab taiyaar</b><span>Festive fashion, gifting and travel essentials—ordered around the mission.</span><i>EXPLORE FESTIVE PICKS ›</i></button>
  <section class="g-section"><div class="g-title"><b>WHAT DO YOU NEED TODAY?</b><button data-route="chhath-category">See all ›</button></div><div class="g-card-grid"><button class="g-mission" data-route="chhath-category"><em>🧥</em><strong>Festive fashion</strong><small>Kurtas · jackets · footwear</small></button><button class="g-mission" data-route="category-gifting"><em>🎁</em><strong>Gifting</strong><small>Useful gifts under ₹699</small></button><button class="g-mission" data-route="category-utility"><em>🧳</em><strong>Travel essentials</strong><small>Bags · utility · accessories</small></button><button class="g-mission" data-route="category-grooming"><em>✂</em><strong>Grooming reset</strong><small>Festive-ready essentials</small></button></div></section>
  <section class="g-section"><div class="g-title"><b>TRENDING FOR CHHATH</b><button data-route="chhath-category">See all ›</button></div><div class="g-product-row">${productCard('Festive cotton kurta','599','MTrusted','🧥')}${productCard('Classic loafers','649','Meesho Mall','👞')}</div></section>
  <section class="g-section"><div class="trust-split"><button class="trust-card purple" data-route="mtrusted-home"><span>✓</span><b>MTrusted</b><small>Seller + marketplace-quality confidence</small></button><button class="trust-card pink" data-route="mall-home"><span>m</span><b>Meesho Mall</b><small>Brand + source confidence</small></button></div></section>`;
  return phoneShell({title:'meesho',subtitle:'Patna, Bihar · हिन्दी / English',content,active:'Home',backButton:false,headerAction:'<button class="header-icon" data-route="wishlist">♡</button><button class="header-icon" data-route="cart">🛒</button>'});
}

function searchScreen(){
  const content=`<div class="pad"><div class="info-banner"><strong>What do you need today?</strong><p>Try a mission, product, category or use case. These suggestions are all interactive.</p></div><button class="route-button" data-route="category-fashion"><b>“College ke liye black shirt”</b><small>Men’s Fashion · style-first mission</small></button><button class="route-button" data-route="category-grooming"><b>“Grooming reset under ₹699”</b><small>Branded + trusted grooming</small></button><button class="route-button" data-route="chhath-category"><b>“Chhath festive kurta”</b><small>Bihar seasonal mission</small></button><button class="route-button" data-route="assam-category"><b>“Festive picks for Assam”</b><small>Regional seasonal discovery</small></button></div>`;
  return phoneShell({title:'Search Meesho',subtitle:'Mission, category or product',content,active:'Home'});
}

function detailsScreen(){
  const rows=[['Fabric','Cotton Blend'],['Fit','Regular Fit'],['Exact measurement','Chest 42 in · Length 29 in'],['Sleeve','Full sleeve'],['Pattern','Solid'],['Care','Machine wash'],['Pack quantity','1 shirt'],['Return eligibility','7 days']];
  return phoneShell({title:'Product details',subtitle:"Men's Regular Fit Casual Shirt",content:`<div class="pad"><span class="screen-tag">CATEGORY-SPECIFIC STANDARD</span><h3 class="section-head">Everything needed to judge the shirt</h3><div class="spec-table">${rows.map(r=>`<div class="spec-row"><span>${r[0]}</span><span>${r[1]}</span></div>`).join('')}</div><div class="sheet-note">Different categories use different mandatory decision fields. Grooming would prioritise ingredients, quantity, expiry/use-by and manufacturer; tech would prioritise compatibility, connector, power, dimensions and warranty.</div><div class="cta-row"><button class="secondary-cta" data-route="seller-profile">Seller proof</button><button class="primary-cta" data-route="pdp-core">Back to PDP</button></div></div>`});
}

function sellerProfile(){
  return phoneShell({title:'Seller profile',subtitle:"XYZ Fashion · Men's Fashion",content:`<div class="pad"><div class="seller-hero"><div class="seller-line"><span class="seller-badge">XYZ</span><div><b>XYZ Fashion</b><small>MTrusted eligible · Illustrative UI</small></div></div><p>Meesho organises seller × category history, fulfilment, issue outcomes and listing quality so the shopper can evaluate the listing with less effort.</p></div><div class="metric-row"><div class="metric"><b>Strong</b><small>Category performance</small></div><div class="metric"><b>Reliable</b><small>Fulfilment</small></div><div class="metric"><b>Low</b><small>Issue incidence</small></div></div><div class="evidence-list"><div class="evidence-item"><span>01</span><div><b>Seller track record</b><small>Consistent performance in Men’s Fashion.</small></div></div><div class="evidence-item"><span>02</span><div><b>Reliable fulfilment</b><small>Healthy shipment and delivery outcomes.</small></div></div><div class="evidence-item"><span>03</span><div><b>Issue outcomes</b><small>Low incidence of customer-reported problems.</small></div></div><div class="evidence-item"><span>04</span><div><b>Complete listing</b><small>Decision-critical information is present.</small></div></div></div><div class="cta-row"><button class="secondary-cta" data-route="mtrusted-explainer">Why MTrusted?</button><button class="primary-cta" data-route="pdp-core">Return to product</button></div></div>`});
}

function reviewsScreen(){
  return phoneShell({title:'Customers say',subtitle:'Summary + traceable buyer evidence',content:`<div class="pad"><div class="review-summary"><h3>Verified buyer summary</h3><div class="review-score"><strong>4.3</strong><span>★★★★★</span><small>1.2k ratings</small></div><div class="theme-bars"><div class="theme-bar"><span>Fit</span><div class="bar"><i style="width:84%"></i></div><b>84%</b></div><div class="theme-bar"><span>Fabric</span><div class="bar"><i style="width:79%"></i></div><b>79%</b></div><div class="theme-bar"><span>Colour</span><div class="bar"><i style="width:76%"></i></div><b>76%</b></div><div class="theme-bar"><span>Quality</span><div class="bar"><i style="width:81%"></i></div><b>81%</b></div></div></div><div class="list-card" data-route="ugc-gallery"><span class="list-icon">▣</span><div class="list-copy"><b>Real buyer photos & videos</b><small>Verified-purchase visual evidence · tap to open gallery</small></div><span class="list-arrow">›</span></div><div class="review-summary"><h3>Most mentioned</h3><p style="font-size:8px;line-height:1.55;margin:0"><b>Fit:</b> Mostly true to size. <br><b>Fabric:</b> Soft and lightweight. <br><b>Colour:</b> Generally matches listing images. <br><b>Quality:</b> Mostly positive, some durability concerns.</p></div><div class="cta-row"><button class="secondary-cta" data-route="pdp-core">Back to PDP</button><button class="primary-cta" data-route="pdp-growth">Next useful decision</button></div></div>`});
}

function ugcGallery(){
  return phoneShell({title:'Buyer photos & videos',subtitle:'Verified Purchase',content:`<div class="pad"><div class="info-banner"><strong>Traceable buyer evidence</strong><p>Each visual is tied back to an eligible verified purchase instead of presenting an ungrounded gallery.</p></div><div class="ugc-grid">${['👔','🧍','◫','👕','◩','🎥','👔','🧍','◫'].map(x=>`<button class="ugc-tile" data-toast="Verified purchase · buyer media">${x}</button>`).join('')}</div><div class="review-summary" style="margin-top:9px"><h3>Highlighted review</h3><p style="font-size:8px;line-height:1.5;margin:0">“Fit matched the size guide and the fabric looked close to the listing.” <b>· Verified Purchase</b></p></div><button class="primary-cta" style="width:100%" data-route="reviews">Back to review summary</button></div>`});
}

function transactionScreen(){
  return phoneShell({title:'Transaction certainty',subtitle:'Before you place Order #1',content:`<div class="pad"><div class="info-banner"><strong>Make the transaction reversible and predictable</strong><p>The product has earned consideration; now remove avoidable last-mile uncertainty.</p></div><div class="evidence-list"><div class="evidence-item"><span>🚚</span><div><b>Delivery estimate</b><small>Expected by Tue, 8 Oct · visible near the purchase decision.</small></div></div><div class="evidence-item"><span>↩</span><div><b>Return / replacement</b><small>7-day eligible for this illustrative product.</small></div></div><div class="evidence-item"><span>₹</span><div><b>Refund tracking</b><small>Status visible after return initiation.</small></div></div><div class="evidence-item"><span>✓</span><div><b>Safe payment options</b><small>Secure and familiar payment choices.</small></div></div></div><div class="cta-row"><button class="secondary-cta" data-route="cart">Add to cart</button><button class="primary-cta" data-route="checkout">Buy now</button></div></div>`});
}

function mallExplainer(){
  return phoneShell({title:'What does Meesho Mall mean?',subtitle:'Brand / provenance trust',content:`<div class="pad"><div class="seller-hero" style="background:linear-gradient(135deg,#fff0f8,#fff)"><div class="seller-line"><span class="seller-badge" style="background:linear-gradient(145deg,#8b125f,#f43397)">m</span><div><b>For brands, go to Mall</b><small>Known brand · clear source · Meesho value</small></div></div><p>Meesho organises branded assortment into one recognisable destination, reducing the need for repeated source-checking.</p></div><div class="evidence-list"><div class="evidence-item"><span>01</span><div><b>Known brand confidence</b><small>Familiar brand identity is foregrounded.</small></div></div><div class="evidence-item"><span>02</span><div><b>Curated branded choice</b><small>Brand-sensitive missions have a clear destination.</small></div></div><div class="evidence-item"><span>03</span><div><b>Value on Meesho</b><small>Brand confidence and value proposition coexist.</small></div></div></div><div class="cta-row"><button class="secondary-cta" data-route="mtrusted-explainer">Compare MTrusted</button><button class="primary-cta" data-route="mall-home">Browse Mall</button></div></div>`});
}

function mtrustedExplainer(){
  return phoneShell({title:'Why MTrusted?',subtitle:'Seller + marketplace-quality trust',content:`<div class="pad"><div class="seller-hero"><div class="seller-line"><span class="seller-badge">✓</span><div><b>Evidence, made legible</b><small>Meesho checks multiple marketplace-quality signals</small></div></div><p>MTrusted is a shopper-facing trust shortcut. Seller spend does not buy eligibility in this concept; the signal must match evidence.</p></div><div class="evidence-list"><div class="evidence-item"><span>01</span><div><b>Seller track record</b><small>Seller × category history and consistent outcomes.</small></div></div><div class="evidence-item"><span>02</span><div><b>Reliable fulfilment</b><small>Shipment and delivery performance.</small></div></div><div class="evidence-item"><span>03</span><div><b>Product issue signals</b><small>Customer-reported quality and issue outcomes.</small></div></div><div class="evidence-item"><span>04</span><div><b>Complete listing</b><small>Decision-useful information and listing quality.</small></div></div></div><div class="cta-row"><button class="secondary-cta" data-route="mall-explainer">Compare Mall</button><button class="primary-cta" data-route="seller-profile">View seller evidence</button></div></div>`});
}

function bundleScreen(){
  return phoneShell({title:'Complete your look',subtitle:'Casual / college mission',content:`<div class="pad"><div class="info-banner"><strong>One trusted SKU → complete mission</strong><p>Keep the next decision contextual instead of returning the shopper to an endless feed.</p></div><div class="g-product-row">${productCard('Black casual shirt','313','Current','👕','pdp-core')}${productCard('Regular fit trousers','449','Recommended','👖','pdp-core')}${productCard('Casual sneakers','699','Meesho Mall','👟','mall-home')}${productCard('Everyday watch','399','MTrusted','⌚','mtrusted-home')}</div><div class="price-box"><div class="price-line"><span>Bundle value</span><b>₹1,860</b></div><div class="price-line"><span>Illustrative bundle price</span><b>₹1,461</b></div><div class="price-line total"><span>Total</span><span>₹1,461</span></div></div><button class="primary-cta" style="width:100%;margin-top:10px" data-route="cart">Add selected items to cart</button></div>`});
}

function groupSave(){
  return phoneShell({title:'Share & Save',subtitle:'Optional group purchase experiment',content:`<div class="pad"><div class="seller-hero" style="background:linear-gradient(135deg,#fff0f6,#fff)"><div class="seller-line"><span class="seller-badge" style="background:var(--hot)">👥</span><div><b>Lower price with more shoppers</b><small>Illustrative group-buying flow</small></div></div><p>Create a group, share the invite and unlock a lower price only if the experiment demonstrates incremental contribution.</p></div><div class="metric-row"><div class="metric"><b>₹313</b><small>Standard price</small></div><div class="metric"><b>₹289</b><small>Group price</small></div><div class="metric"><b>3</b><small>People needed</small></div></div><div class="evidence-list"><div class="evidence-item"><span>1</span><div><b>Create a group</b><small>Start from the product you already trust.</small></div></div><div class="evidence-item"><span>2</span><div><b>Invite friends</b><small>Share the simple group link.</small></div></div><div class="evidence-item"><span>3</span><div><b>Unlock only if complete</b><small>Clear rules, no hidden mechanics.</small></div></div></div><button class="primary-cta" style="width:100%;margin-top:10px" data-route="group-created">Create a group</button></div>`});
}

function groupCreated(){return phoneShell({title:'Group created',subtitle:'Share & Save',content:`<div class="pad"><div class="success-card"><div class="success-check">✓</div><h2>Your group is ready</h2><p>Two more shoppers can join this illustrative group. The product, trust signals and purchase rules remain visible to everyone.</p><button class="primary-cta" data-toast="Share link copied (prototype)">Copy share link</button><div class="cta-row"><button class="secondary-cta" data-route="pdp-growth">Back to product</button><button class="primary-cta" data-route="cart">Go to cart</button></div></div></div>`});}

function cartScreen(){
  return phoneShell({title:'Your cart',subtitle:'1–3 items · trust context retained',content:`<div class="pad"><div class="cart-item"><div class="cart-art">👕</div><div><b>Men’s Regular Fit Casual Shirt</b><small>Black · Size L · MTrusted seller</small><strong>₹313</strong></div></div><div class="list-card" data-route="transaction"><span class="list-icon">↩</span><div class="list-copy"><b>7-day return / replacement</b><small>Delivery and refund visibility available before checkout</small></div><span class="list-arrow">›</span></div><div class="price-box"><div class="price-line"><span>Product</span><span>₹313</span></div><div class="price-line"><span>Delivery</span><span>FREE</span></div><div class="price-line total"><span>Total</span><span>₹313</span></div></div><button class="primary-cta" style="width:100%;margin-top:10px" data-route="checkout">Proceed to checkout</button></div>`});
}
function checkoutScreen(){
  return phoneShell({title:'Review your order',subtitle:'Illustrative checkout',content:`<div class="pad"><div class="cart-item"><div class="cart-art">👕</div><div><b>Men’s Regular Fit Casual Shirt</b><small>Black · Size L</small><strong>₹313</strong></div></div><div class="evidence-list"><div class="evidence-item"><span>⌖</span><div><b>Deliver to saved address</b><small>Patna / Guwahati / your selected profile context</small></div></div><div class="evidence-item"><span>₹</span><div><b>Payment method</b><small>Cash on delivery selected</small></div></div><div class="evidence-item"><span>🚚</span><div><b>Expected delivery</b><small>Tue, 8 Oct · illustrative</small></div></div></div><div class="price-box"><div class="price-line total"><span>Order total</span><span>₹313</span></div></div><button class="primary-cta" style="width:100%;margin-top:10px" data-route="order-success">Place illustrative order</button></div>`});
}
function orderSuccess(){return phoneShell({title:'Order placed',subtitle:'Order #1',content:`<div class="pad"><div class="success-card"><div class="success-check">✓</div><h2>Order #1 placed</h2><p>The prototype has moved from relevance → proof → transaction certainty → purchase. The next product question is whether trust compounds into a second mission.</p><div class="cta-row"><button class="secondary-cta" data-route="orders">View order</button><button class="primary-cta" data-route="college-home">Explore next mission</button></div></div></div>`});}
function ordersScreen(){return phoneShell({title:'My Orders',subtitle:'Post-purchase trust continuity',active:'My Orders',content:`<div class="pad"><div class="list-card" data-route="order-success"><span class="list-icon">📦</span><div class="list-copy"><b>Men’s Regular Fit Casual Shirt</b><small>Order placed · expected Tue, 8 Oct · ₹313</small></div><span class="list-arrow">›</span></div><div class="info-banner"><strong>Next-best mission only after trust is earned</strong><p>Repeat and category expansion should follow a successful first-order experience, not substitute for it.</p></div><button class="route-button" data-route="college-home"><b>College-ready picks</b><small>Continue the style mission</small></button><button class="route-button" data-route="category-grooming"><b>Grooming reset</b><small>Explore a second category</small></button></div>`});}
function accountScreen(){return phoneShell({title:'Account',subtitle:'Context and preferences',active:'Account',content:`<div class="pad"><div class="seller-hero" style="background:#fff"><div class="seller-line"><span class="seller-badge" style="background:#f7eaf4;color:var(--meesho)">NB</span><div><b>Prototype shopper</b><small>Language, region and behaviour shape ordering</small></div></div></div><button class="route-button" data-route="settings"><b>Language & region</b><small>English · हिन्दी · অসমীয়া · regional context</small></button><button class="route-button" data-route="orders"><b>My orders</b><small>Track purchase and returns</small></button><button class="route-button" data-route="wishlist"><b>Saved items</b><small>Continue evaluating later</small></button></div>`});}
function settingsScreen(){return phoneShell({title:'Language & region',subtitle:'Same trust, different context',active:'Account',content:`<div class="pad"><div class="info-banner"><strong>Context changes ordering, not the trust architecture</strong><p>Select a prototype context to jump into that first-session experience.</p></div><button class="route-button" data-route="assam-home"><b>Assam · festive / seasonal</b><small>অসমীয়া / English · regional ordering</small></button><button class="route-button" data-route="chhath-home"><b>Bihar · Chhath</b><small>हिन्दी / English · festival mission</small></button><button class="route-button" data-route="college-home"><b>College / fashion</b><small>English · mission-first style edit</small></button></div>`});}
function wishlistScreen(){return phoneShell({title:'Saved items',subtitle:'Continue evaluating',content:`<div class="pad"><div class="g-product-row">${productCard('Regular Fit Casual Shirt','313','MTrusted','👕')}${productCard('Casual sneakers','699','Meesho Mall','👟','mall-home')}</div><div class="info-banner" style="margin-top:9px"><strong>Saved ≠ trusted yet</strong><p>Opening a saved item returns to product facts, seller proof, buyer evidence and transaction certainty.</p></div></div>`});}
function genericTrustScreen(title,body,backRoute='college-home'){
  return phoneShell({title,subtitle:'Trust communication',content:`<div class="pad"><div class="info-banner"><strong>${esc(title)}</strong><p>${esc(body)}</p></div><button class="primary-cta" style="width:100%" data-route="${backRoute}">Continue shopping</button></div>`});
}

const generatedScreens = {
  'chhath-home':chhathHome,
  'search':searchScreen,
  'category-fashion':()=>categoryScreen("Men's Fashion",'College · casual · everyday',[["Black casual shirt",313,'MTrusted','👕'],['Checked casual shirt',349,'Verified','👔'],['Everyday jeans',499,'Top Rated','👖'],['Casual sneakers',699,'Meesho Mall','👟']]),
  'category-grooming':()=>categoryScreen("Men's Grooming",'Brand + proof-led discovery',[["Beard care kit",499,'Meesho Mall','🧴'],['Face care combo',549,'Mall','🧼'],['Trimmer + comb set',699,'MTrusted','✂'],['Fragrance duo',599,'Mall','🧴']]),
  'category-gifting':()=>categoryScreen('Gifting','Festive / household mission',[["Festive gift box",499,'MTrusted','🎁'],['Grooming gift set',599,'Mall','🧴'],['Travel organiser',399,'Verified','🧳'],['Home festive set',349,'Top Rated','🪔']]),
  'category-utility':()=>categoryScreen('Travel & Utility','Spec-first essentials',[["Fast charger",399,'MTrusted','🔌'],['Wireless earbuds',699,'Mall','🎧'],['Travel duffle',499,'Verified','🧳'],['Smart watch',899,'MTrusted','⌚']]),
  'assam-category':()=>categoryScreen('Festive picks for Assam','Illustrative regional mission',[["Festive textured kurta",599,'MTrusted','🧥'],['Casual shoes',499,'Mall','👞'],['Grooming kit',429,'MTrusted','🧴'],['Home décor set',199,'Verified','🏠']]),
  'chhath-category':()=>categoryScreen('Chhath festive picks','Bihar · fashion + gifting + travel',[["Festive cotton kurta",599,'MTrusted','🧥'],['Classic Nehru jacket',849,'Mall','🧥'],['Gifting combo',549,'Verified','🎁'],['Travel duffle',499,'MTrusted','🧳']]),
  'product-details':detailsScreen,
  'seller-profile':sellerProfile,
  'reviews':reviewsScreen,
  'ugc-gallery':ugcGallery,
  'transaction':transactionScreen,
  'mall-explainer':mallExplainer,
  'mtrusted-explainer':mtrustedExplainer,
  'bundle':bundleScreen,
  'group-save':groupSave,
  'group-created':groupCreated,
  'cart':cartScreen,
  'checkout':checkoutScreen,
  'order-success':orderSuccess,
  'orders':ordersScreen,
  'account':accountScreen,
  'settings':settingsScreen,
  'wishlist':wishlistScreen,
  'returns':()=>genericTrustScreen('Easy returns','Clear return / replacement eligibility reduces transaction anxiety. The prototype links this promise back to the PDP transaction-certainty module.'),
  'pricing':()=>genericTrustScreen('Transparent pricing','Low price alone is not the trust proposition. Price is paired with proof, seller evidence and reversibility so value feels credible.', 'pdp-core')
};

function renderScreen(){
  const canvas=$('#device-canvas');
  if(mockupImages[state.screen]) canvas.innerHTML=mockupScreen(state.screen);
  else if(generatedScreens[state.screen]) canvas.innerHTML=generatedScreens[state.screen]();
  else canvas.innerHTML=generatedScreens['search']();
  $('#stage-label').textContent=screenMeta[state.screen]?.label||state.screen.toUpperCase();
}
function render(){renderPersonas();renderDetails();renderScreen();$('#hotspot-toggle').textContent=state.showHotspots?'Hide click map':'Show click map';}

document.addEventListener('click',(e)=>{
  const p=e.target.closest('[data-persona]'); if(p){choosePersona(p.dataset.persona);return;}
  const b=e.target.closest('[data-back]'); if(b){back();return;}
  const r=e.target.closest('[data-route]'); if(r){go(r.dataset.route);return;}
  const t=e.target.closest('[data-toast]'); if(t){toast(t.dataset.toast);return;}
  const filter=e.target.closest('.filter-chip'); if(filter){$$('.filter-chip',filter.parentElement).forEach(x=>x.classList.remove('active'));filter.classList.add('active');toast(`${filter.textContent.trim()} filter applied`);}
});
$('#hotspot-toggle').addEventListener('click',()=>{state.showHotspots=!state.showHotspots;renderScreen();$('#hotspot-toggle').textContent=state.showHotspots?'Hide click map':'Show click map';toast(state.showHotspots?'Click map visible':'Click map hidden');});
$('#restart-button').addEventListener('click',restart);

render();
