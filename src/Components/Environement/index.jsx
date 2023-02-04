import React, {useEffect, useRef, useMemo} from 'react'
import useStore , {useTheme} from '../../Context/ContextZustand'
import gsap from 'gsap'
import * as THREE from 'three'



function Environement() {
  
  let theme = useTheme()
  const ambiantLight = useRef()
  const dirLight = useRef()
  const lightColor = useMemo(() => new THREE.Color(0xf2e9e4), [])
  const darkColor = useMemo(() =>  new THREE.Color(0x22223b), [])
  const setLights = useStore((state) => state.setLights)

  

  useEffect(() => {
    setLights(ambiantLight, dirLight)
  

  }, [setLights])
  
   
  useEffect(() => {
    
    if(theme.mode === 'light'){
      gsap.to(ambiantLight.current.color, lightColor)
      gsap.to(ambiantLight.current, {intensity: 0.5})
      gsap.to(dirLight.current.color, lightColor)

    }
    else
    {
      gsap.to(ambiantLight.current.color, darkColor)
      gsap.to(ambiantLight.current, {intensity: 2})
      gsap.to(dirLight.current.color, darkColor)

    }
     
  }, [theme, lightColor, darkColor])

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