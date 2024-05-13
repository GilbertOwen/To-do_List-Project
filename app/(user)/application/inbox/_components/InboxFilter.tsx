export default function InboxFilter() {
  return (
    <div className="pt-4 px-4 flex flex-col items-start">
      <select
        name=""
        id=""
        className="text-sm sm:text-base border-2 rounded-md p-1 cursor-pointer"
        defaultValue={"no"}
      >
        <option value="no" disabled>
          Sort by
        </option>
        <option value="" className="border-0 outline-none p-1">
          Nearest
        </option>
      </select>
    </div>
  );
}
