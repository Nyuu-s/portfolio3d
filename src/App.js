
import './App.css';
import styled from 'styled-components'
import {Canvas} from '@react-three/fiber'
import { Suspense, useEffect } from 'react';
import { Earth, Sphere, TopSection } from './Components/'
import { Stars } from '@react-three/drei';

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
      camera={{position: [0,0,10]}}  gl={{antialias: true, pixelRatio: devicePixelRatio}} >
        <Suspense fallback={null}>
          <Stars
                radius={300}
                depth={60}
                count={2000}
                factor={7}
                saturation={100}
                fade={true}
          />
          <group>
            <Sphere NormalizedMouse={mouse}/>

          </group>
          {/* <Earth /> */}
        </Suspense>
      </Canvas>
     </CanvasContainer>
  );
}

export default App;
