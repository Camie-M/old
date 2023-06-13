import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Laberest from "./../../assets/Laberest.png";
import folderImage from "./../../assets/folderImage.svg";

import { FormContainer } from "./../Login/styles";
import { HomeContainer, HomeImage } from "./../HomePage/styles";

function SignupPage() {
  let history = useHistory();
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const baseUrl = "http://localhost:3003/user";

  const handleSignUp = async (event) => {
    event.preventDefault();

    const body = {
      name: name,
      email: email,
      nickname: nickname,
      password: password,
    };

    try {
      const response = await axios.post(`${baseUrl}/signup`, body);
      localStorage.setItem("token", response.data.token);
      history.push("/feed");
    } catch (e) {
      alert("Falha no cadastro");
    }
  };

  return (
    <HomeContainer>
      <HomeImage src={folderImage} />

      <FormContainer>
        <img src={Laberest} alt={"Laberest Logo"} />

        <form onSubmit={handleSignUp}>
          <label htmlFor="name">Nome</label>
          <input
            value={name}
            id="name"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">E-mail</label>
          <input
            value={email}
            id="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="nickname">Nome de usuário</label>
          <input
            value={nickname}
            id="nickname"
            type="text"
            required
            onChange={(e) => setNickname(e.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <input
            value={password}
            id="password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Cadastrar</button>
        </form>
      </FormContainer>
    </HomeContainer>
  );
}

export default SignupPage;
