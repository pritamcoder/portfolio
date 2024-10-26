import { Float, OrbitControls, Point, PointMaterial, Points, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Musroom from './Musroom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
type Props = {}

const Contact = (props: Props) => {
    useGSAP(() => {
        const grid = gsap.timeline({
            delay: .3,
            scrollTrigger: {
                trigger: '.contactdiv',

                start: 'top 70%',
               
            }
        })

        grid.from('.contactp', {
            opacity: .001,
        })
        grid.from('.contacth', {
            y: 23,
            opacity: 0
        })
        grid.from('.contactform', {
            x:-40,
            opacity: 0
        })
        grid.from('.contactcnvs', {
            x: 40,
            opacity: 0
        })
       
    })

    return (
        <div className='contactdiv md:h-screen h-fit pb-5 overflow-hidden'>
            <div className='h-[15%] flex flex-col justify-center items-center gap-3 py-5'>
                <p className='contactp gradientforp uppercase font-bold text-transparent bg-clip-text '>Contact me</p>
                <h1 className='contacth md:text-5xl font-extrabold'>let's work together</h1>
            </div>

            <div className='h-[85%] flex flex-col-reverse  md:flex-row' >

                <div className='contactform flex items-center justify-center  md:w-2/4 w-full '>
                    <form className='flex flex-col gap-5 bg-slate-950 py-10 lg:px-10 px-5 rounded-lg '>
                        <label htmlFor="name"> name </label>
                        <input type="text" name="" id="name" placeholder='name' />
                        <label htmlFor="email"> email </label>
                        <input type="email" name="" id="email" placeholder='email' />
                        <label htmlFor="comment"> comment </label>
                        <textarea name="" id="comment" className='w-80 h-40 rounded-md px-2 bg-slate-900' placeholder='comment' />
                        <button className=' h-9 w-fit px-7 border border-slate-100 bg-slate-400 text-black font-bold rounded-md capitalize hover:scale-95'>send</button>
                    </form>
                </div>
                <div className='contactcnvs md:w-1/2 h-full border'>

                  {/* 
                   
                   <Canvas camera={{position:[0,1,10]}}>
                        <ambientLight intensity={.5} />
                        <directionalLight intensity={1.5} position={[10,10,5]}/>
                    
                        <Musroom />
                       
                        
                    </Canvas>
            
       */}

                </div>
            </div>
        </div>
    )
}

export default Contact