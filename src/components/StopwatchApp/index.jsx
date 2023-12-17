import React, { useState, useEffect } from "react";
import "./style.css";
import Buttons from "../Buttons";
import TimeCounter from "../TimeCounter";
import { useOnKeyPress } from "../../hooks/useOnKeyPress";
import MsgEvent from "../MsgEvent";

export default function StopwatchApp({ setScoreTime }) {
  // State responsável pelo tempo
  const [timer, setTimer] = useState({
    milSecond: 0,
    seconds: 0,
    minute: 0,
  });

  const [intervalState, setIntervalState] = useState();
  const [running, setRunning] = useState(false);

  // Função principal de incremento no state tempo
  const increment = () => {
    setTimer((prevTimer) => {
      let { milSecond, seconds, minute } = prevTimer;

      if (milSecond >= 100) {
        seconds += 1;
        milSecond = 0;

        if (seconds >= 60) {
          minute += 1;
          seconds = 0;
        }
      }

      milSecond++;

      return {
        milSecond,
        seconds,
        minute,
      };
    });
  };

  // Funções controladoras dos eventos Onclick
  const handleStart = () => {
    setRunning(true);

    const intervalId = setInterval(() => {
      increment();
    }, 10);

    setIntervalState(intervalId);
  };

  const handleStop = () => {
    clearInterval(intervalState);
    setRunning(false);
    setScoreTime({
      ms: timer.milSecond,
      s: timer.seconds,
      m: timer.minute,
    });
  };

  const handleReset = () => {
    clearInterval(intervalState);
    setRunning(false);
    setTimer({
      milSecond: 0,
      seconds: 0,
      minute: 0,
    });
  };

  // Função que escuta a tecla space
  useOnKeyPress(handleStop, 32, running);
  useOnKeyPress(handleStart, 32, !running);

  return (
    <main className="mainContainer">
      {running && <MsgEvent />}
      <TimeCounter
        minute={timer.minute}
        seconds={timer.seconds}
        milSecond={timer.milSecond}
      />
      <Buttons
        start={handleStart}
        stop={handleStop}
        reset={handleReset}
        running={running}
      />
    </main>
  );
}
