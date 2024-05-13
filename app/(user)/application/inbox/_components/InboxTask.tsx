export default function InboxTask() {
  const exampleTask = [
    {
      date: "24 May 2024",
      tasks: [
        {
          name: "Eat",
          priority: "high",
        },
        {
          name: "Date",
          priority: "medium",
        },
      ],
    },
    {
      date: "26 May 2024",
      tasks: [
        {
          name: "Sleep",
          priority: "low",
        },
        {
          name: "Call mom",
          priority: "high",
        },
      ],
    },
  ];
  const handlePriority = (priority: string) => {
    if (priority === "high") {
      return "bg-red-400";
    } else if (priority === "medium") {
      return "bg-yellow-400";
    } else if (priority === "low") {
      return "bg-green-400";
    }
  };
  return (
    <div className="flex flex-col pb-4">
      {exampleTask &&
        exampleTask.map((task, index) => (
          <div key={index}>
            <h2
              className={`p-4 ${
                index === 0 ? "border-b-2" : "border-y-2"
              } my-2 font-semibold `}
            >
              {task.date}
            </h2>
            <div className="flex flex-col px-4 gap-y-2">
                {/* Card List */}
              {task.tasks &&
                task.tasks.map((task,index) => (
                  <div className="w-full border-2 rounded-md p-2 cursor-grab" key={index}>
                    <div className="pb-1 border-b-2 mb-2 flex flex-row items-center gap-x-2">
                      <span
                        className={`w-[20px] h-[10px] ${handlePriority(
                          task.priority
                        )} block`}
                      ></span>
                      <h2 className="text-xl font-semibold">{task.name}</h2>
                    </div>
                    <p className="text-base font-medium">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, veritatis.
                    </p>
                    <small>See more ~</small>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}
