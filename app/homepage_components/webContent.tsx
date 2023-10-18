'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import arrow from '../../public/arrow.png'

export default function WebContent({Roboto}: {Roboto: string}) {

    const [ProjIndex, setProjIndex] = useState(0)
    const [ProjTab, setProjTab] = useState([0,0,0,0])

    const [ProjInfo, setProjInfo] = useState([
        {
            "name": 'TidenAI',
            "tagline": "Progressive Web App",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem donec massa sapien. Malesuada fames ac turpis egestas integer eget aliquet. Egestas egestas fringilla phasellus faucibus."
        },
        {
            "name": 'ReactPress',
            "tagline": "Progressive Web App",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem donec massa sapien. Malesuada fames ac turpis egestas integer eget aliquet. Egestas egestas fringilla phasellus faucibus."
        },
        {
            "name": 'Foundation Site',
            "tagline": "Progressive Web App",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem donec massa sapien. Malesuada fames ac turpis egestas integer eget aliquet. Egestas egestas fringilla phasellus faucibus."
        },
        {
            "name": 'E-Commerce Catering System',
            "tagline": "Progressive Web App",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem donec massa sapien. Malesuada fames ac turpis egestas integer eget aliquet. Egestas egestas fringilla phasellus faucibus."
        }
    ])

    const bgColor = (id: number) => {
        if (id === 0) {
            return 'bg-amber-400'
        } else if (id === 1) {
            return 'bg-cyan-200'
        } else if (id === 2) {
            return 'bg-sky-200'
        } else if (id === 3) {
            return 'bg-red-300'
        }
    }

    return(
        <div className="flex justify-center items-center p-[5px] py-12 bg-rose-100 shadow-inner rounded-md h-auto w-full h-auto mt-24">
            <div className="relative rounded-[5px] overflow-hidden w-full h-full flex flex-col max-w-7xl">
                {ProjInfo.map((item, id) => 
                    <div className={`shadow-md mt-4 border-slate-900 border-2 rounded-[5px] overflow-hidden ${ProjIndex === (id+1) ? 'slideIn' : 'slideOut'}`}>
                    <div className={`w-full flex items-center relative h-40 ${ProjIndex === (id+1) ? bgColor(id) : 'bg-white'} first:mt-0 shdaow-md`}>
                        <div>    
                            <p className={`${Roboto} pl-8 text-2xl`}>{item.name}</p>
                            <p className={`${Roboto} pl-8 text-md text-neutral-500`}>{item.tagline}</p>
                        </div>
                        <div onClick={ProjIndex === (id+1) ? () => setProjIndex(0) : () => setProjIndex(id+1)} className='hover:cursor-pointer hover:bg-opacity-80 absolute right-8 rounded-full h-12 w-12'>
                            <Image
                                src={arrow}
                                alt='Expand Section Arrow'
                                className={`${ProjIndex === id + 1 ? '-rotate-90 mb-[2px]' : 'rotate-90 mt-[2px]'} scale-50`}
                            />
                        </div>
                    </div>
                    <div className={`${Roboto} p-6 w-full bg-white h-48 mx-auto text-2xl leading-loose`}>
                        <p>{item.description}</p>
                    </div>
                    </div>
                )}
            </div>    
        </div>
    )
}