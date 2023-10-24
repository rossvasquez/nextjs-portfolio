'use client'

import { useState } from 'react'

import { Playball } from 'next/font/google'
import { Press_Start_2P } from 'next/font/google'
import { Work_Sans } from 'next/font/google'

const playball = Playball({ subsets: ['latin'], weight: '400' })
const work = Work_Sans({ subsets: ['latin'], weight: '400' })
const pressstart = Press_Start_2P({ subsets: ['latin'], weight: '400' })

import Image from 'next/image'

import arrow from '../../../public/arrow.png'

import './menu.css'

type MainSkillsProps = {
    Bebas: string;
    Roboto: string;
    SkillsIndex: number;
    setSkillsIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const MainSkills: React.FC<MainSkillsProps> = ({ Roboto, Bebas, SkillsIndex, setSkillsIndex }) => {

    const [Skills, setSkills] = useState(["Web Developer", "CRM Specialist", "Digital Marketer"])

    const [CurrentTrans, setCurrentTrans] = useState('translate-x-[200vw]')

    const skillsController = (test: boolean) => {

        const goForwards = () => {
            if (SkillsIndex < 2) {
                setSkillsIndex(prev => prev+1)
            }
        }

        const goBack = () => {
            if (SkillsIndex > 0) {
                setSkillsIndex(prev => prev-1)
            }
        }

        if (SkillsIndex === 0) {
            setCurrentTrans('translate-x-[100vw]')
        } else if (SkillsIndex === 1) {
            setCurrentTrans('translate-x-[0vw]')
        } else {
            setCurrentTrans('translate-x-[-100vw]')
        }

        if (test) {
            goForwards()
        } else {
            goBack()
        }
        
    }

    const scrollToSection = () => {
      const targetY = window.innerHeight
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      })
    }

    const getBtnLabel = () => {
        if (SkillsIndex === 0) {
            return 'Portfolio'
        } else if (SkillsIndex === 1) {
            return 'Certification'
        } else {
            return 'Past Work'
        }
    }

    const ScrollDown = () =>
    <div onClick={() => scrollToSection()} className={`relative z-30 w-80 h-20 mx-auto bg-opacity-[15%] shadow-md bg-neutral-100 -mt-0 md:-mt-16 rounded-[6px] ${Bebas} flex justify-center transition-all items-center text-5xl text-sky-200 pt-1 hover:text-neutral-100 hover:cursor-pointer active:bg-opacity-[30%]`}>
        {getBtnLabel()}
    </div>

    const Menu = () =>
    <div className="relative w-screen z-20 mx-auto h-[23rem] -mt-[7rem] lg:-mt-[9rem] overflow-hidden group flex items-center justify-center ">
        <div className={`absolute z-10 flex h-auto w-[300vw] ${CurrentTrans} ${SkillsIndex === 0 ? 'menu0' : null} ${SkillsIndex === 1 ? 'menu1' : null} ${SkillsIndex === 2 ? 'menu2' : null}`}>
            <div className={`text-zinc-800 px-20 text-center w-[100vw] text-[2.3rem] md:text-[3.99rem] leading-[3rem] md:leading-[5rem] flex h-auto drop-shadow-md justify-center items-center ${pressstart.className}`}>Web Developer</div>
            <div className={`text-zinc-800 px-20 text-center w-[100vw] text-[3.5rem] md:text-[6rem] leading-[3rem] md:leading-[5rem] flex h-auto drop-shadow-md justify-center items-center ${work.className}`}>CRM Specialist</div>
            <div className={`text-zinc-800 px-20 text-center w-[100vw] text-[5rem] md:text-[7rem] leading-[4rem] md:leading-[5.5rem] flex h-auto drop-shadow-md justify-center items-center ${playball.className}`}>Digital Marketer</div>
        </div>
        <div className='max-w-7xl h-20 w-screen relative flex items-center'>
            <div onClick={() => skillsController(false)} className={`${SkillsIndex === 0 ? 'opacity-50 hover:cursor-not-allowed' : 'opacity-100 shadow-md hover:cursor-pointer hover:bg-opacity-[30%]' } transition-all absolute right-[52%] -bottom-24 md:bottom-auto md:left-[2%] z-20 bg-opacity-[15%] flex justify-center items-center bg-neutral-100 rounded-[100%] h-12 w-12`}>
                <Image
                    src={arrow}
                    alt='Menu Arrow Backwards'
                    className='rotate-[180deg] h-6 w-6 mr-1'
                />
            </div>
            <div onClick={() => skillsController(true)} className={`${SkillsIndex === 2 ? 'opacity-50 hover:cursor-not-allowed' : 'opacity-100 shadow-md hover:cursor-pointer hover:bg-opacity-[30%]' } transition-all absolute left-[52%] -bottom-24 md:bottom-auto md:left-[98%] md:translate-x-[-100%] z-20 bg-opacity-[15%] flex justify-center items-center bg-neutral-100 rounded-[100%] h-12 w-12`}>
                <Image
                    src={arrow}
                    alt='Menu Arrow Backwards'
                    className='h-6 w-6 ml-1'
                />
            </div>
        </div>
    </div>

    

    return(
        <>
            <p className={`text-transparent bg-gradient-to-tl from-teal-300 to-sky-200 drop-shadow-lg bg-clip-text ${Bebas} relative z-10 text-[8rem] md:text-[14rem] w-full font-semibold text-center leading-[6.5rem] py-1 md:leading-[11rem]`}>Ross Vasquez</p>
            <div className='relative z-10'>
                <Menu />
                <ScrollDown />
            </div>
        </>
    )
}