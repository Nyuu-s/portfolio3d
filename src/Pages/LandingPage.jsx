import React , { useRef, useState, useEffect, useLayoutEffect } from 'react'
import {About, Contact, CV} from './'
import * as THREE  from 'three'
import { useThree } from '@react-three/fiber'
import {MdFlashlightOff, MdFlashlightOn} from 'react-icons/md'
import { useToggleTheme, useTheme } from '../Context/ContextZustand'


function LandingPage() {
  const bSlide = useRef()
  const toggleTheme = useToggleTheme()
  return (
    <div className='z-10 w-full h-full overflow-y-auto page'>
        
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
            <div className='relative w-full h-full '>
              <div className='h-[2000px] w-full separator '></div>
             <About />
             <Contact />
             <CV />
          </div>
           

            

      
        </div>


    </div>
  )
}

export default LandingPage