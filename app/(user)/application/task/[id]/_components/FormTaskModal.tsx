"use client";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import updateTask from "../_actions/updateTask";
import { useRouter } from "next/navigation";
import { Task } from "@prisma/client";
import SubmitButton from "@/app/(user)/application/_components/subcomponents/(addTask)/SubmitButton";
import { motion } from "framer-motion";

export default function FormTaskModal({ task }: { task: Task }) {
  const router = useRouter();
  const [priority, setPriority] = useState<string>(task.priority);
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const handlePriority = (priority: string) => {
    if (priority === "high") {
      return "bg-red-400";
    } else if (priority === "medium") {
      return "bg-yellow-400";
    } else if (priority === "low") {
      return "bg-green-400";
    }
  };
  const handleBack = (e: any) => {
    const backdropTask: any = document.getElementById("backdrop-task-show");
    if (e.target.className === backdropTask.className) {
      router.back();
    } else {
      return;
    }
  };
  const taskForm = useRef<any>(null);
  const [state, formAction] = useFormState(updateTask, {
    status: "",
    message: "",
    errors: {},
  });
  const handleDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
  };
  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Successfully updated task data",
        variant: "default",
        description: state.message,
      });
      router.refresh();
      router.back();
    }
    if (state.status === "failed") {
      toast({
        title: "Error Fields",
        variant: "destructive",
        description: state.message,
      });
    }
  }, [state]);
  return (
    <div
      id="backdrop-task-show"
      className="flex flex-col items-center w-full justify-center top-0 left-0 right-0 bottom-0 fixed bg-[rgba(0,0,0,0.6)]"
      onClick={(e) => handleBack(e)}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        exit={{
          scale: 0,
          transition: {
            duration: 0.6,
            ease: "easeInOut",
          },
        }}
        className="flex flex-col w-[90%] md:w-[70%] lg:w-[50%] overflow-y-auto overflow-x-hidden p-4 rounded-md h-fit max-h-[80%] bg-white"
      >
        <form action={formAction} ref={taskForm}>
          <input type="hidden" name="id" defaultValue={task.id} />
          <h1 className="text-3xl font-semibold mb-4 text-left">Task</h1>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={task.title}
            onChange={() => setIsChanged(true)}
            placeholder="Add title of the task"
            className={`focus:outline-none ${
              isChanged ? "border-b-2 border-black" : ""
            } p-1 text-lg md:text-xl w-full placeholder:text-left ${
              state.errors.title ? "mb-0" : "mb-2"
            }`}
          />
          {state.errors?.title && (
            <p className="text-red-400 text-sm mb-2">{state.errors.title}</p>
          )}
          <textarea
            name="description"
            defaultValue={task.description as string}
            onChange={() => setIsChanged(true)}
            className={`w-full p-1 placeholder:text-left  ${
              isChanged ? "border-b-2 border-black" : ""
            }  focus:outline-none text-sm md:text-base h-fit mb-2`}
            placeholder="Put some detail on this task for futher usability"
          ></textarea>
          <div
            className={`grid grid-cols-2 md:grid-cols-3 w-full gap-x-2 ${
              state.errors.deadline_at ? "mb-0" : "mb-4"
            }`}
          >
            <input
              name="deadline_at"
              id="deadline_at"
              type="date"
              defaultValue={`${task.deadline_at.getFullYear()}-0${
                task.deadline_at.getMonth() + 1
              }-${
                task.deadline_at.getDate() > 10
                  ? task.deadline_at.getDate()
                  : "0" + task.deadline_at.getDate()
              }`}
              min={`${handleDate().toString()}`}
              onChange={(e) => {
                setIsChanged(true);
                console.log(e.target.value);
              }}
              className="border-2 p-1 rounded-md uppercase font-semibold cursor-pointer"
            />
            <div className="flex flex-row w-full gap-x-2 border-2 p-1 rounded-md items-center overflow-hidden">
              <span
                className={`${handlePriority(priority)} w-[20px] h-[80%]`}
              ></span>
              <select
                onChange={(e) => {
                  setPriority(e.target.value);
                  setIsChanged(true);
                }}
                name="priority"
                className=" cursor-pointer w-full font-semibold focus:outline-none h-full inline-block"
                id="priority"
                defaultValue={priority}
              >
                <option value="low" className="text-green-400  p-1">
                  Low
                </option>
                <option value="medium" className="text-yellow-400 p-1">
                  Medium
                </option>
                <option value="high" className="text-red-400 p-1">
                  High
                </option>
              </select>
            </div>
          </div>
          {state.errors?.deadline_at && (
            <p className="text-red-400 block text-sm mb-4">
              {state.errors.deadline_at}
            </p>
          )}
          {isChanged && (
            <div
              className="flex flex-row items-center w-full gap-x-2"
              id="actions"
            >
              <button
                onClick={() => router.back()}
                className="font-semibold hover:bg-black hover:text-white transition-all shadow-sm border-2 px-4 rounded-lg py-1"
              >
                Cancel
              </button>
              <SubmitButton className="font-semibold w-fit bg-black text-white shadow-sm px-4 rounded-lg py-1 hover:text-[rgba(255,255,255,0.7)] transition-all"></SubmitButton>
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
}
