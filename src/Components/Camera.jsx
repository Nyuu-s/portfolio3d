import React, {useEffect,  useRef } from 'react'
import {useHelper, OrthographicCamera, } from '@react-three/drei'
import {useThree} from '@react-three/fiber'
import { CameraHelper } from 'three'
import {Controls} from '../Components'
import { useState } from 'react'
import {useStore} from 'zustand'
import * as THREE from 'three'
import { useAddCameras, useCameras } from '../Context/ContextZustand';

const WIDTH = 1.5

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
    // useEffect(() => {
    //     props.store.setState({
    //       [`${props.label}Cam`]: ref
    //     })
    //     ref.current.lookAt(t)
    // }, [props.label])
 


    
     useAddCameras(ref)



    console.log(useCameras());
    useHelper(ref, THREE.CameraHelper)
    // const t = new THREE.Vector3(0, 0, 0)
    return(
        <>
            <OrthographicCamera 
            ref={ref}
            far={props.far}
            near={props.near}
            position={props.position}
            left={-WIDTH}
            right={WIDTH}
            top={props.top}
            bottom={props.bottom}
            makeDefault={props.default}
            >

            </OrthographicCamera>
        
        </>
    )
}

export default Camera