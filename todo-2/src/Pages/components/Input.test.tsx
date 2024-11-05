import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import TodoActions from "../../reducers/TodoActions";

describe("Input test cases", () => {
  const initState = {
    title: "First todo",
    description: "string to be added",
    date: "2024-12-10",
    done: "false",
    id: "1234",
  };
  const mockStore = configureStore();
  const TodoStore = mockStore(initState);

  test.skip("Input heading is there", () => {
    render(
      <Provider store={TodoStore}>
        <Input />
      </Provider>
    );
    const inputText = screen.getByText("Input");
    expect(inputText).toBeInTheDocument();
  });

  test.skip("renders all input fields and button", () => {
    render(
      <Provider store={TodoStore}>
        <Input />
      </Provider>
    );
    expect(screen.getByPlaceholderText("Enter title")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Enter description")
    ).toBeInTheDocument();

    const addButton = screen.getByRole("button", { name: "Add Todo" });
    expect(addButton).toBeInTheDocument();

    const dateElement = screen.getByPlaceholderText("Enter date");
    expect(dateElement).toBeInTheDocument();
  });

  test.skip("typing text in input and matching the value", async () => {
    userEvent.setup();
    render(
      <Provider store={TodoStore}>
        <Input />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText("Enter title");
    await userEvent.type(inputElement, "abcd");
    expect(inputElement).toHaveValue("abcd");
  });

  test.skip("typing text in description and matching the value", async () => {
    userEvent.setup();
    render(
      <Provider store={TodoStore}>
        <Input />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText("Enter description");
    await userEvent.type(inputElement, "abcd");
    expect(inputElement).toHaveValue("abcd");
  });

  test.skip("selected date is matching", async () => {
    userEvent.setup();
    render(
      <Provider store={TodoStore}>
        <Input />
      </Provider>
    );

    const dateElement = screen.getByPlaceholderText("Enter date");
    await userEvent.type(dateElement, "2024-09-04");
    expect(dateElement).toHaveValue("2024-09-04");
  });

  test.skip("check if the HandleSubmit function get called when the form is submitted", async () => {
    userEvent.setup();

    const handleClick = jest.fn();
    render(
      <Provider store={TodoStore}>
        <Input />
      </Provider>
    );

    const addButton = screen.getByText("Add Todo");
    await userEvent.click(addButton);
  });

  // test("calls handleSubmit the correct number of times when the button is clicked", async () => {
  //   const mockHandleSubmit = jest.fn((e) => e.preventDefault());

  //   render(
  //     <Provider store={TodoStore}>
  //       <Input handleSubmit={mockHandleSubmit} />
  //     </Provider>
  //   );

  //   const buttonElement = screen.getByText("Add Todo");

  //   await userEvent.click(buttonElement);
  //   await userEvent.click(buttonElement);
  //   await userEvent.click(buttonElement);

  //   expect(mockHandleSubmit).toHaveBeenCalledTimes(3);
  // });

  test.skip("input fields receive focus when clicked", async () => {
    render(
      <Provider store={TodoStore}>
        <Input />
      </Provider>
    );

    userEvent.setup();

    const titleInput = screen.getByPlaceholderText("Enter title");
    const descriptionTextarea =
      screen.getByPlaceholderText("Enter description");
    const dateInput = screen.getByPlaceholderText("Enter date");

    await userEvent.click(titleInput);
    expect(titleInput).toHaveFocus();

    await userEvent.click(descriptionTextarea);
    expect(descriptionTextarea).toHaveFocus();

    await userEvent.click(dateInput);
    expect(dateInput).toHaveFocus();
  });
});
