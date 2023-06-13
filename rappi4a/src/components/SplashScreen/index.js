import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Background, Logo } from "./styles";
import logo from "../../assets/logo_white.svg";

function SplashScreen() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => renderApp(), 2000);
  }, []);

  const renderApp = () => {
    if (localStorage.getItem("rappi4")) {
      history.replace("/feed");
    } else {
      history.replace("/login");
    }
  };

  return (
    <Background>
      <Logo src={logo} alt="rappi4 logo" />
    </Background>
  );
}

export default SplashScreen;
