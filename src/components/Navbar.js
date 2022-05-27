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

const items = [
  {
    label: (
      <Link to="/">Home</Link>
    ),
    key: 'home',
    icon: <AppstoreOutlined />,
  },
  {
    label: (
      <Link to="/register">Register</Link>
    ),
    key: 'register',
    icon: <UserAddOutlined />,
  },
  {
    label: (
      <Link to="/login">Login</Link>
    ),
    key: 'login',
    icon: <UserOutlined />,
  },
  {
    label: 'Username',
    key: 'SubMenu',
    children: [
      {
        label: 'Option 1',
        key: 'setting:1',
      },
      {
        label: 'Option 2',
        key: 'setting:2',
      },
    ],   
  },
  {
    label: (
      <Link to="/add-to-cart"><ShoppingCartOutlined /></Link>
    ),
    key: 'add-to-cart',
  },
];

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
        <Menu onClick={handleClick} mode="horizontal" selectedKeys={[current]} items={items}/>
      </Col>
    </Row>
  );
};

export default Navbar;
