
import './App.css';
import styled from 'styled-components'
import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react';
import { Earth, Sphere, TopSection } from './Components/'

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;

`;

function App() {


  return (
    <CanvasContainer> 
      <TopSection />
      <Canvas camera={{position: [0,0,10]}}  gl={{antialias: true, pixelRatio: devicePixelRatio}} >
        <Suspense fallback={null}>
          {/* <Earth /> */}
          <Sphere />
        </Suspense>
      </Canvas>
     </CanvasContainer>
  );
}

export default App;
