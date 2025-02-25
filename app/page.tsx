import React from 'react'
import Hero from './components/Hero'
import Newest from './components/Newest'

export const dynamic = "force-dynamic";

export default function page() {
  return (
    <main className='bg-white pb-6 sm:pb-8 lg:pb-12'>
     <Hero /> 
     <Newest />
    </main>
  )
}
