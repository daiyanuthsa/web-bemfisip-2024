import React from "react";
import polkadotAtas from "../../../assets/LandingPage/titikatas.png";
import polkadotBawah from "../../../assets/LandingPage/titikbawah.png";
const Comprof = () => {
    return (
        <section className="relative w-full  bg-white">
            <div className="lg:w-1/3 w-4/5 lg:min-h-52 min-h-32 bg-gradient-to-r from-black from-0% via-[#006181] via-30% to-white  border-b-4 border-r-2 border-black shadow-2xl rounded-br-full rounded-tr-[1000px] "></div>
            <main className=" relative py-20  lg:h-screen flex lg:flex-row flex-col justify-start items-center">
                <div class="lg:w-1/2 w-5/6 lg:h-4/5 h-[40vh] bg-gradient-to-l from-[#1F3A49]  via-[#4A8CAF] to-[#8EBED7]  rounded-l-2xl absolute  top-10 right-0">
                    <iframe
                        class="w-full aspect-video absolute top-1/2 -translate-y-1/2 right-10 lg:right-1/4 rounded-3xl"
                        src="https://www.youtube.com/embed/aKHU2NaF6mo?si=jY7T5rQDlqj_JfYj"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
                <div className="h-[50vh] lg:hidden"></div>
                <img
                    src={polkadotAtas}
                    alt="polkadot"
                    draggable="false"
                    className="absolute top-0 left-0"
                />
                <img
                    src={polkadotBawah}
                    alt="polkadot"
                    draggable="false"
                    className="absolute bottom-0 left-0"
                />

                <div className="lg:w-2/5 text-[#4C2C17] text-balance flex flex-col gap-2  font-inter">
                    <h1
                        data-aos="fade-right"
                        className=" lg:text-5xl text-2xl  font-semibold text-center "
                    >
                        Company Profile BEM FISIP UB 2024
                    </h1>
                    <p
                        data-aos="fade-up"
                        className="text-sm w-4/5 mx-auto text-justify indent-3"
                    >
                        Dalam upaya memberikan gambaran yang komprehensif
                        tentang Badan Eksekutif Mahasiswa (BEM) Fakultas Ilmu
                        Sosial dan Ilmu Politik (FISIP) Universitas Brawijaya
                        (UB) 2024, kami dengan bangga memperkenalkan biro dan
                        kementerian yang menjadi bagian integral dari struktur
                        organisasi kami. Dengan keberadaan biro dan
                        kementerian-kementerian ini, BEM FISIP UB 2024 siap
                        untuk mengimplementasikan visi, misi, dan
                        program-programnya dengan lebih efektif demi
                        meningkatkan kualitas hidup mahasiswa FISIP UB dan
                        kontribusinya terhadap masyarakat.
                    </p>
                </div>
            </main>
        </section>
    );
};

export default Comprof;
