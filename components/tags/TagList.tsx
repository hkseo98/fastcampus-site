import React from "react";
import { Tag } from "../../interface/lecture";

interface Props {
  tagListData: [Tag];
}

const TagList = ({ tagListData }: Props): JSX.Element => {
  console.log(tagListData);
  const tagList = tagListData.map((tag) => {
    return <span>{tag + " "}</span>;
  });

  return <div>{tagList}</div>;
};

export default TagList;
