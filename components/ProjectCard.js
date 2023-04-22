import Image from 'next/image';
import Link from 'next/link';
import { FaGithub} from 'react-icons/fa';


const ProjectCard = ({ title, description, imageUrl }) => {
    return (
        <div className="relative md:col-span-1  col-span-2 flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl  border  border-solid   border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark">
            <div className="absolute  top-0 -right-[12px] -z-10 h-[102%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light "></div>
            <div className="">
                <div className=" overflow-hidden rounded-lg ">
                <Image src={imageUrl} alt='' className='object-contain scale-[105%] hover:scale-[110%] ease-in duration-100 '></Image>
                </div>
                <div className="mt-4 flex w-full flex-col items-start justify-between">
                    <span className=' text-xl font-medium text-blue-600 dark:text-primaryDark lg:text-lg md:text-base'>{description}</span>
                    <h4 className=' my-2 w-full text-left text-2xl font-bold '>{title}</h4>
                    <div className="flex w-full justify-between items-center">
                    <Link target='_blank' href={`https://heicha-97b11.web.app/`} rel='noreferrer' className='rounded text-lg font-medium underline md:text-base '>visit</Link>
                    <Link href={`https://github.com/viekoi/tratinhte`} target='_blank' rel='noreferrer'><div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
