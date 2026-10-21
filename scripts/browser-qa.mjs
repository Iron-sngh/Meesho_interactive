import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const origin='http://127.0.0.1:4173';
const server=spawn('python3',['-m','http.server','4173','--bind','127.0.0.1'],{stdio:'ignore'});
const report={passed:[],failed:[],warnings:[],pageErrors:[],badResponses:[],screenshots:[]};
const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
let browser;
function note(name,ok,detail=''){(ok?report.passed:report.failed).push({name,detail});}
async function visit(page,name,fn){
  try{await fn();note(name,true)}catch(e){note(name,false,String(e.message).slice(0,300))}
}
async function goto(page,route,persona){
  await page.evaluate(([p,r])=>{
    if(p) setPersona(p);
    if(r) go(r);
  },[persona,route]);
  await page.waitForTimeout(110);
}
async function screen(page,name){
  await page.screenshot({path:'qa-results/'+name+'.png',fullPage:true});
  report.screenshots.push(name+'.png');
}
async function findLayoutIssues(page,variant){
 const issues=await page.evaluate(()=>{
  const out=[];
  const vp=document.documentElement.clientWidth;
  if(document.documentElement.scrollWidth>vp+2)out.push('document overflows viewport horizontally by '+(document.documentElement.scrollWidth-vp)+'px');
  const canvas=document.querySelector('#device-canvas');
  if(canvas && canvas.getBoundingClientRect().right>innerWidth+2)out.push('phone frame outside right viewport');
  for(const selector of ['.appbar-title-main','.section-heading h2','.persona-top b','.nav-item','.bottom-cta .cta-button','.detail-stat > b']){
    for(const el of document.querySelectorAll(selector)){
      if(el.clientWidth>0 && el.scrollWidth>el.clientWidth+5 && getComputedStyle(el).overflowX!=='auto'){
         const txt=(el.textContent||'').trim().slice(0,65);
         out.push(selector+' clipped: '+txt);
      }
    }
  }
  return [...new Set(out)].slice(0,25);
 });
 for(const issue of issues)report.warnings.push(variant+': '+issue);
 return issues;
}
try{
 mkdirSync('qa-results',{recursive:true});
 let ready=false;
 for(let i=0;i<30;i++){try{const r=await fetch(origin);if(r.ok){ready=true;break}}catch{}await wait(500)}
 assert(ready,'Local HTTP server failed to start');
 browser=await chromium.launch({headless:true});
 const desktop=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
 desktop.on('pageerror',e=>report.pageErrors.push(String(e)));
 desktop.on('response',r=>{if(r.status()>=400)report.badResponses.push(r.status()+' '+r.url())});
 await desktop.goto(origin,{waitUntil:'domcontentloaded'});
 await desktop.waitForSelector('.phone-shell');
 await visit(desktop,'desktop presents all shopper journeys and trust destinations',async()=>{
  assert.equal(await desktop.locator('#persona-list [data-persona]').count(),4);
  assert.equal(await desktop.locator('#persona-list [data-trust-screen]').count(),2);
 });
 await visit(desktop,'click map toggles on and off',async()=>{
  await desktop.locator('#hotspot-toggle').click();
  assert(await desktop.locator('#device-canvas').evaluate(e=>e.classList.contains('hotspot-mode')));
  await desktop.locator('#hotspot-toggle').click();
 });
 const routes={college:'college-home',female:'female-home',chhath:'chhath-home',assam:'assam-home',mall:'mall-home',mtrusted:'mtrusted-home'};
 for(const [persona,home] of Object.entries(routes)){
   await visit(desktop,persona+' homepage, categories, PDP and reviews',async()=>{
    await goto(desktop,home,persona);
    assert(await desktop.locator('.phone-shell').count());
    await desktop.locator('.navbar [data-go="categories"]').first().click();
    assert(await desktop.locator('.phone-shell').count());
    await goto(desktop,'pdp-core');
    const c=desktop.locator('.phone-content');
    await c.evaluate(e=>e.scrollTop=e.scrollHeight);
    assert(await desktop.locator('.navbar .nav-item').first().isVisible(),'Bottom navigation missing after scroll');
    await goto(desktop,'product-details');
    assert(await desktop.locator('.details-grid').count());
    await goto(desktop,'seller-profile');
    assert(await desktop.locator('.phone-shell').count());
    await goto(desktop,'reviews');
    assert(await desktop.locator('.review-feed').count());
    await goto(desktop,'ugc-gallery');
    assert(await desktop.locator('.phone-shell').count());
    await goto(desktop,'cart');
    assert(await desktop.locator('.phone-shell').count());
    await goto(desktop,'checkout');
    assert(await desktop.locator('.phone-shell').count());
   });
 }
 for(const persona of ['college','female','chhath','assam']){
   await visit(desktop,persona+' category trust links and gifting access',async()=>{
     await goto(desktop,'categories',persona);
     assert(await desktop.locator('[data-go="mall-home"]').count()>0 || await desktop.locator('[data-go="mall-explainer"]').count()>0,'Mall route missing');
     assert(await desktop.locator('[data-go="mtrusted-home"]').count()>0 || await desktop.locator('[data-go="mtrusted-explainer"]').count()>0,'MTrusted route missing');
     const gift=persona==='female'?'female-gifts':'shop-for-her';
     await goto(desktop,gift);
     assert(await desktop.locator('.phone-shell').count());
   });
 }
 await visit(desktop,'guided discovery moves from need to task and product',async()=>{
  await goto(desktop,'college-home','college');
  const need=desktop.locator('[data-mission-domain="grooming"]').first();
  assert(await need.count()>0,'Need choice missing');
  await need.click();
  const task=desktop.locator('[data-mission-task]').first();
  assert(await task.count()>0,'Purpose choice missing');
  await task.click();
  assert(await desktop.locator('.phone-shell').count());
 });
 await visit(desktop,'Share & Save, bundles and purchase screens open',async()=>{
  await goto(desktop,'pdp-core','college');
  const group=desktop.locator('[data-action="create-group-inline"]').first();
  assert(await group.count(),'Share & Save missing');
  await group.click();
  assert(await desktop.locator('.inline-group-state.is-created').count(),'Group state missing');
  await goto(desktop,'pdp-core');
  const bundle=desktop.locator('[data-action="add-bundle-cart"]').first();
  assert(await bundle.count(),'Bundle action missing');
  await bundle.click();
  assert(await desktop.locator('.phone-shell').count());
  await goto(desktop,'order-placed');
  assert(await desktop.locator('.phone-shell').count());
 });
 await goto(desktop,'pdp-core','college');
 await screen(desktop,'desktop-pdp');
 await findLayoutIssues(desktop,'desktop PDP 1440×900');
 const breakpoints=[
  {width:1280,height:800,label:'desktop-1280'},
  {width:1024,height:768,label:'tablet-1024'},
  {width:768,height:1024,label:'tablet-768'},
  {width:390,height:844,label:'mobile-390'},
  {width:360,height:740,label:'mobile-360'},
  {width:320,height:640,label:'mobile-320'}
 ];
 for(const vp of breakpoints){
  await desktop.setViewportSize({width:vp.width,height:vp.height});
  await visit(desktop,vp.label+' viewport and fixed phone navigation',async()=>{
   await goto(desktop,'college-home','college');
   const rootWidth=await desktop.evaluate(()=>document.documentElement.scrollWidth);
   assert(rootWidth<=vp.width+2,'Horizontal page overflow '+rootWidth+' > '+vp.width);
   const phone=desktop.locator('.phone-shell');
   assert(await phone.isVisible(),'Phone missing');
   const rect=await phone.boundingBox();
   assert(rect.width<=vp.width+2,'Phone too wide');
   const nav=desktop.locator('.navbar');
   assert(await nav.count() && await nav.isVisible());
   const scroller=desktop.locator('.phone-content');
   const before=await nav.boundingBox();
   await scroller.evaluate(e=>e.scrollTop=Math.max(0,e.scrollHeight-e.clientHeight));
   const after=await nav.boundingBox();
   assert(Math.abs(before.y-after.y)<3,'Bottom navigation shifted on scroll');
  });
  await findLayoutIssues(desktop,vp.label);
  if(vp.label==='mobile-390')await screen(desktop,'mobile-390');
  if(vp.label==='mobile-320')await screen(desktop,'mobile-320');
 }

 // Render every registered route and collect its actual clickable targets and images.
 await desktop.setViewportSize({width:1440,height:900});
 const knownRoutes=await desktop.evaluate(()=>Object.keys(routes));
 const visitedTargets=new Set();
 const assetUrls=new Set();
 for(const route of knownRoutes){
   await visit(desktop,'route smoke '+route,async()=>{
     await goto(desktop,route,'college');
     assert.equal(await desktop.locator('.phone-shell').count(),1);
     const data=await desktop.evaluate(()=>{
       const targets=[...document.querySelectorAll('#device-canvas [data-go]')]
         .map(e=>e.getAttribute('data-go')).filter(Boolean);
       const images=[...document.querySelectorAll('#device-canvas img')]
         .map(e=>e.getAttribute('src')).filter(Boolean);
       return {targets,images,valid:Object.keys(routes)};
     });
     assert.deepEqual([...new Set(data.targets.filter(x=>!data.valid.includes(x)))],[],
       'Unregistered route in '+route);
     data.targets.forEach(x=>visitedTargets.add(x));
     data.images.forEach(x=>assetUrls.add(x));
   });
 }
 await visit(desktop,'assets referenced by every screen are available',async()=>{
   const urls=[...assetUrls].filter(x=>!x.startsWith('data:'));
   const failures=await desktop.evaluate(async srcs=>{
      const list=await Promise.all(srcs.map(async src=>{
        try {const resp=await fetch(src);return resp.ok?null:String(resp.status)+' '+src}
        catch(err){return String(err)+' '+src}
      }));
      return list.filter(Boolean);
   },urls);
   assert.deepEqual(failures,[],'Broken asset URL(s)');
 });
 // Exercise clickable route controls from the screen on which each appears.
 for(const originRoute of knownRoutes){
   const persona=originRoute.startsWith('female-')?'female':
     originRoute.includes('assam')?'assam':
     originRoute.includes('chhath')?'chhath':
     originRoute.startsWith('mall-')?'mall':
     originRoute.startsWith('mtrusted-')?'mtrusted':'college';
   await goto(desktop,originRoute,persona);
   const activeTargets=await desktop.locator('#device-canvas button[data-go]').evaluateAll(els=>
     [...new Set(els.filter(el=>el.getClientRects().length>0)
       .map(el=>el.getAttribute('data-go')).filter(Boolean))]
   );
   for(const target of activeTargets){
     await visit(desktop,'click '+originRoute+' → '+target,async()=>{
       await goto(desktop,originRoute,persona);
       const selector='#device-canvas button[data-go="'+target+'"]';
       const choice=desktop.locator(selector).first();
       if(!(await choice.count()))throw Error('Visible target not found');
       await choice.click({timeout:4000,force:true});
       assert(await desktop.locator('.phone-shell').count(),'Click produced an empty screen');
     });
   }
 }

 for(const route of visitedTargets){
    await visit(desktop,'all navigation targets: '+route,async()=>{
       await desktop.evaluate(target=>go(target),route);
       assert(await desktop.locator('.phone-shell').count(),'Destination not rendered');
    });
 }

 await desktop.setViewportSize({width:1440,height:900});
 await visit(desktop,'restart restores current selected journey',async()=>{
  await goto(desktop,'reviews','college');
  await desktop.locator('#restart-button').click();
  assert(await desktop.locator('.phone-shell').count());
  assert((await desktop.locator('.top-appbar').innerText()).toLowerCase().includes('meesho'));
 });
 report.badResponses=[...new Set(report.badResponses)];
 if(report.pageErrors.length)report.failed.push({name:'browser JavaScript errors',detail:report.pageErrors.slice(0,10).join(' | ')});
 if(report.badResponses.length)report.failed.push({name:'asset and request HTTP errors',detail:report.badResponses.slice(0,10).join(' | ')});
} catch(e){report.failed.push({name:'QA setup or runtime',detail:String(e.stack||e)})}
finally {
 writeFileSync('qa-results/report.json',JSON.stringify(report,null,2));
 console.log('BROWSER QA REPORT '+JSON.stringify({passed:report.passed.length,failed:report.failed.length,warnings:report.warnings.length,failures:report.failed.slice(0,16),sampleWarnings:report.warnings.slice(0,16)}));
 if(browser)await browser.close();
 server.kill();
}
if(report.failed.length)process.exitCode=1;
