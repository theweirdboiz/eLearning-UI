import React from "react";

const CourseActive = () => {
  return (
    <div className="text-center p-6 container">
      <p>Kích hoạt khóa học</p>
      <h5>
        <span>Lưu ý:</span> Mỗi khóa học chỉ cần kích hoạt 1 lần duy nhất
      </h5>
      <p>
        <span>1</span>Bạn <strong>chưa có</strong> tài khoản đăng nhập?, vui
        lòng
        <a href="">đăng ký tài khoản mới</a>
      </p>
      <p>
        <span>2</span> Bạn <strong>đã có</strong> tài khoản đăng nhập?, vui lòng{" "}
        <a href="">Đăng nhập tài khoản</a>
      </p>
      <label htmlFor="">Nhập mã kích hoạt</label>
      <div className="">
        <input type="text" placeholder="13x3ad3DosZ" />
        <button></button>
      </div>
      <a href="">Kích hoạt ngay</a>
      <p>Vui lòng đăng nhập trước khi nhập kích hoạt mã</p>
      <p>Hỗ trợ: 19001568 || 090 488 6095</p>
    </div>
  );
};

export default CourseActive;