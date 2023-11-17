import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import MyPage from "../Pages/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MyPage/:userId" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
