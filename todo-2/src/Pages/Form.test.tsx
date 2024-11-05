import { render, screen } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

describe.skip("Testing form", () => {
  test("This is a form is rendering", () => {
    render(<Form />);

    expect(screen.getByText("This is a form")).toBeInTheDocument();
  });

  test("renders input text", () => {
    render(<Form />);
    const firstNameInput = screen.getByPlaceholderText("Enter first name");
    expect(firstNameInput).toBeInTheDocument();

    const lastNameInput = screen.getByPlaceholderText("Enter last name");
    expect(lastNameInput).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText("Enter email id");
    expect(emailInput).toBeInTheDocument();

    const numberInput = screen.getByPlaceholderText("Enter number");
    expect(numberInput).toBeInTheDocument();
  });

  test("renders all input fields", () => {
    render(<Form />);
    const firstNameInput = screen.getByPlaceholderText("Enter first name");
    expect(firstNameInput).toBeInTheDocument();

    const lastNameInput = screen.getByPlaceholderText("Enter last name");
    expect(lastNameInput).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText("Enter email id");
    expect(emailInput).toBeInTheDocument();

    const numberInput = screen.getByPlaceholderText("Enter number");
    expect(numberInput).toBeInTheDocument();
  });

  test("Keyboard type into input fields", async () => {
    userEvent.setup();

    render(<Form />);

    const firstNameInput = screen.getByPlaceholderText("Enter first name");
    await userEvent.type(firstNameInput, "Rich");
    expect(firstNameInput).toHaveValue("Rich");

    const lastNameInput = screen.getByPlaceholderText("Enter last name");
    await userEvent.type(lastNameInput, "ghosh");
    expect(lastNameInput).toHaveValue("ghosh");

    const emailInput = screen.getByPlaceholderText("Enter email id");
    await userEvent.type(emailInput, "rich@gmail.com");
    expect(emailInput).toHaveValue("rich@gmail.com");

    const numberInput = screen.getByPlaceholderText("Enter number");
    await userEvent.type(numberInput, "1234");
    expect(numberInput).toHaveValue("1234");
  });

  test("renders submit button", () => {
    render(<Form />);
    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();
  });

  test("calls afterSubmit and resets form with empty data", async () => {
    userEvent.setup();
    render(<Form />);

    await userEvent.type(
      screen.getByPlaceholderText("Enter first name"),
      "rich"
    );
    await userEvent.type(
      screen.getByPlaceholderText("Enter email id"),
      "rich@gmail.com"
    );

    await userEvent.type(
      screen.getByPlaceholderText("Enter last name"),
      "ghosh"
    );

    await userEvent.type(screen.getByPlaceholderText("Enter number"), "12345");

    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByPlaceholderText("Enter first name")).toHaveValue("");
    expect(screen.getByPlaceholderText("Enter last name")).toHaveValue("");
    expect(screen.getByPlaceholderText("Enter email id")).toHaveValue("");
    expect(screen.getByPlaceholderText("Enter number")).toHaveValue("");
  });

  test("Hide and show error message when the first name is empty and form is clicked", async () => {
    userEvent.setup();
    render(<Form />);

    await userEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(screen.getByText("Please Enter First name")).toBeInTheDocument();

    const firstNameInput = screen.getByPlaceholderText("Enter first name");
    await userEvent.type(firstNameInput, "Rich");

    await userEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(
      screen.queryByText("Please Enter First name")
    ).not.toBeInTheDocument();
  });

  test("afterSunmit is called when submit button is clicked", async () => {
    render(<Form />);
    userEvent.setup();

    await userEvent.type(
      screen.getByPlaceholderText("Enter first name"),
      "rich"
    );
    await userEvent.type(
      screen.getByPlaceholderText("Enter last name"),
      "ghosh"
    );
    await userEvent.type(
      screen.getByPlaceholderText("Enter email id"),
      "rich123@gmail.com"
    );
    await userEvent.type(screen.getByPlaceholderText("Enter number"), "12345");

    const handleSubmit = jest.fn();
    const form = screen.getByRole("form");
    form.onsubmit = handleSubmit;

    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(handleSubmit).toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
