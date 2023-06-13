import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import axios from "axios";
import SignUpAddressPage from "./index";
import userEvent from "@testing-library/user-event";

axios.post = jest.fn().mockResolvedValue();

describe("Renderização inicial", () => {
  test("Renderiza corretamente", () => {
    const { getByText, getByPlaceholderText } = render(<SignUpAddressPage />);

    //Acha as labels
    const streetLabel = getByText(/Logradouro*/);
    const numberLabel = getByText(/Número*/);
    const complementLabel = getByText(/Complemento/);
    const neighbourhoodLabel = getByText(/Bairro*/);
    const cityLabel = getByText(/Cidade*/);
    const stateLabel = getByText(/Estado*/);

    //Acha os inputs
    const streetInput = getByPlaceholderText(/Rua/);
    const numberInput = getByPlaceholderText(/Número/);
    const complementInput = getByPlaceholderText(/Apto. ou Bloco/);
    const neighbourhoodInput = getByPlaceholderText(/Bairro/);
    const cityInput = getByPlaceholderText(/Cidade/);
    const stateInput = getByPlaceholderText(/Estado/);

    //Confere se as labels foram renderizadas
    expect(streetLabel).toBeInTheDocument();
    expect(numberLabel).toBeInTheDocument();
    expect(complementLabel).toBeInTheDocument();
    expect(neighbourhoodLabel).toBeInTheDocument();
    expect(cityLabel).toBeInTheDocument();
    expect(stateLabel).toBeInTheDocument();

    //Confere se os inputs foram renderizados
    expect(streetInput).toBeInTheDocument();
    expect(numberInput).toBeInTheDocument();
    expect(complementInput).toBeInTheDocument();
    expect(neighbourhoodInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
  });
});

describe("Chama API corretamente", () => {
  test("Chamar API post e cadastra endereço", async () => {
    const { getByPlaceholderText } = render(<SignUpAddressPage />);

    const streetInput = getByPlaceholderText(/Rua/);
    const numberInput = getByPlaceholderText(/Número/);
    const complementInput = getByPlaceholderText(/Apto. ou Bloco/);
    const neighbourhoodInput = getByPlaceholderText(/Bairro/);
    const cityInput = getByPlaceholderText(/Cidade/);
    const stateInput = getByPlaceholderText(/Estado/);

    await userEvent.type(streetInput, "Rua teste");
    await userEvent.type(numberInput, "114");
    await userEvent.type(complementInput, "Apto. 74");
    await userEvent.type(neighbourhoodInput, "Bairro teste");
    await userEvent.type(cityInput, "Cidade teste");
    await userEvent.type(stateInput, "SP");

    expect(streetInput).toHaveValue("Rua teste");
    expect(numberInput).toHaveValue("114");
    expect(complementInput).toHaveValue("Apto. 74");
    expect(neighbourhoodInput).toHaveValue("Bairro teste");
    expect(cityInput).toHaveValue("Cidade teste");
    expect(stateInput).toHaveValue("SP");

    /*     const button = getByText(/Salvar/);
    userEvent.click(button);

     expect(axios.post).toHaveBeenCalledWith(
      "https://us-central1-labenu-apis.cloudfunctions.net/generic/tarefas",
      {
        texto: "tarefa teste",
        completa: false,
      }
    ); */
  });
});
