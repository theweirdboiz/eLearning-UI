import React from "react";
import { Link } from "react-router-dom";

const Lesson = () => {
  return (
    <div className="ml-auto w-[calc(100%-42rem)]">
      <div className="px-[10rem] py-[2rem]">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://kt.city/static/ktcity-logo.png"
              alt=""
              className="max-h-[3.5rem]"
            />
          </Link>
          <div className="ml-auto">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <span>Trở về dashboard</span>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Lesson;
