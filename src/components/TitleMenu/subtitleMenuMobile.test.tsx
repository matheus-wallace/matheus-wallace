import ClientSideProvider from "@/context/theme";
import { render, screen } from "@testing-library/react";
import Menu from "../Menu";

describe("SubtitleMenuMobile", () => {
  beforeAll(() => {
    render(
      <ClientSideProvider>
        <Menu />
      </ClientSideProvider>,
    );
  });

  it("Should render the title with text", () => {
    const titleLinkedin = screen.getByTestId("linkedinIcon");
    const titleGithub = screen.getByTestId("githubIcon");

    expect(titleLinkedin).toBeInTheDocument();
    expect(titleGithub).toBeInTheDocument();
  });
});
