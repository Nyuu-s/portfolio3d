import React , { useRef, useState, useEffect } from 'react'
import { Main} from './'
import {MdFlashlightOff, MdFlashlightOn} from 'react-icons/md'
import { useToggleTheme, useTheme } from '../Context/ContextZustand'
import gsap from 'gsap'

import {useLocation, Route, Switch} from 'wouter'
import { Projects } from '../data/project'
import { Logo, NavButton } from '../Components'
import {GiHamburgerMenu as BurgerIcon}  from 'react-icons/gi'
import {TiHome as HomeIcon}  from 'react-icons/ti'
import {animateScroll as scroll} from 'react-scroll'

// WEIRD BEHAVIOUR ON NAVIGATION BETWEEN ROUTES
// const setupAsscroll = () => {
//   // https://github.com/ashthornton/asscroll
//   const asscroll = new ASScroll({ 
    
//     disableRaf: true });

    
//   gsap.ticker.add(asscroll.update);

//   ScrollTrigger.defaults({
//     scroller: asscroll.containerElement });


//   ScrollTrigger.scrollerProxy(asscroll.containerElement, {
//     scrollTop(value) {
//       return arguments.length ? asscroll.currentPos = value : asscroll.currentPos;
//     },
//     getBoundingClientRect() {
//       return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
    
//     });

 
//   asscroll.on("update", ScrollTrigger.update);
//   ScrollTrigger.addEventListener("refresh", asscroll.resize);
  
    
//   requestAnimationFrame(() => {
//     asscroll.enable({
//       newScrollElements: document.querySelectorAll(".gsap-marker-start, .gsap-marker-end, [asscroll]") });

//   });
//   return asscroll;
// }



function LandingPage(props) {

  const bSlide = useRef()
  const page = useRef()
  const logo = useRef()
  const asscrollRef = useRef()
  const timeLine = useRef()
  const toggleTheme = useToggleTheme()  
  const [NavbarDeploy, setNavbarDeploy] = useState(false)
  const {mode} = useTheme()
  const [location, setLocation] = useLocation();
  const [section, setSection] = useState('.page')
  const [isReady, setIsReady] = useState(false)



  useEffect(() => {
    let ctx =  gsap.context(() => {
      if(isReady){
        timeLine.current = gsap.timeline()
        .to('.menuItem', {yPercent: -100, stagger: 0.1, duration: 1})
        .to('.toggle-bar', {backgroundColor: "rgba(0,0,0,0)", duration: 1}, '<')
        .pause()
      }

      
    })
    setTimeout(() => {
      setIsReady(true)
    }, 500);

    return () => {
      ctx.revert()
    }
  }, [isReady]) 




  

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
  


      <div ref={page} onScroll={() => {setSection('undefined')}} className=' w-full h-full overflow-y-scroll scrollbar-hide   page' asscroll-container="true">
          {isReady && <div className='toggle-bar bg-main-dark-bg bg-opacity-60  dark:bg-opacity-100  fixed flex  w-full top-0  z-50'>
            <div className='flex w-full items-center'>
            <div ref={logo} className='ml-5 z-20'>
              
              <Logo icon={<BurgerIcon size={20}/>} clickFunc={() => {
                NavbarDeploy ? setNavbarDeploy(false) : setNavbarDeploy(true)
                console.log(NavbarDeploy);
              }}/> 
            </div>
 
            <div className='menuItems flex   w-full ml-3'>

              <NavButton title={<HomeIcon size={35}/>} clickFunc={() => {
                    defaultBehaviour()
                }}/>
              
              <NavButton title={'About me'}  clickFunc={() => {
                
                setLocation('/')
                setSection('.aboutSection')
       
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
                <NavButton title={'Projects'}  clickFunc={() => {
                
                  setLocation('/projects')
                  
                
                  // setSection('.page')
                  }}/>
             

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
            </div>
              
            

          </div>}
     

          <Switch>

            <Route path='/'>
              {
                () => {
                 
                  
                  return(<Main pageRef={page} Section={section} Asscroll={asscrollRef}  />)

                }
                  
                
              }
            </Route>

            <Route path='/projects/:id'>
              {(params) => {
                
                return(
                  Projects[params.id]
                )
              }}
            </Route>
          </Switch>

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