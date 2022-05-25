import React, { useState } from "react";
import { Col, Menu, Row } from "antd";
import logo from "../images/drinkitall.png";
import {
  AppstoreOutlined,
  UserOutlined,
  UserAddOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    // console.log(e.key);

    setCurrent(e.key);
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

          <Item key="register" icon={<UserAddOutlined />} className="float-right">
            <Link to="/register">Register</Link>
          </Item>

          <Item key="login" icon={<UserOutlined />} className="float-right">
            <Link to="/login">Login</Link>
          </Item>

          <SubMenu title="Username" key="username">
            <Item key="setting:1">Option 1</Item>
            <Item key="setting:2">Option 2</Item>
          </SubMenu>

          <Item key="add-to-cart" className="float-left">
            <Link to="/add-to-cart"><ShoppingCartOutlined /></Link>
          </Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Navbar;
