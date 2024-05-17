"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Upbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className=" fixed top-0 w-full z-[20]">
      <div
        className={`text-black w-full bg-white rounded-b-xl border-black border-b-2 overflow-hidden shadow-sm p-4 ${
          isOpen ? "pb-6" : "pb-4"
        } transition-all`}
      >
        <h1 className="text-4xl font-semibold text-center mb-4">Dashboard</h1>
        <div
          className={`${
            isOpen
              ? "opacity-100 flex transition-all"
              : "opacity-0 hidden transition-all"
          } flex-col`}
        >
          <h2 className="text-2xl mb-2 text-center">This Dashboard section will include</h2>
          <div className="grid grid-cols-2 gap-y-4 w-[90%] mx-auto gap-x-4">
            <div className="flex flex-col items-end px-4 border-r-2">
              <h3 className="text-xl font-semibold">Completion Analysis</h3>
              <p className=" md:w-[60%] lg:w-[50%] text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cupiditate nihil similique pariatur, eligendi
                voluptatum provident expedita. Officiis, modi minima.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold">Mostly Time needed</h3>
              <p className=" md:w-[60%] lg:w-[50%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cupiditate nihil similique pariatur, eligendi
                voluptatum provident expedita. Officiis, modi minima.
              </p>
            </div>
            <div className="flex flex-col items-end px-4 border-r-2">
              <h3 className="text-xl font-semibold">Completion Analysis</h3>
              <p className=" md:w-[60%] lg:w-[50%] text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cupiditate nihil similique pariatur, eligendi
                voluptatum provident expedita. Officiis, modi minima.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold">Mostly Time needed</h3>
              <p className=" md:w-[60%] lg:w-[50%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cupiditate nihil similique pariatur, eligendi
                voluptatum provident expedita. Officiis, modi minima.
              </p>
            </div>
            <div className="flex flex-col items-end px-4 border-r-2">
              <h3 className="text-xl font-semibold">Completion Analysis</h3>
              <p className=" md:w-[60%] lg:w-[50%] text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cupiditate nihil similique pariatur, eligendi
                voluptatum provident expedita. Officiis, modi minima.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-semibold">Mostly Time needed</h3>
              <p className=" md:w-[60%] lg:w-[50%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt cupiditate nihil similique pariatur, eligendi
                voluptatum provident expedita. Officiis, modi minima.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="px-4 rounded-b-xl mx-auto bg-black w-fit cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <IoIosArrowDown size={20} color="#ffffff" />
      </div>
    </div>
  );
}
