import React from "react";
import polkadot from "../../../assets/LandingPage/titikbawah.png";
import { motion } from "framer-motion";

const data = [
  {
    img: "https://picsum.photos/200/300",
    nama: "HIMASIGI UB",
    desc: "Himpunan Mahasiswa Ilmu Sosiologi",
  },
  {
    img: "https://picsum.photos/200/300",
    nama: "HIMASIGI UB",
    desc: "Himpunan Mahasiswa Ilmu Sosiologi",
  },
  {
    img: "https://picsum.photos/200/300",
    nama: "HIMASIGI UB",
    desc: "Himpunan Mahasiswa Ilmu Sosiologi",
  },
  {
    img: "https://picsum.photos/200/300",
    nama: "HIMASIGI UB",
    desc: "Himpunan Mahasiswa Ilmu Sosiologi",
  },
  {
    img: "https://picsum.photos/200/300",
    nama: "HIMASIGI UB",
    desc: "Himpunan Mahasiswa Ilmu Sosiologi",
  },
  {
    img: "https://picsum.photos/200/300",
    nama: "HIMASIGI UB",
    desc: "Himpunan Mahasiswa Ilmu Sosiologi",
  },
  {
    img: "https://picsum.photos/200/300",
    nama: "HIMASIGI UB",
    desc: "Himpunan Mahasiswa Ilmu Sosiologi",
  },
  {
    img: "https://picsum.photos/200/300",
    nama: "HIMASIGI UB",
    desc: "Himpunan Mahasiswa Ilmu Sosiologi",
  },
  {
    img: "https://picsum.photos/200/300",
    nama: "HIMASIGI UB",
    desc: "Himpunan Mahasiswa Ilmu Sosiologi",
  },
  {
    img: "https://picsum.photos/200/300",
    nama: "HIMASIGI UB",
    desc: "Himpunan Mahasiswa Ilmu Sosiologi",
  },
  {
    img: "https://picsum.photos/200/300",
    nama: "HIMASIGI UB",
    desc: "Himpunan Mahasiswa Ilmu Sosiologi",
  },
  {
    img: "https://picsum.photos/200/300",
    nama: "HIMASIGI UB",
    desc: "Himpunan Mahasiswa Ilmu Sosiologi",
  },
  {
    img: "https://picsum.photos/200/300",
    nama: "HIMASIGI UB",
    desc: "Himpunan Mahasiswa Ilmu Sosiologi",
  },
  {
    img: "https://picsum.photos/200/300",
    nama: "HIMASIGI UB",
    desc: "Himpunan Mahasiswa Ilmu Sosiologi",
  },

];

const UKM = () => {
  return (
    <section className="w-full py-20">
      <main className="w-full relative flex lg:flex-row flex-col items-center gap-10">
        <img
          src={polkadot}
          alt="img"
          className="aspect-auto"
          draggable="false"
        />
        <div className="flex flex-col w-fit gap-4 font-inter items-center text-[#006181]">
          <h1 className="text-3xl lg:text-6xl">LKM / LSO</h1>
          <h1 className="text-6xl lg:text-8xl font-semibold">FISIP UB</h1>
        </div>
      </main>
      <div className="w-full overflow-hidden py-10 font-inter">
        <motion.div 
        animate={{
          x:'-50%'
        }}
        transition={{
          duration:20,
          repeat:Infinity,
          ease: "linear"
        }}
        className="flex w-fit gap-4 ">
          {data.map((item, i) => (
            <div key={i} className="w-52 aspect-square rounded-xl flex flex-col items-center gap-3 p-4  bg-[#5F371E] bg-opacity-30">
              <img
                src={item.img}
                alt="img-ukm"
                draggable="false"
                className="w-3/5 aspect-square object-contain"
              />
              <h3 className="text-lg">{item.nama}</h3>
              <p className="text-sm text-center">
               {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="w-full overflow-hidden font-inter">
        <motion.div 
        initial={{
          x:"-50%"
        }}
        animate={{
          x:'0%'
        }}
        transition={{
          duration:20,
          repeat:Infinity,
          ease: "linear"
        }}
        className="flex w-fit gap-4 ">
          {data.map((item, i) => (
            <div key={i} className="w-52 aspect-square rounded-xl flex flex-col items-center gap-3 p-4  bg-[#5F371E] bg-opacity-30">
              <img
                src={item.img}
                alt="img-ukm"
                draggable="false"
                className="w-3/5 aspect-square object-contain"
              />
              <h3 className="text-lg">{item.nama}</h3>
              <p className="text-sm text-center">
               {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
          <div className="w-full overflow-hidden py-10 font-inter">
            <motion.div 
            animate={{
              x:'-50%'
            }}
            transition={{
              duration:20,
              repeat:Infinity,
              ease: "linear"
            }}
            className="flex w-fit gap-4 ">
              {data.map((item, i) => (
                <div key={i} className="w-52 aspect-square rounded-xl flex flex-col items-center gap-3 p-4  bg-[#5F371E] bg-opacity-30">
                  <img
                    src={item.img}
                    alt="img-ukm"
                    draggable="false"
                    className="w-3/5 aspect-square object-contain"
                  />
                  <h3 className="text-lg">{item.nama}</h3>
                  <p className="text-sm text-center">
                   {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
    </section>
  );
};

export default UKM;
