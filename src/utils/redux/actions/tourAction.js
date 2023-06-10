import Swal from "sweetalert2";
import { API } from "../../api/api";
import * as tourTypes from "../constants/tourConstant";

// get all tour
const tourFetch = () => ({
  type: tourTypes.TOUR_FETCH,
});

const tourFetchSuccess = (payload) => ({
  type: tourTypes.TOUR_FETCH_SUCCESS,
  payload: payload,
});

const tourFetchFailed = (error) => ({
  type: tourTypes.TOUR_FETCH_FAILED,
  payload: error,
});

export const getTours = () => {
  return function (dispatch) {
    dispatch(tourFetch());
    API.get("/tours")
      .then((response) => {
        dispatch(tourFetchSuccess(response?.data?.data));
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Trip Fetch successfully",
        });
      })
      .catch((error) =>{
        dispatch(tourFetchFailed(error?.response?.data?.message))
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "warning",
          title: "Trip Fetch failure",
        });
  });
  };
};

// add tour
const tourAdd = () => ({
  type: tourTypes.TOUR_ADD,
});

const tourAddSuccess = (payload) => ({
  type: tourTypes.TOUR_ADD_SUCCESS,
  payload: payload,
});

const tourAddFailed = (error) => ({
  type: tourTypes.TOUR_ADD_FAILED,
  payload: error,
});

export const tourAddInitiate = (data, token) => {
  return function (dispatch) {
    dispatch(tourAdd());

    API.post("/tour", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Trip Add successfully",
        });
        setTimeout(() => {
          dispatch(tourAddSuccess(response.data.data));
        }, 500);
      })
      .catch((error) => {
        dispatch(tourAddFailed(error.response.data.message));
        const Toast = Swal.mixin({
          position: "center",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "warning",
          title: "Trip Add Failed",
        });
      });
  };
};

// update tour
const updateTour = () => ({
  type: tourTypes.UPDATE_TOUR,
});

const updateTourSuccess = (payload) => ({
  type: tourTypes.UPDATE_TOUR_SUCCESS,
  payload: payload,
});

const updateTourFailed = (error) => ({
  type: tourTypes.UPDATE_TOUR_FAILED,
  payload: error,
});

export const updateTourInitiate = (id, data, token) => {
  return function (dispatch) {
    dispatch(updateTour());
    API.patch(`/tour/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch(updateTourSuccess(response.data.data));
      })
      .catch((error) =>
        dispatch(updateTourFailed(error.response.data.message))
      );
  };
};

// get tour by id

const getTour = () => ({
  type: tourTypes.GET_TOUR,
});

const getTourSuccess = (payload) => ({
  type: tourTypes.GET_TOUR_SUCCESS,
  payload: payload,
});

const getTourFailed = (error) => ({
  type: tourTypes.GET_TOUR_FAILED,
  payload: error,
});

export const removeTour = () => ({
  type: tourTypes.REMOVE_TOUR,
});

export const getTourInitiate = (id) => {
  return function (dispatch) {
    dispatch(getTour());

    API.get(`/tour/${id}`)
      .then((response) => {
        dispatch(getTourSuccess(response.data.data));
      })
      .catch((error) => dispatch(getTourFailed(error.response.data.message)));
  };
};
