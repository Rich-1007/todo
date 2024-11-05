import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todos from "./Todos";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe.skip("Todos test cases", () => {
  const initState = {
    title: "First todo",
    description: "string to be added",
    date: "2024-12-10",
    done: "false",
    id: "1234",
  };

  const mockStore = configureStore();
  const TodoActions = mockStore(initState);

  test("Check if the filter dropdown is rendered correctly and have all options", async () => {
    userEvent.setup();

    render(
      <Provider store={TodoActions}>
        <Todos />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument;

    await userEvent.type(searchInput, "abcd");
    expect(searchInput).toHaveValue("abcd");
  });

  test("The search input field is present and accepts text input.", async () => {

    render(
      <Provider store={TodoActions}>
        <Todos />
      </Provider>
    );

    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeInTheDocument();

    expect(screen.getByText("Ascending")).toBeInTheDocument();
    expect(screen.getByText("Descending")).toBeInTheDocument();
    expect(screen.getByText("Date(new-to-old)")).toBeInTheDocument();
    expect(screen.getByText("Date(old-to-new)")).toBeInTheDocument();
  });

  test("The search icon is present", async () => {

    render(
      <Provider store={TodoActions}>
        <Todos />
      </Provider>
    );
    const searchIcon = document.querySelector("#searchIcon");
    expect(searchIcon).toBeInTheDocument();
  });
});
