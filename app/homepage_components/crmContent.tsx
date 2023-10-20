import Image from 'next/image'

import admin from '../../public/admin.png'

export default function CRMContent({Bebas, Roboto}: {Bebas: string, Roboto: string}) {

    return(
        <div className={`flex flex-col justify-center items-center px-2 pb-6 bg-gradient-to-tr from-cyan-500 via-blue-500 to-teal-200 h-auto w-full h-auto ${Roboto}`}>
            <div className='flex max-w-7xl bg-neutral-800 p-20 rounded-md bg-opacity-[30%] justify-center items-center mt-6'>
                <div className='w-1/2 flex justify-center items-center'>
                    <Image
                        src={admin}
                        alt='Certified Salesforce Admin'
                        className='w-7/12'
                    />
                </div>
                <p className={`${Bebas} text-8xl w-1/2 text-white flex justify-center items-center`}>Certified Salesforce Administrator</p>
            </div>
            <div className='flex flex-col max-w-7xl w-full bg-neutral-800 p-6 rounded-md bg-opacity-[30%] mt-6 justify-center'>
                <div className='flex justify-center items-center bg-neutral-800 p-6 bg-opacity-40 shadow-inner rounded-md'>
                    <p className={`${Roboto} text-3xl text-white leading-[4rem]`}>As a Certified Salesforce Administrator I understand the purpose and opportunity present in the CRM Ecosystem. Through APIs auxillary means such as Email Marketing or JavaScript WebApps, we can extend the manipulation and presentation of data in a central location for better business operations. Creating flows and attaching them to these nodes of extension is a crucial piece of BPA for modern businesses. With the power of NextJS, Salesforce and other CRM APIs can easily be called upon in server components to perform actions. Whether Salesforce or one of the many other CRM/CMS platforms available, I feel confident in my ability to create solutions.</p>
                </div>
            </div>
            <div className='flex flex-col max-w-7xl w-full bg-neutral-800 p-20 rounded-md bg-opacity-[30%] mt-6 justify-center'>
                <p className={`${Bebas} text-6xl w-full text-white drop-shadow-md flex items-center`}>Trailhead Stats</p>
                <a href='https://www.salesforce.com/trailblazer/rossvasquez' target='_blank' className='text-white w-min text-xl pl-1 underline hover:opacity-60'>Profile</a>
                <div className='flex flex-wrap gap-8 mt-8 w-full'>
                    <div className='h-80 w-80 grow flex flex-col items-center bg-neutral-800 bg-opacity-40 shadow-inner rounded-md'>
                        <p className={`${Bebas} h-3/4 drop-shadow-md flex justify-center -mt-8 text-white text-[14rem]`}>30</p>
                        <p className={`h-1/4 flex justify-center drop-shadow-md text-white mt-4 text-[3rem]`}>Badges</p>
                    </div>
                    <div className='h-80 w-80 grow bg-neutral-800 bg-opacity-40 shadow-inner rounded-md'>
                        <p className={`${Bebas} h-3/4 drop-shadow-md flex justify-center mt-12 text-white text-[7rem]`}>28,675</p>
                        <p className={`h-1/4 flex justify-center drop-shadow-md text-white -mt-16 text-[3rem]`}>Points</p>
                    </div>
                    <div className='h-80 w-80 grow bg-neutral-800 bg-opacity-40 shadow-inner rounded-md'>
                        <p className={`${Bebas} h-3/4 drop-shadow-md flex justify-center -mt-8 text-white text-[14rem]`}>3</p>
                        <p className={`h-1/4 flex justify-center drop-shadow-md text-white mt-4 text-[3rem]`}>Superbadges</p>
                    </div>
                </div>
            </div>
        </div>
    )
}