
function ph(t,w=800,h=800){const s=`<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><rect width='100%' height='100%' fill='#e6e6e6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='28' fill='#666'>${t}</text></svg>`;return 'data:image/svg+xml;utf8,'+encodeURIComponent(s);}
const steps=[
  {slug:'sneakers/step-1.html',title:'Крок 1',desc:'Розробка лекал',img:ph('Step 1 — 1:1'),resources:{tools:['Лінійки','#'],patterns:['База 42','#'],materials:['Картон','#']}},
  {slug:'sneakers/step-2.html',title:'Крок 2',desc:'Розкрій',img:ph('Step 2 — 1:1'),resources:{tools:['Ніж','#'],patterns:['Деталі','#'],materials:['Шкіра','#']}},
  {slug:'sneakers/step-3.html',title:'Крок 3',desc:'Зшивання',img:ph('Step 3 — 1:1'),resources:{tools:['Машина','#'],patterns:['Підкладка','#'],materials:['Нитки','#']}},
  {slug:'sneakers/step-4.html',title:'Крок 4',desc:'Затяжка',img:ph('Step 4 — 1:1'),resources:{tools:['Кліщі','#'],patterns:['Устілка','#'],materials:['Задник','#']}},
  {slug:'sneakers/step-5.html',title:'Крок 5',desc:'Підошва',img:ph('Step 5 — 1:1'),resources:{tools:['Прес','#'],patterns:['Устілка','#'],materials:['Клей','#']}},
  {slug:'sneakers/step-6.html',title:'Крок 6',desc:'Фініш',img:ph('Step 6 — 1:1'),resources:{tools:['Ніж','#'],patterns:['—','#'],materials:['Фарбник','#']}}
];
const grid=document.getElementById('stepsGrid');
if(grid){steps.forEach((s,i)=>{const a=document.createElement('a');a.className='card';a.href=s.slug;a.dataset.index=i;a.innerHTML=`<span class="thumb"><img src="${s.img}" alt="${s.title}"></span><div class="ct"><h3>${s.title}</h3><p>${s.desc}</p></div>`;grid.appendChild(a);});}
function renderLinks(el,arr){if(!el)return;el.innerHTML='';(arr||[]).slice(0,5).forEach((t,i)=>{if(i%2===0&&arr[i+1]!==undefined){const a=document.createElement('a');a.href=arr[i+1]||'#';a.textContent=t;el.appendChild(a);}});}
function updateSidebar(idx){const r=steps[idx]?.resources;if(!r)return;renderLinks(document.getElementById('sideTools'),r.tools);renderLinks(document.getElementById('sidePatterns'),r.patterns);renderLinks(document.getElementById('sideMaterials'),r.materials);}
if(grid){updateSidebar(0);grid.addEventListener('mouseover',e=>{const c=e.target.closest('.card');if(!c)return;updateSidebar(Number(c.dataset.index));});}
