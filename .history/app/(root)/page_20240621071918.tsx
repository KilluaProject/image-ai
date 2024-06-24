import { UserButton } from '@clerk/nextjs'
import { User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Welcome to Clerk!</h1>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Home