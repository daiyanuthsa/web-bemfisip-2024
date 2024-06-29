import React from 'react'
import orang from "../../../assets/LandingPage/orang.png";

const Sambutan = () => {
  return (
    <section className="flex justify-center  items-center lg:h-screen container mx-auto lg:px-16 md:px-10 px-4">
    <main className="w-full border-x-2 border-[#006181] gap-32 lg:gap-10 border-b-2 flex lg:flex-row flex-col rounded-3xl px-4 py-32 lg:p-10">
      <div className="lg:w-1/2 aspect-[5/4]   relative">
        <p className="lg:w-4/5 w-full text-black p-8 shadow-2xl bg-[#F7EDE4] rounded-3xl font-inter text-sm lg:text-2xl absolute bottom-0 left-0">
          <p className="lg:w-3/5  rounded-xl bg-[#4C2C17] text-xs lg:text-sm absolute top-0 -translate-y-full left-[50%]  text-white p-2 lg:p-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
            beatae?
          </p>
          <img
            src={orang}
            alt="orang-img"
            className="lg:w-3/5 w-2/5 absolute top-0 -translate-y-full"
            draggable="false"
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="lg:w-1/2 aspect-[5/4]   relative">
        <p className="lg:w-4/5 w-full text-black p-8 shadow-2xl bg-[#F7EDE4] rounded-3xl font-inter text-sm lg:text-2xl absolute bottom-0 left-0">
          <p className="lg:w-3/5  rounded-xl bg-[#4C2C17] text-xs lg:text-sm absolute top-0 -translate-y-full left-[50%]  text-white p-2 lg:p-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
            beatae?
          </p>
          <img
            src={orang}
            alt="orang-img"
            className="lg:w-3/5 w-2/5 absolute top-0 -translate-y-full"
            draggable="false"
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    
     
    </main>
  </section>
  )
}

export default Sambutan
