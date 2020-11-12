const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  let cart = Object.assign([], state.cart);
  switch (action.type) {
    case 'ADD_TO_CART':
      let alreadyExists = false;
      cart.forEach((item) => {
        if (item.product.id === action.payload.product.id) {
          alreadyExists = true;
          item.quantity += parseInt(action.payload.quantity);
        }
      });

      if (!alreadyExists) {
        cart.push(action.payload);
      }

      return {
        ...state,
        cart: cart
      };
    case 'UPDATE_CART_QUANTITY':
      cart.forEach((item) => {
        if (item.product.id === action.payload.productId) {
          item.quantity = parseInt(action.payload.quantity);
        }
      });
      return {
        ...state,
        cart: cart
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: cart.filter(item => item.product.id !== action.payload.productId)
      };
    default:
      return state;
  }
};

export default cartReducer;