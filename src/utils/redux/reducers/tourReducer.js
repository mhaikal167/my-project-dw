import * as tourTypes from "../constants/tourConstant";

const INITIAL_STATE_TOUR = {
  loading: false,
  tours: [],
  tour: null,
  error: null,
};

export const tourReducer = (state = INITIAL_STATE_TOUR, action) => {
  const { type, payload } = action;
  switch (type) {
    // GET ALL TOURS
    case tourTypes.TOUR_FETCH:
      return {
        ...state,
        loading: true,
      };
    case tourTypes.TOUR_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        tours: payload,
      };
    case tourTypes.TOUR_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    // GET TOUR BY ID
    case tourTypes.GET_TOUR:
      return {
        ...state,
        loading: true,
      };
    case tourTypes.GET_TOUR_SUCCESS:
      return {
        ...state,
        loading: false,
        tour: payload,
      };
    case tourTypes.GET_TOUR_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
      case tourTypes.REMOVE_TOUR:
        return {
          ...state,
          loading: false,
          tour: null,
        };
    // ADD TOUR
    case tourTypes.TOUR_ADD:
      return {
        ...state,
        loading: true,
      };
    case tourTypes.TOUR_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        tour: payload,
      };
    case tourTypes.TOUR_ADD_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
