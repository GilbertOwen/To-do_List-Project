"use client";
import { useEffect, useState } from "react";
import LoginForm from "./_components/LoginForm";
import RegisterForm from "./_components/RegisterForm";
import { Toaster } from "@/components/ui/toaster";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

export default function AuthToDo({
  searchParams,
}: {
  searchParams?: { registered?: boolean };
}) {
    const { replace } = useRouter();
  const pathname = usePathname()
  const [formType, setFormType] = useState<string>("login");
  const handleMovement = () => {
    setFormType('login');
    const params = new URLSearchParams(searchParams as any)
    params.delete('registered', 'true')
    replace(`${pathname}?${params}`)
  }
  useEffect(() => {
    if(searchParams?.registered){
        handleMovement();
        toast({
            title: "Login",
            variant:'default',
            description: "Login with your credentials to Continue the way"
        })
    }
  }, [searchParams]);
  return (
    <div className="flex flex-col w-full min-h-screen items-center bg-[#FEFAF6] justify-center">
      <div className="flex flex-row w-[320px] sm:w-[460px] px-2 py-2 items-center justify-between">
        <p
          className={`${
            formType === "register"
              ? "bg-[#DAC0A3] text-[#EADBC8] cursor-default"
              : "bg-[#EADBC8] text-[#DAC0A3] cursor-pointer"
          } duration-200 font-semibold ease-in-out px-4 py-2 rounded-lg`}
          onClick={() => setFormType("register")}
        >
          Register
        </p>
        <p
          className={`${
            formType === "login"
              ? "bg-[#DAC0A3] text-[#EADBC8] cursor-default"
              : "bg-[#EADBC8] text-[#DAC0A3] cursor-pointer"
          } duration-200 font-semibold ease-in-out px-4 py-2 rounded-lg`}
          onClick={() => setFormType("login")}
        >
          Login
        </p>
      </div>
      <div className="bg-[#EADBC8] w-full sm:w-[460px] sm:rounded-lg py-6 px-4 shadow-lg duration-300 ease-in-out">
        {formType === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
      <Toaster />
    </div>
  );
}
