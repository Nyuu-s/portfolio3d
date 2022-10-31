import React from 'react'
import {Project} from '../../Components'
const str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit, felis nec viverra luctus, justo orci volutpat est, sed porttitor lectus lectus at 
felis. Donec tempus tellus id tortor placerat varius. Aliquam dignissim mi ac mollis dignissim. Cras in accumsan lectus, sed ultricies ligula.
 Cras scelerisque hendrerit porta. Nullam malesuada est et feugiat pretium. Pellentesque accumsan, tellus at rutrum hendrerit, purus felis mattis leo,
  a gravida erat orci ut nisi. Nullam vitae tempus sem. In venenatis bibendum ex vel molestie. Fusce placerat arcu eget felis tincidunt facilisis.
   In accumsan lectus at nulla lobortis maximus sit amet id quam.`
function ProjectsGrid({visible}) {
  return (
  <div className={`fixed h-full w-full top-24 overflow-y-auto overflow-ellipsis z-10 bg-white bg-opacity-5 ${visible ? 'block': 'hidden'}`} >
      {/* make a grid like this https://vr.with.in/ with from project files */}
      {/* <Project title={'Jeu Video'} shortDesc={str} link={""}>
          <div>
            <p>
              {str}
              <img src="https://greensock.com/uploads/set_resources_5/84c1e40ea0e759e3f1505eb1788ddf3c_greensock-logo.svg" alt="" />
         
            </p>
          </div>
      </Project> */}
      
      
      
    </div>  
  )
}

export default ProjectsGrid