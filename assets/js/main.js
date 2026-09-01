document.addEventListener('DOMContentLoaded',function(){
    const slides=[...document.querySelectorAll('.hero__slide')];
    const prev=document.querySelector('.hero__arrow--prev');
    const next=document.querySelector('.hero__arrow--next');
    const dotsWrap=document.querySelector('.hero__dots');
    let current=0;
    let timer=null;

    slides.forEach((slide,index)=>{
        const dot=document.createElement('button');
        dot.type='button';
        dot.className='hero__dot'+(index===0?' active':'');
        dot.setAttribute('aria-label',(index+1)+'. slide');
        dot.addEventListener('click',()=>{show(index);restart();});
        dotsWrap.appendChild(dot);
    });

    const dots=[...document.querySelectorAll('.hero__dot')];

    function show(index){
        current=(index+slides.length)%slides.length;
        slides.forEach((slide,i)=>slide.classList.toggle('active',i===current));
        dots.forEach((dot,i)=>dot.classList.toggle('active',i===current));
    }

    function restart(){clearInterval(timer);timer=setInterval(()=>show(current+1),6000);}
    prev.addEventListener('click',()=>{show(current-1);restart();});
    next.addEventListener('click',()=>{show(current+1);restart();});
    document.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){show(current-1);restart();}if(e.key==='ArrowRight'){show(current+1);restart();}});
    restart();
});