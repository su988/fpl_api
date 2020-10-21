import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MiniLeague from './Components/MiniLeague';
import GameWeekWinners from './Components/GameWeekWinners';
import FetchManagerInfo from './Components/FetchManagerInfo';
import Players from './Components/Players';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='component_parent'>
        <div >
          <MiniLeague />
          <FetchManagerInfo />
          <GameWeekWinners />
        </div>
        <div>
          <Players />
        </div>
        
      </div>
      
    </div>

  );
}

export default App;
