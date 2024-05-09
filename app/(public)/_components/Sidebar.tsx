"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);
  const handleClickOutside = (e: MouseEvent) => {
    const sidebar: HTMLElement = document.getElementById(
      "sidebar"
    ) as HTMLElement;
    if (sidebar && !sidebar.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };
  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 0.4, 1],
        }}
        transition={{
          duration: 1,
          delay: 2.3,
          ease: "easeIn",
        }}
        whileHover={{
          scale: 1.05,
          transition: {
            duration: 0.15,
            ease: "easeInOut",
          },
        }}
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 md:top-8 md:left-8 z-20 bg-[#DAC0A3] p-1 rounded-sm cursor-pointer"
      >
        <IoMdMenu size={40} className="text-[#EADBC8]" />
      </motion.div>

      <nav
        id="sidebar"
        className={`bg-[#DAC0A3] flex flex-col p-2 z-30 top-20 md:top-24 fixed rounded-sm shadow-md ${
          isOpen ? "left-4  md:left-8 opacity-1" : "left-[-200px] opacity-0"
        } duration-500 ease-in-out`}
      >
        <Link
          href={"/auth-to-do"}
          className="text-xl font-semibold text-[#EADBC8] bg-[#DAC0A3] hover:text-[#102C57] hover:bg-[#EADBC8] duration-200 ease-in-out w-full h-full px-4 py-1"
        >
          Application
        </Link>
        <Link
          href={"/"}
          className="text-xl font-semibold text-[#EADBC8] bg-[#DAC0A3] hover:text-[#102C57] hover:bg-[#EADBC8] duration-200 ease-in-out w-full h-full px-4 py-1"
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className="text-xl font-semibold text-[#EADBC8] bg-[#DAC0A3] hover:text-[#102C57] hover:bg-[#EADBC8] duration-200 ease-in-out w-full h-full px-4 py-1"
        >
          About
        </Link>
      </nav>
    </Fragment>
  );
}
