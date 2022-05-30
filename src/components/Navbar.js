import React, { useState } from "react";
import { Menu ,Row,Col} from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  UserAddOutlined,
  SettingOutlined,
  LogoutOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import logo from '../images/drinkitall.png'

const { SubMenu, Item } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

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
    <Row justify="space-between">
      <Col span={6} className="logo">
         <img src={logo} alt="not found"/> DrinkItaLL
      </Col>

      <Col span={18}>
        <Menu onClick={handleClick} mode="horizontal" selectedKeys={[current]}>
          <Item key="home" icon={<AppstoreOutlined />}>
            <Link to="/">Home</Link>
          </Item>

          {!user && (
            <Item key="register" icon={<UserAddOutlined />} className="float-right">
              <Link to="/register">Register</Link>
            </Item>
          )}
          {!user && (
            <Item key="login" icon={<UserOutlined />} className="float-right">
              <Link to="/login">Login</Link>
            </Item>
          )}
          {user && (
            <SubMenu
              title={user.email && user.email.split('@')[0]} //name@gmail.com ['name', 'gmail.com'] 
              icon={<SettingOutlined />}
              className="float-right"
            >
              <Item key="setting:1">Option 1</Item>
              <Item key="setting:2">Option 2</Item>
              <Item icon={<LogoutOutlined />} onClick={logout}>
                Logout
              </Item>
            </SubMenu>
          )}
          <Item key="add-to-cart"  className="float-right">
            <Link to="/add-to-cart"><ShoppingCartOutlined /></Link>
          </Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Navbar;
