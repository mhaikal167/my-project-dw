import * as payTypes from '../constants/transactionConstant'
import { API } from "../../api/api";
import Swal from 'sweetalert2';


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

export const paymentInitiate = (data,tokens) => {
    return function (dispatch) {
      dispatch(payment());
      console.log(data,tokens,"ini data token");
     const response = API.post("/transaction", data,{
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      })
      const token = response.data.data.token
      console.log(token,"ini token");
      window.snap.pay(token, {
        onSuccess: function(result){
          Swal.fire(
            'Paid Success', 
            result,
            'success'
          )
        },
        onPending: function(result){
          Swal.fire(
            'Paid Success', 
            result,
            'success'
          )
        },
        onError: function(result){
          Swal.fire(
            'Cancelled',
            result,
            'error'
          )
        },
        onClose: function(){
          Swal.fire(
            'Cancelled',
            'Your Book has been canceled :)',
            'error'
          )
        }
      })
  };
}
  const getTrans = () => ({
    type: payTypes.GET_TRANSACTION,
})

const getTransSuccess = (payload) => ({
    type: payTypes.GET_TRANSACTION_SUCCESS,
    payload: payload
})

const getTransFailed = (error) => ({
    type: payTypes.GET_TRANSACTION_FAILED,
    payload: error
})

export const getTransInitiate = () => {
    return function (dispatch) {
     
      dispatch(getTrans());
      API.get("/transactions")
        .then((response) => {
          setTimeout(() => {
            dispatch(getTransSuccess(response.data.data));
          },500)
        })
        .catch((error) => dispatch(getTransFailed(error.response.data.message)));
    };
  };

  const updateTrans = () => ({
    type: payTypes.UPDATE_TRANSACTION,
})

const updateTransSuccess = (payload) => ({
    type: payTypes.UPDATE_TRANSACTION_SUCCESS,
    payload : payload,
})
const updateTransFailed = (error) => ({
    type: payTypes.UPDATE_TRANSACTION_FAILED,
    payload :error,
})

export const updateTransInitiate = (id,data,token) => {
  
    return function (dispatch) {
      dispatch(updateTrans());
      API.patch(`/transaction-update/${id}`,data,{
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
        .then((response) => {
          setTimeout(() => {
            dispatch(updateTransSuccess(response.data.data));
          },500)
        })
        .catch((error) => {
            dispatch(updateTransFailed(error.response.data.message))
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
                title: 'Failed to Change Status'
              })
        });
    };
  };