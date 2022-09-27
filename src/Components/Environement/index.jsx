import React from 'react'


function Environement() {
  return (
    <>
    
        <directionalLight
        castShadow
        color={"#fff"}
        shadowCameraFar
        shadow-camera-far={20}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-normalBias={0.05}
        position={[1.5,7,3]}
        
        />
      <ambientLight 
      color={'#fff'}
      intensity={0.8}
      />


    
    </>
  )
}

export default Environement