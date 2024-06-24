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
                            width={50}
                            height={50}
                        />
                      </div>
                    </SheetContent>
                </Sheet>

            </SignedIn>
        </nav>
    </header>
  )
}

export default MobileNav