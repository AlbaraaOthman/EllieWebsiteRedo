import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/EllieWebsiteRedo/gest.gltf')
  return (
    <group {...props} dispose={null} scale={20}>
      <group position={[0, 0.04, 0]} scale={0.01}>
        <group position={[2, 0.16, 1.04]} rotation={[0, 0, 0.09]} scale={[49.4, 49.4, 90.97]}>
          <mesh geometry={nodes.svgMesh1_2.geometry} material={materials['Gelatin 2']} position={[-0.01, -0.01, -0.01]} scale={[1.12, 1.12, 0.56]} />
        </group>
        <group position={[-6.89, -0.53, 1.31]} rotation={[0, 0, 0.02]} scale={[90.97, 90.97, 167.53]}>
          <mesh geometry={nodes.svgMesh1.geometry} material={materials['Gelatin 2']} position={[0.01, 0, -0.01]} scale={[0.9, 0.9, 0.36]} />
        </group>
      </group>
      <PerspectiveCamera makeDefault={false} far={2} near={0} fov={34.52} position={[0.5, 0.3, 0.5]} rotation={[-0.36, 0.75, 0.25]} />
      <group scale={2.54}>
        <mesh geometry={nodes.Body1_2.geometry} material={materials.Glass} scale={0.39} />
        <mesh geometry={nodes.Body1.geometry} material={materials['Olive Oil']} scale={[0.4, 0.39, 0.39]} />
      </group>
    </group>
  )
}

useGLTF.preload('/gest.gltf')
