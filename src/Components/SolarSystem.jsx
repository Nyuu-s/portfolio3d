import React from 'react'
import { Earth, ProjectsMesh } from './'
import { useThree} from '@react-three/fiber'
import { OrbitControls, Html, Plane } from '@react-three/drei'
import { useEffect } from 'react';
import { gsap } from 'gsap/all'
import { useState, useMemo } from 'react';
import { useLocation } from 'wouter'
import {Trans} from 'react-i18next'
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi'

const CategoryMap = {
  0:  {
      0: <div className='text-blue-500 text-xs font-raleway'><Trans>Projects.category.pers.default</Trans></div> ,
      1: <div className='text-blue-500 text-xs font-raleway'><Trans>Projects.category.pers.games</Trans></div> 
  },
  1: {
      0: <div className='text-purple-500 text-xs font-raleway'><Trans>Projects.category.uni.default</Trans></div>,
      1: <div className='text-purple-500 text-xs font-raleway'><Trans>Projects.category.uni.m1</Trans></div>, 
      2: <div className='text-purple-500 text-xs font-raleway'><Trans>Projects.category.uni.m2</Trans></div>
  },
  2: {
      0: <div className='text-green-500 text-xs font-raleway'><Trans>Projects.category.work.default</Trans></div> 
  },
  3: {
      0: <div className='text-red-500 text-xs font-raleway'><Trans>Projects.category.special.default</Trans></div> 
  } 
}

