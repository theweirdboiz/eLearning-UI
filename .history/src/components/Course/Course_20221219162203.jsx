import React from "react";
import { Link } from "react-router-dom";
import uyen from "@assets/home/uyen.jpg";

const Course = ({
  src = "https://kt.city/_next/image?url=%2Fstatic%2Flabel-trending.png&w=128&q=75",
}) => {
  return (
    <Link
      to="/course-detail"
      className="rounded-2xl shadow-shadowSmall overflow-hidden hover:shadow-shadow"
    >
      <div className="">
        <div className="h-[18rem] w-full overflow-hidden">
          <div className="">
            <img src={uyen} alt="" className="w-full h-full object-fill" />
          </div>
        </div>
        <div className="py-[2.5rem] px-[1.5rem]">
          <h3 className="text-[1.8rem] font-semibold mb-[1.5rem]">
            Phùng Thái Học: Khóa học viết quảng cáo - nghệ thuật của tư duy và
            ngôn từ
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://static.kt.city/cjygynzur2r1b0919y0lp4rez/phung-thai-hoc-1585837962603.jpg"
                alt=""
                className="h-[2.5rem] w-[2.5rem] rounded-2xl mr-[1rem]"
              />
              <span className="text-lightBlack">Phùng Thái Học</span>
            </div>
            <div className="text-[1.6rem]">
              <div className="">
                <div className="">
                  <img src={src} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Course;
