"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function UpcomingFilter() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const setSort = (sortBy: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sortBy);
    replace(`${pathname}?${params.toString()}`);
  };
  const currentMonth = String(searchParams.get("inMonth")) || '';
  const monthByName = (numMonth: number) => {
    switch (numMonth) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December"; // Corrected from "Desember"
      default:
        return "Invalid month"; // Added default case to handle invalid month numbers
    }
  };
  const [monthFilter, setMonthFilter] = useState<any>(getMonth('name' ,currentMonth));
  function setMonth(monthBy: string | null = null) {
    const params = new URLSearchParams(searchParams);
    let date: Date;
    if (monthBy !== null) {
      date = new Date(monthBy);
    } else {
      date = new Date();
    }
    params.set(
      "inMonth",
      `${String(date.getFullYear())}-${"0" + String(date.getMonth() + 1)}`
    );
    const inWhatMonth = date.getMonth() + 1;
    replace(`${pathname}?${params.toString()}`);
    setMonthFilter(monthByName(inWhatMonth));
  }
  function getMonth(getBy: string = "date", currMonth: string = "") {
    let date:Date;
    if (currMonth === "") {
      date = new Date();
    } else {
      date = new Date(currMonth);
    }
    const inWhatMonth = date.getMonth() + 1;
    if (getBy == "name") {
      return monthByName(inWhatMonth);
    } else if (getBy == "date") {
      return `${String(date.getFullYear())}-${
        "0" + String(date.getMonth() + 1)
      }`;
    }
  }

  return (
    <div className="h-[20%] w-full bg-white flex flex-col justify-end py-2">
      <h1 className="capitalize text-2xl sm:text-3xl md:text-4xl self-center mb-8 pt-2 font-semibold">
        Task of {monthFilter}
      </h1>
      <div className="flex flex-row justify-between px-4">
        <select
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
        </select>
        <input
          type="month"
          className="text-sm sm:text-base border-2 p-1 cursor-pointer rounded-md transition-all"
          min={getMonth()}
          defaultValue={getMonth('date',currentMonth)}
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
