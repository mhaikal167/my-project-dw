import * as payTypes from '../constants/transactionConstant'
import { API } from "../../api/api";

const paymentPending = (payload) => ({
    type: payTypes.PAYMENT_PENDING,
    payload : payload,
})
export const paymentPendingRemove = () => ({
    type: payTypes.PAYMENT_PENDING_REMOVE,
})

export const getPaymentPending = (data) => {
    return function(dispatch){
        dispatch(paymentPending(data));
    }
}

const payment = () => ({
    type: payTypes.PAYMENT,
})

const paymentSuccess = (payload) => ({
    type: payTypes.PAYMENT_SUCCESS,
    payload: payload
})

const paymentFailed = (error) => ({
    type: payTypes.PAYMENT_FAILED,
    payload: error
})

export const paymentInitiate = (data,token) => {
    return function (dispatch) {
      dispatch(payment());
      API.post("/transaction", data,{
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type' : 'multipart/form-data'
        },
      })
        .then((response) => {
          setTimeout(() => {
            dispatch(paymentSuccess(response.data.data));
          },500)
        })
        .catch((error) => dispatch(paymentFailed(error.response.data.message)));
    };
  };