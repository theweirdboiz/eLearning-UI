import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper";

const Expert = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="min-h-[300px]">
          <div className="py-[25px] pt-[25px] pb-[50px] flex flex-col shadow-md rounded-lg">
            <img
              className="rounded-full w-[150px] h-[150px] mb-[30px]"
              src="https://kt.city/_next/image?url=https%3A%2F%2Fstatic.kt.city%2Fe0ebee87-aefb-40bf-96a3-9a53986dfc17.jpg&w=256&q=100"
              alt=""
            />
            <span className="mb-[10px] text-lightBlack ">Hoc HTML Css tu</span>
            <span className="text-[20px] font-semibold text-primary">
              Evondev
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-[300px]">
          <div className="py-[25px] pt-[25px] pb-[50px] flex flex-col">
            <img
              className="rounded-full w-[150px] h-[150px] mb-[30px]"
              src="https://kt.city/_next/image?url=https%3A%2F%2Fstatic.kt.city%2Fe0ebee87-aefb-40bf-96a3-9a53986dfc17.jpg&w=256&q=100"
              alt=""
            />
            <span className="mb-[10px] text-lightBlack ">Hoc HTML Css tu</span>
            <span className="text-[20px] font-semibold text-primary">
              Evondev
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-[300px]">
          <div className="py-[25px] pt-[25px] pb-[50px] flex flex-col">
            <img
              className="rounded-full w-[150px] h-[150px] mb-[30px]"
              src="https://kt.city/_next/image?url=https%3A%2F%2Fstatic.kt.city%2Fe0ebee87-aefb-40bf-96a3-9a53986dfc17.jpg&w=256&q=100"
              alt=""
            />
            <span className="mb-[10px] text-lightBlack ">Hoc HTML Css tu</span>
            <span className="text-[20px] font-semibold text-primary">
              Evondev
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-[300px]">
          <div className="py-[25px] pt-[25px] pb-[50px] flex flex-col">
            <img
              className="rounded-full w-[150px] h-[150px] mb-[30px]"
              src="https://kt.city/_next/image?url=https%3A%2F%2Fstatic.kt.city%2Fe0ebee87-aefb-40bf-96a3-9a53986dfc17.jpg&w=256&q=100"
              alt=""
            />
            <span className="mb-[10px] text-lightBlack ">Hoc HTML Css tu</span>
            <span className="text-[20px] font-semibold text-primary">
              Evondev
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="mt-[20px]">
        <p className="max-w-[600px] mx-auto text-center border-b border-b-primary pb-4">
          V?? nhi???u expert h??ng ?????u kh??c, lu??n c???p nh???t n???i dung h??ng th??ng
        </p>
      </div>
    </div>
  );
};

export default Expert;
