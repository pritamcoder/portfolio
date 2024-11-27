
import { Backdrop, Environment, SoftShadows, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef, useState } from 'react'

type Props = {
  position: { x: number, y: number },
  ismobile: boolean
}

const Showrobot = (props: Props) => {
  const robot = useGLTF('/3Dmodel/robot.glb');
  const tub = useRef(null)




  function changposition() {
    robot.nodes.Chat_Bubble.visible = false
    robot.nodes.armupperL_05.rotation.x = 0.1
    robot.nodes.armupperL_05.rotation.y = 3.5
    robot.nodes.armupperL_05.rotation.z = 2.8

    robot.nodes.armlowerL_06.rotation.x = -.5
    robot.nodes.armlowerL_06.rotation.y = -0.4
    robot.nodes.armlowerL_06.rotation.z = 0.12450775407881438
  }
  changposition()









  useFrame(() => {
    if (robot.nodes) {
      robot.nodes.head_03.rotation.y = props.position.x * 0.001
      robot.nodes.head_03.rotation.x = props.position.y * 0.001
    }
  })


  //castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048}
  return (
    <>
      <group position-y={-1.2}>
        <mesh receiveShadow rotation-x={-Math.PI / 2} position-y={-.31}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color={'#333'} roughness={0.85} />
        </mesh>

        <mesh >
          {/* key light */}
          <directionalLight position={[5, 5, 5]} intensity={2.2} shadow-camera-far={50} />
          <directionalLight position={[3, 3, 5]} intensity={8} color={'#f23c3c'} />
          <directionalLight position={[-3, 3, -5]} intensity={8} color={'#3cb1f2'} />

          <primitive object={robot.scene} scale={props.ismobile ? .57 : .8} position={props.ismobile && [0, -.21, 0]} />
        </mesh>
      </group>
    </>


  )
}

export default Showrobot