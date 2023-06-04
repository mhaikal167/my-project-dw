import { API } from "../../api/api";
import * as countryTypes from "../constants/countryConstant";

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