import React from 'react'
import {Logo, NavButton} from '../../Components'
import {GiPlanetCore as HomeIcon}  from 'react-icons/gi'


const TopSection = ({onUserClick}) => {
  return ( 
    <div className='fixed top-0 left-0 h-10 z-10 mt-2  w-full text-white text-2xl flex'>
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

export default TopSection