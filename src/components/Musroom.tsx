"use client"
import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import * as THREE from 'three'

const Musroom = () => {
    const musroom = useGLTF('/3Dmodel/gardens.glb')
    const mesh = useRef<THREE.Mesh>(null)

    //   position={[2,-1,0]} rotation={[0,Math.PI/1,0]}
    return (
        <mesh ref={mesh} scale={[.09,.09,.09]} position={[1,-2,0]}>
            <primitive object={musroom.scene}/>

        </mesh>
    )
}

export default Musroom

