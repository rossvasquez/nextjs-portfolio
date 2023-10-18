import Link from 'next/link'

import MainSkills from './homepage_components/skills/main'

import { Bebas_Neue } from 'next/font/google'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '300' })
const playfair = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function Home() {
  
  return (
    <main className='backgroundGradient'>
      <div className='relative flex flex-col justify-left items-center bg-rose-600 bg-opacity-90 w-screen h-auto pt-20'>
        <div className='flex items-center absolute top-0 w-screen h-20 md:h-24'>
          <div className={`flex justify-center items-center ${roboto.className}`}>
            <Link href='/' className={`text-white text-xl md:text-2xl ml-8 md:ml-16 hover:text-slate-900`}>Home</Link>
            <Link href='www.youtube.com' className={`text-white text-xl md:text-2xl ml-8 md:ml-16 hover:text-slate-900`}>About</Link>
            <Link href='www.youtube.com' className={`text-white text-xl md:text-2xl ml-8 md:ml-16 hover:text-slate-900`}>Contact</Link>
          </div>
        </div>
        {/* <div className='h-[35rem] w-[35rem] shadow-lg rounded-full bg-slate-200'>

        </div> */}
        <p className={`text-white ${playfair.className} nameShadow text-[6rem] md:text-[14rem] mt-6 font-semibold text-center leading-[6rem] md:leading-[20rem]`}>Ross Vasquez</p>
        <MainSkills Roboto={roboto.className} />
      </div>
    </main>
  )
}
