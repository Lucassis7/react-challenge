import "@testing-library/jest-dom";
import {   render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
// import mockResult from "./mocks/data-mock.json";

import App from "../App";

describe("App", () => {
  test("Testing rendering App without API call", () => {
    const { getByText, getByAltText } = render(<App />);

    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();

    expect(getByText("Nenhuma ferramenta encontrada... :/")).toBeInTheDocument();
    expect(getByAltText("Sad emoji because there are no tools with the search term entered.")).toBeInTheDocument();
  });
});

