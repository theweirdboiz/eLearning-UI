import React from "react";

const MyClass = () => {
  return (
    <div className="container">
      <h1>Khu vực học tập</h1>
      <p>Khóa học, tài liệu mà bạn đăng ksý sẽ được hiển thị dưới đây</p>
      <ul className="flex items-center gap-x-12">
        <li className="cursor-pointer px-12 py-4 font-semibold border-b border-b-primary">
          <h4>Của tôi</h4>
        </li>
        <li className="cursor-pointer px-12 py-4 font-semibold border-b border-b-primary">
          <h4>Trend 24h qua?</h4>
        </li>
        <li className="cursor-pointer px-12 py-4 font-semibold border-b border-b-primary">
          <h4>Review mới</h4>
        </li>
        <li className="w-[32rem] ml-auto">
          <div className="border border-lightBlue rounded-2xl p-4">
            <input type="text" placeholder="Tìm kiếm" />
          </div>
        </li>
      </ul>
      {/* Mine */}
      {/* <>
        <div className="shadow-2xl flex items-center gap-x-12 my-10 rounded-3xl">
          <img
            src="https://static.kt.city/cjxtrhjqs00we098574enz0ng/screen3-1614078279300.jpg"
            alt=""
            className="w-[19rem] h-[19rem] rounded-3xl"
          />
          <div className="flex flex-col gap-y-4">
            <h3>
              Khoá học HTML CSS nâng cao cắt giao diện toàn tập với Gulp, Pug và
              Sass
            </h3>
            <h4>Học cách đây 2 tháng trước</h4>
            <div className="bg-lightBlue rounded-2xl h-4">
              <div className="bg-primary w-[80%] rounded-2xl h-4"></div>
            </div>
          </div>
        </div>
        <div className="shadow-2xl flex items-center gap-x-12 my-10 rounded-3xl">
          <img
            src="https://static.kt.city/cjxtrhjqs00we098574enz0ng/screen3-1614078279300.jpg"
            alt=""
            className="w-[19rem] h-[19rem] rounded-3xl"
          />
          <div className="flex flex-col gap-y-4">
            <h3>
              Khoá học HTML CSS nâng cao cắt giao diện toàn tập với Gulp, Pug và
              Sass
            </h3>
            <h4>Học cách đây 2 tháng trước</h4>
            <div className="bg-lightBlue rounded-2xl h-4">
              <div className="bg-primary w-[80%] rounded-2xl h-4"></div>
            </div>
          </div>
        </div>
        <div className="shadow-2xl flex items-center gap-x-12 my-10 rounded-3xl">
          <img
            src="https://static.kt.city/cjxtrhjqs00we098574enz0ng/screen3-1614078279300.jpg"
            alt=""
            className="w-[19rem] h-[19rem] rounded-3xl"
          />
          <div className="flex flex-col gap-y-4">
            <h3>
              Khoá học HTML CSS nâng cao cắt giao diện toàn tập với Gulp, Pug và
              Sass
            </h3>
            <h4>Học cách đây 2 tháng trước</h4>
            <div className="bg-lightBlue rounded-2xl h-4">
              <div className="bg-primary w-[80%] rounded-2xl h-4"></div>
            </div>
          </div>
        </div>
     </> */}
      {/* trend 24h */}
      {/* <>
        <div className="shadow-2xl flex items-center gap-x-12 my-10 rounded-3xl cursor-pointer">
          <img
            src="https://static.kt.city/cjxtrhjqs00we098574enz0ng/screen3-1614078279300.jpg"
            alt=""
            className="w-[19rem] h-[19rem] rounded-3xl"
          />
          <div className="text-[1.8rem] font-semibold">
            <h4 className="py-2 px-4 rounded-xl text-white bg-primary inline-block">
              Top 1
            </h4>
            <p className="my-5">
              Tự học thiết kế website hiệu quả với khoá học HTML CSS cơ bản cho
              người mới
            </p>
          </div>
        </div>
        <div className="shadow-2xl flex items-center gap-x-12 my-10 rounded-3xl cursor-pointer">
          <img
            src="https://static.kt.city/cjxtrhjqs00we098574enz0ng/screen3-1614078279300.jpg"
            alt=""
            className="w-[19rem] h-[19rem] rounded-3xl"
          />
          <div className="text-[1.8rem] font-semibold">
            <h4 className="py-2 px-4 rounded-xl text-white bg-primary inline-block">
              Top 1
            </h4>
            <p className="my-5">
              Tự học thiết kế website hiệu quả với khoá học HTML CSS cơ bản cho
              người mới
            </p>
          </div>
        </div>
        <div className="shadow-2xl flex items-center gap-x-12 my-10 rounded-3xl cursor-pointer">
          <img
            src="https://static.kt.city/cjxtrhjqs00we098574enz0ng/screen3-1614078279300.jpg"
            alt=""
            className="w-[19rem] h-[19rem] rounded-3xl"
          />
          <div className="text-[1.8rem] font-semibold">
            <h4 className="py-2 px-4 rounded-xl text-white bg-primary inline-block">
              Top 1
            </h4>
            <p className="my-5">
              Tự học thiết kế website hiệu quả với khoá học HTML CSS cơ bản cho
              người mới
            </p>
          </div>
        </div>
      </> */}
      {/* Review moi */}
      <div className="my-10">
        <div className="flex justify-between">
          <div className="mb-4 flex items-center gap-x-6">
            <img
              src="https://static.kt.city/cl7hxoph609un3cqn9qg78oca/bat-cuoi-truoc-nhung-07-1661970522683.jpeg"
              alt=""
              className="w-[4.5rem] h-[4.5rem] rounded-full"
            />
            <div className="">
              <h3 className="font-semibold">Flexer An</h3>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="pinkPatel"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <span>3 tháng trước</span>
        </div>
        <p>
          đỉnh của chóp, săn quả sale mua giá hời so với kiến thức nhận được
          ahihi, thanks a Evondev nhiều :D
        </p>
      </div>
    </div>
  );
};

export default MyClass;