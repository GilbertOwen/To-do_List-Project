"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton({className}: {className:string}) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className={className}>
      {!pending ? "Save" : "Saving..."}
    </button>
  );
}
