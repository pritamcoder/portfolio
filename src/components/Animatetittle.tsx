"use client"
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger)

type Props = {
    subtittle: string,
    tittle: string,
    classp:string,
    classh:string,
    classm:string
    
}

const Animatetittle = (props: Props) => {
    const maindiv = useRef<HTMLDivElement>(null)

    useGSAP(()=>{
        const grid = gsap.timeline({
            delay: .3,
            scrollTrigger: {
                trigger: `${props.classm}`,
                start: 'top 70%',
                end:"top 30%",
                markers:true,
               
                toggleActions: "play none reverse reverse"
                
            }
        })
        grid.from(`${props.classp}`, {
            opacity: 0,
        })
        grid.from(`${props.classh}`, {
            y: 23,
            opacity: 0
        })
    })



    return (
        <div ref={maindiv} className=' flex items-center flex-col py-10 gap-2'>
            <p className={`${props.classp} gradientforp  uppercase font-bold  text-transparent bg-clip-text text-sm `}>{props.subtittle}</p>
            <h1 className={`${props.classh}  md:text-5xl   font-extrabold`}>{props.tittle}</h1>
        </div>
    )
}

export default Animatetittle