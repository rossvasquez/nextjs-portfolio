'use client'

import { useState } from 'react'

export default function Contact({Bebas, Roboto, Roboto1}:{Bebas: string, Roboto: string, Roboto1: string}) {

    const [PurposeState, setPurposeState] = useState(0)

    return(
        <div className='w-full max-w-7xl p-2 mt-28 mb-8'>
            <div className='w-full h-auto p-6 bg-neutral-800 bg-opacity-[30%] rounded-md shadow-md'>
                <div className='p-6 rounded-md w-full h-auto'>
                    <p className={`${Bebas} text-white text-6xl`}>Reach Out!</p>
                    <p className={`${Roboto1} text-white text-3xl`}>We would love to hear from you.</p>
                    <p className={`${Bebas} bg-zinc-800 text-zinc-100 py-3 w-52 pb-2 text-center rounded-tl-[18px] rounded-tr-[18px] text-3xl mt-8`}>Info</p>
                    <div className="bg-neutral-800 bg-opacity-[40%] shadow-inner relative rounded-[4px] rounded-tl-[0px] p-6">
                        <div className="">
                            <p className={`${Roboto1} mb-1 text-white drop-shadow-sm text-xl pl-2`}>Full Name</p>
                            <input type='text' placeholder='John Smith' className={`${Roboto} focus:shadow-inner pl-3 text-3xl text-zinc-800 bg-zinc-100 w-[30rem] focus:outline-none h-16 rounded-[4px]`} />
                            <p className={`${Roboto1} mb-1 text-white drop-shadow-sm text-xl pl-2 mt-4`}>Email</p>
                            <input type='email' placeholder='john.smith@acme.com' className={`${Roboto} focus:shadow-inner pl-3 text-3xl text-zinc-800 bg-zinc-100 w-[40rem] focus:outline-none h-16 rounded-[4px]`} />
                            <p className={`${Roboto1} mb-1 text-white drop-shadow-sm text-xl pl-2 mt-4`}>Company <span className="text-sm">(optional)</span></p>
                            <input type='text' placeholder='ACME Tech Solutions' className={`${Roboto} focus:shadow-inner pl-3 text-3xl text-zinc-800 bg-zinc-100 w-[40rem] focus:outline-none h-16 rounded-[4px] mb-2`} />
                        </div>
                    </div>
                    <p className={`${Bebas} bg-zinc-800 text-zinc-100 py-3 w-52 pb-2 text-center rounded-tl-[18px] rounded-tr-[18px] text-3xl mt-8`}>Purpose</p>
                    <div className="bg-neutral-800 bg-opacity-[40%] shadow-inner relative rounded-[4px] rounded-tl-[0px] p-6">
                        <div className="flex flex-wrap  gap-6">
                            <div onClick={() => setPurposeState(1)} className={`${PurposeState === 1 ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md' : 'bg-sky-300 shadow-inner bg-opacity-10 hover:bg-opacity-[15%]'} transition-[color] px-14 h-20 rounded-[70px] border-zinc-800 hover:cursor-pointer text-zinc-100 flex justify-center items-center text-3xl ${Roboto}`}>Feedback</div>
                            <div onClick={() => setPurposeState(2)} className={`${PurposeState === 2 ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md' : 'bg-sky-300 shadow-inner bg-opacity-10 hover:bg-opacity-[15%]'} transition-[color] px-14 h-20 rounded-[70px] border-zinc-800 hover:cursor-pointer text-zinc-100 flex justify-center items-center text-3xl ${Roboto}`}>Opportunity</div>
                            <div onClick={() => setPurposeState(3)} className={`${PurposeState === 3 ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md' : 'bg-sky-300 shadow-inner bg-opacity-10 hover:bg-opacity-[15%]'} transition-[color] px-14 h-20 rounded-[70px] border-zinc-800 hover:cursor-pointer text-zinc-100 flex justify-center items-center text-3xl ${Roboto}`}>Networking</div>
                            <div onClick={() => setPurposeState(4)} className={`${PurposeState === 4 ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md' : 'bg-sky-300 shadow-inner bg-opacity-10 hover:bg-opacity-[15%]'} transition-[color] px-14 h-20 rounded-[70px] border-zinc-800 hover:cursor-pointer text-zinc-100 flex justify-center items-center text-3xl ${Roboto}`}>Other</div>
                        </div>
                    </div>
                    <p className={`${Bebas} bg-zinc-800 text-zinc-100 py-3 w-52 pb-2 text-center rounded-tl-[18px] rounded-tr-[18px] text-3xl mt-8`}>Message</p>
                    <div className="bg-neutral-800 bg-opacity-[40%] shadow-inner relative rounded-[4px] rounded-tl-[0px] p-6">
                        <div className="">
                            <textarea placeholder='Your portfolio site is sick!' className={`h-60 w-full resize-none focus:outline-none rounded-[4px] focus:shadow-inner p-5 text-3xl text-zinc-800 bg-zinc-100 ${Roboto}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}