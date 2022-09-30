import React, { useMemo,useEffect, useState} from 'react'
import { CatmullRomLine, Line } from '@react-three/drei';
import * as THREE from 'three'
import { CatmullRomCurve3 } from 'three';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry';
import { Camera } from '../Components/'
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';





    

    
    // Create the final object to add to the scene
    // const curveObject = new THREE.Line( geometry, material );

var localProgress = 0
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



function Controls(props) {

    const curve = useMemo(()=> new THREE.CatmullRomCurve3( [
        new THREE.Vector3( -10, 0, 10 ),
        new THREE.Vector3( -5, 5, 5 ),
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 5, -5, 5 ),
        new THREE.Vector3( 10, 0, 10 ) 
    ], true ), []) 
    const points = curve.getPoints( 80 );
    const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints( points ),[curve, points])  
    const material = useMemo(() => new THREE.LineBasicMaterial( { color: 0xff0000 } ),[ ]) 
    const [progress, setProgress] = useState(0)

    useFrame(() => {
        lerp.current = progress
        props.getCamPos(curve.getPointAt(progress))
        lerp.target += 0.0001
        lerp.target = gsap.utils.clamp(0,1,lerp.target)
        lerp.current = gsap.utils.clamp(0,1,lerp.current)
        var value = gsap.utils.interpolate(lerp.current, lerp.target, lerp.ease)
        setProgress(value)
    })
    

    
    return (
    <>   
        
        
        <line geometry={geometry}>
            <lineBasicMaterial args={[material]}/>
        </line>
        {props.children}
    </>  
  ) 
} 

export default Controls