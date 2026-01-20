import React, {useState, useEffect, useRef} from 'react';

function Stopwatch(){

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() =>{

    if(isRunning){
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      },10)
    }

    return () => {
      clearInterval(intervalIdRef.current);
    }

  }, [isRunning]);

  function start(){
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop(){
    setIsRunning(false);
  }

  function reset(){
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime(){
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60))
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor((elapsedTime / 1000) % 60)
      .toString()
      .padStart(2, '0');
    const milliseconds = Math.floor((elapsedTime % 1000) / 10)
      .toString()
      .padStart(2, '0');

    // return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className= "stopWatch">
      <div className= "display">
        {formatTime()}
      </div>
      <div className= "controls">
        <button onClick={start} className="control-btn start-btn"> Start </button>
        <button onClick={stop} className="control-btn stop-btn"> Stop </button>
        <button onClick={reset} className="control-btn reset-btn"> Reset </button>


      </div>
    </div>
  );

}

export default Stopwatch;
