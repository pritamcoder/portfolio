"use client"
import { OrbitControls, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'


type Props = {
    ismobile: boolean
}
const Musroom = (props: Props) => {
    const musroom = useGLTF('/3Dmodel/gardens.glb')
    const mesh = useRef<THREE.Mesh>(null)

    //   position={[2,-1,0]} rotation={[0,Math.PI/1,0]}


    useEffect(() => {
      if (mesh.current) {
        const box=new THREE.Box3().setFromObject(mesh.current)
        const center=new THREE.Vector3();
        box.getCenter(center)

        mesh.current.position.set(-center.x,-center.y,-center.z)
      }
    
      return () => {
        
      }
    }, [])
    
    return (
       
            
       <primitive ref={mesh} object={musroom.scene} scale={props.ismobile ? .03 : .043}/>

            

       
    )
}

export default Musroom

