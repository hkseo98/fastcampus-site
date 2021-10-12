import React from "react";
import LectureItem from "./LectureItem";
import { useQuery } from "react-query";
import useLectures from "hooks/useLectures";

const LectureList = (): JSX.Element => {
  const { isLoading, data } = useLectures();

  if (isLoading) {
    return <div>loading...</div>;
  }

  const lectureItems = data.lectureList.map((lecture: any) => {
    return <LectureItem key={lecture.id} lecture={lecture}></LectureItem>;
  });

  console.log(data);
  return lectureItems;
};

export default LectureList;
