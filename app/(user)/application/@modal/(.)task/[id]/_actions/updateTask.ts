"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";
const startOfToday = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0
  return now;
};

const taskSchema = z
  .object({
    title: z.string().min(4, "Write at least 4 characters up"),
    description: z.string().nullable(),
    priority: z.enum(["low", "medium", "high"]),
    deadline_at: z
      .date()
      .min(startOfToday(), { message: "Please input date ahead from now " }),
  })
  .required();

export default async function updateTask(prevState: any, data: FormData) {
  try {
    const task: any = {
      title: data.get("title") as string,
      description: data.get("description") as string,
      priority: data.get("priority") as string,
      deadline_at: new Date(data.get("deadline_at") as string),
    };
    taskSchema.parse(task);

    await prisma.task.update({
      where: { id: Number(data.get("id")) },
      data: task,
    });

    revalidatePath("/application");
    revalidatePath("/application/inbox");
    revalidatePath("/application/dashboard");
    revalidatePath("/application/upcoming");

    return {
      status: "success",
      message: "Task updated successfully",
      errors: {},
    };
  } catch (error: any) {
    console.log(error);
    const errors: any = {};
    if (error != "email") {
      error?.errors?.map((err: any) => {
        errors[err.path[0]] = err.message;
      });
    } else {
      errors.email = "Email has already been registered";
    }
    return {
      status: "failed",
      message: "Can't process the task because of invalid fields",
      errors: errors,
    };
  }
}
