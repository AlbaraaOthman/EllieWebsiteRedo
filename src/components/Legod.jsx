/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 legod.gltf
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { Box } from '@react-three/flex'
export default function Model(props) {
  const { nodes, materials } = useGLTF('/EllieWebsiteRedo/legod.gltf')
  return (
    <Box width="auto" height="auto" flexGrow={0.5} centerAnchor>
      <group {...props} dispose={null}>
        <group position={[-0.01, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <group scale={1}>
            <mesh geometry={nodes.Body1.geometry} material={materials.Plastic} scale={150} />
          </group>
        </group>
        <PerspectiveCamera makeDefault={false} far={2} near={0} fov={34.52} position={[0.5, 0.3, 0.5]} rotation={[-0.36, 0.75, 0.25]} />
      </group>
    </Box>
  )
}


useGLTF.preload('/legod.gltf')
