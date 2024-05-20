import { authOptions } from "@/lib/auth-option";
import prisma from "@/lib/db";
import type { Task } from "@prisma/client";
import { getServerSession } from "next-auth";
const nowMonth = () => {
  const now = new Date();
  return "0" + (now.getMonth() + 1);
};

export default async function getTasks(
  sortBy: string = "nearest",
  inMonth: any = null,
  currentPage: number = 1
) {
  try {
    let tasks: Task[] = [];
    const session: any = await getServerSession(authOptions);
    let now: any;
    let end: any;
    if (inMonth === null) {
      now = new Date();
    } else if (inMonth !== null) {
      now = new Date(inMonth);
    }

    now.setDate(1); // Set hours, minutes, seconds, and milliseconds to 0
    end = new Date(now);
    end.setDate(26);

    if (sortBy === "aToZ") {
      tasks = await prisma.task.findMany({
        skip: currentPage * 4 - 4,
        take: 4,
        where: {
          userId: session?.id,
          deadline_at: {
            gte: now,
            lte: end,
          },
        },
        orderBy: { title: "asc" },
      });
    } else if (sortBy === "nearest") {
      tasks = await prisma.task.findMany({
        skip: currentPage * 4 - 4,
        take: 4,
        where: {
          userId: session?.id,
          deadline_at: {
            gte: now,
            lte: end,
          },
        },
        orderBy: { deadline_at: "asc" },
      });
    } else if (sortBy === "highest") {
      tasks = await prisma.task.findMany({
        skip: currentPage * 4 - 4,
        take: 4,
        where: {
          userId: session?.id,
          deadline_at: {
            gte: now,
            lte: end,
          },
        },
        orderBy: { priority: "asc" },
      });
    } else if (sortBy === "lowest") {
      tasks = await prisma.task.findMany({
        skip: currentPage * 4 - 4,
        take: 4,
        where: {
          userId: session?.id,
          deadline_at: {
            gte: now,
            lte: end,
          },
        },
        orderBy: { priority: "desc" },
      });
    }
    console.log(tasks);
    return tasks;
  } catch (error) {
    throw error;
  }
}
