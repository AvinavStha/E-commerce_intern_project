import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  UserAddOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const { SubMenu, Item } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector();

  const handleClick = (e) => {
    // console.log(e.key);

    setCurrent(e.key);
  };

  const logout = () => {
    signOut(auth);
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/login");
  };

  return (
    <Menu onClick={handleClick} mode="horizontal" selectedKeys={[current]}>
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>

      <Item key="register" icon={<UserAddOutlined />} className="float-right">
        <Link to="/register">Register</Link>
      </Item>

      <Item key="login" icon={<UserOutlined />} className="float-right">
        <Link to="/login">Login</Link>
      </Item>

      <SubMenu title="Username" icon={<SettingOutlined />}>
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
        <Item icon={<LogoutOutlined />} onClick={logout}>
          Logout
        </Item>
      </SubMenu>
    </Menu>
  );
};

export default Navbar;
