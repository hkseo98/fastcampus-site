import React from "react";
import react, { useRef } from "react";
import useScrollSpy from "react-use-scrollspy";

const ScrollSpy = () => {
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

  const tabs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container">
      <nav className="navbar">
        {tabs.map((tab, index) => (
          <span
            key={index}
            onClick={() => {
              sectionRefs[index].current.scrollIntoView({
                block: "start",
                behavior: "smooth",
              });
            }}
            className={activeSection === index ? "menu_active" : "menu"}
          >
            {index + 1}
          </span>
        ))}
      </nav>

      <div className="contents">
        {tabs.map((tab, index) => {
          return (
            <div className={`content${tab}`} ref={sectionRefs[index]}>
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollSpy;
