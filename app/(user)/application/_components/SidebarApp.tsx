"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { TiArrowSortedDown } from "react-icons/ti";
import type { User } from "@prisma/client";
import { FaCalendarAlt, FaPlus, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function SidebarApp({ user }: { user: User }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);
  const handleClickOutside = (e: MouseEvent) => {
    const sidebar: HTMLElement = document.getElementById(
      "sidebarApp"
    ) as HTMLElement;
    if (sidebar && !sidebar.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 0.4, 1],
        }}
        transition={{
          duration: 1,
          ease: "easeIn",
        }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 left-4 ${
          isOpen ? "hidden" : "flex"
        } shadow-[4px 4px 7px rgba(90, 90, 90, 0.25)] group hover:bg-[white] scale-100 hover:scale-95 hover:shadow-md  md:top-8 md:left-8 z-20 bg-[black] p-4 rounded-md cursor-pointer transition-all`}
      >
        {user.profilePicture?.length ? (
          <Image
            src={`/${user.profilePicture}`}
            width={25}
            height={25}
            className="w-[25px] h-[25px] object-cover rounded-full drop-shadow-[0_0px_10px_rgba(255,255,255,255.25)] shadow-white "
            alt={""}
          ></Image>
        ) : (
          <CgProfile size={30} color="white" />
        )}
      </motion.div>
      <ul
        className={`${
          isOpen
            ? "left-8  opacity-100 transition-all"
            : "left-[-200px] opacity-0 transition-all"
        }} rounded-[8px] flex flex-col w-fit pr-[48px] pl-6 pt-[24px] pb-[80px] fixed top-8 bg-black py-4 px-2 transition-all gap-y-[24px]`}
        id="sidebarApp"
      >
        <li className="flex flex-row items-center justify-between cursor-pointer group mb-[12px]">
          <div className="flex flex-row items-center gap-x-4 ">
          <Image
            src={`/${user.profilePicture}`}
            width={30}
            height={40}
            className="w-[30px] h-[30px] object-cover rounded-full"
            alt={""}
          ></Image>
          <span className="text-white font-semibold text-[20px] group-hover:opacity-80">
            {user.username}
          </span>
          </div>
          <TiArrowSortedDown
            className="group-hover:opacity-80"
            size={20}
            color="white"
          />
        </li>
        <Link className="flex flex-row items-center gap-x-6 cursor-pointer group" href={"/"}>
          <FaPlus size={28} color="white"/>

          <span className="text-white font-medium group-hover:opacity-80 text-[16px]">
            Task
          </span>
        </Link>
        <Link className="flex flex-row items-center gap-x-6 cursor-pointer group" href={""}>
          <IoMdHome size={28} color="white"/>

          <span className="text-white font-medium group-hover:opacity-80 text-[16px]">
            Home
          </span>
        </Link>
        <Link className="flex flex-row items-center gap-x-6 cursor-pointer group" href={""}>
          <FaSearch size={28} color="white"/>

          <span className="text-white font-medium group-hover:opacity-80 text-[16px]">
            Find Task
          </span>
        </Link>
        <Link className="flex flex-row items-center gap-x-6 cursor-pointer group" href={""}>
          <FaCalendarAlt size={28} color="white"/>

          <span className="text-white font-medium group-hover:opacity-80 text-[16px]">
            Upcoming
          </span>
        </Link>
        <li className="flex flex-row items-center gap-x-6 cursor-pointer group" onClick={()=> {signOut()}}>
          <FaSignOutAlt size={28} color="white"/>

          <span className="text-white font-medium group-hover:opacity-80 text-[16px]">
            Sign Out
          </span>
        </li>
      </ul>
    </>
  );
}
