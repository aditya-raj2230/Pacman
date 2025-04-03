import{ useEffect, useState } from "react";
interface TimerProps {
    startTime: number;
    onTimeUp: () => void;
  }
  
  const Timer: React.FC<TimerProps>= ({ startTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(startTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className="text-xl font-bold">Time: {timeLeft}s</div>;
};

export default Timer;
