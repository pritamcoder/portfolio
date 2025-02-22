import { Float, OrbitControls, Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import dynamic from 'next/dynamic'
import { handelMouseleave, handelMOusemove } from './Effect3d'
import axios from 'axios'



const Musroom = dynamic(() => import('./Musroom'), { ssr: false })

type Props = {}
interface contactform {
    name: string,
    email: string,
    comment: string
}


const Contact = (props: Props) => {
    const [ismobile, setismobile] = useState(false)
    const contactform = useRef(null)
    const [formdata, setformdata] = useState<contactform>({
        name: "",
        email: "",
        comment: ""
    })


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

        const desktoptimeline = gsap.timeline({
            delay: .3,
            scrollTrigger: {
                trigger: '.contactdiv',
                start: 'top 70%',
                end: 'top 30%',
                //markers: true,
                toggleActions: "play none none reverse"

            }
        })

        desktoptimeline.from('.contactp', {
            opacity: 0,
        })
            .from('.contacth', {
                y: 43,
                opacity: 0
            })
            .from('.contactform', {
                x: -140,
                opacity: 0,
                duration: 1.5
            })
            .from('.contactcnvs', {
                x: 40,
                opacity: 0
            })




    })

    const formhandel = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        axios.post("./api/sendEmail", formdata).then((e) => {
            console.log(e)
        }).catch((e) => { console.log(e) })


    }
    const onchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })





    }


    return (
        <div className='contactdiv md:h-screen h-fit pb-5 overflow-hidden' id='contact'>
            <div className='contextdiv h-[15%] flex flex-col justify-center items-center gap-2 py-5'>
                <p className='contactp gradientforp uppercase font-bold text-transparent bg-clip-text text-sm '>Contact me</p>
                <h1 className='contacth md:text-5xl font-extrabold'>let's work together</h1>
            </div>

            <div className='h-[85%] flex flex-col-reverse max-md:items-center max-md:gap-5   md:flex-row' >

                <div className='contactform flex items-center justify-center  md:w-2/4 w-full px-3'>
                    <form ref={contactform} onMouseMove={(e) => handelMOusemove(e, contactform)} onMouseLeave={() => handelMouseleave(contactform)} className='flex flex-col gap-5 bg-slate-950 py-10 lg:px-10 px-5 rounded-lg w-96' onSubmit={(e)=>formhandel(e)}>
                        <label htmlFor="name"> name </label>
                        <input type="text" name="name" id="name" placeholder='name' required onChange={(e) => onchange(e)} />
                        <label htmlFor="email"> email </label>
                        <input type="email" name="email" id="email" placeholder='email' required onChange={(e) => onchange(e)} />
                        <label htmlFor="comment"> comment </label>
                        <textarea name="comment" id="comment" className='w-full h-40 rounded-md px-2 bg-slate-900 transition-all' placeholder='comment' required onChange={(e) => onchange(e)} />
                        <button className=' h-9 w-fit px-7 border border-slate-200 bg-slate-400 text-[#1b1b1b] font-semibold tracking-wider rounded-md capitalize hover:scale-95'>send</button>
                    </form>
                </div>
                <div className='contactcnvs w-[90%] md:w-1/2 h-full max-md:h-[80vh] '>


                  
                    <Canvas camera={{ position: [0, 2, 6], fov: 45 }} frameloop='demand' className='w-full h-full' dpr={[1,2]} gl={{preserveDrawingBuffer:true}}>
                        <ambientLight intensity={2} />
                        <Suspense fallback={null}>
                        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} enableZoom={false} enablePan={false}/>
        
                                <Musroom ismobile={ismobile}/>
                                <Sparkles size={1.6} color={'pink'}/>
                         
                        </Suspense>

                    </Canvas>
                    
                   




                </div>
            </div>
        </div>
    )
}

export default Contact