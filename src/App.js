
import React, { Suspense, useRef, useEffect, useState, useLayoutEffect } from 'react';
import './App.css';


import {Canvas, useFrame, useThree, createPortal} from '@react-three/fiber'
import * as THREE from 'three'
import { Earth, Sphere, TopSection, Room, Environement, Controls, Camera, Floor, AnimationsControls, RoomModel, ProjectsMesh,  } from './Components/'
import { Stars , OrbitControls, OrthographicCamera, useFBO, Plane, useHelper, View, PerspectiveCamera, Bounds, RenderTexture, Effects} from '@react-three/drei';
import { LandingPage, Main } from './Pages';
import { useTheme } from './Context/ContextZustand'
import gsap from 'gsap';
import { useLocation, Switch, Route , Router} from "wouter"
import makeMatcher from "wouter/matcher"
import {ScrollTrigger} from 'gsap/ScrollTrigger'





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
  const container = useRef()
  const view1 = useRef()
  const view2 = useRef()


  let Theme = useTheme()
  const [AppScene, setAppScene] = useState({Room: false , Space: true})
  const [urlUpdate, seturlUpdate] = useState({status: false, url: '/'})
  const [location, setLocation] = useLocation()


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
        
            
            { DEBUG && <>
              <gridHelper args={[10, 10]} />
              <axesHelper args={[10]}/>
            </> }

              
                <Route path='/'>
                  <Camera default={true} perspective={false} {...cameraOrthoProp}/>
                  <group name='RoomScene'> 
                    <Environement />
                    <RoomModel containerRef={container} />
                    <Floor />
                  </group>
                </Route>
                
                <Router matcher={multipathMatcher}>

                  <Route path={['/projects', '/projects/:id']}>
                    <Camera default={true} perspective={true} {...cameraPersProp}/>
                    <group name='SolarSystem' >
                      <Sphere NormalizedMouse={mouse} />
                    </group>
                  </Route>
                  <Route path={'/projects'}>
                      <ProjectsMesh  />
                  </Route>
                </Router>
  
              
          
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
        
       
    

          
        <LandingPage  />




      
    </div>
     
  );
}

export default App;
