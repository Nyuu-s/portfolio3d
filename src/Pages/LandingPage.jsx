import React , { useRef, useState, useEffect, useMemo, useLayoutEffect } from 'react'
import {About, Contact, CV, Main} from './'
import * as THREE  from 'three'
import { useThree } from '@react-three/fiber'
import {MdFlashlightOff, MdFlashlightOn} from 'react-icons/md'
import { useToggleTheme, useTheme } from '../Context/ContextZustand'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import {useLocation, Route, Redirect} from 'wouter'
import { Projects } from '../data/project'
import { Logo, NavButton } from '../Components'
import {GiHamburgerMenu as BurgerIcon}  from 'react-icons/gi'
import {TiHome as HomeIcon}  from 'react-icons/ti'
import {Link, scroller, animateScroll as scroll} from 'react-scroll'




function LandingPage(props) {
  gsap.registerPlugin(ScrollTrigger)
  const bSlide = useRef()
  const page = useRef()
  const logo = useRef()
  const timeLine = useRef()
  const toggleTheme = useToggleTheme()  
  const [NavbarDeploy, setNavbarDeploy] = useState(false)
  const {mode} = useTheme()
  const [location, setLocation] = useLocation();
  const [section, setSection] = useState('.page')
  let sectionProp 

  useEffect(() => {
    sectionProp = section
    let ctx = gsap.context(() => {
      timeLine.current = gsap.timeline().to('.menuItem', {yPercent: -200, stagger: 0.2,  duration: 1.5})
    })
   
    return () => {
      ctx.revert()
    }
  }, [])
  
  useEffect(() => {
    setSection(sectionProp)
  

  }, [location])
  

  useEffect(() => {
    if(timeLine.current){
      NavbarDeploy ? timeLine.current.play() : timeLine.current.reverse()
    }
  }, [NavbarDeploy])

  const defaultBehaviour = () => {
    if(location !== '/')
      setLocation('/')
    scroll.scrollToTop()
    setSection('.page')
  }

  return (
  
    
      <div ref={page} className='z-10 w-full h-full overflow-y-scroll scrollbar-hide  page' asscroll-container="true">
          <div className='toggle-bar fixed flex  w-full top-2  z-50'>
            <div className='flex w-full items-center'>
            <div ref={logo} className='ml-5 z-20'>
              
              <Logo icon={<BurgerIcon size={20}/>} clickFunc={() => {
                  
                  NavbarDeploy ? setNavbarDeploy(false) : setNavbarDeploy(true)
              }}/> 
            </div>
 
            <div className='menuItems flex w-full ml-3'>

              <NavButton title={<HomeIcon size={35}/>} clickFunc={() => {
                    defaultBehaviour()
                }}/>
              
              <NavButton title={'About me'} clickFunc={() => {
                  // setSection('.aboutSection')
                  if(location !== '/'){
                     setLocation('/')
                  }
                  
                  //scroll to section
                }}/>
              
                <NavButton title={'Contact'}  clickFunc={() => {
                  if(location !== '/')
                  setLocation('/')
                  
                  setSection('.ContactSection')
                  //scroll to section
                }}/>
                <NavButton title={'CV'}  clickFunc={() => {
                  if(location !== '/')
                      setLocation('/')
                      
                      setSection('.CVSection')
                    //scroll to section
                  }}/>
                <NavButton title={'Projects'} clickFunc={() => {
                  setLocation('/projects')
                  // setSection('.page')
                  }}/>
             
            </div>
              

            </div>
            

            <div className="menuItem flex mr-2 justify-end items-center top-12 right-12 z-50">
              
          
              <div className="sun"> 
                <MdFlashlightOn />
              </div>
              <button onClick={() => { 
                                        toggleTheme()
                                        }} className='group cursor-pointer relative w-[56px] h-7 flex justify-center items-center bg-pink-400 rounded-full mx-4 border-none shadow-lg'>
                <div ref={bSlide}   className={`circle ${mode === 'dark' ? 'slide' : ''} absolute  left-[6px] rounded-[50%] w-5 h-5 bg-secondary-dark-bg dark:bg-white group-hover:scale-90`}></div>
              </button>
              <div className="moon"> 
                <MdFlashlightOff />
              </div> 
            </div>
          </div>
     


          <Route path='/'>
            <Main pageRef={page} Section={section} />
          </Route>

          <Route path='/projects/:id'>
            {(params) => {
              return(
                Projects[params.id]
              )
            }}
          </Route>

{/*     
      <Routes>
          <Route path="/" element={<Main pageRef={page} />}/>
          <Route path="/projects" element={<ProjectsGrid visible={false}/>}/>
          <Route path="/projects/:id" element={<Proj />}/>
      </Routes> */}


      </div>
    
    

  )
}

export default LandingPage