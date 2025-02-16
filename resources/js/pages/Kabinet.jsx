import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import daunkanan from "../../assets/LandingPage/daun.png";
import daunkiri from "../../assets/LandingPage/daun2.png";
import Navbar from "../components/Navbar";
import { Head } from "@inertiajs/react";
import Footer from "../components/Footer";
import FlipCard from "../sections/satuan/flipImage";

const Kabinet = ({ satuan, proker, bph, staf }) => {
    const { nama } = useParams();
    const appUrl = import.meta.env.VITE_APP_URL;

    const [isFlipped, setIsFlipped] = useState(false);
    const [isDelayActive, setIsDelayActive] = useState(false);

    function flipCard() {
        if (isDelayActive) return; // Prevent flipping if delay is active

        setIsFlipped(!isFlipped);
        setIsDelayActive(true);

        setTimeout(() => {
            setIsDelayActive(false);
        }, 500); // 1 second delay
    }

    return (
        <>
            <Head title={`BEM FISIP 2024||${satuan.slug}`} />

            <Navbar />
            <div className="bg-[#F7EDE4] font-inter">
                <header className="h-screen w-full relative flex flex-col overflow-hidden items-center justify-center gap-5">
                    <img
                        src={daunkiri}
                        alt="img"
                        draggable="false"
                        className="absolute lg:top-1/4 top-[20%] w-2/5 -translate-y-1/2 left-0 -translate-x-1/4"
                    />
                    <img
                        src={daunkanan}
                        alt="img"
                        draggable="false"
                        className="absolute lg:top-1/4 top-[20%] w-2/5 -translate-y-1/2 right-0 translate-x-1/4"
                    />

                    <h1
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="text-[#805555] md:text-6xl text-4xl lg:text-8xl mt-12 font-bold"
                    >
                        {satuan.satuan}
                    </h1>
                    <h3
                        className="text-[#805555] md:text-2xl text-center text-xl lg:text-3xl font-bold"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        {satuan.nama_satuan}
                    </h3>
                    <p
                        className="lg:w-3/5 w-5/6  mx-auto p-5 md:text-lg text-sm text-justify lg:text-xl border-x-2 border-b-2 border-[#805555] rounded-2xl"
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                    >
                        {satuan.deskripsi}
                    </p>
                </header>
                <section className="flex flex-col gap-5">
                    <h1 className="text-white bg-[#006181] px-10 w-fit md:text-2xl text-lg lg:text-5xl font-semibold rounded-2xl mx-auto py-1 lg:py-4">
                        Program Kerja
                    </h1>
                    <main className="flex flex-wrap gap-2 lg:gap-5 text-center justify-center container mx-auto lg:px-16 md:px-10 px-4">
                        {proker.length > 0 ? (
                            proker.map((item, i) => (
                                <p
                                    data-aos="fade-up"
                                    data-aos-duration={800 + i * 100}
                                    key={i}
                                    className="md:text-xl text-base lg:text-2xl flex justify-center items-center font-semibold text-white bg-[#CAB9AE] rounded-2xl py-2 px-4 w-full lg:w-[47%]"
                                >
                                    {item.nama_proker}
                                </p>
                            ))
                        ) : (
                            <div className="w-full flex justify-center items-center mt-5">
                                <p className="md:text-xl  text-base lg:text-2xl font-semibold text-black">
                                    No data
                                </p>
                            </div>
                        )}
                    </main>
                    <div
                        className={`container mx-auto lg:px-16 py-10 md:px-10 px-4 flex ${
                            window.location.href ===
                            "https://bem.fisip.ub.ac.id/biro/PUSKOMINFO"
                                ? "flex-wrap-reverse"
                                : "flex-wrap"
                        } justify-center gap-[2%]`}
                    >
                        {bph ? (
                            bph.map((item, i) => (
                                <a
                                    href={
                                        "https://www.instagram.com/" +
                                        item.instagram
                                    }
                                    data-aos="fade-up"
                                    data-aos-duration={800 + i * 100}
                                    target="_blank"
                                    key={i}
                                    className="md:w-2/5 w-full lg:w-1/4 flex flex-col mt-5 flip-container"
                                >
                                    <FlipCard
                                        imageLink={
                                            appUrl +
                                            "storage/" +
                                            item.image_link
                                        }
                                        imageLink2={
                                            appUrl +
                                            "storage/" +
                                            item.image_link2
                                        }
                                    />
                                    <div className="w-full bg-[#D9D9D9] text-[#1F3A49] flex flex-col gap-1 rounded-3xl py-2 justify-center items-center">
                                        <h1 className="text-xl font-semibold">
                                            {item.nama_anggota}
                                        </h1>
                                        <p className="text-sm">
                                            {item.nama_jabatan}
                                        </p>
                                    </div>
                                </a>
                            ))
                        ) : (
                            <div className="w-full flex justify-center items-center mt-5">
                                <p className="text-xl font-semibold text-[#1F3A49]">
                                    No data
                                </p>
                            </div>
                        )}
                    </div>

                    <div
                        className="container mx-auto lg:px-16 py-10 md:px-10 px-4 flex flex-wrap
                     justify-center gap-[5%] "
                    >
                        {staf.length > 0 ? (
                            staf.map((item, i) => (
                                <a
                                    href={
                                        "https://www.instagram.com/" +
                                        item.instagram
                                    }
                                    data-aos="fade-up"
                                    data-aos-duration={800 + i * 400}
                                    target="_blank"
                                    key={i}
                                    className="md:w-2/5 w-full lg:w-[23%] flex flex-col mt-5"
                                >
                                    <FlipCard
                                        imageLink={
                                            appUrl +
                                            "storage/" +
                                            item.image_link
                                        }
                                        imageLink2={
                                            appUrl +
                                            "storage/" +
                                            item.image_link2
                                        }
                                    />
                                    <div className="w-full bg-[#D9D9D9] text-[#1F3A49] flex flex-col gap-2 rounded-3xl py-1 justify-center items-center">
                                        <h1 className="text-xl font-semibold">
                                            {item.nama_anggota}
                                        </h1>
                                        <p className="text-sm">
                                            {item.nama_jabatan}
                                        </p>
                                    </div>
                                </a>
                            ))
                        ) : (
                            <div className="w-full flex justify-center items-center mt-5">
                                <p className="text-xl font-semibold text-[#1F3A49]">
                                    No data
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
            <Footer bg="bg-[#F7EDE4] " />
        </>
    );
};

export default Kabinet;
