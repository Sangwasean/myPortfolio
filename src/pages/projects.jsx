import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import project1 from "../../public/images/projects/instagram.png";
import project2 from "../../public/images/projects/pythongame.jpg";
import project3 from "../../public/images/projects/smoothies.png";
import project4 from "../../public/images/projects/weather-bot.png";
import project5 from "../../public/images/projects/pythonclock.png";
import project6 from "../../public/images/projects/ecommerce.png";
import ClientFeedback from "@/components/ClientFeedback";
import HireMe from "@/components/HireMe";

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative
     border border-solid border-dark bg-white shadow-2xl dark:bg-dark  dark:border-light
     flex-col lg:flex-row p-4 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl rounded-br-3xl  md:rounded-br-2xl"
    >
      <div
        className="absolute top-0 -z-10  bg-dark rounded-br-2xl dark:bg-light w-full -right-2 h-[102%] 
        rounded-[1.5rem] md:-right-3 md:w-[101%] md:h-[103%] md:rounded-[2.5rem]"
      />

      <FramerImage
        src={img}
        alt={title}
        className="w-full h-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        priority
        sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                33vw"
      />
      <div className="w-full lg:w-1/2 pl-0 pt-6 flex flex-col items-start justify-between lg:pl-6 ">
        <span className=" text-primary font-medium  dark:text-primaryDark text-md md:text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-left font-bold dark:text-light text-sm md:text-xl lg:text-2xl xl:text-3xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light text-sm md:text-lg">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="font-bold text-light bg-dark rounded-lg ml-4 p-2  dark:bg-light
             dark:text-black text-base px-4 md:px-6 md:text-lg"
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
      className="w-full flex flex-col items-start rounded-2xl justify-between
    border border-solid border-dark bg-white shadow-2xl relative dark:bg-dark dark:border-light
    p-4 md:p-6"
    >
      <div
        className="absolute top-0  -z-10 bg-dark rounded-br-2xl dark:bg-light
         -right-2 w-[101%] h-[102%] md:-right-3 md:w-[101%] md:h-[103%] rounded-[1.5rem] md:rounded-[2rem]"
      />
      <FramerImage
        src={img}
        alt={title}
        className="w-full h-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        priority
        sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                33vw"
      />
      <div className="w-full pl-0 pt-6 flex flex-col items-start justify-between lg:pl-6 ">
        <span className=" text-primary  font-medium dark:text-primaryDark text-base md:text-lg lg:text-xl">
          {type}
        </span>
        <Link
          href={link ?? ""}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-left font-bold dark:text-light text-sm md:text-xl lg:text-2xl xl:text-3xl">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-6 md:w-8">
            <GithubIcon />
          </Link>
          <Link
            href={link ?? ""}
            target="_blank"
            className="font-bold ml-5 underline text-base md:text-lg"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};
const Projects = () => {
  const feedbackList = [
    { text: "Great service! Highly recommend.", author: "Nzeyimana celestin" },
    { text: "Excellent team and communication.", author: "Nsabyimana Egide" },
    {
      text: "I highly recommend sean for his creativity and fast working",
      author: "Gabriel Baziramwabo",
    },
    {
      text: "Really appreciated working with sean",
      author: "Jean Damascene Habanabashaka",
    },
  ];
  return (
    <>
      <Head>
        <title>Sean | Projects page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-4 mt-2 flex flex-col items-center justify-center dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="Consistency is the key!"
            className="mb-8 md:mb-16 !text-5xl md:!text-7xl lg:!text-8xl "
          />
          <div className="grid grid-cols-12 gap-24 gap-x-0 md:gap-y-24 lg:gap-x-8 xl:gap-x-16  ">
            <div className="col-span-12">
              <FeaturedProject
                title="Instagram clone using Django"
                img={project1}
                summary="An instagram clone using python-django framework with full functionalities
                 like login signup follow like and comments"
                link="https://github.com/Sangwasean/django_instagram_clone"
                github="https://github.com/Sangwasean/django_instagram_clone"
                type="Featured project"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Project
                title="Python space shooting game"
                img={project2}
                summary="A python space shooting game which can be controlled using a joystick to move
                 to move the character and has a win and lose indicator."
                github="https://github.com/Sangwasean/Python-space-shooting-game"
                link="https://github.com/Sangwasean/Python-space-shooting-game"
                type="Featured project"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Project
                title="Slack python weather bot"
                img={project4}
                summary="A slack app that sends weather status to a workspace at a d=given time daily
                made using python,slack api and openweathermap"
                link="https://github.com/Sangwasean/slack-weather-bot"
                github="https://github.com/Sangwasean/slack-weather-bot"
                type="Featured project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Full authentication-authorization for a simple website"
                img={project3}
                summary="A simple smoothie website with full user authentication
                and authorization using express and jwt"
                link="https://github.com/Sangwasean/smoothies_authentication"
                github="https://github.com/Sangwasean/smoothies_authentication"
                type="Featured project"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Project
                title="Analog python clock"
                img={project5}
                summary="a Python gui clock that shows and converts to and from UTC"
                link="https://github.com/Sangwasean/Coursera-python-assignment-1"
                github="https://github.com/Sangwasean/Coursera-python-assignment-1"
                type="Featured project"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Project
                title="Ecommerce with django"
                img={project6}
                summary=""
                link="https://github.com/Sangwasean/django-Ecommerce"
                github="https://github.com/Sangwasean/django-Ecommerce"
                type="Featured project"
              />
            </div>
          </div>
          <ClientFeedback feedbackList={feedbackList} />
          <HireMe />
        </Layout>
      </main>
    </>
  );
};

export default Projects;
