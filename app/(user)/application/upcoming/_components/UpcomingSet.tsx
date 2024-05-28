"use client";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import { MdCloseFullscreen, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function UpcomingSet() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Fragment>
      <motion.div
        initial={{
          x: -600,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        className={`justify-center ${
          isOpen ? "w-[100%] sm:w-[50%] md:w-[40%] lg:w-[30%] transition-all sm:pr-6 md:pr-8" : "w-[0px] lg:w-[2%] lg:pr-8 transition-all"
        } items-center sm:items-end font-semibold fixed lg:relative z-[50] bg-white top-0 bottom-0 flex flex-col overflow-hidden border-r-2`}
      >
        <h1
          className={`${isOpen ? "flex" : "hidden"} text-4xl xl:text-5xl mb-4`}
        >
          Upcoming
        </h1>
        <p
          className={`${
            isOpen ? "flex" : "hidden"
          } text-base xl:text-lg text-center sm:text-right sm:pl-[32px] xl:pl-[64px] mb-4`}
        >
          See what you've been scheduled before and customize it
        </p>
        <div className="flex flex-col mb-4">
          <div className="flex flex-row items-center justify-end gap-x-4">
            <span>High Priority</span>
            <span className="w-[20px] h-[10px] bg-red-400"></span>
          </div>
          <div className="flex flex-row items-center justify-end gap-x-4">
            <span>Medium Priority</span>
            <span className="w-[20px] h-[10px] bg-yellow-400"></span>
          </div>
          <div className="flex flex-row items-center justify-end gap-x-4">
            <span>Low Priority</span>
            <span className="w-[20px] h-[10px] bg-green-400"></span>
          </div>
        </div>
        <MdCloseFullscreen
          size={30}
          className={`${
            !isOpen ? "lg:hidden" : "lg:flex"
          } absolute top-4 right-4 cursor-pointer`}
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <MdOutlineKeyboardArrowRight
          size={30}
          className={`${
            isOpen ? "hidden" : "flex"
          } absolute top-[50%] right-0 cursor-pointer`}
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </motion.div>
      <MdCloseFullscreen
        size={30}
        className={`${
          isOpen ? "hidden" : "flex"
        } lg:hidden fixed z-[50] top-4 left-4 cursor-pointer`}
        onClick={() => {
          setIsOpen(true);
        }}
        color="black"
      />
    </Fragment>
  );
}
