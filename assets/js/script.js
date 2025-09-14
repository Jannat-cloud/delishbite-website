
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle && toggle.addEventListener('click', ()=>{
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.flexDirection = 'column';
  });
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){ e.preventDefault(); document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries)=>{ entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); obs.unobserve(entry.target); } }); }, {threshold:0.12});
  reveals.forEach(el => obs.observe(el));
  const heroVis = document.querySelector('.hero-visual');
  if(heroVis){
    heroVis.addEventListener('mousemove', (e)=>{ const rect = heroVis.getBoundingClientRect(); const x = (e.clientX - rect.left - rect.width/2) / 20; const y = (e.clientY - rect.top - rect.height/2) / 30; heroVis.style.transform = `translate(${x}px, ${y}px) scale(1.02)`; });
    heroVis.addEventListener('mouseleave', ()=>{ heroVis.style.transform = 'translate(0,0) scale(1)'; });
  }
});
