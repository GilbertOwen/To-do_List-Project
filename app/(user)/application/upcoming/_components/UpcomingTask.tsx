"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function UpcomingTask() {
  const [monthFilter, setMonthFilter] = useState<string>("january");
  const getNowMonth = () => {
    const date = new Date();
    console.log(`${String(date.getMonth() + 1)}-${String(date.getFullYear())}`);
    return `${String(date.getFullYear())}-${"0" + String(date.getMonth() + 1)}`;
  };
  return (
    <motion.div
      initial={{
        x: 600,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        delay: 0.6,
        ease: "easeInOut",
      }}
      className="w-full flex flex-col overflow-hidden"
    >
      <div className="h-[20%] w-full bg-white flex flex-col justify-end py-2 border-b-2">
        <h1 className="capitalize text-2xl sm:text-3xl md:text-4xl self-center mb-8 pt-2 font-semibold">
          Task of {monthFilter}
        </h1>
        <div className="flex flex-row justify-between px-4">
          <select name="" id="" className="text-sm sm:text-base border-2 p-1" defaultValue={"no"}>
            <option value="no" disabled>
              Sort by
            </option>
          </select>
          <input type="month" className="text-sm sm:text-base border-2 p-1 transition-all" min={getNowMonth()} />
        </div>
      </div>
      <div className="bg-gray-200 select-none h-[100%] w-[100%] gap-x-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-nowrap gap-y-4 md:gap-y-12 py-6 md:py-10 px-8">
        <div className="flex flex-col hover:scale-105 transition-all cursor-grab bg-white border-gray-300 shadow-sm w-[full] h-fit border-2 overflow-hidden rounded-xl">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="w-full block h-auto p-2 rounded-[16px]"
            src="/static-profile.jpg"
            alt=""
          />
          <div className="p-2">
            <p className="font-semibold text-sm mb-2">26-09-2006</p>
            <h3 className="text-red-500 text-xl font-semibold mb-1">Doing my dishes</h3>
            <h5 className="text-sm font-medium mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
              voluptatum.
            </h5>
            <span className="text-sm">See more ~</span>
          </div>
        </div>
        <div className="flex flex-col hover:scale-105 transition-all cursor-grab bg-white border-gray-300 shadow-sm w-[full] h-fit border-2 overflow-hidden rounded-xl">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="w-full block h-auto p-2 rounded-[16px]"
            src="/static-profile.jpg"
            alt=""
          />
          <div className="p-2">
            <p className="font-semibold text-sm mb-2">26-09-2006</p>
            <h3 className="text-red-500 text-xl font-semibold mb-1">Doing my dishes</h3>
            <h5 className="text-sm font-medium mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
              voluptatum.
            </h5>
            <span className="text-sm">See more ~</span>
          </div>
        </div>
        <div className="flex flex-col hover:scale-105 transition-all cursor-grab bg-white border-gray-300 shadow-sm w-[full] h-fit border-2 overflow-hidden rounded-xl">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="w-full block h-auto p-2 rounded-[16px]"
            src="/static-profile.jpg"
            alt=""
          />
          <div className="p-2">
            <p className="font-semibold text-sm mb-2">26-09-2006</p>
            <h3 className="text-green-500 text-xl font-semibold mb-1">Doing my dishes</h3>
            <h5 className="text-sm font-medium mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
              voluptatum.
            </h5>
            <span className="text-sm">See more ~</span>
          </div>
        </div>
        <div className="flex flex-col hover:scale-105 transition-all cursor-grab bg-white border-gray-300 shadow-sm w-[full] h-fit border-2 overflow-hidden rounded-xl">
          <Image
            sizes="100vw"
            width={0}
            height={0}
            className="w-full block h-auto p-2 rounded-[16px]"
            src="/static-profile.jpg"
            alt=""
          />
          <div className="p-2">
            <p className="font-semibold text-sm mb-2">26-09-2006</p>
            <h3 className="text-red-500 text-xl font-semibold mb-1">Doing my dishes</h3>
            <h5 className="text-sm font-medium mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
              voluptatum.
            </h5>
            <span className="text-sm">See more ~</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
