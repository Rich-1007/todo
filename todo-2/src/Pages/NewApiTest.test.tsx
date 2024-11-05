import { render, screen } from "@testing-library/react";
import NewApiTest from "./NewApiTest";

describe.skip("ApiTesting Component", () => {
  test("NewApiTest tests", () => {
    render(<NewApiTest />);

    const el = screen.getByRole("heading");
    expect(el).toBeInTheDocument();
  });

  test("test for mock API", async () => {
    render(<NewApiTest />);
    const el = await screen.findAllByRole("listitem");

    expect(el).toHaveLength(3);
  });
});
