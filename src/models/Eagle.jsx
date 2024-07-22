import React from 'react'

import planeScene from '../assets/3d/eagle.glb';
import { useGLTF } from '@react-three/drei';

const Eagle = () => {
  const { scene, animations } = useGLTF(planeScene)

  return (
    <mesh>
        <primitive object={scene} />
    </mesh>
  )
}

export default Eagle