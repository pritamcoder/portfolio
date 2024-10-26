"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className=' absolute z-20 top-0 left-0 w-full flex justify-center items-center pt-4'>
        <ul className='navul flex gap-5 bg-slate-50/10 rounded-xl px-5 py-2 shadow-lg border border-slate-50/25'>
            <li><Link href={'/#home'}>home</Link></li>
            <li><Link href={'/#project'}>project</Link></li>
            <li><Link href={'/#about'}>about</Link></li>
            <li><Link href={'/#contact'}>contact</Link></li>
        </ul>

    </nav>
  )
}

export default Nav