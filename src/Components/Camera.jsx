import React, {useEffect, useRef } from 'react'
import { OrthographicCamera, PerspectiveCamera, } from '@react-three/drei'
import useStore from '../Context/ContextZustand';



 

function Camera(props) {
    const ref = useRef()
    const setCam = useStore((state) => state.setCamera)
   
  
   useEffect(() => {
     setCam(ref)
   }, [setCam])

    return(
        <> 
        {props.perspective ? 
            <PerspectiveCamera  
            makeDefault={props.default}
            ref={ref} 
            position={props.position}
            scale={props.scale}
            far={10000}
            near={1}
            rotation={props.rotation}
            aspect={window.innerWidth / window.innerHeight}
            fov={45}
            
        
            
            />
    
    :
    <OrthographicCamera  
    makeDefault={props.default}
    ref={ref} 
    position={props.position}
    scale={props.scale}
    far={props.far}
    near={props.near}
    rotation={props.rotation}
    

    
    />
    }
  

            
        
        </>
    )
}

export default Camera