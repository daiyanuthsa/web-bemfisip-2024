import React from "react";
import pattern from "../../../assets/LandingPage/pattern.png";
import dekor from "../../../assets/LandingPage/dekor.png";
import { Link } from "@inertiajs/react";


const ArticleCard = ({ title, image, bgColor, id }) => (
    <div
        className="flex gap-2 "
        data-aos="fade-down"
        data-aos-duration="2000"
    >
        <div
            className="bg-white  text-white rounded-lg p-4 flex flex-col gap-2 items-center justify-center"
            style={{
                backgroundColor: bgColor,
                width: "100%",
              
            }}
        >
            <h1 className="text-lg lg:text-2xl text-center max-w-28 lg:max-w-44 text-balance font-semibold truncate line-clamp-2 h-16 ">
                {title}   
            </h1>
            <a
                className="self-end border-white border px-2 rounded-lg"
                href={`/artikel/${id}`}
            >
                Tap Here
            </a>
        </div>
        <div className="aspect-square w-48  ">
            <img
                src={image}
                alt="img"
                draggable="false"
                className="size-full  rounded-lg object-cover"
            />
        </div>
    </div>
);

const Artikel = ({ artikels }) => {
    console.log(artikels)
    return (
        <section>
            <div
                style={{ backgroundImage: `url(${pattern})` }}
                className="lg:h-screen w-full relative overflow-hidden"
            >
                <div className="h-full w-full bg-gradient-to-b from-[#FAFAF9] via-[#FAFAF9] via-20% to-transparent z-0 absolute top-0 left-0"></div>
                <div className="h-2/4 w-full bg-gradient-to-t from-[#FAFAF9] via-[#FAFAF9] via-20% to-transparent z-0 absolute top-0 -translate-y-full left-0"></div>
                <img
                    src={dekor}
                    alt="dekor"
                    draggable="false"
                    className="absolute w-2/4 lg:w-auto bottom-0 left-0 translate-y-1/2 z-20"
                />

                <main className="container mx-auto font-inter relative h-full lg:px-16 md:px-10 px-4 lg:py-10 py-32 flex lg:flex-row flex-col-reverse">
                    <div className="flex lg:flex-row flex-col relative z-10 gap-4 lg:w-3/5 justify-center items-center lg:pb-56">
                    {/* <div className="flex flex-col gap-4">
                        <ArticleCard
                            // key={article.id}
                            // id={article.id}
                            title={"test ini berita"}
                            image={
                                import.meta.env.VITE_APP_URL +
                                "storage/" 
                            }
                            bgColor="#4C2C17"
                        />
                        <ArticleCard
                            // key={article.id}
                            // id={article.id}
                            title={"test ini berita"}
                            image={
                                import.meta.env.VITE_APP_URL +
                                "storage/" 
                            }
                            bgColor="#4C2C17"
                        />
                             
                            </div>

                            <div className="flex flex-col lg:mt-10 gap-4">
                        <ArticleCard
                            // key={article.id}
                            // id={article.id}
                            title={"test ini berita"}
                            image={
                                import.meta.env.VITE_APP_URL +
                                "storage/" 
                            }
                            bgColor="#4C2C17"
                        />
                        <ArticleCard
                            // key={article.id}
                            // id={article.id}
                            title={"test ini berita"}
                            image={
                                import.meta.env.VITE_APP_URL +
                                "storage/" 
                            }
                            bgColor="#4C2C17"
                        />
                             
                            </div> */}
                        {artikels.length === 0 ? (
                            <p>Nantikan artikel menarik disini!</p>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {artikels.slice(0, 2).map((article) => (
                                    <ArticleCard
                                        key={article.id}
                                        id={article.id}
                                        title={article.judul_artikel}
                                        image={
                                            import.meta.env.VITE_APP_URL +
                                            "storage/" +
                                            article.link_gambar
                                        }
                                        bgColor="#4C2C17"
                                    />
                                ))}
                            </div>
                        )}

                        {artikels.length > 2 && (
                            <div className="flex flex-col lg:mt-10 gap-4">
                                {artikels.slice(2, 4).map((article) => (
                                    <ArticleCard
                                        key={article.id}
                                        id={article.id}
                                        title={article.judul_artikel}
                                        image={
                                            appUrl +
                                            "storage/" +
                                            article.link_gambar
                                        }
                                        bgColor={article.bgColor}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="flex relative z-10 flex-col font-inter lg:gap-2 text-[#4C2C17] mb-5 lg:mb-0   mx-auto  text- ">
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            className="text-7xl lg:text-9xl text-center mb-5 lg:mb-0 "
                        >
                            <span className="text-white bg-[#4C2C17]">
                                Arti
                            </span>
                            kel
                        </h1>
                        <h3
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="text-4xl lg:text-6xl font-bold text-end"
                        >
                            Seputar
                        </h3>
                        <h3
                            data-aos="fade-right"
                            data-aos-duration="3000"
                            className="text-4xl lg:text-6xl font-bold text-end"
                        >
                            BEM FISIP
                        </h3>
                        <Link
                            href="/artikel"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="text-lg border-2 lg:mt-0 mt-5 border-[#4C2C17] w-fit mx-auto px-3 rounded-lg "
                        >
                            Tap Here
                        </Link>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Artikel;
