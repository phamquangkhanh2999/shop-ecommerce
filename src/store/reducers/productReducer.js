import actionTypes from "../actions/actionType";

const initialState = {
  productLists: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_ALL:
      return {
        ...state,
        productLists: action.payload,
      };
    default:
      return { ...state };
  }
};

export default productReducer;
