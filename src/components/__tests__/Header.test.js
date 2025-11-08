import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../utils/store";
import "@testing-library/jest-dom";

describe("Header Page", () => {
  it("Should load Header Page", () => {
    render(
      <MemoryRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </MemoryRouter>
    );
    const heading = screen.getByRole("heading", { name: "SB App" }); // .getByRole("heading", { name: "SB App" });
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  it("Should match logo label", () => {
    render(
      <MemoryRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </MemoryRouter>
    );
    const heading = screen.getByText("SB App");
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  it("Should match submit button", () => {
    render(
      <MemoryRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </MemoryRouter>
    );
    const button = screen.getAllByRole("button");
    //Assertion
    expect(button.length).toBe(2);
  });
  it("Should match Login/Logout button", () => {
    render(
      <MemoryRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </MemoryRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    //Assertion
    expect(logoutButton).toBeInTheDocument();
  });
});
