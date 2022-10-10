import React , { useRef, useLayoutEffect } from 'react'
import About from './About'
import * as THREE  from 'three'
import { useThree } from '@react-three/fiber'


function LandingPage() {
  
 

  return (
    <div className='z-10 w-full h-full overflow-y-auto page'>
        
        <div className='relative '>
            <section className='w-screen h-screen '>
                <div className='relative h-full w-[calc(100%_-_120px)] mx-auto font-raleway max-w-[1100px]'>
                    <div className='absolute left-0 top-[20%] text-4xl font-bold'> Welcome</div>
                    <div className='absolute right-[5%] bottom-1/3 text-2xl font-semibold '>Edgar Jacquemoud</div>
                </div>
            </section>
            
             <About />
           

            

      
        </div>


    </div>
  )
}

export default LandingPage