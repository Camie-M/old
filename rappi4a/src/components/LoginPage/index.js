import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { login } from "../../functions/axios";
import {
  PageContainer,
  Logo,
  MainContent,
  Tittle,
  Button,
  Link,
  InputBorder,
  ShowPasswordIcon,
  Label
} from "./../../styles/forms";
import logo from "../../assets/logo_colored.svg";
import visible from "../../assets/password_open.svg";
import noVisible from "../../assets/password.svg";

function LoginPage() {
  let history = useHistory();

  const [form, handleFormChange] = useForm({ email: "", password: "" });
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await login(form);
    if (response.token) {
      localStorage.setItem("rappi4", JSON.stringify(response));
      history.replace("/feed");
    } else {
      window.alert(response.message);
      history.replace("/signup");
    }
  };

  const handleClickShowPassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <PageContainer>
      <Logo src={logo} alt="rappi4 logo" />
      <MainContent>
        <Tittle>Entrar</Tittle>
        <form onSubmit={handleFormSubmit}>
          <InputBorder>
            <Label>E-mail*</Label>
            <input
              type="email"
              onChange={handleFormChange}
              placeholder="email@email.com"
              name="email"
              value={form.email}
              required
            />
          </InputBorder>
          <InputBorder>
            <Label>Senha*</Label>
            <input
              type="password"
              onChange={handleFormChange}
              placeholder="Mínimo 6 caracteres"
              name="password"
              value={form.password}
              type={visiblePassword ? "text" : "password"}
              required
            />
            <ShowPasswordIcon
              onClick={handleClickShowPassword}
              src={visiblePassword ? noVisible : visible}
            />
          </InputBorder>
          <Button type="submit">Entrar</Button>
        </form>
        <Link onClick={() => history.push("/signup")}>
          Não possui cadastro? Clique aqui.
        </Link>
      </MainContent>
    </PageContainer>
  );
}

export default LoginPage;
