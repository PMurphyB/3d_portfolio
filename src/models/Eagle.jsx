import React from 'react'

import planeScene from '../assets/3d/eagle.glb';
import { useGLTF } from '@react-three/drei';

const Eagle = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(planeScene)

  return (
    <mesh {...props}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Eagle