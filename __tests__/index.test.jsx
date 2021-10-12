import React from "react";
import { getByTitle, render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("메뉴가 렌더링 되어야 한다", () => {
    const { getByRole } = render(<Home />);
    const menu = getByRole("navigation", { name: "fastcampus" });
    // 도큐먼트 내에 메뉴가 있어야 한다
    expect(menu).toBeInTheDocument();
  });
  it("베너가 렌더링 되어야 한다", () => {
    const { getByRole } = render(<Home />);
    const banner = getByRole("banner", { name: "" });

    expect(banner).toBeInTheDocument();
  });
  it("강의목록이 렌더링 되어야 한다", () => {
    const { getByTitle } = render(<Home />);
    const lectureList = getByTitle("lectureList", { name: "" });

    expect(lectureList).toBeInTheDocument();
  });
});
