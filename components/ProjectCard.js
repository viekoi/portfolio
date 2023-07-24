import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Tag, findTagByValue} from "./Tag";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  pageUrl,
  codeUrl,
  tags,
}) => {
  return (
    <div className="relative md:col-span-1  col-span-2 flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl  border  border-solid   border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark">
      <div className="absolute  top-[0px] -right-[11px] -z-10 h-[102%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light "></div>
      <div className="w-full">
        <div className=" overflow-hidden rounded-lg relative h-[35vh] w-full">
          <Image
            src={imageUrl}
            alt="Image"
            fill
            className="object-contain scale-[105%] hover:scale-[110%] ease-in duration-100 "
          ></Image>
        </div>
        <div className="mt-4 flex w-full flex-col items-start justify-between">
          <span className=" text-xl font-medium text-blue-600 dark:text-primaryDark lg:text-lg md:text-base">
            {description}
          </span>
          <h4 className=" my-2 w-full text-left text-2xl font-bold ">
            {title}
          </h4>
          <div className=" flex items-center gap-1">
            {tags.map((tag) => {
              const entry = findTagByValue(tag);
              return (
                <Tag label={entry.label}  color={entry.color} />
              );
            })}
          </div>
          <div className="flex w-full justify-between items-center">
            <Link
              target="_blank"
              href={pageUrl}
              rel="noreferrer"
              className="rounded text-lg font-medium underline md:text-base "
            >
              visit
            </Link>
            <Link href={codeUrl} target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white dark:text-dark ">
                <FaGithub />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
