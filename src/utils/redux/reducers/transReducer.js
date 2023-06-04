import * as payTypes from '../constants/transactionConstant'
const INITIAL_STATE_TRANSACTION = {
  loading: false,
  paymentPen: null,
  payment:[],
  error: null,
};

export const transReducer = (state = INITIAL_STATE_TRANSACTION, action) => {
  const { type, payload } = action;
  switch (type) {
    // SET PAYMENT PENDING
    case payTypes.PAYMENT_PENDING:
      return {
        ...state,
        paymentPen:payload
      };
      case payTypes.PAYMENT_PENDING_REMOVE:
        return {
          ...state,
          paymentPen:null
        };
    // SET PAYMENT
    case payTypes.PAYMENT:
        return {
          ...state,
          loading: true,
        };
    case payTypes.PAYMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          payment : payload
        };
    case payTypes.PAYMENT_FAILED:
        return {
          ...state,
          loading: false,
          error: payload
        };
    
    default:
      return state;
  }
};
