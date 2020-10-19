import React from 'react';
import './App.css';
import './Components/MiniLeague'
import MiniLeague from './Components/MiniLeague';
import KingOfWeek from './Components/KingOfWeek';
import HighestGameWeek from './Components/HighestGameWeek';

function App() {
  return (
    <div>
      <MiniLeague />
      <KingOfWeek />
      <HighestGameWeek />
    </div>

  );
}

export default App;
