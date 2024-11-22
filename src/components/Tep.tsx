import Image from 'next/image'
import React from 'react'

type Props = {}

const Tep = (props: Props) => {
    const data = ['userfriendly', 'responsible', 'scelabel', 'secure', 'intreactive', 'maintainable','accessible']
    return (
        <div className='h-80 w-full flex items-center justify-center overflow-hidden '>
            <div className='tep h-12 -rotate-3 w-full overflow-hidden flex gap-5 items-center bg-gradient-to-r from-white/90 to-[#FF5B4E] '>

                {[...new Array(2)].fill(0).map((_, idx) => (
                    <div key={idx} className='tepanimation flex gap-5'>
                        {data.map((e,i)=>(
                            <div key={i} className='flex gap-5 ml-5'>
                                <Image src={'/svg/star.svg'} alt='star' height={20} width={20} className='h-auto w-auto'/>
                                <p className='text-lg font-semibold uppercase text-black'>{e}</p>
                                
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Tep