import React from "react";
import FutureValueForm from "./FutureValueForm";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("InvestementForm do basic functionality", () => {
  beforeEach(() => {
    const collapseForm = jest.fn();
    render(<FutureValueForm collapseForm={collapseForm} />);
  });

  it("should display error when required fields are empty", async () => {
    fireEvent.click(screen.getByText("Calculate"));

    await waitFor(() => screen.getAllByTestId("error-msg"));

    const allErrorMessages = screen.getAllByTestId("error-msg");
    allErrorMessages.forEach((e) => expect(e).toHaveTextContent(/required/));

    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });

  // it("handles incorrect input", async () => {
  //   fireEvent.change(screen.getByLabelText(/rate/), {
  //     target: { value: "1.5" },
  //   });

  //   fireEvent.change(screen.getByLabelText(/initial value/), {
  //     target: { value: 1000 },
  //   });

  //   fireEvent.change(screen.getByLabelText(/month/), {
  //     target: { value: 1000 },
  //   });

  //   fireEvent.click(screen.getByText("Calcular"));

  //   await waitFor(() => screen.getByTestId("form-error-msg"));

  //   expect(screen.getByTestId("form-error-msg")).toBe(
  //     "Fill the required values"
  //   );
  // });
});
