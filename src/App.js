
import './App.css';
import styled from 'styled-components'
import {Canvas} from '@react-three/fiber'
import { Suspense, useEffect } from 'react';
import * as THREE from 'three'
import { Earth, Sphere, TopSection, Room, Environement } from './Components/'
import { Stars , OrbitControls} from '@react-three/drei';
import { PCFSoftShadowMap } from 'three';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
`;

var mouse = { x:0 ,
              y:0 }


function App() {


  return (
    <CanvasContainer onMouseMove={(e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
      
    }} 
    > 
    <TopSection />
    
      <Canvas 
      shadows 
      camera={{position: [0,0,10]}}  
      gl={{ 
            antialias: true,
            pixelRatio: devicePixelRatio,
            toneMapping: THREE.CineonToneMapping,
            toneMappingExposure: 1,

          }} >

        <Suspense fallback={null}>
        <gridHelper args={[10, 10]} />
        <axesHelper args={[10]}/>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
          enableDamping
        /> 
   
          <Stars
                radius={300}
                depth={60}
                count={2000}
                factor={7}
                saturation={100}
                fade={true}
          />
          <Environement></Environement>
          <group>
            {/* <Sphere NormalizedMouse={mouse}/> */}
            <Room></Room>

          </group>
          {/* <Earth /> */}
        </Suspense>
      </Canvas>

     </CanvasContainer>
     
  );
}

export default App;
