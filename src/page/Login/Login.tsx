import React, { useEffect, useState } from "react";
import Input from "../../component/Input/Input";
import "./Login.scss";
import { useForm } from "react-hook-form";
import Button from "../../component/Button/Button";
import CheckBox from "../../component/CheckBox/CheckBox";
import { authApis } from "../../data/apis/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../../data/redux/actions/auth";
import { authIsAuthenSelector } from "../../data/redux/selectors/auth";

function Login() {
  useForm();
  const dispatch = useDispatch();
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [dataLoginForm, setDataLoginForm] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });
  const isAuthenticate = useSelector(authIsAuthenSelector);
  const handleLoginForm = async () => {
    try {
      const res: any = await authApis.login(dataLoginForm);
      if (res) {
        localStorage.setItem("TOKEN_DA", res.data.accessToken);
        localStorage.setItem("userId", res.data.dataUser._id);

        dispatch(
          authLogin({ isAuthenticated: true, account: res.data.dataUser })
        );
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {}
  };

  return (
    <div className="Login__wrapper">
      <div className="Login__inner">
        <div className="left">
          <div className="logo">
            <div className="bg">Đăng nhập vào hệ thống</div>
          </div>
          <div className="login-form">
            <div className="">
              <Input
                placehoder="Email"
                // inputProps={{ ...register("Email") }}
                label="Email"
                type="email"
                setQuerySearch={(value: string) => {
                  setDataLoginForm((prev: any) => ({
                    ...prev,
                    username: value,
                  }));
                }}
              />
            </div>
            <div className="">
              <Input
                type="password"
                placehoder="Mật khẩu"
                // inputProps={{ ...register("password") }}
                label="Mật khẩu"
                setQuerySearch={(value: string) => {
                  setDataLoginForm((prev: any) => ({
                    ...prev,
                    password: value,
                  }));
                }}
              />
            </div>
            <div className="group-save">
              <div className="save">
                <CheckBox />
                <span>Lưu mật khẩu</span>
              </div>
              <a href="" target="_blank">
                Quên mật khẩu
              </a>
            </div>
            <Button color="primary" onClick={handleLoginForm}>
              Đăng nhập
            </Button>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Login;
