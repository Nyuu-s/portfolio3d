
import React, { Suspense, useRef, useEffect, useState } from 'react';
import './App.css';

import styled from 'styled-components'
import {Canvas, useFrame, useThree, createPortal} from '@react-three/fiber'
import * as THREE from 'three'
import { Earth, Sphere, TopSection, Room, Environement, Controls, Camera, Floor, AnimationsControls } from './Components/'
import { Stars , OrbitControls, OrthographicCamera, useFBO, Plane, useHelper, View, PerspectiveCamera, Bounds, RenderTexture} from '@react-three/drei';
import { LandingPage } from './Pages';



const DEBUG = false

const CanvasContainer = styled.div`

`;

var mouse = { x:0 ,
              y:0 }





function App() {
  const container = useRef()
  const view1 = useRef()
  const view2 = useRef()



  const [cameraOrthoProp, setCameraOrthoProp] = useState({
    far: 2500,
    near: -1000,
    scale: 0.005,
    position: [0,0.5,1],
    rotation: [-Math.PI/8,0, 0],
    lookAt: [0,0,0]
  
  })
  return (
    
    <div ref={container} className='w-screen h-screen fixed'> 
      <div ref={view1} className="view1"/>
      <div ref={view2} className="view2" />
      
      


      <Canvas 
      shadows 
      className="canvas w-full h-full"
      // -0.2,0.7,1.2
      gl={{ 
            antialias: true,
            pixelRatio: devicePixelRatio,
            toneMapping: THREE.CineonToneMapping,
            toneMappingExposure: 1,
          }}
            
      >

        
          
        <Suspense fallback={null}>
            
          <Camera default {...cameraOrthoProp}/>
          { DEBUG && <>
            <gridHelper args={[10, 10]} />
            <axesHelper args={[10]}/>
          </> }

          <Stars
                radius={300}
                depth={60}
                count={2000}
                factor={7}
                saturation={100}
                fade={true}
          />
          {/* <Controls>
            <Camera  default={!DEBUG} {...cameraOrthoProp} debug={DEBUG}  />
          </Controls> */}
          <group dispose={null}> 
            {/* <Sphere NormalizedMouse={mouse}/> */}
            <Environement></Environement>
            <Room />
            <Floor />   
          </group>
          <AnimationsControls containerRef={container}/>
            

            {/* <Earth /> */}
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
      
      <LandingPage >

      </LandingPage>
    </div>
     
  );
}

export default App;
