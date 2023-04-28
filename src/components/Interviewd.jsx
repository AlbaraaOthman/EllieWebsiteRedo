/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 interviewd.gltf
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/EllieWebsiteRedo/interviewd.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.01, 0.04, -0.01]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.1}>
          <mesh geometry={nodes.Body1.geometry} material={materials['Clean Gold']} scale={200} />
          <mesh geometry={nodes.Body2.geometry} material={materials['Silver Glossy']} scale={200} />
          <mesh geometry={nodes.Body1_2.geometry} material={materials['Gelatin 2']} scale={200} />
        </group>
      </group>
      <PerspectiveCamera makeDefault={false} far={2} near={0} fov={34.52} position={[0.49, 0.34, 0.49]} rotation={[-0.36, 0.75, 0.25]} />
    </group>
  )
}

useGLTF.preload('/interviewd.gltf')
