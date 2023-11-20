import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Popup from "../components/Popup";

const mockOmieTool = {
  app_id: "calendly",
  name: "Calendly",
  color: "#656a74",
  icon: "https://assets.pluga.co/apps/icons/calendly/calendly-icon.svg",
  link: "https://pluga.co/ferramentas/calendly/"
};

const mockThreeTools = [
  {
    "app_id": "hotmart",
    "name": "Hotmart",
    "color": "#F04E23",
    "icon": "https://assets.pluga.co/apps/icons/hotmart/hotmart-icon.svg",
    "link": "https://pluga.co/ferramentas/hotmart/"
  },
  {
    "app_id": "eduzz",
    "name": "Eduzz",
    "color": "#FFCD33",
    "icon": "https://assets.pluga.co/apps/icons/eduzz/eduzz-icon.svg",
    "link": "https://pluga.co/ferramentas/eduzz/"
  },
  {
    "app_id": "jira",
    "name": "Jira Software",
    "color": "#0052cc",
    "icon": "https://assets.pluga.co/apps/icons/jira/jira-icon.svg",
    "link": "https://pluga.co/ferramentas/jira/"
  },
]

describe("Popup", () => {
  test("Popup rendering with a mock tool and mock for three last seen tools", () => {
    const { getByText, getByRole } = render(<Popup data={mockOmieTool} lastSeenTools={mockThreeTools} />);

    expect(getByRole("heading", { level: 3 })).toHaveTextContent(/ÚLTIMAS FERRAMENTAS VISUALIZADAS/i)
    expect(getByText("Hotmart")).toBeInTheDocument();
    expect(getByText("Eduzz")).toBeInTheDocument();
    expect(getByText("Jira Software")).toBeInTheDocument();
    expect(getByRole("link")).toHaveAttribute("href", "https://pluga.co/ferramentas/calendly/");
  });
});
