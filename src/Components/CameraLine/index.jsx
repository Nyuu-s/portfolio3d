import React, {useRef, useEffect} from 'react'
import { QuadraticBezierLine } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'


export default function CameraLine({ start, end, v1 = new THREE.Vector3(), v2 = new THREE.Vector3() }) {
    const ref = useRef()


    
    // useFrame(() =>   ref.current.setPoints(start.current.position, end.current.position), [])
    // useFrame(() =>  end.current.position.set( start.current.position ), [])
    return <QuadraticBezierLine ref={ref}  start={[-2.44, 5.3, -1.13]} end={[-3.91, 0.41, 1.48]} lineWidth={3} color="#ff2060" />
} 




