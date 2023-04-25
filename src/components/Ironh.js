/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ironh.gltf
Author: Ashwani-Tyagi (https://sketchfab.com/Ashwani-Tyagi)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/iron-man-helmet-4cb973027cfb430d8d815531dfad65fd
Title: Iron Man Helmet
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Flex, Box } from "@react-three/flex";

export default function Model(props) {
  const { nodes, materials } = useGLTF('ironh.gltf')
  return (
    <Box width="auto" height="auto" flexGrow={0.5} centerAnchor>
    <group {...props} dispose={null}>
      <mesh geometry={nodes.face_low_new_0.geometry} material={materials.material} />
      <mesh geometry={nodes.under_low_new_0.geometry} material={materials.material} />
      <mesh geometry={nodes.back_low_new_0.geometry} material={materials.material} />
      <mesh geometry={nodes.front_low_new_0.geometry} material={materials.material} />
      <mesh geometry={nodes.eye_low_new_0.geometry} material={materials.material} />
      <mesh geometry={nodes.ear_low_new_0.geometry} material={materials.material} />
    </group>
    </Box>
  )
}

useGLTF.preload('/ironh.gltf')
