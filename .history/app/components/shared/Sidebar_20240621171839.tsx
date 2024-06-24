"use client"

import { navLinks } from '@/constans'
import { SignedIn } from '@clerk/nextjs'
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
                <Image alt='logo' width={180} height={28} src="/assets/images/logo-text.svg"/>
            </Link>

            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className='sidebar-nav_elements'>

                    </ul>
                </SignedIn>

            </nav>
        </div>
    </aside>
  )
}

export default Sidebar