import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signup } from "../../functions/axios";
import {
  PageContainer,
  Logo,
  Button,
  ShowPasswordIcon,
  SignUpMainContent,
  SignUpTittle,
  SignUpInputBorder,
  InvalidPassword,
  Message,
  Label
} from "./../../styles/forms";

import logo from "../../assets/logo_colored.svg";
import visible from "../../assets/password_open.svg";
import noVisible from "../../assets/password.svg";

function SignUpPage() {
  let history = useHistory();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmedPassword, setVisibleConfirmedPassword] = useState(
    false
  );
  const [equalPasswords, setEqualPasswords] = useState(true)
  const [form, handleFormChange] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });
   

  const cpfMask = (cpf) => {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4");
    return cpf
  }

  const handleCpfChange = (event) => {
    event.target.value = cpfMask(event.target.value)
    if (event.target.value.length <= 14) {
      handleFormChange(event)
    }
  }

  const checkEqualPasswords = (event) => {
    handleFormChange(event)
    if(event.target.value !== form.password && event.target.value !== form.confirmPassword) {
      setEqualPasswords(false)
    } else {
      setEqualPasswords(true)
    }
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await signup(form);
    if (response.token) {
      localStorage.setItem("rappi4", JSON.stringify(response));
      history.replace("/signup-address");
    } else {
      window.alert(response.message);
    }
  };

  const handleClickShowPassword = (passwordField) => {
    if (passwordField === "PASSWORD") {
      setVisiblePassword(!visiblePassword);
    } else if (passwordField === "CONFIRM_PASSWORD") {
      setVisibleConfirmedPassword(!visibleConfirmedPassword);
    }
  };

  

  return (
    <PageContainer>
      <Logo src={logo} alt="rappi4 logo" />
      <SignUpMainContent>
        <SignUpTittle>Cadastrar</SignUpTittle>
        <form onSubmit={handleFormSubmit}>
          <SignUpInputBorder>
            <Label htmlFor="name">Nome*</Label>
            <input
              onChange={handleFormChange}
              id="name"
              name="name"
              value={form.name}
              type="text"
              placeholder="Nome e Sobrenome"
              required
            />
          </SignUpInputBorder>
          <SignUpInputBorder>
            <Label htmlFor="email">E-mail*</Label>
            <input
              onChange={handleFormChange}
              id="email"
              name="email"
              value={form.email}
              type="email"
              placeholder="email@email.com"
              required
            />
          </SignUpInputBorder>
          <SignUpInputBorder>
            <Label htmlFor="cpf">CPF*</Label>
            <input
              onChange={handleCpfChange}
              id="cpf"
              name="cpf"
              value={form.cpf}
              type="text"
              placeholder="000.000.000-00"
              required
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            />
          </SignUpInputBorder>
          <SignUpInputBorder>
            <Label htmlFor="password">Senha*</Label>
            <input
              onChange={checkEqualPasswords}
              id="password"
              name="password"
              value={form.password}
              type={visiblePassword ? "text" : "password"}
              placeholder="Mínimo 6 caracteres"
              required
              pattern=".{6,}"
            />
            <ShowPasswordIcon
              onClick={() => handleClickShowPassword("PASSWORD")}
              src={visiblePassword ? noVisible : visible}
            />
          </SignUpInputBorder>
            <SignUpInputBorder 
              redBorder={equalPasswords} 
              checkPassword
            >
                
              <Label 
                thisLabel
                redLabel={equalPasswords} 
                htmlFor="confirmPassword"
              >
                Confirmar*
              </Label>
              <input
                onChange={checkEqualPasswords}
                id="confirmPassword"
                name="confirmPassword"
                value={form.confirmPassword}
                type={visibleConfirmedPassword ? "text" : "password"}
                placeholder="Confirme a senha anterior"
                required
              />
              <ShowPasswordIcon
                onClick={() => handleClickShowPassword("CONFIRM_PASSWORD")}
                src={visibleConfirmedPassword ? noVisible : visible}
              />
            </SignUpInputBorder>
            <InvalidPassword redBorder={equalPasswords}>
              <Message show={equalPasswords}>Deve ser a mesma que a anterior</Message>
            </InvalidPassword>
          
          <Button type="submit">Criar</Button>
        </form>
      </SignUpMainContent>
    </PageContainer>
  );
}

export default SignUpPage;
