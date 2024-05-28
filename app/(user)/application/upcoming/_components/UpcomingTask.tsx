"use client";
import type { Task } from "@prisma/client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import UpcomingFilter from "./UpcomingFilter";
import Pagination from "./Pagination";

export default function UpcomingTask({
  inMonth,
  tasks,
  totalPages,
}: {
  inMonth: string;
  totalPages: number;
  tasks: Task[];
}) {
  const handlePriority = (priority: string) => {
    if (priority === "high") {
      return "text-red-400";
    } else if (priority === "medium") {
      return "text-yellow-400";
    } else if (priority === "low") {
      return "text-green-400";
    }
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
      <UpcomingFilter></UpcomingFilter>
      <Pagination totalPages={totalPages as number}></Pagination>
      <div
        className={`bg-gray-200 transition-all select-none h-[100%] w-[100%] gap-x-4 grid grid-cols-1 ${
          tasks.length != 0
            ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : ""
        } flex-nowrap gap-y-4 py-6 md:py-10 px-4`}
      >
        {tasks.length !== 0 ? (
          tasks.map((task, index) => (
            <Link
              key={index}
              className="flex flex-col hover:scale-105 transition-all cursor-grab bg-white border-gray-300 shadow-sm w-[full] h-fit border-2 overflow-hidden rounded-xl"
              href={"/application/task/" + task.id}
              >
              <span className={`font-semibold bg-green-400 w-fit h-fit px-6 ${task.isComplete ? 'flex' : 'hidden'} rounded-full flex-col justify-center text-white items-center text-center py-1.5 mx-auto my-2 text-sm`}>Completed</span>
              <Image
                sizes="100vw"
                width={0}
                height={0}
                className={`w-full block h-auto px-2 pb-2 rounded-[16px]  ${task.isComplete ? 'pt-0' : 'pt-2'}`}
                src={task.image || "/static-profile.jpg"}
                alt=""
              />
              <div className="p-2">
                <p className="font-semibold text-sm border-b-2 mb-2 border-black w-fit">
                  {`${
                    task.deadline_at.getDate() > 10
                      ? task.deadline_at.getDate()
                      : "0" + task.deadline_at.getDate()
                  }-0${
                    task.deadline_at.getMonth() + 1
                  }-${task.deadline_at.getFullYear()}`}
                </p>
                <h3
                  className={`${handlePriority(
                    task.priority
                  )} text-xl font-semibold mb-1`}
                >
                  {task.title}
                </h3>
                <h5 className="text-sm font-medium mb-4">
                  {task.description?.substring(0, 100)}
                </h5>
                <span className="text-sm">See more ~</span>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-xl font-medium grow flex justify-center items-center">
            No Task Available at this point
          </div>
        )}
      </div>
    </motion.div>
  );
}
