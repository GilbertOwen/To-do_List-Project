"use server";
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
      .min(startOfToday(), { message: "Please input date based on today or further day" }),
  })
  .required();

export default async function addTask(prevState: any, e: FormData) {
  try {
    const task: any = {
      title: e.get("title") as string,
      description: e.get("description") as string,
      priority: e.get("priority") as string,
      deadline_at: new Date(e.get("deadline_at") as string),
      userId: Number(e.get("userId")),
    };
    taskSchema.parse(task);
    console.log(task)

    // await prisma.task.create({
    //   data: task,
    // });

    revalidatePath('/application')
    revalidatePath('/application/inbox')
    revalidatePath('/application/dashboard')
    revalidatePath('/application/upcoming')

    return {
      status: "success",
      message: "Successfully added task",
      errors: {},
    };
  } catch (error: any) {
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
