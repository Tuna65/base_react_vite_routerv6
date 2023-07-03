import React from "react";
import "./404.scss";
import { Icon404 } from "../../assets/Icon";

function Page404() {
  return (
    <div className="page404__wrapper">
      <Icon404 />
      <p>Xin lỗi, Chúng tôi không tìm thấy yêu cầu của bạn !</p>
    </div>
  );
}

export default Page404;
