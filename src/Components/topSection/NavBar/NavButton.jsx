import React from 'react'

function NavButton({title}) {
  return (
    <div className='w-1/3 : text-center'>
        <button className='rounded-full'>
                {title}
        </button>
    </div>

  )
}

export default NavButton