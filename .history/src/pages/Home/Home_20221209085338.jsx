import React from "react";
import Banner from "@pages/Home/Banner";
import Course from "@pages/Home/Course";
import New from "@pages/Home/New";

const Home = () => {
  return (
    <div className="container my-5">
      <div className="flex gap-6 w-full">
        <div className="w-[25%] bg-white">
          <ul className="shadow bg-white">
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <div className="shadow h-full">
            <Banner></Banner>
          </div>
        </div>
      </div>
      <div className="my-[60px]">
        <h1 className="text-[20px] uppercase font-bold my-5">Top b??n ch???y</h1>
        <div className="grid grid-cols-4 gap-[20px] shadow-md">
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
        </div>
      </div>
      <div className="my-[60px]">
        <h1 className="text-[20px] uppercase font-bold my-5">
          Si??u ??u ????i h??m nay
        </h1>
        <div className="grid grid-cols-4 gap-[20px] shadow-md">
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
        </div>
      </div>
      <div className="my-[60px">
        <div className="grid grid-cols-3 gap-x-[40px] ">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-[20px] font-semibold uppercase">
                M???i ra m???t
              </h1>
              <span className="text-[14px] cursor-pointer">Xem th??m</span>
            </div>
            <New></New>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h1>M???i ra m???t</h1>
              <span>Xem th??m</span>
            </div>
            <New></New>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h1>M???i ra m???t</h1>
              <span>Xem th??m</span>
            </div>
            <New></New>
          </div>
        </div>
      </div>
      <div className="my-[60px]">
        <h1 className="text-[20px] uppercase font-bold my-5">
          Kinh doanh kh???i nghi???p
        </h1>
        <div className="grid grid-cols-4 gap-y-[20px] shadow-md">
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course isLast></Course>
        </div>
      </div>
    </div>
  );
};

export default Home;
