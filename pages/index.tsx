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
      <Link href="/stopwatch">
        <a className="menu">stopwatch</a>
      </Link>
      <Link href="/analogClock">
        <a className="menu">stopwatch</a>
      </Link>
      <Link href="/testRedux">
        <a className="menu">testRedux</a>
      </Link>
    </div>
  );
};

export default Home;
