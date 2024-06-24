import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="container min-h-screen mx-auto">
        <div className="">
          <h1 className='text-4xl text-center font-bold '>Header text</h1>
        </div>
        <div className='flex justify-between min-h-screen w-full mx-auto bg-slate-300'>
          <div>
              <UserButton/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home