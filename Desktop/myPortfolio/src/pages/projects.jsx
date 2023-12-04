import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import project1 from "../../public/images/projects/instagram.png";
import project2 from "../../public/images/projects/pythongame.jpg";
import project3 from "../../public/images/projects/smoothies.png";
import project4 from "../../public/images/projects/cool-login-signup.png";
import project5 from "../../public/images/projects/agency-website-cover-image.jpg";
import project6 from "../../public/images/projects/devdreaming.jpg";

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center rounded-3xl justify-between relative
     border border-solid border-dark bg-white shadow-2xl p-12 rounded-br-2xl dark:bg-dark  dark:border-light "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
      rounded-[2.5rem] bg-dark rounded-br-2xl dark:bg-light"/>
      <Link
        href="https://github.com/Sangwasean/django_instagram_clone.git"
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                33vw"/>
      </Link>
      <div className="w-1/2  flex flex-col items-start justify-between pl-6 ">
        <span className=" text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
        <Link
          href="https://github.com/Sangwasean/django_instagram_clone.git"
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-left text-4xl font-bold dark:text-light">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href="https://github.com/Sangwasean/django_instagram_clone.git" target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href="https://github.com/Sangwasean/django_instagram_clone.git"
            target="_blank"
            className="font-bold text-light bg-dark
           rounded-lg ml-4 p-2 px-6 text-lg dark:bg-light dark:text-black"
          >
            Visit project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center rounded-2xl justify-between
    border border-solid border-dark bg-white shadow-2xl p-6 relative dark:bg-dark dark:border-light"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
      rounded-[2rem] bg-dark rounded-br-2xl dark:bg-light"/>
      <Link
        href="https://github.com/Sangwasean/Python-space-shooting-game.git"
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                33vw"/>
      </Link>
      <div className="w-full  flex flex-col items-start justify-between mt-4 ">
        <span className=" text-primary text-xl font-medium dark:text-primaryDark">{type}</span>
        <Link
          href="https://github.com/Sangwasean/Python-space-shooting-game.git"
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center">
          <Link href="/" target="_blank" className="w-12">
            <GithubIcon />
          </Link>
          <Link
            href="https://github.com/Sangwasean/Python-space-shooting-game.git"
            target="_blank"
            className="font-bold
           text-lg ml-5 underline"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};
const Projects = () => {
  return (
    <>
      <Head>
        <title>Sean | Projects page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Consistency is the key!"
            className="mb-10"
          />
          <div className="grid grid-cols-12 gap-24 ">
            <div className="col-span-12">
              <FeaturedProject
                title="Instagram clone using Django"
                img={project1}
                summary="An instagram clone using python-django framework with full functionalities
                 like login signup follow like and comments"
                link="https://github.com/Sangwasean/cool-login-signup-page.git"
                github=""
                type="Featured project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Python space shooting game"
                img={project2}
                summary="A python space shooting game which can be controlled using a joystick to move
                 to move the character and has a win and lose indicator."
                github="https://github.com/Sangwasean/Python-space-shooting-game.git"
                type="Featured project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Cool login-signup page"
                img={project4}
                summary="A cool login/signup page using html and css"
                link="/"
                github="/"
                type="Featured project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Full authentication-authorization for a simple website"
                img={project3}
                summary="A simple smoothie website with full user authentication
                and authorization using express and jwt"
                link="/"
                github="/"
                type="Featured project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project5}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="/"
                type="Featured project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project6}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="/"
                type="Featured project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
