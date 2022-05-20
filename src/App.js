import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RegisterComplete from "./pages/auth/RegisterComplete";
import {Layout} from 'antd';
import FooterPage from "./components/FooterPage";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Header style={{background:'white'}}>
            <Navbar />
          </Header>
          
          <ToastContainer />
          <Content style={{ padding: '0 50px',background:'white' }}>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/register/complete" element={<RegisterComplete />}></Route>
          </Routes>
          </Content>
          <Footer style={{background:'red'}}>
            <FooterPage/>
          </Footer>
        </Layout>
      </Router>
    </>
  );
}

export default App;
