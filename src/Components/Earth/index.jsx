import React from 'react'

function Earth(props) {
  return <>
    <mesh>
        <sphereGeometry args={[1, 32, 32]}/>
        <meshPhongMaterial  color="red"/>

    </mesh>
  
  </>
}

export default Earth