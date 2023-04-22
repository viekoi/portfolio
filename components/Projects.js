"use client" 
import Image from 'next/image';
import Heicha from '../public/assets/projects/Heicha.png'
import Link from 'next/link';
import { Link as ScrollLink } from "react-scroll"
import { HiArrowDown } from "react-icons/hi"
import ProjectCard from './ProjectCard';



const projects = [
    { title: "Heicha trà tinh tế",description:"A ecommerce website using React Js", imageUrl:Heicha },

]



const Projects = () => {
    return (
        <section id='projects'>
            <div className=' flex flex-col text-center items-center justify-center my-20 py-16 px-5 gap-5 sm:py-32 md:py-48 '>
                <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full dark:text-gray-300'>
                    {/* <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Skills
                </p> */}
                    <h1 className="text-center font-bold text-4xl">
                        Projects That I Have Worked On
                        <hr className="w-6 h-1 mx-auto my-4 bg-blue-900 border-0 rounded"></hr>
                    </h1>
                    <div className='grid grid-cols-2  gap-4 '>
                        {projects.map((project,index)=>{
                            return(
                                // 
                                <ProjectCard key={index} {...project}></ProjectCard>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center text-center justify-center ">
                <ScrollLink
                    to=""
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                >
                    <HiArrowDown size={35} className="animate-bounce dark:text-gray-300" />
                </ScrollLink>
            </div>
        </section>
    );
};

export default Projects;