import { useState } from 'react';
import './App.css';
import Stopwatch from './pages/Stopwatch.jsx';

function App() {
  const [stopwatches, setStopwatches] = useState([Date.now()]);

  const addStopwatch = () => {
    setStopwatches((prev) =>
      prev.length < 5 ? [...prev, Date.now()] : prev
    );
  };

  return (
    <div className="app">
      <div className="stopwatch-list">
        {stopwatches.map((id) => (
          <Stopwatch key={id} />
        ))}
      </div>
      <div className="actions">
        <button
          className="round-btn remove-stopwatch-btn"
          type="button"
          onClick={() =>
            setStopwatches((prev) =>
              prev.length > 1 ? prev.slice(0, -1) : prev
            )
          }
          aria-label="Remove stopwatch"
          disabled={stopwatches.length <= 1}
        >
          -
        </button>
        <button
          className="round-btn add-stopwatch-btn"
          type="button"
          onClick={addStopwatch}
          aria-label="Add stopwatch"
          disabled={stopwatches.length >= 5}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
