import React from "react";

const Profile = () => {
  return (
    <div>
      <h1 className="heading mb-5">Thông tin cá nhân</h1>
      <p className="">
        Cập nhật đầy đủ thông tin của bạn để hoạt động tốt hơn trên KTcity
      </p>
      <div className="p-16 shadow-lg  gap-x-4 rounded-2xl mt-10">
        <div className="flex items-center mb-20">
          <div className="flex items-center justify-center w-[calc(100%_-_4rem)]">
            <div className="w-[50%] h-[14rem]">
              <img
                src="https://static.kt.city/ckosiwwbe0c1r92qngxj311sv/kjj-1671032276291.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
          </div>
          <form action="" className="w-full">
            <div className="border-[1px] border-lightBlue mb-4 p-4 rounded-2xl relative">
              <input type="text" placeholder="Họ và tên" className="w-full" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 absolute right-4 top-[50%] translate-y-[-50%]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="border-[1px] border-lightBlue mb-4 p-4 rounded-2xl relative">
              <input type="text" placeholder="User name" className="w-full" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 absolute right-4 top-[50%] translate-y-[-50%]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="border-[1px] border-lightBlue mb-4 p-4 rounded-2xl relative">
              <input type="text" placeholder="User name" className="w-full" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 absolute right-4 top-[50%] translate-y-[-50%]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <button className="p-4 text-white font-semibold bg-primary w-full rounded-2xl">
              Lưu lại
            </button>
          </form>
        </div>
        <div className="border-b border-primary"></div>
        <h3 className="font-semibold my-10 text-[2rem]">Các thông tin khác</h3>
        <div className="grid grid-cols-2 gap-x-20">
          <div className="flex justify-between items-center">
            <h3>Thông tin thêm về bạn</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
