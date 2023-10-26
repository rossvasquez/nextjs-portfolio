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
    scrollToIt: any;
};

export const MainSkills: React.FC<MainSkillsProps> = ({ Roboto, Bebas, SkillsIndex, setSkillsIndex, scrollToIt }) => {

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
    <div onClick={() => scrollToIt()} className={`absolute bottom-2 md:relative z-30 w-[calc(100%-1rem)] md:w-80 h-1/3 md:h-20 mx-auto bg-opacity-[15%] shadow-md bg-neutral-100 mt-40 rounded-[6px] ${Bebas} flex justify-center transition-all items-center text-5xl text-sky-200 pt-1 hover:text-neutral-100 hover:cursor-pointer active:bg-opacity-[30%]`}>
        {getBtnLabel()}
    </div>

    const Menu = () =>
    <div className="relative w-full z-20 mx-auto group flex items-center justify-center ">
        <div className={`absolute z-10 flex h-auto w-[300vw] ${CurrentTrans} ${SkillsIndex === 0 ? 'menu0' : null} ${SkillsIndex === 1 ? 'menu1' : null} ${SkillsIndex === 2 ? 'menu2' : null}`}>
            <div className={`text-zinc-800 pt-3 md:pt-20 lg:pt-5 px-6 md:px-20 text-left md:text-center w-[100vw] -mt-12 md:mt-0 leading-[5rem] text-[1.4rem] md:text-[3.99rem] md:leading-[5rem] flex h-auto drop-shadow-md justify-start md:justify-center items-start md:items-center ${pressstart.className}`}>Web Developer</div>
            <div className={`text-zinc-800 pt-3 md:pt-20 lg:pt-5 px-6 md:px-20 text-left md:text-center w-[100vw] -mt-12 md:mt-0 leading-[5rem] text-[2.6rem] md:text-[6rem] md:leading-[5rem] flex h-auto drop-shadow-md justify-start md:justify-center items-start md:items-center ${work.className}`}>CRM Specialist</div>
            <div className={`text-zinc-800 pt-3 md:pt-28 lg:pt-5 px-6 md:px-20 text-left md:text-center w-[100vw] -mt-12 md:mt-0 leading-[5rem] text-[3rem] md:text-[7rem] md:leading-[5.5rem] flex h-auto drop-shadow-md justify-start md:justify-center items-start md:items-center ${playball.className}`}>Digital Marketer</div>
        </div>
        <div className='max-w-7xl h-20 w-screen relative flex items-center'>
            <div onClick={() => skillsController(false)} className={`${SkillsIndex === 0 ? 'opacity-50 hover:cursor-not-allowed' : 'opacity-100 shadow-inner hover:shadow-sm hover:cursor-pointer hover:bg-opacity-[30%]' } transition-all absolute left-[3.8%] -bottom-20 md:bottom-auto md:left-[2%] z-20 bg-opacity-[15%] flex justify-center items-center bg-neutral-100 active:bg-cyan-200 rounded-[100%] h-16 w-16`}>
                <Image
                    src={arrow}
                    alt='Menu Arrow Backwards'
                    className='rotate-[180deg] h-7 w-7 opacity-[80%] mr-1'
                />
            </div>
            <div onClick={() => skillsController(true)} className={`${SkillsIndex === 2 ? 'opacity-50 hover:cursor-not-allowed' : 'opacity-100 shadow-inner hover:shadow-sm hover:cursor-pointer hover:bg-opacity-[30%]' } transition-all absolute left-[calc(5.6rem+1%)] -bottom-20 md:bottom-auto md:left-[98%] md:translate-x-[-100%] z-20 bg-opacity-[15%] flex justify-center items-center bg-neutral-100 active:bg-cyan-200 rounded-[100%] h-16 w-16`}>
                <Image
                    src={arrow}
                    alt='Menu Arrow Backwards'
                    className='h-7 w-7 opacity-[80%] ml-1'
                />
            </div>
        </div>
    </div>

    

    return(
        <>
            <p className={`text-transparent bg-gradient-to-tl from-teal-300 to-sky-200 drop-shadow-lg bg-clip-text ${Bebas} relative z-10 text-[8rem] md:text-[14rem] w-full font-semibold text-left md:text-center px-4 md:px-0 leading-[6.5rem] mt-[14rem] md:mt-[10rem] py-1 md:leading-[11rem]`}>Ross Vasquez</p>
            <div className='relative h-full md:h-auto z-10 w-screen px-2 overflow-hidden -mt-2'>
                <Menu />
                <ScrollDown />
            </div>
        </>
    )
}