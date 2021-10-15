import { useEffect, useState } from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/scrollSpying">
        <a className="menu">scrollSpying</a>
      </Link>
      <Link href="/scrollTop">
        <a className="menu">scrollTop</a>
      </Link>
    </div>
  );
};

export default Home;
