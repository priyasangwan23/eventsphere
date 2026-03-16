import React, { useState, useEffect } from 'react';
import { calculateTimeLeft, getUrgencyColor } from '../utils/dateUtils';

const CountdownTimer = ({ targetDate, size = "large" }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isExpired) {
    return (
      <div className="bg-gray-800/50 text-gray-500 px-4 py-2 rounded-xl font-bold uppercase text-xs tracking-widest border border-white/5">
        Event Started
      </div>
    );
  }

  const urgencyClass = getUrgencyColor(timeLeft.days);

  if (size === "small") {
    return (
      <div className={`px-2 py-1 rounded-lg font-bold text-[10px] uppercase tracking-tighter border ${urgencyClass} backdrop-blur-md`}>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      {Object.entries(timeLeft).filter(([key]) => key !== 'isExpired').map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black bg-gray-900/60 border border-white/10 backdrop-blur-xl shadow-2xl ${timeLeft.days < 1 ? 'text-red-500 border-red-500/20' : 'text-white'}`}>
            {value.toString().padStart(2, '0')}
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mt-2">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
