"use server";
import type { Task } from "@prisma/client";
import FormTaskModal from "./_components/FormTaskModal";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export default async function TaskModal({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
  const task = await prisma.task.findUnique({ where: { id: Number(id) } });
  if (!task) {
    redirect("/application/inbox?sort=nearest");
  }
  return (
    <>
      <FormTaskModal task={task as Task}></FormTaskModal>
    </>
  );
}
