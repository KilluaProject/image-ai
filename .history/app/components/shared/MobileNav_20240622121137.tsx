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
  

const MobileNav = () => {
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
        <nav>
            <SignedIn>
                <UserButton showName afterSignOutUrl='/'/>
            </SignedIn>
        </nav>
    </header>
  )
}

export default MobileNav