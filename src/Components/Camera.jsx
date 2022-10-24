import React, {useEffect, useMemo, useRef } from 'react'
import {useHelper, OrthographicCamera, PerspectiveCamera, } from '@react-three/drei'
import {useFrame, useThree} from '@react-three/fiber'
import { CameraHelper } from 'three'
import {Controls} from '../Components'
import { useState } from 'react'

import * as THREE from 'three'
import useStore, { useAddCameras, useCameras } from '../Context/ContextZustand';
import { useLayoutEffect } from 'react'

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight


// function Camera(props) {
//     const camera = useRef()
//     useHelper(camera, CameraHelper, 1, 'hotpink')
//     const [position, setPosition] = useState([0,0,10])
//     const [lookAtVec, setLookAtVec] = useState([0,0,0])

//     useEffect(() => {
//       camera.current.lookAt(lookAtVec)
    
     
//     }, [lookAtVec])
    

//   return ( 
//       <>
//       <Controls 
//         getCamPos={(position) => setPosition(position) }
//         getLookAt={(vector) => setLookAtVec(vector)}
//         >
//             <orthographicCamera  ref={camera}
//             far={15}
//             near={-5}
//             position={position}
//             left={WIDTH}
//             right={-WIDTH}
//             top={2}
//             bottom={-2}
            
//             >
//             </orthographicCamera>

//         </Controls>
    
//     </>
//   )
// }

function Camera(props) {
    const ref = useRef()
    const setCam = useStore((state) => state.setCamera)
   
  
   useEffect(() => {
     setCam(ref)
   }, [])


// useHelper(ref, (THREE.CameraHelper) || null) 

    return(
        <> 
        {props.perspective ? 
            <PerspectiveCamera  
            makeDefault={props.default}
            ref={ref} 
            position={props.position}
            scale={props.scale}
            far={10000}
            near={1}
            rotation={props.rotation}
            aspect={window.innerWidth / window.innerHeight}
            fov={45}
            
        
            
            />
    
    :
    <OrthographicCamera  
    makeDefault={props.default}
    ref={ref} 
    position={props.position}
    scale={props.scale}
    far={props.far}
    near={props.near}
    rotation={props.rotation}
    

    
    />
    }
  

            
        
        </>
    )
}

export default Camera