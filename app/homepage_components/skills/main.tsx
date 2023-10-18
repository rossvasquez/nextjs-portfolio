'use client'

import { useState } from 'react'

import WebContent from '../webContent'

import { Playball } from 'next/font/google'

const playball = Playball({ subsets: ['latin'], weight: '400' })

import Image from 'next/image'

import arrow from '../../../public/arrow.png'

export default function SkillsMain({Roboto}: {Roboto: string}) {

    const [Skills, setSkills] = useState(["Web Developer", "CRM Specialist", "Digital Marketer"])
    const [SkillsIndex, setSkillsIndex] = useState(0)
    const [SkillDes] = useState([
        "Full-Stack Web Development via client side JavaScript/Typescript and Serverless NodeJS. I have experience writing VanillaJS, React(Vite, NextJS), and VueJS.",
        "As a Certified Salesforce Administrator I have hands-on experience in CRM. I am familiar with data storage, transformation, and flows. This helps me excel in web development.",
        "Expereience using Adobe Suite to generate both print and digital marketing pieces. I have worked with a real estate team to create various forms of media present below."
    ])

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

        if (test) {
            goForwards()
        } else {
            goBack()
        }
        
    }

    const Menu = () =>
    <div className="flex items-center justify-center md:-mt-28 gap-8">
        <div onClick={() => skillsController(false)} className="hover:cursor-pointer bg-opacity-50 hover:bg-opacity-70 shadow-inner flex justify-center items-center bg-white rounded-[100%] h-12 w-12">
            <Image
                src={arrow}
                alt='Menu Arrow Backwards'
                className='rotate-[180deg] h-6 w-6 mr-1'
            />
        </div>
        <div className={`text-slate-800 -ml-1 w-auto md:w-[60rem] text-[4.5rem] md:text-[8rem] leading-[4rem] md:leading-[12rem] text-center md:occShadow ${playball.className}`}>{Skills[SkillsIndex]}</div>
        <div onClick={() => skillsController(true)} className="hover:cursor-pointer bg-opacity-50 hover:bg-opacity-70 shadow-inner flex justify-center items-center bg-white rounded-[100%] h-12 w-12">
            <Image
                src={arrow}
                alt='Menu Arrow Backwards'
                className='h-6 w-6 ml-1'
            />
        </div>
    </div>

    function smoothScrollTo100vh() {
        const targetY = window.innerHeight; // 100vh in pixels
        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
      }

    const ScrollDown = () =>
    <div onClick={() => smoothScrollTo100vh()} className={`w-auto h-20 bg-slate-900 mt-2 rounded-[5px] ${Roboto} flex justify-center transition-all items-center px-20 text-2xl text-white hover:cursor-pointer hover:scale-[105%]`}>
        Learn More
    </div>

    const Content = () =>
    <div className='w-full flex justify-center items-center p-[5px] max-w-7xl h-auto rounded-[10px] mt-8 mb-8 shadow-md bg-neutral-400'>
        <div className=' flex flex-col justify-center p-8 items-center bg-white rounded-[5px] shadow-inner w-full h-full'>
            <p className={`text-4xl text-slate-900 font-light text-center leading-[4.4rem] ${Roboto}`}>{SkillDes[SkillsIndex]}</p>
        </div>
    </div>

    return(
        <>
        <Menu />
        <Content />
        <ScrollDown />
        {SkillsIndex === 0 ? <WebContent Roboto={Roboto} /> : null}
        </>
    )
}