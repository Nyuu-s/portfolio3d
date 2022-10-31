import React , { useRef, useState, useEffect, useLayoutEffect } from 'react'
import {About, Contact, CV, Main} from './'
import * as THREE  from 'three'
import { useThree } from '@react-three/fiber'
import {MdFlashlightOff, MdFlashlightOn} from 'react-icons/md'
import { useToggleTheme, useTheme } from '../Context/ContextZustand'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import ASScroll from '@ashthornton/asscroll'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProjectsGrid } from '../Components'

// const setupAsscroll = () => {
//   // https://github.com/ashthornton/asscroll
//   const asscroll = new ASScroll({
    
//     disableRaf: true });


//   gsap.ticker.add(asscroll.update);

//   ScrollTrigger.defaults({
//     scroller: asscroll.containerElement });


//   ScrollTrigger.scrollerProxy(asscroll.containerElement, {
//     scrollTop(value) {
//       return arguments.length ? asscroll.currentPos = value : asscroll.currentPos;
//     },
//     getBoundingClientRect() {
//       return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
    
//     });

  
//   asscroll.on("update", ScrollTrigger.update);
//   ScrollTrigger.addEventListener("refresh", asscroll.resize);
  

//   requestAnimationFrame(() => {
//     asscroll.enable({
//       newScrollElements: document.querySelectorAll(".gsap-marker-start, .gsap-marker-end, [asscroll]") });

//   });
//   return asscroll;
// }


function LandingPage() {
  gsap.registerPlugin(ScrollTrigger)
  const bSlide = useRef()

  const page = useRef()
  // const [tl, setTl] = useState();
  const toggleTheme = useToggleTheme()  
  const {mode} = useTheme()

  return (
  
    
      <div ref={page} className='z-10 w-full h-full overflow-y-auto scrollbar-hide  page' asscroll-container="true">
          
          <div className="toggle-bar fixed flex justify-center items-center top-12 right-12 z-50">
            <div className="sun"> 
              <MdFlashlightOn />
            </div>
            <button onClick={() => { 
                                      toggleTheme()
                                      }} className='group cursor-pointer relative w-[56px] h-7 flex justify-center items-center bg-pink-400 rounded-full mx-4 border-none shadow-lg'>
              <div ref={bSlide}   className={`circle ${mode === 'dark' ? 'slide' : ''} absolute  left-[6px] rounded-[50%] w-5 h-5 bg-secondary-dark-bg dark:bg-white group-hover:scale-90`}></div>
            </button>
            <div className="moon"> 
              <MdFlashlightOff />
            </div> 
          </div>

    
      <Routes>
          <Route path="/" element={<Main pageRef={page} />}/>
          <Route path="/test" element={<ProjectsGrid visible={false}/>}/>
      </Routes>


      </div>
    
    

  )
}

export default LandingPage