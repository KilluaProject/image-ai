"use client"

import { navLinks } from '@/constans'
import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Sidebar() {

    const pathname = usePathname();

  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href="/" className='sidebar-logo'> 
                <Image
                src="/assets/images/logo-text.svg"
                alt='logo'
                width={180}
                height={28}/>
            </Link>
            <nav className='sidebar-nav'>
                <SignIn>
            </nav>

        </div>
    </aside>
  )
}

export default Sidebar