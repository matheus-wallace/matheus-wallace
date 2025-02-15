import { render, screen } from "@testing-library/react";
import { TextBlue } from "./style";
import ClientSideProvider from "@/context/theme";

describe("TextBlue", () => {
  it("Should render make te text bold and blue", () => {
    render(
      <ClientSideProvider>
        <TextBlue>Teste</TextBlue>
      </ClientSideProvider>,
    );

    const textBlue = screen.getByText("Teste");

    expect(textBlue).toHaveStyle("color: #006688");
    expect(textBlue).toHaveStyle("font-weight: 700");
  });
});
