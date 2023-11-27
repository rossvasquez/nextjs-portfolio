'use client'

import { useState } from 'react'

import { addContactData } from '../api/supabase/addContactData'

import { sendFormEmailController } from '../api/emailjs/formEmail'

export default function Contact({Bebas, Roboto, Roboto1}:{Bebas: string, Roboto: string, Roboto1: string}) {

    const [FormSubmitted, setFormSubmitted] = useState(false)

    const [PurposeState, setPurposeState] = useState(0)

    const [FormData, setFormData] = useState({
        "name": '',
        "email": '',
        "company": '',
        "purpose": '',
        "message": ''
    })

    const updateFormData = (e: any, property: keyof typeof FormData) => {
        let tempObj = {...FormData}
        tempObj[property] = e.target.value
        setFormData(tempObj)
    }

    const formHandler = async (e: any) => {
        e.preventDefault()
        let error = false
        let tempObj = {...FormData}
        if (PurposeState === 1) {
            tempObj.purpose = 'Feedback'
        } else if (PurposeState === 2) {
            tempObj.purpose = 'Opportunity'
        } else if (PurposeState === 3) {
            tempObj.purpose = 'Networking'
        } else if (PurposeState === 4) {
            tempObj.purpose = 'Other'
        } else {
            error=true
        }

        if (error) {
            window.alert('Please select a purpose for communications.')
        } else {
            await sendFormEmailController(tempObj)
            const db = await addContactData(tempObj)
            if (db.test) {
                setFormSubmitted(true)
            } else {
                window.alert(db.info)
            }
        }
    }

    const formBlock = () =>
    <>
    <p className={`${Bebas} text-white px-4 pt-8 md:px-0 md:pt-0 text-6xl drop-shadow-md`}>Reach Out!</p>
    <p className={`${Roboto1} text-white px-4 md:px-0 text-3xl drop-shadow-md`}>I would love to hear from you.</p>
    <form className='px-2 pb-8 md:pb-0 md:px-0' onSubmit={(e) => formHandler(e)}>
        <p className={`${Bebas} bg-zinc-800 text-zinc-100 py-3 w-52 pb-2 text-center rounded-tl-[18px] rounded-tr-[18px] text-3xl mt-8`}>Info</p>
        <div className="bg-neutral-800 bg-opacity-[40%] shadow-inner md:w-min relative rounded-[4px] rounded-tl-[0px] p-3 md:p-4 pb-2 md:pb-3">
            <div className="">
                <p className={`${Roboto1} md:mb-1 text-white drop-shadow-sm text-lg md:text-xl pl-2`}>Full Name</p>
                <input onChange={(e) => updateFormData(e, 'name')} value={FormData.name} required={true} type='text' placeholder='John Smith' className={`${Roboto} focus:shadow-inner pl-3 text-2xl md:text-3xl text-zinc-800 bg-zinc-100 w-full md:w-[30rem] focus:outline-none h-14 rounded-[4px]`} />
                <p className={`${Roboto1} md:mb-1 text-white drop-shadow-sm text-lg md:text-xl pl-2 mt-4`}>Email</p>
                <input onChange={(e) => updateFormData(e, 'email')} value={FormData.email} required={true} type='email' placeholder='john.smith@acme.com' className={`${Roboto} focus:shadow-inner pl-3 text-2xl md:text-3xl text-zinc-800 bg-zinc-100 w-full md:w-[40rem] focus:outline-none h-14 rounded-[4px]`} />
                <p className={`${Roboto1} md:mb-1 text-white drop-shadow-sm text-lg md:text-xl pl-2 mt-4`}>Company <span className="text-sm">(optional)</span></p>
                <input onChange={(e) => updateFormData(e, 'company')} value={FormData.company} type='text' placeholder='ACME Tech Solutions' className={`${Roboto} focus:shadow-inner pl-3 text-2xl md:text-3xl text-zinc-800 bg-zinc-100 w-full md:w-[40rem] focus:outline-none h-14 rounded-[4px] mb-2`} />
            </div>
        </div>
        <p className={`${Bebas} bg-zinc-800 text-zinc-100 py-3 w-52 pb-2 text-center rounded-tl-[18px] rounded-tr-[18px] text-3xl mt-8`}>Purpose</p>
        <div className="bg-neutral-800 bg-opacity-[40%] shadow-inner relative rounded-[4px] rounded-tl-[0px] p-3">
            <div className="flex flex-wrap gap-3">
                <div onClick={() => setPurposeState(1)} className={`${PurposeState === 1 ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md' : 'bg-sky-300 shadow-inner bg-opacity-10 hover:bg-opacity-[15%]'} transition-[color] px-0 grow md:w-auto px-14 h-16 md:h-20 rounded-[4px] border-zinc-800 hover:cursor-pointer text-zinc-100 flex justify-center items-center text-2xl md:text-3xl ${Roboto}`}>Feedback</div>
                <div onClick={() => setPurposeState(2)} className={`${PurposeState === 2 ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md' : 'bg-sky-300 shadow-inner bg-opacity-10 hover:bg-opacity-[15%]'} transition-[color] px-0 grow md:w-auto px-14 h-16 md:h-20 rounded-[4px] border-zinc-800 hover:cursor-pointer text-zinc-100 flex justify-center items-center text-2xl md:text-3xl ${Roboto}`}>Opportunity</div>
                <div onClick={() => setPurposeState(3)} className={`${PurposeState === 3 ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md' : 'bg-sky-300 shadow-inner bg-opacity-10 hover:bg-opacity-[15%]'} transition-[color] px-0 grow md:w-auto px-14 h-16 md:h-20 rounded-[4px] border-zinc-800 hover:cursor-pointer text-zinc-100 flex justify-center items-center text-2xl md:text-3xl ${Roboto}`}>Networking</div>
                <div onClick={() => setPurposeState(4)} className={`${PurposeState === 4 ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md' : 'bg-sky-300 shadow-inner bg-opacity-10 hover:bg-opacity-[15%]'} transition-[color] px-0 grow md:w-auto px-14 h-16 md:h-20 rounded-[4px] border-zinc-800 hover:cursor-pointer text-zinc-100 flex justify-center items-center text-2xl md:text-3xl ${Roboto}`}>Other</div>
            </div>
        </div>
        <p className={`${Bebas} bg-zinc-800 text-zinc-100 py-3 w-52 pb-2 text-center rounded-tl-[18px] rounded-tr-[18px] text-3xl mt-8`}>Message</p>
        <div className="bg-neutral-800 bg-opacity-[40%] shadow-inner relative rounded-[4px] rounded-tl-[0px] p-2 md:p-4 pb-1 md:pb-3">
            <div className="">
                <textarea onChange={(e) => updateFormData(e, 'message')} value={FormData.message} required={true} placeholder='Your portfolio site is sick!' className={`h-60 w-full resize-none focus:outline-none rounded-[3px] focus:shadow-inner p-5 text-2xl md:text-3xl text-zinc-800 bg-zinc-100 ${Roboto}`} />
            </div>
        </div>
        <button type='submit' className='flex justify-center items-center w-full active:bg-opacity-80 mt-8 shadow-inner hover:shadow-md hover:bg-opacity-100 hover:bg-zinc-800 transition-all hover:cursor-pointer hover:rounded-b-[18px] py-4 bg-neutral-800 bg-opacity-40 rounded-[4px]'>
            <p className={`${Bebas} text-white text-5xl`}>Send Message</p>
        </button>
    </form>
    </>

    const Thanks = () =>
    <div>
        <p className={`${Bebas} text-white text-6xl`}>Thank you for reaching out!</p>
        <p className={`${Roboto1} text-3xl text-white`}>I will review your message and get back to you accordingly.</p>
    </div>

    return(
        <div className='w-full max-w-7xl md:p-2 md:mt-28 md:mb-8'>
            <div className='w-full h-auto pt-20 md:p-6 bg-neutral-800 bg-opacity-[30%] md:rounded-md shadow-md'>
                <div className='md:p-6 rounded-md w-full h-auto'>
                    {FormSubmitted ? <Thanks /> : formBlock()}
                </div>
            </div>
        </div>
    )
}