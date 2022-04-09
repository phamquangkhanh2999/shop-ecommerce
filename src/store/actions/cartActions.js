import actionTypes from "./actionType";
import { toast } from "react-toastify";

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

export const removeCart = (id) => (dispatch, getState) => {
  try {
    toast.success("Delete product successfully");
    dispatch({
      type: actionTypes.REMOVE_CART_SUCCESS,
      payload: id,
    });
    localStorage.setItem(
      "carts",
      JSON.stringify(getState().cartReducer.cartLists)
    );
  } catch (error) {
    toast.error("delete failed product");
    dispatch({
      type: actionTypes.REMOVE_CART_FAILURE,
    });
    console.log("delete failed error", error);
  }
};
