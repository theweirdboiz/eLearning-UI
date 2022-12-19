import React from "react";

const SidebarLesson = () => {
  return (
    <div className="fixed w-[42rem]">
      <div
        className="flex justify-between item-center h-[7.5rem] px-[1.5rem] py-[3rem]
       "
      >
        <h2 className="font-bold text-[1.8rem]">Nội dung bài học</h2>
        <h3 className="flex items-center gap-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#0056d2"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Mở rộng</span>
        </h3>
      </div>
    </div>
  );
};

export default SidebarLesson;
