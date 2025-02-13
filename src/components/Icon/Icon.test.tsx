import { render, screen } from "@testing-library/react";
import Icon from ".";
import ClientSideProvider from "@/context/theme";

describe("Icon Component", () => {
  let icon: HTMLElement;
  beforeAll(() => {
    render(
      <ClientSideProvider>
        <Icon name={"github"} />
      </ClientSideProvider>,
    );
    icon = screen.getByRole("img");
  });

  it("should render icon", () => {
    expect(icon).toBeInTheDocument();
  });

  it("should return a console.warn if we have a invalid name", () => {
    const consoleWarnMock = jest
      .spyOn(console, "warn")
      .mockImplementation(() => {});
    render(
      <ClientSideProvider>
        <Icon name={undefined} />
      </ClientSideProvider>,
    );

    expect(consoleWarnMock).toHaveBeenCalledWith(
      "icon name prop cannot be undefind",
    );

    consoleWarnMock.mockRestore();
  });
});
