"use client";
import { motion } from "framer-motion";
import SubmitButton from "./SubmitButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import registerUser from "../_actions/register-user";
import { useFormState } from "react-dom";
import { useToast } from "@/components/ui/use-toast";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function RegisterForm() {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const { toast } = useToast();
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [state, formAction] = useFormState(registerUser, {
    status: "",
    message: "",
    errors: {},
  });

  const handleRedirectLogin = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("registered", "true");
    replace(`${pathname.toString()}?${params.toString()}`);
  };
  const registerForm: any = useRef(null);

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Successfully registered",
        variant: "success",
        description: state.message,
      });
      registerForm.current.reset();
      handleRedirectLogin()
    }
    if (state.status === "error") {
      console.log(state.message);
      toast({
        title: "Error Fields",
        variant: "destructive",
        description: state.message,
      });
    }
  }, [state]);
  return (
    <>
      <motion.form
        ref={registerForm}
        initial={{
          opacity: 0,
          x: -50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        exit={{
          x: -50,
          opacity: 0,
        }}
        action={formAction}
        className="flex flex-col gap-y-4"
      >
        <h1 className="text-center text-3xl font-semibold mb-4 border-b-4 border-[#DAC0A3] text-[#DAC0A3]">
          REGISTER
        </h1>
        <div className="flex flex-col items-start w-full gap-y-1">
          <label
            htmlFor="username"
            className="text-lg pl-1 font-semibold select-none text-[#DAC0A3] drop-shadow-sm"
          >
            Username :
          </label>
          <input
            type="text"
            className={
              "w-full py-1 px-2 bg-[#FEFAF6] focus:outline-none placeholder:text-[#EADBC8] text-[#DAC0A3] rounded-md drop-shadow-md"
            }
            placeholder="Gilbert Owen"
            name="username"
            id="username"
          />
          {state.errors?.username && (
            <p className="text-red-400 text-sm">{state.errors.username}</p>
          )}
        </div>
        <div className="flex flex-col items-start w-full gap-y-1">
          <label
            htmlFor="email"
            className="text-lg pl-1 font-semibold select-none text-[#DAC0A3] drop-shadow-sm"
          >
            Email :
          </label>
          <input
            name="email"
            placeholder="GilbertOwen@gmail.com"
            type="email"
            className={
              "w-full py-1 px-2 bg-[#FEFAF6] focus:outline-none placeholder:text-[#EADBC8] text-[#DAC0A3] rounded-md drop-shadow-md"
            }
            id="email"
          />
          {state.errors?.email && (
            <p className="text-red-400 text-sm">{state.errors.email}</p>
          )}
        </div>
        <div className="flex flex-col items-start w-full gap-y-1 relative">
          <label
            htmlFor="password"
            className="text-lg pl-1 select-none text-[#DAC0A3] font-semibold drop-shadow-sm"
          >
            Password :
          </label>
          <div className="w-full relative">
            {!isHidden && (
              <FaEye
                className="absolute bottom-2 right-3 z-40 cursor-pointer"
                size={20}
                color="#DAC0A3"
                onClick={() => setIsHidden(true)}
              />
            )}{" "}
            {isHidden && (
              <FaEyeSlash
                className="absolute bottom-2 right-3 z-40 cursor-pointer"
                size={20}
                color="#DAC0A3"
                onClick={() => setIsHidden(false)}
              />
            )}
            <input
              placeholder="Type your password"
              name="password"
              type={isHidden ? "password" : "text "}
              className={
                "w-full py-1 px-2 bg-[#FEFAF6] focus:outline-none placeholder:select-none placeholder:text-[#EADBC8] text-[#DAC0A3] rounded-md drop-shadow-md"
              }
              id="password"
            />
          </div>
          {state.errors?.password && (
            <p className="text-red-400 text-sm">{state.errors.password}</p>
          )}
        </div>
        <SubmitButton />
      </motion.form>
    </>
  );
}
