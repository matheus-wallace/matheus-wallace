import { render, screen } from "@testing-library/react";
import Icon from ".";
import ClientSideProvider from "@/context/theme";

describe("Icon Component", () => {
  let icon: HTMLElement;
  beforeAll(() => {
    render(
      <ClientSideProvider>
        <Icon name={"Github"} />
      </ClientSideProvider>,
    );
    icon = screen.getByRole("img");
  });

  it("should render icon", () => {
    expect(icon).toBeInTheDocument();
  });
});
