import { Layout, Space } from "antd";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import {
  IconAccountAlertOutline,
  IconHeart,
  IconSearch,
  IconShoppingCartOutlined,
} from "../../assets/Icon";
import Image from "../../component/Image/Image";
import { flexStyle } from "./../../types/general";
import "./Layout.scss";
const { Header, Footer, Sider, Content } = Layout;

function MainLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Layout>
      <Header
        className="bg-white"
        style={{
          ...flexStyle.between,
        }}
      >
        <Space
          style={{
            ...flexStyle.between,
          }}
          className="screen"
        >
          {/* <Image path="/" /> */}
          <h6 className="fw-900">Funiro.</h6>
          <Space size={75}>
            <h6 className="size-16 fw-500 pointer">Home</h6>
            <h6 className="size-16 fw-500 pointer">Shop</h6>
            <h6 className="size-16 fw-500 pointer">About</h6>
            <h6 className="size-16 fw-500 pointer">Contact</h6>
          </Space>

          <Space size={20}>
            <span className="pointer">
              <IconAccountAlertOutline />
            </span>
            <span className="pointer">
              <IconSearch />
            </span>
            <span className="pointer">
              <IconHeart />
            </span>
            <span className="pointer">
              <IconShoppingCartOutlined />
            </span>
          </Space>
        </Space>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer className="bg-white">
        <Space style={{ ...flexStyle.between_start }}>
          <Space direction="vertical" size={53}>
            <h6 className="size-24 fw-800">Funiro.</h6>
            <p className="gray-500">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </Space>
          <Space direction="vertical" size={53}>
            <h6 className="gray-500">Link</h6>
            <p className="pointer">Home</p>
            <p className="pointer">Shop</p>
            <p className="pointer">About</p>
            <p className="pointer">Contact</p>
          </Space>
          <Space direction="vertical" size={53}>
            <h6 className="gray-500">Help</h6>
            <p className="pointer">Payment Options</p>
            <p className="pointer">Returns</p>
            <p className="pointer">Privacy Policies</p>
          </Space>
          <Space direction="vertical" size={53}>
            <h6 className="gray-500">Liên hệ</h6>
            <p className="pointer">Zalo</p>
            <p className="pointer">FaceBook</p>
            <p className="pointer">Tik Tok</p>
            <p className="pointer">Shopee</p>
          </Space>
        </Space>
      </Footer>
    </Layout>
  );
}

export default MainLayout;
