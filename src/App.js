import { Wallpaper2 } from "@Assets/images";
import * as COMPONENT from "@Components";
import * as ELEMENT from "@Views";
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import {
  PrivateRouteAdmin,
  PrivateRouteUser,
  PublicRoute,
} from "./utils/routes/PrivateRoutes";
import { routeAdmin } from "./utils/routes/routes";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthInitiate } from "./utils/redux/actions/authAction";

function App() {
  const auth = useSelector((state) => state.auth);
  const d = useDispatch();

  useEffect(() => {
    if(auth?.token){
      d(checkAuthInitiate(auth.token));
    }
  }, [d, auth?.token]);
  return (
    <>
        <COMPONENT.Navbar wall={Wallpaper2} />
        <Routes>
          <Route path="*" element={<ELEMENT.NotFound/>}/>
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
            {/* <Route path="/payment" element={<ELEMENT.Payment />} /> */}
            <Route path="/payment" element={<ELEMENT.PaymentPen />} />
            <Route path="/profile" element={<ELEMENT.Profile />} />
          </Route>
        </Routes>
        <COMPONENT.Footer />
       
        
    </>
  );
}
export default App;
