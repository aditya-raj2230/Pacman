import React from "react";

interface PlayerProps {
  position: {
    x: number;
    y: number;
  };
}

const Player: React.FC<PlayerProps> = ({ position }) => {
  return (
    <div
      className="w-8 h-8 bg-blue-500 absolute"
      style={{ top: position.y * 40, left: position.x * 40 }}
    ></div>
  );
};

export default Player;