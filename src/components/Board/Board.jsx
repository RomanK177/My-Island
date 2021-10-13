import React from 'react';

import { Cell } from '../Cell/Cell';

import './MatrixBuild.scss';

export const Board = ({ board, changeLand }) => {
  return (
    <div className="matrix-build flex column align-center">
      {board.map((row, i) => (
        <div key={i} className="row flex">
          {row.map((cell, j) => (
            <Cell
              key={`Row: ${i} Column: ${j}`}
              cell={cell}
              changeLand={changeLand}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
