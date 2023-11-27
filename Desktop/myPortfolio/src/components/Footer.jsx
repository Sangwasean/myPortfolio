import React from "react";
import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg
    dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()}&copy;All right reserved.</span>
        <div className="flex items-center">
          Build with <span className=" px-1 text-2xl dark:text-primaryDark">&hearts;</span>
          <span>Sean</span>
        </div>
        <Link href="/" target={"_blank"} className="underline">
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
