import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import logo from "../../public/logo.png";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const [toggleDropdown, setToggleDropdown] = useState(false);
  const [shadow, setShadow] = useState(false);
  const router = useRouter();
  const NavLinks = [
    { path: "/", name: "Home" },
    { path: "/blog", name: "Blog" },
    { path: "/category", name: "Category" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact Us" },
  ];

  useEffect(() => {
    // when it will scrolldown greater than 90 it will have navbar will change it style
    const handleShadow = () => {
      if (window.scrollY >= 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const closeDropdown = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <nav
      className={`
        ${
          shadow
            ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-white overflow-hidden text-black"
            : "fixed w-full h-20 z-[100] border-b-2 border-slate-100 text-white "
        }
      `}
    >
      <div
        className={` ${
          open ? "bg-white fixed w-full" : ""
        } lg:justify-between justify-around px-0 lg:px-10 items-center lg:flex h-20`}
      >
        <div className="flex items-center justify-between py-2">
          <div className="">
            <Link href="/">
              <Image
                src={logo}
                className="cursor-pointer hover:scale-105 transition duration-300"
                alt="Logo"
                width={150}
                height={50}
              />
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <div className="pl-5">
              <button
                className={` text-black p-2 rounded-md outline-none focus:border-gray-400 focus:border`}
                onClick={() => setOpen(!open)}
              >
                {open === true ? (
                  <AiOutlineClose size={35} />
                ) : (
                  <AiOutlineMenu size={35} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div
            className={`flex-1 lg:justify-self-center pb-2 lg:mt-4 lg:block lg:pb-0 lg:mt-0 ${
              open ? "flex " : "hidden"
            }`}
          >
            <ul
              className={` ${
                open ? "bg-white text-black w-full px-2 pb-5" : ""
              } bg-white lg:bg-transparent items-center font-bold paragraph-fonts justify-center space-y-8 lg:flex lg:flex-row flex-col lg:space-x-6 lg:space-y-0`}
            >
              {NavLinks.map((link) => (
                <li
                  key={link.name}
                  className={` md:my-0 my-7 hover:underline cursor-pointer hover:text-[#c74c4a] ${
                    router.pathname === link.path
                      ? "text-[#c74c4a] text-xl md:text-2xl underline"
                      : "text-lg md:text-xl"
                  } `}
                >
                  <Link href={link.path}>
                    <p onClick={closeDropdown}>{link.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
