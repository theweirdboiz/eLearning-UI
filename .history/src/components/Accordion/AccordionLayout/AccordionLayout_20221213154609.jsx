import React from "react";

const AccordionLayout = ({ title, children, activeIndex, setActiveIndex }) => {
  const handleSetIndex = () => setActiveIndex(!activeIndex);
  return (
    <>
      <div
        onClick={handleSetIndex}
        className="flex w-1/2 justify-between p-2 mt-2 rounded bg-lightBlue"
      >
        <div className="flex">
          <div className="font-bold">{title}</div>
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
      {activeIndex && (
        <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
