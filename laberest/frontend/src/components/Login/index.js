import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Laberest from "./../../assets/Laberest.png";
import { FormContainer } from "./styles.js";

const baseUrl = "http://localhost:3003/user";

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToSignUpPage = () => {
    history.push("/signup");
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${baseUrl}/login`, body);
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
      console.log(response.data.token);
      history.push("/feed");
    } catch (e) {
      alert("Falha no login");
    }
  };

  return (
    <FormContainer>
      <img src={Laberest} alt={"Laberest Logo"} />

      <form onSubmit={handleLogin}>
        <label htmlFor="email">E-mail</label>
        <input
          value={email}
          id="email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <input
          value={password}
          id="password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Entrar</button>
      </form>
      <p>
        Não tem conta? <span onClick={goToSignUpPage}>Cadastre-se!</span>
      </p>
    </FormContainer>
  );
}

export default Login;
