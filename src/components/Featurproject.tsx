import Image from 'next/image'
import React, { useRef } from 'react'
import { Projectdata } from '@/data/Projectdata'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


type Props = {}
const Featurproject = (props: Props) => {
    const projectcart = useRef<HTMLDivElement>(null)



    useGSAP(() => {
        const grid = gsap.timeline({
            delay: .3,
            scrollTrigger: {
                trigger: '.projectcontener',
                start: 'top 70%',
                end: "top 30%",
                toggleActions: "play none none reverse"

            }
        })
        grid.from('.projectp', {
            opacity: 0,
        })
        grid.from('.projecth', {
            y: 23,
            opacity: 0
        })

    })
    useGSAP(() => {
        gsap.utils.toArray('.projectcart').forEach((e: HTMLDivElement | any) => {
            gsap.to(e, {
                scale: .9,
                opacity: .0001,
                scrollTrigger: {
                    trigger: e,
                    start: "top 10%",
                    end: `bottom 40%`,
                    scrub: true,
                  
                }
            })
        })

        const handelResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", handelResize)
        return () => {
            window.addEventListener('resize', handelResize)
            ScrollTrigger.refresh()
        }
    })




    return (
        <div className='projectpage' id='project'>
            <div className='projectcontener flex items-center flex-col py-10 gap-2'>
                <p className='gradientforp projectp uppercase font-bold  text-transparent bg-clip-text text-sm '>real - worls results</p>
                <h1 className='fh md:text-5xl projecth  font-extrabold'>featre projects</h1>
            </div>
            <div className='flex flex-col items-center  justify-around p-5 pt-0 gap-20'>
                {Projectdata && Projectdata.map((data, index) => (
                    <div ref={projectcart} key={index} className="projectcart h-fit md:min-h-[450px] max-w-7xl  sticky top-1  flex flex-col-reverse gap-10 justify-center items-center md:flex-row px-8 md:px-20 py-4  bg-slate-950 rounded-lg overflow-hidden">

                        <div className='md:w-2/4 w-full'>
                            <p className='gradientforp uppercase font-bold text-transparent bg-clip-text mb-2 w-fit text-xs'>Acme Corp • 2022</p>
                            <h1 className="text-2xl md:text-3xl font-bold mb-4 ">{data.tittle}</h1>
                            <hr className='gridentborder' />
                            <p className='my-5 text-gray-400/55 text-sm font-normal'>{data.description}</p>
                            <div className='mt-5'>
                                <p className=' uppercase font-bold w-fit text-sm tracking-wider'>used tecnology</p>
                                <div className='flex gap-5 mt-2 items-center'>
                                    {data.icons.length > 1 ? (
                                        data.icons.map((e, i) => (
                                            <div key={i}>
                                                <Image src={e} alt={e} height={25} width={25} className=' aspect-square' />

                                            </div>
                                        ))
                                    ) : <p className='text-gray-500 text-xs'>not add tools icon</p>}
                                </div>
                            </div>
                            <a
                                href={data.siturl}
                                className="mt-5 inline-block bg-white text-gray-900 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 font-semibold text-lg hover:scale-95">
                                Visit Live Site <i className='bi bi-arrow-right text-gray-900'></i>
                            </a>
                        </div>
                        <div className="relative md:w-2/4">
                            <div style={{ background: `linear-gradient(to right, ${data.gradient[0]}, ${data.gradient[1]})` }} className={`absolute md:block hidden inset-0 rounded-lg shadow-lg -rotate-6 transform translate-x-6 blur-[1px]`}></div>

                            <Image
                                src={data.image}
                                alt="SaaS Landing Page Mockup"
                                width={1000}
                                height={600}
                                className="relative rounded-lg shadow-lg aspect-video md:aspect-auto"
                            />

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Featurproject