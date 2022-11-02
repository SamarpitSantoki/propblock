import BuyRequest from "../pages/User/BuyRequest";
import MyLands from "../pages/User/MyLands";
import Profile from "../pages/User/Profile";
import RegisterLand from "../pages/User/RegisterLand";
//check AuthRoutes to understand how to declare routes
export const userRoutes = [
  { path: "profile", component: <Profile /> },
  { path: "buyrequest", component: <BuyRequest /> },
  { path: "mylands", component: <MyLands /> },
  { path: "registerland", component: <RegisterLand /> },
];
