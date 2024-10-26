"use client"
import { Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

type Props = {}

const Ghost = (props: Props) => {

    const ghost = useGLTF("./3Dmodel/cute_ghost.glb")

    return (

                <mesh scale={[.8, .8, .8]} position={[0, -2.5, 0]}>
                    <primitive object={ghost.scene} />
                </mesh>
      
    )
}


export default Ghost