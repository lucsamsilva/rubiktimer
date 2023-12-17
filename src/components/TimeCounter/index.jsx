import "./style.css";

export default function TimeCounter({ minute, seconds, milSecond }) {
  return (
    <div className="timeCounterContainer">
      <div className="counter">
        <div className="time">{minute < 10 ? "0" + minute : minute}</div>
        <div className="separator">:</div>
        <div className="time">{seconds < 10 ? "0" + seconds : seconds}</div>
        <div className="separator">:</div>
        <div className="time">
          {milSecond < 10 ? "0" + milSecond : milSecond}
        </div>
      </div>
    </div>
  );
}
