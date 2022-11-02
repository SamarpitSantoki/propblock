import ApprovedLands from "../pages/gov/ApprovedLands";
import BuyingReq from "../pages/gov/BuyingReq";
import Profile from "../pages/gov/Profile";
import ReqLand from "../pages/gov/ReqLand";
import ReqUser from "../pages/gov/ReqUser";

//check AuthRoutes to understand how to declare routes
export const govRoutes = [
  { path: "profile", component: <Profile /> },
  { path: "approvedlands", component: <ApprovedLands /> },
  { path: "buyingrequest", component: <BuyingReq /> },
  { path: "landrequest", component: <ReqLand /> },
  { path: "userrequest", component: <ReqUser /> },
];
