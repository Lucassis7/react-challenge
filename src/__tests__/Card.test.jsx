import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Card from "../components/Card";

const mockOmieTool = {
  app_id: "omie",
  name: "Omie",
  color: "#001E27",
  icon: "https://assets.pluga.co/apps/icons/omie/omie-icon.svg",
  link: "https://pluga.co/ferramentas/omie/"
};

describe("Card", () => {
  test("Card rendering with a mock tool", () => {
    const { getByAltText, getByText } = render(<Card data={mockOmieTool} />);

    expect(getByAltText(/Image icon for the tool Omie/i)).toBeInTheDocument();
    expect(getByText("Omie")).toBeInTheDocument();
  });
});
