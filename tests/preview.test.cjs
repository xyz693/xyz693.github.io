const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const root=path.join(__dirname,'..'),elements={},handlers={},timers=new Map();let timerID=0;
class Element {
 constructor(){this.style={};this.attributes={};this.parentElement={clientWidth:338,clientHeight:220};}
 setAttribute(k,v){this.attributes[k]=v}
 removeAttribute(k){delete this.attributes[k];delete this[k]}
 cloneNode(){const e=new Element();e.parentElement=this.parentElement;return e}
 replaceWith(e){elements.pagePreview=e}
}
for(const id of ['pagePreview','previewStatus','previewPause','previewRetry','previewSize'])elements[id]=new Element();
elements.previewSize.value='desktop';
const document={hidden:false,getElementById:id=>elements[id],addEventListener:(n,f)=>handlers[n]=f};
const ctx=vm.createContext({document,addEventListener:(n,f)=>handlers[n]=f,setTimeout:f=>{timers.set(++timerID,f);return timerID},clearTimeout:id=>timers.delete(id)});
vm.runInContext(fs.readFileSync(path.join(root,'preview-controller.js'),'utf8')+';globalThis.testPreview=preview',ctx);
const p=ctx.testPreview;
p.show({title:'Beach',file:'TideClock.html'});
assert.equal(elements.pagePreview.src,'TideClock.html');
assert.equal(elements.pagePreview.style.width,'1100px');
const stale=elements.pagePreview.onload;
p.show({title:'WebTrek',file:'Webtrek.html'});stale();
assert.equal(elements.previewStatus.textContent,'Loading WebTrek…');
elements.pagePreview.onload();assert.equal(timers.size,0);
elements.previewSize.value='phone';elements.previewSize.onchange();
assert.equal(elements.pagePreview.style.width,'390px');assert.equal(elements.pagePreview.style.height,'740px');
elements.previewPause.onclick();assert.equal(elements.pagePreview.src,undefined);
assert.equal(elements.previewPause.attributes['aria-pressed'],'true');
elements.previewRetry.onclick();assert.equal(elements.pagePreview.src,'Webtrek.html');
p.cover(true);assert.equal(elements.pagePreview.src,undefined);
p.cover(false);assert.equal(elements.pagePreview.src,'Webtrek.html');
document.hidden=true;handlers.visibilitychange();assert.equal(elements.pagePreview.src,undefined);
document.hidden=false;handlers.visibilitychange();assert.equal(elements.pagePreview.src,'Webtrek.html');
p.clear();assert.equal(elements.pagePreview.src,undefined);assert.equal(timers.size,0);
const tide=fs.readFileSync(path.join(root,'TideClock.html'),'utf8');
const storageCode=tide.slice(tide.indexOf('const sessionPreferences'),tide.indexOf('const widgetStates'));
const denied=vm.createContext({});
Object.defineProperty(denied,'localStorage',{get(){throw Error('SecurityError')}});
vm.runInContext(storageCode+ ';preferences.setItem("x","session");globalThis.value=preferences.getItem("x");globalThis.invalid=savedWidgetPosition("x");',denied);
assert.equal(denied.value,'session');assert.equal(denied.invalid,null);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes('sandbox="allow-scripts"'));assert(!html.includes('allow-same-origin'));
assert(html.includes('id="worldRail"'));
assert(html.includes("addEventListener('popstate',()=>applyRoute(false))"));
assert(html.includes("route('#project/'+p.id)"));
assert(html.includes("if(hash==='#index')"));
assert(html.includes('aria-current'));
assert(/@media\(max-width:680px\)[\s\S]*?\.label\{display:none!important\}/.test(html));
for(const m of html.matchAll(/file:'([^']+)'/g))assert(/^https:\/\//.test(m[1]) || fs.existsSync(path.join(root,m[1])),m[1]);
for(const m of html.matchAll(/<script src="([^"]+)"/g))assert(/^https:\/\//.test(m[1]) || fs.existsSync(path.join(root,m[1])),m[1]);
console.log('PASS: preview lifecycle, stale events, dimensions, pause/reload, visibility, cleanup, denied storage, sandbox, launch links, history routing and mobile world rail');
