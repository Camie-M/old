import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import HomePage from "./../../assets/homepage.svg";
import Avatar from "./../../assets/avatar.svg";
import Cart from "./../../assets/shopping_cart.svg";
import HomePageClicked from "./../../assets/homepage_clicked.svg";
import AvatarClicked from "./../../assets/avatar_clicked.svg";
import CartClicked from "./../../assets/shopping_cart_clicked.svg";

import { FooterBox } from "./styles";

function Footer() {
  let history = useHistory();
  const location = useLocation();

  return (
    <FooterBox>
      <img 
        src={location.pathname === "/feed" ? HomePageClicked : HomePage}
        alt="Home" 
        onClick={() => history.push("/feed")}
      />
      <img 
        src={location.pathname === "/cart" ? CartClicked : Cart}
        alt="Carrinho" 
        onClick={() => history.push("/cart")}
      />
      <img 
        src={location.pathname === "/profile" ? AvatarClicked : Avatar}
        alt="Perfil" 
        onClick={() => history.push("/profile")}
    />
    </FooterBox>
  );
}

export default Footer;
