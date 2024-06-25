import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import MobileLogo from "../../assets/Nav-Logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full lg:rounded-bl-xl fixed bg-[#006181] top-0 py-3 lg:py-4 z-50 text-white">
            <main className="container mx-auto lg:px-16 md:px-10 bg-[#006181] px-4 flex justify-center items-center relative z-20 lg:justify-between">
                <img
                    src={Logo}
                    alt="logo-img"
                    className="w-1/6 hidden lg:block aspect-auto"
                    draggable="false"
                />
                <Icon
                    icon={isMenuOpen ? "mdi:close" : "mdi:hamburger-menu"}
                    className="lg:hidden block self-end aspect-square duration-300 ease-in-out text-4xl top-1/2 -translate-y-1/2 absolute right-2 cursor-pointer"
                    onClick={toggleMenu}
                />

                <img src={MobileLogo} className="lg:hidden block" alt="" />
                <ul className="lg:flex hidden text-xl font-inter font-bold items-center gap-10">
                    <NavLink to="/" text="Beranda" />
                    <NavLink to="/tentang" text="Tentang" />
                    <NavLink to="/mitra" text="Mitra" />
                    <DropdownNavLink
                        text="Kabinet"
                        items={[
                            { text: "Organigram", to: "/organigram" },
                            {
                                text: "Kepengurusan",
                                items: [
                                    {
                                        text: "Kementerian",
                                        items: [
                                            {
                                                text: "Kementerian Dalam Negeri",
                                                to: "/kementerian-dalam-negeri",
                                            },
                                            {
                                                text: "Kementerian Luar Negeri",
                                                to: "/kementerian-luar-negeri",
                                            },
                                            {
                                                text: "Kementerian Pengembangan Sumber Daya Manusia",
                                                to: "/kementerian-psdm",
                                            },
                                            {
                                                text: "Kementerian Pengarusutamaan Gender",
                                                to: "/kementerian-gender",
                                            },
                                            {
                                                text: "Kementerian Sosial dan Lingkungan",
                                                to: "/kementerian-sosling",
                                            },
                                            {
                                                text: "Kementerian Kajian dan Aksi Strategis",
                                                to: "/kementerian-kas",
                                            },
                                            {
                                                text: "Kementerian Inovasi dan Karya",
                                                to: "/kementerian-inovasi-karya",
                                            },
                                            {
                                                text: "Kementerian Ekonomi Kreatif",
                                                to: "/kementerian-ekraf",
                                            },
                                            {
                                                text: "Kementerian Advokasi dan Kesejahteraan Mahasiswa",
                                                to: "/kementerian-advokesma",
                                            },
                                            {
                                                text: "Kementerian Seni dan Olahraga",
                                                to: "/kementerian-senor",
                                            },
                                        ],
                                    },
                                    {
                                        text: "Biro",
                                        items: [
                                            {
                                                text: "Biro Kesekretariatan",
                                                to: "/biro-kesekretariatan",
                                            },
                                            {
                                                text: "Biro Keuangan",
                                                to: "/biro-keuangan",
                                            },
                                            {
                                                text: "Biro Pusat Komunikasi dan Informasi",
                                                to: "/biro-pusat-kominfo",
                                            },
                                            {
                                                text: "Biro Pemberdayaan Aparatur Organisasi",
                                                to: "/biro-pao",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ]}
                    />
                    <NavLink to="/" text="Informasi" />
                </ul>
            </main>

            <div
                className={`${
                    !isMenuOpen
                        ? "bottom-full -translate-y-full "
                        : " bottom-0 translate-y-full "
                }  transition-transform lg:hidden absolute  left-0 w-full bg-[#006181] py-4 px-4`}
            >
                <ul className="flex flex-col space-y-4 justify-center items-center text-sm font-inter font-bold">
                    <NavLink to="/" text="Beranda" mobile />
                    <NavLink to="/tentang" text="Tentang" mobile />
                    <NavLink to="/mitra" text="Mitra" mobile />
                    <MobileDropdownNavLink
                        text="Kabinet"
                        items={[
                            { text: "Organigram", to: "/organigram" },
                            {
                                text: "Kepengurusan",
                                items: [
                                    {
                                        text: "Kementerian",
                                        items: [
                                            {
                                                text: "Kementerian Dalam Negeri",
                                                to: "/kementerian-dalam-negeri",
                                            },
                                            {
                                                text: "Kementerian Luar Negeri",
                                                to: "/kementerian-luar-negeri",
                                            },
                                            {
                                                text: "Kementerian Pengembangan Sumber Daya Manusia",
                                                to: "/kementerian-psdm",
                                            },
                                            {
                                                text: "Kementerian Pengarusutamaan Gender",
                                                to: "/kementerian-gender",
                                            },
                                            {
                                                text: "Kementerian Sosial dan Lingkungan",
                                                to: "/kementerian-sosling",
                                            },
                                            {
                                                text: "Kementerian Kajian dan Aksi Strategis",
                                                to: "/kementerian-kas",
                                            },
                                            {
                                                text: "Kementerian Inovasi dan Karya",
                                                to: "/kementerian-inovasi-karya",
                                            },
                                            {
                                                text: "Kementerian Ekonomi Kreatif",
                                                to: "/kementerian-ekraf",
                                            },
                                            {
                                                text: "Kementerian Advokasi dan Kesejahteraan Mahasiswa",
                                                to: "/kementerian-advokesma",
                                            },
                                            {
                                                text: "Kementerian Seni dan Olahraga",
                                                to: "/kementerian-senor",
                                            },
                                        ],
                                    },
                                    {
                                        text: "Biro",
                                        items: [
                                            {
                                                text: "Biro Kesekretariatan",
                                                to: "/biro-kesekretariatan",
                                            },
                                            {
                                                text: "Biro Keuangan",
                                                to: "/biro-keuangan",
                                            },
                                            {
                                                text: "Biro Pusat Komunikasi dan Informasi",
                                                to: "/biro-pusat-kominfo",
                                            },
                                            {
                                                text: "Biro Pemberdayaan Aparatur Organisasi",
                                                to: "/biro-pao",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ]}
                    />
                    <NavLink to="/" text="Informasi" mobile />
                </ul>
            </div>
        </nav>
    );
};

const NavLink = ({ to, text, mobile }) => (
    <Link
        href={to}
        className={`relative group lg:hover:bg-inherit lg:hover:text-inherit hover:bg-white w-full  hover:text-[#006181] duration-300 ease-in-out `}
    >
        {text}
        <div
            className={`group-hover:w-full bg-white w-0 h-0.5 duration-500 ease-in-out absolute -z-10 ${
                mobile ? "bottom-[-4px]" : "bottom-0"
            }`}
        ></div>
    </Link>
);

const DropdownNavLink = ({ text, items }) => {
    return (
        <div className="relative group ">
            <span className="cursor-pointer">{text}</span>
            <div className="absolute left-0 hidden group-hover:block text-base bg-[#006181] mt-2">
                <ul className="py-2">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="relative group/sub px-4 py-2 hover:bg-[#007399]"
                        >
                            {item.to ? (
                                <Link href={item.to}>{item.text}</Link>
                            ) : (
                                <>
                                    <span>{item.text}</span>
                                    {item.items && (
                                        <div className="absolute right-full top-0 hidden group-hover/sub:block bg-[#006181]">
                                            <ul className="py-2">
                                                {item.items.map(
                                                    (subItem, subIndex) => (
                                                        <li
                                                            key={subIndex}
                                                            className="relative group/subsub px-4 py-2 hover:bg-[#007399]"
                                                        >
                                                            {subItem.to ? (
                                                                <Link
                                                                    href={
                                                                        subItem.to
                                                                    }
                                                                >
                                                                    {
                                                                        subItem.text
                                                                    }
                                                                </Link>
                                                            ) : (
                                                                <>
                                                                    <span>
                                                                        {
                                                                            subItem.text
                                                                        }
                                                                    </span>
                                                                    {subItem.items && (
                                                                        <div className="absolute right-full top-0 hidden w-fit group-hover/subsub:block bg-[#006181]">
                                                                            <ul className="py-2">
                                                                                {subItem.items.map(
                                                                                    (
                                                                                        subSubItem,
                                                                                        subSubIndex
                                                                                    ) => (
                                                                                        <li
                                                                                            key={
                                                                                                subSubIndex
                                                                                            }
                                                                                            className="px-4 py-2 w-72 hover:bg-[#007399]"
                                                                                        >
                                                                                            <Link
                                                                                                href={
                                                                                                    subSubItem.to
                                                                                                }
                                                                                            >
                                                                                                {
                                                                                                    subSubItem.text
                                                                                                }
                                                                                            </Link>
                                                                                        </li>
                                                                                    )
                                                                                )}
                                                                            </ul>
                                                                        </div>
                                                                    )}
                                                                </>
                                                            )}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const MobileDropdownNavLink = ({ text, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left  py-2 hover:bg-[#007399]"
            >
                {text}
            </button>
            {isOpen && (
                <ul className="pl-4">
                    {items.map((item, index) => (
                        <MobileDropdownItem key={index} item={item} />
                    ))}
                </ul>
            )}
        </div>
    );
};

const MobileDropdownItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (item.to) {
        return (
            <li className="px-4 py-2 hover:bg-[#007399]">
                <Link href={item.to}>{item.text}</Link>
            </li>
        );
    }

    return (
        <li>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left px-4 py-2 hover:bg-[#007399]"
            >
                {item.text}
            </button>
            {isOpen && item.items && (
                <ul className="pl-4 h-40 overflow-auto">
                    {item.items.map((subItem, subIndex) => (
                        <MobileDropdownItem key={subIndex} item={subItem} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default Navbar;
