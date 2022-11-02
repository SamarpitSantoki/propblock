import BuyRequest from "../pages/user/BuyRequest";
import MyLands from "../pages/user/MyLands";
import Profile from "../pages/user/Profile";
import RegisterLand from "../pages/user/RegisterLand";
//check AuthRoutes to understand how to declare routes
export const userRoutes = [
  { path: "profile", component: <Profile /> },
  { path: "buyrequest", component: <BuyRequest /> },
  { path: "mylands", component: <MyLands /> },
  { path: "registerland", component: <RegisterLand /> },
];
