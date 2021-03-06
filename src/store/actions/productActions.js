import actionTypes from "./actionType";
import productData from "../../data/products/products";

export const getAllProduct = () => async (dispatch) => {
  const data = productData.getAllProducts();
  dispatch({
    type: actionTypes.GET_PRODUCT_ALL,
    payload: data,
  });
};
