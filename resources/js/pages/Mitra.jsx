import React from "react";
import Navbar from "../components/Navbar";
import { Head } from "@inertiajs/react";
import Footer from "../components/Footer";
const Mitra = () => {
    return (
        <>
            <Head title="BEM FISIP 2024 || Mitra" />

            <Navbar />
            <div className="bg-[#F7EDE4] font-inter">
                <header className="flex  flex-col justify-center w-full lg:h-screen py-20 gap-20 lg:gap-40 items-center">
                    <h1 className="py-4 px-6 lg:px-20 text-xl text-center lg:text-5xl font-bold bg-[#006181] text-[#F7EDE4]  w-fit rounded-3xl mt-12 mx-auto">
                        MEDIA PARTNER
                    </h1>
                    <main className="container text-sm md:text-base lg:text-lg mx-aut0 lg:px-24 md:px-10 px-4 grid-cols-1 grid md:grid-cols-3 gap-20 lg:gap-5">
                        <div className="w-full  bg-transparent border-x-2 border-b-2 flex  items-center border-[#006181] relative p-5 rounded-2xl text-justify">
                            <div className="text-[#F7EDE4] bg-[#006181] font-bold text-xl lg:text-4xl absolute w-1/3 lg:w-3/5 aspect-video flex justify-center items-center rounded-2xl top-5 -translate-y-110 left-0 lg:-translate-x-1/3">
                                1
                            </div>
                            Pengajuan kerjasama publikasi/ Media Partnership
                            dapat diajukan oleh seluruh organisasi nirlaba, baik
                            dari lingkup internal FISIP UB, fakultas lain dalam
                            lingkup Universitas Brawijaya, maupun
                            organisasi-organisasi nirlaba di luar lingkup
                            Universitas Brawijaya.
                        </div>
                        <div className="w-full  bg-transparent border-x-2 border-b-2 flex  items-center border-[#006181] relative p-5 rounded-2xl text-justify">
                            <div className="text-[#F7EDE4] bg-[#006181] font-bold text-xl lg:text-4xl absolute w-1/3 lg:w-3/5 aspect-video flex justify-center items-center rounded-2xl top-5 -translate-y-110 left-0 lg:-translate-x-1/3">
                                2
                            </div>
                            Pengajuan kerjasama dapat dilakukan dengan
                            menghubungi media partner yang tertera di bio
                            instagram BEM FISIP UB.
                        </div>
                        <div className="w-full  bg-transparent border-x-2 border-b-2 flex  items-center border-[#006181] relative p-5 rounded-2xl text-justify">
                            <div className="text-[#F7EDE4] bg-[#006181] font-bold text-xl lg:text-4xl absolute w-1/3 lg:w-3/5 aspect-video flex justify-center items-center rounded-2xl top-5 -translate-y-110 left-0 lg:-translate-x-1/3">
                                3
                            </div>
                            Pihak yang mengajukan kerjasama harus membaca dan
                            memenuhi ketentuan-ketentuan yang tertera.
                        </div>
                    </main>
                </header>
                <section className="container text-lg mx-auto lg:px-24 md:px-10 px-4">
                    <h1 className="py-4  px-20 text-[#006181] text-xl lg:text-5xl font-bold   w-fit rounded-3xl mx-auto">
                        KETENTUAN
                    </h1>
                    <div className="w-full   bg-transparent border-x-2 border-b-2 flex   items-center border-[#006181] relative p-10 rounded-2xl">
                        <ul className="list-decimal text-sm md:text-base lg:text-lg flex flex-col gap-3 text-justify">
                            <li>
                                Pihak yang mengajukan kerjasama harus memberikan
                                20 followers untuk akun Instagram @bemfisipub .
                            </li>
                            <li>
                                Pihak yang mengajukan kerjasama harus memasang
                                logo kabinet BEM FISIP UB 2024 pada bahan
                                postingan yang akan dipublikasikan.
                            </li>
                            <li>
                                Postingan akan dipublikasikan satu kali melalui
                                Instagram Story BEM FISIP UB.
                            </li>
                            <li>
                                Publikasi postingan hanya akan dilakukan pada
                                hari Sabtu.
                            </li>
                            <li>
                                Pengumpulan daftar followers dan bahan media
                                partner disertakan dalam satu folder Google
                                Drive. Setiap username followers harus terlihat
                                jelas di dalam folder tersebut.
                            </li>
                            <li>
                                Bahan media partner dikirimkan dengan kualitas
                                HD atau resolusi tinggi.
                            </li>
                            <li>
                                Logo BEM FISIP UB dapat diunduh di tautan
                                berikut ini:{" "}
                                <a href="https://bit.ly/3UDsTom"
                                target="_blank">
                                    https://bit.ly/3UDsTom
                                </a>
                                .
                            </li>
                        </ul>
                        <a
                            href="https://wa.me/6282375320144"
                            target="_blank"
                            className="lg:text-xl text-sm text-[#F7EDE4] absolute bottom-0 text-center bg-[#006181] px-6 lg:px-10 py-2 rounded-2xl left-1/2 -translate-x-1/2 translate-y-1/2"
                        >
                            Narahubung : 082375320144 (Ilham)
                        </a>
                    </div>
                </section>
                <section className="container  text-lg mx-auto py-20 lg:px-24 md:px-10 px-4">
                    <h1 className="py-4 text-xl px-6 lg:px-20 lg:text-5xl font-bold bg-[#006181] text-[#F7EDE4]    w-fit rounded-3xl mx-auto">
                        PARTNERSHIP
                    </h1>
                    <div className="w-full bg-transparent border-x-2 border-b-2 flex mt-10   items-center border-[#006181] relative p-10 rounded-2xl">
                        <ul className="list-decimal md:text-base text-sm lg:text-lg flex flex-col gap-3 text-justify">
                            <li>
                                Pihak yang mengajukan kerjasama diharuskan untuk
                                memperhatikan serta mematuhi ketentuan yang
                                tertera.
                            </li>
                            <li>
                                Pengajuan kerjasama kemitraan dapat dilakukan
                                oleh UMKM baik dari lingkungan internal FISIP
                                UB, lingkup Universitas Brawijaya, maupun UMKM
                                milik masyarakat umum.
                            </li>
                            <li>
                                Kerjasama kemitraan dapat dilakukan dengan
                                menghubungi contact person penanggung jawab
                                kemitraan yang tersedia.
                            </li>
                        </ul>
                        {/* <a
                            href="https://wa.me/6281318303082"
                            target="_blank"
                            className="lg:text-3xl text-sm text-[#F7EDE4] absolute bottom-0 text-center bg-[#006181] px-6 lg:px-10 py-2 rounded-2xl left-1/2 -translate-x-1/2 translate-y-1/2"
                        >
                            Narahubung : 081318303082 (Audira)
                        </a> */}
                    </div>
                    <h1 className="py-4 text-xl px-6 text-[#006181] lg:px-20 lg:text-5xl font-bold mt-10   w-fit rounded-3xl mx-auto">
                        KETENTUAN
                    </h1>
                    <div className="w-full  bg-transparent border-x-2 border-b-2 flex   items-center border-[#006181] relative p-10 rounded-2xl">
                        <ul className="list-decimal md:text-base text-sm lg:text-lg flex flex-col gap-3 text-justify">
                            <li>
                                Pihak yang menawarkan kerjasama dapat
                                menghubungi nomor penanggungjawab pada jam
                                kerja.
                            </li>
                            <li>
                                Jam kerja dari FISIP With External yakni
                                Senin-Jumat pukul 07.00-18.00.
                            </li>
                            <li>
                                Pihak yang mengajukan kerjasama dapat
                                mengirimkan proposal, bersamaan saat menghubungi
                                PJ terkait.
                            </li>
                            <li>
                                Kedua belah pihak dapat mengatur jadwal untuk
                                melakukan diskusi terkait kerjasama dan untuk
                                melakukan penandatanganan nota kesepahaman
                                (MoU).
                            </li>
                            <li>
                                Kerjasama dapat berlaku setelah penandatanganan
                                MoU, dengan tetap memperhatikan kesepakatan yang
                                ada.
                            </li>
                        </ul>
                        <a
                            href="https://wa.me/6281318303082"
                            target="_blank"
                            className="lg:text-xl text-sm text-[#F7EDE4] absolute bottom-0 text-center bg-[#006181] px-6 lg:px-10 py-2 rounded-2xl left-1/2 -translate-x-1/2 translate-y-1/2"
                        >
                            Narahubung : 081318303082 (Audira)
                        </a>
                    </div>
                </section>
                <section className="container  text-lg mx-auto py-20 lg:px-24 md:px-10 px-4">
                    <h1 className="py-4 px-6 lg:px-20 text-xl lg:text-5xl font-bold bg-[#006181] text-[#F7EDE4]    w-fit rounded-3xl mx-auto">
                        VISITASI & KUNJUNGAN
                    </h1>
                    <div className="w-full text-lg bg-transparent border-x-2 border-b-2 flex mt-10   items-center border-[#006181] relative p-10 rounded-2xl">
                        <ul className="list-decimal text-sm md:text-base lg:text-lg flex flex-col gap-3 text-justify">
                            <li>
                                Surat undangan/pengajuan kunjungan dikirim
                                melalui narahubung visitasi/kunjungan yang
                                tercantum di IG BEM FISIP UB.
                            </li>
                            <li>
                                Surat undangan/pengajuan kunjungan dikirim dalam
                                rentang waktu selambat-lambatnya 28 hari sebelum
                                waktu pelaksanaan.
                            </li>
                            <li>
                                Mengirim surat undangan/pengajuan kunjungan
                                dengan isi:
                                <ul className="list-disc">
                                    <li>Nama organisasi</li>
                                    <li>Nama dan deskripsi kegiatan</li>
                                    <li>Tujuan kunjungan</li>
                                    <li>Tanggal dan Waktu Kunjungan</li>
                                    <li>
                                        Jumlah peserta yang akan hadir dari
                                        organisasi terkait
                                    </li>
                                    <li>Susunan acara kegiatan</li>
                                </ul>
                            </li>
                            <li>
                                Segala bentuk komunikasi dan koordinasi
                                lanjutan, termasuk tempat dan waktu, dilakukan
                                melalui narahubung visitasi/kunjungan yang
                                tercantum di IG BEM FISIP UB.
                            </li>
                        </ul>
                        <a
                            href="https://wa.me/6281280881357"
                            target="_blank"
                            className="lg:text-xl text-sm text-[#F7EDE4] absolute bottom-0 text-center bg-[#006181] px-6 lg:px-10 py-2 rounded-2xl left-1/2 -translate-x-1/2 translate-y-1/2"
                        >
                            Narahubung : 081280881357 (Haidar)
                        </a>
                    </div>
                </section>
                <section className="container  text-lg mx-auto py-20 lg:px-24 md:px-10 px-4">
                    <h1 className="py-4 px-6 lg:px-20 text-xl lg:text-5xl font-bold bg-[#006181] text-[#F7EDE4]    w-fit rounded-3xl mx-auto">
                        PENERIMAAN SURAT
                    </h1>
                    <div className="w-full text-lg bg-transparent border-x-2 border-b-2 flex   items-center border-[#006181] relative p-10 rounded-2xl">
                        <ul className="list-decimal text-sm md:text-base lg:text-lg
                         flex flex-col gap-3 text-justify">
                            <li>
                                Surat atau undangan dikirim melalui email
                                adkesbemfisip2024@gmail.com dengan subjek email
                                "Surat Undangan_Nama Kegiatan_Penyelenggara
                                Kegiatan".
                            </li>
                            <li>
                                Setelah mengirim email, lakukan konfirmasi
                                kepada narahubung Adkes BEM FISIP UB 2024.
                            </li>
                            <li>
                                Surat kemudian akan direkap dan disampaikan
                                kepada pihak (biro/kementerian) yang dituju dan
                                dilakukan pengarsipan.
                            </li>
                            <li>
                                Note: pengiriman surat atau undangan paling
                                lambat H-2 sebelum kegiatan berlangsung.
                            </li>
                        </ul>
                        <a
                            href="https://wa.me/6282336136546"
                            target="_blank"
                            className="lg:text-xl text-sm text-[#F7EDE4] absolute bottom-0 text-center bg-[#006181] px-6 lg:px-10 py-2 rounded-2xl left-1/2 -translate-x-1/2 translate-y-1/2"
                        >
                            Narahubung : 082336136546 (Diva)
                        </a>
                    </div>
                </section>
            </div>
            <Footer bg="bg-[#F7EDE4] " />
        </>
    );
};

export default Mitra;
