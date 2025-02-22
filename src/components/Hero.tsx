import { Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import dynamic from 'next/dynamic'
import { handelMOusemove } from './Effect3d'
import { handelMouseleave } from './Effect3d'


const Showrobot = dynamic(() => import('./Showrobot'), { ssr: false })

gsap.registerPlugin(useGSAP)

type Props = {
  mouseposition: { x: number, y: number }
}

const Hero = (props: Props) => {
  const [loading, setloading] = useState(true)
  const firstdiv = useRef<HTMLDivElement>(null)
  const maincontainer = useRef<HTMLDivElement>(null)
  const lastdiv = useRef<HTMLDivElement>(null)
  const [ismobile, setismobile] = useState(false)



  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)")
    setismobile(mediaQuery.matches)

    const handlemediaQuerychange = (event: any) => {
      setismobile(event.matches)
    }
    mediaQuery.addEventListener('change', handlemediaQuerychange);

    return () => {
      mediaQuery.removeEventListener('change', handlemediaQuerychange)
    }
  }, [])


  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: 1,
      onComplete: () => {
        gsap.set(firstdiv.current,{clearProps:'all'})

      }
    })
    timeline.from('.navul', {
      y: -30,
      opacity: 0,
      duration: 1
    })
    timeline.from(firstdiv.current, {
      x: -10,
      opacity: 0,
      ease: 'bounce.out',
      duration: 1

    })
    timeline.from('.fasth1', {
      y: 3,
      opacity: 0,
    })
    timeline.from('.lastdiv', {
      x: 10,
      opacity: 0,
      ease: 'bounce.out',
      duration: 1

    })
    timeline.from('.telingscroll', {
      opacity: 0,
      y: 50
    })


  })



  return (
    <div ref={maincontainer} className='herosection h-full w-full relative flex overflow-hidden ' id='home'>
      <div ref={firstdiv} onMouseMove={(e) => handelMOusemove(e, firstdiv)} onMouseLeave={() => handelMouseleave(firstdiv)} className='fastdiv w-[90%] md:w-fit text-center md:text-left absolute z-40 max-md:left-1/2  md:left-20 top-[10%]  max-md:-translate-x-1/2 bg-slate-950 rounded-2xl py-3 px-2 md:px-4 md:py-7 rounded-br-none border border-slate-700 shadow-lg'>
        <h1 className='fasth1 text-3xl md:text-4xl'>hi i'm <span className='gradientforp text-transparent bg-clip-text'>pritam.</span></h1>
        <p className='text-slate-500/80 mt-2 text-[10px] md:text-sm'>i am a freelance web devloper skilled in building <br className=' md:hidden ' /> responsive <br className=' hidden md:block' /> website javaScript,typeScript and modern frameworks like next js.</p>
        <div className=' flex justify-between mt-3 max-md:gap-2'>
          <button className='border tracking-wider px-5 py-2 rounded-lg capitalize border-slate-700 hover:scale-105 font-semibold text-xs md:text-sm'>explore my work <i className='bi bi-arrow-down'></i></button>
          <button className='border tracking-wider px-5 py-2 rounded-lg capitalize border-slate-700 hover:scale-105 font-semibold  text-xs md:text-sm'>👋 let's contact</button>
        </div>
      </div>

      <div className='h-full w-full flex items-center justify-center '>


       <Canvas  camera={{ position: [0, 1, 5], fov: 45 }} frameloop='demand'  dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
          <color attach={'background'} args={['#05071c']} />
          <fog attach={'fog'} args={['#05071c', 15, 25]} />


          <Suspense fallback={null}>
            <Showrobot  position={props.mouseposition} ismobile={ismobile}/>
            <Sparkles size={1.5} color={'pink'}/>
          </Suspense>
        </Canvas>



      </div>



      <div ref={lastdiv} onMouseMove={(e) => handelMOusemove(e, lastdiv)} onMouseLeave={() => handelMouseleave(lastdiv)} className='lastdiv border border-slate-700 hidden shadow-xl lg:block absolute bottom-[5%] right-10  bg-slate-950 rounded-2xl rounded-tl-none py-6 px-4'>
        <p className='md:text-2xl text-lg font-bold mb-2'>building exceptional user experiences.</p>
        <p className='text-slate-500/80 text-sm'>i speciallze in transforming designs into functional,high-performing <br />  web applications let's discuss your next project.</p>
      </div>
    </div>
  )
}

export default Hero
