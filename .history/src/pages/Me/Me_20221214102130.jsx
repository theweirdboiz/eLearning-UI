import React from "react";

const Me = () => {
  return (
    <div className="container">
      <div className="">
        <div className="flex items-center gap-x-4">
          <img
            src="https://kt.city/static/avatar/avatar10.jpg"
            alt=""
            className="w-[5.5rem] h-[5.5rem] rounded-full"
          />
          <div className="pb-[4rem]">
            <h2 className="font-semibold">Tran Doan Kien Thuc</h2>
            <span className="text-[1.4rem]">Người dùng tại Ktcity</span>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Me;
