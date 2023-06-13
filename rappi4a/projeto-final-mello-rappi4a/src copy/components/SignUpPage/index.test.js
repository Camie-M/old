import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import SignUpPage from "./index";
import userEvent from "@testing-library/user-event";

describe("Renderização inicial", () => {
  test("Renderiza corretamente", () => {
    const { getByText, getByPlaceholderText } = render(<SignUpPage />);

    //Acha as labels
    const nameLabel = getByText(/Nome*/);
    const emailLabel = getByText(/E-mail*/);
    const cpfLabel = getByText(/CPF*/);
    const passwordLabel = getByText(/Senha*/);
    const confirmPasswordLabel = getByText(/Confirmar*/);

    //Acha os inputs
    const nameInput = getByPlaceholderText(/Nome e Sobrenome/);
    const emailInput = getByPlaceholderText(/email@email.com/);
    const cpfInput = getByPlaceholderText(/000.000.000-00/);
    const passwordInput = getByPlaceholderText(/Mínimo 6 caracteres/);
    const confirmPasswordInput = getByPlaceholderText(
      /Confirme a senha anterior/
    );

    //Confere se as labels foram renderizadas
    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(cpfLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(confirmPasswordLabel).toBeInTheDocument();

    //Confere se os inputs foram renderizados
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(cpfInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
  });
});
