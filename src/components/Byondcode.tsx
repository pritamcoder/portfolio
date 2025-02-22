'use client'
import { useGSAP } from '@gsap/react'

import gsap from 'gsap'
import { Draggable } from 'gsap/all'
import React, { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(Draggable)

type Props = {}

const Byondcode = (props: Props) => {
    const divee = useRef(null)
    const [hobbies, sethobbies] = useState([
        'panting 🎨',
        'photography 📷',
        'music 🎵',
        'gaming 🎮',
        'hiking 🥾',
        'coocking 🍳',
        'reading 📚',
        'fitness 🏋️‍♂️',])

    useGSAP(()=>{
        Draggable.create('.dragdiv',{
            bounds:'.boundarydiv',
            type:'x,y',
            inertia:true,
            edgeResistance:.5
        })
    })

    const [divcontent, setdivcontent] = useState<number | null>()
    return (
        <div ref={divee} className='boundarydiv md:h-[70%] h-[280px] relative w-full flex justify-center gap-3 flex-wrap items-center overflow-hidden'>

            {hobbies.map((e, i) => (
                <div key={i} id={`${i}`} className={`backgrountgradient dragdiv border-2 border-gray-600 rounded-3xl w-fit h-fit  px-5 py-1 `}>
                    <p className='[&&]:text-base select-none cursor-grabbing [&&]:text-black'>{e}</p>
                </div>
            ))}
        </div>
    )
}

export default Byondcode