import { Suspense } from "react";
import getTasks from "./_actions/getTasks";
import InboxFilter from "./_components/InboxFilter";
import InboxTask from "./_components/InboxTask";
import Skeleton from "@mui/material/Skeleton";
import Loading from "./_components/Loading";
import Upbar from "./_components/Upbar";

export default async function InboxPage({
  searchParams,
}: {
  searchParams?: {
    sort?: string;
  };
}) {
  let sort = searchParams?.sort || "nearest";
  console.log(sort);
  const tasks = await getTasks(sort);
  // console.log(task)
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Upbar></Upbar>
      <div className="grow w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] flex flex-col sm:border-x-2 mx-auto border-black">
        <InboxFilter></InboxFilter>
        <Suspense fallback={<Loading />}>
          <InboxTask tasks={tasks}></InboxTask>
        </Suspense>
      </div>
    </div>
  );
}
