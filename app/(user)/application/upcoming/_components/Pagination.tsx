"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const { replace } = useRouter();
  const pathname = usePathname();
  const handlePage = (action: string = "", page: number = 1) => {
    const params = new URLSearchParams(searchParams);
    if (action !== "") {
      if (action == "next") {
        if (currentPage + 1 <= totalPages) {
          console.log(currentPage);
          params.set("page", String(currentPage + 1));
        } else {
          params.set("page", String(currentPage));
        }
      } else if (action == "prev") {
        if (currentPage - 1 >= 1) {
          params.set("page", String(currentPage - 1));
        } else {
          params.set("page", String(currentPage));
        }
      }
      replace(`${pathname}?${params.toString()}`);
      return;
    }
    params.set("page", String(page));
    replace(`${pathname}?${params.toString()}`);
    return;
  };
  const showingPages = () => {
    const visiblePages = [];
    const firstVisiblePage = Math.max(currentPage - 1, 1);
    const lastVisiblePage = Math.min(currentPage + 1, totalPages);

    for (let page = firstVisiblePage; page <= lastVisiblePage; page++) {
      visiblePages.push(page);
    }

    return visiblePages.map((page) => (
      <span
        key={page}
        onClick={() => handlePage("", page)}
        className={`cursor-pointer flex flex-col items-center w-[30px] rounded-full h-[30px] justify-center p-1 ${
          currentPage === page ? "bg-gray-200" : "bg-gray-300"
        }`}
      >
        {page}
      </span>
    ));
  };
  return (
    <div className="flex flex-row items-center gap-x-2 px-4 my-2 w-full">
      {currentPage !== 1 && (
        <span
          onClick={() => handlePage("prev")}
          className="cursor-pointer flex flex-col items-center w-[30px] rounded-full h-[30px] justify-center p-1 bg-gray-300"
        >
          {"<"}
        </span>
      )}

      {showingPages()}
      {currentPage < totalPages && <span
        onClick={() => handlePage("next")}
        className="cursor-pointer flex flex-col items-center w-[30px] rounded-full h-[30px] justify-center p-1 bg-gray-300"
      >
        {">"}
      </span>}
    </div>
  );
}
