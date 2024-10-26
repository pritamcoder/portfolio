"use client"
import { Plane } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { TextureLoader } from 'three'

type Props = {}

const Land = (props: Props) => {
    const meh = useRef(null)
    const teture=useLoader(TextureLoader,'/textures/snow.jpg')
    return (
        <mesh ref={meh} rotation={[-Math.PI / 2, 0, 0]} position={[0,-1.09, 0]} receiveShadow={true}>
        <circleGeometry args={[2,50]} />
        <meshStandardMaterial map={teture}/>
        <fog/>
    </mesh>
    )
}

export default Land