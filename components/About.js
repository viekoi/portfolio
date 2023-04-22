"use client" 
import React from "react"
import { HiArrowDown } from "react-icons/hi"
import Link from "next/link"
import  {Link as ScrollLink}   from "react-scroll"

const About = () => {

    return (
        <section id="about">
            <div className="flex flex-col text-center items-center justify-center px-5 my-20 py-16 gap-5 sm:py-32 md:py-48 ">
                <div className="max-w-[1240px] px-5 lg:px-0 mx-auto flex flex-col justify-center h-full dark:text-gray-300">

                    <h1 className="text-center font-bold text-4xl">
                        About Me
                        <hr className="w-6 h-1 mx-auto my-4 bg-blue-900 border-0 rounded"></hr>
                    </h1>
                    <div className="my-4">
                        <h1 className="text-left text-2xl font-bold mb-6 ">
                            Get to know me
                        </h1>
                        <p className=" text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est facilis autem amet. Vel eos ullam porro quia quaerat beatae eius saepe optio iste nesciunt nostrum delectus quam, at totam corrupti?
                        </p>
                        <br />
                        <p className=" text-justify">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ex natus ab ipsa expedita ad qui reprehenderit vero fugiat! Quis officia quos recusandae consequuntur velit perspiciatis itaque neque vel porro!
                        </p>
                        <br />
                        <p className=" text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio ab repellendus animi delectus, neque magnam harum deleniti, aliquam eligendi consequuntur adipisci ipsa assumenda ipsum velit dolore sint voluptatem sapiente.
                        </p>
                        <br />
                        <p className=" text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad fuga repudiandae, ex doloribus soluta porro ipsum aperiam cumque? Eum incidunt quos repellat in perferendis optio nihil accusantium reprehenderit ullam?
                        </p>
                    </div>

                    <div className="grid grid-cols-2  my-4 mt-20">
                        <div className="col-span-3 md:col-span-1 mb-20">
                            <h1 className="text-left lg:text-center text-2xl font-bold mb-6">Education</h1>
                            <div className="relative w-full">
                                <div className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] sm:left-[20px] h-full bg-gray-300  origin-top"></div>
                                <ul className="w-full flex flex-col items-start justify-between ml-4 sm:ml-2">
                                    <li className=" first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-start ">
                                        <figure className="stroke-blue-400 absolute left-[2px] md:left-0 "><svg className="-rotate-90 md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px]" width="75" height="75" viewBox="0 0 100 100"><circle cx="75" cy="50" r="20" pathLength="1" className="stroke-blue-400  stroke-1 fill-none dark:stroke-light"></circle><circle cx="75" cy="50" r="20" pathLength="1" className="fill-light stroke-[5px] dark:fill-dark" strokeDashoffset="0px" strokeDasharray="1px 1px"></circle><circle cx="75" cy="50" r="10" pathLength="1" className="animate-pulse stroke-1 fill-blue-400 "></circle></svg></figure>
                                        <div className="text-left">
                                            <h3 className="capitalize font-bold text-2xl sm:text-xl dark:text-white">3rd year</h3>
                                            <span className="capitalize text-blue-400 font-medium dark:text-blue-400 sm:text-sm">2021 - Present  |  UEH University,HCM</span>
                                            <p className="font-medium w-full md:text-sm">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dolor deleniti vitae recusandae eligendi quibusdam, inventore tempore ipsa ut mollitia necessitatibus. Vitae nemo aspernatur sed assumenda aut adipisci cum quia?
                                            </p>
                                        </div>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-1 mb-20">
                            <h1 className="text-left lg:text-center text-2xl font-bold mb-6">Experience</h1>
                            <div className="relative w-full">
                                <div className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] sm:left-[20px] h-full bg-gray-300  origin-top"></div>
                                <ul className="w-full flex flex-col items-start justify-between ml-4 sm:ml-2">
                                    <li className=" first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-start ">
                                    <figure className="stroke-blue-400 absolute left-[2px] md:left-0 "><svg className="-rotate-90 md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px]" width="75" height="75" viewBox="0 0 100 100"><circle cx="75" cy="50" r="20" pathLength="1" className="stroke-blue-400  stroke-1 fill-none dark:stroke-light"></circle><circle cx="75" cy="50" r="20" pathLength="1" className="fill-light stroke-[5px] dark:fill-dark" strokeDashoffset="0px" strokeDasharray="1px 1px"></circle><circle cx="75" cy="50" r="10" pathLength="1" className="animate-pulse stroke-1 fill-blue-400 "></circle></svg></figure>
                                        <div className="text-left">
                                            <h3 className="capitalize font-bold text-2xl sm:text-xl dark:text-white">Looking for an internship</h3>
                                            <span className="capitalize text-blue-400 font-medium dark:text-blue-400 sm:text-sm">2023 - Present  |  HCM</span>
                                            <p className="font-medium w-full md:text-sm">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dolor deleniti vitae recusandae eligendi quibusdam, inventore tempore ipsa ut mollitia necessitatibus. Vitae nemo aspernatur sed assumenda aut adipisci cum quia?
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