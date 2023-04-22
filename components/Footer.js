import React from "react"
import Link from "next/link"
import {
    AiOutlineGithub,

    AiOutlineFacebook

} from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
            <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-500 border-0"></hr>
            <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
                <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
                    © 2023 Khôi Nguyễn<a href="/" className="hover:underline"></a>
                </div>
                <div className="flex flex-row items-center justify-center space-x-2 mb-1">
                    <Link href="https://twitter.com/viekoi" rel="noreferrer" target="_blank">
                        <AiOutlineGithub
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </Link>
                    <Link
                    href="https://www.facebook.com/profile.php?id=100009650203975"
                        
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiOutlineFacebook
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </Link>

                  
                </div>
            </div>
        </footer>
    )
}

export default Footer