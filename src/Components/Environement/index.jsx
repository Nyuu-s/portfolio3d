import React, {useEffect, useRef} from 'react'
import useStore , {useTheme} from '../../Context/ContextZustand'
import gsap from 'gsap'




function Environement() {
  
  let theme = useTheme()
  const ambiantLight = useRef()
  const dirLight = useRef()
  
  const setLights = useStore((state) => state.setLights)

  

  useEffect(() => {
    setLights(ambiantLight, dirLight)
  

  }, [setLights])
  
   
  useEffect(() => {
    if(theme.mode === 'light'){
      gsap.to(ambiantLight.current.color, {r: 1, g:1, b:1})
      gsap.to(ambiantLight.current, {intensity: 0.5})
      gsap.to(dirLight.current.color, {r: 1, g:0.4, b:0.3})

    }
    else
    {
      gsap.to(ambiantLight.current.color, {r: 51/255, g:51/255, b:51/255})
      gsap.to(ambiantLight.current, {intensity: 0.08})
      gsap.to(dirLight.current.color, {r: 51/255, g:51/255, b:90/255})

    }
     
  }, [theme])

  return (
    <>
    
        <directionalLight
        ref={dirLight}
        castShadow
        
        shadowCameraFar
        shadow-camera-far={20}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-normalBias={0.05}
        position={[-1.5,7,3]}

        />
      <ambientLight 
      ref={ambiantLight}
      
      intensity={0.8}
      />



    
    </>
  )
}

export default Environement