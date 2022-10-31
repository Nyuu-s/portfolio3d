import React, {useLayoutEffect, useRef} from 'react'
import {CV, Contact, About} from '../Pages'
import ASScroll from '@ashthornton/asscroll'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'



const setupAsscroll = () => {
  // https://github.com/ashthornton/asscroll
  const asscroll = new ASScroll({
    
    disableRaf: true });


  gsap.ticker.add(asscroll.update);

  ScrollTrigger.defaults({
    scroller: asscroll.containerElement });


  ScrollTrigger.scrollerProxy(asscroll.containerElement, {
    scrollTop(value) {
      return arguments.length ? asscroll.currentPos = value : asscroll.currentPos;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    
    });

  
  asscroll.on("update", ScrollTrigger.update);
  ScrollTrigger.addEventListener("refresh", asscroll.resize);
  

  requestAnimationFrame(() => {
    asscroll.enable({
      newScrollElements: document.querySelectorAll(".gsap-marker-start, .gsap-marker-end, [asscroll]") });

  });
  return asscroll;
}
function Main(props) {
  const asscroll = useRef()
  const time = useRef();
  const main = useRef();
  const container = useRef()

  console.log(props.pageRef);
  useLayoutEffect(() => {
   console.log(main);
    let ctx = gsap.context(() => { 
      asscroll.current = setupAsscroll()

        time.current = gsap.timeline({scrollTrigger: {
            // animation: timeL,
            scroller: main.current.parentNode,
            trigger: '.container',
            start: "top top",
            end: "+=4000",
            scrub: true,
            pin: true,
          
          }
        })
        .from('.aboutSection', {xPercent: -100}).from('.progressbarA',{ scaleY: 0})
        .from('.ContactSection', {yPercent: -100}).to('.aboutSection', {opacity: 0}, "<25%").from('.progressbarB',{scaleY: 0})
        .from(".CVSection", {yPercent: 100}).to('.ContactSection', {opacity: 0}, "<25%").from('.progressbarC',{scaleY: 0})
        // setTl(timeL)
        // ScrollTrigger.create({
        //   animation: timeL,
        //   scroller: page.current,
        //   trigger: container.current,
        //   start: "top top",
        //   end: "+=4000",
        //   scrub: 0.4,
        //   pin: true,
        //   // pinSpacing: false,
        //   // anticipatePin: 1,
        //   // invalidateOnRefresh: true
        
        // })
        
        
        
      },  main.current.parentNode); // <- IMPORTANT! Scopes selector text
      
      return () => {
        ctx.revert();
      
      } // cleanup
      
      
      
    }, [])
    
  

  return (
    
  <div ref={main} className='relative pointer-events-none' asscroll="true">  
    <section className='w-screen h-screen '>
        <div className='relative h-full max-w-[972px] w-[calc(100%_-_120px)] mx-auto font-raleway sm:max-w-[1100px]'> 
            <div className='absolute left-0 top-[20%] text-4xl font-bold'> Welcome</div>
            <div className='absolute right-0 bottom-1/3 text-2xl font-semibold '></div>
        </div>
    </section>
    <div  className='relative w-full h-full section-container' > 
      <div className='h-[2000px] w-full separator '></div>
    
      <div ref={container} className='relative sm:w-1/2 w-full h-screen overflow-hidden container'>   
          <About timeline={null} />
          <Contact timeline={null}/> 
          <CV timeline={null} />
      </div>
      
    </div>
  </div>
  )
}

export default Main