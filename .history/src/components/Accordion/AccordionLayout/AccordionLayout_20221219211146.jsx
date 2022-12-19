import React from "react";

const AccordionLayout = ({ title, content, handleActive, isActive }) => {
  return (
    <>
      <div
        onClick={handleActive}
        className="flex justify-between px-10 py-4 mt-2 rounded bg-bgLightGreen  cursor-pointer"
      >
        <div className="">
          <div className="font-bold">{title}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
      {isActive && (
        <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
          {content}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
