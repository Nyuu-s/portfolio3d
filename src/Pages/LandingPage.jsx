import React , { useRef, useState, useEffect, useLayoutEffect } from 'react'
import {About, Contact, CV} from './'
import * as THREE  from 'three'
import { useThree } from '@react-three/fiber'
import {MdFlashlightOff, MdFlashlightOn} from 'react-icons/md'
import { useToggleTheme, useTheme } from '../Context/ContextZustand'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


function LandingPage() {
  gsap.registerPlugin(ScrollTrigger)
  const bSlide = useRef()
  const container = useRef()
  const page = useRef()
  const [tl, setTl] = useState();
  const toggleTheme = useToggleTheme()  


 
  useEffect(() => {

    let ctx = gsap.context(() => { 
      
      const timeL = gsap.timeline().from('.aboutSection', {xPercent: 100}).from('.ContactSection', {xPercent: -100}).from(".CVSection", {yPercent: 100})
      setTl(timeL)
      ScrollTrigger.create({
        animation: timeL,
        scroller: page.current,
        trigger: container.current,
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1

      })
        
    }, page); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
    
   

  }, [])

  return (
    <div ref={page} className='z-10 w-full h-full overflow-y-auto scrollbar-hide  page'>
         
        <div className="toggle-bar fixed flex justify-center items-center top-12 right-12 z-50">
          <div className="sun"> 
            <MdFlashlightOn />
          </div>
          <button onClick={() => { bSlide.current.classList.toggle('slide')
                                    toggleTheme()
                                    }} className='group cursor-pointer relative w-[56px] h-7 flex justify-center items-center bg-pink-400 rounded-full mx-4 border-none shadow-lg'>
            <div ref={bSlide}   className={`circle absolute  left-[6px] rounded-[50%] w-5 h-5 bg-secondary-dark-bg dark:bg-white group-hover:scale-90`}></div>
          </button>
          <div className="moon"> 
            <MdFlashlightOff />
          </div> 
        </div>

  
  
        <div className='relative '>  
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


    </div>
  )
}

export default LandingPage