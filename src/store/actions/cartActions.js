import actionTypes from "./actionType";

export const addCartItem = (data) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_CART_ITEM,
    payload: data,
  });
  localStorage.setItem(
    "carts",
    JSON.stringify(getState().cartReducer.cartLists)
  );
};
