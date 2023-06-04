import React from "react";
import * as COMPONENT from "@Components";
import * as ELEMENT from "@Views";
import { Wallpaper2 } from "@Assets/images";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { routeAdmin } from "./utils/routes/routes";
import {
  PrivateRouteAdmin,
  PrivateRouteUser,
  PublicRoute,
} from "./utils/routes/PrivateRoutes";

import { checkAuthInitiate } from "./utils/redux/actions/authAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth);
  const d = useDispatch();

  useEffect(() => {
    d(checkAuthInitiate(auth.token));
  }, [d, auth?.token]);
  return (
    <>
      <BrowserRouter>
        <COMPONENT.Navbar wall={Wallpaper2} />
        <Routes>
        <Route element={<PublicRoute auth={auth}/>}>
            <Route path="/" element={<ELEMENT.Home />} />
            <Route path="/detail-tour/:id" element={<ELEMENT.TourDetail />} />
          </Route>
          <Route element={<PrivateRouteAdmin auth={auth}/>}>
              {routeAdmin.map((routes,idx) => {
                return <Route key={idx} path={routes.path} element={routes.element} />;
              })}
            </Route>
          <Route element={<PrivateRouteUser auth={auth}/>}>
            <Route path="/payment" element={<ELEMENT.Payment />} />
            <Route path="/payment-pending" element={<ELEMENT.PaymentPen />} />
            <Route path="/profile" element={<ELEMENT.Profile />} />
          </Route>
          {/* <Route
            path="/detail-tour/:id"
            element={
              !data?.isUser && !data?.isAdmin ? (
                <PublicRoute>
                  <ELEMENT.TourDetail />
                </PublicRoute>
              ) : (
                <PrivateRoute user={data?.isUser} admin={data?.isAdmin}>
                  <ELEMENT.TourDetail />
                </PrivateRoute>
              )
            }
          /> */}
          {/* <Route
            path="/"
            element={
              // data?.isUser ? (
              //   <ELEMENT.Home isHome={true} />
              // ) : data?.isAdmin ? (
              //   <ELEMENT.HomeAdmin />
              // ) : (
              <ELEMENT.Home isHome={true} />
              // )
            }
          /> */}
        </Routes>
        <COMPONENT.Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
