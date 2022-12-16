import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const isLogged = false;
  return (
    <div className="py-[1.2rem] bg-white shadow-sm">
      <div className="container">
        <div className="flex items-center">
          <Link to="/" className="flex gap-x-32 w-[50%]">
            <img
              className="max-w-[11.5rem]"
              src="https://unica.vn/media/img/logo-unica.svg"
              alt=""
            />
          </Link>
          <div className="relative w-full">
            <input
              className="w-full h-[38px] p-6 rounded-full border-2 border-backGround focus:border-primary shadow text-[14px] font-semibold"
              type="text"
              placeholder="Tìm khóa học, giảng viên"
            />
            <Link
              to="/search"
              className="absolute right-5 top-[50%] translate-y-[-50%]"
            >
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </Link>
          </div>
          <div className="flex items-center w-[50%] gap-x-10  justify-between">
            <Link
              to="/active"
              className="flex items-baseline gap-x-3 px-4 py-4  rounded text-[1.6rem] font-semibold"
            >
              <span>Kích hoạt mã</span>
            </Link>
            <Link
              to="/categories"
              className="flex items-center gap-x-3 px-4 py-4  rounded text-[14px] font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#0056d2"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
              <span>Khám phá</span>
            </Link>
            <Link to="/support" className="text-[14px] font-semibold">
              Hỗ trợ
            </Link>
            <Link
              to="/auth"
              className="border-2 border-primary rounded-full py-3 px-6 text-[14px] font-semibold"
            >
              {isLogged ? "Khu vực học tập" : "Đăng nhập"}
            </Link>

            <Link to="/cart" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[24px] h-[26px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
