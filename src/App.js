import './App.css';
import './assets/scss/global.scss';

import { useState } from 'react';
// Components
import { Header } from './components/Header/Header';
import { MatrixInput } from './components/MatrixInput/MatrixInput';
import { Board } from './components/Board/Board';

const { default: axios } = require('axios');

function App() {
  const [state, setState] = useState([]);

  function build({ i, j }) {
    let map = [];
    for (let indxRow = 0; indxRow < i; indxRow++) {
      let row = [];

      for (let indxCol = 0; indxCol < j; indxCol++) {
        row.push({
          row: indxRow,
          col: indxCol,
          isLand: false,
        });
      }
      map.push(row);
    }

    setState(map);
  }

  function changeLand(i, j) {
    let newState = [...state];
    newState[i][j].isLand = !newState[i][j].isLand;

    setState(newState);
  }

  async function testBackend() {
    await axios
      .post('http://localhost:5000/', state)
      .then(function (response) {
        console.log('return from backend', response.data);
      })
      .catch(function (error) {
        console.log('zcdsd', error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <div className="App">
      <Header />
      <MatrixInput onBuild={build} />
      <Board board={state} changeLand={changeLand} />
      <button onClick={testBackend}>Get Bigest Island</button>
    </div>
  );
}

export default App;
