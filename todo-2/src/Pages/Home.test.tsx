import React from "react";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "./Home";

import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe.skip("Home Component", () => {
  test("displays the Todo List title", () => {
    const initState = {
      title: "First todo",
      description: "string to be added",
      date: "2024-12-10",
      done: "false",
      id: "1234",
    };

    const mockStore = configureStore();
    const TodoStore = mockStore(initState);

    render(
      <Provider store={TodoStore}>
        <Home />
      </Provider>
    );

    const titleElement = screen.getByText("Todo List");
    expect(titleElement).toBeInTheDocument();
  });
});
