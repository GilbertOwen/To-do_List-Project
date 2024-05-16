import { authOptions } from "@/lib/auth-option";
import prisma from "@/lib/db";
import type { Task } from "@prisma/client";
import { getServerSession } from "next-auth";

export default async function getTasks(sortBy: string = "nearest") {
  try {
    let tasks: Task[] = [];
    const session: any = await getServerSession(authOptions);
    const startOfToday = () => {
      const now = new Date();
      now.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0
      return now;
    };
    if (sortBy === "aToZ") {
      tasks = await prisma.task.findMany({
        where: {
          userId: session?.id,
          deadline_at: {
            gte: startOfToday(),
          },
        },
        orderBy: { title: "asc" },
      });
    } else if (sortBy === "nearest") {
      tasks = await prisma.task.findMany({
        where: {
          userId: session?.id,
          deadline_at: {
            gte: startOfToday(),
          },
        },
        orderBy: { deadline_at: "asc" },
      });
    } else if (sortBy === "highest") {
      tasks = await prisma.task.findMany({
        where: {
          userId: session?.id,
          deadline_at: {
            gte: startOfToday(),
          },
        },
        orderBy: { priority: "asc" },
      });
    } else if (sortBy === "lowest") {
      tasks = await prisma.task.findMany({
        where: {
          userId: session?.id,
          deadline_at: {
            gte: startOfToday(),
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
