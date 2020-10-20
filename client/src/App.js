import React from 'react';
import './App.css';
import './Components/MiniLeague'
import MiniLeague from './Components/MiniLeague';
import GameWeekWinners from './Components/GameWeekWinners';
import FetchManagerInfo from './Components/FetchManagerInfo';
import Players from './Components/Players';

function App() {
  return (
    <div>
      <MiniLeague />
      <FetchManagerInfo />
      <GameWeekWinners />
      <Players />
    </div>

  );
}

export default App;
