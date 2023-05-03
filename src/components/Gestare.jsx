import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/EllieWebsiteRedo/gest.gltf')
  return (
    <group {...props} dispose={null} scale={0.8}>
      <group position={[0, 0.06, 0]}>
        <group position={[0, -0.06, 0]}>
          <group scale={[2.54*25, 2.54*25, 2.54*25]}>
            <mesh geometry={nodes.Body1_2.geometry} material={materials.Glass} scale={0.39} />
            <mesh geometry={nodes.Body1.geometry} material={materials['Olive Oil']} scale={[0.4, 0.39, 0.39]} />
          </group>
        </group>
        <group position={[0, -0.02, 0]} scale={0.25}>
          <group position={[2, 0.16, 1.04]} rotation={[0, 0, 0.09]} scale={[49.4, 49.4, 90.97]}>
            <mesh geometry={nodes.svgMesh1_2.geometry} material={materials['Gelatin 2']} position={[-0.01, -0.01, -0.01]} scale={[1.12, 1.12, 0.56]} />
          </group>
          <group position={[-6.89, -0.53, 1.31]} rotation={[0, 0, 0.02]} scale={[90.97, 90.97, 167.53]}>
            <mesh geometry={nodes.svgMesh1.geometry} material={materials['Gelatin 2']} position={[0.01, 0, -0.01]} scale={[0.9, 0.9, 0.36]} />
          </group>
        </group>
      </group>
      <PerspectiveCamera makeDefault={false} far={2} near={0} fov={34.52} position={[0.5, 0.36, 0.5]} rotation={[-0.36, 0.75, 0.25]} />
    </group>
  )
}

useGLTF.preload('/gestare.gltf')
