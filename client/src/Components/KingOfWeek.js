import React, {Fragment, useEffect, useState} from 'react'

const KingOfWeek = () => {
  const [king, setKing] = useState([])

  const getKingOfWeek = async () => {
    try {
      const response = await fetch('http://localhost:5000/king');
      const jsonData = await response.json();
     
      // console.log(jsonData)
      setKing(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }
  
  useEffect(() => {
    getKingOfWeek();
  }, []);

  return (
    <Fragment>
      <div>
        <h2>King of the week</h2>
        {king.map((player) => (
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

export default KingOfWeek
