"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton({className}: {className:string}) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit" className={className}>
      {!pending ? "Save" : "Saving..."}
    </button>
  );
}
