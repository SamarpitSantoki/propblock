import { Routes, Route, Outlet } from "react-router-dom";
import Login from "../pages/auth/Login";
import HomePage from "../pages/HomePage";
import { authRoutes } from "./AuthRoutes";
import { marketRoutes } from "./MarketRoutes";

function index() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="auth" element={<Outlet />}>
        {authRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Route>
      {marketRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
}
export default index;
