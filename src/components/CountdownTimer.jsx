import { useEffect, useState } from "react";
import './ui/fonts.css';

const CountdownTimer = ({ targetDate = "2025-04-07T00:00:00Z" }) => {
  if (!targetDate) {
    throw new Error("targetDate is required");
  }

  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (isNaN(difference) || difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-4 jura-font text-center text-white text-2xl font-bold">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="relative w-18 h-24 flex flex-col items-center">
          <div className="absolute inset-0 flex items-center justify-center transition-transform transform scale-0 opacity-0" key={value}>
            {value}
          </div>
          <div className="relative w-18 h-24 bg-green-800 rounded-lg flex items-center justify-center transition-transform transform scale-100 opacity-100 duration-300">
            {value}
          </div>
          <span className="text-sm mt-2">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
