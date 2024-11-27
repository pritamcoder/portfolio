import React, { Suspense, useState } from 'react'
import "@/style/grid.css"
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import Toolbox from './Toolbox'
import Image from 'next/image'
import Byondcode from './Byondcode'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import dynamic from 'next/dynamic'
gsap.registerPlugin(ScrollTrigger, useGSAP)

const Ghost = dynamic(() => import('./Ghost'), { ssr: false })

type Props = {}

const Grid = (props: Props) => {
    const [copysuccess, setcopysuccess] = useState(false)
    const [copymassege, setcopymassege] = useState("")

    const Copyemail = async () => {
        try {
            await navigator.clipboard.writeText('pritamh816@gamil.com')
            setcopysuccess(true)

        } catch (error) {
            setcopysuccess(false)

        }
        setTimeout(() => {
            setcopysuccess(false)
        }, 3000)
    }


    useGSAP(() => {
        const grid = gsap.timeline({
            delay: .1,
            scrollTrigger: {
                trigger: '.gridmaincontaner',
                start: 'top 70%',
            }
        })
        
        grid.from('.aboutp', {
            opacity: .001,
        })
        grid.from('.abouth', {
            y: 23,
            opacity: 0
        })
        grid.from('.nomi', {
            x: 40,
            opacity: 0,

        })
    })

    return (
        <div className='gridmaincontaner md:h-screen overflow-hidden' id='about'>
            <div className='h-[15%] flex flex-col justify-center items-center gap-3 py-5'>
                <p className='aboutp  uppercase font-bold bg-gradient-to-tr from-[#FFFFFF] to-[#FF5B4E] text-transparent bg-clip-text '>about me</p>
                <h1 className='abouth md:text-5xl font-extrabold'>a glimpse into my world</h1>
            </div>

            {/* start grid  */}

            <div className='nomi  md:h-[85%] max-w-7xl flex flex-col  md:grid md:grid-rows-4 md:grid-cols-3 lg:mx-auto gap-2 pb-2 px-2 lg:px0 mt-2 md:mt-0'>
                <div>
                    <p>i'm very flexible with time zone communication</p>
                </div>

                <div className='md:col-span-2 md:row-span-2'>
                    <div className='h-[30%]'>
                        <span className='flex items-center gap-2 '>
                            <div className='h-4 w-4 rounded-[100%] bg-gradient-to-tr from-[#FFFFFF] to-[#FF5B4E] animate-bounce'></div>
                            <h1>my tool box</h1>
                        </span>
                        <p className='[&&]:lg:text-lg [&&]:text-sm [&&]:text-white/50 [&&]:font-medium pb-1'>explore the technologie and tools i  use to  craft<br />  exceptional digital experiences.</p>
                    </div>
                    <Toolbox />
                </div>

                <div className='nomi flex border-none gap-2 [&&]:p-0 [&&]:bg-transparent'>
                    <div className='w-1/2 [&&]:p-0 h-[150px] md:h-full'>

                        <Canvas frameloop='demand'>
                            <ambientLight color={0x404040} intensity={100} />
                            <OrbitControls enableZoom={false} />
                            <Suspense fallback={null}>

                                <Ghost />

                            </Suspense>
                        </Canvas>

                    </div>
                    <div className='w-1/2 [&&]:p-2 h-[150px] md:h-full '>
                        <Image src={'/image/feature-ele2.png'} height={100} width={100} alt='responsivimage' className=' m-auto' />
                        <p className='[&&]:text-[medium]'>responsiv designe</p>
                    </div>
                </div>

                <div className='md:row-span-2 md:col-span-2'>

                    <div className='h-[30%]'>
                        <span className='flex items-center  gap-2 '>
                            <div className='h-4 w-4 rounded-[100%] bg-gradient-to-tr from-[#FFFFFF] to-[#FF5B4E] animate-bounce'></div>
                            <h1>beyond the code</h1>
                        </span>
                        <p className='[&&]:lg:text-lg [&&]:text-base [&&]:text-white/50 [&&]:font-medium'>explore my interest and hobbies beyond <br /> the digital realm.</p>
                    </div>
                    <Byondcode />
                </div>

                <div style={{ backgroundImage: 'url("/svg/grid.svg")' }} className='relative'>
                    <p className='lg:mt-5'>tech enthusiast with a passion  for development.</p>
                    <Image src={'/svg/b4.svg'} height={100} width={250} alt='layout' className=' w-auto h-auto md:absolute bottom-0 md:right-0 z-20 object-cover object-center relative translate-y-5 mx-auto md:translate-x-0 md:translate-y-0 ' />
                </div>

                <div className='flex flex-col items-center justify-center copyemail'>
                    <p>do you went to start a project together?</p>
                    <button className=' capitalize border border-gray-600 bg-gray-800 text-white mt-4 rounded-lg px-5 py-1 font-semibold transition-all hover:-translate-y-1' onClick={Copyemail}>{copysuccess ? '✔' : <i className="bi bi-copy"></i>} copy my email address</button>
                </div>

            </div>

        </div>
    )
}

export default Grid