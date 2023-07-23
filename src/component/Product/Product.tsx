import React from "react";
import { Card, Space } from "antd";
interface IProductProps {}
const { Meta } = Card;
import "./Product.scss";
import { flexStyle } from "../../types/general";

const Product = (props: IProductProps) => {
  return (
    <div className="p-10">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Space direction="vertical" style={{ ...flexStyle.flex }}>
          <h6 className="fw-600 size-24 gray-800">Syltherine</h6>
          <p className="size-16 gray-500">Stylish cafe chair</p>
          <Space style={{ ...flexStyle.between }}>
            <h6 className="fw-600 size-20 gray-800">2.500.000đ</h6>
            <p className="gray-400 text-line-through">Rp 3.500.000</p>
          </Space>
        </Space>
      </Card>
    </div>
  );
};

export default Product;
