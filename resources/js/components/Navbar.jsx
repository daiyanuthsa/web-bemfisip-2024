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
        <nav className="w-full lg:rounded-bl-xl fixed h-[12vh] bg-[#006181] top-0  z-50 text-white">
            <main className="container mx-auto lg:px-16 md:px-10 bg-[#006181] h-full px-4 flex justify-center items-center relative z-20 lg:justify-between">
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
                <ul className="lg:flex hidden text-xl font-inter h-full relative font-bold items-center gap-10">
                    <NavLink to="/" text="Beranda" />
                    <DropdownNavLink
                        text="Kabinet"
                        items={[
                            { text: "Organigram", to: "/organigram" },
                            {
                                text: "Kepengurusan",
                                items: [
                                    {
                                        text: "Biro Kesekretariatan",
                                        to: "/biro/ADKES",
                                    },
                                    {
                                        text: "Biro Keuangan",
                                        to: "/biro/ADKEU",
                                    },
                                    {
                                        text: "Biro Pusat Komunikasi dan Informasi",
                                        to: "/biro/PUSKOMINFO",
                                    },
                                    {
                                        text: "Biro Pemberdayaan Aparatur Organisasi",
                                        to: "/biro/pao",
                                    },
                                    {
                                        text: "Kementerian Dalam Negeri",
                                        to: "/Kementerian/dagri",
                                    },
                                    {
                                        text: "Kementerian Luar Negeri",
                                        to: "/Kementerian/lugri",
                                    },
                                    {
                                        text: "Kementerian Pengembangan Sumber Daya Manusia",
                                        to: "/Kementerian/psdm",
                                    },
                                    {
                                        text: "Kementerian Pengarusutamaan Gender",
                                        to: "/Kementerian/gender",
                                    },
                                    {
                                        text: "Kementerian Sosial dan Lingkungan",
                                        to: "/Kementerian/sosling",
                                    },
                                    {
                                        text: "Kementerian Kajian dan Aksi Strategis",
                                        to: "/Kementerian/kastrat",
                                    },
                                    {
                                        text: "Kementerian Inovasi dan Karya",
                                        to: "/Kementerian/inoya",
                                    },
                                    {
                                        text: "Kementerian Ekonomi Kreatif",
                                        to: "/Kementerian/ekraf",
                                    },
                                    {
                                        text: "Kementerian Advokasi dan Kesejahteraan Mahasiswa",
                                        to: "/Kementerian/advokesma",
                                    },
                                    {
                                        text: "Kementerian Seni dan Olahraga",
                                        to: "/Kementerian/senora",
                                    },
                                ],
                            },
                        ]}
                    />
                    <NavLink to="/tentang" text="Tentang" />
                    <NavLink to="/mitra" text="Mitra" />
                    <NavLink to="/artikel" text="Artikel" />
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
                                        text: "Biro Kesekretariatan",
                                        to: "/biro/ADKES",
                                    },
                                    {
                                        text: "Biro Keuangan",
                                        to: "/biro/ADKEU",
                                    },
                                    {
                                        text: "Biro Pusat Komunikasi dan Informasi",
                                        to: "/biro/PUSKOMINFO",
                                    },
                                    {
                                        text: "Biro Pemberdayaan Aparatur Organisasi",
                                        to: "/biro/pao",
                                    },
                                    {
                                        text: "Kementerian Dalam Negeri",
                                        to: "/Kementerian/dagri",
                                    },
                                    {
                                        text: "Kementerian Luar Negeri",
                                        to: "/Kementerian/lugri",
                                    },
                                    {
                                        text: "Kementerian Pengembangan Sumber Daya Manusia",
                                        to: "/Kementerian/psdm",
                                    },
                                    {
                                        text: "Kementerian Pengarusutamaan Gender",
                                        to: "/Kementerian/gender",
                                    },
                                    {
                                        text: "Kementerian Sosial dan Lingkungan",
                                        to: "/Kementerian/sosling",
                                    },
                                    {
                                        text: "Kementerian Kajian dan Aksi Strategis",
                                        to: "/Kementerian/kastrat",
                                    },
                                    {
                                        text: "Kementerian Inovasi dan Karya",
                                        to: "/Kementerian/inoya",
                                    },
                                    {
                                        text: "Kementerian Ekonomi Kreatif",
                                        to: "/Kementerian/ekraf",
                                    },
                                    {
                                        text: "Kementerian Advokasi dan Kesejahteraan Mahasiswa",
                                        to: "/Kementerian/advokesma",
                                    },
                                    {
                                        text: "Kementerian Seni dan Olahraga",
                                        to: "/Kementerian/senora",
                                    },
                                ],
                            },
                        ]}
                    />
                    <NavLink to="/" text="Artikel" mobile />
                </ul>
            </div>
        </nav>
    );
};

const NavLink = ({ to, text, mobile }) => (
    <Link
        href={to}
        className={`relative group lg:hover:bg-inherit lg:hover:text-inherit  hover:bg-white w-full  hover:text-[#006181] duration-300 ease-in-out `}
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
        <div className=" group h-full flex items-center">
            <span className="cursor-pointer">{text}</span>
            <div className="absolute left-[20%] bottom-0 translate-y-full hidden group-hover:block bg-[#006181] text-base  mt-0">
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
                                        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-[#006181]">
                                            <ul className="py-2 h-52 overflow-auto">
                                                {item.items.map(
                                                    (subItem, subIndex) => (
                                                        <li
                                                            key={subIndex}
                                                            className="relative group/subsub px-4 py-2 w-72 hover:bg-[#007399]"
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
