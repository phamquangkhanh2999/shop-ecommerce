import actionTypes from "../actions/actionType";

const storage =
  localStorage.getItem("carts") !== null
    ? JSON.parse(localStorage.getItem("carts"))
    : [];

const initialState = {
  cartLists: storage,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART_ITEM:
      const cartItem = action.payload;
      const duplicate = state.cartLists.filter(
        (e) =>
          e.slug === cartItem.slug &&
          e.color === cartItem.color &&
          e.size === cartItem.size
      );
      if (duplicate.length > 0) {
        state.cartLists = state.cartLists.filter(
          (e) =>
            e.slug !== cartItem.slug ||
            e.color !== cartItem.color ||
            e.size !== cartItem.size
        );

        return {
          ...state,
          cartLists: [
            ...state.cartLists,
            {
              id: duplicate[0].id,
              slug: cartItem.slug,
              color: cartItem.color,
              size: cartItem.size,
              price: cartItem.price,
              quantity: cartItem.quantity + duplicate[0].quantity,
            },
          ],
        };
      } else {
        return {
          ...state,
          cartLists: [...state.cartLists, action.payload],
        };
      }
    case actionTypes.REMOVE_CART_SUCCESS:
      const id = action.payload;
      const carts = state.cartLists.filter((item) => item.id !== id);
      return {
        ...state,
        cartLists: carts,
      };
    case actionTypes.REMOVE_CART_FAILURE:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};
export default cartReducer;
