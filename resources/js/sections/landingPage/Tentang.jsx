import React from "react";
import kotak from "../../../assets/LandingPage/kotak.png";

const data = [
  {
    title: "PIJAR",
    desc: "Cahaya atau pancaran kecerahan yang melambangkan pemimpin atau tokoh yang memberikan arahan dan inspirasi kepada masyarakat. Ini mencerminkan peran yang memancarkan kebijaksanaan, kepemimpinan, dan pencerahan dalam menjalankan tugas dan misi organisasi.",
  },
  {
    title: "RAKSA",
    desc: "Mencerminkan komitmen untuk menjaga melindungi, menyayangi dan memelihara kepentingan serta kesejahteraan mahasiswa dan LKM/LSO yang ada di FISIP.",
  },
  {
    title: "AKSANA",
    desc: "Keberlanjutan, kestabilan, atau keteguhan dalam menjalankan tugas dan tanggung jawab. Ini mencerminkan komitmen untuk tetap berpegang pada nilai-nilai, prinsip, dan tujuan BEM tanpa mengalami perubahan yang signifikan, serta mempertahankan konsistensi dalam pengambilan keputusan dan tindakan.",
  },
];

const Tentang = () => {
  return (
      <section className="relative">
          <div className="h-full w-full bg-gradient-to-b from-[#FAFAF9] via-[#FAFAF9] via-20% to-transparent z-0 absolute top-0 left-0"></div>

          <div className="w-full flex lg:flex-row flex-col gap-10 relative z-10 ">
              <div className="h-10 w-1/2 bg-gradient-to-r from-white  via-[#006181] to-[#00141B]"></div>
              <div className="lg:w-1/2 text-[#4C2C17] text-left lg:self-auto self-center font-inter flex-col flex justify-center ">
                  <h1
                      data-aos="fade-left"
                      data-aos-duration="5000"
                      className="w-fit text-2xl lg:text-5xl  "
                  >
                      Our Story
                  </h1>
                  <h1
                      data-aos="fade-up"
                      data-aos-duration="5000"
                      className="w-fit text-5xl lg:text-7xl font-semibold"
                  >
                      Seputar Pijar
                  </h1>
              </div>
          </div>
          <main className="container mx-auto divide-x-0 lg:divide-y-0 divide-y-4 lg:divide-x-4 divide-opacity-60 divide-black py-20 lg:px-16 md:px-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-5">
              {data.map((item, i) => (
                  <div className="flex flex-col w-full gap-3 items-center font-inter p-5  relative">
                      {i === 1 ? (
                          <>
                              <div className="w-5 aspect-square rounded-full bg-black absolute left-0 top-0 -translate-x-[55%] -translate-y-[60%] lg:-translate-y-full"></div>
                              <div className="w-5 aspect-square rounded-full bg-black absolute lg:right-full right-0 top-0 lg:top-full  translate-x-[45%] lg:-translate-y-full -translate-y-[60%] "></div>
                          </>
                      ) : i === 2 ? (
                          <>
                              <div className="w-5 aspect-square rounded-full bg-black absolute left-0 top-0 -translate-x-[55%] -translate-y-[60%] lg:-translate-y-fulll"></div>
                              <div className="w-5 aspect-square rounded-full bg-black absolute lg:right-full right-0 top-0 lg:top-full  translate-x-[45%] lg:-translate-y-full -translate-y-[60%]"></div>
                          </>
                      ) : null}
                      <h1
                          data-aos="fade-left"
                          data-aos-delay={i * 300}
                          className="text-2xl font-bold self-start"
                      >
                          {item.title}
                      </h1>
                      <p
                          data-aos="fade-up"
                          data-aos-delay={i * 200}
                          className="text-justify lg:text-left"
                      >
                          {item.desc}
                      </p>
                  </div>
              ))}
          </main>
          <div className="flex lg:flex-row flex-col lg:gap-4 justify-end   lg:ms-auto w-full lg:w-fit lg:py-10">
              <div className="flex flex-col lg:w-2/5 gap-3 items-center  font-inter ps-10 p-5 relative z-10">
                  <h1
                      data-aos="fade-left"
                      className="text-2xl font-bold self-start"
                  >
                      Fun Facts
                  </h1>
                  <ol data-aos="fade-right" className="list-decimal">
                      <li>
                          Adanya kementerian baru, yaitu Kementerian
                          Pengarusutamaan Gender
                      </li>
                      <li>Adanya cuti haid khusus fungsionaris perempuan </li>
                      <li>
                          Adanya perpres inklusif yang merangkul kawan difabel
                          untuk menjadi bagian dari fungsionaris
                      </li>
                  </ol>
              </div>
              <img
                  src={kotak}
                  draggable="false"
                  className="relative z-10 lg:w-auto w-2/4 ms-auto"
                  alt="dekorasi"
              />
          </div>
      </section>
  );
};

export default Tentang;
