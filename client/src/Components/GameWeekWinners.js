import React, {Fragment, useState, useEffect} from 'react';
import './GameWeekWinner.css';

const GameWeekWinners = () => {
  const [winners, setWinners] = useState([])
  
  const getWinners = async () => {
    try {
      const response = await fetch('http://localhost:5000/gw-winners');
      const jsonData = await response.json();

      setWinners(jsonData)
    } catch (err) {
        console.error(err.message)
    }
  }

  useEffect(() => {
    getWinners();
  }, []);
   
  return (
    <Fragment>
      <div className="gw_winners">
        <h4>Gameweek Winners</h4>
        <table className='table w-75 m-auto '>
          <thead>
            <tr>
              <th>#</th>
              <th>Manager</th>
              <th>Team</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {winners.map((manager) => (
            <tr key={manager.game_week}>
              <td>{manager.game_week}</td>
              <td>{manager.player_name}</td>
              <td>{manager.entry_name}</td>
              <td>{manager.event_total}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>    
  )
}

export default GameWeekWinners
