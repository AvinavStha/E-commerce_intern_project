import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/auth/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RegisterComplete from "./pages/auth/RegisterComplete";

import { auth } from "./firebase";
import { useDispatch } from "react-redux";

const App = () => {

  const dispatch = useDispatch();
  //to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);
        dispatch({
          type:"LOGGED_IN_USER",
          payload: {
            email: user.email,
            token : idTokenResult.token,
          }
        })
      }
    });
    //cleanup
    return () => unsubscribe();
    }, []);

  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route
            exact
            path="/register/complete"
            element={<RegisterComplete />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
