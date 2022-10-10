import React, {useEffect, useMemo, useRef } from 'react'
import {useHelper, OrthographicCamera, } from '@react-three/drei'
import {useFrame, useThree} from '@react-three/fiber'
import { CameraHelper } from 'three'
import {Controls} from '../Components'
import { useState } from 'react'

import * as THREE from 'three'
import { useAddCameras, useCameras } from '../Context/ContextZustand';
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
    console.log(props, ref);
   
    useHelper(ref, (props.debug && THREE.CameraHelper) || null)
    //ref.current && props.lookAt && ref.current.lookAt(props.lookAt) 

    return(
        <>
            <OrthographicCamera  
            makeDefault={props.default}
            ref={ref}
            position={props.position}
            scale={props.scale}
            far={props.far}
            near={props.near}
            rotation={props.rotation}
            lookAt={props.lookAt}
       
            
            />

            
        
        </>
    )
}

export default Camera