import React from "react";
import { IconNoData } from "../../assets/Icon";
import "./NoData.scss";

function NoData() {
  return (
    <div className="nodata__wrapper">
      <IconNoData />
      <p>Bạn đã hoàn thành đánh giá cho học kỳ này. Hãy quay lại ở học kỳ tiếp theo nhé!</p>
    </div>
  );
}

export default NoData;
