import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Hero from "../sections/landingPage/Hero";
import Sambutan from "../sections/landingPage/Sambutan";
import VisiMisi from "../sections/landingPage/VisiMisi";
import Comprof from "../sections/landingPage/Comprof";
import Tentang from "../sections/landingPage/Tentang";
import Artikel from "../sections/landingPage/Artikel";
import UKM from "../sections/landingPage/UKM";
import Kalender from "../sections/landingPage/Kalender";
import PageLayout from "../components/layouts/PageLayout";
import Logo from "../../assets/logo_loader.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { CSSTransition } from "react-transition-group";

const loadingScreenStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#F7EDE4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "opacity 0.8s ease-in-out", // Set transition for opacity
    opacity: 1, // Initial opacity
    zIndex: 1000, // Ensure the loading screen is on top
    flexDirection: "column",
};

const welcomeMessageStyles = {
    textAlign: "center",
};

export default function Home({ artikels }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });

        // Hide loading screen after 3 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head title="BEM FISIP 2024 || Home" />
            <CSSTransition
                in={isLoading}
                timeout={1000}
                classNames="slide-up"
                unmountOnExit
            >
                <div
                    style={{
                        ...loadingScreenStyles,
                        opacity: isLoading ? 1 : 0, // Change opacity based on isLoading
                        pointerEvents: isLoading ? "all" : "none", // Prevent interaction when hidden
                    }}
                >
                    <div style={welcomeMessageStyles}>
                        <div className="flex justify-center">
                            <img
                                src={Logo}
                                alt="logo-img"
                                className="w-1/6 lg:w-1/2 md:w-1/3 aspect-auto"
                                draggable="false"
                                data-aos="zoom-in-up"
                            />
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <div className={`bg-[#F7EDE4] ${isLoading ? "hidden" : ""}`}>
                <PageLayout>
                    <Hero />
                    <Sambutan />
                    <VisiMisi />
                    <Comprof />
                    <Tentang />
                    <Artikel artikels={artikels} />
                    <UKM />
                    <Kalender />
                </PageLayout>
            </div>
        </>
    );
}
