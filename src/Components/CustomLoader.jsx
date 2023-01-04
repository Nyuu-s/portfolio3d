import React from 'react'
import {useProgress, Html} from '@react-three/drei'
import Lottie from "lottie-react";
import inf from '../assets/lotties/infinity.json'

function CustomLoader() {
    const { active, progress, errors, item, loaded, total } = useProgress()
 
  return (
 
   <Html className='w-screen h-screen  bg-black' center>

   
     <div className='text-slate-400 flex flex-col justify-center items-center h-full '> 
      <div className='w-1/4'>
        <Lottie animationData={inf} size={50}/>
      </div>
        Loading: {(progress - 1) > 0 ? (progress-0.1).toFixed(1) : 0} %   
     </div>
    </Html>
  )
}

export default CustomLoader