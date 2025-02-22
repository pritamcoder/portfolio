"use client"
import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

type Props = {}

const Nav = (props: Props) => {
  const [isscroll, setisscroll] = useState(true)
  const navdiv = useRef<HTMLDivElement>(null)


  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setisscroll(false)
    })
    window.addEventListener("scrollend", (e) => {
      setisscroll(true)
    })

    return () => {
      window.removeEventListener("scroll", (e) => {
        setisscroll(false)
      })
      window.removeEventListener("scrollend", (e) => {
        setisscroll(true)
      })
    }

  }, [])

  useEffect(() => {
    gsap.to(navdiv.current, {
      y: isscroll ? 0 : -100,
      opacity: isscroll ? 1 : 0,
      duration: .3
    })
  }, [isscroll])


  return (
    <nav ref={navdiv} className=' fixed z-20 top-0 left-0 w-full flex justify-center items-center pt-4'>
      <ul className='navul flex gap-0 md:gap-5 bg-slate-50/10 rounded-xl px-2 md:px-5 py-2 shadow-lg border border-slate-50/25 '>
        <li><Link href={'/#home'}>home</Link></li>
        <li><Link href={'/#project'}>project</Link></li>
        <li><Link href={'/#about'}>about</Link></li>
        <li><Link href={'/#contact'}>contact</Link></li>
      </ul>

    </nav>
  )
}

export default Nav