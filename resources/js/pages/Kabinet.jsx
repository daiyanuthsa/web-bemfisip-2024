import React from "react";
import { useParams } from "react-router-dom";
import daunkanan from "../../assets/LandingPage/daun.png";
import daunkiri from "../../assets/LandingPage/daun2.png";
import Navbar from "../components/Navbar";
const Kabinet = ({ satuan, proker, bph, staf }) => {
    console.log(satuan);
    console.log(proker);
    console.log(bph);
    console.log(staf);
    const { nama } = useParams();
    return (
        <>
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

                    <h1 className="text-[#805555] md:text-6xl text-4xl lg:text-8xl font-bold">
                        {satuan.satuan}
                    </h1>
                    <h3 className="text-[#805555] md:text-2xl text-center text-xl lg:text-3xl font-bold">
                        {satuan.nama_satuan}
                    </h3>
                    <p className="lg:w-3/5 w-5/6  mx-auto p-5 md:text-lg text-sm lg:text-xl border-x-2 border-b-2 border-[#805555] rounded-2xl">
                        {satuan.deskripsi}
                    </p>
                </header>
                <section className="flex flex-col gap-5">
                    <h1 className="text-white bg-[#006181] px-10 w-fit md:text-2xl text-lg lg:text-5xl font-semibold rounded-2xl mx-auto py-1 lg:py-4">
                        Program Kerja
                    </h1>
                    <main className="flex flex-wrap gap-2 lg:gap-5 text-center justify-center container mx-auto lg:px-16 md:px-10 px-4">
                        {proker.map((item, i) => (
                            <p
                                key={i}
                                className="md:text-xl text-base lg:text-2xl flex justify-center items-center font-semibold text-white bg-[#CAB9AE] rounded-2xl py-2 px-4 w-full lg:w-[47%]"
                            >
                                {item.nama_proker}
                            </p>
                        ))}
                    </main>
                    <div className="container mx-auto lg:px-16 py-10 md:px-10 px-4 flex flex-wrap-reverse justify-center gap-[5%] ">
                        {bph.map((item, i) => (
                            <div
                                key={i}
                                className="md:w-2/5 w-full lg:w-1/4 flex flex-col mt-5"
                            >
                                <div className="w-[90%] mx-auto aspect-[9/11] rounded-t-2xl overflow-hidden">
                                    <img
                                        src={
                                            "http://127.0.0.1:8000/storage/" +
                                            item.image_link
                                        }
                                        alt="img"
                                        className=" object-cover size-full bg-[#1F3A49] "
                                        draggable="false"
                                    />
                                </div>
                                <div className="w-full bg-[#D9D9D9] text-[#1F3A49] flex flex-col gap-2 rounded-3xl py-1  justify-center items-center">
                                    <h1 className="text-xl font-semibold">
                                        {item.nama_anggota}
                                    </h1>
                                    <p className="text-sm">
                                        {item.nama_jabatan}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="container mx-auto lg:px-16 py-10 md:px-10 px-4 flex flex-wrap-reverse justify-center ">
                        {staf.map((item, i) => (
                            <div
                                key={i}
                                className="md:w-2/5 w-full lg:w-1/4 flex flex-col mt-5"
                            >
                                <div className="w-[90%] mx-auto aspect-[9/11] rounded-t-2xl overflow-hidden">
                                    <img
                                        src={"http://127.0.0.1:8000/storage/" + item.image_link}
                                        alt="img"
                                        className=" object-cover size-full bg-[#1F3A49] "
                                        draggable="false"
                                    />
                                </div>
                                <div className="w-full bg-[#D9D9D9] text-[#1F3A49] flex flex-col gap-2 rounded-3xl py-1  justify-center items-center">
                                    <h1 className="text-xl font-semibold">
                                        {item.nama_anggota}
                                    </h1>
                                    <p className="text-sm">{item.nama_jabatan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Kabinet;
