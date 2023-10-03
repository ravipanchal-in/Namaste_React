import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../pages/Contact";

describe("Contact Us Component Test Cases", () => {
  test("Should load contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

    const text = screen.getByText("Contact Us");
    expect(text).toBeInTheDocument();

    const placeholder = screen.getByPlaceholderText("Enter Name");
    expect(placeholder).toBeInTheDocument();

    // Querying multiple items- it will return HTML element.
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log("inputBoxes", inputBoxes);
    // Assertion
    expect(inputBoxes.length).toBe(3);
    expect(inputBoxes.length).not.toBe(2);
  });

  //  we can write "it" instead of "test", it is alias for test.
  it("Should load button inside the contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
