import React from 'react'


function NavButton( {title, clickFunc }) {
  return (
    <div className='menuItem  mx-2 w-full pt-2 sm:text-center dark:text-[#fff] text-[#522263]'>
        <button className='rounded-full  font-raleway font-bold text-2xl'
        onClick={clickFunc}
        >
                {title}
        </button>
    </div>

  )
}

export default NavButton 