"use client";
import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function InboxFilter() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const setSort = (sortBy: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sortBy);
    replace(`${pathname}?${params.toString()}`)
    console.log(searchParams);
  };
  return (
    <div className="pt-4 px-4 flex flex-col items-start">
      <motion.select
      initial={{ 
        opacity:0,
        x:-50
       }}
       animate={{ 
        opacity:1,
        x:0
        }}
        transition={{ 
          duration:0.6,
          ease:'easeInOut'
         }}
        name=""
        id=""
        onChange={(e) => setSort(e.target.value)}
        className="text-sm sm:text-base border-2 rounded-md p-1 cursor-pointer"
        defaultValue={"nearest"}
      >
        <option value="no" disabled>
          Sort by
        </option>
        <option value="aToZ" className="border-0 outline-none p-1">
          a-z
        </option>
        <option value="nearest" className="border-0 outline-none p-1">
          Nearest
        </option>
        <option value="highest" className="border-0 outline-none p-1">
          Highest Priority
        </option>
        <option value="lowest" className="border-0 outline-none p-1">
          Lowest Priority
        </option>
      </motion.select>
    </div>
  );
}
