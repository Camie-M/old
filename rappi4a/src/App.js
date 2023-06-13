import React, { useReducer, useContext } from "react";

import Router from "./components/Router";
import GlobalStyle from "./styles/globals";

import cart, { initialState } from "./reducer/cart";
import CartContext from "./context/CartContext";

function App() {
  const [state, dispatch] = useReducer(cart, initialState);
  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        dispatch: dispatch,
        restaurantIdentification: state.restaurantIdentification,
      }}
    >
      <div>
        <GlobalStyle />
        <Router />
      </div>
    </CartContext.Provider>
  );
}

export default App;
