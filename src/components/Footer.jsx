import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { useState } from "react";
const Footer = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("https://seansangwa.vercel.app");
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium 
    dark:text-light dark:border-light text-xl lg:text-lg"
    >
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()}&copy;All right reserved.</span>
        <div className=" items-center hidden sm:flex">
          Built with{" "}
          <span className=" px-1 text-2xl dark:text-primaryDark">&hearts;</span>
          <span>by Sean</span>
        </div>
        <Link
          href="#"
          onClick={handleCopy}
          className="underline hidden sm:flex"
        >
          {copied ? "Link copied!" : "Share me"}
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
