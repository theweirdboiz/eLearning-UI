import React from "react";
import Banner from "@pages/Home/Banner";
import Course from "@pages/Home/Course";
import New from "@pages/Home/New";
import Expert from "@pages/Home/Expert";

const Home = () => {
  return (
    <div className="container my-5">
      <div className="flex gap-6 w-full">
        <div className="w-[25%] bg-white">
          <ul className="shadow bg-white">
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
            <li className="p-4 hover:bg-lightBlue border-b border-lightBlue cursor-pointer">
              <a href="">Test</a>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <div className="shadow h-full">
            <Banner></Banner>
          </div>
        </div>
      </div>
      <div className="my-[60px]">
        <h1 className="text-[20px] uppercase font-bold my-5">Top bán chạy</h1>
        <div className="grid grid-cols-4 gap-[20px] shadow-md">
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
        </div>
      </div>
      <div className="my-[60px]">
        <h1 className="text-[20px] uppercase font-bold my-5">
          Siêu ưu đãi hôm nay
        </h1>
        <div className="grid grid-cols-4 gap-[20px] shadow-md">
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
        </div>
      </div>
      <div className="my-[60px]">
        <div className="grid grid-cols-3 gap-x-[40px]">
          <div className="p-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h1 className="text-[20px] font-semibold uppercase">
                Mới ra mắt
              </h1>
              <span className="text-[14px] cursor-pointer">Xem thêm</span>
            </div>
            <New></New>
          </div>
          <div className="p-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h1 className="text-[20px] font-semibold uppercase">
                Mới ra mắt
              </h1>
              <span className="text-[14px] cursor-pointer">Xem thêm</span>
            </div>
            <New></New>
          </div>
          <div className="p-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h1 className="text-[20px] font-semibold uppercase">
                Mới ra mắt
              </h1>
              <span className="text-[14px] cursor-pointer">Xem thêm</span>
            </div>
            <New></New>
          </div>
        </div>
      </div>
      <div className="my-[60px]">
        <h1 className="text-[20px] uppercase font-bold my-5">
          Kinh doanh khởi nghiệp
        </h1>
        <div className="grid grid-cols-4 gap-y-[20px] shadow-md">
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course></Course>
          <Course isLast></Course>
        </div>
      </div>
      <div className="my-[60px]">
        <h1 className="text-[24px] font-bold text-center uppercase mb-12">
          Những lý do bạn nên chọn chúng tôi
        </h1>
        <div className="flex items-center justify-between gap-x-[30px]">
          <img
            className="max-w-[450px]"
            src="https://kt.city/static/img-experts1.png"
            alt=""
          />
          <div className="">
            <h1 className="mb-6 text-[24px] font-extrabold">
              Nâng cao kiến thức của bạn lên từng ngày, có kết quả tương xứng
              với chi phí bỏ ra
            </h1>
            <p>
              Tất cả kiến thức tại XXX đều được review bởi đội ngũ chuyên gia có
              kinh nghiệm. Hãy chọn Expert hoặc Brand mà bạn tin tưởng & bắt đầu
              trải nghiệm. Bạn cũng có thể theo lời khuyến nghị của những cá
              nhân đã trải nghiệm trước đó, người bạn quen hoặc các KOLs để lựa
              chọn kiến thức phù hợp.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-[30px]">
          <div className="">
            <h1 className="mb-6 text-[24px] font-extrabold">
              Trở thành Expert hoặc Brand, chia sẻ kiến thức & nhận lại không
              giới hạn giá trị
            </h1>
            <p>
              Xây dựng cộng đồng của riêng bạn & nhận lại không giới hạn giá
              trị. XXX & hệ thống đối tác sẽ quảng bá kiến thức hữu ích tới hàng
              trăm ngàn cá nhân có nhu cầu cải thiện chuyên môn. XXX tập trung
              xây dựng hình ảnh, thương hiệu cho bạn 1 cách hoàn chỉnh. Ngoài
              ra, tất cả các vấn đề về công nghệ luôn được tối ưu.
            </p>
          </div>
          <img
            className="max-w-[450px]"
            src="https://kt.city/static/img-experts2.png"
            alt=""
          />
        </div>
      </div>
      <div className="my-[60px]">
        <h1 className="text-center text-[24px] font-bold mb-[40px]">
          Học tập xu hướng MMO, kinh doanh, tiếp thị số mới và nổi bật 2022
        </h1>
        <Expert></Expert>
      </div>
      <div className="my-[60px]">
        <div className="bg-register-expert">
          <h1 className="font-semibold text-[24px] text-center">
            Trở thành expert của XXX
          </h1>
          <h2 className="mt-[20px] text-center">
            Hơn 1000+ expert đã hợp tác cùng XXX
          </h2>
          <a
            href=""
            className="block w-60 mx-auto my-[60px] py-4 px-2 text-center border uppercase font-semibold"
          >
            Đăng ký ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
