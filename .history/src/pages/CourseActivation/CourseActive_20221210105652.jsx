import React from "react";

const CourseActive = () => {
  return (
    <div className="text-center p-6 container my-[40px]">
      <h1 className="text-[32px] font-semibold uppercase">
        Kích hoạt khóa học
      </h1>
      <h5 className="font-semibold">
        <span>Lưu ý:</span> Mỗi khóa học chỉ cần kích hoạt 1 lần duy nhất
      </h5>
      <p className="mt-[10px]">
        <span className="inline-block rounded-full bg-lightBlue w-[24px] h-[24px] mr-4">
          1
        </span>
        Bạn
        <strong>chưa có</strong> tài khoản đăng nhập?, vui lòng
        <a href="">đăng ký tài khoản mới</a>
      </p>
      <p className="mt-[10px]">
        <span className="inline-block rounded-full bg-lightBlue w-[24px] h-[24px] mr-4">
          2
        </span>
        Bạn <strong>đã có</strong> tài khoản đăng nhập?, vui lòng
        <a href="">Đăng nhập tài khoản</a>
      </p>
      <div className="my-10 flex justify-center gap-x-4 relative">
        <label
          className="absolute top-[-20%] left-50% translate-x-[-100%]"
          htmlFor="active"
        >
          Nhập mã kích hoạt
        </label>
        <input
          id="active"
          className="min-w-[460px] rounded-2xl shadow-lg p-4"
          type="text"
          placeholder="13x3ad3DosZ"
        />
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </button>
      </div>
      <a href="">Kích hoạt ngay</a>
      <p>Vui lòng đăng nhập trước khi nhập kích hoạt mã</p>
      <p>Hỗ trợ: 19001568 || 090 488 6095</p>
    </div>
  );
};

export default CourseActive;
