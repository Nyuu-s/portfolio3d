import React, { useRef, useEffect } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { HeaderFlow } from '../Components'




function CV({timeline}) {

const section = useRef()
useEffect(() => {
    timeline && timeline.from(section.current, {yPercent: 100})


}, [timeline])

  return (

      <section  ref={section} id='cv' className='absolute rounded-tr-[450px] w-full h-full pt-5 px-[4%] m-0 bg-blue-600 dark:text-slate-300 font-raleway CVSection'> 
          <div className="progress-wrapper  w-4 z-10 absolute top-0 left-0">
            <div className="progressbarC h-screen w-full bg-red-500 origin-[top_center] scale-y-100"></div>
          </div>
          <div className='mt-24'>

          <HeaderFlow text1={"CV"} text2={'CV'} bgClassColor1={'#c7a4dd'} bgClassColor2={'#D4C4DE'} colorText1={"black"} colorText2={"black"} flowDirection='left'/>
        
          
          <div >
              <h3>Lorem</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae necessitatibus rerum, minus consequatur et, commodi, facilis possimus omnis enim voluptate fugiat qui. Ipsum voluptatem magni fugit ipsa? Iste, laudantium ratione.</p>
              <h3>Lorem</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam similique animi vitae corrupti eum veniam libero, quae quaerat laborum recusandae temporibus voluptatem facere ex repellat deserunt id assumenda minima fugit!</p>
              <h3>lorem</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit praesentium placeat rerum molestiae hic quae doloremque aperiam sequi id, ab similique ipsa dolores, fuga nisi! Nesciunt quidem quae hic accusantium!</p>
          </div>
          </div>
      </section>

  )
}

export default CV