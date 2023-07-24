"use client" // this is a client component
import Image from 'next/image';
import React,{useEffect,useRef} from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Ts from '../public/assets/skills/TypeScript.png'
import NextJS from '../public/assets/skills/nextjs.png'
import MongoDB from '../public/assets/skills/mongo.png'
import Prisma from '../public/assets/skills/Prisma.png'
import { HiArrowDown } from "react-icons/hi"
import { Link as ScrollLink } from "react-scroll"
import {motion,useInView,useAnimation} from'framer-motion'



const skills = [
    { skill: "HTML", imageUrl: Html },
    { skill: "CSS", imageUrl: Css },
    { skill: "JavaScript", imageUrl: Javascript },
    { skill: "TypeScript", imageUrl: Ts },
    { skill: "React", imageUrl: ReactImg },
    { skill: "Next", imageUrl: NextJS },
    { skill: "Tailwind", imageUrl: Tailwind }, ,
    { skill: "GitHub", imageUrl: Github },
    { skill: "MongoDB", imageUrl: MongoDB },
    { skill: "Prisma", imageUrl: Prisma },

]



const Skills = () => {

    const skillsRef = useRef(null)
    const isInView = useInView(skillsRef,{once:false})
    const animationControls = useAnimation()

    useEffect(() => {
        if(isInView){
       
        animationControls.start('end')
        }
        return()=>{
        animationControls.set('start')
        }
      
       
      }, [isInView])


    return (
        <section id='skills'>
            <div className=' overflow-hidden flex flex-col text-center items-center justify-center my-20 py-16 gap-5 sm:py-32 md:py-48 px-5'>
                <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full dark:text-gray-300'>
                    <h1 className="text-center font-bold text-4xl">
                        What I Can Do
                        <hr className="w-6 h-1 mx-auto my-4 bg-blue-900 border-0 rounded"></hr>
                    </h1>
                    <div className='grid grid-cols-2 md:grid-cols-4 sm:gap-8 gap-4' ref={skillsRef}>
                        {skills.map((skill, index) => {
                            return (
                                <motion.div
                                key={index}
                                variants={{
                                    start:{opacity:0,y:75},
                                    end:{opacity:1,y:0}
                                  }}
                                  initial='start'
                                  animate={animationControls}
                                  transition={{duration:0.1,delay:0.5 + index*0.1}}
                                >
                                    <div  className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:bg-[#333]'>
                                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                            <div className='m-auto'>
                                                <Image src={skill.imageUrl} width={64} height={64} alt='skill' />
                                            </div>
                                            <div className='flex flex-col items-center justify-center'>
                                                <h3 className='text-[12px] leading-[14px] md:text-base'>{skill.skill}</h3>
                                            </div>
                                        </div>
                                    </div>

                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center text-center justify-center cursor-pointer ">
                <ScrollLink
                   to="projects"
                   spy={true}
                   smooth={true}
                   offset={-50}
                   duration={300}

                >
                    <HiArrowDown size={35} className="animate-bounce dark:text-gray-300" />
                </ScrollLink>
            </div>
        </section>
    );
};

export default Skills;