import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route,useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/UserPanel/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RegisterComplete from "./pages/auth/RegisterComplete";
import {Link} from 'react-router-dom';
import {Layout,Breadcrumb} from 'antd';
import FooterPage from "./components/FooterPage";
import AddToCart from "./pages/UserPanel/AddToCart";
import {breadcrumbNameMap} from './components/BreadCrumbItem'
import { AdminLoginPage } from "./pages/AdminPanel/AdminLoginPage";
import { AdminPage } from './pages/AdminPanel/AdminPage';

const { Header, Content, Footer} = Layout;

function App() {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  if(pathSnippets[0] === "admin"){
    return(
        <Layout style={{height:"90vh"}}>
          <Content>
            <Routes>
              <Route path="/admin" element={<AdminLoginPage/>}></Route>
              <Route path="/admin/admin-page" element={<AdminPage/>}></Route>
            </Routes>
          </Content>
        </Layout>
    )
  }
  
  return (
    <>
        <Layout>
          <Header style={{background:'white'}}>
            <Navbar />
          </Header>
          
          <Breadcrumb style={{ padding: '0 50px',background:'white' }}>{breadcrumbItems}</Breadcrumb>
          <ToastContainer/>
          <Content style={{ padding: '0 50px',background:'white' }}>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/register" element={<Register />}></Route>
              <Route exact path="/register/complete" element={<RegisterComplete />}></Route>
              <Route exact path="/add-to-cart" element={<AddToCart/>}></Route>
            </Routes>
          </Content>
          
          <Footer style={{background:'red'}}>
            <FooterPage/>
          </Footer>
        </Layout>
    </>
  );
}

export default App;
