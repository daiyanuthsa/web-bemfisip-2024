import React from 'react'
import bg from '../../../assets/LandingPage/bg-image.png'
const Kalender = () => {
  return (
    <section className='relative  bg-cover py-40 '  style={{ backgroundImage: `url(${bg})` }}>
        <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent z-0  to-[#588DA9]'>

        </div>
        <div className='text-[#4C2C17] font-inter mx-auto relative z-10 w-fit flex flex-col items-center'>
            <h1 className='text-5xl lg:text-8xl font-semibold'>FIMOLY</h1>
            <p className='text-3xl lg:text-5xl font-medium'>FISIP Monthly Activity </p>
        </div>
        <main className='container relative z-20 mx-auto lg:px-16 md:px-10 px-4 mt-20'>
        <iframe src="https://calendar.google.com/calendar/embed?src=d6333b59d401749bac2c32a5ee3e63f28389ee533abadb3f0987d2f2ebb8165f%40group.calendar.google.com&ctz=UTC" className='mx-auto lg:w-3/5 w-full aspect-[5/4]'  frameborder="0"  scrolling="no"></iframe>


        </main>
      
    
    </section>
  )
}

export default Kalender
