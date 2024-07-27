import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gedung from "../../assets/Tentang/tentangImage.png";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
const Tentang = () => {
    return (
        <>
            <Head title="BEM FISIP 2024||Tentang" />
            <Navbar />
            <div className="bg-[#F7EDE4]">
                <header className="w-full h-screen flex flex-col justify-center items-center gap-4 font-inter text-[#805555]">
                    <h3
                        data-aos="fade-up"
                        className="text-2xl lg:text-7xl font-bold"
                    >
                        SEJARAH
                    </h3>
                    <h1
                        data-aos="fade-up"
                        className="text-4xl lg:text-8xl w-4/5 mx-auto text-center text-balance font-black"
                    >
                        FAKULTAS ILMU SOSIAL DAN POLITIK
                    </h1>
                </header>
                <div className="-translate-y-1/6 lg:hidden w-full flex justify-center mt-5 ">
                    <motion.img
                        animate={{
                            scale: [1, 1.01, 1, 0.99, 1],
                        }}
                        transition={{
                            ease: "linear",
                            repeat: Infinity,
                            duration: 5,
                        }}
                        src={gedung}
                        alt="img"
                        className="w-4/5 "
                        draggable="false"
                    />
                </div>
                <section className="w-full mt-20 lg:mt-72 pb-10">
                    <div className="w-full lg:w-2/4 h-fit z-10 font-inter mx-auto p-4 lg:relative lg:top-1/2 lg:-translate-y-1/6  lg:-translate-x-1/4">
                        <div className="size-full rounded-l-3xl text-sm relative z-20">
                            <motion.img
                                animate={{
                                    scale: [1, 1.01, 1, 0.99, 1],
                                }}
                                transition={{
                                    ease: "linear",
                                    repeat: Infinity,
                                    duration: 5,
                                }}
                                src={gedung}
                                alt="img"
                                className="hidden lg:block w-full aspect-auto absolute lg:bottom-1/4 -z-10 lg:left-3/4"
                                draggable="false"
                            />
                            <div className="bg-[#FCEDE0] text-[#4C2C17] size-full p-10 flex flex-col gap-4">
                                <p className="text-justify indent-6 mb-4">
                                    Berdirinya Fakultas Ilmu Sosial dan Ilmu
                                    Politik ini, bermula dari Pertemuan antara
                                    Rektor Universtas Brawijaya yang saat itu
                                    dijabat Prof. Dr. Eka Afnan Troena, SE
                                    dengan Dr. Ir. Darsono Wisadirana, MS., yang
                                    ketika itu melaporkan bila sudah
                                    menyelesaikan pendidikan doktornya dari
                                    Program Pascasarjana Universitas Padjadjaran
                                    Bandung dengan menyerahkan surat kelulusan
                                    dan surat untuk penempatan kembali sebagai
                                    dosen pada Fakultas Peternakan pada tanggal
                                    28 November 2001. Pada pertemuan tersebut
                                    Darsono,WS menjelaskan, bahwa telah lulus
                                    sebagai doktor di bidang sosiologi pada
                                    Program Studi Ilmu Sosial.
                                </p>
                                <p className="text-justify indent-6 mb-4">
                                    Berdasarkan keahlian yang dimiliki tersebut,
                                    kemudian Rektor menawarkan untuk mendirikan
                                    atau membuka fakultas baru di Universitas
                                    Brawijaya yaitu Fakultas Ilmu Sosial dan
                                    Ilmu Politik (FISIP). Tawaran tersebut
                                    diterima dan disanggupi Darsono,WS dengan
                                    syarat minta didukung pihak Rektorat, yang
                                    dimaksud adalah dukungan dari Rektor dan
                                    pembantu Rektor. Selanjutnya guna menjawab
                                    permohonan Dr. Darsono,WS, Rektor memanggil
                                    Pembantu Rektor I ketika itu (Prof.Dr.Yogi
                                    Sugito) agar mendukung rencana pendirian
                                    FISIP. PR I. sangat mendukung dan sanggup
                                    untuk membantu secara penuh rencana
                                    pendirian FISIP tersebut.
                                </p>
                                <p className="text-justify indent-6 mb-4">
                                    Berdasarkan kesepakatan mendirikan FISIP,
                                    kemudian dilakukan pertemuan bertiga
                                    (Rektor, PR I dan Darsono,WS) di ruang
                                    Rektor, membahas dan mematangkan rencana
                                    pendirian fakultas baru. Pada pertemuan itu
                                    Rektor menyerahkan secara penuh kepada PR I
                                    untuk mengawal dan memimpin pendirian FISIP.
                                    Darsono mengusulkan kepada Rektor untuk
                                    dibentuk Tim Kecil yang bertanggung jawab
                                    kepada PR I. Tanggal 22 April 2002 melalui
                                    Surat Tugas Rektor yang ditandatangani PR. I
                                    (Prof.Yogi Sugito) atas nama Rektor
                                    (Prof.Dr.Ir. Bambang Guritno) Nomor
                                    956/J10/AK/2002 dibentuk tim perumus Program
                                    Ilmu Sosial.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#805555] hidden lg:block  font-inter size-full rounded-l-3xl flex flex-col gap-4 absolute lg:bottom-10 lg:right-10 bottom-2 right-2"></div>
                    </div>
                </section>
            </div>
            <Footer bg="bg-[#F7EDE4]" />
        </>
    );
};

export default Tentang;
