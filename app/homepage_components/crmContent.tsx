import Image from 'next/image'

import admin from '../../public/admin.png'

export default function CRMContent({Bebas, Roboto, refer}: {Bebas: string, Roboto: string, refer: any}) {

    return(
        <div ref={refer} className={`flex flex-col justify-center items-center bg-gradient-to-tr from-cyan-500 via-blue-500 to-teal-200 h-auto w-full h-auto md:px-2 md:pb-2 ${Roboto}`}>
            <div className='p-2 md:p-4'>
                <div className='flex flex-col md:flex-row max-w-7xl bg-neutral-800 p-10 md:p-20 rounded-md bg-opacity-[60%] shadow-inner justify-center items-center'>
                    <div className='w-full md:w-1/2 flex justify-center items-center'>
                        <Image
                            src={admin}
                            alt='Certified Salesforce Admin'
                            className='w-7/12 drop-shadow-md'
                        />
                    </div>
                    <p className={`${Bebas} mt-6 md:mt-0 text-6xl text-center md:text-left md:text-8xl w-full md:w-1/2 text-white flex justify-center drop-shadow-md items-center`}>Certified Salesforce Administrator</p>
                </div>
                <div className='flex flex-col max-w-7xl w-full bg-transparent rounded-md bg-opacity-[30%] mt-2 md:mt-4 justify-center'>
                    <div className='flex justify-center items-center bg-neutral-800 p-6 bg-opacity-60 shadow-inner rounded-md'>
                        <p className={`text-white text-2xl md:text-3xl ${Roboto} leading-[3rem] md:leading-[4rem]`}>As a Certified Salesforce Administrator I understand the purpose and opportunity present in the CRM Ecosystem. Through APIs auxillary means such as Email Marketing or JavaScript WebApps, we can extend the manipulation and presentation of data in a central location for better business operations. Creating flows and attaching them to these nodes of extension is a crucial piece of BPA for modern businesses. With the power of NextJS, Salesforce and other CRM APIs can easily be called upon in server components to perform actions. Whether Salesforce or one of the many other CRM/CMS platforms available, I feel confident in my ability to create solutions.</p>
                    </div>
                </div>
                <div className='flex flex-col max-w-7xl w-full bg-neutral-800 p-6 md:p-20 rounded-md shadow-inner bg-opacity-[60%] mt-2 md:mt-4 justify-center'>
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
        </div>
    )
}