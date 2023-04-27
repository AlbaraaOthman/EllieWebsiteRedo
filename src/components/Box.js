import { Flex, Box } from "@react-three/flex";
import React from "react";
//To add texture go back to tutorial around 13mins in
export default function Boxy() {
    return (
            <Box width="auto" height="auto" flexGrow={0.5} centerAnchor>
                    <mesh rotation={[90, 0, 20]}> //changes rotation
                        <boxBufferGeometry attach="geometry" args={[3, 3, 3]} /> //gives it size?
                        <meshLambertMaterial attach="material" color="hotpink" />
                        <meshNormalMaterial attach="material" />
                    </mesh>
            </Box>
    )
}