import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import React from "react";
import react, { useState, useEffect, useRef } from "react";
import useScrollSpy from "react-use-scrollspy";

const Home: NextPage = () => {
  const [active, setActive] = useState(0);
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  let activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -500,
  });

  useEffect(() => {}, [activeSection]);

  const tabs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        {tabs.map((tab, index) => (
          <span
            key={index}
            onClick={() => {
              sectionRefs[index].current.scrollIntoView({
                block: "start",
                behavior: "smooth",
              });
            }}
            className={
              activeSection === index ? styles.menu_active : styles.menu
            }
          >
            {index + 1}
          </span>
        ))}
      </nav>

      <div className={styles.contents}>
        <div className={styles.content1} ref={sectionRefs[0]}>
          1
        </div>
        <div className={styles.content2} ref={sectionRefs[1]}>
          2
        </div>
        <div className={styles.content3} ref={sectionRefs[2]}>
          3
        </div>
        <div className={styles.content4} ref={sectionRefs[3]}>
          4
        </div>
        <div className={styles.content5} ref={sectionRefs[4]}>
          5
        </div>
        <div className={styles.content6} ref={sectionRefs[5]}>
          6
        </div>
        <div className={styles.content7} ref={sectionRefs[6]}>
          7
        </div>
        <div className={styles.content8} ref={sectionRefs[7]}>
          8
        </div>
        <div className={styles.content9} ref={sectionRefs[8]}>
          9
        </div>
        <div className={styles.content10} ref={sectionRefs[9]}>
          10
        </div>
      </div>
    </div>
  );
};

export default Home;
