import "./style.css";

export default function Buttons({ running, start, reset, stop }) {
  return (
    <div className="buttonsContainer">
      {!running && (
        <a onClick={start} className="btnStart">
          Start
        </a>
      )}

      {running && (
        <a onClick={stop} className="btnPause">
          Pause
        </a>
      )}

      <a onClick={reset} className="btnReset">
        Reset
      </a>
    </div>
  );
}
