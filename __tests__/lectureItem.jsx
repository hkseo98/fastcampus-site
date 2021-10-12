import React from "react";
import { getByTitle, render, screen } from "@testing-library/react";
import LectureItem from "../components/lecture/LectureItem";

describe("강의 아이템은", () => {
  it("썸네일을 가지고 있어야 한다", () => {
    const { getByAltText } = render(<LectureItem />);

    const thumb = getByAltText("초격자 패키지");
    expect(thumb).toBeInTheDocument();
  });
  it("뱃지를 가지고 있어야 한다", () => {
    const { getByText } = render(<LectureItem />);

    const badge = getByText("평생소장");
    expect(badge).toBeInTheDocument();
  });
  it("강의 제목을 가지고 있어야 한다", () => {
    const { getByRole } = render(<LectureItem />);

    const lectureTitle = getByRole("heading");
    expect(lectureTitle).toBeInTheDocument();
  });
  it("강의 설명을 가지고 있어야 한다", () => {
    const { getByText } = render(<LectureItem />);

    const description = getByText(
      /\개발\/운영\/아키텍트를 아우르는 AWS\/DevOps 전 과정 마스터/g
    );
    expect(description).toBeInTheDocument();
  });
});
