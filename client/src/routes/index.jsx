import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { authRoutes } from "./AuthRoutes";
import { govRoutes } from "./GovRoutes";
import { marketRoutes } from "./MarketRoutes";
import { userRoutes } from "./UserRoutes";
import User from "../pages/user";
import Government from "../pages/gov";
function index() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<User />}>
        {userRoutes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.component} />
          );
        })}
      </Route>
      <Route path="/gov" element={<Government />}>
        {govRoutes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.component} />
          );
        })}
      </Route>

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
