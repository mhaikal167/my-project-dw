import * as countryTypes from "../constants/countryConstant";

const INITIAL_STATE_COUNTRY = {
  loading: false,
  country: [],
  error: null,
};

export const countryReducer = (state = INITIAL_STATE_COUNTRY, action) => {
  const { type, payload } = action;
  switch (type) {
    // GET ALL COUNTRY
    case countryTypes.GET_COUNTRY:
      return {
        ...state,
        loading: true,
      };
    case countryTypes.GET_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        country: payload,
      };
    case countryTypes.GET_COUNTRY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
