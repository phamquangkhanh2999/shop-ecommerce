import actionTypes from "../actions/actionType";
const initialState = {
  orderProducts: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ORDER_PRODUCT:
      return {
        ...state,
        orderProducts: [...state.orderProducts, action.payload],
      };
    default:
      return { ...state };
  }
};

export default orderReducer;
