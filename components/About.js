"use client"
import React from "react"
import { HiArrowDown } from "react-icons/hi"
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"

const About = () => {

    return (
        <section id="about">
            <div className="flex flex-col text-center items-center justify-center px-5 my-20 py-16 gap-5 sm:py-32 md:py-48 ">
                <div className="max-w-[1240px] px-5 lg:px-0 mx-auto flex flex-col justify-center items-center h-full dark:text-gray-300">
                        <h1 className="text-center font-bold text-4xl">
                            About Me
                            <hr className="w-6 h-1 mx-auto my-4 bg-blue-900 border-0 rounded"></hr>
                        </h1>
                    <div className="flex flex-col justify-center items-center my-4 mt-20">
                        <div className="mb-20 lg:w-[50%] w-[80%] ">
                            <h1 className="text-left text-2xl font-bold mb-6 ">
                                Get to know me
                            </h1>
                            <p className=" text-justify">
                                Hello, I am Khoi. I am a web developer and currently a 3rd year software engineering student at Ho Chi Minh City University of Economics with a GPA of 3.0.
                            </p>
                            <br />
                            <p className=" text-justify">
                                I started learning how to code and web development in 2021. Over the years, I have developed useful skills and knowledge about web development in both the front end and back end.
                            </p>
                            <br />
                            <p className=" text-justify">
                                I am a hardworking, responsible, and competitive person. I look forward to meeting and working with all the amazing new people in the industry.
                            </p>
                            <br />
                        </div>

                    </div>


                    <div className="flex flex-col justify-center items-center  my-4 mt-20">
                        <div className="mb-20 lg:w-[50%] w-[80%] ">
                            <h1 className="text-left lg:text-center text-2xl font-bold mb-6">Education</h1>
                            <div className="relative w-full">
                                <div className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] sm:left-[20px] h-full bg-gray-300  origin-top"></div>
                                <ul className="w-full flex flex-col items-start justify-between ml-4 sm:ml-2">
                                    <li className=" first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-start ">
                                        <figure className="stroke-blue-400 absolute left-[2px] md:left-0 "><svg className="-rotate-90 md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px]" width="75" height="75" viewBox="0 0 100 100"><circle cx="75" cy="50" r="20" pathLength="1" className="stroke-blue-400  stroke-1 fill-none dark:stroke-light"></circle><circle cx="75" cy="50" r="20" pathLength="1" className="fill-light stroke-[5px] dark:fill-dark" strokeDashoffset="0px" strokeDasharray="1px 1px"></circle><circle cx="75" cy="50" r="10" pathLength="1" className="animate-pulse stroke-1 fill-blue-400 "></circle></svg></figure>
                                        <div className="text-left ml-5  ">
                                            <h3 className="capitalize font-bold text-2xl sm:text-xl dark:text-white">3rd year university student</h3>
                                            <span className="capitalize text-blue-400 font-medium dark:text-blue-400 sm:text-sm">2021 - Present  |  UEH University, HCM city</span>
                                            <p className="font-medium w-full md:text-sm text-justify">
                                                High scores in all programming and math subjects include data structure and algorithms, data science, web development, and software engineering.
                                            </p>
                                        </div>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className=" mb-20 lg:w-[50%] w-[80%]">
                            <h1 className="text-left lg:text-center text-2xl font-bold mb-6">Experience</h1>
                            <div className="relative w-full">
                                <div className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] sm:left-[20px] h-full bg-gray-300  origin-top"></div>
                                <ul className="w-full flex flex-col items-start justify-between ml-4 sm:ml-2">
                                    <li className=" first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-start ">
                                        <figure className="stroke-blue-400 absolute left-[2px] md:left-0 "><svg className="-rotate-90 md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px]" width="75" height="75" viewBox="0 0 100 100"><circle cx="75" cy="50" r="20" pathLength="1" className="stroke-blue-400  stroke-1 fill-none dark:stroke-light"></circle><circle cx="75" cy="50" r="20" pathLength="1" className="fill-light stroke-[5px] dark:fill-dark" strokeDashoffset="0px" strokeDasharray="1px 1px"></circle><circle cx="75" cy="50" r="10" pathLength="1" className="animate-pulse stroke-1 fill-blue-400 "></circle></svg></figure>
                                        <div className="text-left ml-5 md">
                                            <h3 className="capitalize font-bold text-2xl sm:text-xl dark:text-white">Looking for an internship</h3>
                                            <span className="capitalize text-blue-400 font-medium dark:text-blue-400 sm:text-sm">2023 - Present  |  HCM city</span>
                                            <p className="font-medium w-full md:text-sm text-justify">
                                                I&#39;m looking forward to working and enhancing my skills in a workplace environment to become a better developer.
                                            </p>
                                        </div>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center text-center justify-center ">
                <ScrollLink
                    to="skills"
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

export default About