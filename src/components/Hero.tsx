import { Loader, Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef, useState } from 'react'
import Showrobot from './Showrobot'
import Land from './Land'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

type Props = {
  mouseposition: { x: number, y: number }
}

const Hero = (props: Props) => {

  const [loading, setloading] = useState(true)
  const firstdiv = useRef<HTMLDivElement>(null)
  const maincontainer = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const anime = gsap.timeline({
      delay: 1

    })
    anime.from(maincontainer.current,{
      scale:.8,
      opacity:0
    })
    anime.from('.navul', {
      y: -30,
      opacity: 0,
      duration: 1
    })
    anime.from(firstdiv.current, {
      x: -10,
      opacity: 0,
      ease: 'bounce.out',
      duration: 1

    })
    anime.from('.fasth1', {
      y: 3,
      opacity: 0,
    })
    anime.from('.lastdiv', {
      x: 10,
      opacity: 0,
      ease: 'bounce.out',
      duration: 1

    })
    anime.from('.canvasmodel', {
      opacity: 0,
    })

    anime.eventCallback('onComplete', () => {
      setloading(false)
    })

  })


  return (
    <div ref={maincontainer} className='herosection h-full w-full relative flex overflow-hidden' id='home'>
      <div ref={firstdiv} className='fastdiv w-[90%] md:w-fit text-center md:text-left absolute z-40 max-md:left-1/2  md:left-20 top-[10%]  max-md:-translate-x-1/2 bg-slate-950 rounded-2xl py-3 px-2 md:px-4 md:py-6 rounded-br-none border border-slate-700 shadow-lg'>
        <h1 className='fasth1 text-3xl md:text-4xl'>hi i'm <span className='gradientforp text-transparent bg-clip-text'>pritam.</span></h1>
        <p className='text-slate-500/80 mt-2 text-sm md:text-base'>i am a freelance web devloper skilled in building <br className=' md:hidden ' /> responsive <br className=' hidden md:block' /> website javaScript,typeScript and modern frameworks like next js.</p>
        <div className=' flex justify-between mt-3'>
          <button className='border px-5 py-2 rounded-lg capitalize border-slate-500 hover:scale-105 font-semibold text-sm md:text-base'>explore my work <i className='bi bi-arrow-down'></i></button>
          <button className='border px-5 py-2 rounded-lg capitalize border-slate-500 hover:scale-105 font-semibold  text-sm md:text-base'>👋 let's contact</button>
        </div>
      </div>

      <div className='canvasmodel h-full w-full'>     
        <Canvas camera={{ position: [0, 1, 5], fov: 45 }} shadows>
          <color attach={'background'} args={['#05071c']} />
          <fog attach={'fog'} args={['#05071c', 15, 25]} />
          <group position-y={-1.2}>
            <Suspense fallback={null}>
              <Sparkles size={2} color={'lime'} />
              <Showrobot position={props.mouseposition} />
            </Suspense>
          </group>
        </Canvas>
      </div>



      <div className='lastdiv border border-slate-700 hidden shadow-xl lg:block absolute bottom-[5%] right-10  bg-slate-950 rounded-2xl rounded-tl-none py-6 px-4'>
        <p className='md:text-2xl text-lg font-bold mb-2'>building exceptional user experiences.</p>
        <p className='text-slate-500/80'>i speciallze in transforming designs into functional,high-performing <br />  web applications let's discuss your next project.</p>
      </div>
    </div>
  )
}

export default Hero