import { useRef } from 'react'

import eagleScene from '../assets/3d/eagle.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Eagle = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(eagleScene);
  const { actions } = useAnimations(animations, ref);

  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Eagle