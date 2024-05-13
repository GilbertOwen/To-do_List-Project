import InboxFilter from "./_components/InboxFilter";
import InboxTask from "./_components/InboxTask";

export default async function InboxPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="py-6 border-b-2 flex flex-col items-center">
        <h1 className="font-semibold text-5xl">Inbox</h1>
      </div>
      <div className="grow w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] flex flex-col sm:border-x-2 mx-auto">
        <InboxFilter></InboxFilter>
        <InboxTask></InboxTask>
      </div>
    </div>
  );
}
