async function loadNews(){
 const list=document.getElementById('news-list'); if(!list)return;
 try{
  const r=await fetch('/content/news/index.json'); if(!r.ok)throw new Error('Nog geen nieuwsindex');
  const items=await r.json();
  const search=document.getElementById('news-search');
  const render=()=>{const q=(search?.value||'').toLowerCase();const filtered=items.filter(x=>(x.title+' '+(x.summary||'')+' '+(x.category||'')).toLowerCase().includes(q));
   list.innerHTML=filtered.length?filtered.map(x=>`<article class="news-card"><img src="${esc(x.image||'/assets/club-padel-crowd.jpeg')}" alt="${esc(x.image_alt||x.title)}"><div class="card-body"><p class="news-date">${esc(x.date||'')}</p><h3>${esc(x.title)}</h3><p>${esc(x.summary||'')}</p><a class="text-link" href="/nieuws/bericht.html?slug=${encodeURIComponent(x.slug)}">Lees meer →</a></div></article>`).join(''):'<p>Geen nieuws gevonden.</p>';
  };search?.addEventListener('input',render);render();
 }catch(e){list.innerHTML='<div class="notice"><strong>Er is nog geen nieuwsindex gepubliceerd.</strong><p>Na het instellen van het CMS verschijnen gepubliceerde berichten automatisch op deze pagina.</p></div>'}
 const params=new URLSearchParams(location.search);const slug=params.get('slug');if(slug){try{const items=await (await fetch('/content/news/index.json')).json();const item=items.find(x=>x.slug===slug);if(item){document.title=item.title+' | TPC Roelandsveld';const title=document.getElementById('article-title');if(title)title.textContent=item.title;const date=document.getElementById('article-date');if(date)date.textContent=item.date||'';const content=document.getElementById('article-content');if(content)content.innerHTML=`${item.image?`<img class="photo" src="${esc(item.image)}" alt="${esc(item.image_alt||item.title)}">`:''}<p>${esc(item.summary||'')}</p><div>${item.body_html||esc(item.body||'').replace(/\\n/g,'<br>')}</div>${item.button_url?`<p><a class="btn btn-primary" href="${esc(item.button_url)}">${esc(item.button_text||'Meer informatie')}</a></p>`:''}`}}catch(e){}}
}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
document.addEventListener('DOMContentLoaded',loadNews);