import prisma from "@/lib/db";
import type { Task } from "@prisma/client";

export default async function getTasks(sortBy: string) {
  try {
    let tasks: Task[] = [];
    if (sortBy === "aToZ") {
      tasks = await prisma.task.findMany({ orderBy: { title: "asc" } });
    } else if (sortBy === "nearest") {
      tasks = await prisma.task.findMany({ orderBy: { deadline_at: "asc" } });
    } else if (sortBy === "highest") {
      tasks = await prisma.task.findMany({ orderBy: { priority: "asc" } });
    } else if (sortBy === "lowest") {
      tasks = await prisma.task.findMany({ orderBy: { priority: "desc" } });
    }

    return tasks;
  } catch (error) {
    throw error;
  }
}
