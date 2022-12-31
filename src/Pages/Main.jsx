import React, { useEffect, useRef, useState} from 'react'
import {CV, Contact, About} from '../Pages'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'



function Main(props) {
  let scroll = {
    about: false,
    cv: false,
    contact: false
  }
  
  const {t } = useTranslation()
  const time = useRef(gsap.timeline({paused: true}));
  const [Scrollable, setScrollable] = useState(scroll)
  const main = useRef();
  const container = useRef();
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




  
useEffect(() => {

  //Animation for all 3 Section + Prevent intern Scrolling until Section animation is done.
  time.current
    .from(aboutRef.current, {xPercent: -100}).to(aboutRef.current, {borderTopRightRadius: 0, onUpdate: () => {
    let progress =  time.current.progress()
    progress > 0.16 ? setScrollable(S => ({...S, about: true})) : setScrollable(S => ({...S, about: false}))
    }}, '<15%').from('.progressbarA',{ scaleY: 0}).addLabel('.aboutSection')

  .from(cvRef.current, {yPercent: 100}).to(cvRef.current, {borderTopRightRadius: 0, onUpdate: () => {
    let progress =  time.current.progress()

    progress > 0.48 ? setScrollable(S => ({...S, cv: true})) : setScrollable(S => ({...S, cv: false}))
    }}, '<10%').from('.progressbarC',{scaleY: 0}).addLabel('.CVSection')

  .from(contactRef.current, {yPercent: -100}).to(contactRef.current, {borderBottomRightRadius: 0, onUpdate: () => {
    let progress =  time.current.progress()
    progress > 0.82 ? setScrollable(S => ({...S, contact: true})) : setScrollable(S => ({...S, contact: false}))
    }}, '<15%').from('.progressbarB',{scaleY: 0}).addLabel('.ContactSection')
  
  let st = 
  ScrollTrigger.create({
    animation: time.current,
      scroller: '.page',
      trigger: container.current,
      start: () => "top top",
      end: () => "bottom+=4000",
      scrub:0.01,
      pin: container.current,
      id: 'mainPageScroller',  
})
  

  return () => {
    st.kill()

  
    
  }

}, [])


  useEffect(() => {
      if(props.Section !== 'undefined'){

        let sc = ScrollTrigger.getById('mainPageScroller')
      
        gsap.to('.page', {scrollTo: sc.labelToScroll(props.Section), duration: 2 })  
      }
  }, [props.Section])

  return ( 
 

      <div ref={main} className='relative pointer-events-none' >  
      
        <section className='w-screen h-screen '>
            <div className='relative h-full max-w-[972px] w-[calc(100%_-_120px)] mx-auto font-raleway sm:max-w-[1100px]'> 
                <div className='absolute left-0 top-[20%] text-4xl font-bold dark:text-[#87B1C6]'> {t('Welcome')} </div>
                <div className='absolute right-0 bottom-1/3 text-2xl font-semibold '></div>
            </div>
        </section>
        <div  className='relative w-full h-full section-container' > 
          <div className='h-[2000px] w-full separator '></div>
        
          <div ref={container}  className='relative sm:w-1/2 w-full h-screen overflow-hidden container'>   
              
              <About sectionRef={about} isScrollable={Scrollable} />
        
              <CV sectionRef={cv} isScrollable={Scrollable} />
              <Contact sectionRef={contact} isScrollable={Scrollable}/> 
          </div>
          
        </div>
      </div>
   
    
  )
}

export default Main