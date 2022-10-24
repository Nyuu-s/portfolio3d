
import React, { Suspense, useRef, useEffect, useState, useLayoutEffect } from 'react';
import './App.css';

import styled from 'styled-components'
import {Canvas, useFrame, useThree, createPortal} from '@react-three/fiber'
import * as THREE from 'three'
import { Earth, Sphere, TopSection, Room, Environement, Controls, Camera, Floor, AnimationsControls, RoomModel } from './Components/'
import { Stars , OrbitControls, OrthographicCamera, useFBO, Plane, useHelper, View, PerspectiveCamera, Bounds, RenderTexture, Effects} from '@react-three/drei';
import { LandingPage } from './Pages';
import { useTheme } from './Context/ContextZustand'
import gsap from 'gsap';




const DEBUG = false
var mouse = { x:0 ,
              y:0 }





function App() {
  const container = useRef()
  const view1 = useRef()
  const view2 = useRef()
  const StarsRef = useRef()
  let Theme = useTheme()
  const [AppScene, setAppScene] = useState({Room: false , Space: true})

  useLayoutEffect(() => { 
    let ctx = gsap.context(() => {
      console.log(StarsRef);   
    
      if(StarsRef.current){
        gsap.fromTo(StarsRef.current.geometry.attributes.color, {count: 0}, {count: 5000, duration: 15}) 
        gsap.fromTo(StarsRef.current.geometry.attributes.position, {count: 0}, {count: 5000, duration: 15}) 
        gsap.fromTo(StarsRef.current.geometry.attributes.size, {count: 0}, {count: 5000, duration: 15}) 
      }
  
      
    
 
    })
   
    return () => {
      ctx.revert()
    }
  }, [])

console.log(AppScene);
  

  const [cameraOrthoProp, setCameraOrthoProp] = useState({
    far: 25000,
    near: -10000,
    scale: 0.005,
    position: [0,0.5,1],
    rotation: [-Math.PI/8,0, 0],
    lookAt: [0,0,0]
  
  })
  const [cameraPersProp, setCameraPersProp] = useState({
    far: 250000,
    near: -100000,
    scale:1, 
    position: [0,0,20],
  })
  return (
    
    <div ref={container} className={`${Theme.mode === 'dark' ? 'dark' : '' } w-screen h-screen fixed`}> 
      <div ref={view1} className="view1"/>
      <div ref={view2} className="view2" />
      
      


      <Canvas 
      shadows 
      className="canvas w-full h-full"
      eventSource={container}
      
      // -0.2,0.7,1.2
      gl={{ 
            antialias: true,
            pixelRatio: devicePixelRatio,
            toneMapping: THREE.CineonToneMapping,
            toneMappingExposure: 1,
          }}
            
      >

        
          
        <Suspense fallback={null}>
       
          <Camera default={AppScene.Room} perspective={false} {...cameraOrthoProp}/>
          <Camera default={AppScene.Space} perspective={true} {...cameraPersProp}/>
          { DEBUG && <>
            <gridHelper args={[10, 10]} />
            <axesHelper args={[10]}/>
          </> }


          {/* <Controls>
            <Camera  default={!DEBUG} {...cameraOrthoProp} debug={DEBUG}  />
          </Controls> */}
          {
          AppScene.Room && 
          <group name='RoomScene'> 
            <Environement />
            <RoomModel containerRef={container} setState={(appState) => setAppScene(appState)}/>
            <Floor />
          </group>
          }
            {   AppScene.Space && 
            <group name='SolarSystem' >
              <Stars ref={StarsRef}
                    radius={300}
                    depth={60}
                    // count={2000}
                    factor={7}
                    saturation={100}
                    fade={true}

              />
              <Sphere NormalizedMouse={mouse}/>
            </group>}
        
            {/* <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
            enableDamping
          />  */}
        </Suspense>
      </Canvas>
      
      {/* <LandingPage  /> */}

      
    </div>
     
  );
}

export default App;
