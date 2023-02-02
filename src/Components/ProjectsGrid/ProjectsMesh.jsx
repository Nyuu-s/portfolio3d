import { Html, Plane } from '@react-three/drei'
import * as THREE from 'three'
import React , { useRef, useState, useEffect} from 'react'
import gsap from 'gsap'
import {useLocation} from 'wouter'
import useStore from '../../Context/ContextZustand'
import {Trans} from 'react-i18next'





const onEnter = (e, position) => {
    
    
    // e.object.translateOnAxis(new THREE.Vector3(normals[0],normals[1],normals[2]),0.5)
    gsap.to(e.object.position, {x:position.x,  z: position.z + 0.5})
//    gsap.to(e.object.rotation, {y: 0 , })
}
const onLeave = (e, position, func) => {
    gsap.to(e.object.position, {z: position.z })
    gsap.to(e.object.rotation, {x: 0, y: position.rotationY })
 }

 const setup = (Projects, helpers) => {
    if(!Projects) return []
    let proj = []
    const positions = []
    var x = 0
    var y = 4.5 + helpers.defaultPosition.y
    var z = 10 + helpers.defaultPosition.z
    for (let i = 0; i < Projects.length; i++) {
        
        x =  i % 4 === 0 ? helpers.defaultPosition.x : x +3.5
        y -= i % 4 === 0 ? 2.5 : 0
        var rotY = x === helpers.defaultPosition.x ? -0.5 : x === helpers.defaultPosition.x+(3.5*3) ? 0.5 : 0 
        var transZ = (x === helpers.defaultPosition.x || x === helpers.defaultPosition.x+(3.5*3)) ? z - 1  : z
        positions.push({x, y, z: transZ, rotationY: rotY})


        proj.push(
        <Plane  key={i} args={[3,2]}  position={[x, y, transZ]} rotation={[0,rotY,0]}
        onPointerOver={(e) =>{
            e.object.material.color = {r: 0, g:0.2, b: 0, isColor: true}
            document.body.style.cursor = 'pointer'
            onEnter(e, positions[i]) 
            helpers.setMovable(true)
            
        }}
       
        onPointerMove={(e) => {
         if(helpers.movable)
         {   
            let u = new THREE.Vector3()
            u.subVectors(e.point, e.object.position)
            e.object.rotation.x = -u.y * 0.1
            e.object.rotation.y = positions[i].rotationY + (u.x * 0.1)
            
        } 
           
        }}
        onPointerLeave={(e) =>{
            e.eventObject.material.color = {r: 15/255, g:15/255, b: 15/255, isColor: true}
            document.body.style.cursor = 'default'
            onLeave(e, positions[i])
            helpers.setMovable(false)
        }} 
        onClick={() => {
            
            helpers.setLocation('/projects/'+ Projects[i].props.id)
           
        }}
        
        >
            <meshBasicMaterial side={THREE.DoubleSide} color={[15/255, 15/255, 15/255] }  />
            {/* Use Html from drei or make custom texture for each project and use it on plane */}
            

            <Html occlude transform position={[0,0,0.1]} scale={0.8} pointerEvents='false'>
                <div className='text-lg font-raleway w-30 h-30 text-[#bbb]'>{Projects[i].props.menuTitle}</div>
                {helpers.CategoryMap[Projects[i].props.category][Projects[i].props.subCategory]}
            </Html>
            
        </Plane> 
        )
    }
    return proj
 }

function ProjectsMesh(props) {

    const [movable, setMovable] = useState(false)
    const [, setLocation] = useLocation()
    const playAnim = useStore((state) => state.ProjectsAnim)
    const setplayAnim = useStore((state) => state.setProjectsAnim)
    const defaultPosition = props.position
    const CategoryMap = props.CatMap
 
    const projectsGroup = useRef()

    const projects = setup(props.projectsArr, {setMovable, movable, setLocation, defaultPosition, CategoryMap})



    
    
    
    useEffect(() => {
    let ctx = gsap.context(() => {
        
            let tl = gsap.timeline({delay: 2})
            if(playAnim){

                tl.pause()
                gsap.utils.toArray(projectsGroup.current.children).forEach(((element, i) => {
                    tl.from(element.scale, {x:0, y:0, z:0, duration: 1.5, onComplete: () => {setplayAnim(false)}}, '<0.3')
                }))
                tl.play()
            }
        
  
        })
        
        return () => {
            ctx.revert()
        }
      }, [])
     
  return (
    <>

        <group ref={projectsGroup}>
            {projects}
        </group>

     
    </>
  )
}

export default ProjectsMesh