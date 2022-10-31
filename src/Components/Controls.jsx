import React, { useMemo,useEffect, useState} from 'react'
import { CatmullRomLine, Line } from '@react-three/drei';
import * as THREE from 'three'
import { CatmullRomCurve3 } from 'three';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry';
import { Camera } from '../Components/'
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useAddCameras, useCameras } from '../Context/ContextZustand';




    

    
    // Create the final object to add to the scene
    // const curveObject = new THREE.Line( geometry, material );


var lerp = {
    current : 0,
    target: 0,
    ease: 0.1
}

window.addEventListener("wheel", (e => {
    if(e.deltaY > 0 ){
        lerp.target += 0.01
    }else {
        lerp.target -= 0.01
    }

}))

function Children({children, customProps}){
  return <>
    { React.cloneElement(children, {position: customProps.position, lookAt: customProps.lookAt})}
  </> 
}



function Controls(props) {
    
    const curve = useMemo(()=> new THREE.CatmullRomCurve3( [
        new THREE.Vector3( -10, 0, 10 ),
        new THREE.Vector3( -5, 5, 5 ),
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 5, -5, 5 ),
        new THREE.Vector3( 10, 0, 10 ) 
    ], true ), []) 
    const points = curve.getPoints( 80 );
    const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints( points ),[points])  
    const material = useMemo(() => new THREE.LineBasicMaterial( { color: 0xff0000 } ),[ ]) 
    const ORIGIN = useMemo(() => new THREE.Vector3( 0,0,0 ),[ ]) 
    const [progress, setProgress] = useState(0)
    const [vec, setVec] = useState(ORIGIN)


    useFrame(() => {
        lerp.current = progress
        setVec(curve.getPointAt(progress))
        // curCam.current.position = vec
        // props.getCamPos(vec)
        // props.getLookAt(new THREE.Vector3())
        lerp.target += 0.0001
        lerp.target = gsap.utils.clamp(0,1,lerp.target)
        lerp.current = gsap.utils.clamp(0,1,lerp.current)
        var value = gsap.utils.interpolate(lerp.current, lerp.target, lerp.ease)  % 1
        setProgress(value)
    })
    

    
    return (
    <>   
        
        
        <line geometry={geometry}>
            <lineBasicMaterial args={[material]}/>
        </line>
        <Children children={props.children} customProps={{position: vec, lookAt: ORIGIN}} />
    </>  
  ) 
} 

export default Controls