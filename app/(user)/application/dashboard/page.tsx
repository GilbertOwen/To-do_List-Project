import { authOptions } from "@/lib/auth-option";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CompletionAnalyse from "./_components/CompletionAnalyse";
import Upbar from "./_components/Upbar";

export default async function DashboardPage() {
  const session:any = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    return redirect("/auth-to-do");
  }
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Upbar></Upbar>
      <div className="w-[90%] grow mx-auto border-x-2 border-black pt-24">
        <h1 className="text-3xl pb-1 border-b-2 w-full md:w-[90%] ml-0 md:ml-4 pt-4 text-black md:text-left text-center ">Welcome back, {session?.username}</h1>
        <p className="px-4 text-sm opacity-60">Base on exercises that has been done until now</p>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full px-4 my-4">
          <CompletionAnalyse></CompletionAnalyse>
        </div>
      </div>
    </div>
  );
}
