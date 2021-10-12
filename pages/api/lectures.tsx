// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const mockCategory = {
  id: 0,
  name: "프로그래밍",
};

const tags = [
  { id: 0, name: "펑생소장" },
  { id: 1, name: "AWS" },
  { id: 2, name: "DevOps" },
];

const lecturesData = {
  lectureList: [
    {
      id: 0,
      category: "programming",
      title: "초격자 패키지: 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영",
      tags: ["평생소장", "AWS", "DevOps"],
      description: "개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터!",
      thumb: "/thumb.jpg",
      isHot: true,
      isNew: true,
    },
  ],
};

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(lecturesData);
}
