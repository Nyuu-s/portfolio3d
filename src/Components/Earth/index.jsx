import React, {useRef, useState,useEffect} from 'react'
import * as THREE from 'three'
import { gsap, ScrollTrigger } from 'gsap/all'
import vertexShader from '../../shaders/vertex.js'
import atmosVertexShader from '../../shaders/atmosVertex'
import fragmentShader from '../../shaders/fragment.js'
import atmosFragmentShader from '../../shaders/atmosFragment'
import EarthTexture from '../../assets/textures/8k_earth_daymap.jpg'
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import EarthNightMap from "../../assets/textures/8k_earth_nightmap.jpg";

import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { TextureLoader  } from 'three'
import {OrbitControls, Stars} from '@react-three/drei'
import { useLocation } from 'wouter'
import {ProjectsMesh} from '../index'



function Earth({NormalizedMouse, Projects}) {
   
    var startAngle = -0.471239
    const earth = useRef()
    const atmos = useRef()
    const cloudsRef = useRef()
    const StarsRef = useRef()
    // const [toggle, setToggle] = useState(false)
    // const [Display, setDisplay] = useState(true)
    const [location] = useLocation()
    const {camera } = useThree()
   


    useEffect(() => {
      let earthScaleTime = 3
      let StarsFadeTime = 2
      let ctx = gsap.context(() => { 
        const tl = gsap.timeline()
        tl.fromTo(StarsRef.current.geometry.attributes.color, {count: 0}, {count: 5000, duration: StarsFadeTime}, '<') 
        tl.fromTo(StarsRef.current.geometry.attributes.position, {count: 0}, {count: 5000, duration: StarsFadeTime}, '<') 
        tl.fromTo(StarsRef.current.geometry.attributes.size, {count: 0}, {count: 5000, duration: StarsFadeTime}, '<') 
        tl.fromTo(earth.current.scale, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1, duration: earthScaleTime}) 
        tl.fromTo(cloudsRef.current.scale, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1, duration: earthScaleTime}, '<') 
        tl.fromTo(atmos.current.scale, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1, duration: earthScaleTime}, '<') 
        
      })
     
      return () => {
        ctx.revert()
      }
    }, [])

    // useEffect(() => {
      
    //   setToggle(() => ( location === '/projects' ? true : false))
    //   setDisplay(() => ( location.includes('/projects/')  ? false : true))
    // }, [location])
    
   
    useFrame(() => {
      var groupRotation = earth.current.parent.rotation
      // scene.children[0].rotateY
     
      //  cloudsRef.current.rotation.y = -elapsedTime / 20;
      //  earth.current.rotation.y = -elapsedTime / 20;
       earth.current.rotateY(0.0004);
       cloudsRef.current.rotateY(0.0003);
       gsap.to(groupRotation, {
        x: NormalizedMouse.y * -0.5,
        y: NormalizedMouse.x * 0.5,
        duration: 2
       })

      
    });
    const [texture_earth, texture_clouds, texture_night ] = useLoader(TextureLoader, [EarthTexture, EarthCloudsMap, EarthNightMap])
    
   
    

    
  return (
    <>
      
        <mesh ref={earth}  rotation-z={startAngle} position={[0,0,0] }>
            <sphereGeometry args={[5, 50, 50, ]} />
            <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} 
              uniforms={
                    {
                        earthTexture: { value: texture_earth},
                        earthNightTexture: { value: texture_night},
                        cam_pos: {value: [0,0,10]}
                
                    }
                  }
              />
        </mesh>

       
        <mesh ref={cloudsRef} rotation-z={startAngle} position={[0, 0, 0]}  >
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

        <Stars ref={StarsRef}
            radius={300}
            depth={60}
            // count={0}
            factor={7}
            saturation={100} 
            fade={true}
            

      />
    </>
  )
}

export default Earth 