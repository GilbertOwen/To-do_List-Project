"use client";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import addTask from "./_actions/addTask";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import SubmitButton from "./SubmitButton";

export default function AddTaskModal({
  clickEvent,
  cancelEvent,
}: {
  clickEvent: any;
  cancelEvent: any;
}) {
  const [state, formAction] = useFormState(addTask, {
    status: "",
    message: "",
    errors: {},
  });
  const [priority, setPriority] = useState<string>("low");
  const taskForm = useRef<any>(null)
  const router = useRouter()
  const { data: session }: any = useSession();
  const handlePriority = (priority: string) => {
    if (priority === "high") {
      return "bg-red-400";
    } else if (priority === "medium") {
      return "bg-yellow-400";
    } else if (priority === "low") {
      return "bg-green-400";
    }
  };
  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Successfully registered",
        variant: "success",
        description: state.message,
      });
      taskForm.current.reset();
      router.refresh()
      cancelEvent()
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
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
      onClick={clickEvent}
      className="fixed flex flex-col justify-center items-center top-0 left-0 bottom-0 right-0 z-[90] bg-[rgba(0,0,0,0.4)]"
      id="backdrop"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 0.4, 1],
          transition: {
            delay: 0.5,
            duration: 0.6,
            ease: "easeIn",
          },
        }}
        id="addModal"
        className="bg-[white] lg:w-[50%] md:w-[60%] w-[90%] rounded-lg mx-auto sm:w-[70%] p-4"
      >
        <form action={formAction} ref={taskForm}>
          <input type="hidden" name="userId" value={session?.id} />
          <h1 className="text-3xl font-semibold mb-4 text-left">Task</h1>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Add title of the task"
            className={`focus:outline-none border-b-2 border-black p-1 text-lg md:text-xl w-full placeholder:text-left ${
              state.errors.title ? "mb-0" : "mb-2"
            }`}
          />
          {state.errors?.title && (
            <p className="text-red-400 text-sm mb-2">{state.errors.title}</p>
          )}
          <textarea
            name="description"
            className="w-full border-b-2 p-1 placeholder:text-left border-black focus:outline-none text-sm md:text-base h-fit mb-2"
            id="description"
            placeholder="Put some detail on this task for futher usability"
          ></textarea>
          <div className={`grid grid-cols-2 md:grid-cols-3 w-full gap-x-2 ${state.errors.title ? 'mb-0' : 'mb-4'}`}>
            <input
              name="deadline_at"
              id="deadline_at"
              type="date"
              className="border-2 p-1 rounded-md uppercase font-semibold cursor-pointer"
            />
            <div className="flex flex-row w-full gap-x-2 border-2 p-1 rounded-md items-center overflow-hidden">
              <span
                className={`${handlePriority(priority)} w-[20px] h-[80%]`}
              ></span>
              <select
                onChange={(e) => {
                  setPriority(e.target.value);
                }}
                name="priority"
                className=" cursor-pointer w-full font-semibold focus:outline-none h-full inline-block"
                id="priority"
                defaultValue={"low"}
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
          <div
            className="flex flex-row items-center w-full gap-x-2"
            id="actions"
          >
            <button
              onClick={cancelEvent}
              className="font-semibold hover:bg-black hover:text-white transition-all shadow-sm border-2 px-4 rounded-lg py-1"
            >
              Cancel
            </button>
            <SubmitButton className="font-semibold w-fit bg-black text-white shadow-sm px-4 rounded-lg py-1 hover:text-[rgba(255,255,255,0.7)] transition-all"></SubmitButton>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
