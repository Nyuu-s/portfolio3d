import React from 'react'
import { NavBar, ProjectsGrid } from '../../Components'




const TopSection = ({onUserClick}) => {
  return (
    <div className='h-2' style={{height: 10}}>
      
        <NavBar />
        <ProjectsGrid visible={false} />
       
     
    </div>

  )
}

export default TopSection