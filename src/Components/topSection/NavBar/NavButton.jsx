import React from 'react'
import {useLocation} from 'wouter'

function NavButton({title, clickFunc}) {
  const [location, setLocation] = useLocation()
  return (
    <div className='menuItem mx-2 w-1/3 pt-2 text-center'>
        <button className='rounded-full  font-raleway font-bold text-2xl'
        onClick={clickFunc}
        >
                {title}
        </button>
    </div>

  )
}

export default NavButton