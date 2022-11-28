import React, {useLayoutEffect, useEffect, useRef} from 'react'
import {CV, Contact, About} from '../Pages'

import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import {useLocation} from 'wouter'
import { useState } from 'react'
import { useCallback } from 'react'
import { invalidate } from '@react-three/fiber'
import {animateScroll as scroll} from 'react-scroll'




function Main(props) {
  
  
  const routeMap = {about: '.aboutSection', contact: '.ContactSection', cv: 'CVSection'} 
  const time = useRef(gsap.timeline({paused: true}));
  const main = useRef();
  const container = useRef();
  const aboutRef = useRef()
  const contactRef = useRef()
  const cvRef = useRef()
  const asscroll = useRef(props.Asscroll)
  const [ST, setST] = useState()

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
  const [scrollT, setscrollT] = useState()

  useEffect(() => {

  }, [location])
  
useEffect(() => {
  time.current
  .from(aboutRef.current, {xPercent: -100}).to(aboutRef.current, {borderTopRightRadius: 0}, '<15%').from('.progressbarA',{ scaleY: 0}).addLabel('.aboutSection')
  .from(contactRef.current, {yPercent: -100}).to(contactRef.current, {borderBottomRightRadius: 0}, '<15%').from('.progressbarB',{scaleY: 0}).addLabel('.ContactSection')
  .from(cvRef.current, {yPercent: 100}).to(cvRef.current, {borderTopRightRadius: 0}, '<10%').from('.progressbarC',{scaleY: 0}).addLabel('.CVSection')
  
  let st = 
  ScrollTrigger.create({
    animation: time.current,
      scroller: '.page',
      trigger: container.current,
      start: () => "top top",
      end: () => "bottom+=400",
      scrub:true,
      pin: container.current,
      markers: true, 
    
      id: 'mainPageScroller',  
})
  
  setST(st)   
  return () => {
    st.kill()

    time.current.revert()
    
  }
      

  // asscroll.current?.update() 
  // ScrollTrigger.refresh(false)
  // asscroll.current?.enable({ newScrollEl ements: document.querySelectorAll(".gsap-marker-start, .gsap-marker-end, [asscroll]") })
}, [])

useEffect(() => {
  // ST?.revert()
  console.log('refreshing trigger :', ST, asscroll );
  // asscroll.current?.current?.update()



}, [ST])

 
  useLayoutEffect(() => { 
    // scroll.scrollToTop()
    
    let ctx = gsap.context(() => {
    //   time.current
    // .from(aboutRef.current, {xPercent: -100}).to(aboutRef.current, {borderTopRightRadius: 0}, '<15%').from('.progressbarA',{ scaleY: 0}).addLabel('.aboutSection')
    // .from(contactRef.current, {yPercent: -100}).to(contactRef.current, {borderBottomRightRadius: 0}, '<15%').from('.progressbarB',{scaleY: 0}).addLabel('.ContactSection')
    // .from(cvRef.current, {yPercent: 100}).to(cvRef.current, {borderTopRightRadius: 0}, '<10%').from('.progressbarC',{scaleY: 0}).addLabel('.CVSection')


  

        
        
        
      }, main.current.parentNode); // <- IMPORTANT! Scopes selector text
    

     
     
      return () => {
       
        // time.current.revert()
        // console.log(ScrollTrigger.getById('mainPageScrollTrigger'));
        // ScrollTrigger.getById('mainPageScrollTrigger').kill()
        // console.log(ScrollTrigger.getById('mainPageScrollTrigger'));
        // asscroll.current.off("update", ScrollTrigger.update);
        // ScrollTrigger.removeEventListener("refresh", asscroll.current.resize);
        // time.current.revert()
        // ScrollTrigger.getAll().forEach((instance) => {
        //   instance.kill();
        // });
      
        ctx.revert();
        

      
        
     
      } // cleanup
      
      
      
    }, [])



  

  useEffect(() => {
  
    // if(test){

    
      let sc = ScrollTrigger.getById('mainPageScroller')
      console.log(props.Section);
      gsap.to('.page', {scrollTo: sc.labelToScroll(props.Section), duration: 2 })  
      
    // }
  }, [props.Section])

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
        
          <div ref={container}  className='relative sm:w-1/2 w-full h-screen overflow-hidden container'>   
              
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