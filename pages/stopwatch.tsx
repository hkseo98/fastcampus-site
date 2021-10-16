import React, { useState, useEffect } from "react";
import styles from "../styles/stopwatch.module.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [records, setRecords] = useState([] as any);

  useEffect(() => {
    let interval: any;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
        console.log(interval);
      }, 10);
    } else {
      console.log(interval);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px",
          color: "orange",
          fontFamily: "Helvetica",
        }}
      >
        Stop Watch
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px",
        }}
      >
        <div
          style={{
            width: "160px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#958e8e",
            borderRadius: "5px",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              width: "120px",
              justifyContent: "left",
            }}
          >
            <span
              style={{
                fontSize: "30px",
                color: "#cfc8c8",
                fontFamily: "Helvetica",
              }}
            >
              {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span
              style={{
                fontFamily: "Helvetica",
                fontSize: "30px",
                color: "#cfc8c8",
              }}
            >
              {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
            </span>
            <span
              style={{
                fontFamily: "Helvetica",
                fontSize: "30px",
                color: "#cfc8c8",
              }}
            >
              {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{ margin: "5px", width: "60px" }}
          onClick={() => setTimerOn(!timerOn)}
        >
          {timerOn ? "Stop" : "Start"}
        </button>
        <button
          style={{ margin: "5px", width: "60px" }}
          onClick={() => {
            if (timerOn) {
              setRecords((old: any) => [
                ...old,
                ("0" + Math.floor((time / 60000) % 60)).slice(-2) +
                  ":" +
                  ("0" + Math.floor((time / 1000) % 60)).slice(-2) +
                  ":" +
                  ("0" + ((time / 10) % 100)).slice(-2),
              ]);
            } else {
              setTime(0);
              setRecords([]);
            }
          }}
        >
          {timerOn ? "Capture" : "Reset"}
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: "162px", display: "flex", justifyContent: "left" }}
        >
          <ul style={{ listStyleType: "none" }}>
            {records.map(
              (
                time:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined,
                index: any
              ) => (
                <div>
                  {" "}
                  <li key={index} style={{ fontSize: "20px", color: "grey" }}>
                    {time}
                  </li>
                  <hr></hr>
                </div>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
