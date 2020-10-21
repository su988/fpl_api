import React, {Fragment, useState, useEffect} from 'react'
import './Players.css';

const PlayerInfo = ({data, title}) => {
  const [gameWeek, setGameWeek] = useState(true)
  const [totalPoints, setTotalPoints] = useState(false)
  const [sortedData, setSortedData] = useState([])

  const gameweekOn = () => {
    setGameWeek(true);
    setTotalPoints(false);
    setSortedData(data.sort((a, b) => parseInt(b.event_points) - parseInt(a.event_points)))
  }

  const totalOn = () => {
    setGameWeek(false);
    setTotalPoints(true);    
    setSortedData(data.sort((a, b) => parseInt(b.total_points) - parseInt(a.total_points)))
  }

  const initialSort = () => {
    setSortedData(data.sort((a, b) => parseInt(b.event_points) - parseInt(a.event_points)))
  }

  useEffect(() => {
    initialSort();
  });

  return (
    <Fragment>
      <div className='player_info table_container'>
        
        <div className='player_info_buttons'>
          <h4>{title}</h4>
          <div>
            <button className={gameWeek ? 'on' : 'off'} onClick={gameweekOn}>
            GW
            </button>
            <button className={totalPoints ? 'on' : 'off'} onClick={totalOn}>
              Total
            </button>
          </div>
        </div>
        
        <table className='table w-75 m-auto '>
          <thead>
            <tr>
              <th width="300" >Name</th>
              <th>GW</th>
              <th>Total</th>
              <th>Price</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>CS</th>
              <></>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((player) => (
            <tr key={player.id}>
              <td>{`${player.first_name} ${player.last_name}`}</td>
              <td>{player.event_points}</td>
              <td>{player.total_points}</td>
              <td>£{player.now_cost}</td>
              <td>{player.goals_scored}</td>
              <td>{player.assists}</td>
              <td>{player.clean_sheets}</td>
            </tr>
            ))}
          </tbody>
        </table>

      </div>
    </Fragment>
  )
}

export default PlayerInfo
