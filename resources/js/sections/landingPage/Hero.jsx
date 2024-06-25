import React from 'react'
import headerImage from "../../../assets/LandingPage/hero_img.png";

const Hero = () => {
  return (
    <header
        className="w-full h-screen bg-cover bg-center text-white flex justify-center flex-col items-center relative"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="bg-black absolute top-0 left-0 size-full z-0 opacity-30"></div>
        <h1 className="lg:text-8xl md:text-5xl text-4xl text-center font-alfa-slab font-black relative z-10 ">
          BEM FISIP UB 2024
        </h1>
        <h3 className="lg:text-5xl md:text-2xl text-lg font-bold font-inter italic relative z-10 ">
          Kabinet Pijaraksana
        </h3>
        <p className="font-extrabold md:text-lg text-base text-center lg:text-xl font-inter itali relative z-10c">
          Melangkah Seirama, Bersinar Bersama PIJARAKSANA
        </p>
        {/* Tambahkan konten header di sini */}
      </header>
  )
}

export default Hero
