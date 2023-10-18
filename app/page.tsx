'use client'

import Link from 'next/link'
import Image from 'next/image'

import { MainSkills } from './homepage_components/skills/main'
import WebContent from './homepage_components/skills/webContent'
import CRMContent from './homepage_components/crmContent'

import { useState } from 'react'

import background from '../public/background.jpg'

import { Bebas_Neue } from 'next/font/google'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '300' })
const roboto1 = Roboto({ subsets: ['latin'], weight: '100' })
const roboto2 = Roboto({ subsets: ['latin'], weight: '500' })
const playfair = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function Home() {

  const [SkillsIndex, setSkillsIndex] = useState(0)
  
  return (
    <main>
      <div className='relative flex flex-col justify-center items-center bg-gradient-to-br from-cyan-500 via-blue-500 to-teal-200 w-screen h-screen'>
        <div className='z-10 flex justify-center md:justify-none items-center absolute top-0 w-screen h-20'>
          <div className={`flex justify-center items-center w-full gap-8 md:gap-16 ${roboto1.className}`}>
            <Link href='/' className={`text-white text-2xl md:text-3xl hover:text-sky-200`}>Home</Link>
            <Link href='www.youtube.com' className={`text-white text-2xl md:text-3xl hover:text-sky-200`}>About</Link>
            <Link href='www.youtube.com' className={`text-white text-2xl md:text-3xl hover:text-sky-200`}>Contact</Link>
          </div>
        </div>
        <p className={`text-white ${playfair.className} relative z-10 text-[6rem] md:text-[14rem] -mt-10 w-full font-semibold text-center leading-[5rem] md:leading-[20rem]`}>Ross Vasquez</p>
        <MainSkills Roboto={roboto.className} SkillsIndex={SkillsIndex} Bebas={playfair.className} setSkillsIndex={setSkillsIndex} />
        
      </div>
      {SkillsIndex === 0 ? <WebContent Roboto={roboto.className} Bebas={playfair.className} Roboto1={roboto1.className} Roboto2={roboto2.className} /> : null}
      {SkillsIndex === 1 ? <CRMContent Bebas={playfair.className} Roboto={roboto1.className} /> : null}
    </main>
  )
}
