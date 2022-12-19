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
