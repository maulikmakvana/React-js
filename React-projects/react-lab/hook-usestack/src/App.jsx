import "./App.css";
import { useState } from "react";

export default function Calculator() {
  const [number, setNumber] = useState(0);

  return (
    <div className="container">
      <div className="calculator-card">
        <h2 className="title">Modern Counter</h2>
        
        <div className="display">
          <span className="label">Result</span>
          <h1 className="number">{number}</h1>
        </div>

        <div className="button-grid">
          <button className="btn primary" onClick={() => setNumber(number + 1)}> +1 </button>
          <button className="btn primary" onClick={() => setNumber(number - 1)}> -1 </button>
          <button className="btn secondary" onClick={() => setNumber(number + 2)}> +2 </button>
          <button className="btn secondary" onClick={() => setNumber(number - 2)}> -2 </button>
        </div>
        
        <button className="btn reset" onClick={() => setNumber(number +10 )}> 10 + </button>
        <hr />
        <button className="btn reset" onClick={() => setNumber(0)}> Clear </button>
      </div>
    </div>
  );
}

