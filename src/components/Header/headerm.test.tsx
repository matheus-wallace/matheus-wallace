import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./";
import ClientSideProvider from "../../context/theme";

describe("header mobile", () => {
  jest.mock("../../hooks/useWindowSize", () => ({
    useWindowSize: jest.fn().mockReturnValue({ width: 480 }),
  }));

  beforeEach(() => {
    global.innerWidth = 479;
    window.dispatchEvent(new Event("resize"));
    render(
      <ClientSideProvider>
        <Header />
      </ClientSideProvider>,
    );
  });

  it("Should render the menu icon when on mobile", () => {
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });

  it("Should open the menu when we click in the icon menu", () => {
    const menuButton = screen.getByTestId("menu");
    expect(menuButton).toBeInTheDocument();
    let menu = screen.queryByTestId("MenuContent");
    expect(menu).toBe(null);
    fireEvent.click(menuButton);
    menu = screen.getByTestId("MenuContent");
    expect(menu).toBeInTheDocument();
    fireEvent.click(menuButton);
    menu = screen.queryByTestId("MenuContent");
    expect(menu).toBe(null);
  });
});
