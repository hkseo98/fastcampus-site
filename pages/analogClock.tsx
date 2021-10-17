import { useState, useEffect } from "react";
import styles from "../styles/analog.module.css";

const AnalogClock = () => {
  const [secDeg, setSecDeg] = useState(0);
  const [minDeg, setMinDeg] = useState(0);
  const [hourDeg, setHourDeg] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setSecDeg(seconds * 6);
      setMinDeg(minutes * 6 + seconds * 0.1);
      setHourDeg(hours * 30 + minutes * 0.5 + seconds * (0.5 / 120));
    }, 1000);
  }, []);
  return (
    <div>
      <h1
        style={{ display: "flex", justifyContent: "center", color: "#093c6a" }}
      >
        Analog Clock
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "320px",
            height: "320px",
            backgroundColor: "#5874cb",
            borderRadius: "180px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className={styles.clock}
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "#b5d0ef",
              borderRadius: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={styles.time}>|</div>
            <div className={styles.time} style={{ transform: "rotate(30deg)" }}>
              |
            </div>
            <div className={styles.time} style={{ transform: "rotate(60deg)" }}>
              |
            </div>
            <div className={styles.time} style={{ transform: "rotate(90deg)" }}>
              |
            </div>
            <div
              className={styles.time}
              style={{ transform: "rotate(120deg)" }}
            >
              |
            </div>
            <div
              className={styles.time}
              style={{ transform: "rotate(150deg)" }}
            >
              |
            </div>
            <div
              className={styles.time}
              style={{ transform: "rotate(180deg)" }}
            >
              |
            </div>
            <div
              className={styles.time}
              style={{ transform: "rotate(180deg)" }}
            >
              |
            </div>
            <div
              className={styles.time}
              style={{ transform: "rotate(210deg)" }}
            >
              |
            </div>
            <div
              className={styles.time}
              style={{ transform: "rotate(240deg)" }}
            >
              |
            </div>
            <div
              className={styles.time}
              style={{ transform: "rotate(270deg)" }}
            >
              |
            </div>
            <div
              className={styles.time}
              style={{ transform: "rotate(300deg)" }}
            >
              |
            </div>
            <div
              className={styles.time}
              style={{ transform: "rotate(330deg)" }}
            >
              |
            </div>

            <div
              style={{
                position: "absolute",
                top: "121px",
                height: "120px",
                width: "3px",
                backgroundColor: "#cf2828",
                border: "1px solid white",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                transformOrigin: "bottom",
                transform: `rotate(${secDeg}deg)`,
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                top: "130px",
                height: "110px",
                width: "5px",
                backgroundColor: "black",
                border: "1px solid white",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                transformOrigin: "bottom",
                transform: `rotate(${minDeg}deg)`,
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "150px",
                height: "90px",
                width: "7px",
                backgroundColor: "black",
                border: "1px solid white",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                transformOrigin: "bottom",
                transform: `rotate(${hourDeg}deg)`,
              }}
            ></div>
            <div className={styles.center}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalogClock;
