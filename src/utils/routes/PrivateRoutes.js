import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";



export function PrivateRouteUser({auth}) {
  if (auth.user?.role === "admin") {
    return <Navigate to="/admin" />;
  }else if(auth.user?.role !== "user"){
    return <Navigate to="/" />
  }
  return <Outlet />;
}
export function PublicRoute({auth}) {
    if (auth.user?.role === "admin") {
      return <Navigate to="/admin" />;
    }
    return <Outlet />;
  }

export function PrivateRouteAdmin({auth}) {
  if (auth.user?.role !== "admin") {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
