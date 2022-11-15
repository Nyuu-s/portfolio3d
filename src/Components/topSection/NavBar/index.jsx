import React from 'react'
import {NavButton, Logo} from '../..'
import {GiPlanetCore as HomeIcon}  from 'react-icons/gi'

function NavBar() {
  return (
    <div className='absolute top-0 left-0 h-10 z-20 mt-2  w-full text-white text-2xl flex'>
    <div className='ml-2 '>
       <Logo icon={<HomeIcon size={75}/>}/> 
    </div>
    <div className=' w-full flex'>
      
      <NavButton title={'Projects'}/> 
      <NavButton title={'Contact'}/>
      <NavButton title={'About me'}/>
    </div>
  </div>
  )
}

export default NavBar