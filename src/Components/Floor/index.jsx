import React from 'react'
import {Plane, Html} from '@react-three/drei'
import * as THREE from 'three'



function Floor() {

    
  return (
   <>
        <Plane position={[0,-2,0]} rotation={[Math.PI/2,0,0]} receiveShadow>
            <planeGeometry args={[100,100]}/>
            <meshStandardMaterial color={0xffffff} side={THREE.BackSide} />
            <Html  transform rotation={[Math.PI, 0,0]} position={[2,0,0]}>
                <h1 className=' font-raleway invisible lg:visible'  >{process.env.REACT_APP_VERSION} </h1> 
            </Html>

        </Plane>
        {/* <Plane position={[0,-1.8,0]} rotation={[Math.PI/2,0,Math.PI/4]} receiveShadow>
            <planeGeometry args={[5,5]}/>
            <meshStandardMaterial color={0xff} side={THREE.BackSide} />
        </Plane>
        <Plane position={[0,-1.7,0]} rotation={[Math.PI/2,0,Math.PI/4]} receiveShadow>
            <planeGeometry args={[5,5]}/>
            <meshStandardMaterial color={0xfff} side={THREE.BackSide} />
        </Plane>
        <Plane position={[0,-1.6,0]} rotation={[Math.PI/2,0,Math.PI/4]} receiveShadow>
            <planeGeometry args={[5,5]}/>
            <meshStandardMaterial color={0xffff} side={THREE.BackSide} />
        </Plane> */}


   </>
  )
}

export default Floor