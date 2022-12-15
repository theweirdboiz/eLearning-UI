import React from "react";

const OrderHistory = () => {
  return (
    <div className="">
      <div className="heading flex items-center gap-x-5">
        Cá nhân
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
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        Lịch sử mua hàng
      </div>
      <div className="grid grid-cols-order place-items-center gap-x-10  mt-12 my-6">
        <div className="w-full">
          <div className="w-full flex items-center justify-between p-4 border border-lightBlue rounded-xl">
            Tất cả
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
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <ul className="border border-lightBlue rounded-2xl hidden">
            <li className="py-3 px-4 hover:bg-lightBlue cursor-pointer">
              Tất cả
            </li>
            <li className="py-3 px-4 hover:bg-lightBlue cursor-pointer">
              Đơn hàng mới
            </li>
            <li className="py-3 px-4 hover:bg-lightBlue cursor-pointer">
              Chờ thanh toán
            </li>
            <li className="py-3 px-4 hover:bg-lightBlue cursor-pointer">
              Đã duyệt
            </li>
            <li className="py-3 px-4 hover:bg-lightBlue cursor-pointer">
              Đã hủy
            </li>
          </ul>
        </div>
        <div className="w-full relative">
          <div className="w-full flex items-center justify-between p-4 border border-lightBlue  rounded-xl">
            Tất cả
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
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <ul className="w-full border border-lightBlue rounded-2xl absolute bg-backGround">
            <li className="py-3 px-4 hover:bg-lightBlue cursor-pointer">
              Tất cả
            </li>
            <li className="py-3 px-4 hover:bg-lightBlue cursor-pointer">
              Đơn hàng mới
            </li>
            <li className="py-3 px-4 hover:bg-lightBlue cursor-pointer">
              Chờ thanh toán
            </li>
            <li className="py-3 px-4 hover:bg-lightBlue cursor-pointer">
              Đã duyệt
            </li>
            <li className="py-3 px-4 hover:bg-lightBlue cursor-pointer">
              Đã hủy
            </li>
          </ul>
        </div>
        <div className="relative p-4 pr-20 w-[calc(100%_-_3.5rem)] border border-lightBlue rounded-3xl">
          <input type="text" placeholder="Tìm kiếm..." className="w-full" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 absolute right-5 top-[50%] translate-y-[-50%]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <div className="mt-6 px-8 py-10 shadow-xl rounded-3xl">
        <div className="flex justify-between mb-5 font-semibold">
          <h3 className="text-[2rem]">VT3XAX</h3>
          <h3 className="bg-primary rounded-xl py-2 px-3 text-white">
            Đã duyệt
          </h3>
        </div>
        <div className="flex items-center gap-x-6 text-[1.8rem] text-lightBlack">
          <span>22/07/2021</span>
          <img
            src="https://kt.city/static/pm-vnpay.png"
            alt=""
            className="max-h-[2rem]"
          />
          <span>VNPay(649,000đ)</span>
        </div>
      </div>
      <div className="mt-6 px-8 py-10 shadow-xl rounded-3xl">
        <div className="flex justify-between mb-5 font-semibold">
          <h3 className="text-[2rem]">VT3XAX</h3>
          <h3 className="bg-primary rounded-xl py-2 px-3 text-white">
            Đã duyệt
          </h3>
        </div>
        <div className="flex items-center gap-x-6 text-[1.8rem] text-lightBlack">
          <span>22/07/2021</span>
          <img
            src="https://kt.city/static/pm-vnpay.png"
            alt=""
            className="max-h-[2rem]"
          />
          <span>VNPay(649,000đ)</span>
        </div>
      </div>
      <div className="mt-6 px-8 py-10 shadow-xl rounded-3xl">
        <div className="flex justify-between mb-5 font-semibold">
          <h3 className="text-[2rem]">VT3XAX</h3>
          <h3 className="bg-primary rounded-xl py-2 px-3 text-white">
            Đã duyệt
          </h3>
        </div>
        <div className="flex items-center gap-x-6 text-[1.8rem] text-lightBlack">
          <span>22/07/2021</span>
          <img
            src="https://kt.city/static/pm-vnpay.png"
            alt=""
            className="max-h-[2rem]"
          />
          <span>VNPay(649,000đ)</span>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
