import Link from "next/link";
import { GoChecklist } from "react-icons/go";

export default function CompletionAnalyse() {
  return (
    <div className="border-2 shadow-sm rounded-xl col-span-3 md:col-span-2 lg:col-span-1">
      <h1 className="border-b-2 px-4 font-semibold text-center py-2">Completion Analytics</h1>
      <div className="flex flex-row items-center gap-x-2 p-4 border-b-2">
        <GoChecklist size={25} className="text-green-400" />{" "}
        <span className="text-lg font-medium">Completed</span>
        <span>2</span>
      </div>
      <Link
        href={"/application/inbox"}
        className="flex flex-row items-center gap-x-2 p-4 border-b-2"
      >
        <GoChecklist size={25} className="text-red-400" />{" "}
        <span className="text-lg font-medium">Not Completed</span>
        <span>10</span>
      </Link>
    </div>
  );
}
