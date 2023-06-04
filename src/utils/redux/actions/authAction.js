import { API } from "../../api/api";
import * as authTypes from "../constants/authConstant";
import Swal from "sweetalert2";

// LOGIN ACTION

const loginStart = () => ({
  type: authTypes.LOGIN_START,
});

const loginSuccess = (payload) => ({
  type: authTypes.LOGIN_SUCCESS,
  payload: payload,
});

const loginFailed = (error) => ({
  type: authTypes.LOGIN_FAILED,
  payload: error,
});

const logout = () => ({
  type: authTypes.LOGOUT_USER,
});

export const loginInitiate = (data) => {
  return function (dispatch) {
    dispatch(loginStart());
    API.post("/login", data)
      .then((response) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })

        dispatch(loginSuccess(response.data.data.token));
      })
      .catch((error) => dispatch(loginFailed(error.response.data.message)));
  };
};

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logout());
        const Toast = Swal.mixin({
          position: 'center',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Logout successfully'
        })
};
}
// REGISTER ACTION
const registerStart = () => ({
  type: authTypes.REGISTER_START,
});

const registerSuccess = (payload) => ({
  type: authTypes.REGISTER_SUCCESS,
  payload: payload,
});

const registerFailed = (error) => ({
  type: authTypes.REGISTER_FAILED,
  payload: error,
});

export const registerInitiate = (data) => {
  return function (dispatch) {
    dispatch(registerStart());
    API.post("/register", data)
      .then((response) => {
        setTimeout(() => {
          dispatch(registerSuccess(response.data.data.token));
          window.location.reload()
        },500)
      })
      .catch((error) => dispatch(registerFailed(error.response.data.message)));
  };
};

// CHECK AUTH ACTION
const checkAuth = () => ({
  type: authTypes.SET_AUTH,
});

const checkAuthSuccess = (payload) => ({
  type: authTypes.SET_AUTH_SUCCESS,
  payload: payload,
});

const checkAuthFailed = (error) => ({
  type: authTypes.SET_AUTH_FAILED,
  payload: error,
});

export const checkAuthInitiate = (token) => {
  return function (dispatch) {
    dispatch(checkAuth());

    API.get("/check-auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response, "ini response");
        dispatch(checkAuthSuccess(response.data.data));
      })
      .catch((error) => dispatch(checkAuthFailed(error.response.data.message)));
  };
};
