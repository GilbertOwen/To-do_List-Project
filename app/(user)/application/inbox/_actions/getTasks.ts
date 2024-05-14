import { authOptions } from "@/lib/auth-option";
import prisma from "@/lib/db";
import type { Task } from "@prisma/client";
import { getServerSession } from "next-auth";

export default async function getTasks(sortBy: string) {
  try {
    let tasks: Task[] = [];
    const session:any = await getServerSession(authOptions)
    console.log(session)
    if (sortBy === "aToZ") {
      tasks = await prisma.task.findMany({where:{userId:session?.id}, orderBy: { title: "asc" } });
    } else if (sortBy === "nearest") {
      tasks = await prisma.task.findMany({where:{userId:session?.id}, orderBy: { deadline_at: "asc" } });
    } else if (sortBy === "highest") {
      tasks = await prisma.task.findMany({where:{userId:session?.id}, orderBy: { priority: "asc" } });
    } else if (sortBy === "lowest") {
      tasks = await prisma.task.findMany({where:{userId:session?.id}, orderBy: { priority: "desc" } });
    }

    return tasks;
  } catch (error) {
    throw error;
  }
}
