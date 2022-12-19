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
            <Link to="/my-class" className="flex items-start gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#0056d2"
                viewBox="0 0 24 24"
                stroke="#0056d2"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <span className="text-[1.6rem] font-semibold">
                Trở về dashboard
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-[4.5rem] px-[10rem]">
        <div className="relative h-0 pb-[56.25%] mb-6">
          <img
            src="https://stream.kt.city/cover/pvdupload/1614573247-3faa7fca8747da87d8cbfcd77647b130e856a2bf-603c6ebf3b370-1-intro_thumb_2.jpg?rand=ran"
            alt=""
          />
        </div>
        <div className="text-[1.8rem] break-words px-[3rem] py-[2rem]">
          <p className="mb-[1rem]">
            Đầu tiên mình xin cám ơn bạn rất nhiều vì đã ủng hộ khóa học của
            mình nhé. Nếu bạn coi video không được thì thử đổi trình duyệt sang
            Firefox. Nếu video load chậm thì thử đổi Server ở nút dưới cùng bên
            phải nhé. Hoặc liên hệ mình ở nhóm Telegram để mình cung cấp VPN cho
            nha.
          </p>
          <p className="mb-[1rem]">
            Đầu tiên mình xin cám ơn bạn rất nhiều vì đã ủng hộ khóa học của
            mình nhé. Nếu bạn coi video không được thì thử đổi trình duyệt sang
            Firefox. Nếu video load chậm thì thử đổi Server ở nút dưới cùng bên
            phải nhé. Hoặc liên hệ mình ở nhóm Telegram để mình cung cấp VPN cho
            nha.
          </p>
          <p className="mb-[1rem]">
            Đầu tiên mình xin cám ơn bạn rất nhiều vì đã ủng hộ khóa học của
            mình nhé. Nếu bạn coi video không được thì thử đổi trình duyệt sang
            Firefox. Nếu video load chậm thì thử đổi Server ở nút dưới cùng bên
            phải nhé. Hoặc liên hệ mình ở nhóm Telegram để mình cung cấp VPN cho
            nha.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
