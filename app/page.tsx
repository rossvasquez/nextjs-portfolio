'use client'

import Link from 'next/link'
import Image from 'next/image'

import { MainSkills } from './homepage_components/skills/main'
import About from './homepage_components/about'
import Contact from './homepage_components/contact'
import WebContent from './homepage_components/skills/webContent'
import CRMContent from './homepage_components/crmContent'
import Marketing from './homepage_components/marketingContent'

import { useState, useRef } from 'react'

import background from '../public/background.jpg'

import { Bebas_Neue } from 'next/font/google'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '300' })
const roboto1 = Roboto({ subsets: ['latin'], weight: '100' })
const roboto2 = Roboto({ subsets: ['latin'], weight: '500' })
const playfair = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function Home() {

  const [SkillsIndex, setSkillsIndex] = useState(0)
  const [Page, setPage] = useState(1)

  const scrollToSection = () => {
    let targetY = 0
    if (SkillsIndex === 0) {
      if (webRef.current != null) {
      const nums = webRef.current.getBoundingClientRect()
      targetY = nums.top
      }
    } else if (SkillsIndex === 1) {
      if (crmRef.current != null) {
      const nums = crmRef.current.getBoundingClientRect()
      targetY = nums.top
      }
    } else if (SkillsIndex === 2) {
      if (marketingRef.current != null) {
      const nums = marketingRef.current.getBoundingClientRect()
      targetY = nums.top
      }
    }
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    })
  }

  const webRef = useRef<HTMLDivElement>(null)
  const crmRef = useRef<HTMLDivElement>(null)
  const marketingRef = useRef<HTMLDivElement>(null)
  
  return (
    <main className='select-text'>
      <div className={`relative flex flex-col justify-center items-center bg-gradient-to-br min-h-[100vh] from-cyan-500 via-blue-500 to-teal-200 w-screen ${Page === 1 ? 'h-screen' : 'h-auto'}`}>
        <div className='z-10 flex justify-center md:justify-none items-center absolute top-0 w-screen h-20'>
          <div className={`relative flex justify-center items-center w-auto py-3 mt-7 px-8 bg-neutral-100 bg-opacity-[15%] rounded-full shadow-md gap-8 md:gap-12 ${playfair.className}`}>
            <div className={`absolute left-0 ${Page === 1 ? 'w-[7.2rem] md:w-[7.3rem]' : null } ${Page === 2 ? 'translate-x-[5.9rem] md:translate-x-[6.5rem] w-[6.5rem] md:w-[7.1rem]' : null } ${Page === 3 ? 'translate-x-[11.4rem] md:translate-x-[13.3rem] w-[8.2rem]' : null } transition-all h-full scale-[110%] rounded-full bg-zinc-800 bg-opacity-[1000%]`} />
            <div onClick={() => {setSkillsIndex(0); setPage(1)}} className={`text-3xl relative z-10 ${Page === 2 ? 'translate-x-[-.4rem] md:translate-x-[0rem]' : null } ${Page === 1 ? 'text-white' : 'hover:text-white hover:cursor-pointer text-sky-200'}`}>Home</div>
            <div onClick={() => {setSkillsIndex(3); setPage(2)}} className={`text-3xl relative z-10 transition-all ${Page === 1 ? 'translate-x-[1.2rem] md:translate-x-[.6rem]' : null } ${Page === 2 ? 'text-white translate-x-[0rem]' : 'hover:text-white hover:cursor-pointer text-sky-200'} ${Page === 3 ? 'translate-x-[-.6rem]' : null}`}>About</div>
            <div onClick={() => {setSkillsIndex(3); setPage(3)}} className={`text-3xl relative z-10 transition-all ${Page != 3 ? 'translate-x-[.6rem] md:translate-x-[0rem]' : null } ${Page === 3 ? 'text-white' : 'hover:text-white hover:cursor-pointer text-sky-200'}`}>Contact</div>
          </div>
        </div>
        { Page === 1 ?
        <MainSkills Roboto={roboto.className} SkillsIndex={SkillsIndex} Bebas={playfair.className} setSkillsIndex={setSkillsIndex} scrollToIt={scrollToSection} />
        : null }
        { Page === 2 ?
        <About Bebas={playfair.className} Roboto={roboto.className} Roboto1={roboto1.className} />
        : null }
        { Page === 3 ?
        <Contact Bebas={playfair.className} Roboto={roboto.className} Roboto1={roboto1.className} />
        : null }
      </div>
      {SkillsIndex === 0 ? <WebContent refer={webRef} Roboto={roboto.className} Bebas={playfair.className} Roboto1={roboto1.className} Roboto2={roboto2.className} /> : null}
      {SkillsIndex === 1 ? <CRMContent refer={crmRef} Bebas={playfair.className} Roboto={roboto1.className} /> : null}
      {SkillsIndex === 2 ? <Marketing refer={marketingRef} Roboto={roboto.className} Bebas={playfair.className} Roboto1={roboto1.className} Roboto2={roboto2.className} /> : null}
    </main>
  )
}
