
import { Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

type Props = {
    position: { x: number, y: number }
}

const Fairfly = (props: Props) => {
    const sparkels = useRef<any>()

    useFrame(() => {
        if (sparkels?.current?.position) {
            sparkels.current.position.y=-(props.position.y*.01)
            sparkels.current.position.x = props.position.x*.01
        }
    })

    return (
        <Sparkles ref={sparkels} speed={10} size={4} color={"lime"} />
    )
}

export default Fairfly