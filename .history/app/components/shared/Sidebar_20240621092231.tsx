import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <aside className='sidebar'>
        <div>
            <Link href="/" className='sidebar-logo'>
                <Image alt='logo' width={120} height={28} src="/assets/images/logo-text.svg"/>
            </Link>
        </div>
    </aside>
  )
}

export default Sidebar