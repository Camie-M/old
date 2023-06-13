import React from "react";
import { useHistory } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { signupAddress } from "../../functions/axios";

import ArrowBack from "./../../assets/arrow_back.svg";

import {
  Tittle,
  Button,
  InputBorder,
  EditPagesForm,
  GoBack,
  Label
} from "./../../styles/forms";

function SignUpAddressPage() {
  const history = useHistory();

  const goToSignUpPage = () => {
    history.push("/signup");
  };

  const [form, handleFormChange] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await signupAddress(form);
    console.log(response);
    if (response.token) {
      history.replace("/feed");
    } else {
      window.alert(response.message);
    }
  };

  return (
    <div>
      <GoBack>
        <img src={ArrowBack} alt={"Voltar"} onClick={goToSignUpPage} />
      </GoBack>

      <EditPagesForm onSubmit={handleSubmit}>
        <Tittle>Meu endereço</Tittle>

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
            type="text"
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
            placeholder="Apto. ou Bloco"
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

export default SignUpAddressPage;
