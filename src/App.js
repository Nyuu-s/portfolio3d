
import React, { Suspense, useRef, useState } from 'react';
import './App.css';

import styled from 'styled-components'
import {Canvas, useFrame, useThree, createPortal} from '@react-three/fiber'
import * as THREE from 'three'
import { Earth, Sphere, TopSection, Room, Environement, Controls, Camera } from './Components/'
import { Stars , OrbitControls, OrthographicCamera, useFBO, Plane, useHelper, View, PerspectiveCamera, Bounds, RenderTexture} from '@react-three/drei';



const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
`;

var mouse = { x:0 ,
              y:0 }





function App() {
  const container = useRef()
  const view1 = useRef()
  const view2 = useRef()

  const [cameraOrthoProp, setCameraOrthoProp] = useState({
    far: 10,
    near: 0.001,
    top: 1.5,
    bottom: -1.5, 
    position: [0,1,5]
  
  })
  return (
    <CanvasContainer onMouseMove={(e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
      
    }} 
    ref={container}
    > 
    <div ref={view1} className="view1"/>
    <div ref={view2} className="view2" />
    
    <TopSection />

      <Canvas 
      shadows 
      eventSource={container.current}
      className="canvas"
      // -0.2,0.7,1.2
      camera={{position: [12,10,10] }} 
      
      gl={{ 
            antialias: true,
            pixelRatio: devicePixelRatio,
            toneMapping: THREE.CineonToneMapping,
            toneMappingExposure: 1,
          }}
          
          
          >

       
        
        <Suspense fallback={null}>

          <gridHelper args={[10, 10]} />
          <axesHelper args={[10]}/> 
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
            enableDamping
            makeDefault
            /> 
    
            <Stars
                  radius={300}
                  depth={60}
                  count={2000}
                  factor={7}
                  saturation={100}
                  fade={true}
            />
            <Camera {...cameraOrthoProp} default />
          
            <group dispose={null}> 
              {/* <Sphere NormalizedMouse={mouse}/> */}
              <Environement></Environement>
              <Room />   
            </group>
     
        

          {/* <Earth /> */}
          
        </Suspense>
      </Canvas>

     </CanvasContainer>
     
  );
}

export default App;
