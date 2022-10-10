import React, { useRef, useEffect } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { HeaderFlow } from '../Components'




function About() {

  

  return (
    <div className='relative w-full h-full '>
        <div className='h-[2000px] w-full separator '></div>
        <section className='w-1/2 p-[1000px_4%] m-0 bg-secondary-dark-bg aboutSection'> 
    
            <HeaderFlow text1={"About Me"} text2={'About Me'} bgClassColor1={'#c7a4dd'} bgClassColor2={'#D4C4DE'} colorText1={"black"} colorText2={"black"} />
          
            
            <div >
               <h3>Lorem</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae necessitatibus rerum, minus consequatur et, commodi, facilis possimus omnis enim voluptate fugiat qui. Ipsum voluptatem magni fugit ipsa? Iste, laudantium ratione.</p>
               <h3>Lorem</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam similique animi vitae corrupti eum veniam libero, quae quaerat laborum recusandae temporibus voluptatem facere ex repellat deserunt id assumenda minima fugit!</p>
               <h3>lorem</h3>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit praesentium placeat rerum molestiae hic quae doloremque aperiam sequi id, ab similique ipsa dolores, fuga nisi! Nesciunt quidem quae hic accusantium!</p>
            </div>
        </section>

    </div>
  )
}

export default About