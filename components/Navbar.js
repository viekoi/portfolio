"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useTheme } from "next-themes";

const mainNav = [
  {
    display: "HOME",
    path: "home",
  },
  {
    display: "ABOUT",
    path: "about",
  },
  {
    display: "SKILLS",
    path: "skills",
  },
  {
    display: "PROJECTS",
    path: "projects",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState("#1f2937");
  const { setTheme } = useTheme();

  const stopPropagationHandler = (e) => {
    e.stopPropagation();
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? " bg-[#ecf0f3] fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 top-0 dark:bg-stone-900 dark:border-b dark:border-stone-600"
          : "bg-[#ecf0f3] fixed w-full h-20 z-[100] top-0 dark:bg-stone-900 dark:border-b dark:border-stone-600"
      }
    >
      <div className="flex justify-between items-center max-w-[1240px] h-full px-5  mx-auto">
        <Link href="/">
          <div className="container flex items-center ">
            <h2 className="text-xl font-bold dark:text-gray-300">
              KHÔI NGUYỄN
            </h2>
          </div>

          {/* <Image
              src={NavLogo}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer'
            /> */}
        </Link>
        <div className="flex items-center">
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            {mainNav.map((nav, index) => {
              return (
                <li key={index} className="group ml-10 text-sm uppercase ">
                  <ScrollLink
                    to={nav.path}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={300}
                    className="group-hover:text-blue-400 dark:text-gray-300"
                    href={`${nav.path}`}
                  >
                    {nav.display}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
          <div className="ml-5">
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl dark:hidden"
            >
              <RiSunLine size={15} color="white" />
            </button>
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl  hidden dark:block"
            >
              <RiMoonFill size={15} color="black" />
            </button>
          </div>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} className="ml-5 dark:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
        onClick={handleNav}
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"
          }
          onClick={stopPropagationHandler}
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">KHÔI NGUYỄN</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {mainNav.map((nav, index) => {
                return (
                  <ScrollLink
                    key={index}
                    to={nav.path}
                    smooth={true}
                    offset={-50}
                    duration={300}
                  >
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      {nav.display}
                    </li>
                  </ScrollLink>
                );
              })}
            </ul>
            <div>
              <div className="flex items-center justify-start gap-[10px] my-4 w-full sm:w-[80%]">
                <Link
                  href="https://www.facebook.com/profile.php?id=100009650203975"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaFacebook />
                  </div>
                </Link>
                <Link
                  href="https://github.com/viekoi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
