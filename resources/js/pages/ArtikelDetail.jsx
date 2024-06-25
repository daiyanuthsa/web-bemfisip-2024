import React from "react";
import dekorasi from "../../assets/Artikel/dekorasi.png";
import hiasan from "../../assets/Artikel/hiasan.png";
import pattern from "../../assets/Artikel/pattern.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const ArtikelDetail = ({ artikel }) => {
    console.log(artikel);

    const tanggalAwal = new Date(artikel.tanggal_dibuat);

   
    const namaBulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    
    const tanggalAkhir = `${tanggalAwal.getDate()} ${
        namaBulan[tanggalAwal.getMonth()]
    } ${tanggalAwal.getFullYear()}`;
    return (
        <div className="bg-[#F7EDE4] font-inter w-full">
            <header className="relative py-24 lg:py-36 w-full flex flex-col items-start gap-10 lg:gap-24">
                <img
                    src={dekorasi}
                    alt="img"
                    draggable="false"
                    loading="lazy"
                    className="w-full aspect-auto absolute top-0 left-0 object-contain"
                />
                <div className=" mx-auto w-4/5 lg:w-3/5 aspect-video relative z-10">
                    <img
                        src={`/storage/${artikel.link_gambar}`}
                        alt="card-img"
                        className="w-full h-full relative z-10 object-cover"
                        draggable="false"
                    />
                    <div className="flex absolute bottom-0 left-0 z-30 text-white p-3 flex-col gap-2 w-full bg-black bg-opacity-40">
                        <h1 className="text-lg font-semibold">
                            {artikel.penulis}
                        </h1>
                        <p>{tanggalAkhir}</p>
                    </div>
                </div>
                <h1 className="md:text-7xl text-2xl font-bold text-center text-balance w-fit mx-auto text-[#4C2C17]">
                    {artikel.judul_artikel}
                </h1>
            </header>
            <section className="w-full flex flex-col lg:gap-24 lg:mt-0 mt-10">
                <div
                    className=" w-full relative py-5 lg:py-20"
                    style={{ backgroundImage: `url(${pattern})` }}
                >
                    <div className="size-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-[#4A8CAF] -z-0"></div>
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
                    <article
                        dangerouslySetInnerHTML={{ __html: artikel.artikel }}
                        className="container text-[#4C2C17]  prose-slate lg:prose-lg md:prose-base prose-sm prose-li:w-full prose-ul:list-disc  prose-li:list-decimal prose-a:underline prose-a:text-blue-400  bg-white bg-opacity-80 relative z-10  mx-auto py-5 lg:py-20 xl:px-24 lg:px-16 md:px-10 px-4 flex flex-col"
                    ></article>
                </div>
            </section>
        </div>
    );
};

export default ArtikelDetail;
