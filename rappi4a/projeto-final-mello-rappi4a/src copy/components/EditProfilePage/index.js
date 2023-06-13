import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import useForm from "../../hooks/useForm";

import ArrowBack from "./../../assets/arrow_back.svg";

import {
  Button,
  InputBorder,
  EditPagesForm,
  GoBack,
  Label
} from "./../../styles/forms";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A";

function EditProfilePage() {
  let history = useHistory();
  const [form, handleFormChange] = useForm({ name: "", email: "", cpf: "" });

  const goToProfilePage = () => {
    history.push("/profile");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = JSON.parse(localStorage.getItem("rappi4")).token;

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    try {
      const response = await axios.put(`${baseUrl}/profile`, form, axiosConfig);
      console.log(response);
      alert("Dados alterados com sucesso");
    } catch (error) {
      console.log(error.response.data);
      alert("Não foi possível alterar");
    }
  };

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

  return (
    <div>
      <GoBack>
        <img src={ArrowBack} alt={"Voltar"} onClick={goToProfilePage} />
        <span>Editar</span>
      </GoBack>

      <EditPagesForm onSubmit={handleSubmit}>
        <InputBorder>
          <Label htmlFor="name">Nome</Label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleFormChange}
            id="name"
            type="text"
            placeholder="Nome"
          />
        </InputBorder>

        <InputBorder>
          <Label htmlFor="email">E-mail</Label>
          <input
            required
            name="email"
            value={form.email}
            onChange={handleFormChange}
            id="email"
            type="email"
            placeholder="E-mail"
          />
        </InputBorder>

        <InputBorder>
          <Label htmlFor="cpf">CPF</Label>
          <input
            required
            name="cpf"
            value={form.cpf}
            onChange={handleCpfChange}
            id="cpf"
            type="text"
            placeholder="CPF"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
          />
        </InputBorder>

        <Button>Salvar</Button>
      </EditPagesForm>
    </div>
  );
}

export default EditProfilePage;
