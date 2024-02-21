import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import  {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  UpworkIcon,
  Instagram,
  SunIcon,
  MoonIcon,
} from "./icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
const CustomLink = ({ title, href, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={` h-[2px] dark:bg-light  inline-block bg-dark absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      }`}
      
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ title, href, className = "",toggle }) => {
  const router = useRouter();
  const handleClick=()=>{
    toggle();
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span
        className={` h-[2px] dark:bg-dark  inline-block bg-light absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      }`}
      
      >
        &nbsp;
      </span>
    </button>
  );
};
const Navbar = () => {
  const [mode,setMode]=useThemeSwitcher();
  const [isOpen,setIsOpen]=useState(false);
  const handleClick=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <header className="w-full px-16 md:px-32 py-8 font-medium flex items-center justify-between 
    dark:text-light relative">
      <button className="flex-col justify-center items-center lg:hidden"onClick={handleClick}>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ?'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ?'-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
      <div className="w-full  justify-between items-center hidden lg:flex">
      <nav>
        <CustomLink href="/" title="Home" className="mr-8" />
        <CustomLink href="/about" title="About" className="xr-8" />
        <CustomLink href="/projects" title="Projects" className="mx-8" />
        <CustomLink href="/ContactPage" title="Contact" className="mx-2" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="https://twitter.com/HirwaSean63133" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3">
          <TwitterIcon />
        </motion.a>
        <motion.a href="https://github.com/Sangwasean" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3">
          <GithubIcon />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/sangwa-hirwa-936b97261/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3">
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://www.upwork.com/freelancers/~01a43c484a7323b4d3" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w- mx-3">
          <UpworkIcon />
        </motion.a>
        <motion.a href="https://www.instagram.com/_night.wing__/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 ml-3">
          <Instagram />
        </motion.a>

        <button
         onClick={()=> setMode(mode == "light" ? "dark" : "light")}
         className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light"?"bg-dark text-light" : "bg-light text-dark"}`}
        >
        {
          mode === "dark" ?
          <SunIcon className={"fill-black"}/>
          : <MoonIcon className={"fill-black"}/>
        }
        </button>
      </nav>
      </div>

        {
          isOpen ?

          <motion.div 
          initial={{scale:0,opacity:0,x:"-50%",y:"-50%"}}
          animate={{scale:1,opacity:1}}
          className="min-w-[70vw] justify-between flex flex-col items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 backdrop-blur-md rounded-lg py-32">
      <nav className="flex items-center flex-col justify-center">
        <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
        <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
        <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
      </nav>

      <nav className="flex items-center justify-center flex-wrap mt-2">
        <motion.a href="https://twitter.com/HirwaSean63133" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3">
          <TwitterIcon />
        </motion.a>
        <motion.a href="https://github.com/Sangwasean" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3 bg-light dark:bg-dark rounded-full">
          <GithubIcon />
        </motion.a>
        <motion.a href="/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3">
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://www.upwork.com/freelancers/~01a43c484a7323b4d3" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w- mx-3">
          <UpworkIcon />
        </motion.a>
        <motion.a href="https://www.instagram.com/_night.wing__/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 ml-3">
          <Instagram />
        </motion.a>

        <button
         onClick={()=> setMode(mode == "light" ? "dark" : "light")}
         className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light"?"bg-dark text-light" : "bg-light text-dark"}`}
        >
        {
          mode === "dark" ?
          <SunIcon className={"fill-black"}/>
          : <MoonIcon className={"fill-black"}/>
        }
        </button>
      </nav>
      </motion.div>
          : null
        }
      
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
