import React from "react";
import { getByTitle, render, screen } from "@testing-library/react";
import LectureGroup from "../components/lecture/LectureGroup";

describe("강의 목록은", () => {
  it("뱃지을 가지고 있어야 한다", () => {
    const { getByText } = render(<LectureGroup />);
    const badge = getByText("Best");

    expect(badge).toBeInTheDocument();
  });
});
