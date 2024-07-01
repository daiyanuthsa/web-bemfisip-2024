    import React from "react";
    import { Head } from "@inertiajs/react";
   
    import Hero from "../sections/landingPage/Hero";
    import Sambutan from "../sections/landingPage/Sambutan";
    import VisiMisi from "../sections/landingPage/VisiMisi";
    import Comprof from "../sections/landingPage/Comprof";
    import Tentang from "../sections/landingPage/Tentang";
    import Artikel from "../sections/landingPage/Artikel";
    import UKM from "../sections/landingPage/UKM";
    import Kalender from "../sections/landingPage/Kalender";
    import PageLayout from "../components/layouts/PageLayout"
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";

    export default function Home() {
        return (
            <>
                <Head title="BEM FISIP 2024||Home"  />
                <div className="bg-[#F7EDE4]">
                    <PageLayout>
                    <Hero />
                    <Sambutan />
                    <VisiMisi />
                    <Comprof />
                    <Tentang />
                    <Artikel />
                    <UKM />
                    <Kalender />
                    </PageLayout>
                </div>
            </>
        );
    }
