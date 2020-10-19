import React, {Fragment, useState, useEffect} from 'react'

const HighestGameWeek = () => {
  const [manager, setManager] = useState([])
  
  const getManager = async () => {
    try {
      const response = await fetch('http://localhost:5000/highest-gw');
      const jsonData = await response.json();

      // console.log(jsonData)
      setManager(jsonData)
    } catch (err) {
        console.log(err.message)
    }
  }

  useEffect(() => {
    getManager();
  }, []);

  return (
    <Fragment>
      <div>
        <h2>Highest Game Week Score</h2>
        {manager.map((player) => (
          <ul key={player.id}>
            <li>{player.player_name}</li>  
            <li>{player.entry_name}</li>
            <li>{player.event_total}</li>
          </ul>
        ))}
      </div>
    </Fragment>
  )
}

export default HighestGameWeek;
