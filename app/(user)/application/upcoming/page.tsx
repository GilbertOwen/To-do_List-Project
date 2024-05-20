import type { Task } from "@prisma/client";
import getTasks from "./_actions/getTasks";
import UpcomingSet from "./_components/UpcomingSet";
import UpcomingTask from "./_components/UpcomingTask";
import getTotalTasks from "./_actions/getTotalTasks";

export default async function UpcomingPage({
  searchParams,
}: {
  searchParams: { sort: string; inMonth: string; page: string };
}) {
  const sort = searchParams.sort || "nearest";
  const currentPage = searchParams.page || 1;
  const date = new Date();
  const inMonth =
    searchParams.inMonth ||
    `${date.getFullYear()}-${
      date.getMonth() > 10 ? date.getMonth() : date.getMonth() + 1
    }`;
  const totalPages: number = Math.ceil(
    (await getTotalTasks(sort, inMonth)) / 4
  );
  const task = await getTasks(sort, inMonth, Number(currentPage));
  return (
    <div className="w-full min-h-screen flex flex-row overflow-y-hidden relative">
      <UpcomingSet></UpcomingSet>
      <UpcomingTask
        inMonth={inMonth}
        tasks={task as Task[]}
        totalPages={totalPages as number}
      ></UpcomingTask>
    </div>
  );
}
