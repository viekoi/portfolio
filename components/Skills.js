"use client" // this is a client component
import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import MongoDB from '../public/assets/skills/Mongo.png'
import { HiArrowDown } from "react-icons/hi"
import { Link as ScrollLink } from "react-scroll"



const skills = [
    { skill: "HTML", imageUrl: Html },
    { skill: "CSS", imageUrl: Css },
    { skill: "JavaScript", imageUrl: Javascript },
    { skill: "React", imageUrl: ReactImg },
    { skill: "Next", imageUrl: NextJS },
    { skill: "Tailwind", imageUrl: Tailwind }, ,
    { skill: "GitHub", imageUrl: Github },
    { skill: "Firebase", imageUrl: Firebase },
    { skill: "MongoDB", imageUrl: MongoDB },
]



const Skills = () => {

    return (
        <section id='skills'>
            <div className='flex flex-col text-center items-center justify-center my-20 py-16 gap-5 sm:py-32 md:py-48  '>
                <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full dark:text-gray-300'>
                    <h1 className="text-center font-bold text-4xl">
                        What I Can Do
                        <hr className="w-6 h-1 mx-auto my-4 bg-blue-900 border-0 rounded"></hr>
                    </h1>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                        {skills.map((skill, index) => {
                            return (
                                <div key={index} className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-stone-600'>
                                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                        <div className='m-auto'>
                                            <Image src={skill.imageUrl} width={`64`} height={`64`} alt='/' />
                                        </div>
                                        <div className='flex flex-col items-center justify-center'>
                                            <h3>{skill.skill}</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center text-center justify-center ">
                <ScrollLink
                   to="projects"
                   spy={true}
                   smooth={true}
                   offset={-50}
                   duration={500}

                >
                    <HiArrowDown size={35} className="animate-bounce dark:text-gray-300" />
                </ScrollLink>
            </div>
        </section>
    );
};

export default Skills;