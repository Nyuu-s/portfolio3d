import React , { useRef, useEffect } from 'react'
import * as THREE  from 'three'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRoom } from '../Context/ContextZustand'
import { MdTimer10 } from 'react-icons/md'


function AnimationsControls(props) {
    // const room = useThree(({scene}) => (scene?.children[4]?.children[2]))
    gsap.registerPlugin(ScrollTrigger)
    const room = useRoom()
    console.log('room', room);

    useEffect(() => {
        // ScrollTrigger.scrollerProxy('.about')
        
        const tl = gsap.timeline()
        const el = props.containerRef.current
        tl.to(room.position, {x: 5, duration:10})
        // tl.to(room.position, {x: () =>{ return window.innerWidth * 0.0012}, ease: 1,
        //     scrollTrigger: {
        //         trigger: el.querySelector('.separator'),
        //         scrub: 0.5,
        //         start: "top top",
        //         end: "bottom bottom",
        //         scroller: el.querySelector('.page'),
        //         invalidateOnRefresh: true,
              
               


        //     }
        
        // })
       
    })

  return (
    <>
    
    
    </>
  )
}

export default AnimationsControls