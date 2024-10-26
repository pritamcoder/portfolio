import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='px-5 relative overflow-x-clip'>
      <div className='foooterimagg absolute h-[400px] w-[120%] bottom-0 left-1/2 bg-[#FF5B4E]/20 -translate-x-1/2  -z-10 '></div>
      <hr className='border-gray-600/45 ' />
      <div className='py-3 flex justify-between flex-col md:flex-row'>
        <p className='text-gray-400 text-sm text-center md:text-left'>copyright ©2024 pritam haldar</p>
        <div className='flex gap-2 flex-col md:flex-row justify-center items-center'>
          <p>facebook</p>
          <p>instragram</p>
          <p>github</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer