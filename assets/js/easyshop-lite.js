document.addEventListener('DOMContentLoaded',function(){
  const navbars=document.querySelectorAll('.navbar');
  navbars.forEach(nb=>{
    const burger=nb.querySelector('.burger');
    const menu=nb.querySelector('nav');
    if(burger && menu){ burger.addEventListener('click',()=>menu.classList.toggle('open')); }
    const isMobile=()=>matchMedia('(max-width:900px)').matches;
    nb.querySelectorAll('li.has-dropdown > a').forEach(a=>{
      a.addEventListener('click',e=>{
        if(isMobile()){ e.preventDefault(); a.closest('li').classList.toggle('open'); }
      });
    });
  });
});
