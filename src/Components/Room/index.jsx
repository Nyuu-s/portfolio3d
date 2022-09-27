import React , { useEffect } from 'react'
import ScreenTexture from "../../assets/textures/screen_video.mp4"
import * as THREE from 'three'
import RoomModel from '../../assets/models/portfolio-room-arcade.glb'
import { useAnimations, useGLTF, useVideoTexture} from '@react-three/drei'
import { useRef } from 'react'



function Room() {
  
  const room = useGLTF(RoomModel)
  
  const PCvideo = useVideoTexture(ScreenTexture)
  const PCScreen = useRef(room.scene.children[room.scene.children.findIndex((value) => value.name === 'screen001')])
  const Tesseract = useRef(room.scene.children[room.scene.children.findIndex((value) => value.name === 'Cube099')])
  const animation = useAnimations(room.animations, Tesseract)
    console.log(room);
    useEffect(() => {

      room.scene.scale.set(0.11, 0.11, 0.11)
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
      animation.actions['Cube.099Action.001']?.play()
    }, [PCvideo])
    
  return (
        <>  

              
              <primitive object={room.scene} ></primitive>

          

        
        </>
  )
}

export default Room