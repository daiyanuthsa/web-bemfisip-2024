import React, { useEffect } from "react";
import orang from "../../../assets/LandingPage/preswapres_foto.webp";

const Sambutan = () => {
    return (
        <section className="flex justify-center bg-[#FAFAFA] p-4 md:p-0  items-center lg:h-screen ">
            <main className="w-full border-x-2 border-[#006181] relative gap-24 lg:gap-10 lg:border-b-2 container mx-auto lg:px-16 md:px-10 px-4 flex lg:flex-row flex-col rounded-3xl py-12 lg:py-32 lg:p-10">
                <div
                    data-aos="fade-up"
                    className=" lg:w-2/4 relative z-30 flex flex-col justify-center items-center"
                >
                    <img
                        src={orang}
                        alt=""
                        className="w-[70%]"
                        draggable="false"
                    />
                    <div className="flex bg-[#4C2C17] font-inter w-full p-4 rounded-2xl shadow-md text-white">
                        <div className="flex flex-col w-1/2 items-center">
                            <h1 className="lg:text-xl text-sm text-center font-semibold">
                                M. Rafi Haykal
                            </h1>
                            <p className="lg:text-base text-xs text-center">
                                Presiden BEM FISIP UB 2024
                            </p>
                        </div>
                        <div className="flex flex-col w-1/2 items-center">
                            <h1 className="lg:text-xl text-sm text-center font-semibold">
                                Bram Adi Baskoro
                            </h1>
                            <p className="lg:text-base text-xs text-center">
                                Wakil Presiden BEM FISIP UB 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F7EDE4] text-xs lg:text-base font-inter prose-sm lg:w-3/5 lg:pl-40 p-3 shadow-md rounded-md lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-16">
                    <p>
                        Assalamualaikum Wr.Wb, Shalom, Om Swastiastu, Namo
                        Buddhaya, Salam Kebajikan.
                    </p>
                    <p>
                        <em>Hidup Mahasiswa! Hidup Rakyat Indonesia!</em>
                    </p>
                    <p>
                        Jika kegelapan adalah belenggu ketidaktahuan maka pijar
                        penerangan adalah kekuatan yang dapat membebaskan kita
                        dari belenggu ketidaktahuan.
                    </p>
                    <p>
                        Sebuah perjalanan panjang dengan penuh makna di Tanah
                        Jingga yang di setiap langkah kami, Badan Eksekutif
                        Mahasiswa Fakultas Ilmu Sosial dan Ilmu Politik
                        Universitas Brawijaya Kabinet Pijarastra selalu
                        memberikan pesan dan harapan.
                    </p>
                    <p>
                        Setiap langkah adalah nyanyian perjuangan, setiap
                        dorongan adalah harapan, maka ini adalah komitmen kami
                        untuk mewujudkan langkah nyata menuju masa depan yang
                        lebih baik.
                    </p>
                </div>
            </main>
        </section>
    );
};

export default Sambutan;
