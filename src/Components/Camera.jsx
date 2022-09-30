import React, {useEffect} from 'react'
import {useHelper, OrthographicCamera} from '@react-three/drei'
import { useRef } from 'react'
import { CameraHelper } from 'three'
import {Controls} from '../Components'
import { useState } from 'react'

const WIDTH = 2.5

function Camera(props) {
    const camera = useRef()
    useHelper(camera, CameraHelper, 1, 'hotpink')
    const [position, setPosition] = useState([0,0,10])

    
  return ( 
      <>
      <Controls getCamPos={(position) => setPosition(position) }>
            <orthographicCamera  ref={camera}
            far={5}
            near={-5}
            position={position}
            left={WIDTH}
            right={-WIDTH}
            top={2}
            bottom={-2}
            
            >
            </orthographicCamera>

        </Controls>
    
    </>
  )
}

export default Camera