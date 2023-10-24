'use client'

import { useState } from 'react'

import { webIntro } from './webContentIntro'

import { projectInfo } from './projectContent'

import Image from 'next/image'
import Link from 'next/link'

import arrow from '../../../public/arrow.png'

export default function WebContent({Roboto, Bebas, Roboto1, Roboto2}: {Roboto: string, Bebas: string, Roboto1: string, Roboto2: string}) {

    const [ProjIndex, setProjIndex] = useState(0)
    const [ProjTab, setProjTab] = useState([0,0,0,0])

    const [ProjInfo, setProjInfo] = useState(projectInfo)

    const [SkillDes] = useState(webIntro)

    const Content1 = () =>
    <div className='w-full flex justify-center items-center overflow-hidden max-w-7xl mx-auto h-auto rounded-[4px] mt-6 shadow-md bg-zinc-800 bg-opacity-[35%]'>
        <div className='flex flex-col justify-center p-8 items-center w-full h-full'>
            <p className={`text-2xl md:text-4xl text-white text-left leading-[2.4rem] md:leading-[4.4rem] ${Roboto1}`}><span className={`${Roboto2}`}>I am a Full-Stack Web App Developer via Client Side JavaScript/Typescript and Server Side NodeJS.</span>
            <br/><span className={`${Roboto}`}>‣</span> Experienced writing Vanilla JavaScript, React(Vite, NextJS), and VueJS.
            <br/><span className={`${Roboto}`}>‣</span> CSS and frameworks like Tailwind for styling.
            <br/><span className={`${Roboto}`}>‣</span> PostgreSQL and NoSQL as well as services like Supabase and Firebase for Databasing.
            <br/><span className={`${Roboto}`}>‣</span> Serverless functions via AWS, Cloudflare, and Netlify. I am familiar with Git as well as CI/CD in Netlify and AWS via GitHub.</p>
        </div>
    </div>

    const [WebSkillIndex, setWebSkillIndex] = useState(0)

    const getSkill = () => {
        if (WebSkillIndex === 0) {
            return 'Languages'
        } else if (WebSkillIndex === 1) {
            return 'Frameworks'
        } else if (WebSkillIndex === 2) {
            return 'Styling'
        } else if (WebSkillIndex === 3) {
            return 'Backend Services'
        } else if (WebSkillIndex === 4) {
            return 'Database'
        } else if (WebSkillIndex === 5) {
            return 'DevOps'
        }

    }

    const Content = () =>
    <div className='w-full flex flex-col justify-center items-center overflow-hidden max-w-7xl mx-auto h-auto md:mt-6 shadow-md bg-neutral-800 p-2 md:p-4 md:rounded-[6px] bg-opacity-[30%]'>
        <div className='shadow-inner px-2 mb-2 md:mb-4 bg-neutral-800 bg-opacity-[40%] w-full rounded-md'>
            <p className={`${Bebas} text-5xl md:text-6xl text-white mt-8 w-full text-center`}>Full Stack Web App Development</p>
            <p className={`${Roboto1} text-white text-3xl md:text-4xl text-center mt-2 mb-8`}>{getSkill()}</p>
        </div>
        <div className='flex flex-col justify-center bg-neutral-800 rounded-[6px] bg-opacity-[40%] shadow-inner px-14 py-6 items-center w-full h-full'>
            {SkillDes.map((item, id) => 
            <div key={id} className={`w-full h-auto flex flex-wrap justify-center mb-6 gap-x-16 md:gap-x-14 transition-all ${WebSkillIndex === id ? 'opacity-100' : 'opacity-0 hidden'}`}>
                {item.map((child) => 
                    <div key={child.name} className={`mt-6 md:mt-0 flex flex-col justify-center items-center md:py-6 ${WebSkillIndex === 1 ? 'md:px-6' : 'md:px-16'} rounded-[4px]`}>
                        <div className='h-24 md:h-32 w-full flex justify-center'>
                            <Image
                                alt={`${child.name} Logo`}
                                src={child.image}
                                className={`${child.name == 'Google Fonts' ? 'scale-[75%]' : null} ${child.name == 'CI/CD' ? 'scale-[90%]' : null} ${child.name == 'WordPress' ? 'scale-[90%]' : null} ${child.name == 'CSS' ? 'scale-[75%]' : null} ${child.name == 'Netlify' ? 'scale-[90%]' : null} ${child.name == 'AWS' ? 'scale-[120%] mt-2' : null} h-full w-auto drop-shadow-lg`}
                                priority
                            />
                        </div>
                        <p className={`text-white ${Roboto1} text-2xl md:text-3xl h-auto mt-2 md:bottom-0 drop-shadow-md`}>{child.name}</p>
                    </div>
                )}
            </div>
            )}
            <div className='flex justify-center items-center gap-8 mt-4 text-zinc-800'>
                <div onClick={() => {if (WebSkillIndex > 0) {setWebSkillIndex(prev => prev - 1)}}} className='w-14 h-14 flex justify-center rounded-full p-3 hover:cursor-pointer hover:bg-zinc-800 hover:bg-opacity-[30%] items-center'>
                    <Image
                        alt='Back Arrow'
                        src={arrow}
                        className='rotate-180 mr-1'
                    />
                </div>
                <div className='text-2xl flex flex-col justify-center items-center'>
                    <p className={`${Roboto1} text-white text-2xl`}>{WebSkillIndex + 1}/6</p>
                </div>
                <div onClick={() => {if (WebSkillIndex < 5) {setWebSkillIndex(prev => prev + 1)}}} className='w-14 h-14 flex justify-center rounded-full p-3 hover:cursor-pointer hover:bg-zinc-800 hover:bg-opacity-[30%] items-center'>
                    <Image
                        alt='Forwards Arrow'
                        src={arrow}
                        className='ml-1'
                    />
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center bg-neutral-800 p-6 bg-opacity-40 shadow-inner rounded-md mt-2 md:mt-4'>
            <p className={`text-white text-2xl md:text-3xl ${Roboto1} leading-[3rem] md:leading-[4rem]`}>From creating basic Shopify websites in High School, to my first basic application in Kivy (Python). I always knew I was interested in software, but never fully realized I wanted to develop. That was until I completed my Salesforce Administrator Certification. After learning of JavaScript Development in Salesforce, I accidentally dove head first into the web. I began by creating a VanillaJS Catering Order App for the local restaurant I helped manage. From there, it has been over a year of learning what it means to create a modern full stack application through hands on experience. I have worked with various JavaScript Frameworks and Tools, as well as Backend Services beyond JavaScript. I&#39;ve learned what allows the world to consume, transfer, and reflect data between itself. I am excited and optimistic about development and greatly enjoy the ability to create bespoke solutions that others can interact with.</p>
        </div>
    </div>

    const isEven = (number: any) => {
        return number % 2 === 0
    }

    const projects = () =>
    <div className="relative overflow-hidden w-full h-full flex flex-col max-w-7xl px-2 md:px-0">
        {ProjInfo.map((item, id) =>
            <div key={item.name} className={`shadow-sm flex justify-center items-center bg-gradient-to-tr ${ProjIndex === (id+1) ? 'from-cyan-500 shadow-md' : 'from-teal-200 hover:translate-y-[-2px] hover:shadow-md hover:from-blue-500 hover:to-teal-200'} to-blue-500 mt-4 transition-all duration-800 overflow-hidden rounded-md rounded-[4px]`}>
                <div className={`overflow-hidden transition-[height] duration-300 w-full ease-in-out ${ProjIndex === (id+1) ? 'h-auto' : 'h-[10rem] pt-[8px] relative'}`}>
                    <div onClick={ProjIndex === (id+1) ? () => setProjIndex(0) : () => setProjIndex(id+1)} className='hover:cursor-pointer absolute w-full h-[10rem] z-20'/>
                    <div className={`w-full flex items-center relative h-40 transition-all duration-300 ease-in-out ${ProjIndex === (id+1) ? 'bg-transparent' : 'bg-zinc-800'} first:mt-0 shadow-md`}>
                        <div className='w-full'>
                            <div className='flex w-3/4'>
                                <p className={`${ProjIndex === (id+1) ? `scale-[110%]` : `scale-[100%]`} ${Bebas} pl-6 md:pl-14 mt-[2px] text-4xl text-white transition-all duration-300 ease-in-out`}>{item.name}</p>
                                <p className={`text-3xl ${ProjIndex === (id+1) ? `translate-x-[16px]` : `translate-x-[6px]`} duration-300 transition-all`}>{item.emoji}</p>
                            </div>
                            <p className={`${Roboto} ${ProjIndex === (id+1) ? `text-neutral-100` : `text-neutral-300 scale-[100%] mb-4`} w-auto pl-6 md:pl-14 text-lg transition-all duration-300 ease-in-out`}>{item.tagline}</p>
                        </div>
                        <div className='absolute right-8 mb-2 rounded-full h-12 w-12'>
                            <Image
                                src={arrow}
                                alt='Expand Section Arrow'
                                className={`${ProjIndex === id + 1 ? '-rotate-90' : 'rotate-90'} transition-all duration-300 ease-in-out scale-50`}
                            />
                        </div>
                    </div>
                    <div className={`${Roboto} p-0 md:p-6 w-full bg-zinc-100 min-h-[20rem] relative h-auto mx-auto text-2xl leading-loose`}>
                        <div className={`${id === 0 || isEven(id) ? 'md:float-left md:pr-6' : 'md:float-right md:pl-6'}`}>
                            <div className='relative group w-auto md:w-[30rem] h-auto md:h-[18rem] md:rounded-md overflow-hidden shadow-md bg-slate-300'>
                                <Image
                                    src={item.image}
                                    alt={`${item.name} Site Logo`}
                                    className={`${item.name == 'State Fairdle' ? '-mt-12' : null } relative z-10 w-full h-auto`}
                                    priority
                                />
                                <div className='absolute z-20 top-0 flex justify-center items-center w-full h-full bg-zinc-800 bg-opacity-0 opacity-0 group-hover:bg-opacity-[60%] group-hover:opacity-100 group-hover:cursor-pointer'>
                                    <a href={item.link} target='_blank' className={`py-3 px-10 flex justify-center bg-zinc-800 bg-opacity-100 hover:border-[.1rem] border-opacity-60 border-white shadow-inner rounded-[4px] text-white items-center ${Roboto}`}>
                                        Visit Site
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p className={`-mt-2 p-4 md:mb-6 md:p-0 text-xl md:text-2xl leading-[2.7rem] md:leading-[3rem]`}>{item.description}</p>
                        <div className={`px-4 md:px-0 relative md:absolute bottom-4 ${id === 0 || isEven(id) ? 'md:right-6' : 'md:left-6'} flex flex-wrap`}>
                            {item.with.map((tool, id) =>
                                <p className={`${Roboto} text-lg`} key={id}><span className='underline'>{tool}</span>{(id+1) === item.with.length ? '' : `,`}&nbsp;</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div> 

    return(
        <div className="flex flex-col justify-center items-center pb-8 bg-gradient-to-tr from-cyan-500 via-blue-500 md:px-2 to-teal-200 h-auto w-screen h-auto">
            <Content />
            {projects()}
        </div>
    )
}