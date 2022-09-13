import React, {useRef} from 'react'
import * as THREE from 'three'
import vertexShader from '../../shaders/vertex.js'
import atmosVertexShader from '../../shaders/atmosVertex'
import fragmentShader from '../../shaders/fragment.js'
import atmosFragmentShader from '../../shaders/atmosFragment'
import EarthTexture from '../../assets/textures/8k_earth_daymap.jpg'
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";

import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { Blending, TextureLoader } from 'three'
import {OrbitControls} from '@react-three/drei'





function Sphere() {
    var camPos
    const earth = useRef()
    const atmos = useRef()
    const cloudsRef = useRef()
    useThree(({camera}) => {
      camPos = camera.position
    })
    useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime();
  
       earth.current.rotation.y = elapsedTime / 20;
       cloudsRef.current.rotation.y = elapsedTime / 40;

      
    });
    const [texture_earth, texture_clouds ] = useLoader(TextureLoader, [EarthTexture, EarthCloudsMap])
    

    
  return (
    <>
        
        <mesh ref={earth} position={[0,0,0]}>
            <sphereGeometry args={[5, 50, 50]} />
            <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} 
              uniforms={
                    {
                        earthTexture: { value: texture_earth},
                        
                
                    }
                  }
              />
        </mesh>
        <mesh ref={cloudsRef} position={[0, 0, 0]}  >
      <sphereGeometry args={[5.02, 50, 50]} />
        <meshBasicMaterial
          map={texture_clouds}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.FrontSide}
        />
      </mesh>
        <mesh ref={atmos} position={[0,0,0]}>
            <sphereGeometry args={[5.3, 50, 50]} />
            <shaderMaterial vertexShader={atmosVertexShader} fragmentShader={atmosFragmentShader} blending={THREE.AdditiveBlending} side={THREE.BackSide} 

                 />
        </mesh>
                 <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> 
    
    </>
  )
}

export default Sphere 