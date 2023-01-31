import React from 'react'
import { Earth, Project, ProjectsMesh } from './'
import { useFrame , useThree} from '@react-three/fiber'
import { OrbitControls, useScroll, Scroll, Html, Plane } from '@react-three/drei'
import * as THREE from 'three';
import { useEffect } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all'
import { useRef, useState, useMemo } from 'react';
import { useLocation } from 'wouter'
import {Trans} from 'react-i18next'
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi'

function filterArrayByCategory(arr, category) {
  return arr.filter(item => item.props.category === category);
}

function ChunkArrayByNumber(arr, Number)
{
  let chunkedArr = [];
  let chunk = [];
  for (let i = 0; i < arr.length; i++) {
    chunk.push(arr[i]);
    if (chunk.length === Number || i === arr.length - 1) {
      chunkedArr.push(chunk);
      chunk = [];
    }
  }
  return chunkedArr;
}

function SolarSystem({Projects, Mouse, ...props}) {
  const {camera } = useThree()
  const [toggle, setToggle] = useState(false)
  const [location] = useLocation()
  const [Display, setDisplay] = useState(true)
  const SegmentedProjects = useMemo(() => (ChunkArrayByNumber(Projects, 12)), [])
  const [ProjectFilterState, setProjectFilterState] = useState({array: SegmentedProjects, state: ""})
  const [page, setpage] = useState(0)
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(camera.position, {x: 0, y:0, z:30})
    })
    return () => {
      ctx.revert();
    }
  }, [camera])
  

  // useEffect(() => {
  //   let ctx = gsap.context(() => {

  //       gsap.registerPlugin(ScrollTrigger)
  //       gsap.to(camera.position, {x: 0, y:0, z:30})
  //       gsap.to(camera.position, {

  //       scrollTrigger: {
         
  //         trigger: "body",
  //         scroller: '.page',
  //         start: "top top",
  //         end: "+=500%",
  //         markers: true,
  //         scrub: 0.5,
  //         onUpdate: ({progress}) => {
  //         if(progress > 0)
  //         {
  //           setToggle(false)
  //           gsap.to(camera.position, { y:0 , z:30 , duration: 1})
  //           gsap.to(camera.rotation, {x:0 , y:0 , z:0, duration: 1})
        
  //         }
  //         else
  //         {
          
  //           setToggle(true)
          
  //         }
      
  //       }
  //       },
  //       x: 100
  //     })
  //   })
  
  //   return () => { 
  //     ctx.revert();
     
  //   }
  // }, [camera])

  useEffect(() => {
      
    setToggle(() => ( location === '/projects' ? true : false))
    setDisplay(() => ( location.includes('/projects/')  ? false : true))
  }, [location])

  return (
  
    <>
      { Display && 
      <> 
        <ProjectsMesh projectsArr={ProjectFilterState.array[page]} position={{x: -5.3, y:0, z:0}} /> 
        {/* PROJECTS PAGES NAVIGATION */}
        <Plane args={[1,1]} visible={false}  position={[7,-1/2,10]} >
          <Html occlude transform position={[0,0,0.1]} scale={0.8} pointerEvents='true'>
            <button className={`text-lg mx-2 font-raleway ${page === ProjectFilterState.array.length-1 ? 'hidden' : 'block'} w-30 h-30 pointer-events-auto` }
            onClick={() => {
              if(page !== ProjectFilterState.array.length-1)
                setpage(() => (page + 1))
            }}
            >
              
              
              <BiRightArrow size={20}/></button>
          </Html>
        </Plane>
        <Plane args={[1,1]} visible={false}  position={[-7,-1/2,10]} >
          <Html occlude transform position={[0,0,0.1]} scale={0.8} pointerEvents='true'>
            <button className={`text-lg mx-2 font-raleway ${page === 0 ? 'hidden' : 'block'} w-30 h-30 pointer-events-auto` }
              onClick={() => {
                if(page !== 0)
                  setpage(() => (page - 1))
              }}
            ><BiLeftArrow size={20}/></button>
          </Html>
        </Plane>

        {/* FILTER BAR */}
        <Plane args={[15,2]} visible={false}  position={[0,-6,10]} >
          <Html occlude transform position={[0,0,0.1]} scale={0.8} pointerEvents='true'>
              <button className={`text-lg mx-2 font-raleway w-30 h-30 ${ProjectFilterState.state === '0' ? 'underline' : 'no-underline' } pointer-events-auto` }  onClick={() => {
                if(ProjectFilterState.state !== '0')
                  setProjectFilterState({array: ChunkArrayByNumber(filterArrayByCategory(Projects, 0), 12), state: "0"})
                else
                  setProjectFilterState({array: SegmentedProjects, state: ""})
              }}>
                <Trans>Projects.category.pers</Trans>
              </button>
              <button className={`text-lg mx-2 font-raleway w-30 h-30 ${ProjectFilterState.state === '1' ? 'underline' : 'no-underline' } pointer-events-auto` } onClick={() => {
                if(ProjectFilterState.state !== '1')
                  setProjectFilterState({array: ChunkArrayByNumber(filterArrayByCategory(Projects, 1), 12), state: "1"})
                else
                  setProjectFilterState({array: SegmentedProjects, state: ""})
              }}>
                <Trans>Projects.category.uni</Trans>
              </button>

              <button className={`text-lg mx-2 font-raleway w-30 h-30 ${ProjectFilterState.state === '2' ? 'underline' : 'no-underline' } pointer-events-auto` }  onClick={() => {
                if(ProjectFilterState.state !== '2')
                  setProjectFilterState({array: ChunkArrayByNumber(filterArrayByCategory(Projects, 2), 12), state: "2"})
                else
                  setProjectFilterState({array: SegmentedProjects, state: ""})
              }}>
                <Trans>Projects.category.work</Trans>
              </button>

              <button className={`text-lg mx-2 font-raleway w-30 h-30 ${ProjectFilterState.state === '3' ? 'underline' : 'no-underline' } pointer-events-auto` } onClick={() => {
                if(ProjectFilterState.state !== '3')
                  setProjectFilterState({array: ChunkArrayByNumber(filterArrayByCategory(Projects, 3), 12), state: "3"})
                else
                  setProjectFilterState({array: SegmentedProjects, state: ""})
              }}>
                <Trans>Projects.category.special</Trans>
              </button>
            
          </Html>
        </Plane>
      </>
      
      }
      <Earth NormalizedMouse={Mouse} Projects={Projects} /> 

      <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
          enabled={toggle}

        /> 
    </>

  )
}

export default SolarSystem