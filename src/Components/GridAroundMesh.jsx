import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Grid({ mesh, size = 10, spacing = 1 }) {
  const groupRef = useRef()

  useFrame((state) => {
    groupRef.current.position.copy(mesh.current.position)
  })

  const planes = []
  for (let i = -size / 2; i < size / 2; i += spacing) {
    for (let j = -size / 2; j < size / 2; j += spacing) {
      planes.push(
        <mesh key={`plane-${i}-${j}`} onClick={() => console.log(`Clicked plane at ${i}, ${j}`)}>
          <planeBufferGeometry />
          <meshStandardMaterial color={'white'} />
        </mesh>
      )
    }
  }

  return (
    <group ref={groupRef}>
      {planes}
    </group>
  )
}

export default Grid