import React, { useEffect, useRef } from "react";
import daunkanan from "../../../assets/LandingPage/daun.png";
import daunkiri from "../../../assets/LandingPage/daun2.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import slide1 from "../../../assets/LandingPage/1.png";
import slide2 from "../../../assets/LandingPage/2.png";
import slide3 from "../../../assets/LandingPage/3.png";
import slide1mobile from "../../../assets/LandingPage/mobile1.png";
import slide2mobile from "../../../assets/LandingPage/mobile2.png";
import slide3mobile from "../../../assets/LandingPage/mobile3.png";
import hiasan from "../../../assets/LandingPage/hiasan.png";

const data = [slide1, slide2, slide3];
const dataMobile = [slide1mobile, slide2mobile, slide3mobile];

const VisiMisi = ({ scrollSpeed = 1 }) => {
    const splideRef = useRef(null);

    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault();
            const splide = splideRef.current?.splide;
            if (!splide) return;

            const delta = Math.sign(event.deltaY);
            const slideBy = delta * scrollSpeed;
            splide.go(`>${slideBy}`);
        };

        const splideElement = splideRef.current?.splide.root;
        if (splideElement) {
            splideElement.addEventListener("wheel", handleWheel);
        }

        return () => {
            if (splideElement) {
                splideElement.removeEventListener("wheel", handleWheel);
            }
        };
    }, [scrollSpeed]);

    return (
        <section className="bg-gradient-to-b mt-20 from-[#F0E5DB] py-10 lg:py-40 from-0% relative flex justify-center items-center via-white via-50% to-[#F0E5DB] to-100%">
            <img
                src={daunkiri}
                alt="img"
                draggable="false"
                className="absolute lg:w-auto w-2/5 top-0 -translate-y-1/2 left-0"
            />
            <img
                src={daunkanan}
                alt="img"
                draggable="false"
                className="absolute lg:w-auto w-2/5 top-0 -translate-y-1/2 right-0"
            />
            <div className="container lg:px-16 md:px-10 px-4">
                <Splide
                    ref={splideRef}
                    options={{
                        arrows: false,
                        drag: true,
                    }}
                    aria-label="My Favorite Images"
                    className={"lg:block hidden"}
                >
                    {data.map((item, i) => (
                        <SplideSlide key={i}>
                            <img
                                src={item}
                                draggable="false"
                                className="w-4/5 mx-auto aspect-auto"
                                alt={`Image ${i}`}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
                <Splide
                    options={{
                        arrows: false,
                        drag: true,
                    }}
                    aria-label="My Favorite Images"
                    className={"block lg:hidden"}
                >
                    {dataMobile.map((item, i) => (
                        <SplideSlide key={i}>
                            <img
                                src={item}
                                draggable="false"
                                className="w-4/5 mx-auto aspect-auto"
                                alt={`Image ${i}`}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            <img
                src={hiasan}
                alt="hiasan-img"
                draggable="false"
                className="absolute bottom-0 z-20 translate-y-1/2"
            />
        </section>
    );
};

export default VisiMisi;
