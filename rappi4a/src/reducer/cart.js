export const initialState = {
  cart: [],
  restaurantIdentification: "",
};

const cart = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const productInCart = state.cart.findIndex((product) => {
        return product.id === action.product.id;
      });

      let newCart;

      if (productInCart === -1) {
        newCart = [...state.cart, { ...action.product, quantity: 1 }];
      } else {
        newCart = state.cart.map((product) => {
          if (product.id === action.product.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
      }
      return {
        ...state,
        cart: newCart,
        restaurantIdentification: action.restaurantId,
      };
    case "REMOVE_FROM_CART": {
      const newCart = state.cart.filter((product) => {
        return product.id !== action.productId;
      });
      return { ...state, cart: newCart };
    }

    default:
      return state;
  }
};

export default cart;
