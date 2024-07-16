/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree }  from '@react-three/fiber'
import { a } from '@react-spring/three'

import islandScene from '../assets/3d/island.glb'

const Island = (props) => {
    const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);
  return (
    <a.group ref={islandRef} {...props}>
      <group position={[-1.141, 0.756, -5.711]} rotation={[-Math.PI, 1.23, -Math.PI]} scale={0.01}>
        <mesh
          geometry={nodes.car_lambert1_0.geometry}
          material={materials['Material.013']}
        />
        <mesh
          geometry={nodes.car_lambert1_0_1.geometry}
          material={materials['Material.017']}
        />
        <mesh
          geometry={nodes.car_lambert1_0_2.geometry}
          material={materials['Material.018']}
        />
        <mesh
          geometry={nodes.car_lambert1_0_3.geometry}
          material={materials['Material.019']}
        />
        <mesh
          geometry={nodes.car_lambert1_0_4.geometry}
          material={materials['Material.020']}
        />
      </group>
      <group position={[2.284, 0.844, 5.417]} rotation={[0, 0.383, 0]} scale={0.496}>
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.base}
          position={[-1.095, 0, 0.309]}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.base}
          position={[0.864, 0, -1.493]}
        />
        <mesh

          geometry={nodes.Object_14.geometry}
          material={materials.base}
          position={[-0.241, 0.102, 0.662]}
        />
        <mesh

          geometry={nodes.Object_18.geometry}
          material={materials.base}
          position={[-0.05, 0.087, -0.573]}
        />
        <mesh

          geometry={nodes.Object_6.geometry}
          material={materials.base}
          position={[-0.241, 0.102, 0.662]}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials['Material.025']}
          position={[-0.099, 0.884, -0.257]}
          scale={1.002}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.base}
          position={[-0.135, 1.001, -0.781]}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.base}
          position={[0.82, 0.096, 0.29]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.base}
          position={[0.82, 0.096, 0.29]}
        />
      </group>
      <group position={[0.554, 0, -0.102]}>
        <mesh
          geometry={nodes.Chain_Chain_0.geometry}
          material={materials['Material.024']}
          position={[-6.074, 1.277, 0.118]}
          rotation={[-Math.PI, 1.214, -Math.PI]}
          scale={0.331}
        />
        <mesh
          geometry={nodes.Frame_Frame_0.geometry}
          material={materials['Material.023']}
          position={[-6.074, 1.277, 0.118]}
          rotation={[-Math.PI, 1.214, -Math.PI]}
          scale={0.331}
        />
        <mesh
          geometry={nodes.Handlebars_Handlebars_0.geometry}
          material={materials['Material.022']}
          position={[-6.074, 1.277, 0.118]}
          rotation={[-Math.PI, 1.214, -Math.PI]}
          scale={0.331}
        />
        <mesh
          geometry={nodes.Rims_Rims_0.geometry}
          material={materials['Material.021']}
          position={[-6.074, 1.277, 0.118]}
          rotation={[-Math.PI, 1.214, -Math.PI]}
          scale={0.331}
        />
        <mesh
          geometry={nodes.Saddle_Saddle_0.geometry}
          material={materials['Material.012']}
          position={[-6.074, 1.277, 0.118]}
          rotation={[-Math.PI, 1.214, -Math.PI]}
          scale={0.331}
        />
        <mesh
          geometry={nodes.Spokes_Spokes_0.geometry}
          material={materials.Spokes}
          position={[-6.074, 1.277, 0.118]}
          rotation={[-Math.PI, 1.214, -Math.PI]}
          scale={0.331}
        />
        <mesh
          geometry={nodes.Tyres_Tyres_0.geometry}
          material={materials.Tyres}
          position={[-6.074, 1.277, 0.118]}
          rotation={[-Math.PI, 1.214, -Math.PI]}
          scale={0.331}
        />
      </group>
      <group scale={[3, 0.544, 3]}>
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={materials['Material.001']}
        />
      </group>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials['Material.002']}
        position={[-0.047, 0.898, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-4.2, -1, -1.182]}
      />
      <group position={[-3.231, 1.11, 3.027]} rotation={[0, 0.477, 0]} scale={0.134}>
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={materials.Material}
        />
      </group>
      <group position={[-3.406, 1.063, 2.313]} rotation={[0, -0.195, 0]} scale={0.082}>
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Cube003_2.geometry}
          material={materials.Material}
        />
      </group>
      <group position={[-2.344, 1.091, 3.603]} rotation={[0, -0.808, 0]} scale={0.092}>
        <mesh
          geometry={nodes.Cube004_1.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Cube004_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        position={[-2.459, 1.13, 2.616]}
        rotation={[0, 0.263, 0]}
        scale={[0.077, 0.057, 0.077]}>
        <mesh
          geometry={nodes.Cube005_1.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Cube005_2.geometry}
          material={materials.Material}
        />
      </group>
      <mesh
        geometry={nodes.Icosphere.geometry}
        material={materials['Material.005']}
        position={[-3.292, 1.31, -3.379]}
        rotation={[0, 0.741, 0]}
        scale={-0.249}
      />
      <mesh
        geometry={nodes.Icosphere001.geometry}
        material={materials['Material.005']}
        position={[-3.419, 1.321, -3.072]}
        rotation={[0, -1.32, 0]}
        scale={-0.146}
      />
      <mesh
        geometry={nodes.Icosphere002.geometry}
        material={materials['Material.005']}
        position={[-3.375, 0.988, -2.808]}
        rotation={[Math.PI, -1.505, Math.PI]}
        scale={-0.348}
      />
      <mesh
        geometry={nodes.Icosphere003.geometry}
        material={materials['Material.005']}
        position={[-3.357, 1.185, -2.372]}
        scale={[-0.416, -1.036, -0.416]}
      />
      <group position={[-1.666, 1.049, -3.102]} rotation={[0, -0.336, 0]} scale={0.149}>
        <mesh
          geometry={nodes.Cube006_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Cube006_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        position={[-2.343, 0.978, -1.233]}
        rotation={[0, -0.511, 0]}
        scale={[0.134, 0.172, 0.134]}>
        <mesh
          geometry={nodes.Cube007_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Cube007_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        position={[-3.788, 1.063, -1.224]}
        rotation={[0, -1.32, 0]}
        scale={[0.134, 0.088, 0.134]}>
        <mesh
          geometry={nodes.Cube008_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Cube008_2.geometry}
          material={materials.Material}
        />
      </group>
      <group position={[-2.352, 1.21, -3.6]} rotation={[0, 0.505, 0]} scale={0.099}>
        <mesh
          geometry={nodes.Cube009_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Cube009_2.geometry}
          material={materials.Material}
        />
      </group>
      <group position={[-1.645, 1.04, -2.113]} rotation={[0, -0.195, 0]} scale={0.082}>
        <mesh
          geometry={nodes.Cube010_1.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Cube010_2.geometry}
          material={materials.Material}
        />
      </group>
      <group
        position={[3.638, 1.176, 1.251]}
        rotation={[0, -0.342, 0]}
        scale={[0.083, 0.084, 0.083]}>
        <mesh
          geometry={nodes.Cube011_1.geometry}
          material={materials['Material.007']}
        />
        <mesh
          geometry={nodes.Cube011_2.geometry}
          material={materials['Material.006']}
        />
      </group>
      <group position={[2.264, 2.374, -3.51]} rotation={[0.06, -0.094, 0.203]} scale={0.315}>
        <mesh
          geometry={nodes.Icosphere007_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Icosphere007_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Icosphere007_3.geometry}
          material={materials['Material.006']}
        />
      </group>
      <group position={[0.92, 2.029, -2.445]} rotation={[2.782, 1.4, -2.59]} scale={0.205}>
        <mesh
          geometry={nodes.Icosphere009_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          
          
          geometry={nodes.Icosphere009_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          geometry={nodes.Icosphere009_3.geometry}
          material={materials['Material.006']}
        />
      </group>
      <mesh
        geometry={nodes.Icosphere005.geometry}
        material={materials['Material.003']}
        position={[-2.771, 1.058, -2.228]}
        scale={-0.181}
      />
      <mesh
        geometry={nodes.Icosphere006.geometry}
        material={materials['Material.003']}
        position={[-2.562, 0.973, -1.941]}
        rotation={[0, -0.516, 0]}
        scale={-0.227}
      />
      <mesh
        geometry={nodes.Icosphere008.geometry}
        material={materials['Material.003']}
        position={[-2.55, 0.977, -2.896]}
        rotation={[0, -0.516, 0]}
        scale={-0.227}
      />
      <mesh
        geometry={nodes.Icosphere009.geometry}
        material={materials['Material.003']}
        position={[-2.956, 1.174, -3.509]}
        rotation={[0, 0.058, 0]}
        scale={-0.172}
      />
      <mesh
        geometry={nodes.Icosphere010.geometry}
        material={materials['Material.003']}
        position={[-3.134, 1.02, -1.329]}
        rotation={[0, -0.516, 0]}
        scale={-0.152}
      />
      <mesh
        geometry={nodes.Icosphere011.geometry}
        material={materials['Material.003']}
        position={[2.14, 1.009, -2.927]}
        rotation={[0, -0.516, 0]}
        scale={-0.227}
      />
      <mesh
        geometry={nodes.Icosphere012.geometry}
        material={materials['Material.003']}
        position={[1.567, 1.056, -2.314]}
        rotation={[0, -0.516, 0]}
        scale={-0.152}
      />
      <mesh
        geometry={nodes.Icosphere013.geometry}
        material={materials['Material.003']}
        position={[2.705, 1.021, -3.779]}
        rotation={[0, 0.876, 0]}
        scale={-0.227}
      />
      <mesh
        geometry={nodes.Icosphere014.geometry}
        material={materials['Material.003']}
        position={[3.206, 1.068, -3.106]}
        rotation={[0, 0.876, 0]}
        scale={-0.152}
      />
      <mesh
        geometry={nodes.Icosphere015.geometry}
        material={materials['Material.003']}
        position={[1.548, 1.094, -2.943]}
        rotation={[Math.PI, -0.981, Math.PI]}
        scale={-0.227}
      />
      <mesh
        geometry={nodes.Icosphere016.geometry}
        material={nodes.Icosphere016.material}
        position={[-2.05, 0.856, 0.626]}
        scale={0.176}
      />
      <mesh
        geometry={nodes.Icosphere017.geometry}
        material={nodes.Icosphere017.material}
        position={[-1.484, 0.834, 0.171]}
        scale={0.257}
      />
      <mesh
        geometry={nodes.Icosphere018.geometry}
        material={nodes.Icosphere018.material}
        position={[-1.825, 0.741, -0.502]}
        rotation={[0, 1.419, 0]}
        scale={0.257}
      />
      <mesh
        geometry={nodes.Icosphere019.geometry}
        material={nodes.Icosphere019.material}
        position={[0.977, 0.85, -0.42]}
        scale={0.257}
      />
      <mesh
        geometry={nodes.Icosphere020.geometry}
        material={nodes.Icosphere020.material}
        position={[2.87, 0.637, -0.127]}
        rotation={[-0.676, 0.363, 2.785]}
        scale={0.219}
      />
      <mesh
        geometry={nodes.Icosphere021.geometry}
        material={nodes.Icosphere021.material}
        position={[1.779, 0.814, 0.546]}
        rotation={[0.017, 0.715, -0.009]}
        scale={0.176}
      />
      <mesh
        geometry={nodes.Icosphere022.geometry}
        material={nodes.Icosphere022.material}
        position={[1.908, 0.799, -0.169]}
        rotation={[0.017, 0.715, -0.009]}
        scale={0.257}
      />
      <mesh
        geometry={nodes.Circle.geometry}
        material={materials['Material.008']}
        position={[1.62, 1.289, 2.734]}
      />
      <mesh
        geometry={nodes.Icosphere023.geometry}
        material={nodes.Icosphere023.material}
        position={[3.547, 1.238, 1.809]}
        rotation={[0, 0.469, 0]}
        scale={0.116}
      />
      <mesh
        geometry={nodes.Icosphere024.geometry}
        material={nodes.Icosphere024.material}
        position={[3.27, 1.258, 1.606]}
        rotation={[-Math.PI, 1.253, -Math.PI]}
        scale={0.116}
      />
      <group position={[1.418, 1.336, 2.318]} rotation={[0.007, 0.313, 0.024]} scale={0.134}>
        <mesh
          geometry={nodes.Plane012_1.geometry}
          material={materials['Material.009']}
        />
        <mesh
          geometry={nodes.Plane012_2.geometry}
          material={materials['Material.010']}
        />
      </group>
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials['Material.011']}
        position={[1.555, 1.534, 2.745]}
        rotation={[0.048, -0.367, -1.442]}
        scale={0.188}
      />
      <mesh
        geometry={nodes.Circle001.geometry}
        material={materials['Material.006']}
        position={[0, 0.826, 0]}
        scale={[7.932, 7.143, 7.932]}
      />
      <group position={[5.608, 0.832, -3.037]} rotation={[0, 0.302, 0]}>
        <mesh
          geometry={nodes.Cube012_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube012_2.geometry}
          material={materials['Material.001']}
        />
      </group>
      <group position={[-1.243, 0.832, -5.955]} rotation={[0, 0.17, 0]}>
        <mesh
          geometry={nodes.Cube014_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube014_2.geometry}
          material={materials['Material.001']}
        />
      </group>
      <group position={[-6.251, 0.832, 0.072]} rotation={[0, -0.016, 0]}>
        <mesh
          geometry={nodes.Cube015_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube015_2.geometry}
          material={materials['Material.001']}
        />
      </group>
      <group position={[2.374, 0.832, 5.753]} rotation={[0, 0.386, 0]}>
        <mesh
          geometry={nodes.Cube016.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube016_1.geometry}
          material={materials['Material.001']}
        />
      </group>
      <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-5.518, 0.795, 0.037]}
        rotation={[0, 0.341, 0]}
        scale={[0.422, 0.767, 0.733]}
      />
      <group position={[5.14, 1.096, -3.164]} rotation={[-1.564, 0.003, 0.386]} scale={0.136}>
        <mesh
          geometry={nodes.Cube_0_1.geometry}
          material={materials['Material.006']}
        />
        <mesh
          geometry={nodes.Cube_0_2.geometry}
          material={materials['Material.014']}
        />
        <mesh
          geometry={nodes.Cube_0_3.geometry}
          material={materials['Material.015']}
        />
        <mesh
          geometry={nodes.Cube_0_4.geometry}
          material={materials['Material.003']}
        />
        <mesh
          geometry={nodes.Cube_0_5.geometry}
          material={materials['Material.016']}
        />
      </group>
    </a.group>
  )
}

export default Island;