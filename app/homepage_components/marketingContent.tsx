'use client'

import Image from 'next/image'

import circle_arrow from '../../public/circle_arrow.png'

import Photo1 from '../../public/real_estate/Photo1.jpg'
import Photo2 from '../../public/real_estate/Photo2.jpg'
import Photo3 from '../../public/real_estate/Photo3.png'
import Photo4 from '../../public/real_estate/Photo4.jpg'
import Photo5 from '../../public/real_estate/Photo5.jpg'
import Photo6 from '../../public/real_estate/Photo6.jpg'
import Photo7 from '../../public/real_estate/Photo7.jpg'
import Photo8 from '../../public/real_estate/Photo8.jpg'
import Photo9 from '../../public/real_estate/Photo9.jpg'
import Photo10 from '../../public/real_estate/Photo10.jpg'
import Photo11 from '../../public/real_estate/Photo11.jpg'
import Photo12 from '../../public/real_estate/Photo12.jpg'
import Photo13 from '../../public/real_estate/Photo13.jpg'
import Photo14 from '../../public/real_estate/Photo14.jpg'
import Photo15 from '../../public/real_estate/Photo15.jpg'
import Photo16 from '../../public/real_estate/Photo16.jpg'

import mcloud from '../../public/mcloud.png'

import mailchimp from '../../public/em/mailchimp.jpg'
import emailjs from '../../public/em/emailjs.png'

import { useState } from 'react'

