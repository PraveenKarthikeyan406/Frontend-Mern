//Timer.js
import React, { useState, useEffect, useRef } from 'react';

function Timer({ session }) {
  const [duration, setDuration] = useState(session.duration);
  const [seconds, setSeconds] = useState(session.duration);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const audioRef = useRef(new Audio(require('./music.mp3')));

  useEffect(() => {
    const defaultDuration = session.duration;
    setDuration(defaultDuration);
    setSeconds(defaultDuration);
    setIsRunning(false);
    setIsPaused(false);
    clearInterval(intervalRef.current);
  }, [session]);

  const handleSliderChange = (e) => {
    const val = parseInt(e.target.value);
    setDuration(val);
    setSeconds(val);
  };

  const getSliderRange = () => {
    if (session.duration === 300) return { min: 60, max: 540 };
    if (session.duration === 600) return { min: 600, max: 840 };
    return { min: 900, max: 1800 };
  };

  const start = () => {
    if (isRunning) return;
    setIsRunning(true);
    setIsPaused(false);
    audioRef.current.play();
    intervalRef.current = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          audioRef.current.pause();
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    audioRef.current.pause();
    setIsRunning(false);
    setIsPaused(true);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setSeconds(duration);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsRunning(false);
    setIsPaused(false);
  };

  const format = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  const { min, max } = getSliderRange();

  return (
    <div className="timer">
      <h3>{session.title}</h3>
      <div className="countdown">{format(seconds)}</div>

      {!isRunning && (
        <div className="slider-container">
          <label>
            Adjust Duration: <strong>{Math.floor(duration / 60)} mins</strong>
          </label>
          <input
            type="range"
            min={min}
            max={max}
            step={60}
            value={duration}
            onChange={handleSliderChange}
            className="slider"
          />
        </div>
      )}

      {!isRunning && (
        <button className="btn-pro" onClick={start}>Start</button>
      )}
      {isRunning && (
        <button className="btn-pro pause-btn" onClick={pause}>Pause</button>
      )}
      <button className="btn-pro reset-btn" onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;
