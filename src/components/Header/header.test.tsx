import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";
import ClientSideProvider from "../../context/theme";
import { LanguageProvider } from "@/context/translations";

describe("Header", () => {
  let header: HTMLElement;

  beforeEach(() => {
    render(
      <ClientSideProvider>
        <LanguageProvider>
          <Header />
        </LanguageProvider>
      </ClientSideProvider>,
    );

    header = screen.getByTestId("header");
  });

  it("should render the header with styles", () => {
    expect(header).toBeInTheDocument();

    const expectedStyles = {
      display: "flex",
      width: "100%",
      "background-color": "#111118",
      "justify-content": "space-between",
      padding: "2rem 12rem",
    };

    Object.entries(expectedStyles).forEach(([property, value]) => {
      expect(header).toHaveStyle(`${property}: ${value}`);
    });
  });

  it("should render the header with logo", () => {
    const textblue = screen.getByTestId("textBlue");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("MWSP");
    expect(textblue).toHaveStyle("color: #006688");
  });

  it("should render the header with links and icons", () => {
    const githubIcon = screen.getByTestId("githubIcon");
    const linkedinIcon = screen.getByTestId("linkedinIcon");

    expect(linkedinIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
  });
});
