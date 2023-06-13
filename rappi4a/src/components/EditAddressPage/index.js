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

function EditAddressPage() {
  let history = useHistory();

  const goToProfilePage = () => {
    history.push("/profile");
  };

  const [form, handleFormChange] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const token = JSON.parse(localStorage.getItem("rappi4")).token

  const handleSubmit = async (event) => {
    event.preventDefault();

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    try {
      const response = await axios.put(`${baseUrl}/address`, form, axiosConfig);
      console.log(response);
      alert("Dados alterados com sucesso");
    } catch (error) {
      console.log(error.response.data);
      alert("Não foi possível alterar");
    }

    goToProfilePage();
  };

  return (
    <div>
      <GoBack>
        <img src={ArrowBack} alt={"Voltar"} onClick={goToProfilePage} />
        <span>Endereço</span>
      </GoBack>

      <EditPagesForm onSubmit={handleSubmit}>
        <InputBorder>
          <Label htmlFor="street">Logradouro*</Label>
          <input
            required
            name="street"
            value={form.street}
            onChange={handleFormChange}
            id="street"
            type="text"
            placeholder="Rua"
          />
        </InputBorder>

        <InputBorder>
          <Label htmlFor="number">Número*</Label>
          <input
            required
            name="number"
            value={form.number}
            onChange={handleFormChange}
            id="number"
            type="number"
            placeholder="Número"
          />
        </InputBorder>

        <InputBorder>
          <Label htmlFor="complement">Complemento</Label>
          <input
            name="complement"
            value={form.complement}
            onChange={handleFormChange}
            id="complement"
            type="text"
            placeholder="Apto./Bloco"
          />
        </InputBorder>

        <InputBorder>
          <Label htmlFor="neighbourhood">Bairro*</Label>
          <input
            required
            name="neighbourhood"
            value={form.neighbourhood}
            onChange={handleFormChange}
            id="neighbourhood"
            type="text"
            placeholder="Bairro"
          />
        </InputBorder>

        <InputBorder>
          <Label htmlFor="city">Cidade*</Label>
          <input
            required
            name="city"
            value={form.city}
            onChange={handleFormChange}
            id="city"
            type="text"
            placeholder="Cidade"
          />
        </InputBorder>

        <InputBorder>
          <Label htmlFor="state">Estado*</Label>
          <input
            required
            name="state"
            value={form.state}
            onChange={handleFormChange}
            id="state"
            type="text"
            placeholder="Estado"
          />
        </InputBorder>

        <Button>Salvar</Button>
      </EditPagesForm>
    </div>
  );
}

export default EditAddressPage;
