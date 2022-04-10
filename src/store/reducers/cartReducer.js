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
    case actionTypes.UPDATE_CART_ITEM:
      const newCart = action.payload;
      const cart = state.cartLists.filter(
        (e) =>
          e.slug === newCart.slug &&
          e.color === newCart.color &&
          e.size === newCart.size
      );
      if (cart.length > 0) {
        state.cartLists = state.cartLists.filter(
          (e) =>
            e.slug !== newCart.slug ||
            e.color !== newCart.color ||
            e.size !== newCart.size
        );
        return {
          ...state,
          cartLists: [
            ...state.cartLists,
            {
              id: cart[0].id,
              slug: newCart.slug,
              color: newCart.color,
              size: newCart.size,
              price: newCart.price,
              quantity: newCart.quantity,
            },
          ],
        };
      }
      break;
    default:
      return { ...state };
  }
};
export default cartReducer;
