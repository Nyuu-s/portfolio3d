import React, { useRef } from 'react'
import * as THREE from 'three'
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import EarthNightMap from "../../assets/textures/8k_earth_nightmap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import {OrbitControls, Stars} from '@react-three/drei'


function Earth(props) {

  const [colorMap, nightMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNightMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const light = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 20;
    cloudsRef.current.rotation.y = elapsedTime / 40;
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
      <Stars
        radius={300}
        depth={60}
        count={2000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[0, 0, 3]}  >
      <sphereGeometry args={[1.005, 512, 512]} rotateZ={3.14}/>
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 512, 512]} />
        <meshPhongMaterial specularMap={specularMap} />*
        
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.5}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}

export default Earth