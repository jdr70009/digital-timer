import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  const start = () => setRunning(true);

  const pause = () => setRunning(false);

  const stop = () => {
    setRunning(false);
    setSeconds(0);
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="container">
      <h1>📞 Digital clock Timer</h1>

      <div className="clock">
        {String(minutes).padStart(2, "0")}:
        {String(secs).padStart(2, "0")}
      </div>

      <div className="buttons">
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={stop}>Stop</button>
      </div>

      <p>
        Status: {running ? "clock Running" : "clock Paused"}
      </p>
    </div>
  );
}

export default App;