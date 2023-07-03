import { useState, useEffect } from "react";
import img from "./../../assets/images/login.png";
import "./Layout.scss";
import ButtonDropDown from "../../component/ButtonDropDown/ButtonDropDown";
import { Outlet, useNavigate } from "react-router-dom";
import { navbarLists } from "../../types/general";
import { IconMenu, IconNoData } from "../../assets/Icon";
import { optionDropdownAccount } from "../../types/consts/layout";
import { useDispatch, useSelector } from "react-redux";
import { authAccountSelector } from "../../data/redux/selectors/auth";
import { authApis } from "../../data/apis/auth";
import { authLogin } from "../../data/redux/actions/auth";

function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSizeBar, setShowSizeBar] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("dashboard");
  const [title, setTitle] = useState<string>("dashboard");

  const account = useSelector(authAccountSelector);
  const id = localStorage.getItem("userId");

  const handleGetUser = async () => {
    try {
      const res: any = await authApis.getUser(id);
      if (res) {
        dispatch(authLogin({ isAuthenticated: true, account: res.data.data }));
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div className="layout__wrapper">
      <nav
        className={`layout__navbar ${
          showSizeBar ? "navbar-show" : "navbar-hidden"
        }`}
      >
        <div
          className={`navbar__header ${
            showSizeBar ? "navbar__header-show" : "navbar__header-hidden"
          }`}
        >
          {showSizeBar && (
            <div className="navbar__header_logo">
              <div className="logo"></div>
            </div>
          )}

          <span
            onClick={() => setShowSizeBar((prev) => !prev)}
            className={showSizeBar ? "rotate" : ""}
          >
            <IconMenu />
          </span>
        </div>
        <div className="navbar__body">
          <ul>
            {navbarLists?.map((item, index) => (
              <li
                key={`nav-${index}`}
                className={`${activeNav == item.pathName ? "active" : ""} ${
                  showSizeBar ? "navbar__body-show" : "navbar__body-hidden"
                }`}
                onClick={() => {
                  setActiveNav(item.pathName);
                  setShowSizeBar(true);
                  setTitle(item.name);
                  navigate(item.pathName, { replace: true });
                }}
              >
                <span>{item.icon}</span>
                {showSizeBar && (
                  <span className="navbar__name">{item.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div
        className="layout__container"
        style={showSizeBar ? { marginLeft: "240px" } : { marginLeft: "60px" }}
      >
        <div className="layout__inner">
          <header className="layout__header">
            <div className="layout__header_title">
              <h6>{title}</h6>
            </div>
            <div className="layout__header_info">
              <div className="img">
                <img src={img} alt="" />
              </div>
              <ButtonDropDown
                options={optionDropdownAccount}
                onClick={(value) => {
                  if (value?.value == "CLEAR") {
                    localStorage.removeItem("TOKEN_DA");
                    window.location.reload();
                  }
                }}
                name={account?.fullname}
                color="none"
              />
            </div>
          </header>
          <body className="layout__body">
            <Outlet />
          </body>
        </div>
      </div>
    </div>
  );
}

export default Layout;
