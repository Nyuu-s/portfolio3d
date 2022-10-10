import React , { useEffect } from 'react'
import ScreenTexture from "../../assets/textures/screen_video.mp4"
import ArcadeScreenTexture from "../../assets/textures/arcade_video.mp4"
import TextureNoise1 from "../../assets/textures/screen_noise1.mp4"
import TextureNoise2 from "../../assets/textures/screen_noise2.mp4"
import * as THREE from 'three'
import RoomModel from '../../assets/models/portfolio-room-arcade.glb'
import { useAnimations, useGLTF, useVideoTexture} from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {useSetRoom} from "../../Context/ContextZustand"

import gsap from 'gsap'

const findMesh = (scene, name) => {
  
    return (scene.children[scene.children.findIndex((value) => value.name === name)])
}
var  lerp = {
  currentX : 0,
  targetX: 0,
  currentY : 0,
  targetY: 0,
  ease: 0.1 
}
window.addEventListener('mousemove', (e) => {
    var rotationX = ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth
    var rotationY = ((e.clientY - window.innerHeight / 2) * 2) / window.innerHeight
    lerp.targetX = rotationX * 0.05
    lerp.targetY = rotationY * 0.05
    
})

function Room() {
  // softShadows()
  const room = useGLTF(RoomModel)
 
  const PCvideo = useVideoTexture(ScreenTexture)
  const Arcadevideo = useVideoTexture(ArcadeScreenTexture)
  const PCNoise = useVideoTexture(TextureNoise1)
  const ArcadeNoise = useVideoTexture(TextureNoise2)
  const PCScreen = useRef(findMesh(room.scene, "screen001" ))
  const ArcadeScreen = useRef(findMesh(room.scene, "arcadeScreen001"))
  const Tesseract = useRef(findMesh(room.scene, 'Cube099'))
  const animation = useAnimations(room.animations, Tesseract)


    useFrame(() => {
      room.scene.rotation.y = lerp.currentX
      lerp.currentX = gsap.utils.interpolate(lerp.currentX, lerp.targetX, lerp.ease)
      room.scene.rotation.x = lerp.currentY
      lerp.currentY = gsap.utils.interpolate(lerp.currentY, lerp.targetY, lerp.ease)
    })

    useEffect(() => {
      
      console.log(PCScreen);
      room.scene.scale.set(0.21, 0.21, 0.21)
      room.scene.position.set(0,-1,0)
      room.scene.children.forEach( child => {

        if(child instanceof THREE.Group){
          child.children.forEach((groupchild) => {
            groupchild.castShadow = true
            groupchild.receiveShadow = true 
        })
        }
        else
        {
          child.castShadow = true
          child.receiveShadow = true
        }

      })
    }, [room.scene, PCvideo])

    
    useEffect(() => {
      PCScreen.current.material = new THREE.MeshBasicMaterial({map: PCvideo})
      ArcadeScreen.current.material = new THREE.MeshBasicMaterial({map: Arcadevideo})
      animation.actions['Cube.099Action.001']?.play()
    }, [PCvideo, Arcadevideo, animation.actions])

    const roomRef = useRef()
    useSetRoom(room.scene)
    
  return (
        <>  

              
              <primitive ref={roomRef} object={room.scene}  ></primitive>

          

        
        </>
  )
}

export default Room