import React , { useRef, useState, useEffect } from 'react'
import { Main} from './'
import { BsLightbulb as Flashon, BsLightbulbOff as Flashoff} from 'react-icons/bs'
import useStore, { useToggleTheme, useTheme }  from '../Context/ContextZustand'
import gsap from 'gsap'

import {useLocation, Route, Switch} from 'wouter'
import { Trans, useTranslation } from 'react-i18next'
import { Logo, NavButton } from '../Components'
import {GiHamburgerMenu as BurgerIcon}  from 'react-icons/gi'
import {TiHome as HomeIcon}  from 'react-icons/ti'
import {animateScroll as scroll} from 'react-scroll'
import { Projects } from '../data/project'


function LandingPage(props) {
  const Menu = useRef()
  const bSlide = useRef()
  const page = useRef()
  const logo = useRef()
  const asscrollRef = useRef()
  const toggleTheme = useToggleTheme()  
  const [NavbarDeploy, setNavbarDeploy] = useState(false)
  const {mode} = useTheme()
  const {lang, setLang} = useStore()
  const [location, setLocation] = useLocation();
  const [section, setSection] = useState('.page')
  const {i18n} = useTranslation()

  



  const toggleNav = () => {
    setNavbarDeploy(!NavbarDeploy); 
}

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang, i18n])
  

  useEffect(() => {

    if(Menu.current)
    {
     
      const menuItems = Menu.current.children;
      
      const mq = window.matchMedia("(min-width: 768px)");
      if(mq.matches) //Desketop
      {
        if (NavbarDeploy) {
          gsap.set(menuItems, {autoAlpha: 0, x: -50});
          gsap.to(menuItems, {duration: 0.5, autoAlpha: 1, x: 0, stagger: 0.1, ease: "power2.inOut"});
        } else {
            gsap.set(menuItems, {autoAlpha: 0, y: 0});
            gsap.set(menuItems, {autoAlpha: 1, x: 0});
            gsap.to(menuItems, {duration: 0.5, autoAlpha: 0, x: -50, stagger: 0.1, ease: "power2.inOut"});
        }

      } 
      else 
      { // Mobile
        if (NavbarDeploy) {
            gsap.set(menuItems, {autoAlpha: 0, y: -50});
            gsap.set(menuItems, {autoAlpha: 0, x: 0});
            
            gsap.to(menuItems, {duration: 0.5, autoAlpha: 1, y: 0, stagger: 0.1, ease: "power2.inOut"});
        } else {
            gsap.set(menuItems, {autoAlpha: 1, y: 0});
            gsap.to(menuItems, {duration: 0.5, autoAlpha: 0, y: -50, stagger: 0.1, ease: "power2.inOut"});
            
        }
      }
      

    }
    // if(timeLine.current){
    //   NavbarDeploy ? timeLine.current.play() : timeLine.current.reverse()

    // }
  }, [NavbarDeploy])

  const defaultBehaviour = () => {
    if(location !== '/')
      setLocation('/')
    scroll.scrollToTop()
    setSection('.page')
  } 
//text-[#522263]
  return (
  


      <div ref={page} onScroll={() => {setSection('undefined')}} className={`w-full h-full overflow-y-auto scrollbar-hide ${location === 'projects' ? "pointer-events-none" : "pointer-events-auto"}   page`} >
          {<div className='toggle-bar    fixed   w-full top-0  z-20'>
            <div className={`flex  flex-col sm:flex-row ${ NavbarDeploy ?  'bg-main-dark-bg' : 'bg-transparent'  } sm:bg-transparent w-full h-16 pointer-events-auto `}>
              <div ref={logo} className='sm:ml-5 ml-10 z-20  mt-8'>
                
                <Logo  icon={<BurgerIcon className='dark:text-[#fff] text-[#522263]' size={25}/>} clickFunc={() => {
                  // NavbarDeploy ? setNavbarDeploy(false) : setNavbarDeploy(true)
                  toggleNav();
                  
                }}/>  
              </div>
 
            <div ref={Menu} className={`menuItems flex flex-col sm:flex-row gap-8 ${ NavbarDeploy ?  'bg-main-dark-bg' : 'bg-transparent'  } sm:bg-transparent w-full pl-3 pt-5  `}>

              <NavButton title={<HomeIcon className='dark:text-[#fff]  text-[#522263]' size={35}/>} clickFunc={() => {
                    defaultBehaviour()
                }}/>
              
              <NavButton title={<Trans >About.section</Trans>}  clickFunc={() => {
                
                setLocation('/')
                setSection('.aboutSection')
       
                }}/>
              

              <NavButton title={<Trans >Projects.section</Trans>}  clickFunc={() => {
              
                setLocation('/projects')
                
              
                // setSection('.page')
                }}/>
                <NavButton title={'CV'}  clickFunc={() => {
                  if(location !== '/')
                      setLocation('/')
                      
                      setSection('.CVSection')
                    //scroll to section
                  }}/>
                <NavButton title={<Trans >Contact.section</Trans>}  clickFunc={() => {
                  if(location !== '/')
                  setLocation('/')
                  
                  setSection('.ContactSection')
                  //scroll to section
                }}/>
                <NavButton title={<img width={35} alt={"language flag"} src={`${lang === 'en' ? '/images/uk.png' : '/images/fr.png'}`}></img>} clickFunc={() => {
                     lang === "en" ? setLang("fr") : setLang("en")
                  }}/>
                <div className="menuItem flex mr-5  items-center py-5 z-50">

                  <div className="sun"> 
                    <Flashon className='dark:text-[#fff] text-[#522263]'size={20}/>
                  </div>
                  <button onClick={() => { 
                                            toggleTheme()
                                            }} className='group cursor-pointer relative w-[56px] h-7 flex justify-center items-center dark:bg-[#0D0D21] bg-[#522263] rounded-full mx-4 border-none shadow-lg'>
                    <div ref={bSlide}   className={`circle ${mode === 'dark' ? 'slide' : ''} absolute  left-[6px] rounded-[50%] w-5 h-5 bg-[#904F87] dark:bg-white group-hover:scale-90`}></div>
                  </button>
                  <div className="moon"> 
                    <Flashoff className='dark:text-[#fff] text-[#522263]' size={20} />
                  </div> 
                </div>
              </div>
            </div>
          </div>}

          <Switch>
            <Route path='/'>
              {
                () => {     
                  return(<Main pageRef={page} Section={section} changeSection={setSection} Asscroll={asscrollRef}  />)
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