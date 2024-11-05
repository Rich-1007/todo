import React from "react";
// Import React to use JSX

import { render, screen, fireEvent } from "@testing-library/react";
// Import testing functions to render components, simulate events, and query elements

import Testing from "./Testing";
// Import the component we want to test

describe.skip("Testing Component", () => {
  // Describe a test block for the Testing component

  test("checks how many times HandleShow was called", () => {
    // Define the test case

    const handleShow = jest.fn();
    // Mock the HandleShow function using jest.fn()

    render(<Testing />);
    // Render the Testing component

    const button = screen.getByText("Click me");
    // Select the "Click me" button using its text

    // Replace the button's click event handler with the mocked function
    button.onclick = handleShow;

    fireEvent.click(button);
    // Simulate the first click

    fireEvent.click(button);
    // Simulate the second click

    expect(handleShow).toHaveBeenCalledTimes(2);
    // Check that HandleShow was called twice
  });
});
