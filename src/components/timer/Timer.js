import React, { useState, useRef } from 'react';

const Timer = () => {
  const [inputValue, setInputValue] = useState('');
  const [timerValue, setTimerValue] = useState('hh:mm:ss');
  const intervalId = useRef(null);

  const createTimerAnimator = () => {
    return (seconds) => {
      clearInterval(intervalId.current);

      const updateTime = () => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        setTimerValue(
          `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
        );

        if (seconds === 0) {
          clearInterval(intervalId.current);
        } else {
          seconds--;
        }
      };

      updateTime();
      intervalId.current = setInterval(updateTime, 1000);
    };
  };

  const animateTimer = createTimerAnimator();

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setInputValue(value);
  };

  const handleButtonClick = () => {
    const seconds = Number(inputValue);
    animateTimer(seconds);
    setInputValue('');
  };

  return (
    <div>
      <input placeholder="Seconds" type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Start</button>
      <br />
      <br />
      <span>{timerValue}</span>
    </div>
  );
};

export default Timer;
