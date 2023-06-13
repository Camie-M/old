import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import LoginPage from "./index";
import userEvent from "@testing-library/user-event";

describe("Renderização inicial", () => {
  test("Renderiza corretamente", () => {
    const { getByText, getByPlaceholderText } = render(<LoginPage />);

    const loginLabel = getByText(/E-mail*/);
    const passwordLabel = getByText(/Senha*/);

    const loginInput = getByPlaceholderText(/email@email.com/);
    const passwordInput = getByPlaceholderText(/Mínimo 6 caracteres/);

    expect(loginLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(loginInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
