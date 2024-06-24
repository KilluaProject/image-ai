"use client"

import { navLinks } from '@/constans'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Sidebar() {

    const pathname = usePathname();

  return (
    <aside className='sidebar'>
        <div>
            <Link href="/" className='sidebar-logo'>
                <Image alt='logo' width={180} height={28} src="/assets/images/logo-text.svg"/>
            </Link>

            <nav className="sidebar-nav_elements">
                {navLinks.map((link) => {
                    
                    const isActive = link.route === pathname

                    return (
                        <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                            <Link href={link.route}>
                                <Image
                                    src={link.icon}
                                    alt='logo'
                                    width={24}
                                    height={24}
                                    className={`${isActive && 'brightness-200'}`}
                                />
                            </Link>
                        </li>
                    )
                })}
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar