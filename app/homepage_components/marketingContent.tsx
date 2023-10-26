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

import { sendEmailController } from './emailController'

import { useState } from 'react'

export default function Marketing({Roboto, Bebas, Roboto1, Roboto2, refer}: {Roboto: string, Bebas: string, Roboto1: string, Roboto2: string, refer: any}) {

    const [MenuState, setMenuState] = useState(0)

    const [Photos, setPhotos] = useState([Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9, Photo10, Photo11, Photo12, Photo13, Photo14, Photo15, Photo16])

    const Menu = () =>
    <div className={`${Bebas} h-[calc(100vh-2rem)] md:h-auto flex flex-col gap-4`}>
        <div onClick={() => setMenuState(1)} className='flex h-1/3 group justify-center items-center bg-neutral-800 hover:cursor-pointer hover:bg-opacity-[60%] p-6 bg-opacity-50 hover:shadow-md shadow-inner rounded-md'>
            <p className={`py-16 text-white text-5xl md:text-7xl drop-shadow-md group-hover:text-sky-300 group-hover:scale-[103%] w-full text-center transition-all`}>Email Marketing</p>
        </div>
        <div onClick={() => setMenuState(2)} className='flex h-1/3 group justify-center items-center bg-neutral-800 hover:cursor-pointer hover:bg-opacity-[60%] p-6 bg-opacity-50 hover:shadow-md shadow-inner rounded-md'>
            <p className={`py-16 text-white text-5xl md:text-7xl drop-shadow-md group-hover:text-sky-300 group-hover:scale-[103%] w-full text-center transition-all`}>Content Marketing</p>
        </div>
        <div onClick={() => setMenuState(3)} className='flex h-1/3 group justify-center items-center bg-neutral-800 hover:cursor-pointer hover:bg-opacity-[60%] p-6 bg-opacity-50 hover:shadow-md shadow-inner rounded-md'>
            <p className={`py-16 text-white text-5xl md:text-7xl drop-shadow-md group-hover:text-sky-300 group-hover:scale-[103%] w-full text-center transition-all`}>CRM Marketing</p>
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
    <div className='flex items-center w-full relative h-auto py-4 md:py-0 md:h-16 mb-4'>
        <p className={`${Bebas} text-5xl md:pl-6 text-white drop-shadow-md w-3/4`}>
            {MenuState === 1 ? 'Email Marketing' : null}
            {MenuState === 2 ? 'Content Marketing' : null}
            {MenuState === 3 ? 'CRM Marketing' : null}
        </p>
        <div onClick={() => backFunc()} className='absolute hover:bg-neutral-800 hover:bg-opacity-40 hover:cursor-pointer hover:shadow-inner right-0 md:right-4 -translate-y-1 h-16 w-16 rounded-full flex justify-center items-center'>
            <Image
                src={circle_arrow}
                alt='Back to Marketing Content'
                className='-translate-y-[3px] md:-translate-y-[1px] h-full w-full scale-[65%] drop-shadow-md'
                priority
            />
        </div>
    </div>

    const [ShowInputEmail, setShowInputEmail] = useState(false)

    const SendEmail = () => {

        const [UserInfo, setUserInfo] = useState({
            name: '',
            email: ''
        })
    
        const [BgCo, setBgCo] = useState('bg-gradient-to-b from-blue-500 to-cyan-500')
    
        const hoverIn = () => {
            setBgCo('bg-gradient-to-br from-zinc-800 to-zinc-800')
        }
        
        const hoverOut = () => {
            setBgCo('bg-gradient-to-b from-blue-500 to-cyan-500')
        }

        const [Loading, setLoading] = useState(false)

        const [EmailConfirmed, setEmailConfirmed] = useState(false)
    
        const emailController = async (e: any) => {
            e.preventDefault()
            setLoading(true)
            const emailJS = await sendEmailController(UserInfo.name, UserInfo.email)
            if (emailJS) {
                setEmailConfirmed(true)
                setLoading(false)
            } else {
                setLoading(false)
                window.alert(`Problem sending email, please retry. If error persists please email Ross at thomasross.vasquez@gmail.com.`)
            }
        }
    
        const setName = (value: any) => {
            let tempObj = {...UserInfo}
            tempObj.name = value
            setUserInfo(tempObj)
        }
    
        const setEmail = (value: any) => {
            let tempObj = {...UserInfo}
            tempObj.email = value
            setUserInfo(tempObj)
        }

        return(
            <>
            <form onSubmit={(e) => emailController(e)} className={`${EmailConfirmed ? 'hidden' : null} mb-6 md:mb-0 mt-0 md:mt-4`}>
                <p className={`py-1 md:hidden text-white ${Roboto} text-2xl mb-4 text-center`}>Enter your email to recieve an automated message</p>
                <div className={`h-auto p-[4px] w-full rounded-t-[8px] md:rounded-[8px] flex flex-wrap ${Roboto} text-2xl ${Loading ? 'bg-zinc-800' : BgCo} gap-[4px]`}>
                    <input required onChange={(e) => setName(e.target.value)} value={UserInfo.name} type='text' placeholder='First Name' className='shadow-inner grow w-80 h-16 text-zinc-800 rounded-[4px] bg-white focus:outline-none text-center' />
                    <input required onChange={(e) => setEmail(e.target.value)} value={UserInfo.email} type='email' placeholder='Email' className='shadow-inner grow w-[40rem] h-16 text-zinc-800 rounded-[4px] bg-white focus:outline-none text-center' />
                </div>
                <div className='flex flex-col-reverse items-center md:flex-row h-auto md:h-14 relative w-full'>
                    <p className={`py-1 pl-6 hidden md:block text-white ${Roboto} text-2xl w-8/12`}>Enter your email to recieve an automated message</p>
                    <button type='submit' disabled={Loading} onMouseEnter={hoverIn} onMouseLeave={hoverOut} className={`${Roboto} ${Loading ? 'animate-pulse bg-zinc-800' : 'bg-gradient-to-b from-cyan-500 to-blue-500'} flex justify-center items-center text-white text-2xl hover:cursor-pointer shadow-md md:absolute md:right-20 h-14 w-full md:w-40 hover:from-zinc-800 hover:to-zinc-800 rounded-b-[8px]`}>
                        {Loading ? 'Loading' : 'Send'}
                    </button>
                </div>
            </form>
            <div className={`w-full h-auto py-20 mb-6 md:mb-0 px-4 rounded-md bg-zinc-800 shadow-md ${EmailConfirmed ? null : 'hidden'}`}>
                <p className={`w-full text-center text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500 ${Bebas} text-7xl md:text-8xl`}>Thank You {UserInfo.name}</p>
                <p className={`w-full text-center text-white ${Roboto1} text-3xl`}>Please check your email.</p>
            </div>
            </>
        )
    }
    

    const EmailContent = () => 
    <div className='md:-mt-4'>
        <div onClick={() => setShowInputEmail(true)} className={`${Roboto} ${ShowInputEmail ? 'hidden' : null } md:absolute md:top-[1.7rem] md:left-[21rem] w-full md:w-40 h-14 rounded-md bg-neutral-800 bg-opacity-40 shadow-inner flex justify-center items-center text-2xl text-white hover:cursor-pointer hover:bg-opacity-30 hover:text-sky-100 active:text-white`}>
            Demo Email
        </div>
        {ShowInputEmail && <SendEmail />}
        <div className='h-auto p-6 w-full bg-neutral-800 flex md:block flex-col items-center shadow-inner bg-opacity-40 rounded-md mt-2 md:mt-6'>
                <div className='md:float-right md:ml-8 md:mr-4 h-60 w-60 rounded-[100%] overflow-hidden bg-white shadow-md flex justify-center items-center'>
                    <Image
                        src={emailjs}
                        alt='emailjs'
                        className='h-3/4 w-auto'
                    />
                </div>
            <p className={`mb-4 mt-4 md:mt-0 text-white text-2xl md:text-3xl ${Roboto1} leading-[3rem] md:leading-[4rem] text-center md:text-left`}>I have experience using multiple tools to related to email marketing. The first is EmailJS. This service allows you to create HTML and CSS templates in their WebApp. From there you can add dynamic content and send the email via a trigger in JavaScript.</p>
        </div>
        <div className='h-auto p-6 w-full bg-neutral-800 flex md:block flex-col items-center shadow-inner bg-opacity-40 rounded-md mt-2 md:mt-6'>
            <Image
                    src={mailchimp}
                    alt='Mailchimp'
                    className='md:mr-8 md:ml-4 md:float-left h-60 w-60 rounded-[100%] shadow-md'
                />
            <p className={`text-white text-2xl md:text-3xl ${Roboto1} leading-[3rem] md:leading-[4rem] text-center md:text-right mt-4 md:mt-0`}>The second is Mailchimp. I have used it to build surveys and create email templates. I also use it to track analytics related to those features. Mailchimp provides automations similiar to Salesforce Marketing Cloud workflows.</p>
        </div>
    </div>

    const MarketingContent = () =>
    <div>
        <div className='h-auto p-6 w-full bg-neutral-800 shadow-inner bg-opacity-40 rounded-md'>
            <p className={`text-white text-2xl md:text-3xl ${Roboto1} leading-[3rem] md:leading-[4rem]`}>I have experience creating digital and print marketing products in Adobe Suite, primarily with Photoshop. Over time I have created marketing materials for various freelance situations. I worked with a real estate team to create marketing materials for social media and other mediums. I have also spent time creating various passion projects to test my graphic and creative skills.</p>
        </div>
        <div className='h-auto p-6 mt-6 w-full bg-neutral-800 shadow-inner bg-opacity-40 rounded-md'>
            <div className='flex justify-center flex-wrap gap-6'>
            {Photos.map((item, i) =>
            <div key={`photo-${i + 1}`} className='shrink w-auto'>
              <Image
                src={item}
                alt={`Photo ${i + 1}`}
                className='lg:h-80 h-auto w-full'
                priority
              />
            </div>
            )}
            </div>
        </div>
    </div>

    const CRMContent = () =>
    <div>
        <div className='h-auto p-6 w-full flex md:block flex-col items-center bg-neutral-800 shadow-inner bg-opacity-40 rounded-md'>
            <Image
                src={mcloud}
                alt="Salesforce Marketing Cloud"
                className='px-6 pb-6 md:p-0 md:w-60 w-full h-auto md:float-right md:mr-10'
            />
            <p className={`text-white text-2xl md:text-3xl ${Roboto1} text-center md:text-left leading-[3rem] md:leading-[4rem]`}>Utilizing CRM records to automate marketing as well as collecting data for storage in a CRM is an important aspect of a well oiled business. Utilizing Salesforce Marketing Cloud to create workflows can be a great way to solve this. VisualForce pages are also another common use case to collect data. I learned about these concepts while studying for my certification exam through hands on learning modules in Trailhead. With an extensive array of third-party integrations on AppExchange and the ability to communicate with data directly via API, the sky is the limit. Whether you&#39;re using Salesforce or another CRM/CMS, marketing automation is something I feel confident in working with.</p>
        </div>
    </div>

    return(
        <div ref={refer} className="flex flex-col justify-center pb-0 md:pb-6 items-center bg-gradient-to-tr from-cyan-500 via-blue-500 md:px-2 to-teal-200 min-h-[100vh] h-auto w-screen h-auto">
            <div className={`relative flex flex-col max-w-7xl w-full ${MenuState === 0 ? null : 'bg-neutral-800'} p-4 md:p-6 md:rounded-md bg-opacity-[30%] md:mt-6 justify-center`}>
                {MenuState != 0 && <Back />}
                {MenuState === 0 && <Menu />}
                {MenuState === 1 && <EmailContent />}
                {MenuState === 2 && <MarketingContent />}
                {MenuState === 3 && <CRMContent />}
            </div>
        </div>
    )
}