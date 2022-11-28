import React, { useRef, useEffect } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { HeaderFlow } from '../Components'
import { useLayoutEffect } from 'react'
import { useCallback } from 'react'



 
function About({sectionRef}) {


  const section = useCallback(
    (node) => {
      sectionRef(node)
   
    },
    [],
  )
  

 
  return (
    
    
    <section ref={section}  className=' absolute rounded-tr-[500px]  h-full pt-5 px-[4%] w-full m-0 bg-secondary-dark-bg dark:text-slate-300 font-raleway pointer-events-auto aboutSection'> 
      <div className="progress-wrapper  w-4 z-10 absolute top-0 left-0">
        <div className="progressbarA rounded-full h-screen w-full bg-red-500 origin-[top_center] scale-y-100"></div>
      </div>

      <div className="mt-24">
        <HeaderFlow text1={"About Me"} text2={'About Me'} bgClassColor1={'#c7a4dd'} bgClassColor2={'#D4C4DE'} colorText1={"black"} colorText2={"black"} />
        
        <div >
            <h3>Lorem</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae necessitatibus rerum, minus consequatur et, commodi, facilis possimus omnis enim voluptate fugiat qui. Ipsum voluptatem magni fugit ipsa? Iste, laudantium ratione.</p>
            <h3>Lorem</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam similique animi vitae corrupti eum veniam libero, quae quaerat laborum recusandae temporibus voluptatem facere ex repellat deserunt id assumenda minima fugit!</p>
            <h3>lorem</h3>
            
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit praesentium placeat rerum molestiae hic quae doloremque aperiam sequi id, ab similique ipsa dolores, fuga nisi! Nesciunt quidem quae hic accusantium!</p>
        </div>
      </div>24
     
    </section>
   
    

  )
}

export default About