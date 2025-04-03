import { useState } from "react";

const GameBoard: React.FC = () => {
  const [grid, setGrid] = useState<Array<Array<null>>>(Array(10).fill(Array(10).fill(null)));

  return (
    <div className="grid grid-cols-10 border border-gray-600 w-[400px] h-[400px]">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="w-10 h-10 bg-gray-200 border border-gray-500"
          ></div>
        ))
      )}
    </div>
  );
};

export default GameBoard;