import { useRef, useEffect } from 'react'

import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

//Model from https://sketchfab.com/3d-models/birds-3a9bb97be78944f9bffc23fb25c2154e

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions['Scene'].play();
  }, [])

  useFrame(({ clock, camera }) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if(birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if(birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }

    if(birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  })

  return (
    <mesh position={[-5, 2, 1]} scale={[0.5, 0.5, 0.5]} ref={birdRef}>
       <primitive object={scene} /> 
    </mesh>
  )
}

export default Bird