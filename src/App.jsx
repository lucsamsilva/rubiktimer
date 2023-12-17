import { useState } from "react";
import "./App.css";

import StopwatchApp from "./components/StopwatchApp";
import TimeKeeper from "./components/TimeKeeper";
import MsgEvent from "./components/MsgEvent";

function App() {
  // State responsável por armazenar os score.
  const [scoreTime, setScoreTime] = useState([]);

  const year = new Date().getFullYear();

  return (
    <>
      <div className="container">
        <MsgEvent text="press space to start !!" />
        <nav className="navBarContainer">
          <h1>rubix timer</h1>
        </nav>

        <StopwatchApp
          setScoreTime={(lastTime) =>
            setScoreTime([
              ...scoreTime,
              { ...lastTime, id: scoreTime.length + 1 },
            ])
          }
        />

        <TimeKeeper scoreTime={scoreTime} />
      </div>

      <footer>
        <div className="links">
          <a href="https://github.com/lucsamsilva" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/luccasmsilva/" target="_blank">
            LinkedIn
          </a>
        </div>
        <h6>CopyRight &copy; {year} </h6>
      </footer>
    </>
  );
}

export default App;
