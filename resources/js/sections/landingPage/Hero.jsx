import React from 'react'
import headerImage from "../../../assets/LandingPage/hero_img.png";
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <header
    
        className="w-full h-screen bg-cover bg-center text-white flex justify-center flex-col items-center relative"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="bg-black absolute top-0 left-0 size-full z-0 opacity-30"></div>
        <motion.h1 
        initial={{
          opacity:0,
          y:-240
        }}
        whileInView={{
          opacity:1,
          y:0

        }}
        transition={{
          y:{
            duration:2
          },
          opacity:{
            duration:1
          }
        }}
        className="lg:text-8xl md:text-5xl text-4xl text-center font-alfa-slab font-black relative z-10 ">
          BEM FISIP UB 2024
        </motion.h1>
        <motion.h3 
          initial={{
            opacity:0,
           
          }}
          whileInView={{
            opacity:1,
         
  
          }}
          transition={{
         
            opacity:{
              duration:1,
              delay:1
            }
          }}
        className="lg:text-5xl md:text-2xl text-lg font-bold font-inter italic relative z-10 ">
          Kabinet Pijaraksana
        </motion.h3>
        <motion.p
          initial={{
            opacity:0,
            y:100
          }}
          whileInView={{
            opacity:1,
            y:0
  
          }}
          transition={{
            y:{
              duration:2,
              delay:2
            },
            opacity:{
              duration:1,
              delay:2
            },
          }}
        className="font-extrabold md:text-lg text-base text-center lg:text-xl font-inter itali relative z-10c">
          Melangkah Seirama, Bersinar Bersama PIJARAKSANA
        </motion.p>
   
      </header>
  )
}

export default Hero
