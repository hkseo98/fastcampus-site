import React from "react";
import { Lecture } from "../../interface/lecture";
import TagList from "../tags/TagList";

interface Props {
  lecture: Lecture;
}

const LectureItem = ({ lecture }: Props): JSX.Element => {
  return (
    <div>
      <img src={lecture.thumb} alt="초격자 패키지"></img>
      <TagList tagListData={lecture.tags}></TagList>
      <h3>{lecture.title}</h3>
      <p>{lecture.description}</p>
    </div>
  );
};

export default LectureItem;
