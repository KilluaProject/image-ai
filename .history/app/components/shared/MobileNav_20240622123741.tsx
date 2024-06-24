"use client"

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constans'
import { usePathname } from 'next/navigation'

  

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <header className='header'>
        <Link href="/" className='flex items-center gap-2 md:py-2'>
            <Image
                src="/assets/images/logo-text.svg"
                width={140}
                height={24}
                alt='logo-mobile'
            />
        </Link>
        <nav className='flex gap-2'>
            <SignedIn>
                <UserButton afterSignOutUrl='/'/>
                <Sheet>
                    <SheetTrigger>
                        <Image
                            src="/assets/icons/menu.svg"
                            alt='hamburger-icon'
                            width={25}
                            height={25}
                        />
                    </SheetTrigger>
                    <SheetContent className='sheet-content sm:w-64'>
                      <div>
                        <Image
                            src="/assets/images/logo-text.svg"
                            alt='logo-mobile-navbar'
                            width={120}
                            height={120}
                        />
                        <ul className="header-nav_elements">
                        {navLinks.map((link) => {
                            const isActive = link.route === pathname

                            return (
                                
                            <li key={link.route}
                                className={`${isActive && 'gradient-text'} p-10 flex whitespace-nowrap text-dark-700`}
                            >
                                <Link className="sidebar-link" href={link.route}>
                                {link.label}
                                </Link>
                            </li>
                            )
                        })}
                            </ul>


                        <ul className="sidebar-nav_elements">
                        {navLinks.slice(6).map((link) => {
                            const isActive = link.route === pathname

                            return (
                            <li key={link.route} className={`sidebar-nav_element group ${
                                isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                            }`}>
                                <Link className="sidebar-link" href={link.route}>
                                <Image 
                                    src={link.icon}
                                    alt="logo"
                                    width={24}
                                    height={24}
                                    className={`${isActive && 'brightness-200'}`}
                                />
                                {link.label}
                                </Link>
                            </li>
                            )
                        })}

                        <li className="flex-center cursor-pointer gap-2 p-4">
                            <UserButton afterSignOutUrl='/' showName />
                        </li>
                        </ul>
                      </div>
                    </SheetContent>
                </Sheet>

            </SignedIn>
        </nav>
    </header>
  )
}

export default MobileNav