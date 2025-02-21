import { act, renderHook } from "@testing-library/react";
import useWindowSize from "./useWindowSize";

describe("useWindowSize", () => {
  it("should return the window size", () => {
    global.innerWidth = 1024;
    global.innerHeight = 768;

    const { result } = renderHook(() => useWindowSize());

    expect(result.current).toEqual({ width: 1024, height: 768 });
  });

  it("should update the size of screen on re-size", () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      global.innerWidth = 800;
      global.innerHeight = 600;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toEqual({ width: 800, height: 600 });
  });
});
