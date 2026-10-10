const button=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',open);document.body.classList.toggle('menu-open',open)});
nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('open');button.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}});
const sections=[...document.querySelectorAll('main section[id]')];
addEventListener('scroll',()=>{let current='top';sections.forEach(s=>{if(scrollY>=s.offsetTop-130)current=s.id});document.querySelectorAll('.main-nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))},{passive:true});
