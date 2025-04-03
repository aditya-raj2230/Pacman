import React from "react";

interface Coin {
  x: number;
  y: number;
}

interface CoinsProps {
  coins: Coin[];
}

const Coins: React.FC<CoinsProps> = ({ coins }) => {
  return (
    <>
      {coins.map((coin, index) => (
        <div
          key={index}
          className="w-6 h-6 bg-yellow-400 rounded-full absolute"
          style={{ top: coin.y * 40, left: coin.x * 40 }}
        ></div>
      ))}
    </>
  );
};

export default Coins;