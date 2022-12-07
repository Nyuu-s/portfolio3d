import React from 'react'
import {useProgress, Html} from '@react-three/drei'

function CustomLoader() {
    const { active, progress, errors, item, loaded, total } = useProgress()
 
  return (
 
   <Html className='w-screen h-screen  bg-black top-1/2 z-50' center> <div className='text-red-100 text-center'> Loading: {(progress - 1) > 0 ? (progress-0.1).toFixed(1) : 0} %   </div></Html>
  )
}

export default CustomLoader