export default function Marketing({Roboto, Bebas, Roboto1, Roboto2}: {Roboto: string, Bebas: string, Roboto1: string, Roboto2: string}) {

    const [MenuState, setMenuState] = useState(0)

    const [Photos, setPhotos] = useState([Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9, Photo10, Photo11, Photo12, Photo13, Photo14, Photo15, Photo16])

    const Menu = () =>
    <div className={`${Bebas}`}>
        <div onClick={() => setMenuState(1)} className='flex group justify-center items-center bg-neutral-800 hover:cursor-pointer hover:bg-opacity-[45%] p-6 bg-opacity-40 shadow-inner rounded-md'>
            <p className={`py-16 text-white text-7xl drop-shadow-md group-hover:text-sky-300 group-hover:scale-[103%] transition-all`}>Email Marketing</p>
        </div>
        <div onClick={() => setMenuState(2)} className='flex group justify-center items-center bg-neutral-800 hover:cursor-pointer hover:bg-opacity-[45%] mt-4 p-6 bg-opacity-40 shadow-inner rounded-md'>
            <p className={`py-16 text-white text-7xl drop-shadow-md group-hover:text-sky-300 group-hover:scale-[103%] transition-all`}>Content Marketing</p>
        </div>
        <div onClick={() => setMenuState(3)} className='flex group justify-center items-center bg-neutral-800 hover:cursor-pointer hover:bg-opacity-[45%] mt-4 p-6 bg-opacity-40 shadow-inner rounded-md'>
            <p className={`py-16 text-white text-7xl drop-shadow-md group-hover:text-sky-300 group-hover:scale-[103%] transition-all`}>CRM Marketing</p>
        </div>
    </div>

    const scrollToSection = () => {
      const targetY = window.innerHeight
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      })
    }

    const backFunc = () => {
        setMenuState(0)
        scrollToSection()
    }

    const Back = () =>
    <div className='flex items-center w-full relative h-16 mb-4'>
        <p className={`${Bebas} text-5xl pl-6 text-white drop-shadow-md`}>
            {MenuState === 1 ? 'Email Marketing' : null}
            {MenuState === 2 ? 'Content Marketing' : null}
            {MenuState === 3 ? 'CRM Marketing' : null}
        </p>
        <div onClick={() => backFunc()} className='absolute hover:bg-neutral-800 hover:bg-opacity-40 hover:cursor-pointer hover:shadow-inner right-4 h-16 w-16 rounded-full flex justify-center items-center'>
            <Image
                src={circle_arrow}
                alt='Back to Marketing Content'
                className='h-full w-full scale-[65%] drop-shadow-md'
                priority
            />
        </div>
    </div>

    const EmailContent = () =>
    <div>
        <div className='h-auto p-6 w-full bg-neutral-800 shadow-inner bg-opacity-40 rounded-md'>
            <p className={`text-white text-3xl ${Roboto} leading-[4rem]`}>I have used the following services to create email content:</p>
            <div className='flex w-full pl-12 my-4 items-center gap-12'>
                <div className='flex flex-col items-center'>
                    <div className='h-60 w-60 rounded-[100%] overflow-hidden shadow-md flex justify-center items-center'>
                        <Image
                            src={mailchimp}
                            alt='Mailchimp'
                            className='h-full w-auto'
                        />
                    </div>
                    <p className={`${Roboto2} text-3xl text-white mt-4`}>Mailchimp</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='h-60 w-60 rounded-[100%] overflow-hidden bg-white shadow-md flex justify-center items-center'>
                        <Image
                            src={emailjs}
                            alt='emailjs'
                            className='h-3/4 w-auto'
                        />
                    </div>
                    <p className={`${Roboto2} text-3xl text-white mt-4`}>EmailJS</p>
                </div>
            </div>
        </div>
    </div>

    const MarketingContent = () =>
    <div>
        <div className='h-auto p-6 w-full bg-neutral-800 shadow-inner bg-opacity-40 rounded-md'>
            <p className={`text-white text-3xl ${Roboto1} leading-[4rem]`}>I have experience creating digital and print marketing products in Adobe Suite, primarily with Photoshop. Over time I have created marketing materials for various freelance situations. I worked with a real estate team to create marketing materials for social media and other mediums. I have also spent time creating various passion projects to test my graphic and creative skills.</p>
        </div>
        <div className='h-auto p-6 mt-6 w-full bg-neutral-800 shadow-inner bg-opacity-40 rounded-md'>
            <div className='flex justify-center flex-wrap gap-6'>
            {Photos.map((item, i) =>
            <div className='h-80 w-auto'>
              <Image
                key={`photo-${i + 1}`}
                src={item}
                alt={`Photo ${i + 1}`}
                className='h-80 w-auto'
                priority
              />
            </div>
            )}
            </div>
        </div>
    </div>

    const CRMContent = () =>
    <div>
        <div className='h-auto p-6 w-full bg-neutral-800 shadow-inner bg-opacity-40 rounded-md'>
            <Image
                src={mcloud}
                alt="Salesforce Marketing Cloud"
                className='w-60 h-auto float-right mr-10'
            />
            <p className={`text-white text-3xl ${Roboto1} leading-[4rem]`}>Utilizing CRM records to automate marketing as well as collecting data for storage in a CRM is an important aspect of a well oiled business. Utilizing Salesforce Marketing Cloud to create workflows can be a great way to solve this. VisualForce pages are also another common use case to collect data. I learned about these concepts while studying for my certification exam through hands on learning modules in Trailhead. With an extensive array of third-party integrations on AppExchange and the ability to communicate with data directly via API, the sky is the limit. Whether you're using Salesforce or another CRM/CMS, marketing automation is something I feel confident in working with.</p>
        </div>
    </div>

    return(
        <div className="flex flex-col justify-center items-center bg-gradient-to-tr from-cyan-500 via-blue-500 px-2 to-teal-200 min-h-[100vh] h-auto w-screen h-auto">
            <div className='relative flex flex-col max-w-7xl w-full bg-neutral-800 p-6 rounded-md bg-opacity-[30%] mt-6 justify-center'>
                {MenuState != 0 ? <Back /> : null}
                {MenuState === 0 ? <Menu /> : null}
                {MenuState === 1 ? <EmailContent /> : null}
                {MenuState === 2 ? <MarketingContent /> : null}
                {MenuState === 3 ? <CRMContent /> : null}
            </div>
        </div>
    )
}