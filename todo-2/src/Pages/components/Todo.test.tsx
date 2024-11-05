import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./Todo";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux", () => ({
  //   useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe.skip("Todo Component", () => {
  test("renders Todo component correctly", () => {
    userEvent.setup();
    const mockItem = {
      id: "1",
      title: "Test Todo",
      date: "2024-09-05",
      description: "Test Discription hai ye",
      done: false,
    };

    render(<Todo item={mockItem} index={mockItem.id} />);
    

    const titleElement = screen.getByText("Test Todo");
    expect(titleElement).toBeInTheDocument();
    expect(screen.getByText("2024-09-05")).toBeInTheDocument();
  });
});