function filterArrayByCategory(arr, category) {
  return arr.filter(item => item.props.category === category);
}
function filterArrayBySubCategory(arr, category, subCategory) {
  return arr.filter(item => (item.props.category === category && item.props.subCategory === subCategory));
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
  const SegmentedProjects = useMemo(() => (ChunkArrayByNumber(Projects, 12)), [Projects])
  const [ProjectFilterState, setProjectFilterState] = useState({array: SegmentedProjects, state: ""})
  const [page, setpage] = useState(0)
  const PersCategories = useMemo(() => {
    let arr = []
    for (const key in CategoryMap[0]) {
      arr.push(
        <button key={'button' + key} className={`pointer-events-auto flex flex-col`} onClick={() => {
            setProjectFilterState({array:ChunkArrayByNumber(filterArrayBySubCategory(Projects, 0, parseInt(key)), 12), state: "0."+key})

     
        }}>{CategoryMap[0][key]}</button>
      )
    }
    return arr
  }, [Projects])
  const UniCategories = useMemo(() => {
    let arr = []
    for (const key in CategoryMap[1]) {
      arr.push(
        <button key={'button' + key} className={`pointer-events-auto flex flex-col`} onClick={() => {
          setProjectFilterState({array:ChunkArrayByNumber(filterArrayBySubCategory(Projects, 1,parseInt(key)), 12), state: "1."+key})
        }}>{CategoryMap[1][key]}</button>
      )
    }
    return arr
  }, [Projects])
  const WorkCategories = useMemo(() => {
    let arr = []
    for (const key in CategoryMap[2]) {
      arr.push(
        <button key={'button' + key} className={`pointer-events-auto flex flex-col`} onClick={() => {
          setProjectFilterState({array:ChunkArrayByNumber(filterArrayBySubCategory(Projects, 2,parseInt(key)), 12), state: "2."+key})
        }}>{CategoryMap[2][key]}</button>
      )
    }
    return arr
  }, [Projects])
  const SpeCategories = useMemo(() => {
    let arr = []
    for (const key in CategoryMap[3]) {
      arr.push(
        <button key={'button' + key} className={`pointer-events-auto flex flex-col`} onClick={() => {
          setProjectFilterState({array:ChunkArrayByNumber(filterArrayBySubCategory(Projects, 3,parseInt(key)), 12), state: "3."+key})
        }}>{CategoryMap[3][key]}</button>
      )
    }
    return arr
  }, [Projects])
  
  useEffect(() => {
   
    let ctx = gsap.context(() => {
      gsap.to(camera.position, {x: 0, y:0, z:30})
    })
    return () => {
      ctx.revert();
    }
  }, [camera])


  useEffect(() => {
      
    setToggle(() => ( location === '/projects' ? true : false))
    setDisplay(() => ( location.includes('/projects/')  ? false : true))
  }, [location])
  
  return (
  
    <>
      { Display && 
      <> 
        <ProjectsMesh CatMap={CategoryMap} projectsArr={ProjectFilterState.array[page]} position={{x: -5.3, y:0, z:0}} /> 
        {/* PROJECTS PAGES NAVIGATION */}
        <Plane args={[1,1]} visible={false}  position={[7,-1/2,10]} >
          <Html occlude transform position={[0,0,0.1]} scale={0.8} pointerEvents='true'>
            <button className={`text-lg text-white mx-2 font-raleway ${page === ProjectFilterState.array.length-1 || ProjectFilterState.array.length <= 0 ? 'hidden' : 'block'} w-30 h-30 pointer-events-auto` }
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
            <button className={`text-lg text-white mx-2 font-raleway ${page === 0 || ProjectFilterState.array.length <= 0 ? 'hidden' : 'block'} w-30 h-30 pointer-events-auto` }
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
            <div className='flex text-white'>

              <div className='flex flex-col '>
                <button className={`text-lg mx-2 font-raleway w-30 h-30 ${ProjectFilterState.state === '0.0' ? 'underline' : 'no-underline' } pointer-events-auto ` }  onClick={() => {
                  if(ProjectFilterState.state !== '0.0')
                    setProjectFilterState({array: ChunkArrayByNumber(filterArrayByCategory(Projects, 0), 12), state: "0.0"})
                  else
                    setProjectFilterState({array: SegmentedProjects, state: ""})
                }}>
                  <Trans >Projects.category.pers.default</Trans>
                </button>
                <div className='mx-2'>
                  { ProjectFilterState.state.includes('0.') && PersCategories.map((item) => (item !== PersCategories[0] ? item : null))}
                  </div>
              </div>

              <div>
                <button className={`text-lg mx-2 font-raleway w-30 h-30 ${ProjectFilterState.state === '1.0' ? 'underline' : 'no-underline' } pointer-events-auto` } onClick={() => {
                  if(ProjectFilterState.state !== '1.0')
                    setProjectFilterState({array: ChunkArrayByNumber(filterArrayByCategory(Projects, 1), 12), state: "1.0"})
                  else
                    setProjectFilterState({array: SegmentedProjects, state: ""})
                }}>
                  <Trans>Projects.category.uni.default</Trans>
                </button>
                  <div className='mx-2'>
                  { ProjectFilterState.state.includes('1.') && UniCategories.map((item) => (item !== UniCategories[0] ? item : null))}
                  </div>
              </div>
              <div>
                <button className={`text-lg mx-2 font-raleway w-30 h-30 ${ProjectFilterState.state === '2.0' ? 'underline' : 'no-underline' } pointer-events-auto` }  onClick={() => {
                  if(ProjectFilterState.state !== '2.0')
                    setProjectFilterState({array: ChunkArrayByNumber(filterArrayByCategory(Projects, 2), 12), state: "2.0"})
                  else
                    setProjectFilterState({array: SegmentedProjects, state: ""})
                }}>
                  <Trans>Projects.category.work.default</Trans>
                </button>
                <div className='mx-2'>
                  { ProjectFilterState.state.includes('2.') && WorkCategories.map((item) => (item !== WorkCategories[0] ? item : null))}
                </div>
              </div>

              <div>
                <button className={`text-lg mx-2 font-raleway w-30 h-30 ${ProjectFilterState.state === '3.0' ? 'underline' : 'no-underline' } pointer-events-auto` } onClick={() => {
                  if(ProjectFilterState.state !== '3.0')
                    setProjectFilterState({array: ChunkArrayByNumber(filterArrayByCategory(Projects, 3), 12), state: "3.0"})
                  else
                    setProjectFilterState({array: SegmentedProjects, state: ""})
                }}>
                  <Trans>Projects.category.special.default</Trans>
                </button>
                <div className='mx-2'>
                  {ProjectFilterState.state.includes('3.') && SpeCategories.map((item) => (item !== SpeCategories[0] ? item : null))}
                </div>
              </div>
            </div>
  
          </Html>
        </Plane>
      </>
      
      }
      <Earth NormalizedMouse={Mouse} /> 

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