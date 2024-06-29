import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from '@inertiajs/react'
import React from 'react'


const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-white via-[#006181] font-inter to-black rounded-tl-[72px]'>
      <main className='container mx-auto lg:px-16 md:px-10 px-4 py-10 gap-4 flex lg:flex-row flex-col-reverse justify-between'>
        <div className='lg:w-4/6 flex lg:flex-row flex-col'>
        <div className='w-full h-full flex justify-center items-center'>
        <Link className='text-[#081F5C] border-[#081F5C] border-2 lg:text-lg rounded-2xl p-1 lg:p-3 h-fit w-fit'>
          ADVO CENTER
        </Link>
          
        </div>
        <div className='w-full grid gap-y-4 mt-10 lg:mt-0 grid-cols-2 text-white'>
          <div className='flex items-center gap-3'>
            <Icon icon={'ic:baseline-tiktok'} className='bg-[#081F5C] lg:p-2 p-1 rounded-full text-3xl lg:text-5xl text-white'/>
            <p>bemfisipub</p>
          </div>
          <div className='flex items-center gap-3'>
            <Icon icon={'jam:line'} className='bg-[#081F5C] lg:p-2 p-1 rounded-full text-3xl lg:text-5xl text-white'/>
            <p>@bemfisipub</p>
          </div>
          <div className='flex items-center gap-3'>
            <Icon icon={'pajamas:twitter'} className='bg-[#081F5C] lg:p-2 p-1 rounded-full text-3xl lg:text-5xl text-white'/>
            <p>bemfisipub</p>
          </div>
          <div className='flex items-center gap-3'>
            <Icon icon={'ri:linkedin-fill'} className='bg-[#081F5C] lg:p-2 p-1 rounded-full text-3xl lg:text-5xl text-white'/>
            <p>bemfisipub2024</p>
          </div>
          <div className='flex items-center gap-3'>
            <Icon icon={'mingcute:youtube-fill'} className='bg-[#081F5C] lg:p-2 p-1 rounded-full text-3xl lg:text-5xl text-white'/>
            <p>BEM FISIB UB</p>
          </div>
          <div className='flex items-center gap-3'>
            <Icon icon={'hugeicons:instagram'} className='bg-[#081F5C] lg:p-2 p-1 rounded-full text-3xl lg:text-5xl text-white'/>
            <p>bemfisipub</p>
          </div>

        </div>


        </div>
        <div className='lg:w-2/6 flex flex-col gap-3'>
          <div className='lg:w-full w-4/5 mx-auto aspect-[7/5] rounded-2xl bg-gray-600'></div>
          <p className='lg:text-xl text-sm px-3 border-r-2 border-white  font-inter text-right text-white'>Gedung sekretariat lkm fisip universitas brawijaya, jalan veteran </p>
        </div>
      </main>
    </footer>
  )
}

export default Footer
