import React from "react";
import dekorasi from "../../assets/Organigram/dekorasi.png";
import struktur from "../../assets/Logo/Struktur.png";
import { Head, Link } from "@inertiajs/react";
import Navbar from "../components/Navbar";
import Pres from "../../assets/Logo/pres-wapres.png";
import PAO from "../../assets/Logo/PAO.png";
import Puskominfo from "../../assets/Logo/PUSKOM.png";
import ADKES from "../../assets/Logo/ADKES.png";
import ADKEU from "../../assets/Logo/ADKEU.png";
import ADVO from "../../assets/Logo/ADVO.png";
import DAGRI from "../../assets/Logo/DAGRI.png";
import LUGRI from "../../assets/Logo/LUGRI.png";
import PSDM from "../../assets/Logo/PSDM.png";
import PG from "../../assets/Logo/PUG.png";
import INOYA from "../../assets/Logo/INOYA.png";
import KASTRAT from "../../assets/Logo/KASTRAT.png";
import SOSLING from "../../assets/Logo/SOSLING.png";
import SENORA from "../../assets/Logo/SENORA.png";
import EKRAF from "../../assets/Logo/EKRAF.png";
const Organigram = () => {
    return (
        <>
            <Head title="BEM FISIP 2024||Organigram" />
            <Navbar />
            <div className="bg-[#F7EDE4] font-inter">
                <header className="lg:h-screen h-[50vh] overflow-x-hidden flex flex-col items-center justify-center relative w-full">
                    <h1 className="lg:text-7xl md:text-4xl text-2xl text-[#805555] font-black text-center">
                        ORGANIGRAM
                    </h1>
                    <h1 className="lg:text-7xl md:text-4xl text-2xl text-[#805555] font-black text-center">
                        BEM FISIP UB 2024
                    </h1>
                    <img
                        src={dekorasi}
                        alt="img-dekor"
                        className="absolute w-2/5 right-0 translate-x-1/2 bottom-0 "
                    />
                    <img
                        src={dekorasi}
                        alt="img-dekor"
                        className="absolute w-2/5 left-0 -translate-x-1/2 bottom-0 "
                    />
                </header>
                <main className="relative w-full">
                    <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-1/2 -translate-x-1/2">
                        <img
                            src={Pres}
                            className="w-2/5 mx-auto aspect-auto"
                            alt=""
                            draggable="false"
                        />
                    </div>
                    <h1 className="text-[2vw] w-fit  p-[1.5vw] text-[#006181] flex items-center relative rounded-md left-1/2 -translate-x-1/2">
                        PRESIDEN DAN WAKIL PRESIDEN
                    </h1>
                    <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[50%] translate-y-[0.4vw] -translate-x-1/2"></div>
                    <div className="w-[70vw] lg:w-[69.4vw] h-[0.3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[50%] translate-y-[0.2vw] -translate-x-1/2"></div>
                    <div className="flex pb-[1vw] relative">
                        <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[15%] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[37%] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[62%] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[84%] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-[6vw] aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[50%] -translate-y-[0.4vw] -translate-x-1/2"></div>
                    </div>
                    <div className="flex relative">
                        <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-[15%] -translate-x-1/2">
                            <img
                                src={PAO}
                                className="w-2/5 mx-auto aspect-auto"
                                alt=""
                                draggable="false"
                            />
                        </div>
                        <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-[17%] -translate-x-1/2">
                            <img
                                src={Puskominfo}
                                className="w-2/5 mx-auto aspect-auto"
                                alt=""
                                draggable="false"
                            />
                        </div>
                        <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-[22%] -translate-x-1/2">
                            <img
                                src={ADKES}
                                className="w-2/5 mx-auto aspect-auto"
                                alt=""
                                draggable="false"
                            />
                        </div>
                        <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-[24%] -translate-x-1/2">
                            <img
                                src={ADKEU}
                                className="w-2/5 mx-auto aspect-auto"
                                alt=""
                                draggable="false"
                            />
                        </div>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[50%] translate-y-[0.4vw] -translate-x-1/2"></div>
                    </div>

                    <div className="flex relative">
                        <div className="w-[20vw] p-[1vw] border-x-2 border-b-2 mt-[1vw] border-[#006181] flex items-center relative rounded-[1.3vw] left-[15%] -translate-x-1/2">
                            <h1 className="text-[1.2vw] text-center">
                                BIRO PEMBERDAYAAN APARATUR ORGANISASI
                            </h1>
                        </div>
                        <div className="w-[20vw] p-[1vw] border-x-2 border-b-2 mt-[1vw] border-[#006181] flex items-center relative rounded-[1.3vw] left-[17%] -translate-x-1/2">
                            <h1 className="text-[1.2vw] text-center">
                                BIRO PUSAT KOMUNIKASI, MEDIA & INFORMASI
                            </h1>
                        </div>
                        <div className="w-[20vw] p-[1vw] border-x-2 border-b-2 mt-[1vw] border-[#006181] flex items-center relative rounded-[1.3vw] left-[22%] -translate-x-1/2">
                            <h1 className="text-[1.2vw] text-center">
                                BIRO ADMINITRASI KESEKRETARIATAN
                            </h1>
                        </div>
                        <div className="w-[20vw] p-[1vw] border-x-2 border-b-2 mt-[1vw] border-[#006181] flex items-center relative rounded-[1.3vw] left-[24%] -translate-x-1/2">
                            <h1 className="text-[1.2vw] text-center">
                                BIRO ADMINISTRASI KEUANGAN
                            </h1>
                        </div>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[50%] -translate-y-[0.1vw] -translate-x-1/2"></div>
                    </div>
                    <div className="flex relative">
                        <ul className="w-[20vw] list-disc p-[1vw] mt-[1vw]   relative rounded-2xl left-[15%] -translate-x-1/2">
                            <li className="text-[1vw] ">Kepala Biro</li>
                            <li className="text-[1vw] ">
                                Kepala Bagian Pengembangan Organisasi
                            </li>
                            <li className="text-[1vw] ">
                                Kepala Bagian Manajemen Sumberdaya Internal
                            </li>
                        </ul>
                        <ul className="w-[20vw] list-disc p-[1vw] mt-[1vw]   relative rounded-2xl left-[17%] -translate-x-1/2">
                            <li className="text-[1vw] ">Kepala Biro</li>
                            <li className="text-[1vw] ">
                                Kepala Bagian Redaksi & Publikasi
                            </li>
                            <li className="text-[1vw] ">
                                Kepala Bagian Media Kreatif
                            </li>
                            <li className="text-[1vw] ">
                                Kepala Bagian Media Informasi
                            </li>
                        </ul>
                        <ul className="w-[20vw] list-disc p-[1vw] mt-[1vw]   relative rounded-2xl left-[22%] -translate-x-1/2">
                            <li className="text-[1vw] ">Kepala Biro</li>
                            <li className="text-[1vw] ">Wakil Kepala Biro</li>
                        </ul>
                        <ul className="w-[20vw] list-disc p-[1vw] mt-[1vw]   relative rounded-2xl left-[24%] -translate-x-1/2">
                            <li className="text-[1vw] ">Kepala Biro</li>
                            <li className="text-[1vw] ">Wakil Kepala Biro</li>
                        </ul>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[50%] -translate-y-[0.4vw] -translate-x-1/2"></div>
                    </div>

                    <div className="w-[0.3vw] h-[5vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[50%] -translate-y-[0.7vw] -translate-x-1/2"></div>
                    <div className="w-[96vw] lg:w-[95vw] h-[0.3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[50%] -translate-y-[0.8vw] -translate-x-1/2"></div>
                    <div className="flex pb-[1vw] -translate-y-[1vw]  relative">
                        <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[15%] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[37%] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[62%] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[84%] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[2vw] -translate-y-[0.1vw] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md right-[1.7vw] -translate-y-[0.1vw] -translate-x-1/2"></div>
                    </div>
                    <div className="flex relative -translate-y-[1vw]">
                        <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-[15%] -translate-x-1/2">
                            <img
                                src={ADVO}
                                className="w-2/5 mx-auto aspect-auto"
                                alt=""
                                draggable="false"
                            />
                        </div>
                        <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-[17%] -translate-x-1/2">
                            <img
                                src={DAGRI}
                                className="w-2/5 mx-auto aspect-auto"
                                alt=""
                                draggable="false"
                            />
                        </div>
                        <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-[22%] -translate-x-1/2">
                            <img
                                src={LUGRI}
                                className="w-2/5 mx-auto aspect-auto"
                                alt=""
                                draggable="false"
                            />
                        </div>
                        <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-[24%] -translate-x-1/2">
                            <img
                                src={PSDM}
                                className="w-2/5 mx-auto aspect-auto"
                                alt=""
                                draggable="false"
                            />
                        </div>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[2vw] -translate-y-[0.3vw] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md right-[1.7vw] -translate-y-[0.3vw] -translate-x-1/2"></div>
                    </div>

                    <div className="flex relative">
                        <div className="w-[20vw] p-[1vw] border-x-2 border-b-2 mt-[1vw] border-[#006181] flex items-center relative rounded-[1.3vw] left-[15%] -translate-x-1/2">
                            <h1 className="text-[1.2vw] text-center">
                                KEMENTERIAN ADVOKASI DAN KESEJAHTERAAN MAHASISWA
                            </h1>
                        </div>
                        <div className="w-[20vw] p-[1vw] border-x-2 border-b-2 mt-[1vw] border-[#006181] flex items-center relative rounded-[1.3vw] left-[17%] -translate-x-1/2">
                            <h1 className="text-[1.2vw] text-center">
                                KEMENTERIAN DALAM NEGERI
                            </h1>
                        </div>
                        <div className="w-[20vw] p-[1vw] border-x-2 border-b-2 mt-[1vw] border-[#006181] flex items-center relative rounded-[1.3vw] left-[22%] -translate-x-1/2">
                            <h1 className="text-[1.2vw] text-center">
                                KEMENTERIAN LUAR NEGERI
                            </h1>
                        </div>
                        <div className="w-[20vw] p-[1vw] border-x-2 border-b-2 mt-[1vw] border-[#006181] flex items-center relative rounded-[1.3vw] left-[24%] -translate-x-1/2">
                            <h1 className="text-[1.2vw] text-center">
                                KEMENTERIAN PENGEMBANGAN SUMBER DAYA MANUSIA
                            </h1>
                        </div>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[2vw] -translate-y-[2vw] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md right-[1.7vw] -translate-y-[2vw] -translate-x-1/2"></div>
                    </div>
                    <div className="flex relative">
                        <ul className="w-[20vw] list-disc p-[1vw] mt-[1vw]   relative rounded-2xl left-[15%] -translate-x-1/2">
                            <li className="text-[1vw] ">Menteri</li>
                            <li className="text-[1vw] ">
                                Direktorat Jenderal Advokasi
                            </li>
                            <li className="text-[1vw] ">
                                Direktorat Jenderal Kesejahteraan Mahasiswa
                            </li>
                        </ul>
                        <ul className="w-[20vw] list-disc p-[1vw] mt-[1vw]   relative rounded-2xl left-[17%] -translate-x-1/2">
                            <li className="text-[1vw] ">Menteri</li>
                            <li className="text-[1vw] "> Wakil Menteri</li>
                        </ul>
                        <ul className="w-[20vw] list-disc p-[1vw] mt-[1vw]   relative rounded-2xl left-[22%] -translate-x-1/2">
                            <li className="text-[1vw] ">Menteri</li>
                            <li className="text-[1vw] "> Wakil Menteri</li>
                        </ul>
                        <ul className="w-[20vw] list-disc p-[1vw] mt-[1vw]   relative rounded-2xl left-[24%] -translate-x-1/2">
                            <li className="text-[1vw] ">Menteri</li>
                            <li className="text-[1vw] "> Wakil Menteri</li>
                        </ul>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[2vw] -translate-y-[2.1vw] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md right-[1.7vw] -translate-y-[2.1vw] -translate-x-1/2"></div>
                    </div>
                    <div className="w-[70vw] lg:w-[69.4vw] h-[0.3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[50%] translate-y-[0.2vw] -translate-x-1/2"></div>

                    <div className="flex pb-[1vw] relative">
                        <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[15%] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[37%] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[62%] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[84%] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[2vw] -translate-y-[2.5vw] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md right-[1.7vw] -translate-y-[2.5vw] -translate-x-1/2"></div>
                    </div>
                    <div className="flex relative">
                        <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-[15%] -translate-x-1/2">
                            <img
                                src={PG}
                                className="w-2/5 mx-auto aspect-auto"
                                alt=""
                                draggable="false"
                            />
                        </div>
                        <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-[17%] -translate-x-1/2">
                            <img
                                src={INOYA}
                                className="w-2/5 mx-auto aspect-auto"
                                alt=""
                                draggable="false"
                            />
                        </div>
                        <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-[22%] -translate-x-1/2">
                            <img
                                src={KASTRAT}
                                className="w-2/5 mx-auto aspect-auto"
                                alt=""
                                draggable="false"
                            />
                        </div>
                        <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-[24%] -translate-x-1/2">
                            <img
                                src={SOSLING}
                                className="w-2/5 mx-auto aspect-auto"
                                alt=""
                                draggable="false"
                            />
                        </div>
                        <div className="w-[0.3vw] h-[20vw] aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[2vw] -translate-y-[2.7vw] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-[20vw] aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md right-[1.7vw] -translate-y-[2.7vw] -translate-x-1/2"></div>
                    </div>

                    <div className="flex relative">
                        <div className="w-[20vw] p-[1vw] border-x-2 border-b-2 mt-[1vw] border-[#006181] flex items-center relative rounded-[1.3vw] left-[15%] -translate-x-1/2">
                            <h1 className="text-[1.2vw] text-center">
                                KEMENTERIAN PENGARUSUTAMAN GENDER
                            </h1>
                        </div>
                        <div className="w-[20vw] p-[1vw] border-x-2 border-b-2 mt-[1vw] border-[#006181] flex items-center relative rounded-[1.3vw] left-[17%] -translate-x-1/2">
                            <h1 className="text-[1.2vw] text-center">
                                KEMENTERIAN INOVASI DAN KARYA
                            </h1>
                        </div>
                        <div className="w-[20vw] p-[1vw] border-x-2 border-b-2 mt-[1vw] border-[#006181] flex items-center relative rounded-[1.3vw] left-[22%] -translate-x-1/2">
                            <h1 className="text-[1.2vw] text-center">
                                KEMENTERIAN KAJIAN DAN AKSI STRATEGIS
                            </h1>
                        </div>
                        <div className="w-[20vw] p-[1vw] border-x-2 border-b-2 mt-[1vw] border-[#006181] flex items-center relative rounded-[1.3vw] left-[24%] -translate-x-1/2">
                            <h1 className="text-[1.2vw] text-center">
                                KEMENTERIAN SOSIAL DAN LINGKUNGAN
                            </h1>
                        </div>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[2vw]  -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md right-[1.7vw] -translate-x-1/2"></div>
                    </div>
                    <div className="flex relative">
                        <ul className="w-[20vw] list-disc p-[1vw] mt-[1vw]   relative rounded-2xl left-[15%] -translate-x-1/2">
                            <li className="text-[1vw] ">Menteri</li>
                            <li className="text-[1vw] "> Wakil Menteri</li>
                        </ul>
                        <ul className="w-[20vw] list-disc p-[1vw] mt-[1vw]   relative rounded-2xl left-[17%] -translate-x-1/2">
                            <li className="text-[1vw] ">Menteri</li>
                            <li className="text-[1vw] ">
                                Direktorat Jenderal Riset dan Keilmuan
                            </li>
                            <li className="text-[1vw] ">
                                Direktorat Jendral Inovasi dan Prestasi
                            </li>
                        </ul>
                        <ul className="w-[20vw] list-disc p-[1vw] mt-[1vw]   relative rounded-2xl left-[22%] -translate-x-1/2">
                            <li className="text-[1vw] ">Menteri</li>
                            <li className="text-[1vw] ">
                                Direktorat Jenderal Kajian dan Pencerdasan Isu
                            </li>
                            <li className="text-[1vw] ">
                                {" "}
                                Direktorat Jenderal Aksi dan propaganda
                            </li>
                        </ul>
                        <ul className="w-[20vw] list-disc p-[1vw] mt-[1vw]   relative rounded-2xl left-[24%] -translate-x-1/2">
                            <li className="text-[1vw] ">Menteri</li>
                            <li className="text-[1vw] ">
                                Direktorat Jendral Sosial
                            </li>
                            <li className="text-[1vw] ">
                                Direktorat Jendral Lingkungan
                            </li>
                        </ul>
                        <div className="w-[0.3vw] h-[20vw] aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[2vw]  -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="w-[0.3vw] h-[20vw] aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md right-[1.7vw] -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    <div className="w-[25vw] lg:w-[25vw] h-[0.3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[50%] translate-y-[0.2vw] -translate-x-1/2"></div>
                    <div className="flex pb-[1vw] relative">
                        <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[37.5%] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-[3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[62.2%] -translate-x-1/2"></div>
                        <div className="w-[0.3vw] h-[40vw] aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[2vw]  -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="w-[0.3vw] h-[40vw] aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md right-[1.7vw] -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    <div className="flex relative">
                        <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-[37%] -translate-x-1/2">
                            <img
                                src={SENORA}
                                className="w-2/5 mx-auto aspect-auto"
                                alt=""
                                draggable="false"
                            />
                        </div>
                        <div className="w-[20vw] aspect-video p-4 bg-[#006181] hover:bg-[#1f4c5c] transition-colors duration-200 flex items-center relative rounded-md left-[42%] -translate-x-1/2">
                            <img
                                src={EKRAF}
                                className="w-2/5 mx-auto aspect-auto"
                                alt=""
                                draggable="false"
                            />
                        </div>
                        <div className="w-[0.3vw]  h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[2vw]  -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="w-[0.3vw]  h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md right-[1.7vw] -translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="flex relative">
                        <div className="w-[20vw] p-[1vw] border-x-2 border-b-2 mt-[1vw] border-[#006181] flex items-center relative rounded-[1.3vw] left-[37%] -translate-x-1/2">
                            <h1 className="text-[1.2vw] text-center">
                                KEMENTERIAN SENI DAN OLAHRAGA
                            </h1>
                        </div>
                        <div className="w-[20vw] p-[1vw] border-x-2 border-b-2 mt-[1vw] border-[#006181] flex items-center relative rounded-[1.3vw] left-[42%] -translate-x-1/2">
                            <h1 className="text-[1.2vw] text-center">
                                KEMENTERIAN EKONOMI KREATIF
                            </h1>
                        </div>
                        <div className="w-[0.3vw]  h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[2vw]  -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="w-[0.3vw]  h-full aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md right-[1.7vw] -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    <div className="flex relative">
                        <ul className="w-[20vw] list-disc p-[1vw] mt-[1vw]   relative rounded-2xl left-[37%] -translate-x-1/2">
                            <li className="text-[1vw] ">Menteri</li>
                            <li className="text-[1vw] ">
                                Direktorat Jenderal Seni
                            </li>
                            <li className="text-[1vw] ">
                                Direktorat Jenderal dan Olahraga
                            </li>
                        </ul>
                        <ul className="w-[20vw] list-disc p-[1vw] mt-[1vw]   relative rounded-2xl left-[42%] -translate-x-1/2">
                            <li className="text-[1vw] ">Menteri</li>
                            <li className="text-[1vw] ">Wakil Menteri</li>
                        </ul>
                        <div className="w-[0.3vw]  h-[16vw] aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md left-[2vw]  -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="w-[0.3vw]  h-[16vw] aspect-video  bg-[#4C2C17] flex items-center absolute rounded-md right-[1.7vw] -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    <div className="w-[96vw] lg:w-[95vw] h-[0.3vw] aspect-video  bg-[#4C2C17] flex items-center relative rounded-md left-[50%] translate-y-[0.2vw] -translate-x-1/2"></div>
                </main>
            </div>
        </>
    );
};

export default Organigram;
