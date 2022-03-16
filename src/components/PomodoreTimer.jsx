import { useState, useEffect } from "react";
import "./pomodore.css";

export const PomodoreTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="cointainer">
      <h1 className="remember">Remember is healthy to take breaks</h1>
      <div className="timer-container">
        <div className="break-time">
          {!displayMessage ? (
            <h2>Time to work! New break starts in:</h2>
          ) : (
            <h2>Break time! New session starts in:</h2>
          )}
        </div>
        <div className="timer-div">
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
    </div>
  );
};
