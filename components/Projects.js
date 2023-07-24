"use client" 
import Heicha from '../public/assets/projects/Heicha.png'
import MusicShare from '../public/assets/projects/MusicShare.png'
import HeichaAdmin from '../public/assets/projects/Heicha-admin.png'
import ProjectCard from './ProjectCard';



const projects = [
    { title: "Heicha admin page",description:"A admin website for creating products, setting sell listing for Heicha store page", imageUrl:HeichaAdmin,pageUrl:`https://heicha-admin-demo.vercel.app/`,codeUrl:`https://github.com/viekoi/heicha-admin-demo`,tags:[`React`,'NextJs','Personal']},
    { title: "Mushic Share",description:"A music sharing app for everyone to share their favorite songs", imageUrl:MusicShare,pageUrl:`https://music-share-nu.vercel.app/`,codeUrl:`https://github.com/viekoi/MusicShare`,tags:[`React`,'NextJs','Personal']},
    { title: "Heicha trà tinh tế",description:"A ecommerce website using React Js desinged for my friend coffee shop", imageUrl:Heicha,pageUrl:`https://heicha-97b11.web.app/`,codeUrl:`https://github.com/viekoi/tratinhte`,tags:['React',"Personal"]},

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
                    <div className='grid grid-cols-2  gap-10 '>
                        {projects.map((project,index)=>{
                            return(
                                // 
                                <ProjectCard key={index} {...project}></ProjectCard>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;