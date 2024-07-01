"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { TiArrowSortedDown } from "react-icons/ti";
import {
  FaCalendarAlt,
  FaInbox,
  FaPlus,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import Link from "next/link";
import { signOut } from "next-auth/react";
import AddTaskModal from "./subcomponents/(addTask)/AddTaskModal";

export default function SidebarApp({ user }: { user: any }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);
  const handleClickOutside = (e: MouseEvent) => {
    const content: HTMLElement = document.getElementById(
      "sidebarApp"
    ) as HTMLElement;
    if (content && !content.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };
  const handleAddTaskModal = (e: any) => {
    const backdrop = document.getElementById("backdrop");
    if (e.target.className === backdrop?.className) {
      setOpenAddModal(false);
    }
  };
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [openDropdownProfile, setOpenDropdownProfile] =
    useState<boolean>(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 0.6,
          scale: [1, 0.4, 1],
        }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        whileHover={{
          opacity: 1,
          transition: {
            duration: 0.2,
            ease: "easeInOut",
          },
        }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 right-4 ${
          isOpen ? "hidden" : "flex"
        } shadow-[4px_4px_7px_rgba(90, 90, 90, 0.25)] group scale-100 hover:scale-95 hover:shadow-md lg:right-8 z-[100] bg-[black] p-2 rounded-md cursor-pointer transition-all`}
      >
        {user.profilePicture && !imageError ? (
          <Image
            src={`/${user.profilePicture}`}
            width={25}
            height={25}
            className="w-[25px] h-[25px] object-cover rounded-full drop-shadow-[0_0px_10px_rgba(255,255,255,255.25)] shadow-white"
            alt="Profile Picture"
            onError={handleImageError}
          />
        ) : (
          <CgProfile size={30} color="white" />
        )}
      </motion.div>
      <ul
        className={`${
          isOpen
            ? "left-8  opacity-100 transition-all"
            : "left-[-100%] opacity-0 transition-all"
        }} rounded-[8px] flex flex-col w-fit z-[100] pr-[24px] pl-6 pt-[24px] pb-[24px] fixed top-8 bg-black py-4 px-2 transition-all gap-y-[16px]`}
        id="sidebarApp"
      >
        <li
          className={`flex flex-row items-center group bg-black rounded-md hover:bg-white p-2 justify-between cursor-pointer select-none group ${
            openDropdownProfile ? "mb-[0px]" : "mb-[12px]"
          }`}
          onClick={() => setOpenDropdownProfile(!openDropdownProfile)}
        >
          <div className="flex flex-row items-center gap-x-6 mr-4">
            {user.profilePicture && !imageError ? (
              <Image
                src={`/${user.profilePicture}`}
                width={25}
                height={25}
                className="w-[25px] h-[25px] object-cover rounded-full drop-shadow-[0_0px_10px_rgba(255,255,255,255.25)] shadow-white"
                alt="Profile Picture"
                onError={handleImageError}
              />
            ) : (
              <CgProfile
                size={30}
                className="group-hover:text-black text-white transition-all"
              />
            )}
            <span className="text-white font-semibold text-[20px] group-hover:text-black transition-all">
              {user.username.substring(0,6)}{user.username.length == 6 ? '' : '...'}
            </span>
          </div>
          {openDropdownProfile ? (
            <TiArrowSortedDown
              className=" group-hover:text-black text-white transition-all"
              size={20}
            />
          ) : (
            <TiArrowSortedDown
              className=" group-hover:text-black text-white rotate-[90deg] transition-all"
              size={20}
            />
          )}
        </li>
        <li
          className={`${
            openDropdownProfile ? "flex" : "hidden invisible"
          } w-full overflow-hidden`}
        >
          <Link
            href={"/application/profile"}
            className={`${
              openDropdownProfile ? "flex" : "hidden invisible"
            } ml-14 p-2 hover:bg-white bg-black w-full text-white font-semibold rounded-md hover:text-black transition-all text-[16px]`}
          >
            Profile
          </Link>
        </li>
        <li
          className="flex p-2 hover:bg-white rounded-md flex-row items-center gap-x-6 cursor-pointer group transition-all"
          onClick={() => {
            setIsOpen(false);
            setOpenAddModal(true);
          }}
        >
          <FaPlus
            size={28}
            className="group-hover:text-black text-white transition-all"
          />

          <span className="text-white font-semibold group-hover:text-black transition-all text-[16px]">
            Task
          </span>
        </li>
        <Link
          className="flex p-2 hover:bg-white rounded-md flex-row items-center gap-x-6 cursor-pointer group transition-all"
          onClick={() => setIsOpen(false)}
          href={"/application/dashboard"}
        >
          <IoMdHome
            size={28}
            className="group-hover:text-black text-white transition-all"
          />

          <span className="text-white font-semibold group-hover:text-black transition-all text-[16px]">
            Home
          </span>
        </Link>
        <Link
          className="flex p-2 hover:bg-white rounded-md flex-row items-center gap-x-6 cursor-pointer group transition-all"
          onClick={() => setIsOpen(false)}
          href={"/application/inbox"}
        >
          <FaInbox
            size={28}
            className="group-hover:text-black text-white transition-all"
          />

          <span className="text-white font-semibold group-hover:text-black transition-all text-[16px]">
            Inbox
          </span>
        </Link>
        <Link
          className="flex p-2 hover:bg-white rounded-md flex-row items-center gap-x-6 cursor-pointer group transition-all"
          onClick={() => setIsOpen(false)}
          href={""}
        >
          <FaSearch
            size={28}
            className="group-hover:text-black text-white transition-all"
          />

          <span className="text-white font-semibold group-hover:text-black transition-all text-[16px]">
            Find Task
          </span>
        </Link>
        <Link
          className="flex p-2 hover:bg-white rounded-md flex-row items-center gap-x-6 cursor-pointer group transition-all"
          onClick={() => setIsOpen(false)}
          href={"/application/upcoming"}
        >
          <FaCalendarAlt
            size={28}
            className="group-hover:text-black text-white transition-all"
          />

          <span className="text-white font-semibold group-hover:text-black transition-all text-[16px]">
            Upcoming
          </span>
        </Link>
        <li
          className="flex p-2 hover:bg-white rounded-md flex-row items-center gap-x-6 cursor-pointer group transition-all"
          onClick={() => {
            signOut();
            setIsOpen(false);
          }}
        >
          <FaSignOutAlt
            size={28}
            className="group-hover:text-black text-white transition-all"
          />

          <span className="text-white font-semibold group-hover:text-black transition-all text-[16px]">
            Sign Out
          </span>
        </li>
      </ul>
      {openAddModal && (
        <AddTaskModal
          clickEvent={handleAddTaskModal}
          cancelEvent={() => setOpenAddModal(false)}
        />
      )}
    </>
  );
}
