import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <aside className='sidebar'>
        <div>
            <Link href='/'>
                <Image/>
            </Link>
        </div>
    </aside>
  )
}

export default Sidebar