import { render, screen, waitFor } from "@testing-library/react";
import ApiTesting from "./ApiTesting";

beforeEach(() => {
  jest.resetAllMocks();
});
describe("ApiTesting Component", () => {
  test("ApiTesting renders without crashing", () => {
    render(<ApiTesting />);

    expect(screen.getByText(/Testing API/i)).toBeInTheDocument();
  });

  // test("fetches data from api", async () => {
  //   global.fetch = jest.fn(() =>
  //     Promise.resolve({
  //       json: () =>
  //         Promise.resolve([
  //           { title: "Test Product", image: "http://example.com/image.jpg" },
  //         ]),
  //     })
  //   );

  //   render(<ApiTesting />);

  //   await waitFor(() => {
  //     expect(global.fetch).toHaveBeenCalledWith(
  //       "https://fakestoreapi.com/products/"
  //     );
  //   });
  // });

  test("fetched data is rendered", async () => {
    // global.fetch = jest.fn(() =>
    //   Promise.resolve({
    //     json: () =>
    //       Promise.resolve([
    //         { title: "Test Product 1", image: "http://example.com/image1.jpg" },
    //         { title: "Test Product 2", image: "http://example.com/image2.jpg" },
    //       ]),
    //   })
    // );

    render(<ApiTesting />);

    await waitFor(() => {
      expect(screen.getByText(/Test Product 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Test Product 2/i)).toBeInTheDocument();

      expect(screen.getAllByAltText(/Test Product 1/i));
    });
  });
});
