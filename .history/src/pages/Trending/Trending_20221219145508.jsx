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
        <div className="mb-[2rem] shadow-shadowSmall bg-backGround rounded-2xl">
          <a
            href=""
            className="w-[11rem] h-[11rem] rounded-2xl overflow-hidden shadow-shadowSmall flex-shrink-0"
          >
            <img
              src="https://static.kt.city/ckdh3zgkqqk5z0872fk9h6et2/banhangtrangcanhankhoahoc2x-100-1622103760819.jpg"
              alt=""
              className="w-full h-full  flex-shrink"
            />
          </a>
          <div className="flex items-center px-[3.5rem] py-[2rem]">
            <a className="flex justify-between  mb-[1.5rem] flex-col pr-6">
              <h2 className="text-[2.2rem] font-semibold">
                Khóa học Bán hàng trên trang cá nhân: Kinh doanh bài bản - Thu
                nhập không giới hạn - PingGo Việt Nam
              </h2>
              <div className="flex gap-x-6 text-[2rem] items-center">
                <span className="">Ra mắt</span>
                <span className="font-medium px-4 py-2 rounded-xl text-lightGreen bg-bgLightGreen">
                  15/06/2023
                </span>
              </div>
            </a>
            <div className="flex justify-center items-center text-[6rem] font-bold w-[10rem] h-[10rem] rounded-full bg-primary flex-shrink-0">
              1
            </div>
          </div>
        </div>
      </div>
      {/* <div className="px-[2rem] mb-[4rem]">
        <div className="w-[102rem] mx-auto">
          <a
            href="#"
            className="flex shadow-2xl translate-y-[-35%] bg-backGround rounded-3xl"
          >
            <a
              href=""
              className="w-[20rem] h-[20rem] rounded-2xl overflow-hidden shadow-shadowSmall flex-shrink-0"
            >
              <img
                src="https://static.kt.city/ckdh3zgkqqk5z0872fk9h6et2/banhangtrangcanhankhoahoc2x-100-1622103760819.jpg"
                alt=""
                className="w-full h-full  flex-shrink"
              />
            </a>
            <div className="flex items-center px-[3.5rem] py-[2rem]">
              <a className="flex justify-between  mb-[1.5rem] flex-col pr-6">
                <h2 className="text-[2.2rem] font-semibold">
                  Khóa học Bán hàng trên trang cá nhân: Kinh doanh bài bản - Thu
                  nhập không giới hạn - PingGo Việt Nam
                </h2>
                <div className="flex gap-x-6 text-[2rem] items-center">
                  <span className="">Ra mắt</span>
                  <span className="font-medium px-4 py-2 rounded-xl text-lightGreen bg-bgLightGreen">
                    15/06/2023
                  </span>
                </div>
              </a>
              <div className="flex justify-center items-center text-[6rem] font-bold w-[10rem] h-[10rem] rounded-full bg-lightGreen flex-shrink-0">
                2
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="px-[2rem] mb-[4rem]">
        <div className="w-[102rem] mx-auto">
          <a
            href="#"
            className="flex shadow-2xl translate-y-[-35%] bg-backGround rounded-3xl"
          >
            <a
              href=""
              className="w-[20rem] h-[20rem] rounded-2xl overflow-hidden shadow-shadowSmall flex-shrink-0"
            >
              <img
                src="https://static.kt.city/ckdh3zgkqqk5z0872fk9h6et2/banhangtrangcanhankhoahoc2x-100-1622103760819.jpg"
                alt=""
                className="w-full h-full  flex-shrink"
              />
            </a>
            <div className="flex items-center px-[3.5rem] py-[2rem]">
              <a className="flex justify-between  mb-[1.5rem] flex-col pr-6">
                <h2 className="text-[2.2rem] font-semibold">
                  Khóa học Bán hàng trên trang cá nhân: Kinh doanh bài bản - Thu
                  nhập không giới hạn - PingGo Việt Nam
                </h2>
                <div className="flex gap-x-6 text-[2rem] items-center">
                  <span className="">Ra mắt</span>
                  <span className="font-medium px-4 py-2 rounded-xl text-lightGreen bg-bgLightGreen">
                    15/06/2023
                  </span>
                </div>
              </a>
              <div className="flex justify-center items-center text-[6rem] font-bold w-[10rem] h-[10rem] rounded-full bg-yellow flex-shrink-0">
                3
              </div>
            </div>
          </a>
        </div>
      </div> */}
      <p className="block max-w-[90rem] px-[3rem] py-6 mx-auto text-center font-semibold text-[2.4rem] bg-bgLightGreen rounded-3xl">
        KTcity được tin tưởng bởi hơn 100.000 thành viên đang học tập
      </p>
    </div>
  );
};

export default Trending;
