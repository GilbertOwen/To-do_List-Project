import { authOptions } from "@/lib/auth-option";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { AiOutlineConsoleSql } from "react-icons/ai";

export default async function getTotalTasks(
  sortBy: string = "nearest",
  inMonth: any = null
) {
  try {
    let tasks:any;
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
      tasks = await prisma.task.count({
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
      tasks = await prisma.task.count({
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
      tasks = await prisma.task.count({
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
      tasks = await prisma.task.count({
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
    return tasks;
  } catch (error) {
    throw error;
  }
}
