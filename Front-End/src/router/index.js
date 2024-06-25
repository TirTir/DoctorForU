import { createBrowserRouter, RouterProvider } from "react-router-dom";

import * as auth from "../pages/auth";
import * as common from "../pages/common";
import * as home from "../pages/home";
import * as hospital from "../pages/hospital";
//import { EmergencyHome }  from "../pages/emergency/EmergencyHome";
import * as emergency from "../pages/emergency";
import * as myPage from "../pages/myPage";
import * as certify from "../pages/certification";

export function Router() {
  const router = createBrowserRouter([
    { path: "*", element: <common.NotFound /> },
    { path: "/", element: <home.Main /> },
    { path: "auth/login", element: <auth.Login /> },
    { path: "auth/join", element: <auth.Join /> },
    // { path: "reservation", element: <hospital.Reservation /> },
    { path: "hospital-search/reservation", element: <hospital.QuickReservation /> },
    { path: "hospital-search/reservation/:hpid", element: <hospital.HospitalReservation /> },
    { path: "hospital-search", element: <hospital.HospitalSearch /> },
    { path: "hospital-search/:hpid", element: <hospital.HospitalDetail /> }, // :이 url 파람 -> 저걸로 hospital.HospitalDetail로 라우팅
    { path: "emergency-search", element: <emergency.EmergencyHome /> },
    { path: "mypage/:page", element: <myPage.MyPage /> },
    { path: "certify", element: <certify.Certification /> },
    { path: "certify/:page", element: <certify.Certification /> },
  ]);

  return <RouterProvider router={router} />;
}
