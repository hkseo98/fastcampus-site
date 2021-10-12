import { useQuery } from "react-query";

const useLectures = () => {
  return useQuery("lecture_list", () =>
    fetch("/api/lectures").then((res) => res.json())
  );
};

export default useLectures;
