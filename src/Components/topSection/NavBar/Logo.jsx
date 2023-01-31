import React from 'react'
import gsap from 'gsap'

const rescale = (lvl) => {
    gsap.to(".main-icon", { scale: lvl, ease: 'back' })
}

function Logo({icon, clickFunc}) {
  return (
    <div  className='text-[#522263] main-icon z-50 hover:cursor-pointer ' onClick={clickFunc} >
        {icon}
    </div>
  )
}
// onMouseOver={() => rescale(1.2)} onMouseLeave={()=>rescale(1)}
export default Logo