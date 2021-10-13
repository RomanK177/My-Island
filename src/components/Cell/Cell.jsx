import React from 'react';

import './Cell.scss';

// Pics
import land from '../../assets/imgs/land.jpg';
import water from '../../assets/imgs/water.jpg';

export const Cell = ({ cell, changeLand }) => {
  function mouseHandler(ev) {
    if (ev.type === 'click') {
      changeLand(cell.row, cell.col);
    }
    if (ev.type === 'mouseenter') {
      if (ev.buttons === 1) {
        changeLand(cell.row, cell.col);
      }
    }
    if (ev.type === 'mousedown') {
      changeLand(cell.row, cell.col);
    }
  }

  function preventDragHandler(e) {
    e.preventDefault();
  }
  return (
    <div
      onDragStart={preventDragHandler}
      onMouseEnter={mouseHandler}
      onMouseDown={mouseHandler}
      //   onClick={mouseHandler}
      className="cell"
    >
      <img src={cell.isLand ? land : water} alt="" />
    </div>
  );
};
