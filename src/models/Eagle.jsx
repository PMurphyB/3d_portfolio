import { useRef, useEffect } from 'react'

import eagleScene from '../assets/3d/eagle.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

// Model from https://sketchfab.com/3d-models/low-poly-eagle-60578c2b11064a2da915ea899614b0b8#download

const Eagle = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(eagleScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions['Breeze'].play();
  }, [])

  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Eagle