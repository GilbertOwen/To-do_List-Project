"use client";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="mt-2 block w-fit px-6 py-2 rounded-md shadow-md text-[#DAC0A3] font-semibold hover:text-[#EADBC8] hover:bg-[#DAC0A3] bg-[#EADBC8] text-lg transition-all">
      {!pending ? "Go in" : "Going in..."}
    </button>
  );
}
