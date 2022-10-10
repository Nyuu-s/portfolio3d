import React , { useRef, useEffect } from 'react'
import * as THREE  from 'three'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRoom } from '../Context/ContextZustand'


function AnimationsControls(props) {
    // const room = useThree(({scene}) => (scene?.children[4]?.children[2]))
    gsap.registerPlugin(ScrollTrigger)
    const room = useRoom()
    

    useEffect(() => {
        // ScrollTrigger.scrollerProxy('.about')
        const tl = gsap.timeline()
        const el = props.containerRef.current
        tl.to(room.position, {x:5, 
            scrollTrigger: {
                trigger: el.querySelector('.separator'),
               
                scrub: true,
                start: "top center",
                scroller: el.querySelector('.page')
              
               


            }
        
        })
       
    }, [])

  return (
    <>
    
    
    </>
  )
}

export default AnimationsControls