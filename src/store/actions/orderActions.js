import actionTypes from "./actionType";

export const orderProduct = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.ORDER_PRODUCT,
    payload: data,
  });
  localStorage.removeItem("carts");
};
