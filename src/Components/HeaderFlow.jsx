import React, { useRef , useLayoutEffect, useState} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useToggleTheme, useTheme } from '../Context/ContextZustand'

function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }
  

function HeaderFlow({colorText1, colorText2, bgClassColor1, bgClassColor2, bgClassDarkColor1, bgClassDarkColor2, flowDirection='left', text1, text2, colorTextDark1, colorTextDark2, perspective = '100px', speed='slow'}) {
    gsap.registerPlugin(ScrollTrigger)
    const theme = useTheme()

  


    var innerBox = `w-full  h-[80px] text-[4em] font-bold whitespace-nowrap overflow-hidden  `
   
    const boxStyleRight = {transformOrigin: "left", transform:  `perspective(${perspective}) rotateY(15deg)`,  backgroundColor: bgClassColor1, color: colorText1}
    const boxStyleLeft = {transformOrigin: "right", transform:  `perspective(${perspective}) rotateY(-15deg)`, backgroundColor: bgClassColor2, color: colorText2}
    const boxStyleDarkRight = {transformOrigin: "left", transform:  `perspective(${perspective}) rotateY(15deg)`,  backgroundColor: bgClassDarkColor1, color: colorTextDark1}
    const boxStyleDarkLeft = {transformOrigin: "right", transform:  `perspective(${perspective}) rotateY(-15deg)`, backgroundColor: bgClassDarkColor2, color: colorTextDark2}
 
    
    const Boxcontainer = useRef()
    const boxElement = useRef()

    const [width, setWidth] = useState(0)
    const [parentWidth, setParentWidth] = useState(0)
    useLayoutEffect(() => {
        //re render on resize to recalc animation borders
        setWidth(boxElement.current?.offsetWidth)
        setParentWidth(boxElement.current?.parentElement.offsetWidth)
        const  debouncedHandleResize = debounce(() => {
            setWidth(boxElement.current?.offsetWidth)
            setParentWidth(boxElement.current?.parentElement.offsetWidth)
        }, 1000)
        window.addEventListener('resize', debouncedHandleResize)

        //gsap animation context
      let ctx = gsap.context(() => {
        switch (flowDirection) {
          case 'right':
            gsap.fromTo(boxElement.current, {x:-parentWidth},  {
              x: (parentWidth + width), duration: 5.0, repeat: -1, ease:'none'} ) 
            gsap.fromTo('.boxy', {x: -parentWidth }, {
            x: (parentWidth +  width) , duration: 5.0, delay:1.8, repeat: -1, ease:'none'}) 
            break;
        
          default:
            gsap.fromTo(boxElement.current, {x:parentWidth},  {
              x: -(parentWidth + width),  delay:1.7, duration: 5.0, repeat: -1, ease:'none'} ) 
            gsap.fromTo('.boxy', {x: parentWidth }, {
            x: -(parentWidth +  width) , duration: 5.0, repeat: -1, ease:'none'}) 
            break;
        }


      }, Boxcontainer)
     
      return () => {
        ctx.revert() 
        window.removeEventListener('resize', debouncedHandleResize)
      } 
    }, [parentWidth, flowDirection, width])  

   
      
  return (
    <>
    <div>
        <div id="box" ref={Boxcontainer} className='flex'>    
            <div id='inner'  style={theme.mode === 'dark' ? boxStyleDarkLeft : boxStyleLeft} className={innerBox }>
                <span ref={boxElement} className='text-2xl mt-5 block box'>{text2}</span>  
            </div>
            <div id='inner' style={theme.mode === 'dark' ? boxStyleDarkRight : boxStyleRight} className={innerBox + '' }> 
                <span  className='text-2xl mt-5 block boxy '>{text1}</span>
            </div>  
        </div>
    </div>
      
    </>

  )
}

export default HeaderFlow