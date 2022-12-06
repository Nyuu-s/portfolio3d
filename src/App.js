
import React, { Suspense, useRef, useMemo } from 'react';
import './App.css';


import {Canvas} from '@react-three/fiber'
import * as THREE from 'three'
import { Earth,  Camera  } from './Components/'
import {Preload, Loader, Html, useProgress} from '@react-three/drei';
import { LandingPage } from './Pages';
import { useTheme } from './Context/ContextZustand'
import gsap from 'gsap';
import { useLocation, Route , Router} from "wouter"
import makeMatcher from "wouter/matcher"
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'


const RoomModel = React.lazy(() => import('./Components/Room/PortfolioRoomArcade'))
const Environement = React.lazy(() => import('./Components/Environement/index'))
const Floor = React.lazy(() => import('./Components/Floor/index'))
const ProjectsMesh = React.lazy(() => import('./Components/ProjectsGrid/ProjectsMesh'))
function CustomLoader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html className='w-screen mx-auto ' center> <div className='text-red-100 text-center'> Loading: {(progress - 1) > 0 ? (progress-0.1).toFixed(1) : 0} %   </div></Html>
}


const DEBUG = false
var mouse = { x:0 ,
              y:0 }

const defaultMatcher = makeMatcher();
const multipathMatcher = (patterns, path) => {
  for (let pattern of [patterns].flat()) {
    const [match, params] = defaultMatcher(pattern, path);
    if (match) return [match, params];
  }

  return [false, null];
};



function App() {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
  const container = useRef()
  const view1 = useRef()
  const view2 = useRef()
  const {progress} = useProgress()

  let Theme = useTheme()


  const [location] = useLocation()


  // useEffect(() => {
  //   if(urlUpdate.status){

  //     if( location.pathname !==  urlUpdate.url )
  //       navigate(urlUpdate.url)
  //   }
   
  // }, [urlUpdate])
  
  // useEffect(() => {

  //   if(location.pathname.includes('/projects'))
  //   {
  //     setAppScene({Room: false , Space: true})
  //   }
  //   else 
  //   {
  //     setAppScene({Room: true , Space: false}) 
  //   }


    
    
  // }, [location.pathname])
 

  

  
  
  
  const cameraOrthoProp = useMemo(() => ({
    far: 25000,
    near: -10000,
    scale: 0.005,
    position: [0,0.5,1],
    rotation: [-Math.PI/8,0, 0],
    lookAt: [0,0,0]
  
  }), [])
  
  const cameraPersProp = useMemo(() => ({
    far: 250000,
    near: -100000,
    scale:1, 
    position: [0,0,20],
  }), [])
  
  return (
    
    <div ref={container} className={`${Theme.mode === 'dark' ? 'dark' : '' } w-screen h-screen fixed`}> 

      

        

        <Canvas
      
        shadows 
        className="canvas w-full h-full -z-10"
        eventSource={container}
        
        // -0.2,0.7,1.2
        gl={{ 
              antialias: true,
              pixelRatio: devicePixelRatio,
              toneMapping: THREE.CineonToneMapping,
              toneMappingExposure: 1,
            }}
              
        >
            { DEBUG && <>
              <gridHelper args={[10, 10]} />
              <axesHelper args={[10]}/>
            </> }

                <Router matcher={multipathMatcher}>
                <Route path='/'>
                  <>

                  <Suspense fallback={<CustomLoader />}>
                      <Camera default={true} perspective={false} {...cameraOrthoProp}/>
                        <group name='RoomScene'> 
                          <Environement />
                          <RoomModel containerRef={container} />
                          <Floor />
                          <Preload all />
                        </group>
                  </Suspense>
                  </>
                </Route>
                  <Route path={['/projects', '/projects/:id']}>
                    

                      <Camera default={true} perspective={true} {...cameraPersProp}/>
                      <group name='SolarSystem' >
                        <Earth NormalizedMouse={mouse} /> 
                      </group>
                   
                  </Route>
                  <Route path={'/projects'}>
                      <ProjectsMesh  />
                  </Route>
                </Router>

        </Canvas>
   
       
    

        
        <LandingPage  />



      
    </div>
     
  );
}

export default App;
