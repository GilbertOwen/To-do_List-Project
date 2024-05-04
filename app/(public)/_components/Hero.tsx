"use client";
import gsap from "gsap";
import Link from "next/link";
import { useLayoutEffect } from "react";

export default function Hero() {
  useLayoutEffect(() => {
    // Background hero animation
    gsap.from(".background-hero", {
      scale: 0,
      ease: "bounce",
    });
    gsap.to(".background-hero", {
      scale: 1,
      duration: 0.5,
      ease: "bounce",
    });

    // greeting hero animation
    gsap.from(".greeting-hero", {
      scale: 0,
      ease: "bounce",
    });
    gsap.to(".greeting-hero", {
      scale: 1,
      delay: 1,
      duration: 0.8,
      ease: "bounce",
    });

    // quote hero animation
    gsap.from(".quote-hero", {
      scale: 0,
      autoAlpha: 0,
      ease: "bounce",
    });
    gsap.delayedCall(1.5, () => {
      gsap.to(".quote-hero", {
        scale: 1,
        autoAlpha: 1,
        duration: 0.5,
        ease: "bounce",
      });
    });

    // box 1 animation
    gsap.from("#box1-hero", {
      x: -1000,
      ease: "bounce",
    });
    gsap.to("#box1-hero", {
      delay: 2,
      duration: 0.4,
      x: 0,
      ease: "bounce",
    });
    gsap.from("#box2-hero", {
      y: -1000,
      ease: "bounce",
    });
    gsap.to("#box2-hero", {
      delay: 2.4,
      duration: 0.4,
      y: 0,
      ease: "bounce",
    });
    gsap.from("#box3-hero", {
      x: 1000,
      ease: "bounce",
    });
    gsap.to("#box3-hero", {
      delay: 2.8,
      duration: 0.4,
      x: 0,
      ease: "bounce",
    });
  }, []);
  return (
    <div className="scroll-smooth snap-always snap-center w-full flex flex-col md:justify-start justify-center pt-24 md:pt-36 pb-28 items-center h-screen lg:h-fit relative">
      <div className="background-hero bg-[#EADBC8] w-full absolute h-full top-0 z-[-10]"></div>
      <div className="flex flex-col overflow-hidden justify-center items-center w-[90%] lg:w-[82%] text-center">
        <h1 className="greeting-hero text-5xl ssm:text-6xl scale-0 hover:translate-y-[-5px] text-[#102C57] translate-y-0 sm:text-7xl md:text-8xl font-semibold mb-6 sm:mb-8 w-full transition-all">
          HALO!
        </h1>
        <h3 className="quote-hero text-xl xs:text-2xl scale-0 hover:translate-y-[-5px] translate-y-0 text-[#102C57] sm:text-3xl md:text-4xl xl:text-5xl font-medium italic mb-8 md:mb-12 lg:mb-14 xl:mb-16 w-full transition-all">
          In Hurry for Building Dicipline Character?
        </h3>
        <div className="grid grid-cols-3 w-fit mb-4 sm:gap-x-6 gap-x-4 md:gap-x-8 lg:gap-x-10 italic text-[#A5AFC0]">
          <div id="box1-hero" className="group ">
            <Link
              href={"/login"}
              className="group-hover:-rotate-[15deg] rounded-md font-medium flex flex-col origin-bottom-left w-[80px] h-[80px] xs:w-[120px] xs:h-[120px] ssm:w-[150px] ssm:h-[150px] group-hover:text-opacity-100 text-opacity-50 text-[#DAC0A3] sm:w-[170px] sm:h-[170px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] bg-[#FEFAF6] shadow-md border-none select-none justify-center items-center text-xl xs:text-3xl ssm:text-4xl md:text-5xl transition-all"
            >
              Try
            </Link>
          </div>
          <div id="box2-hero" className="group">
            <Link
              href={"/login"}
              className="group-hover:-translate-y-10 rounded-md font-medium flex flex-col origin-bottom-left w-[80px] h-[80px] xs:w-[120px] xs:h-[120px] ssm:w-[150px] ssm:h-[150px] group-hover:text-opacity-100 text-opacity-50 text-[#DAC0A3] sm:w-[170px] sm:h-[170px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] bg-[#FEFAF6] shadow-md border-none select-none justify-center items-center text-xl xs:text-3xl ssm:text-4xl md:text-5xl transition-all"
            >
              Our
            </Link>
          </div>
          <div id="box3-hero" className="group">
            <Link
              href={"/login"}
              className="group-hover:rotate-[15deg] rounded-md font-medium flex flex-col origin-bottom-right w-[80px] h-[80px] xs:w-[120px] xs:h-[120px] ssm:w-[150px] ssm:h-[150px] group-hover:text-opacity-100 text-opacity-50 text-[#DAC0A3] sm:w-[170px] sm:h-[170px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] bg-[#FEFAF6] shadow-md border-none select-none justify-center items-center text-xl xs:text-3xl ssm:text-4xl md:text-5xl transition-all"
            >
              App
            </Link>
          </div>
        </div>
        <p className="text-[12px] text-[#EADBC8] md:text-lg lg:text-xl opacity-90">
          Click to go to sign in page
        </p>
      </div>
    </div>
  );
}
