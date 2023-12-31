import React from "react";
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
const Navbar = () => {
  const [mode,setMode]=useThemeSwitcher();
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between 
    dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-8" />
        <CustomLink href="/about" title="About" className="xr-8" />
        <CustomLink href="/projects" title="Projects" className="mx-8" />
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
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
