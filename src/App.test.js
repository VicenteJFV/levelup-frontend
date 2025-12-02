import React from "react";
import { render } from "@testing-library/react";

// Mock completo de react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: () => null,
  Link: ({ children }) => <span>{children}</span>,
  NavLink: ({ children }) => <span>{children}</span>,
  useNavigate: () => jest.fn(),
}));

import App from "./App";

describe("App Component", () => {
  it("debe renderizarse sin errores", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});