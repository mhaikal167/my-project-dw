import { API } from "../../api/api";
import * as countryTypes from "../constants/countryConstant";
import Swal from "sweetalert2";

const getCountry = () => ({
    type: countryTypes.GET_COUNTRY,
  });
  
  const getCountrySuccess = (payload) => ({
    type: countryTypes.GET_COUNTRY_SUCCESS,
    payload: payload,
  });
  
  const getCountryFailed = (error) => ({
    type: countryTypes.GET_COUNTRY_FAILED,
    payload: error,
  });
  
    export const getCountries = () => {
      return function (dispatch) {
        dispatch(getCountry());
        API.get("/countries")
          .then((response) => {
            console.log(response, "ini response");
            dispatch(getCountrySuccess(response.data.data));
          })
          .catch((error) => dispatch(getCountryFailed(error.response.data.message)));
      };
    };

    const addCountry = () => ({
      type: countryTypes.ADD_COUNTRY,
    });
    
    const addCountrySuccess = (payload) => ({
      type: countryTypes.ADD_COUNTRY_SUCCESS,
      payload: payload,
    });
    
    const addCountryFailed = (error) => ({
      type: countryTypes.ADD_COUNTRY_FAILED,
      payload: error,
    });
    
      export const addCountries = (data,token) => {
        return function (dispatch) {
          dispatch(addCountry());
          console.log(data,token);
          API.post("/country",data,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              dispatch(addCountrySuccess(response.data.data));
              if (response.status === 200){
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
                title: 'Country Add successfully'
              })
            }
            })
            .catch((error) => {
              dispatch(addCountryFailed(error.response.data.message))
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
                icon: 'warning',
                title: "Country already exist"
              })
            }
              );
        };
      };