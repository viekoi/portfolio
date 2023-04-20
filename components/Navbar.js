"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaFacebook} from 'react-icons/fa';
// import { useRouter } from 'next/router';
// import NavLogo from '../public/assets/navLogo.png'



const mainNav = [
    {
      display: "Home",
      path: "/"
    },
    {
      display: "ABOUT",
      path: "/#about"
    },
    {
      display: "SKILLS",
      path: "/#skills"
    },{
        display: "PROJECTS",
        path: "/#projects"
      },
    
    // {
    //   display: "Về Chúng Tôi",
    //   path: "/aboutUs"
    // },
  
  ]

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 top-0'
          : 'fixed w-full h-20 z-[100] top-0'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
            <div className="container flex items-center space-x-2">
                <h2 className="text-xl font-bold">KHÔI NGUYỄN</h2>
            </div>
          
            {/* <Image
              src={NavLogo}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer'
            /> */}
          
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            {mainNav.map((nav,index)=>{
                return ( <li key={index} className='group ml-10 text-sm uppercase hover:border-b '>
                <Link className='group-hover:text-blue-400' href={`${nav.path}`}>{nav.display}</Link>
              </li>)
            })} 
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                KHÔI NGUYỄN
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
                {mainNav.map((nav,index)=>{
                    return(<Link href={`${nav.path}`}>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                        {nav.display}
                    </li>
                  </Link> )
                })}
            </ul>
            <div>
              <div className='flex items-center justify-start gap-[10px] my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.facebook.com/profile.php?id=100009650203975'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaFacebook />
                  </div>
                </a>
                <a
                  href='https://github.com/viekoi'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;