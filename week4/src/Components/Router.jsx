import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import MyPage from "../Pages/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
