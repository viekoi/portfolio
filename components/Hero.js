"use client" // this is a client component
import React from "react"
import Image from "next/image"
import  {Link as ScrollLink}   from "react-scroll"
import Link from "next/link"

import { HiArrowDown } from "react-icons/hi"
import { FaGithub, FaFacebook} from 'react-icons/fa';

const Hero = () => {



  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center  my-20 py-16 gap-5 sm:py-32 md:py-48 md:flex-row md:text-left">
        <div className="flex items-center justify-end md:mt-2 md:w-1/2">
          <Image
            src="/assets/me.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 lg:px-0 px-5 md:w-3/5  ">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl  dark:text-gray-300 ">Hi, I&#39;m Khôi!</h1>
          <p className="text-lg mt-4 mb-6  md:text-2xl lg:w-[80%] md:w-full dark:text-gray-300">
            I&#39;m a{" "}
            <span className="font-semibold text-blue-600 ">
            third-year university student{" "}
            </span>
            based in Hồ Chí Minh city, Việt Nam. Looking forward to an internship.
          </p>
          {/* <Link href="/#projects"  className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"> Projects</Link> */}
          <div className='flex items-center md:justify-start gap-[10px] my-4 w-full justify-center '>
                <Link
                  href='https://www.facebook.com/profile.php?id=100009650203975'
                  target='_blank'
                  rel='noreferrer'
                  className=""
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-gray-300 dark:text-black '>
                    <FaFacebook />
                  </div>
                </Link>
                <Link
                  href='https://github.com/viekoi'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-gray-300 dark:text-black'>
                    <FaGithub />
                  </div>
                </Link>
              </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce dark:text-gray-300" />
        </ScrollLink>
      </div>
    </section>
  )
}

export default Hero