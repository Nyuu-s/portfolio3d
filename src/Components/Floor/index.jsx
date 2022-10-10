import React from 'react'
import {Html, Plane} from '@react-three/drei'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { useRef } from 'react'
import {useRoom} from '../../Context/ContextZustand'


function Floor() {
const ref = useRoom()
console.log("ref", ref);
    
  return (
   <>
        <Plane position={[0,-2,0]} rotation={[Math.PI/2,0,0]} receiveShadow>
            <planeGeometry args={[100,100]}/>
            <meshStandardMaterial color={0xffffff} side={THREE.BackSide} />
            <Html transform rotation={[Math.PI, 0,0]} position={[2,0,0]}>
                <h1 className='font-extrabold font-mono invisible lg:visible'  >Portfolio </h1> 
            </Html>

        </Plane>


   </>
  )
}

export default Floor