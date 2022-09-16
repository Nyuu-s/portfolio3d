import React from 'react'
import gsap from 'gsap'

const test = (lvl) => {
    gsap.to(".main-icon", { scale: lvl, ease: 'back' })
}

function Logo({icon}) {
  return (
    <div onMouseOver={() => test(1.2)} onMouseLeave={()=>test(1)} className=' main-icon z-50 hover:cursor-pointer ' >
        {icon}
    </div>
  )
}

export default Logo