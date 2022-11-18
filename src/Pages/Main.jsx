import React, {useLayoutEffect, useEffect, useRef} from 'react'
import {CV, Contact, About} from '../Pages'
import ASScroll from '@ashthornton/asscroll'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import {useLocation} from 'wouter'
import { useState } from 'react'
import { useCallback } from 'react'


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

const t = () => {
  console.log('loaded');
}

function Main(props) {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
  
  const routeMap = {about: '.aboutSection', contact: '.ContactSection', cv: 'CVSection'} 
  const asscroll = useRef()
  const time = useRef();
  const main = useRef();
  const aboutRef = useRef()
  const contactRef = useRef()
  const cvRef = useRef()

  const contact = useCallback(
    (node) => {
      contactRef.current = node
    },
    [],
    )
  const cv = useCallback(
    (node) => {
      cvRef.current = node
    },
    [],
    )
  const about = useCallback(
    (node) => {
      aboutRef.current = node
    },
    [],
    )
  
  
  // const container = useRef()
  const [location, setLocation] = useLocation();
  const [test, settest] = useState()

 useEffect(() => {
  


  
 }, [])
 
  useLayoutEffect(() => {
    console.log(aboutRef.current, contactRef.current, cvRef.current);
    asscroll.current = setupAsscroll()

    let ctx = gsap.context(() => { 

        

          time.current = gsap.timeline({scrollTrigger: {
              // animation: timeL,
              // scroller: props.pageRef.current,
              trigger: '.container',
              start: "top top",
              end: () => "+=4000",
              scrub: true,
              pin: true,
              id: 'mainPageScrollTrigger',
              pinReparent: true,
              markers: true
              
            
            }
          })
          .from(aboutRef.current, {xPercent: -100}).to(aboutRef.current, {borderTopRightRadius: 0}, '<15%').from('.progressbarA',{ scaleY: 0}).addLabel('.aboutSection')
          .from(contactRef.current, {yPercent: -100}).to(contactRef.current, {borderBottomRightRadius: 0}, '<15%').from('.progressbarB',{scaleY: 0}).addLabel('.ContactSection')
          .from(cvRef.current, {yPercent: 100}).to(cvRef.current, {borderTopRightRadius: 0}, '<10%').from('.progressbarC',{scaleY: 0}).addLabel('.CVSection')
        
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
        // ScrollTrigger.killAll()
        // console.log(ScrollTrigger.getById('mainPageScrollTrigger'));
        // ScrollTrigger.getById('mainPageScrollTrigger').kill()
        // console.log(ScrollTrigger.getById('mainPageScrollTrigger'));
        // asscroll.current.off("update", ScrollTrigger.update);
        // ScrollTrigger.removeEventListener("refresh", asscroll.current.resize);
        // time.current.revert()
        ctx.revert();
       
        ScrollTrigger.getAll().forEach((instance) => {
          instance.kill();
        });
        gsap.killTweensOf(window);
        ctx.kill()
        
     
      } // cleanup
      
      
      
    }, [])


  // useLayoutEffect(() => {
  //   if(main.current){
  //     gsap.to(window, {scrollTo: time.current.scrollTrigger.labelToScroll(props.Section), duration: 2 })  
      
  //   }
  // }, [props.Section])

  return (
    <div>
      <div ref={main} className='relative pointer-events-none' asscroll="true">  
      
        <section className='w-screen h-screen '>
            <div className='relative h-full max-w-[972px] w-[calc(100%_-_120px)] mx-auto font-raleway sm:max-w-[1100px]'> 
                <div className='absolute left-0 top-[20%] text-4xl font-bold'> Welcome</div>
                <div className='absolute right-0 bottom-1/3 text-2xl font-semibold '></div>
            </div>
        </section>
        <div  className='relative w-full h-full section-container' > 
          <div className='h-[2000px] w-full separator '></div>
        
          <div  className='relative sm:w-1/2 w-full h-screen overflow-hidden container'>   
              
              <About sectionRef={about} />
        
              <Contact sectionRef={contact}/> 
              <CV sectionRef={cv} />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Main