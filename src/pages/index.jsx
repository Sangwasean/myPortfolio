import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { LinkArrow } from "@/components/icons";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/sean2.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>Sean&apos;s Portfolio</title>
        <meta name="description" content="sean's porfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TransitionEffect />
      <main className="flex relative items-center text-dark w-full min-h-screen dark:text-light ">
        <Layout className="pt-8 lg:pt-16">
          <div className="flex items-center justify-between w-full flex-col lg:flex-row ">
            <div
              className="col-span-3 w-[60%] sm:w-[40%] lg:mr-20 relative h-max rounded-2xl border-2 border-solid
             border-dark bg-light p-5 md:p-7 dark:bg-dark dark:border-light  bottom-4 "
            >
              <div className="absolute bottom-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <div className="rounded-[2rem] md:w-full">
                <Image
                  src={profilePic}
                  alt="Profile"
                  width={500}
                  height={500}
                  className=" flex w-full h-auto rounded-3xl "
                  priority
                  sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                50vw"
                />
              </div>
            </div>
            <div className=" p-8 lg:p-0 w-full flex flex-col items-center self-center lg:text-center">
              <AnimatedText
                text="Making dreams and wishes turn true with code"
                className="!text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl !text-2xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium ">
                As a skilled full-stack developer and trader, I am dedicated to turning
                ideas into innovative web apps and softwares.Explore my
                projects and inventions, showcasing my expertise in sofware engineering and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/sean's-resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5
                   px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid
                   border-transparent hover:border-dark dark:bg-light dark:text-dark
                   hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                  download={true}
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="/ContactPage"
                  target={"_blank"}
                  className="ml-4 font-medium capitalize text-dark underline text-lg dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <HireMe />
        </Layout>
        <div className=" absolute right-8 bottom-8 w-16 hidden sm:inline-block ">
          <Image src={lightBulb} alt="Bulbs" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
