import { Float, Loader, OrbitControls, Point, PointMaterial, Points, Preload } from '@react-three/drei'
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
            x: -40,
            opacity: 0
        })
        grid.from('.contactcnvs', {
            x: 40,
            opacity: 0
        })

    })

    return (
        <div className='contactdiv md:h-screen h-fit pb-5 overflow-hidden' id='contact'>
            <div className='h-[15%] flex flex-col justify-center items-center gap-3 py-5'>
                <p className='contactp gradientforp uppercase font-bold text-transparent bg-clip-text '>Contact me</p>
                <h1 className='contacth md:text-5xl font-extrabold'>let's work together</h1>
            </div>

            <div className='h-[85%] flex flex-col-reverse max-md:justify-center  md:flex-row' >

                <div className='contactform flex items-center justify-center  md:w-2/4 w-full px-3'>
                    <form className='flex flex-col gap-5 bg-slate-950 py-10 lg:px-10 px-5 rounded-lg w-96'>
                        <label htmlFor="name"> name </label>
                        <input type="text" name="" id="name" placeholder='name' required />
                        <label htmlFor="email"> email </label>
                        <input type="email" name="" id="email" placeholder='email' required />
                        <label htmlFor="comment"> comment </label>
                        <textarea name="" id="comment" className='w-full h-40 rounded-md px-2 bg-slate-900' placeholder='comment' required />
                        <button className=' h-9 w-fit px-7 border border-slate-100 bg-slate-400 text-black font-bold rounded-md capitalize hover:scale-95'>send</button>
                    </form>
                </div>
                <div className='contactcnvs w-[90%] md:w-1/2 h-full max-md:h-[80vh]'>



                    <Canvas camera={{ position: [0, 1, 10] }}>


                        <directionalLight position={[3, 3, 5]} intensity={6} />
                        <directionalLight position={[-3, 3, -5]} intensity={8} />

                        <directionalLight position={[5, 5, 5]} intensity={2.2} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} shadow-camera-far={50} />
                        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false} />
                        <Musroom />
                    </Canvas>
                    <Loader />





                </div>
            </div>
        </div>
    )
}

export default Contact