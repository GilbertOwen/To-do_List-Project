"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const router = useRouter();
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [redirecting, setIsRedirecting] = useState<boolean>(false);
  const queryParams = useSearchParams();
  const nextAuthCallbackUrl = queryParams.get("callbackUrl");
  const handleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
        callbackUrl: nextAuthCallbackUrl || "/application/dashboard",
      });
      console.log(response);
      if (response?.status === 401) {
        throw response;
      } else {
        setIsLoading(false);
        toast({
          title: "Successs to sign in",
          variant: "success",
          description: "Please wait...",
        });
        setIsRedirecting(true);
        router.push(response?.url as string)
        return;
      }
    } catch (err) {
      toast({
        title: "Failed to sign in",
        variant: "destructive",
        description: "Please check your credentials and try again",
      });
      setIsLoading(false);
      return;
    }
  };
  return (
    <motion.form
      initial={{
        opacity: 0,
        x: 50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="flex flex-col gap-y-4"
    >
      <h1 className="text-center text-3xl font-semibold mb-4 border-b-4 border-[#DAC0A3] text-[#DAC0A3]">
        LOGIN
      </h1>
      <div className="flex flex-col items-start w-full gap-y-1">
        <label
          htmlFor="email"
          className="text-lg pl-1 font-semibold text-[#DAC0A3] drop-shadow-sm"
        >
          Email :
        </label>
        <input
          type="text"
          placeholder="Example@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={
            "w-full py-1 px-2 bg-[#FEFAF6] focus:outline-none placeholder:text-[#EADBC8] text-[#DAC0A3] rounded-md drop-shadow-md"
          }
          id="email"
        />
      </div>
      <div className="flex flex-col items-start w-full gap-y-1 relative">
        <label
          htmlFor="password"
          className="text-lg pl-1 text-[#DAC0A3] font-semibold drop-shadow-sm"
        >
          Password :
        </label>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={isHidden ? "password" : "text"}
          placeholder="Type your password"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // prevent default behavior
              handleSignIn(e);
            }
          }}
          className={
            "w-full py-1 px-2 bg-[#FEFAF6] focus:outline-none placeholder:text-[#EADBC8] text-[#DAC0A3] rounded-md drop-shadow-md"
          }
          id="password"
        />
      </div>
      <button
        disabled={isLoading || redirecting}
        onClick={(e) => handleSignIn(e)}
        className="mt-2 block w-fit px-6 py-2 rounded-md shadow-md text-[#DAC0A3] font-semibold hover:text-[#EADBC8] hover:bg-[#DAC0A3] bg-[#EADBC8] text-lg transition-all"
      >
        {redirecting && "Bringing In..."}
        {isLoading ? 'Going In...' : 'Go In'}
      </button>
    </motion.form>
  );
}
