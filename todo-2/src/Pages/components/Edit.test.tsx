import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Edit from "./Edit";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux", () => ({
  //   useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe.skip("Edit Component", () => {
  test("renders Edit component without crashing", async () => {
    userEvent.setup();
    const mockItem = {
      id: "1",
      title: "",
      description: "Test Description",
      date: "2024-09-05",
      done: false,
    };

    render(
      <Edit
        item={mockItem}
        showEdit={true}
        setShowEdit={jest.fn()}
        id={mockItem.id}
      />
    );

    const titleInput = screen.getByPlaceholderText("Enter title to edit");
    expect(titleInput).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Enter description to edit")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Enter date to edit")
    ).toBeInTheDocument();

    expect(screen.getByText("Update")).toBeInTheDocument();
  });

  test("renders Edit component without crashing", async () => {
    userEvent.setup();
    const mockItem = {
      id: "1",
      title: "",
      description: "",
      date: "",
      done: false,
    };

    render(
      <Edit
        item={mockItem}
        showEdit={true}
        setShowEdit={jest.fn()}
        id={mockItem.id}
      />
    );

    const titleInput = screen.getByPlaceholderText("Enter title to edit");
    await userEvent.type(titleInput, "abcd");
    expect(titleInput).toHaveValue("abcd");

    const descriptionInput = screen.getByPlaceholderText(
      "Enter description to edit"
    );
    await userEvent.type(descriptionInput, "abcd");
    expect(descriptionInput).toHaveValue("abcd");

    const dateInput = screen.getByPlaceholderText("Enter date to edit");
    await userEvent.type(dateInput, "2024-09-05");
    expect(dateInput).toHaveValue("2024-09-05");
  });

  test("clicks Update button and triggers HandleUpdate", () => {
    const mockSetShowEdit = jest.fn();
    const mockDispatch = jest.fn();

    jest.mock("react-redux", () => ({
      //   useSelector: jest.fn(),
      useDispatch: () => mockDispatch,
    }));

    const mockItem = {
      id: "1",
      title: "",
      description: "",
      date: "",
      done: false,
    };

    render(
      <Edit
        item={mockItem}
        showEdit={true}
        setShowEdit={mockSetShowEdit}
        id={mockItem.id}
      />
    );

    const updateButton = screen.getByText("Update");
    fireEvent.click(updateButton);
    fireEvent.click(updateButton);

    expect(mockSetShowEdit).toHaveBeenCalledTimes(2);
  });
});
