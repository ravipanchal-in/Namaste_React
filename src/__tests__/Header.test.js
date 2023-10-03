import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/header/Header";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header component test cases", () => {
  it("should be load header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginBtn);
    const logOutBtn = screen.getByRole("button", { name: "Logout" });
    expect(logOutBtn).toBeInTheDocument();

    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
  });
});
