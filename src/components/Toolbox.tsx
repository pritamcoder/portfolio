import React from 'react'
import { icon } from '@/data/Projectdata'
import Image from 'next/image'

type Props = {}

const Toolbox = (props: Props) => {
    const toollist = ['nextjs', 'react', 'html', 'css', 'next auth', 'gsap', 'typescript', 'tailwind']
    return (
        <div className=' h-[70%]  flex flex-col w-full  justify-center overflow-hidden pt-5 md:pt-0'>
            <div className='gradient flex gap-2 w-full overflow-hidden  relative'>
                {[...new Array(2)].fill(0).map((_, idx) => (
                    <div key={idx} className='animation flex gap-2 '>
                        {icon && icon.map((e, i) => (
                            <div key={i} className=' h-fit w-fit border border-slate-600 rounded-md flex items-center px-5 py-1 gap-5 bg-slate-900' >
                                <div className='w-10 h-11 flex items-center justify-center '>
                                    <Image src={e.icon} height={40} width={40} alt={e.text} className='h-auto w-auto rounded-lg  my-auto drop-shadow-lg' />
                                </div>
                                <p className='[&&]:text-lg whitespace-nowrap' >{e.text}</p>

                            </div>
                        ))}
                    </div>
                ))}

            </div>
            <div className='gradient flex flex-row-reverse gap-2  w-full  mt-4 lg:mt-10 overflow-hidden relative  '>
                {[...new Array(2)].fill(0).map((_, idx) => (
                    <div key={idx} className='animation2  flex gap-2 '>
                        {toollist.map((e, i) => (
                            <div key={i} className='rounded-lg text-white border border-slate-700 px-5 py-1 whitespace-nowrap bg-slate-900'>{e}</div>
                        ))}</div>))}

            </div>
        </div>
    )
}

export default Toolbox