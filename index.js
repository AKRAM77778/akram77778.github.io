const cursor = document.getElementById('cursor');
const ring = document.getElementById('ring');
let mx=0,my=0,rx=0,ry=0;

document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  cursor.style.cssText=`left:${mx-5}px;top:${my-5}px`;
});

(function tick(){
  rx+=(mx-rx)*0.13;ry+=(my-ry)*0.13;
  ring.style.cssText=`left:${rx-18}px;top:${ry-18}px`;
  requestAnimationFrame(tick);
})();

document.querySelectorAll('a,button,.skill-tag,.project-card,.skill-group,.contact-item,.timeline-item').forEach(el=>{
  el.addEventListener('mouseenter',()=>{
    cursor.style.transform='scale(2.5)';
    ring.style.transform='scale(1.6)';
    ring.style.borderColor='var(--green)';
  });
  el.addEventListener('mouseleave',()=>{
    cursor.style.transform='scale(1)';
    ring.style.transform='scale(1)';
    ring.style.borderColor='rgba(0,229,255,0.5)';
  });
});

const pc=document.getElementById('particles');
['var(--cyan)','var(--green)','rgba(0,229,255,0.3)'].forEach(c=>{
  for(let i=0;i<8;i++){
    const p=document.createElement('div');
    p.className='particle';
    const s=Math.random()*3+1;
    p.style.cssText=`width:${s}px;height:${s}px;background:${c};left:${Math.random()*100}vw;animation-duration:${10+Math.random()*15}s;animation-delay:${Math.random()*10}s;`;
    pc.appendChild(p);
  }
});

const obs=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting) setTimeout(()=>e.target.classList.add('visible'),i*80);
  });
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){
        e.preventDefault();
        t.scrollIntoView({behavior:'smooth'});
    }
  });
});

window.addEventListener('scroll',()=>{
  const sy=window.scrollY;
  const bg=document.querySelector('.hero-bg-name');
  if(bg) bg.style.transform=`translateY(${sy*0.25}px)`;
});
