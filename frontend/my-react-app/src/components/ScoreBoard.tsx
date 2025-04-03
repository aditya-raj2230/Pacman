import React from "react";

interface ScoreboardProps {
  score: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score }) => {
  return <div className="text-xl font-bold">Score: {score}</div>;
};

export default Scoreboard;