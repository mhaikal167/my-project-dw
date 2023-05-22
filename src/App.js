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

function PrivateRoute({ user, admin, children }) {
  if (!user || admin) {
    return <Navigate to="/" replace />;
  }
  return children;
}
function PublicRoute({ children }) {
  return children;
}

function ProtectRoute({ user }) {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

function App() {
  const data = JSON.parse(localStorage.getItem("dataLogin"));
  return (
    <>
      <BrowserRouter>
        <COMPONENT.Navbar wall={Wallpaper2} />
        <Routes>
          {/* <Route
            path="/detail-tour/:id"
            element={
              !data?.isUser && !data?.isAdmin ? 
              <PublicRoute>
                 <ELEMENT.TourDetail />
              </PublicRoute>
              :
              <PrivateRoute user={data?.isUser} admin={data?.isAdmin}>
                <ELEMENT.TourDetail />
              </PrivateRoute>
            }
          /> */}
          <Route element={<ProtectRoute user={data?.isAdmin} />}>
            <Route path="/trip" element={<ELEMENT.IncomeTrip />} />
            <Route path="/admin" element={<ELEMENT.HomeAdmin />} />
            <Route path="/add-trip" element={<ELEMENT.AddTrip />} />
          </Route>

          <Route element={<ProtectRoute user={data?.isUser} />}>
            <Route
              path="/payment"
              element={<ELEMENT.Payment />}
            />
            <Route
              path="/payment-pending"
              element={<ELEMENT.PaymentPen />}
            />
            <Route
              path="/profile"
              element={<ELEMENT.Profile />}
            />
            </Route>
          <Route
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
          />
          <Route
            path="/"
            element={
              data?.isUser ? (
                <ELEMENT.Home isHome={true} />
              ) : data?.isAdmin ? (
                <ELEMENT.HomeAdmin />
              ) : (
                <ELEMENT.Home isHome={true} />
              )
            }
          />

          {/* <Route
            path="/trip"
            element={
              <PrivateRoute user={data?.isAdmin}>
                <ELEMENT.IncomeTrip />
              </PrivateRoute>
            }
          /> */}
          {/* <Route
            path="/payment"
            element={
              data?.isUser ? (
                <PrivateRoute user={data?.isUser}>
                  <ELEMENT.Payment wall={Wallpaper2} />
                </PrivateRoute>
              ) : data?.isAdmin ? (
                <ELEMENT.HomeAdmin />
              ) : (
                <ELEMENT.Home isHome={true} />
              )
            }
          /> */}
        </Routes>
        <COMPONENT.Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
