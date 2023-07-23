import React, { CSSProperties } from "react";
import { Space, Col, Row } from "antd";
import { flexStyle } from "../types/general";
import Image from "../component/Image/Image";
import Product from "../component/Product/Product";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="p-32 screen">
      <Space
        direction="vertical"
        size={50}
        style={{ ...(flexStyle.column as CSSProperties) }}
      >
        <Space direction="vertical" size={20} style={{ ...flexStyle.flex }}>
          <Space style={{ ...flexStyle.center }}>
            <Space direction="vertical">
              <h6 className="size-32 fw-700 text-center gray-800">
                Browse The Range
              </h6>
              <p className="size-20 gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Space>
          </Space>
          <Row>
            <Col span={8}>
              <Space
                direction="vertical"
                style={{ ...flexStyle.flex }}
                size={32}
                className="p-10"
              >
                <Image height={500} path="" className="border radius-20" />
                <p className="text-center">Dining</p>
              </Space>
            </Col>
            <Col span={8}>
              <Space
                direction="vertical"
                style={{ ...flexStyle.flex }}
                size={32}
                className="p-10"
              >
                <Image height={500} path="" className="border radius-20" />
                <p className="text-center">Living</p>
              </Space>
            </Col>
            <Col span={8}>
              <Space
                direction="vertical"
                style={{ ...flexStyle.flex }}
                size={32}
                className="p-10"
              >
                <Image height={500} path="" className="border radius-20" />
                <p className="text-center">Bedroom</p>
              </Space>
            </Col>
          </Row>
        </Space>

        <Space direction="vertical" size={20} style={{ ...flexStyle.flex }}>
          <h6 className="fw-900 gray-800 text-center size-40">Our Products</h6>
          <Row justify={"start"}>
            <Col xs={{ span: 5 }} lg={{ span: 6 }}>
              <Product />
            </Col>
            <Col xs={{ span: 5 }} lg={{ span: 6 }}>
              <Product />
            </Col>
            <Col xs={{ span: 5 }} lg={{ span: 6 }}>
              <Product />
            </Col>
            <Col xs={{ span: 5 }} lg={{ span: 6 }}>
              <Product />
            </Col>
            <Col xs={{ span: 5 }} lg={{ span: 6 }}>
              <Product />
            </Col>
            <Col xs={{ span: 5 }} lg={{ span: 6 }}>
              <Product />
            </Col>
            <Col xs={{ span: 5 }} lg={{ span: 6 }}>
              <Product />
            </Col>
          </Row>
        </Space>
      </Space>
    </div>
  );
};

export default Home;
