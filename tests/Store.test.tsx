import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../src/App";
import "@testing-library/jest-dom";

describe("Mini Store Comprehensive Tests", () => {
  it("Integration: should add product to cart and update item count state", () => {
    render(<App />);
    const addButtons = screen.getAllByRole("button", { name: /Add to Cart/i });
    fireEvent.click(addButtons[0]);
    const cartStatus = screen.getByRole("status");
    expect(cartStatus).toHaveTextContent("Items: 1");
  });

  it("Integration: should remove product from cart and reset item count state", () => {
    render(<App />);
    const addButtons = screen.getAllByRole("button", { name: /Add to Cart/i });
    fireEvent.click(addButtons[0]);
    const removeButton = screen.getByRole("button", { name: /Remove/i });
    fireEvent.click(removeButton);
    const cartStatus = screen.getByRole("status");
    expect(cartStatus).toHaveTextContent("Items: 0");
  });

  it("Integration: should filter products based on search input state", () => {
    render(<App />);
    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "Smart Watch" } });
    const productTitle = screen.getByText("Smart Watch");
    expect(productTitle).toBeInTheDocument();
  });

  it("Unit 1: should render the header title", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /Mini Store/i });
    expect(heading).toBeInTheDocument();
  });

  it("Unit 2: should render the search input element", () => {
    render(<App />);
    const searchBox = screen.getByRole("textbox");
    expect(searchBox).toBeInTheDocument();
  });

  it("Unit 3: should find all product titles using getAllByText", () => {
    render(<App />);
    const titles = screen.getAllByText(
      /Smart Watch|Wireless Headphones|Running Shoes/i
    );
    expect(titles.length).toBeGreaterThan(0);
  });

  it("Unit 4: should return null with queryByText for a non-existing product", () => {
    render(<App />);
    const nonExisting = screen.queryByText(/NonExistingProduct/i);
    expect(nonExisting).not.toBeInTheDocument();
  });

  it("Unit 5: should render multiple Add to Cart buttons using getAllByRole", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button", { name: /Add to Cart/i });
    expect(buttons.length).toBe(3);
  });

  it("Unit 6: should handle input value update on search input", () => {
    render(<App />);
    const searchBox = screen.getByRole("textbox");
    fireEvent.input(searchBox, { target: { value: "Test" } });
    expect(searchBox).toHaveValue("Test");
  });

  it("Unit 7: should handle change event on search input", () => {
    render(<App />);
    const searchBox = screen.getByRole("textbox");
    fireEvent.change(searchBox, { target: { value: "Test" } });
    expect(searchBox).toHaveValue("Test");
  });

  it("Unit 8: should render cart section heading", () => {
    render(<App />);
    const cartHeading = screen.getByText(/Your cart is empty/i);
    expect(cartHeading).toBeInTheDocument();
  });

  it("Unit 9: should render product prices correctly", () => {
    render(<App />);
    const price = screen.getByText("$100");
    expect(price).toBeInTheDocument();
  });

  it("Unit 10: should verify initial cart state via status role", () => {
    render(<App />);
    const status = screen.getByRole("status");
    expect(status).toHaveTextContent("Items: 0");
  });

  it("Unit 11: should check if product card structure exists", () => {
    render(<App />);
    const productCard = screen.getByText("Smart Watch");
    expect(productCard).toBeInTheDocument();
  });

  it("Unit 12: should verify secondary product exists", () => {
    render(<App />);
    const headphone = screen.getByText("Wireless Headphones");
    expect(headphone).toBeInTheDocument();
  });

  it("Unit 13: should verify third product exists", () => {
    render(<App />);
    const shoes = screen.getByText("Running Shoes");
    expect(shoes).toBeInTheDocument();
  });

  it("Unit 14: should check queryByRole for missing elements", () => {
    render(<App />);
    const missingElement = screen.queryByRole("navigation");
    expect(missingElement).not.toBeInTheDocument();
  });

  it("Unit 15: should verify search placeholder text", () => {
    render(<App />);
    const searchBox = screen.getByPlaceholderText(/Search products.../i);
    expect(searchBox).toBeInTheDocument();
  });

  it("Unit 16: should trigger click on first product card button", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button", { name: /Add to Cart/i });
    fireEvent.click(buttons[0]);
    expect(screen.getByRole("status")).toHaveTextContent("Items: 1");
  });

  it("Unit 17: should trigger click on second product card button", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button", { name: /Add to Cart/i });
    fireEvent.click(buttons[1]);
    expect(screen.getByRole("status")).toHaveTextContent("Items: 1");
  });

  it("Unit 18: should trigger click on third product card button", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button", { name: /Add to Cart/i });
    fireEvent.click(buttons[2]);
    expect(screen.getByRole("status")).toHaveTextContent("Items: 1");
  });

  it("Unit 19: should verify main text content", () => {
    render(<App />);
    const mainContainer = screen.getByText("Mini Store");
    expect(mainContainer).toBeInTheDocument();
  });

  it("Unit 20: should ensure filtering works with lowercase and uppercase input", () => {
    render(<App />);
    const searchBox = screen.getByRole("textbox");
    fireEvent.change(searchBox, { target: { value: "RUNNING" } });
    expect(screen.getByText("Running Shoes")).toBeInTheDocument();
  });
});
