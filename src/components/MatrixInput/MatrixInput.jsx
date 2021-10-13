import React, { useState } from 'react';
import './MatrixInput.scss';

export const MatrixInput = ({ onBuild }) => {
  const [state, setSize] = useState({ i: 0, j: 0 });
  const i = state.i;
  const j = state.j;

  function setI(ev) {
    let v = ev.target.value;
    setSize((prevState) => {
      return { ...prevState, i: v };
    });
  }
  function setJ(ev) {
    let v = ev.target.value;
    setSize((prevState) => {
      return { ...prevState, j: v };
    });
  }

  return (
    <div className="m-input">
      <input
        className="inputI"
        type="number"
        defaultValue={i}
        onChange={setI}
      />
      <input
        className="inputJ"
        type="number"
        defaultValue={j}
        onChange={setJ}
      />
      <button onClick={() => onBuild({ i, j })}>Build Island!</button>
    </div>
  );
};
