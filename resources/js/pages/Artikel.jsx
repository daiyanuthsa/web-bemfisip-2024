import React from "react";
import dekorasi from "../../assets/Artikel/dekorasi.png";
import hiasan from "../../assets/Artikel/hiasan.png";
import pattern from "../../assets/Artikel/pattern.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Head, Link} from "@inertiajs/react";
import Navbar from "../components/Navbar";


const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Artikel({artikels})  {
  console.log(artikels)
  return (
    <>
    <Navbar/>
    <Head title="artikel"/>
    <div className="bg-[#F7EDE4] font-inter w-full">
      <header className="relative lg:h-screen w-full flex flex-col items-start gap-24">
        <img
          src={dekorasi}
          alt="img"
          draggable="false"
          loading="lazy"
          className="w-full aspect-auto object-contain"
        />
        <h1 className="md:text-8xl text-4xl font-bold w-fit mx-auto text-[#4C2C17]">
          ARTIKEL
        </h1>
      </header>
      <section className="w-full flex flex-col gap-24 lg:mt-0 mt-10">
        <input
          type="text"
          placeholder="Search"
          className="border-x-8 border-y-4 border-[#1F3A49] px-5 py-2 w-fit mx-auto text-base md:text-lg lg:text-2xl font-semibold rounded-2xl"
        />
        <div
          className=" w-full relative  "
          style={{ backgroundImage: `url(${pattern})` }}
        >
            <div className="size-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-[#4A8CAF] -z-0">

            </div>
          <img
            src={hiasan}
            alt="hiasan"
            className="w-full aspect-auto absolute top-0 -translate-y-1/2"
          />
          <img
            src={hiasan}
            alt="hiasan"
            className="w-full aspect-auto absolute bottom-0 translate-y-1/2"
          />
          <main className="container relative z-10  mx-auto py-20 xl:px-24 lg:px-16 md:px-10 px-4 grid-cols-1  grid md:grid-cols-2 grid-rows-1 gap-10">
            {artikels.map((item, i) => (
              <div key={i} className="lg:w-4/5 w-full mx-auto rounded-3xl overflow-hidden shadow-lg">
                <div className="w-full aspect-[12/13] relative">
                  <img
                    src={`/storage/${item.link_gambar}`}
                    alt="card-img"
                    className="size-full object-cover"
                    draggable="false"
                  />
                  <h1 className="w-full text-left px-5 text-2xl py-2 overflow-hidden font-semibold line-clamp-1 absolute bottom-0  left-0 bg-black bg-opacity-50 text-white">
                    {item.judul_artikel}
                  </h1>
                </div>
                <div className={`${i % 2 === 0 ? 'bg-[#4C2C17]' : 'bg-[#1F3A49]'} px-5 py-7`}>
                  <Link
                    href={`/artikel/${item.id}`}
                    className="text-lg px-4 w-fit border-white flex items-center gap-2 border-2 rounded-lg text-white"
                  >
                    <Icon icon={"mdi-light:home"} /> Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
            
          </main>
        </div>
      </section>
    </div>
    </>
  );
};

