import Link from "next/link";

export default function Hero() {
  return (
    <div className="scroll-smooth snap-always snap-center w-full flex flex-col md:justify-start justify-center md:pt-24 lg:pt-32 md:pb-28 items-center h-screen md:h-fit relative overflow-hidden">
      <div className="bg-[#EADBC8] w-full absolute h-full top-0 z-[-10]"></div>
      <div className="flex flex-col justify-center items-center w-[90%] lg:w-[82%] text-center">
        <h1 className="text-5xl ssm:text-6xl hover:translate-y-[-5px] text-[#102C57] sm:text-7xl md:text-8xl font-semibold mb-6 sm:mb-8 w-full transition-all">
          HALO!
        </h1>
        <h3 className="text-xl xs:text-2xl hover:translate-y-[-5px] text-[#102C57] sm:text-3xl md:text-4xl xl:text-5xl font-medium italic mb-8 md:mb-12 lg:mb-14 xl:mb-16 w-full transition-all">
          In Hurry for Building Dicipline Character?
        </h3>
        <div className="grid grid-cols-3 w-fit mb-4 sm:gap-x-6 gap-x-4 md:gap-x-8 lg:gap-x-10 italic text-[#A5AFC0]">
          <div className="group">
            <Link
              href={"/login"}
              className="group-hover:-rotate-[15deg] rounded-md font-medium flex flex-col origin-bottom-left w-[80px] h-[80px] xs:w-[120px] xs:h-[120px] ssm:w-[150px] ssm:h-[150px] group-hover:text-opacity-100 text-opacity-50 text-[#DAC0A3] sm:w-[170px] sm:h-[170px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] bg-[#FEFAF6] shadow-md border-none select-none justify-center items-center text-xl xs:text-3xl ssm:text-4xl md:text-5xl transition-all"
            >
              Try
            </Link>
          </div>
          <div className="group">
            <Link
              href={"/login"}
              className="group-hover:-translate-y-10 rounded-md font-medium flex flex-col origin-bottom-left w-[80px] h-[80px] xs:w-[120px] xs:h-[120px] ssm:w-[150px] ssm:h-[150px] group-hover:text-opacity-100 text-opacity-50 text-[#DAC0A3] sm:w-[170px] sm:h-[170px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] bg-[#FEFAF6] shadow-md border-none select-none justify-center items-center text-xl xs:text-3xl ssm:text-4xl md:text-5xl transition-all"
            >
              Our
            </Link>
          </div>
          <div className="group">
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
