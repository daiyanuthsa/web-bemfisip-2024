import React from "react";
import dekorasi from "../assets/Organigram/dekorasi.png";
import { Link } from "react-router-dom";
import struktur from '../assets/Logo/Struktur.png'
const Organigram = () => {
  return (
    <div className="bg-[#F7EDE4] font-inter">
      <header className="lg:h-screen h-[50vh] overflow-x-hidden flex flex-col items-center justify-center relative w-full">
        <h1 className="lg:text-7xl md:text-4xl text-2xl text-[#805555] font-black text-center">
          ORGANIGRAM
        </h1>
        <h1 className="lg:text-7xl md:text-4xl text-2xl text-[#805555] font-black text-center">
          BEM FISIP UB 2024
        </h1>
        <img
          src={dekorasi}
          alt="img-dekor"
          className="absolute w-2/5 right-0 translate-x-1/2 bottom-0 "
        />
        <img
          src={dekorasi}
          alt="img-dekor"
          className="absolute w-2/5 left-0 -translate-x-1/2 bottom-0 "
        />
      </header>
      <main className="">
        <section className="container mx-auto xl:px-24 lg:px-16 md:px-10 px-4 ">
           <img src={struktur} className="w-full aspect-auto" alt="struktur" draggable='false' />
    
        </section>
      </main>
    </div>
  );
};

export default Organigram;
