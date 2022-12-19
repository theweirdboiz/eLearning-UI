import React from "react";

const Trending = () => {
  return (
    <div>
      <div className="bg-coming  bg-center bg-cover bg-no-repeat h-[30rem] pb-[2rem] flex flex-col justify-end items-center text-center">
        <div className="px-[2rem] translate-y-0 text-white">
          <div className="uppercase flex gap-x-3 items-center justify-center mb-[0.5rem]">
            <span className="font-bold"> Ktcity 24h trending</span>
            <img
              src="https://kt.city/static/trending.svg"
              alt=""
              className="max-w-[2rem] scale-[2] relative -top-1"
            />
          </div>
          <h4 className="text-[1.4rem] py-2 bg-lightPurple rounded-xl">
            Điều gì đang diễn ra tại KTcity? Khám phá xu hướng học tập trong 24h
            qua được cập nhật theo thời gian thực
          </h4>
        </div>
      </div>
      <div className="p-[2rem]">
        <div className="flex mb-[2rem] shadow-shadow bg-backGround rounded-2xl">
          <a
            href=""
            className="flex w-[11rem] h-[11rem] rounded-2xl overflow-hidden shadow-shadowSmall flex-shrink-0"
          >
            <img
              src="https://static.kt.city/ckdh3zgkqqk5z0872fk9h6et2/banhangtrangcanhankhoahoc2x-100-1622103760819.jpg"
              alt=""
              className="w-full h-full flex-shrink"
            />
          </a>
          <div className="flex items-center flex-1 px-[1.5rem] py-[1rem]">
            <a className="flex justify-between  mb-[1.5rem] flex-col pr-6">
              <h2 className="text-[1.5rem] font-semibold mb-[0.5rem]">
                Khóa học Bán hàng trên trang cá nhân: Kinh doanh bài bản - Thu
                nhập không giới hạn - PingGo Việt Nam
              </h2>
              <div className="flex gap-x-6items-center text-lightBlack">
                <span className="text-[1.3rem]">
                  <strong>288</strong> đang học
                </span>
              </div>
            </a>
            <div className="flex justify-center items-center text-[2rem] font-bold w-[4rem] h-[4rem] rounded-full bg-primary flex-shrink-0">
              1
            </div>
          </div>
        </div>
        <div className="flex mb-[2rem] shadow-shadow bg-backGround rounded-2xl">
          <a
            href=""
            className="flex w-[11rem] h-[11rem] rounded-2xl overflow-hidden shadow-shadowSmall flex-shrink-0"
          >
            <img
              src="https://static.kt.city/ckdh3zgkqqk5z0872fk9h6et2/banhangtrangcanhankhoahoc2x-100-1622103760819.jpg"
              alt=""
              className="w-full h-full flex-shrink"
            />
          </a>
          <div className="flex items-center flex-1 px-[1.5rem] py-[1rem]">
            <a className="flex justify-between  mb-[1.5rem] flex-col pr-6">
              <h2 className="text-[1.5rem] font-semibold mb-[0.5rem]">
                Khóa học Bán hàng trên trang cá nhân: Kinh doanh bài bản - Thu
                nhập không giới hạn - PingGo Việt Nam
              </h2>
              <div className="flex gap-x-6items-center text-lightBlack">
                <span className="text-[1.3rem]">
                  <strong>288</strong> đang học
                </span>
              </div>
            </a>
            <div className="flex justify-center items-center text-[2rem] font-bold w-[4rem] h-[4rem] rounded-full bg-primary flex-shrink-0">
              1
            </div>
          </div>
        </div>
        <div className="flex mb-[2rem] shadow-shadow bg-backGround rounded-2xl">
          <a
            href=""
            className="flex w-[11rem] h-[11rem] rounded-2xl overflow-hidden shadow-shadowSmall flex-shrink-0"
          >
            <img
              src="https://static.kt.city/ckdh3zgkqqk5z0872fk9h6et2/banhangtrangcanhankhoahoc2x-100-1622103760819.jpg"
              alt=""
              className="w-full h-full flex-shrink"
            />
          </a>
          <div className="flex items-center flex-1 px-[1.5rem] py-[1rem]">
            <a className="flex justify-between  mb-[1.5rem] flex-col pr-6">
              <h2 className="text-[1.5rem] font-semibold mb-[0.5rem]">
                Khóa học Bán hàng trên trang cá nhân: Kinh doanh bài bản - Thu
                nhập không giới hạn - PingGo Việt Nam
              </h2>
              <div className="flex gap-x-6items-center text-lightBlack">
                <span className="text-[1.3rem]">
                  <strong>288</strong> đang học
                </span>
              </div>
            </a>
            <div className="flex justify-center items-center text-[2rem] font-bold w-[4rem] h-[4rem] rounded-full bg-primary flex-shrink-0">
              1
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[3rem]"></div>
    </div>
  );
};

export default Trending;
