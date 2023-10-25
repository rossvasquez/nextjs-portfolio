'use client'

import Image from 'next/image'

import { useState } from 'react'

import me from '../../public/me.png'

import github from '../../public/about/github.png'
import linkedin from '../../public/about/linkedin.png'
import x from '../../public/about/x.png'

export default function About({Bebas, Roboto, Roboto1}:{Bebas: string, Roboto: string, Roboto1: string}) {

    const [Icons] = useState([
        {
            "image": github,
            "url": "https://github.com/rossvasquez" 
        },
        {
            "image": linkedin,
            "url": "https://linkedin.com/in/ross-vasquez" 
        },
        {
            "image": x,
            "url": "https://x.com/quezdevelops" 
        }
    ])

    return(
        <div className='w-full max-w-7xl md:p-2 mt-28 md:mb-8 pb-8 md:pb-2'>
          <div className='w-full h-auto md:p-0 p-2'>
            <div className='flex flex-col md:flex-row-reverse bg-neutral-800 bg-opacity-60 shadow-inner overflow-hidden rounded-md w-full justify-center items-center'>
                <div className='w-full md:w-1/2 flex justify-center md:justify-normal md:pl-8 items-center'>
                    <div className='h-full flex justify-center items-end w-full'>
                        <div className='shadow-md bg-zinc-300 bg-opacity-40 mt-6 w-[18rem] md:w-[30rem] h-[18rem] md:h-[30rem] overflow-hidden rounded-[100%]'>
                        <Image
                            src={me}
                            alt='Picture of Ross Vasquez'
                            className='w-full md:w-[30rem] h-auto md:translate-y-12 drop-shadow-md'
                            priority
                        />
                        </div>
                    </div>
                </div>
                <div className='relative w-full md:w-1/2 py-6 rounded-md md:shadow-none h-full flex flex-col justify-center items-center'>
                    <p className={`w-full md:w-[30rem] text-center md:text-right text-7xl md:text-8xl text-white drop-shadow-md ${Bebas}`}>Ross Vasquez</p>
                    <p className={`w-full md:w-[30rem] text-center md:text-right text-4xl text-white drop-shadow-md ${Bebas}`}>Des Moines, IA</p>
                    <div className='relative w-[30rem] mt-6 h-24'>
                        <div className='scale-[90%] md:scale-[100%] md:absolute md:right-0 flex justify-center items-center w-auto gap-10'>
                        {Icons.map((icon, id) =>
                            <a key={id} href={icon.url} target='_blank' className={`${id === 2 ? 'mt-2' : null } h-16 w-16 flex`}>
                                <Image
                                    src={icon.image}
                                    alt={`Logo`}
                                    className='hover:scale-[105%] transition-all hover:cursor-pointer hover:opacity-80 drop-shadow-md w-full h-auto'
                                    priority
                                />
                            </a>
                        )}
                        </div>
                    </div>
                    <div className='relative flex justify-center w-full md:w-[30rem] md:h-14 mt-2'>
                        <a href='/about/CV.pdf' target='_blank' className='w-52 mb-2 md:mb-0 md:absolute flex justify-center bg-gradient-to-br from-blue-500 to-cyan-500 items-center right-0 hover:bg-neutral-800 active:text-neutral-300 hover:bg-opacity-40 text-white hover:text-opacity-80 hover:scale-[103%] transition-all hover:cursor-pointer md:px-14 h-20 rounded-[70px] pb-[2px] shadow-md'>
                            <p className={`${Roboto1} text-3xl`}>Resume</p>
                        </a>
                    </div>
                    {/* <p className={`w-[30rem] text-right text-5xl mt-20 ${Bebas}`}>24 Years Old</p> */}
                </div>
            </div>
            <div className={'bg-neutral-800 p-6 bg-opacity-[60%] shadow-inner rounded-md w-full h-auto mt-2 md:mt-6'}>
                <p className={`text-white text-2xl md:text-3xl ${Roboto1} text-left leading-[3rem] md:leading-[4rem]`}>I am a tech enthusiast from the Des Moines area. I enjoy leveraging my diverse skillset of web development, data transformation, and marketing to create original solutions. I am seeking a full-time position where I can be multi-faceted in providing value for an organization. My ideal position will allow me to grow my knowledge of what it means to architecht and implement through multiple mediums. I want to be challenged. To me, the best part of the development proccess in anything I do, is the feeling of solving a problem. It means I have gained something for future application.
                <br/><br/>
                Outside of technology, I am an avid golfer and pick-up basketball player. I used to be better, then I started coding, oh well. I enjoy life with my wonderful girlfriend who is my biggest supporter.
                </p>
            </div>
          </div>
        </div>
    )
}