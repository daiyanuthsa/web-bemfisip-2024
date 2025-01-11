import React from "react";
import { Head, Link } from "@inertiajs/react";
import Logo from "../../assets/logo_loader.png";

export default function Error() {
    return (
        <>
            <Head title="BEM FISIP 2024 || Home" />
            <div className="flex flex-col items-center justify-center w-full h-screen bg-[#F7EDE4]">
                <h1 className="mt-6 lg:text-4xl font-bold text-[#4C2C17]">
                    Halaman tidak tersedia
                </h1>
                <img
                    src={Logo}
                    alt="logo-img"
                    className="w-1/6 lg:w-1/5 md:w-1/3"
                    draggable="false"
                />

                <Link
                    href="/"
                    className="mt-10 px-8 py-2 text-lg border-2 border-[#4C2C17] rounded-lg hover:bg-[#006181] hover:text-white duration-100"
                >
                    Beranda
                </Link>
            </div>
        </>
    );
}
