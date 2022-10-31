import { Plane } from '@react-three/drei'
import * as THREE from 'three'
import React , {useMemo, useRef, useState, useEffect} from 'react'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { Vector3 } from 'three'

const onMove = (e) =>{
    var rotationX = ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth
    var rotationY = ((e.clientY - window.innerHeight / 2) * 2) / window.innerHeight
    return {rotationX, rotationY}
  }

const onEnter = (e, position, func) => {
    
   gsap.to(e.object.position, {z: position.z + 0.5, onComplete: () => {func(true)}})
//    gsap.to(e.object.rotation, {y: 0 , })
}
const onLeave = (e, position, func) => {
    gsap.to(e.object.position, {z: position.z })
    gsap.to(e.object.rotation, {x: 0, y: position.rotationY , onComplete: () => {func(false)}})
 }

function ProjectsMesh() {

    const [hovered, setHovered] = useState(false)
    const [movable, setMovable] = useState(false)
   
    
    
    const projects = []
    const positions = []
    const t = useRef()
    let lerp = useMemo(() => ({
        currentX : 0,
        targetX: 0,
        currentY : 0,
        targetY: 0,
        ease: 0.1 
      }), [])

    var x = -5.5
    var y = 4.5
    var z = 10
    for (let i = 0; i < 12; i++) {
        
        x =  i % 4 === 0 ? -5.3 : x + 3.5
        y -= i % 4 === 0 ? 2.5 : 0
        var rotY = x === -5.3 ? -0.5 : x === -5.3+(3.5*3) ? 0.5 : 0 
        var transZ = (x === -5.3 || x === -5.3+(3.5*3)) ? z - 1  : z
        positions.push({x, y, z: transZ, rotationY: rotY})
        projects.push(
        <Plane key={i} args={[3,2]}  position={[x, y, transZ]} rotation={[0,rotY,0]}
        onPointerOver={(e) =>{
            e.object.material.color = {r: 0, g:1, b: 0, isColor: true}
            document.body.style.cursor = 'pointer'
            onEnter(e, positions[i], setMovable)
            
        }}
       
        onPointerMove={(e) => {
         if(movable)
         {   
            let u = new THREE.Vector3()
            u.subVectors(e.point, e.object.position)
            e.object.rotation.x = -u.y * 0.1
            e.object.rotation.y = positions[i].rotationY + (u.x * 0.1)
            
        }
           
        }}
        onPointerLeave={(e) =>{
            e.eventObject.material.color = {r: 75/255, g:153/255, b: 153/255, isColor: true}
            document.body.style.cursor = 'default'
            onLeave(e, positions[i], setMovable)
        }
            
            
        } >
            <meshBasicMaterial color={[75/255, 153/255, 153/255] }  />
        </Plane> 
        )
    }

  
    
 
  return (
    <>

        {projects}
    </>
  )
}

export default ProjectsMesh