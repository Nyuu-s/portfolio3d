import React from 'react'
import gsap from 'gsap'

const rescale = (lvl) => {
    gsap.to(".main-icon", { scale: lvl, ease: 'back' })
}

function Logo({icon, clickFunc}) {
  return (
    <div onMouseOver={() => rescale(1.2)} onMouseLeave={()=>rescale(1)} className=' main-icon z-50 hover:cursor-pointer ' onClick={clickFunc} >
        {icon}
    </div>
  )
}
 
export default Logo