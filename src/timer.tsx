import { PropsWithChildren, useEffect, useState } from 'react';
import { getTimerString } from './utils/get-timer-string';
import { playSound } from './utils/play-sound';

interface TimerProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export const Timer = ({
  hours,
  minutes,
  seconds,
}: PropsWithChildren<TimerProps>) => {
  const startDate = new Date();
  startDate.setHours(hours, minutes, seconds);
  const [timer, setTimer] = useState({
    date: startDate,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      timer.date.setSeconds(timer.date.getSeconds() - 1);
      setTimer({
        date: timer.date,
      });
      playSound();
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return <>{getTimerString(timer.date)}</>;
};
