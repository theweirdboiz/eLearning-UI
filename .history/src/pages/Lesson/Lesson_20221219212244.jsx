import React from "react";
import { Link } from "react-router-dom";

const Lesson = () => {
  return (
    <div className="ml-auto w-[calc(100%-42rem)]">
      <div className="px-[10rem] py-[2rem]">
        <div className="flex items-center">
          <Link to="/" className="max-h-[35rem]">
            <img src="https://kt.city/static/ktcity-logo.png" alt="" />
          </Link>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Lesson;
