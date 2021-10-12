import React from "react";
import LectureList from "./LectureList";

const LectureGroup = (): JSX.Element => {
  console.log("zzz");
  return (
    <div>
      <span>Best</span>
      <h2>이번 주 베스트 셀링 강의</h2>
      <LectureList></LectureList>
    </div>
  );
};

export default LectureGroup;
