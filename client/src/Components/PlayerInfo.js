import React, {Fragment, useState, useEffect} from 'react'

const PlayerInfo = ({data, title}) => {
  const [gameWeek, setGameWeek] = useState(false)
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
  }, []);

  return (
    <Fragment>
      <div>
        <h2>{title}</h2>
        <button className={gameWeek ? 'on' : 'off'} onClick={gameweekOn}>
          GameWeek
        </button>
        <button className={totalPoints ? 'on' : 'off'} onClick={totalOn}>
          Total
        </button>
        
        <table className='table w-75 m-auto '>
          <thead>
            <tr>
              <th>Name</th>
              <th>GW</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((player) => (
            <tr key={player.id}>
              <td>{`${player.first_name} ${player.last_name}`}</td>
              <td>{player.event_points}</td>
              <td>{player.total_points}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default PlayerInfo
