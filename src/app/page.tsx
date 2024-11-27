"use client"
import Contact from '@/components/Contact'

import Featurproject from '@/components/Featurproject'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import Loader from '@/components/loading'
import Nav from '@/components/Nav'
import Tep from '@/components/Tep'
import React, { Suspense, useEffect, useState } from 'react'



const Page = () => {
  const [mouseposition, setmouseposition] = useState({ x: 0, y: 0 })
  const [isloadding, setisloadding] = useState(true)

  useEffect(() => {
    function handelloading() {
      setisloadding(false)
    }

    if (document.readyState === 'complete') {
      setisloadding(false)
    } else {
      window.addEventListener('load', handelloading)
    }



    return () => {
      window.removeEventListener('load', () => handelloading)
    }
  }, [])


  if (isloadding) {
    return (
      <Loader />
    )
  } else {

    return (
      <>


        <div className=' relative h-screen w-scree flex flex-col  justify-center' onMouseMove={(e) => setmouseposition({ x: e.clientX - window.innerWidth / 2, y: e.clientY - window.innerHeight / 2 })}>
          <Nav />
          <Hero mouseposition={mouseposition} />
          <div className='telingscroll absolute bottom-0 left-0 w-full flex justify-center items-center flex-col-reverse pb-2'>
            <div className='border border-slate-400 w-8 h-14  rounded-2xl flex justify-center items-center'>
              <div className=' animate-bounce'>
                <i className='bi bi-arrow-down font-bold text-2xl animate-bounce'></i>
              </div>
            </div>
            <p className=' font-bold text-slate-50'>scroll </p>
          </div>
        </div>


        <Featurproject />
        <Grid />
        <Tep />
        <Footer />




      </>
    )
  }
}

export default Page